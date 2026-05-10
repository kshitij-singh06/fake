import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      input: {
        popup: 'src/popup/index.html',
        background: 'src/background/index.ts',
        content: 'src/content/index.ts',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name].[ext]',
      },
      plugins: [
        // Copy onnxruntime-web WASM binaries alongside the bundle so ORT can
        // resolve them at runtime via chrome.runtime.getURL('').
        copy({
          targets: [
            {
              src: 'node_modules/onnxruntime-web/dist/*.wasm',
              dest: 'dist',
            },
          ],
          hook: 'writeBundle',
        }),
      ],
    },
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: true,
    // Increase chunk warning limit — ONNX + transformers are large bundles
    chunkSizeWarningLimit: 10000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  publicDir: 'public',
  optimizeDeps: {
    exclude: ['onnxruntime-web'],
  },
})