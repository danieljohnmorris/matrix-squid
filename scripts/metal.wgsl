// Periodic grain: the baked normal and roughness maps tile without a seam.
fn hash(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}
fn noise(uv: vec2f, period: vec2f) -> f32 {
  let p = uv * period;
  let cell = floor(p);
  let f = fract(p);
  let blend = f * f * (3.0 - 2.0 * f);
  let a = hash(cell - floor(cell / period) * period);
  let bcell = cell + vec2f(1, 0);
  let ccell = cell + vec2f(0, 1);
  let dcell = cell + vec2f(1, 1);
  let b = hash(bcell - floor(bcell / period) * period);
  let c = hash(ccell - floor(ccell / period) * period);
  let d = hash(dcell - floor(dcell / period) * period);
  return mix(mix(a, b, blend.x), mix(c, d, blend.x), blend.y);
}
fn height(uv: vec2f) -> f32 {
  return noise(uv, vec2f(192, 8)) * 0.002
    + noise(uv, vec2f(64, 64)) * 0.0007;
}
@fragment fn roughness(@location(0) uv: vec2f) -> @location(0) vec4f {
  let value = 0.58 + noise(uv, vec2f(192, 8)) * 0.24
    + noise(uv, vec2f(8, 8)) * 0.16;
  return vec4f(vec3f(value), 1);
}
@fragment fn normal(@location(0) uv: vec2f) -> @location(0) vec4f {
  let dx = vec2f(1.0 / 512.0, 0);
  let dy = vec2f(0, 1.0 / 512.0);
  // PNG is top-origin; invert Y for Three.js's OpenGL tangent-space convention.
  let n = normalize(vec3f((height(uv - dx) - height(uv + dx)) * 80.0,
    (height(uv + dy) - height(uv - dy)) * 80.0, 1));
  return vec4f(n * 0.5 + 0.5, 1);
}
