import * as THREE from "three";
import { createSentinel } from "./sentinel-model.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { createSwimMotion } from "./swim-motion.js";
import { applyMetalFinish } from "./metal-finish.js";
import { createAtmosphere } from "./atmosphere.js";
import { createCameraPass } from "./camera-pass.js";
import { createFlockSteering } from "./flock-motion.js";
// Omarchy's screensaver host loads ?screensaver: no controls, cursor or orbiting.
const screensaver = new URLSearchParams(location.search).has("screensaver");
document.documentElement.classList.toggle("screensaver", screensaver);
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
if (!screensaver) {
  let idleTimer;
  const activityEvents = ["pointermove", "pointerdown", "pointerup", "wheel", "keydown", "focusin"];
  function showControls() {
    document.documentElement.classList.remove("ui-idle");
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => document.documentElement.classList.add("ui-idle"), 3000);
  }
  for (const event of activityEvents) window.addEventListener(event, showControls, { passive: true });
  showControls();
  window.addEventListener("pagehide", () => {
    clearTimeout(idleTimer);
    for (const event of activityEvents) window.removeEventListener(event, showControls);
  }, { once: true });
}
function mountSentinels() {
  const host = document.getElementById("sentinel-background");
  const button = document.getElementById("sentinel-motion");
  const population = document.getElementById("squid-population");
  const countInput = document.getElementById("squid-count");
  const pathButton = document.getElementById("sentinel-pathing");
  const maxCount = 50;
  for (let count = 1; count <= maxCount; count++) countInput.add(new Option(String(count), String(count)));
  const flock = createFlockSteering(maxCount);
  let flocking = false;
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
  const atmosphere = createAtmosphere(scene);
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 150);
  camera.position.z = 30;
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 8;
  controls.maxDistance = 75;
  controls.enablePan = false;
  controls.enabled = !screensaver;
  controls.addEventListener("change", () => renderer.render(scene, camera));
  scene.add(new THREE.HemisphereLight(0xffffff, 0x202020, .35));
  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(-5, 8, 12);
  scene.add(light);
  const rim = new THREE.DirectionalLight(0xffffff, 1.2);
  rim.position.set(8, -3, -5);
  scene.add(rim);
  // Independent world-space roaming volumes; no shared or repeating tracks.
  const nearVolume = new THREE.Box3();
  const farVolume = new THREE.Box3();
  const middleVolume = new THREE.Box3();
  const flockVolume = new THREE.Box3();
  const view = { aspect: window.innerWidth / window.innerHeight };
  const swarm = [];
  let selectedCount = null;
  const metalFinish = applyMetalFinish(scene, renderer, () => renderer.render(scene, camera));
  function syncSwarm() {
    const width = window.innerWidth;
    const aspect = width / window.innerHeight;
    view.aspect = aspect;
    const spread = Math.max(.4, aspect / (16 / 9));
    const nearWidth = Math.max(4, 18 * aspect / (16 / 9));
    const nearFront = aspect < 1 ? 12 : 18;
    nearVolume.set(new THREE.Vector3(-nearWidth, -12, -7), new THREE.Vector3(nearWidth, 12, nearFront));
    middleVolume.set(new THREE.Vector3(-23 * spread, -15, -22), new THREE.Vector3(23 * spread, 15, 8));
    farVolume.set(new THREE.Vector3(-24 * spread, -16, -38), new THREE.Vector3(24 * spread, 16, -14));
    flockVolume.copy(middleVolume).union(nearVolume);
    const count = selectedCount ?? (width < 640 ? 4 : width < 1200 ? 6 : width < 1920 ? 8 : width < 3000 ? 12 : 16);
    while (swarm.length > count) {
      const sentinel = swarm.pop();
      scene.remove(sentinel.group);
      disposeMeshes(sentinel.group);
    }
    while (swarm.length < count) {
      const i = swarm.length;
      const sentinel = createSentinel();
      sentinel.group.scale.setScalar(.65);
      const volume = i === 0 ? farVolume : i === 1 ? middleVolume : i < 4 ? nearVolume
        : i % 3 === 0 ? farVolume : i % 3 === 1 ? middleVolume : nearVolume;
      for (let attempt = 0; attempt < 24; attempt++) {
        sentinel.group.position.set(
          THREE.MathUtils.lerp(volume.min.x, volume.max.x, Math.random()),
          THREE.MathUtils.lerp(volume.min.y, volume.max.y, Math.random()),
          THREE.MathUtils.lerp(volume.min.z, volume.max.z, Math.random()),
        );
        if (i === 2) sentinel.group.position.set(0, -1, 6);
        if (swarm.every(other => other.group.position.distanceToSquared(sentinel.group.position) > 81)) break;
      }
      const pass = i >= 2 && (i === 3 || i % 3 === 2) ? createCameraPass(sentinel.group.position, i, view) : null;
      const firstTarget = pass?.update(elapsed);
      const heading = firstTarget
        ? new THREE.Vector3().subVectors(firstTarget, sentinel.group.position).normalize()
        : new THREE.Vector3(aspect < 1 ? 0 : i % 2 === 0 ? .7 : -.7, (i % 3 - 1) * .3, i % 3 === 1 ? .7 : -.7).normalize();
      metalFinish.apply(sentinel.group);
      scene.add(sentinel.group);
      swarm.push({ ...sentinel, pass, swim: createSwimMotion(sentinel.group.position, Math.random, heading, volume) });
    }
    countInput.value = String(count);
  }
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
    if (flocking && dt > 0) flock.update(swarm, flockVolume);
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
      const speed = ((flocking ? 2 : .85) + surge) * (braking + departing) + releaseSurge;
      sentinel.swim.advance(dt, speed, swarm, sentinel,
        flocking ? null : sentinel.pass?.update(elapsed),
        flocking ? flock.directions[i] : null,
        flocking ? flockVolume : undefined);
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
    atmosphere.update(elapsed, camera);
    renderer.render(scene, camera);
  }
  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    syncSwarm();
    draw();
  }
  function changePopulation() {
    selectedCount = Number(countInput.value);
    syncSwarm();
    draw();
  }
  function changePathing() {
    flocking = !flocking;
    pathButton.setAttribute("aria-pressed", String(flocking));
    pathButton.title = flocking ? "Flocking — switch to independent" : "Independent — switch to flocking";
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
    population.hidden = true;
    pathButton.hidden = true;
    document.getElementById("status").textContent = "Graphics connection lost. Reload to resume.";
  }
  button.hidden = false;
  button.addEventListener("click", toggle);
  countInput.addEventListener("change", changePopulation);
  pathButton.hidden = false;
  pathButton.addEventListener("click", changePathing);
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", syncMotion);
  reduced.addEventListener("change", preference);
  renderer.domElement.addEventListener("webglcontextlost", contextLost);
  resize();
  population.hidden = false;
  syncMotion();
  window.addEventListener("pagehide", () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("resize", resize);
    document.removeEventListener("visibilitychange", syncMotion);
    reduced.removeEventListener("change", preference);
    button.removeEventListener("click", toggle);
    countInput.removeEventListener("change", changePopulation);
    pathButton.removeEventListener("click", changePathing);
    renderer.domElement.removeEventListener("webglcontextlost", contextLost);
    controls.dispose();
    disposeMeshes(scene);
    metalFinish.dispose();
    renderer.dispose();
  }, { once: true });
  function disposeMeshes(root) {
    const geometries = new Set;
    const materials = new Set;
    root.traverse((object) => {
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
  }
}
mountSentinels();
