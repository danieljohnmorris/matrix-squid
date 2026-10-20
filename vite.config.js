import { defineConfig } from "vite";

// `vite build --mode screensaver` writes the committed Omarchy plugin bundle:
// relative paths for file:// loading and chunks under the marketplace's
// 512 KiB per-file scan limit.
export default defineConfig(({ mode }) => mode === "screensaver" ? {
  base: "./",
  build: {
    outDir: "screensaver",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: id => id.includes("node_modules/three/build/three.core") ? "three-core"
          : id.includes("node_modules/three/") ? "three" : undefined,
      },
    },
  },
  plugins: [{
    name: "file-url-scripts",
    // WebKit refuses CORS-mode module loads from file:// origins.
    transformIndexHtml: html => html.replaceAll(" crossorigin", ""),
  }],
} : {});
