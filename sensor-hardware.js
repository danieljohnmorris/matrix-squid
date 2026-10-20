import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Native +Z is the tool's working axis. Mounts follow the simulated arm tips.
export function createSensorHardware(parent, materials, armCount) {
  const mounts = new Array(armCount).fill(null);
  const matrix = new THREE.Matrix4();
  const transform = new THREE.Object3D();
  const forward = new THREE.Vector3(0, 0, 1);
  const direction = new THREE.Vector3();
  const scanRotation = new THREE.Quaternion();
  const foldedRotation = new THREE.Quaternion();
  const scan = new THREE.Euler(0, 0, 0, 'YXZ');
  const dishMaterial = materials.chrome.clone();
  dishMaterial.color.setHex(0x34383a);
  dishMaterial.side = THREE.DoubleSide;
  dishMaterial.roughness = .48;

  const positions = [];
  const indices = [];
  for (let row = 0; row <= 6; row++) {
    const radius = .035 + row / 6 * .5;
    for (let column = 0; column <= 4; column++) {
      const angle = (column / 4 - .5) * Math.PI / 4 * .96;
      positions.push(radius * Math.cos(angle), radius * Math.sin(angle), radius * radius * .65);
      if (row < 6 && column < 4) {
        const n = row * 5 + column;
        indices.push(n, n + 5, n + 1, n + 1, n + 5, n + 6);
      }
    }
  }
  const petalGeometry = new THREE.BufferGeometry();
  petalGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  petalGeometry.setIndex(indices);
  petalGeometry.computeVertexNormals();

  function rod(a, b, radius) {
    const geometry = new THREE.CylinderGeometry(radius, radius, a.distanceTo(b), 6);
    direction.subVectors(b, a).normalize();
    transform.position.copy(a).add(b).multiplyScalar(.5);
    transform.quaternion.setFromUnitVectors(THREE.Object3D.DEFAULT_UP, direction);
    transform.scale.setScalar(1);
    transform.updateMatrix();
    return geometry.applyMatrix4(transform.matrix);
  }
  function merged(parts) {
    const geometry = mergeGeometries(parts);
    parts.forEach(part => part.dispose());
    return geometry;
  }
  const ribGeometry = merged([
    rod(new THREE.Vector3(.035, 0, 0), new THREE.Vector3(.535, 0, .186), .012),
    rod(new THREE.Vector3(.495, -.199, .186), new THREE.Vector3(.495, .199, .186), .012),
  ]);
  const feedGeometry = merged([
    rod(new THREE.Vector3(0, 0, -.08), new THREE.Vector3(0, 0, .4), .034),
    new THREE.SphereGeometry(.085, 10, 8).translate(0, 0, .4),
    new THREE.CylinderGeometry(.105, .085, .13, 10).rotateX(Math.PI / 2),
  ]);
  const probeGeometry = new THREE.CylinderGeometry(.012, .022, .42, 6).rotateX(Math.PI / 2).translate(0, 0, .21);
  const probeHubGeometry = new THREE.SphereGeometry(.075, 10, 8);

  for (const arm of [2, 6, 12]) {
    if (arm >= armCount) continue;
    const root = new THREE.Group();
    const dish = arm !== 2;
    root.name = dish ? 'Deployable dish receiver' : 'Deployable sensor probe';
    parent.add(root);
    const panels = new THREE.InstancedMesh(dish ? petalGeometry : probeGeometry, dish ? dishMaterial : materials.steel, dish ? 8 : 3);
    panels.name = dish ? 'Folding dish petals' : 'Folding probe antennae';
    panels.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    panels.frustumCulled = false;
    root.add(panels);
    let ribs = null;
    if (dish) {
      ribs = new THREE.InstancedMesh(ribGeometry, materials.steel, 8);
      ribs.name = 'Dish ribs';
      ribs.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      ribs.frustumCulled = false;
      root.add(ribs);
    }
    const feed = new THREE.Mesh(dish ? feedGeometry : probeHubGeometry, dish ? materials.chrome : materials.eyeMaterial);
    feed.name = dish ? 'Receiver feed' : 'Probe optic';
    root.add(feed);
    mounts[arm] = { root, panels, ribs, feed, dish };
  }

  function update(arm, tip, tangent, time, sensing) {
    const mount = mounts[arm];
    if (!mount) return;
    // Deploy late in braking and stow early in departure, never on a power stroke.
    const deployment = THREE.MathUtils.smoothstep(sensing, .3, .95);
    const { root, panels, ribs, feed, dish } = mount;
    root.position.copy(tip);
    foldedRotation.setFromUnitVectors(forward, tangent);
    scan.set(.2 * Math.sin(time * .63 + arm), .36 * Math.sin(time * .46 + arm * 1.7), 0);
    scanRotation.setFromEuler(scan);
    root.quaternion.copy(foldedRotation).slerp(scanRotation, deployment);
    root.userData.deployment = deployment;
    feed.position.z = dish ? -.24 * (1 - deployment) : .1 + deployment * .23;
    for (let petal = 0; petal < panels.count; petal++) {
      const angle = petal / panels.count * Math.PI * 2;
      transform.position.set(Math.cos(angle) * .04, Math.sin(angle) * .04, .03);
      transform.rotation.set(0, (dish ? -1.48 * (1 - deployment) : .72 * deployment), angle, 'ZYX');
      transform.scale.set(1, dish ? .12 + .88 * deployment : 1, 1);
      transform.updateMatrix();
      matrix.copy(transform.matrix);
      panels.setMatrixAt(petal, matrix);
      if (ribs) ribs.setMatrixAt(petal, matrix);
    }
    panels.instanceMatrix.needsUpdate = true;
    if (ribs) ribs.instanceMatrix.needsUpdate = true;
  }

  return { mounts, update };
}
