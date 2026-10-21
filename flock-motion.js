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
  const neighbourhood = 32;
  const personalSpace = 12;

  function update(swarm) {
    for (let i = 0; i < swarm.length; i++) {
      headings[i].set(0, 0, 1).applyQuaternion(swarm[i].swim.rotation);
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
        if (distanceSq > neighbourhood * neighbourhood) continue;
        neighbours++;
        alignment.add(headings[j]);
        cohesion.add(offset);
        if (distanceSq < personalSpace * personalSpace) {
          const distance = Math.sqrt(distanceSq);
          if (distance > .0001) separation.addScaledVector(offset, -(1 - distance / personalSpace) / distance);
          else separation.x += i < j ? -1 : 1;
        }
      }
      const desired = directions[i].copy(headings[i]);
      if (neighbours) {
        desired.multiplyScalar(.65)
          .addScaledVector(alignment.normalize(), 1.1)
          .addScaledVector(cohesion.divideScalar(neighbours * neighbourhood), .75)
          .addScaledVector(separation.clampLength(0, 1), 2.8);
      }
      if (desired.lengthSq() < .000001) desired.copy(headings[i]);
      desired.normalize();
    }
  }

  return { update, directions };
}
