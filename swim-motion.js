import * as THREE from 'three';

const forward = new THREE.Vector3(0, 0, 1);
const axes = ['x', 'y', 'z'];
const desired = new THREE.Vector3();
const direction = new THREE.Vector3();
const targetRotation = new THREE.Quaternion();
const offset = new THREE.Vector3();
const avoid = new THREE.Vector3();
const side = new THREE.Vector3();
const a = new THREE.Vector3();
const b = new THREE.Vector3();
const r = new THREE.Vector3();
const separation = new THREE.Vector3();
const ownPoints = Array.from({ length: 4 }, () => new THREE.Vector3());
const otherPoints = ownPoints.map(() => new THREE.Vector3());

// Closest points on two finite trail segments, including parallel segments.
function segmentOffset(p0, p1, q0, q1, out) {
  a.subVectors(p1, p0);
  b.subVectors(q1, q0);
  r.subVectors(p0, q0);
  const aa = a.lengthSq();
  const bb = b.lengthSq();
  const ab = a.dot(b);
  const ar = a.dot(r);
  const br = b.dot(r);
  const denominator = aa * bb - ab * ab;
  let s = denominator > .000001 ? THREE.MathUtils.clamp((ab * br - ar * bb) / denominator, 0, 1) : 0;
  let t = bb > .000001 ? (ab * s + br) / bb : 0;
  if (t < 0) { t = 0; s = aa > .000001 ? THREE.MathUtils.clamp(-ar / aa, 0, 1) : 0; }
  else if (t > 1) { t = 1; s = aa > .000001 ? THREE.MathUtils.clamp((ab - ar) / aa, 0, 1) : 0; }
  return out.copy(r).addScaledVector(a, s).addScaledVector(b, -t);
}

function envelopeRadius(sentinel) {
  // A narrow swept trail while coasting; wider for the actual deployed pose.
  return 1.6 + 1.8 * (sentinel?.motion?.flare ?? 0) + 3.2 * (sentinel?.motion?.sensing ?? 0);
}
const spacing = .06;
const historySize = 256;
const defaultVolume = new THREE.Box3(new THREE.Vector3(-23, -15, -23), new THREE.Vector3(23, 15, 25));

export function createSwimMotion(position, random = Math.random, heading = null, volume = defaultVolume) {
  const rotation = new THREE.Quaternion();
  if (heading) rotation.setFromUnitVectors(forward, heading);
  else rotation.setFromAxisAngle(new THREE.Vector3(0, 1, 0), random() * Math.PI * 2);
  direction.copy(forward).applyQuaternion(rotation);
  const history = Array.from({ length: historySize }, (_, i) => position.clone().addScaledVector(direction, -i * spacing));
  const target = new THREE.Vector3();
  let newest = 0;
  let remaining = 0;

  function chooseTarget() {
    // Prefer a long traverse ahead, but allow a wide return turn near an edge.
    for (let attempt = 0; attempt < 16; attempt++) {
      target.set(
        THREE.MathUtils.lerp(volume.min.x, volume.max.x, random()),
        THREE.MathUtils.lerp(volume.min.y, volume.max.y, random()),
        THREE.MathUtils.lerp(volume.min.z, volume.max.z, random()),
      );
      offset.subVectors(target, position);
      if (offset.lengthSq() >= 196 && offset.dot(direction) > offset.length() * .15) break;
    }
    remaining = 20 + random() * 20;
  }

  function advance(dt, speed, neighbours = [], self = null, destination = null, steering = null, bounds = volume) {
    if (dt <= 0 || speed <= 0) return;
    direction.copy(forward).applyQuaternion(rotation);
    // Retire a destination before it becomes a point to circle around.
    if (!destination && !steering && (remaining <= 0 || position.distanceToSquared(target) < 100)) chooseTarget();
    if (steering) desired.copy(steering);
    else desired.subVectors(destination ?? target, position).normalize();
    // Staged passes have their own approach and retreat destinations. Applying
    // the roaming lookahead here would turn them away before they got close.
    if (!destination) {
      offset.copy(position).addScaledVector(direction, 12);
      for (const axis of axes) {
        if (offset[axis] < bounds.min[axis]) desired[axis] += Math.min(2, (bounds.min[axis] - offset[axis]) / 8);
        if (offset[axis] > bounds.max[axis]) desired[axis] -= Math.min(2, (offset[axis] - bounds.max[axis]) / 8);
      }
    }
    avoid.set(0, 0, 0);
    let travel = speed * dt;
    const ownRadius = envelopeRadius(self);
    // Boids already supplies neighbour separation. Applying swept-trail
    // avoidance as well breaks alignment and can brake the school to a halt.
    const clearanceRange = 12;
    if (!steering) for (let i = 0; i < ownPoints.length; i++) sample(i * 3.3, ownPoints[i]);
    let nearest = Infinity;
    if (!steering) for (const other of neighbours) {
      if (other === self) continue;
      const radius = ownRadius + envelopeRadius(other);
      // Reject distant pairs before comparing their curved trail capsules.
      if (position.distanceToSquared(other.group.position) > (radius + 26) ** 2) continue;
      for (let i = 0; i < otherPoints.length; i++) other.swim.sample(i * 3.3, otherPoints[i]);
      let distanceSq = Infinity;
      for (let i = 0; i < ownPoints.length - 1; i++) {
        for (let j = 0; j < otherPoints.length - 1; j++) {
          segmentOffset(ownPoints[i], ownPoints[i + 1], otherPoints[j], otherPoints[j + 1], separation);
          if (separation.lengthSq() < distanceSq) {
            distanceSq = separation.lengthSq();
            offset.copy(separation);
          }
        }
      }
      const distance = Math.sqrt(distanceSq);
      const clearance = distance - radius;
      nearest = Math.min(nearest, clearance);
      if (clearance >= clearanceRange) continue;
      if (distance > .0001) offset.divideScalar(distance);
      else offset.subVectors(position, other.group.position).normalize();
      const weight = THREE.MathUtils.clamp((clearanceRange - clearance) / clearanceRange, 0, 1);
      avoid.addScaledVector(offset, weight * weight * 4);
      if (bounds.max.x - bounds.min.x < bounds.max.y - bounds.min.y) side.set(0, -direction.z, direction.y);
      else side.set(direction.z, 0, -direction.x);
      if (side.lengthSq() < .01) side.set(1, 0, 0);
      avoid.addScaledVector(side.normalize(), weight * .6);
      // Reserve stopping distance only when moving into the other envelope.
      const closing = -offset.dot(direction);
      if (closing > .001) travel = Math.min(travel, Math.max(0, clearance - .05) / closing);
    }
    desired.add(avoid).normalize();
    targetRotation.setFromUnitVectors(direction, desired).multiply(rotation);
    // Curvature, not a fixed angular speed: slowing down cannot tighten a turn.
    // Inside an existing overlap, a slow escape yaw avoids a permanent deadlock.
    const turn = travel / (steering ? 4 : 8) + (nearest < 0 ? dt * .08 : 0);
    rotation.rotateTowards(targetRotation, turn);
    direction.copy(forward).applyQuaternion(rotation);
    position.addScaledVector(direction, travel);
    remaining -= travel;
    if (position.distanceToSquared(history[newest]) >= spacing * spacing) {
      newest = (newest + historySize - 1) % historySize;
      history[newest].copy(position);
    }
  }

  function sample(distance, out) {
    let previous = position;
    for (let i = 0; i < historySize; i++) {
      const next = history[(newest + i) % historySize];
      const length = previous.distanceTo(next);
      if (length > 0 && distance <= length) return out.copy(previous).lerp(next, distance / length);
      distance -= length;
      previous = next;
    }
    return out.copy(previous);
  }

  return { rotation, advance, sample };
}
