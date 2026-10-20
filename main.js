import * as THREE from "three";
import { createSentinel } from "./sentinel-model.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { createSwimMotion } from "./swim-motion.js";
import { applyMetalFinish } from "./metal-finish.js";
const fullscreen = document.getElementById("fullscreen");
fullscreen.hidden = !document.fullscreenEnabled;
fullscreen.addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch {
    document.getElementById("status").textContent = "Fullscreen is unavailable in this browser.";
  }
});
document.addEventListener("fullscreenchange", () => {
  const active = !!document.fullscreenElement;
  const label = active ? "Exit fullscreen" : "Fullscreen";
  fullscreen.setAttribute("aria-label", label);
  fullscreen.title = label;
  fullscreen.setAttribute("aria-pressed", String(active));
});
function mountSentinels() {
  const host = document.getElementById("sentinel-background");
  const button = document.getElementById("sentinel-motion");
  if (!host || !button || host.dataset.mounted)
    return;
  host.dataset.mounted = "true";
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
  } catch {
    document.getElementById("status").textContent = "WebGL is unavailable. Enable hardware acceleration, then reload.";
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .85;
  host.append(renderer.domElement);
  const scene = new THREE.Scene;
  scene.background = new THREE.Color(0x101010);
  scene.fog = new THREE.FogExp2(0x101010, 0.016);
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 150);
  camera.position.z = 30;
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 8;
  controls.maxDistance = 75;
  controls.enablePan = false;
  controls.addEventListener("change", () => renderer.render(scene, camera));
  scene.add(new THREE.HemisphereLight(0xffffff, 0x202020, .35));
  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(-5, 8, 12);
  scene.add(light);
  const rim = new THREE.DirectionalLight(0xffffff, 1.2);
  rim.position.set(8, -3, -5);
  scene.add(rim);
  // World-space passes, not a point to orbit or a camera-attached formation.
  // Staggered near swimmers take turns approaching; one stays in the haze.
  const narrow = window.innerWidth / window.innerHeight < 1;
  const nearRoute = new THREE.CatmullRomCurve3(Array.from({ length: 8 }, (_, i) => {
    const angle = i * Math.PI / 4;
    const x = Math.sin(angle) * 9;
    const y = Math.sin(angle * 2) * 2;
    const z = 9 + Math.cos(angle) * 11;
    return narrow ? new THREE.Vector3(y * .7, x * .85, z - 6) : new THREE.Vector3(x, y, z);
  }), true);
  const farRoute = new THREE.CatmullRomCurve3([
    [-12, 6, -24], [-3, 9, -16], [11, 5, -20],
    [12, -6, -30], [-2, -9, -35], [-14, -2, -33],
  ].map(([x, y, z]) => new THREE.Vector3(narrow ? x * .45 : x, y, z)), true);
  const routeSamples = new Map([nearRoute, farRoute].map(route => [route, route.getSpacedPoints(128)]));
  const firstForeground = window.innerWidth < 640 ? 1 : 2;
  const foregroundCount = window.innerWidth < 640 ? 2 : 3;
  const swarm = Array.from({ length: window.innerWidth < 640 ? 3 : 5 }, (_, i) => {
    const sentinel = createSentinel();
    sentinel.group.scale.setScalar(0.65);
    scene.add(sentinel.group);
    const foreground = i >= firstForeground;
    sentinel.group.position.set(i % 2 === 0 ? -9 : 9, (i % 3 - 1) * 8, -16 + i * 8);
    const route = foreground ? nearRoute : i === 0 ? farRoute : null;
    const guide = route ? new THREE.Vector3() : null;
    const progress = foreground ? (.85 + (i - firstForeground) / foregroundCount) % 1 : .1;
    const routeLength = route?.getLength() ?? 0;
    if (route) {
      route.getPointAt(progress, sentinel.group.position);
      route.getPointAt((progress + 9 / routeLength) % 1, guide);
    }
    const heading = route ? route.getTangentAt(progress) : null;
    return { ...sentinel, guide, route, routeLength, swim: createSwimMotion(sentinel.group.position, Math.random, heading) };
  });
  const disposeMetalFinish = applyMetalFinish(scene, renderer, () => renderer.render(scene, camera));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  let paused = reduced.matches;
  let elapsed = 0;
  let last = 0;
  let frame = 0;
  const inverse = new THREE.Quaternion;
  const scan = new THREE.Quaternion;
  const gaze = new THREE.Euler(0, 0, 0, "YXZ");
  const gazeTargets = [[0, 0], [-0.85, 0.2], [0.65, -0.35], [1.05, 0.12], [-0.4, -0.45], [0, 0]];
  let drawnTime = 0;
  const smooth = (a, b, value) => THREE.MathUtils.smoothstep(value, a, b);
  function draw() {
    const dt = elapsed - drawnTime;
    drawnTime = elapsed;
    swarm.forEach((sentinel, i) => {
      const cycle = (elapsed + i * 19.6) % 98;
      const stroke = cycle % 30;
      const contraction = smooth(26, 28, stroke);
      const flare = smooth(22.8, 26, stroke) * (1 - contraction) * (1 - smooth(90, 92, cycle));
      const sensing = smooth(90.5, 92, cycle) * (1 - smooth(96, 98, cycle));
      const braking = 1 - smooth(90, 92, cycle);
      const departing = smooth(96, 98, cycle);
      const surge = 3.4 * smooth(26.8, 28.2, stroke) * Math.exp(-Math.max(0, stroke - 28.2) * .95) * (1 - smooth(29, 30, stroke));
      const sinceRelease = (cycle + 2) % 98;
      const releaseSurge = 3.4 * smooth(0, 1.4, sinceRelease) * Math.exp(-Math.max(0, sinceRelease - 1.4) * .95) * (1 - smooth(6, 8, sinceRelease));
      const speed = (0.85 + surge) * (braking + departing) + releaseSurge;
      if (sentinel.route) {
        // Rejoin ahead of the nearest point after avoidance, rather than
        // circling a missed waypoint. Steering still owns position and heading.
        const samples = routeSamples.get(sentinel.route);
        let nearest = 0;
        let distance = Infinity;
        for (let j = 0; j < 128; j++) {
          const candidate = sentinel.group.position.distanceToSquared(samples[j]);
          if (candidate < distance) { distance = candidate; nearest = j; }
        }
        sentinel.route.getPointAt((nearest / 128 + 9 / sentinel.routeLength) % 1, sentinel.guide);
      }
      sentinel.swim.advance(dt, speed, swarm, sentinel);
      const scanTime = Math.max(0, Math.min(3.999, cycle - 92));
      const gazeIndex = Math.min(4, Math.floor(scanTime / .8));
      const gazeBlend = smooth(0, .65, scanTime - gazeIndex * .8);
      const from = gazeTargets[gazeIndex];
      const to = gazeTargets[gazeIndex + 1];
      gaze.set(THREE.MathUtils.lerp(from[1], to[1], gazeBlend) * sensing, THREE.MathUtils.lerp(from[0], to[0], gazeBlend) * sensing, 0);
      scan.setFromEuler(gaze);
      sentinel.group.quaternion.copy(sentinel.swim.rotation).multiply(scan);
      inverse.copy(sentinel.group.quaternion).invert();
      const scale = sentinel.group.scale.x;
      for (let j = 0;j < sentinel.motion.spine.length; j++) {
        const distance = sentinel.motion.spineDistances[j] * scale;
        sentinel.swim.sample(distance, sentinel.motion.spine[j]);
        sentinel.motion.spine[j].sub(sentinel.group.position).applyQuaternion(inverse).divideScalar(scale);
      }
      sentinel.motion.flare = flare;
      sentinel.motion.sensing = sensing;
      sentinel.update(elapsed + i * 9, sensing, 0);
    });
    renderer.render(scene, camera);
  }
  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    draw();
  }
  function tick(now) {
    frame = requestAnimationFrame(tick);
    if (now - last < 1000 / 30)
      return;
    elapsed += Math.min((now - last) / 1000, 0.05);
    last = now;
    draw();
  }
  function syncMotion() {
    cancelAnimationFrame(frame);
    const label = paused ? "Resume sentinels" : "Pause sentinels";
    button.setAttribute("aria-label", label);
    button.title = label;
    button.setAttribute("aria-pressed", String(paused));
    if (!paused && !document.hidden) {
      last = performance.now();
      frame = requestAnimationFrame(tick);
    }
  }
  function toggle() {
    paused = !paused;
    syncMotion();
  }
  function preference() {
    paused = reduced.matches;
    syncMotion();
  }
  function contextLost(event) {
    event.preventDefault();
    paused = true;
    syncMotion();
    button.hidden = true;
    document.getElementById("status").textContent = "Graphics connection lost. Reload to resume.";
  }
  button.hidden = false;
  button.addEventListener("click", toggle);
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", syncMotion);
  reduced.addEventListener("change", preference);
  renderer.domElement.addEventListener("webglcontextlost", contextLost);
  resize();
  syncMotion();
  window.addEventListener("pagehide", () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("resize", resize);
    document.removeEventListener("visibilitychange", syncMotion);
    reduced.removeEventListener("change", preference);
    button.removeEventListener("click", toggle);
    renderer.domElement.removeEventListener("webglcontextlost", contextLost);
    controls.dispose();
    const geometries = new Set;
    const materials = new Set;
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        geometries.add(object.geometry);
        for (const material of Array.isArray(object.material) ? object.material : [object.material])
          materials.add(material);
        if (object instanceof THREE.InstancedMesh)
          object.dispose();
      }
    });
    geometries.forEach((geometry) => geometry.dispose());
    materials.forEach((material) => material.dispose());
    disposeMetalFinish();
    renderer.dispose();
  }, { once: true });
}
mountSentinels();
