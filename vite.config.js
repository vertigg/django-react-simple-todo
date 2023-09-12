import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'


console.log(__dirname, "main.jsx");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../static/frontend",
    minify: true,
    rollupOptions: {
      input: "frontend/src/main.jsx",
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
  root: "frontend/src",
  server: {
    open: "index.html"
  }
})
