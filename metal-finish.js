import * as THREE from 'three';

// vgpu bakes these maps offline; the shipped scene still works without WebGPU.
export function applyMetalFinish(scene, renderer, onLoad) {
  const loader = new THREE.TextureLoader();
  const textures = ['roughness', 'normal'].map(kind => {
    const texture = loader.load(`/textures/metal-${kind}.png`, onLoad);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 3);
    texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
    return texture;
  });
  const materials = new Set();
  scene.traverse(object => {
    if (!object.isMesh) return;
    for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
      if (!material.isMeshStandardMaterial || material.metalness < .7 || materials.has(material)) continue;
      materials.add(material);
      const grey = (material.color.r + material.color.g + material.color.b) / 3;
      material.color.setRGB(grey, grey, grey);
      material.metalness = .96;
      material.roughness = material.roughness >= .45 ? .64 : .42;
      material.roughnessMap = textures[0];
      material.normalMap = textures[1];
      material.normalScale.set(.45, .45);
      material.needsUpdate = true;
    }
  });

  // Broad neutral reflection cards, not a visible room or a coloured sky.
  const studio = new THREE.Scene();
  studio.background = new THREE.Color(.035, .035, .035);
  const geometry = new THREE.PlaneGeometry(1, 1);
  for (const [position, size, intensity] of [
    [[-5, 4, 3], [5, 9], 5],
    [[7, 1, -2], [3, 8], 3],
    [[0, 8, 0], [9, 4], 4],
  ]) {
    const card = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: new THREE.Color(intensity, intensity, intensity), side: THREE.DoubleSide,
    }));
    card.position.fromArray(position);
    card.scale.set(size[0], size[1], 1);
    card.lookAt(0, 0, 0);
    studio.add(card);
  }
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(studio, .04);
  scene.environment = environment.texture;
  scene.environmentIntensity = .55;
  pmrem.dispose();
  geometry.dispose();
  studio.children.forEach(card => card.material.dispose());
  return () => {
    scene.environment = null;
    environment.dispose();
    textures.forEach(texture => texture.dispose());
  };
}
