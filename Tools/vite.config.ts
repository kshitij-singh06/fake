import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

/**
 * Custom plugin that copies WASM/mjs files only when they don't already exist
 * in dist/. This avoids EBUSY errors when Chrome has the files open, while
 * still copying them on a fresh build or after a manual dist/ deletion.
 */
function copyWasmPlugin() {
  return {
    name: 'copy-wasm-safe',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const patterns = [
        'node_modules/onnxruntime-web/dist/*.wasm',
        'node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded*.mjs',
      ]

      for (const pattern of patterns) {
        const files = glob.sync(pattern, { cwd: __dirname })
        for (const file of files) {
          const src  = path.resolve(__dirname, file)
          const dest = path.join(distDir, path.basename(file))
          if (!fs.existsSync(dest)) {
            fs.copyFileSync(src, dest)
            console.log(`[copy-wasm] Copied: ${path.basename(file)}`)
          } else {
            console.log(`[copy-wasm] Skipped (already exists): ${path.basename(file)}`)
          }
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    copyWasmPlugin(),
  ],
  build: {
    rollupOptions: {
      input: {
        popup:      'src/popup/index.html',
        background: 'src/background/index.ts',
        content:    'src/content/index.ts',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name].[ext]',
      },
    },
    outDir: 'dist',
    // Don't wipe dist/ — Chrome locks the WASM files while the extension is loaded.
    // Individual files (JS, CSS) are still overwritten by Rollup's normal output step.
    emptyOutDir: false,
    copyPublicDir: true,
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