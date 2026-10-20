import * as THREE from 'three';

// Staging uses the initial view, never the orbit camera's changing transform.
export function createCameraPass(position, index, view, random = Math.random) {
  const target = new THREE.Vector3();
  let stage = 'roam';
  let nextAt = index === 2 ? 0 : (index - 2) * 24;
  let deadline = 0;

  function update(time) {
    if (stage === 'approach' && (position.distanceToSquared(target) < 4 || position.z > target.z || time > deadline)) {
      stage = 'retreat';
      // Portrait has room for a vertical return arc, not a wide horizontal U-turn.
      const side = random() < .5 ? -1 : 1;
      target.set(view.aspect < 1 ? target.x : side * 8, view.aspect < 1 ? side * 10 : (random() - .5) * 8, -12 - random() * 8);
      deadline = time + 65;
    } else if (stage === 'retreat' && (position.z < -5 || time > deadline)) {
      stage = 'roam';
      nextAt = time + 12 + random() * 16;
    }
    if (stage === 'roam' && time >= nextAt) {
      stage = 'approach';
      const z = view.aspect < 1 ? 17 : 20;
      const halfHeight = Math.tan(THREE.MathUtils.degToRad(25)) * (30 - z);
      target.set((random() - .5) * halfHeight * view.aspect * .6, (random() - .5) * halfHeight * .6, z);
      deadline = time + 75;
    }
    return stage === 'roam' ? null : target;
  }
  return { update };
}
