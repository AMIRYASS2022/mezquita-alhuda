import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // ✅ Correct for Netlify
  build: {
    outDir: 'dist',  // ✅ Correct
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser'
  }
})
