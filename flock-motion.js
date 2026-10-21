import * as THREE from 'three';

// Snapshot every heading before any swimmer advances, so update order cannot
// make one squid follow a neighbour's next frame instead of its current one.
export function createFlockSteering(capacity) {
  const headings = Array.from({ length: capacity }, () => new THREE.Vector3());
  const directions = headings.map(() => new THREE.Vector3());
  const alignment = new THREE.Vector3();
  const cohesion = new THREE.Vector3();
  const separation = new THREE.Vector3();
  const offset = new THREE.Vector3();
  const center = new THREE.Vector3();
  const heading = new THREE.Vector3();
  const turn = new THREE.Vector3();
  const axes = ['x', 'y', 'z'];
  const neighbourhood = 32;
  const personalSpace = 8;

  function update(swarm, volume = null) {
    center.set(0, 0, 0);
    heading.set(0, 0, 0);
    for (let i = 0; i < swarm.length; i++) {
      headings[i].set(0, 0, 1).applyQuaternion(swarm[i].swim.rotation);
      center.add(swarm[i].group.position);
      heading.add(headings[i]);
    }
    turn.set(0, 0, 0);
    if (volume && swarm.length) {
      // Turn the school before its centre reaches an edge, rather than letting
      // each depth layer peel away in a different direction.
      center.divideScalar(swarm.length).addScaledVector(heading.normalize(), 12);
      const margin = Math.min(10, 4 + Math.cbrt(swarm.length));
      for (const axis of axes) {
        if (center[axis] < volume.min[axis] + margin) turn[axis] = (volume.min[axis] + margin - center[axis]) / 6;
        if (center[axis] > volume.max[axis] - margin) turn[axis] = (volume.max[axis] - margin - center[axis]) / 6;
      }
    }
    for (let i = 0; i < swarm.length; i++) {
      const position = swarm[i].group.position;
      alignment.set(0, 0, 0);
      cohesion.set(0, 0, 0);
      separation.set(0, 0, 0);
      let neighbours = 0;
      for (let j = 0; j < swarm.length; j++) {
        if (i === j) continue;
        offset.subVectors(swarm[j].group.position, position);
        const distanceSq = offset.lengthSq();
        cohesion.add(offset);
        if (distanceSq > neighbourhood * neighbourhood) continue;
        neighbours++;
        alignment.add(headings[j]);
        if (distanceSq < personalSpace * personalSpace) {
          const distance = Math.sqrt(distanceSq);
          if (distance > .0001) separation.addScaledVector(offset, -(1 - distance / personalSpace) / distance);
          else separation.x += i < j ? -1 : 1;
        }
      }
      const desired = directions[i].copy(headings[i]).multiplyScalar(.65).addScaledVector(turn, 3);
      if (neighbours) desired.addScaledVector(alignment.normalize(), 2.3);
      if (swarm.length > 1) {
        desired.addScaledVector(cohesion.divideScalar((swarm.length - 1) * 12).clampLength(0, 1), 1.5)
          .addScaledVector(separation.clampLength(0, 1), 2.8);
      }
      if (desired.lengthSq() < .000001) desired.copy(headings[i]);
      desired.normalize();
    }
  }

  return { update, directions };
}
