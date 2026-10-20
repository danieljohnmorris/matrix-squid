import * as THREE from 'three';

const forward = new THREE.Vector3(0, 0, 1);
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

export function createSwimMotion(position, random = Math.random, heading = null) {
  const rotation = new THREE.Quaternion();
  if (heading) rotation.setFromUnitVectors(forward, heading);
  else rotation.setFromAxisAngle(new THREE.Vector3(0, 1, 0), random() * Math.PI * 2);
  direction.copy(forward).applyQuaternion(rotation);
  const history = Array.from({ length: historySize }, (_, i) => position.clone().addScaledVector(direction, -i * spacing));
  const target = new THREE.Vector3();
  let newest = 0;
  let remaining = 0;

  function chooseTarget() {
    target.set((random() * 2 - 1) * 23, (random() * 2 - 1) * 15, random() * 48 - 23);
    remaining = 18 + random() * 12;
  }

  function advance(dt, speed, neighbours = [], self = null) {
    if (dt <= 0 || speed <= 0) return;
    if (self?.guide) {
      target.copy(self.guide);
    } else {
      remaining -= dt;
      if (remaining <= 0 || position.distanceToSquared(target) < 2.25) chooseTarget();
      // Steer back into the volume rather than wrapping or teleporting at an edge.
      if (Math.abs(position.x) > 28 || Math.abs(position.y) > 20 || position.z < -28 || position.z > 25) target.set(0, 0, 0);
    }
    desired.subVectors(target, position).normalize();
    direction.copy(forward).applyQuaternion(rotation);
    avoid.set(0, 0, 0);
    let travel = speed * dt;
    const ownRadius = envelopeRadius(self);
    for (let i = 0; i < ownPoints.length; i++) sample(i * 2.3, ownPoints[i]);
    let nearest = Infinity;
    for (const other of neighbours) {
      if (other === self) continue;
      const radius = ownRadius + envelopeRadius(other);
      // Reject distant pairs before comparing their curved trail capsules.
      if (position.distanceToSquared(other.group.position) > (radius + 26) ** 2) continue;
      for (let i = 0; i < otherPoints.length; i++) other.swim.sample(i * 2.3, otherPoints[i]);
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
      if (clearance >= 12) continue;
      if (distance > .0001) offset.divideScalar(distance);
      else offset.subVectors(position, other.group.position).normalize();
      const weight = THREE.MathUtils.clamp((12 - clearance) / 12, 0, 1);
      avoid.addScaledVector(offset, weight * weight * 4);
      side.set(direction.z, 0, -direction.x);
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
    const turn = travel / 8 + (nearest < 0 ? dt * .08 : 0);
    rotation.rotateTowards(targetRotation, turn);
    direction.copy(forward).applyQuaternion(rotation);
    position.addScaledVector(direction, travel);
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
