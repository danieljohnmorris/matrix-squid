import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createSwimMotion } from './swim-motion.js';
import { createSentinel } from './sentinel-model.js';
import { createCameraPass } from './camera-pass.js';
import { createFlockSteering } from './flock-motion.js';

function swimmer(x, z) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  return { group, motion: { flare: 0, sensing: 0 }, swim: createSwimMotion(group.position, () => 0) };
}

test('flocking separates close neighbours and steers toward more distant neighbours', () => {
  const flock = createFlockSteering(2);
  const swarm = [swimmer(0, 0), swimmer(5, 0)];
  for (const sentinel of swarm) sentinel.swim.rotation.identity();
  flock.update(swarm);
  assert.ok(flock.directions[0].x < 0);
  assert.ok(flock.directions[1].x > 0);

  swarm[1].group.position.x = 20;
  flock.update(swarm);
  assert.ok(flock.directions[0].x > 0);
  assert.ok(flock.directions[1].x < 0);

  swarm[1].group.position.x = 50;
  flock.update(swarm);
  assert.ok(flock.directions[0].x > 0, 'A distant straggler did not steer back toward the school');
});

test('flocking aligns headings and separates coincident swimmers without invalid steering', () => {
  const flock = createFlockSteering(2);
  const swarm = [swimmer(0, 0), swimmer(0, 20)];
  swarm[0].swim.rotation.identity();
  swarm[1].swim.rotation.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
  flock.update(swarm);
  assert.ok(flock.directions[0].x > .5, 'Neighbour heading did not influence steering');

  swarm[1].group.position.copy(swarm[0].group.position);
  swarm[1].swim.rotation.identity();
  flock.update(swarm);
  assert.ok(flock.directions[0].x < 0 && flock.directions[1].x > 0);
  for (const direction of flock.directions) assert.ok(Math.abs(direction.length() - 1) < 1e-9);
});

test('scattered swimmers form a moving school instead of avoiding each other’s trailing tentacles', () => {
  let seed = 17;
  const random = () => ((seed = (Math.imul(1664525, seed) + 1013904223) >>> 0) / 4294967296);
  const bounds = new THREE.Box3(new THREE.Vector3(-23, -15, -22), new THREE.Vector3(23, 15, 18));
  const swarm = Array.from({ length: 8 }, (_, i) => {
    const group = new THREE.Group();
    group.position.set((random() - .5) * 46, (random() - .5) * 30, random() * 40 - 22);
    const heading = new THREE.Vector3(i % 2 ? -.7 : .7, (i % 3 - 1) * .3, i % 3 === 1 ? .7 : -.7).normalize();
    return { group, motion: { flare: .5, sensing: 0 }, swim: createSwimMotion(group.position, random, heading, bounds) };
  });
  const flock = createFlockSteering(swarm.length);
  const center = new THREE.Vector3();
  const meanHeading = new THREE.Vector3();
  const heading = new THREE.Vector3();
  const previous = new THREE.Vector3();
  let travelled = 0;
  for (let frame = 0; frame < 3600; frame++) {
    flock.update(swarm, bounds);
    for (const [i, sentinel] of swarm.entries()) {
      previous.copy(sentinel.group.position);
      sentinel.swim.advance(1 / 30, 2, swarm, sentinel, null, flock.directions[i], bounds);
      travelled += previous.distanceTo(sentinel.group.position);
      assert.ok(bounds.distanceToPoint(sentinel.group.position) < 8, 'School escaped its roaming area');
    }
    if (frame < 900 || frame % 300) continue;
    center.set(0, 0, 0);
    meanHeading.set(0, 0, 0);
    for (const sentinel of swarm) {
      center.add(sentinel.group.position);
      meanHeading.add(heading.set(0, 0, 1).applyQuaternion(sentinel.swim.rotation));
    }
    center.divideScalar(swarm.length);
    const radius = Math.sqrt(swarm.reduce((sum, sentinel) => sum + sentinel.group.position.distanceToSquared(center), 0) / swarm.length);
    assert.ok(radius < 12, `School scattered to a radius of ${radius}`);
    assert.ok(meanHeading.length() / swarm.length > .7, 'School stopped swimming in a shared direction');
  }
  assert.ok(travelled / swarm.length > 200, 'Tentacle avoidance stalled the school');
});

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

test('free roaming turns back through its own depth volume without a boundary snap', () => {
  for (const [width, height, back, front] of [[18, 12, -7, 18], [11, 12, -7, 18], [48, 16, -38, -14]]) {
    let seed = 12;
    const random = () => ((seed = (Math.imul(1664525, seed) + 1013904223) >>> 0) / 4294967296);
    const volume = new THREE.Box3(new THREE.Vector3(-width, -height, back), new THREE.Vector3(width, height, front));
    const position = volume.getCenter(new THREE.Vector3());
    position.x = width - 1;
    const swim = createSwimMotion(position, random, new THREE.Vector3(1, 0, 0), volume);
    const visited = new THREE.Box3();
    const previous = new THREE.Vector3();
    const rotation = new THREE.Quaternion();
    for (let frame = 0; frame < 18000; frame++) {
      previous.copy(position);
      rotation.copy(swim.rotation);
      swim.advance(1 / 30, 1.4);
      const distance = previous.distanceTo(position);
      assert.ok(Math.abs(distance - 1.4 / 30) < 1e-9, 'Boundary teleported or stopped the swimmer');
      assert.ok(rotation.angleTo(swim.rotation) <= distance / 8 + 1e-7, 'Boundary snapped the heading');
      assert.ok(volume.distanceToPoint(position) < 8, 'Swimmer escaped beyond its return-turn radius');
      visited.expandByPoint(position);
    }
    assert.ok(visited.min.x < -width / 2, 'Swimmer never returned across its roaming area');
    assert.ok(visited.max.y - visited.min.y > height, 'Roaming collapsed to a horizontal track');
    assert.ok(visited.max.z - visited.min.z > (front - back) / 2, 'Roaming lost its assigned depth range');
  }
});

test('staged passes approach inside the portrait frame, depart and return without snapping', () => {
  for (const aspect of [390 / 844, 1440 / 900]) {
    let seed = 11;
    const random = () => ((seed = (Math.imul(1664525, seed) + 1013904223) >>> 0) / 4294967296);
    const position = new THREE.Vector3(0, -1, 6);
    const pass = createCameraPass(position, 2, { aspect }, random);
    const heading = pass.update(0).clone().sub(position).normalize();
    const swim = createSwimMotion(position, random, heading);
    const previous = position.clone();
    const rotation = swim.rotation.clone();
    const direction = new THREE.Vector3();
    let approaches = 0;
    let countedApproach = false;
    let departed = false;
    for (let frame = 0; frame < 10800; frame++) {
      previous.copy(position);
      rotation.copy(swim.rotation);
      swim.advance(1 / 30, .85, [], null, pass.update(frame / 30));
      const travelled = position.distanceTo(previous);
      assert.ok(Math.abs(travelled - .85 / 30) < 1e-9, 'Pass teleported or stalled');
      assert.ok(rotation.angleTo(swim.rotation) <= travelled / 8 + 1e-7, 'Pass snapped its heading');
      if (position.z < -5) {
        departed = true;
        countedApproach = false;
      }
      const halfHeight = Math.tan(THREE.MathUtils.degToRad(25)) * (30 - position.z);
      const visible = Math.abs(position.x) < halfHeight * aspect - .7 && Math.abs(position.y) < halfHeight - .7;
      if (!countedApproach && position.z > 12 && visible && direction.set(0, 0, 1).applyQuaternion(swim.rotation).z > .7) {
        approaches++;
        countedApproach = true;
      }
    }
    assert.ok(approaches >= 2 && departed, 'Pass did not depart and make another front-facing approach');
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
