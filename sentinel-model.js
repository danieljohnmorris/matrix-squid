import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { createSensorHardware } from './sensor-hardware.js';

// One self-contained y-up specimen, facing +Z. All procedural resources belong
// to this root; animation only transforms preallocated meshes and instances.
export function createSentinel() {
  const group = new THREE.Group();
  group.name = 'Sentinel';
  const rig = new THREE.Group();
  group.add(rig);
  const chrome = new THREE.MeshStandardMaterial({ color: 0x62686a, metalness: 0.84, roughness: 0.4 });
  const armor = new THREE.MeshStandardMaterial({ color: 0x454b4d, metalness: 0.76, roughness: 0.48 });
  const steel = new THREE.MeshStandardMaterial({ color: 0x989c9d, metalness: 0.86, roughness: 0.36 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x101112, metalness: 0.2, roughness: 0.72 });
  const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x84070c, emissive: 0xff160c, emissiveIntensity: 1.6, metalness: 0.35, roughness: 0.2 });
  const glintMaterial = new THREE.MeshBasicMaterial({ color: 0xffa397 });
  const sphere = new THREE.SphereGeometry(1, 16, 12);
  const boltGeometry = new THREE.CylinderGeometry(1, 1, 1, 6);
  const tubeGeometry = new THREE.CylinderGeometry(0.86, 1, 1, 10);
  const ringGeometry = new THREE.TorusGeometry(1, 0.11, 6, 20);
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const scratch = new THREE.Object3D();
  const start = new THREE.Vector3();
  const end = new THREE.Vector3();
  const direction = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  const forward = new THREE.Vector3(0, 0, 1);
  const normal = new THREE.Vector3();

  function mesh(geometry, material, parent = rig) {
    const result = new THREE.Mesh(geometry, material);
    parent.add(result);
    return result;
  }

  function strut(a, b, radius, material = chrome) {
    const result = mesh(tubeGeometry, material);
    direction.subVectors(b, a);
    result.position.copy(a).addScaledVector(direction, .5);
    result.scale.set(radius, direction.length(), radius);
    result.quaternion.setFromUnitVectors(up, direction.normalize());
    return result;
  }

  // Broad cranial casting, not an axially stretched capsule. The forehead stays
  // wide until it rolls down into the optics; the rear tucks around the sockets.
  const profile = new THREE.CatmullRomCurve3([
    new THREE.Vector3(.06, .08, -1.52),
    new THREE.Vector3(.74, .48, -1.36),
    new THREE.Vector3(1.10, .68, -.98),
    new THREE.Vector3(1.23, .76, -.35),
    new THREE.Vector3(1.22, .73, .22),
    new THREE.Vector3(1.05, .62, .70),
    new THREE.Vector3(.68, .43, 1.05),
    new THREE.Vector3(.03, .04, 1.22),
  ]);
  const section = new THREE.Vector3();
  function hullPoint(u, angle, target, lift = 0) {
    profile.getPoint(u, section);
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    const crown = Math.max(0, s);
    const shoulder = 1 + .055 * Math.cos(angle * 4);
    const ridge = .055 * Math.exp(-((c / .22) ** 2)) * crown * Math.sin(u * Math.PI);
    return target.set(c * (section.x * shoulder + lift),
      .06 + s * (section.y * (s < 0 ? .76 : 1) + lift) + ridge, section.z);
  }

  function plate(u0, u1, angle0, angle1, material, lift = 0) {
    const positions = [];
    const uv = [];
    const indices = [];
    const rows = 32;
    const columns = Math.max(12, Math.ceil((angle1 - angle0) * 12));
    const stride = columns + 1;
    const layerSize = (rows + 1) * stride;
    for (let layer = 0; layer < 2; layer++) {
      for (let row = 0; row <= rows; row++) {
        for (let column = 0; column <= columns; column++) {
          const r = row / rows;
          const c = column / columns;
          const bevel = .028 * THREE.MathUtils.smoothstep(Math.min(r, 1 - r, c, 1 - c), 0, .09);
          hullPoint(THREE.MathUtils.lerp(u0, u1, r), THREE.MathUtils.lerp(angle0, angle1, c), start, lift + (layer ? -.035 : bevel));
          positions.push(start.x, start.y, start.z);
          uv.push(c, r);
          if (row < rows && column < columns) {
            const n = layer * layerSize + row * stride + column;
            if (layer) indices.push(n, n + stride, n + 1, n + 1, n + stride, n + stride + 1);
            else indices.push(n, n + 1, n + stride, n + 1, n + stride + 1, n + stride);
          }
        }
      }
    }
    // Close the bevelled edges so side and rear views never reveal paper plates.
    const edge = [];
    for (let c = 0; c <= columns; c++) edge.push(c);
    for (let r = 1; r <= rows; r++) edge.push(r * stride + columns);
    for (let c = columns - 1; c >= 0; c--) edge.push(rows * stride + c);
    for (let r = rows - 1; r > 0; r--) edge.push(r * stride);
    for (let i = 0; i < edge.length; i++) {
      const a = edge[i];
      const b = edge[(i + 1) % edge.length];
      indices.push(a, a + layerSize, b, b, a + layerSize, b + layerSize);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return mesh(geometry, material);
  }

  function pipe(points, radius, material = chrome) {
    return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 24, radius, 6, false), material);
  }
  // Each optical brow is its own tapered casting, with a raised shoulder
  // running back into the crown rather than a lens stuck onto the nose.
  function casting(sections, material = chrome) {
    const centres = new THREE.CatmullRomCurve3(sections.map(([x, y, z]) => new THREE.Vector3(x, y, z)));
    const radii = new THREE.CatmullRomCurve3(sections.map(([, , , x, y]) => new THREE.Vector3(x, y, 0)));
    const centre = new THREE.Vector3();
    const radius = new THREE.Vector3();
    const positions = [];
    const uv = [];
    const indices = [];
    const rows = 36;
    const columns = 24;
    for (let row = 0; row <= rows; row++) {
      centres.getPoint(row / rows, centre);
      radii.getPoint(row / rows, radius);
      for (let column = 0; column <= columns; column++) {
        const angle = column / columns * Math.PI * 2;
        positions.push(centre.x + Math.cos(angle) * Math.max(0, radius.x),
          centre.y + Math.sin(angle) * Math.max(0, radius.y), centre.z);
        uv.push(column / columns, row / rows);
        if (row < rows && column < columns) {
          const n = row * (columns + 1) + column;
          indices.push(n, n + 1, n + columns + 1, n + 1, n + columns + 2, n + columns + 1);
        }
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return mesh(geometry, material);
  }

  function vent(side, angle, halfAngle, u0, u1) {
    const centre = (u0 + u1) / 2;
    const halfLength = (u1 - u0) / 2;
    const outline = [];
    const positions = [];
    const uv = [];
    const indices = [];
    const onShell = (u, a) => hullPoint(u, side === 1 ? a : Math.PI - a, new THREE.Vector3(), .06);
    const middle = onShell(centre, angle);
    positions.push(middle.x, middle.y, middle.z);
    uv.push(.5, .5);
    for (let j = 0; j <= 48; j++) {
      const a = j / 48 * Math.PI * 2;
      const point = onShell(centre + Math.cos(a) * halfLength, angle + Math.sin(a) * halfAngle);
      positions.push(point.x, point.y, point.z);
      uv.push(.5 + .5 * Math.cos(a), .5 + .5 * Math.sin(a));
      outline.push(point);
      if (j < 48) indices.push(0, side === 1 ? j + 2 : j + 1, side === 1 ? j + 1 : j + 2);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    mesh(geometry, rubber);
    pipe(outline, .035);
    for (let rib = 0; rib < 11; rib++) {
      const v = -.9 + rib * .18;
      const width = halfAngle * Math.sqrt(1 - v * v);
      const points = [];
      for (let j = 0; j <= 8; j++) {
        const a = angle + (j / 4 - 1) * width;
        points.push(hullPoint(centre + v * halfLength, side === 1 ? a : Math.PI - a,
          new THREE.Vector3(), .095));
      }
      pipe(points, .034, chrome);
    }
  }

  plate(.015, .995, 0, Math.PI * 2, rubber, -.035);
  plate(.065, .985, -.7, Math.PI + .7, armor);
  plate(.12, .92, Math.PI + .72, Math.PI * 2 - .72, chrome);
  // One broad dorsal shield and two offset shoulder plates replace eight
  // identical orange-peel strips, which made the previous head read as a pod.
  plate(.16, .88, 1.04, 2.10, chrome, .055);
  for (const side of [-1, 1]) {
    const a0 = side === 1 ? .65 : Math.PI - 1.01;
    const a1 = side === 1 ? 1.01 : Math.PI - .65;
    plate(.14, .87, a0, a1, chrome, .035);
    for (const u of [.25, .48, .72]) {
      hullPoint(u, side === 1 ? 1.1 : Math.PI - 1.1, start, .09);
      const bolt = mesh(boltGeometry, steel);
      bolt.position.copy(start);
      normal.set(start.x * .45, 1, .1).normalize();
      bolt.quaternion.setFromUnitVectors(up, normal);
      bolt.scale.set(.023, .016, .023);
    }
    casting([
      [side * .52, .55, -1.14, 0, 0],
      [side * .66, .69, -.86, .18, .15],
      [side * .70, .76, -.35, .24, .20],
      [side * .66, .76, .24, .25, .21],
      [side * .58, .52, .85, .22, .23],
      [side * .56, .43, 1.12, .17, .18],
      [side * .56, .43, 1.19, 0, 0],
    ]);
    casting([
      [side * .84, .04, -.99, 0, 0],
      [side * 1.06, .06, -.66, .24, .33],
      [side * 1.18, .04, -.12, .27, .35],
      [side * 1.15, -.02, .40, .27, .32],
      [side * 1.04, -.06, .87, .21, .22],
      [side * 1.00, -.06, 1.02, 0, 0],
    ], armor);
    vent(side, .12, .29, .17, .71);
    vent(side, .69, .13, .18, .65);
    const mandible = mesh(sphere, chrome);
    mandible.position.set(side * .40, -.47, .90);
    mandible.scale.set(.34, .19, .35);
    mandible.rotation.y = side * -.3;
    strut(start.set(side * .52, -.48, .98), end.set(side * .24, -.64, 1.18), .055, steel);
  }
  for (let i = 0; i < 8; i++) {
    const rib = mesh(boxGeometry, chrome);
    rib.position.set(0, -.42, -.82 + i * .2);
    rib.scale.set(.72 - i * .035, .12, .085);
  }
  const mouth = mesh(sphere, rubber);
  mouth.position.set(0, -.43, .77);
  mouth.scale.set(.24, .16, .31);
  for (let i = 0; i < 6; i++) {
    const x = (i - 2.5) * .075;
    strut(start.set(x, -.48, .91), end.set(x * .7, -.58, 1.1), .019, steel);
  }

  // Staggered optics sit in the brow and cheek castings, not on a flat disc.
  const eyes = [
    [0, -.04, 1.28, .215], [0, -.47, 1.16, .085],
  ];
  for (const side of [-1, 1]) {
    eyes.push(
      [side * 1.04, -.06, .99, .155],
      [side * .56, .43, 1.17, .135],
      [side * .34, -.34, 1.22, .105],
      [side * .74, -.28, 1.09, .083],
      [side * .65, .86, .63, .088],
      [side * .39, .16, 1.24, .079],
      [side * .68, 1.00, -.03, .066],
      [side * .62, .95, -.55, .055],
      [side * .18, .36, 1.21, .055],
      [side * .49, -.51, 1.11, .052],
    );
  }
  for (const [x, y, z, radius] of eyes) {
    const mount = new THREE.Group();
    mount.position.set(x, y, z);
    normal.set(x * .32, (y + .02) * .40, 1).normalize();
    mount.quaternion.setFromUnitVectors(forward, normal);
    rig.add(mount);
    const fairing = mesh(sphere, armor, mount);
    fairing.position.z = -radius * .9;
    fairing.scale.set(radius * 1.47, radius * 1.44, radius * 1.4);
    const housing = mesh(tubeGeometry, chrome, mount);
    housing.rotation.x = Math.PI / 2;
    housing.scale.set(radius * 1.30, radius * 1.15, radius * 1.30);
    const socket = mesh(sphere, rubber, mount);
    socket.scale.set(radius * 1.12, radius * 1.12, radius * .22);
    socket.position.z = radius * .55;
    const shoulder = mesh(ringGeometry, chrome, mount);
    shoulder.scale.setScalar(radius * 1.32);
    shoulder.position.z = radius * .18;
    const rim = mesh(ringGeometry, steel, mount);
    rim.scale.setScalar(radius * 1.05);
    rim.position.z = radius * .74;
    const lens = mesh(sphere, eyeMaterial, mount);
    lens.scale.set(radius * .62, radius * .62, radius * .16);
    lens.position.z = radius * .74;
    const glint = mesh(sphere, glintMaterial, mount);
    glint.scale.set(radius * .09, radius * .05, radius * .025);
    glint.position.set(-radius * .20, radius * .19, radius * .89);
  }

  const tentacleCount = 15;
  const segments = 56;
  const lengths = new Float32Array([8.5, 7.4, 8.8, 6.75, 8.25, 7.8, 8.6, 7.1, 8.4, 7.5, 8.05, 7, 8.4, 7.6, 8.3]);
  const longestTentacle = Math.max(...lengths);
  const phases = Float32Array.from({ length: tentacleCount }, (_, i) => i * 2.39996);
  const angles = Float32Array.from({ length: tentacleCount }, (_, i) => i / tentacleCount * Math.PI * 2 + .16 + .07 * Math.sin(i * 3.1));
  const roots = Array.from({ length: tentacleCount }, (_, i) => {
    const inner = i >= 10;
    const angle = (inner ? (i - 10) / 5 : i / 10) * Math.PI * 2 + (inner ? .32 : .12);
    angles[i] = angle;
    const root = new THREE.Vector3(Math.cos(angle) * (inner ? .33 : .69), Math.sin(angle) * (inner ? .23 : .46) + .03, -1.46 - (inner ? .17 : .06 * Math.cos(angle * 2)));
    const socket = mesh(sphere, armor);
    socket.position.copy(root);
    socket.position.z += .16;
    socket.scale.set(.22, .20, .34);
    const cuff = mesh(tubeGeometry, chrome);
    cuff.position.copy(root);
    cuff.rotation.x = Math.PI / 2;
    cuff.scale.set(.185, .27, .185);
    for (let ring = 0; ring < 3; ring++) {
      const lip = mesh(ringGeometry, steel);
      lip.position.copy(root);
      lip.position.z += .04 + ring * .065;
      lip.scale.setScalar(.185 + ring * .006);
    }
    return root;
  });

  // Batch the rigid head by material; its mechanical detail adds no per-frame work.
  rig.updateMatrixWorld(true);
  const batches = new Map();
  const sourceGeometry = new Set();
  rig.traverse(object => {
    if (!object.isMesh) return;
    if (!batches.has(object.material)) batches.set(object.material, []);
    batches.get(object.material).push(object.geometry.clone().applyMatrix4(object.matrixWorld));
    sourceGeometry.add(object.geometry);
  });
  rig.clear();
  for (const [material, geometries] of batches) {
    const head = mesh(mergeGeometries(geometries), material);
    head.name = 'Sentinel carapace';
    geometries.forEach(geometry => geometry.dispose());
  }
  sourceGeometry.forEach(geometry => {
    if (geometry !== sphere && geometry !== tubeGeometry) geometry.dispose();
  });

  const spineDistances = Float32Array.from({ length: segments + 1 }, (_, j) => 1.55 + j / segments * longestTentacle);
  const total = tentacleCount * segments;
  function instances(geometry, material, count) {
    const result = new THREE.InstancedMesh(geometry, material, count);
    result.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    result.castShadow = true;
    result.receiveShadow = true;
    // The articulated rig can extend beyond its initial pose's bounds.
    result.frustumCulled = false;
    rig.add(result);
    return result;
  }
  const links = instances(tubeGeometry, chrome, total);
  links.name = 'Arm vertebrae';
  const jointGeometry = new THREE.SphereGeometry(1, 8, 6);
  const joints = instances(jointGeometry, rubber, total + tentacleCount);
  const cuffs = instances(tubeGeometry, steel, total);
  // Small recessed red windows, separated by unlit mechanical vertebrae.
  const lightParts = Array.from({ length: 3 }, (_, i) =>
    new THREE.CylinderGeometry(1, 1, 1, 6, 1, true, i * Math.PI * 2 / 3, Math.PI * .45));
  const runningLightGeometry = mergeGeometries(lightParts);
  lightParts.forEach(geometry => geometry.dispose());
  const lightsPerArm = Math.ceil(segments / 3);
  const runningLights = instances(runningLightGeometry, new THREE.MeshStandardMaterial({
    color: 0x8c0803, emissive: 0xff1906, emissiveIntensity: 2.2, roughness: .35,
  }), tentacleCount * lightsPerArm);
  runningLights.name = 'Tentacle running lights';
  const cables = instances(tubeGeometry, rubber, total * 2);
  const clawGeometry = new THREE.CylinderGeometry(.55, 1, 1, 4);
  const claws = instances(clawGeometry, steel, tentacleCount * 6);
  claws.name = 'Articulated grippers';
  const jointCaps = instances(jointGeometry, steel, total * 2);
  // Keep the jaw manipulators out of the rigid carapace batch.
  const armCount = 6;
  const upperArms = instances(tubeGeometry, chrome, armCount);
  upperArms.name = 'Jaw upper arms';
  const forearms = instances(tubeGeometry, steel, armCount * 3);
  forearms.name = 'Jaw forearms and pincers';
  const armJoints = instances(jointGeometry, steel, armCount * 3);
  armJoints.name = 'Jaw joints';
  const armRoot = new THREE.Vector3();
  const armElbow = new THREE.Vector3();
  const armWrist = new THREE.Vector3();
  const armTip = new THREE.Vector3();
  const forearmDirection = new THREE.Vector3();
  const wristRotation = new THREE.Quaternion();
  const sensors = createSensorHardware(rig, { chrome, steel, eyeMaterial }, tentacleCount);
  const motion = {
    spine: Array.from(spineDistances, distance => new THREE.Vector3(0, 0, -distance)),
    spineDistances,
    flare: 0,
    sensing: 0,
  };
  const spinePoint = new THREE.Vector3();
  const trailTangent = new THREE.Vector3();
  const trailRotation = new THREE.Quaternion();
  const backward = new THREE.Vector3(0, 0, -1);
  const radialOffset = new THREE.Vector3();
  const strokeShape = new Float32Array(segments + 1);

  function point(index, t, time, target) {
    const phase = phases[index];
    const angle = angles[index];
    const wave = time * (.7 + .04 * (index % 3)) - t * 5 + phase;
    const sweep = angle + Math.sin(wave) * t * .23;
    const sensing = motion.sensing;
    const power = strokeShape[Math.round(t * segments)] * (1 - sensing);
    const attachment = THREE.MathUtils.smoothstep(t, 0, .18);
    const spread = .62 + Math.sin(t * Math.PI) * (.4 + .24 * Math.sin(phase)) + t * t * (.3 + .28 * Math.cos(phase));
    const bend = 2.25 + .1 * Math.sin(phase);
    const powerRadius = .62 + lengths[index] / bend * Math.sin(t * bend);
    const along = THREE.MathUtils.lerp(t * lengths[index], lengths[index] / bend * (1 - Math.cos(t * bend)), power);
    const trailIndex = along / longestTentacle * segments;
    const previous = Math.min(segments - 1, Math.floor(trailIndex));
    spinePoint.copy(motion.spine[previous]).lerp(motion.spine[previous + 1], trailIndex - previous);
    trailTangent.subVectors(motion.spine[previous + 1], motion.spine[previous]);
    if (trailTangent.lengthSq() < .000001) trailTangent.copy(backward);
    else trailTangent.normalize();
    trailRotation.setFromUnitVectors(backward, trailTangent);

    // Both swimming poses deform the same transported trail. Never exchange a
    // curved world-space tail for a straight body-space bell (or back again).
    const radial = THREE.MathUtils.lerp(spread, powerRadius, power);
    radialOffset.set(Math.cos(sweep) * radial, Math.sin(sweep) * radial * (.5 / .62), 0).applyQuaternion(trailRotation);
    target.set(0, 0, roots[index].z).lerp(spinePoint, attachment).add(radialOffset);
    target.x += Math.sin(wave) * t * t * .17 * (1 - power);
    target.y += Math.cos(wave * .83) * t * t * .14;
    target.z += Math.max(0, Math.sin(phase)) * t * t * t * .55 * (1 - power);

    const senseRadius = .62 + lengths[index] * (.64 * Math.sin(t * Math.PI * (.67 + .13 * Math.sin(phase))) + .12 * Math.sin(t * Math.PI * 2 + phase) * Math.sin(t * Math.PI) ** 2);
    radialOffset.set(
      Math.cos(sweep) * senseRadius,
      Math.sin(sweep) * senseRadius * (.5 / .62),
      roots[index].z - Math.sin(t * Math.PI) * (.8 + .4 * Math.cos(phase)) + t * t * (1.15 + .65 * Math.sin(phase)),
    );
    target.lerp(radialOffset, sensing);
    // Blend each irregular socket into the shared trail without moving its root.
    const rootBlend = 1 - THREE.MathUtils.smoothstep(t, 0, .18);
    target.x += (roots[index].x - Math.cos(angle) * .62) * rootBlend;
    target.y += (roots[index].y - Math.sin(angle) * .5) * rootBlend;
    if (t === 0) target.copy(roots[index]);
  }

  function placeLink(target, index, a, b, radius, lengthScale = 1) {
    direction.subVectors(b, a);
    const length = direction.length();
    scratch.position.copy(a).addScaledVector(direction, 0.5);
    direction.multiplyScalar(1 / Math.max(length, 0.00001));
    scratch.quaternion.setFromUnitVectors(up, direction);
    scratch.scale.set(radius, length * lengthScale, radius);
    scratch.updateMatrix();
    target.setMatrixAt(index, scratch.matrix);
  }

  function placeBall(target, index, position, radius) {
    scratch.position.copy(position);
    scratch.quaternion.identity();
    scratch.scale.setScalar(radius);
    scratch.updateMatrix();
    target.setMatrixAt(index, scratch.matrix);
  }

  const cableStart = new THREE.Vector3();
  const cableEnd = new THREE.Vector3();
  const lateral = new THREE.Vector3();
  const clawMiddle = new THREE.Vector3();
  const clawTip = new THREE.Vector3();
  const clawRotation = new THREE.Quaternion();
  const clawAxis = new THREE.Vector3(0, 0, -1);
  const particles = Array.from({ length: tentacleCount * (segments + 1) }, () => new THREE.Vector3());
  const velocities = particles.map(() => new THREE.Vector3());
  const goals = particles.map(() => new THREE.Vector3());
  const coastStiffness = Float32Array.from({ length: segments + 1 }, (_, j) => 6 + 59 * (1 - j / segments) ** 2);
  const senseStiffness = Float32Array.from({ length: segments + 1 }, (_, j) => 4 + 61 * (1 - j / segments) ** 3);
  const stiffness = new Float32Array(segments + 1);
  const drag = new Float32Array(segments + 1);
  const inverseWorld = new THREE.Matrix4();
  const delta = new THREE.Vector3();
  let previousTime;
  function simulate(time) {
    group.updateWorldMatrix(true, false);
    const dt = previousTime === undefined ? 0 : Math.min(.05, Math.max(0, time - previousTime));
    const initialize = previousTime === undefined;
    previousTime = time;
    const steps = Math.max(1, Math.ceil(dt / (1 / 120)));
    const h = dt / steps;
    for (let j = 0; j <= segments; j++) {
      // The stroke travels down the arm. Tips finish the previous movement
      // instead of switching pose in lockstep with the roots.
      const response = 1 - Math.exp(-dt / (.12 + .9 * j / segments));
      strokeShape[j] = initialize ? motion.flare : THREE.MathUtils.lerp(strokeShape[j], motion.flare, response);
      stiffness[j] = THREE.MathUtils.lerp(coastStiffness[j], senseStiffness[j], motion.sensing);
      drag[j] = Math.exp(-2 * Math.sqrt(stiffness[j]) * h);
    }
    // The target and body transform are constant over this frame's substeps.
    for (let i = 0; i < tentacleCount; i++) {
      for (let j = 0; j <= segments; j++) {
        const goal = goals[i * (segments + 1) + j];
        point(i, j / segments, time, goal);
        goal.applyMatrix4(group.matrixWorld);
      }
    }
    for (let step = 0; step < steps; step++) {
      for (let i = 0; i < tentacleCount; i++) {
        // More vertebrae must not increase the arm's total allowed stretch.
        const maxLength = lengths[i] / segments * group.scale.x;
        for (let j = 0; j <= segments; j++) {
          const k = i * (segments + 1) + j;
          const goal = goals[k];
          if (initialize || j === 0) {
            particles[k].copy(goal);
            velocities[k].set(0, 0, 0);
            continue;
          }
          // Soft distal springs preserve flow during thrust and head scans;
          // only the root is fixed, and particles never reset between poses.
          delta.subVectors(goal, particles[k]);
          velocities[k].addScaledVector(delta, stiffness[j] * h);
          velocities[k].multiplyScalar(drag[j]);
          particles[k].addScaledVector(velocities[k], h);
          delta.subVectors(particles[k], particles[k - 1]);
          const length = delta.length();
          if (length > maxLength) {
            delta.multiplyScalar(1 / length);
            particles[k].copy(particles[k - 1]).addScaledVector(delta, maxLength);
            const outward = velocities[k].dot(delta);
            if (outward > 0) velocities[k].addScaledVector(delta, -outward);
          }
        }
      }
    }
  }
  function updateManipulators(time) {
    for (let i = 0; i < armCount; i++) {
      const side = i % 2 ? 1 : -1;
      const pair = Math.floor(i / 2);
      const phase = i * 1.7;
      const hanging = THREE.MathUtils.smoothstep(Math.sin(time * .23 + pair * .8), -.55, .55);
      const shoulder = THREE.MathUtils.lerp(.65, .22, hanging) + .12 * Math.sin(time * .85 + phase);
      const yaw = .45 + .13 * Math.sin(time * .54 + phase);
      const upperLength = .7 + pair * .07;
      armRoot.set(side * .42, -.42, .38 - pair * .36);
      armElbow.set(
        side * Math.sin(shoulder) * Math.cos(yaw),
        -Math.cos(shoulder),
        Math.sin(shoulder) * Math.sin(yaw),
      ).multiplyScalar(upperLength).add(armRoot);

      const wristYaw = side * (-.32 + .2 * Math.sin(time * .72 + phase + .6));
      const wristPitch = THREE.MathUtils.lerp(-.16, -1.23, hanging) + .13 * Math.cos(time * .92 + phase);
      forearmDirection.set(
        Math.sin(wristYaw) * Math.cos(wristPitch),
        Math.sin(wristPitch),
        Math.cos(wristYaw) * Math.cos(wristPitch),
      );
      armWrist.copy(armElbow).addScaledVector(forearmDirection, .66 + pair * .04);
      placeLink(upperArms, i, armRoot, armElbow, .07);
      placeLink(forearms, i * 3, armElbow, armWrist, .045);
      placeBall(armJoints, i * 3, armRoot, .075);
      placeBall(armJoints, i * 3 + 1, armElbow, .09);
      placeBall(armJoints, i * 3 + 2, armWrist, .045);

      wristRotation.setFromUnitVectors(forward, forearmDirection);
      const opening = .055 + .02 * Math.sin(time * 1.1 + phase);
      for (let prong = 0; prong < 2; prong++) {
        armTip.set((prong ? 1 : -1) * opening, -.04, .2)
          .applyQuaternion(wristRotation).add(armWrist);
        placeLink(forearms, i * 3 + 1 + prong, armWrist, armTip, .017);
      }
    }
    upperArms.instanceMatrix.needsUpdate = true;
    forearms.instanceMatrix.needsUpdate = true;
    armJoints.instanceMatrix.needsUpdate = true;
  }
  function update(timeSeconds, alertAmount, signalAmount) {
    const alert = Math.min(1, Math.max(0, alertAmount));
    const signal = Math.min(1, Math.max(0, signalAmount));
    eyeMaterial.emissiveIntensity = 1.4 + alert * .9 + signal * 4.5;
    simulate(timeSeconds);
    inverseWorld.copy(group.matrixWorld).invert();
    updateManipulators(timeSeconds);
    for (let i = 0; i < tentacleCount; i += 1) {
      start.copy(particles[i * (segments + 1)]).applyMatrix4(inverseWorld);
      for (let j = 0; j < segments; j += 1) {
        const index = i * segments + j;
        const t = (j + 1) / segments;
        const radius = (.17 + .014 * Math.sin(phases[i])) * (1 - t * .56);
        end.copy(particles[i * (segments + 1) + j + 1]).applyMatrix4(inverseWorld);
        placeLink(links, index, start, end, radius, .83);
        placeLink(cuffs, index, start, end, radius * 1.08, .21);
        lateral.set(radius * .86, 0, 0).applyQuaternion(scratch.quaternion);
        if (j % 3 === 1) {
          scratch.position.copy(start).lerp(end, .78);
          scratch.scale.set(radius * .97, start.distanceTo(end) * .24, radius * .97);
          scratch.updateMatrix();
          runningLights.setMatrixAt(i * lightsPerArm + Math.floor(j / 3), scratch.matrix);
        }
        placeBall(joints, index, start, radius * .82);
        for (let side = 0; side < 2; side++) {
          const sign = side === 0 ? -1 : 1;
          cableStart.copy(start).addScaledVector(lateral, sign);
          cableEnd.copy(end).addScaledVector(lateral, sign);
          placeLink(cables, index * 2 + side, cableStart, cableEnd, radius * .16);
          placeBall(jointCaps, index * 2 + side, cableStart, radius * .3);
        }
        start.copy(end);
      }
      placeBall(joints, total + i, end, .073);
      clawMiddle.copy(particles[i * (segments + 1) + segments - 1]).applyMatrix4(inverseWorld);
      delta.subVectors(end, clawMiddle).normalize();
      clawRotation.setFromUnitVectors(clawAxis, delta);
      sensors.update(i, end, delta, timeSeconds, motion.sensing);
      for (let prong = 0; prong < 3; prong += 1) {
        const angle = prong * Math.PI * 2 / 3 + phases[i];
        const deployment = sensors.mounts[i]?.root.userData.deployment ?? 0;
        const opening = .07 + motion.sensing * .1 + deployment * .42;
        const knuckleRadius = .21 + deployment * .3;
        clawMiddle.set(Math.cos(angle) * knuckleRadius, Math.sin(angle) * knuckleRadius, -.22).applyQuaternion(clawRotation).add(end);
        clawTip.set(Math.cos(angle) * opening, Math.sin(angle) * opening, -.48).applyQuaternion(clawRotation).add(end);
        placeLink(claws, i * 6 + prong * 2, end, clawMiddle, .075);
        placeLink(claws, i * 6 + prong * 2 + 1, clawMiddle, clawTip, .05);
      }
    }
    links.instanceMatrix.needsUpdate = true;
    joints.instanceMatrix.needsUpdate = true;
    cuffs.instanceMatrix.needsUpdate = true;
    runningLights.instanceMatrix.needsUpdate = true;
    cables.instanceMatrix.needsUpdate = true;
    claws.instanceMatrix.needsUpdate = true;
    jointCaps.instanceMatrix.needsUpdate = true;
  }
  update(0, 0, 0);
  previousTime = undefined;
  return { group, update, tentacleCount, motion };
}
