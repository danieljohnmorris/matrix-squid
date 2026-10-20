import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createSwimMotion } from './swim-motion.js';
import { createSentinel } from './sentinel-model.js';

function swimmer(x, z) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  return { group, motion: { flare: 0, sensing: 0 }, swim: createSwimMotion(group.position, () => 0) };
}

test('nearby parallel swimmers coast without a full-tail-radius braking deadlock', () => {
  const swarm = [swimmer(0, 0), swimmer(6, 1)];
  const previous = new THREE.Vector3();
  const travelled = [0, 0];
  for (let frame = 0; frame < 300; frame++) {
    for (const [i, sentinel] of swarm.entries()) {
      previous.copy(sentinel.group.position);
      sentinel.swim.advance(1 / 30, .85, swarm, sentinel);
      travelled[i] += previous.distanceTo(sentinel.group.position);
    }
  }
  for (const distance of travelled) assert.ok(distance > 8, `Coasting stalled after ${distance} units`);
});

test('slowing down does not tighten a swimming turn', () => {
  for (const speed of [.1, .85, 4]) {
    const sentinel = swimmer(0, 0);
    sentinel.guide = new THREE.Vector3(10, 0, -10);
    const previous = new THREE.Vector3();
    const rotation = new THREE.Quaternion();
    for (let frame = 0; frame < 120; frame++) {
      previous.copy(sentinel.group.position);
      rotation.copy(sentinel.swim.rotation);
      sentinel.swim.advance(1 / 30, speed, [], sentinel);
      const distance = previous.distanceTo(sentinel.group.position);
      assert.ok(rotation.angleTo(sentinel.swim.rotation) <= distance / 8 + 1e-7, 'Turn radius collapsed while slowing');
    }
  }
});

test('opening and contracting on a curved trail do not wind the tips around it', () => {
  const sentinel = createSentinel();
  sentinel.group.scale.setScalar(.65);
  const links = sentinel.group.getObjectByName('Arm vertebrae');
  const segments = links.count / sentinel.tentacleCount;
  const matrix = new THREE.Matrix4();
  const tip = new THREE.Vector3();
  const inverse = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  const angles = Array(sentinel.tentacleCount).fill(0);
  const previous = Array(sentinel.tentacleCount).fill(null);
  const minimum = Array(sentinel.tentacleCount).fill(Infinity);
  const maximum = Array(sentinel.tentacleCount).fill(-Infinity);
  const smooth = (a, b, t) => THREE.MathUtils.smoothstep(t, a, b);
  let heading = 0;
  for (let frame = 0; frame <= 1800; frame++) {
    const time = frame / 60;
    const speed = .85 + 2 * smooth(23.8, 25, time) * (1 - smooth(25, 27, time));
    heading += speed / 60 / 8;
    sentinel.group.position.set(8 * Math.cos(heading), 0, 8 * Math.sin(heading));
    sentinel.group.quaternion.setFromAxisAngle(up, -heading);
    inverse.copy(sentinel.group.quaternion).invert();
    sentinel.motion.spine.forEach((point, j) => {
      const angle = heading - sentinel.motion.spineDistances[j] * .65 / 8;
      point.set(8 * Math.cos(angle), 0, 8 * Math.sin(angle))
        .sub(sentinel.group.position).applyQuaternion(inverse).divideScalar(.65);
    });
    sentinel.motion.flare = smooth(20, 23, time) * (1 - smooth(23, 25, time));
    sentinel.update(time, 0, 0);
    for (let arm = 0; arm < sentinel.tentacleCount; arm++) {
      links.getMatrixAt(arm * segments + segments - 1, matrix);
      tip.setFromMatrixPosition(matrix).applyMatrix4(sentinel.group.matrixWorld);
      // Radial angle about the circular swimming trail, not the turning head.
      const angle = Math.atan2(tip.y, Math.hypot(tip.x, tip.z) - 8);
      if (previous[arm] !== null) {
        angles[arm] += Math.atan2(Math.sin(angle - previous[arm]), Math.cos(angle - previous[arm]));
      }
      previous[arm] = angle;
      if (time >= 19) {
        minimum[arm] = Math.min(minimum[arm], angles[arm]);
        maximum[arm] = Math.max(maximum[arm], angles[arm]);
      }
    }
  }
  for (let arm = 0; arm < sentinel.tentacleCount; arm++) {
    assert.ok(maximum[arm] - minimum[arm] < Math.PI / 2, `Arm ${arm} wound around the trail during a pose change`);
  }
});

test('the central red lens remains exposed through its optical housing', () => {
  const sentinel = createSentinel();
  sentinel.group.updateMatrixWorld(true);
  const lensCenter = new THREE.Vector3(0, -.04, 1.28);
  for (const position of [[0, 0, 5], [2, .5, 5], [-2, .5, 5]]) {
    const origin = new THREE.Vector3(...position);
    const ray = new THREE.Raycaster(origin, lensCenter.clone().sub(origin).normalize());
    const [hit] = ray.intersectObject(sentinel.group, true);
    const material = hit?.object.material;
    assert.ok(
      material?.emissive?.r > .5 && material.emissive.g < .1 && material.emissiveIntensity > 0,
      `The red lens is occluded from ${position}`,
    );
  }
});

for (const pose of ['sensing', 'flare']) {
  test(`${pose} tips lag a head turn, then settle without detaching`, () => {
    const moving = createSentinel();
    const reference = createSentinel();
    for (const sentinel of [moving, reference]) sentinel.motion[pose] = 1;
    const links = moving.group.getObjectByName('Arm vertebrae');
    const referenceLinks = reference.group.getObjectByName('Arm vertebrae');
    const segments = links.count / moving.tentacleCount;
    const axis = new THREE.Vector3(0, 1, 0);
    const matrix = new THREE.Matrix4();
    const actual = new THREE.Vector3();
    const base = new THREE.Vector3();
    const rigid = new THREE.Vector3();
    let turnFollowing = 0;
    let settlingError = 0;
    for (let frame = 0; frame <= 600; frame++) {
      const time = frame / 60;
      moving.group.quaternion.setFromAxisAngle(axis, THREE.MathUtils.smoothstep(time, 5, 5.65) * .85);
      moving.update(time, 0, 0);
      reference.update(time, 0, 0);
      if (frame !== 339 && frame !== 600) continue;
      let moved = 0;
      let rigidMovement = 0;
      for (let arm = 0; arm < moving.tentacleCount; arm++) {
        const tipIndex = (arm + 1) * segments - 1;
        links.getMatrixAt(tipIndex, matrix);
        actual.setFromMatrixPosition(matrix).applyMatrix4(moving.group.matrixWorld);
        referenceLinks.getMatrixAt(tipIndex, matrix);
        base.setFromMatrixPosition(matrix);
        rigid.copy(base).applyQuaternion(moving.group.quaternion);
        moved += actual.distanceTo(base);
        rigidMovement += rigid.distanceTo(base);
        if (frame === 600) settlingError += actual.distanceTo(rigid);
      }
      if (frame === 339) turnFollowing = moved / rigidMovement;
    }
    assert.ok(turnFollowing < .35, `Tips followed ${turnFollowing} of the head turn instead of retaining inertia`);
    assert.ok(settlingError / moving.tentacleCount < .02, 'Tips did not settle behind the new heading');
  });
}
