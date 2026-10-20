import * as THREE from 'three';

export function createAtmosphere(scene) {
  // Distance removes light; the background haze must not paint distant metal grey.
  scene.fog = new THREE.FogExp2(0x000000, .021);
  const uniforms = {
    time: { value: 0 },
    haze: { value: new THREE.Color(0x242424) },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
    vertexShader: `
      varying vec3 direction;
      void main() {
        direction = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 haze;
      varying vec3 direction;
      float hash(vec2 p) {
        vec3 q = fract(vec3(p.xyx) * .1031);
        q += dot(q, q.yzx + 33.33);
        return fract((q.x + q.y) * q.z);
      }
      float noise(vec2 p) {
        vec2 cell = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(cell), hash(cell + vec2(1, 0)), f.x),
          mix(hash(cell + vec2(0, 1)), hash(cell + vec2(1, 1)), f.x), f.y);
      }
      void main() {
        vec3 ray = normalize(direction);
        // Broad, slow layers rather than particles or a screen-space grey overlay.
        float drift = time * .012;
        vec2 p = vec2(ray.x + ray.z * .6, ray.y - ray.z * .4) * 5.0;
        float layers = .65 * noise(p + vec2(drift, -drift * .7))
          + .35 * noise(p * 2.3 + vec2(-drift * .6, drift));
        float veil = smoothstep(.2, .8, layers);
        gl_FragColor = vec4(haze * mix(.25, .85, veil), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(90, 24, 16), material);
  sky.name = 'Monochrome atmospheric haze';
  sky.renderOrder = -1000;
  sky.frustumCulled = false;
  scene.add(sky);
  // Geometry and material are released by the scene's existing disposal pass.
  return {
    update(time, camera) {
      uniforms.time.value = time;
      sky.position.copy(camera.position);
    },
  };
}
