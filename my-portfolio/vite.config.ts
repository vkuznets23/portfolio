import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'marquee-vendor': ['react-fast-marquee'],
          'typewriter-vendor': ['react-simple-typewriter'],
          'utils-vendor': ['typograf'],
        },
      },
    },
    // Минификация через esbuild (быстрее и встроен в Vite)
    minify: 'esbuild',
    // Оптимизация chunk size
    chunkSizeWarningLimit: 1000,
  },
})
