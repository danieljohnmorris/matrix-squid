import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { init, effect, target } from 'vgpu/node';
import { prepareShader } from '@vgpu/wgsl/prepare';
import { PNG } from 'pngjs';

const source = prepareShader(await readFile(new URL('./metal.wgsl', import.meta.url), 'utf8'));
const destination = new URL('../public/textures/', import.meta.url);
await mkdir(destination, { recursive: true });
const gpu = await init();
try {
  console.log(`Baking metal maps with vgpu: ${gpu.adapter.name}`);
  const output = target(gpu, { size: [512, 512], format: 'rgba8unorm' });
  for (const fragment of ['roughness', 'normal']) {
    const pass = effect(gpu, source, { entry: { fragment } });
    try {
      await pass.compile(output);
      pass.draw(output);
      const pixels = await output.color.read({ mipLevel: 0, region: 'all' });
      const png = new PNG({ width: 512, height: 512 });
      png.data.set(pixels);
      const bytes = PNG.sync.write(png);
      await writeFile(new URL(`metal-${fragment}.png`, destination), bytes);
      console.log(`metal-${fragment}.png: ${bytes.length} bytes`);
    } finally {
      pass.dispose();
    }
  }
  await gpu.settled();
} finally {
  gpu.dispose();
}
