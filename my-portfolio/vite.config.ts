import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Разделяем vendor библиотеки
          'react-vendor': ['react', 'react-dom'],
          'marquee-vendor': ['react-fast-marquee'],
          'typewriter-vendor': ['react-simple-typewriter'],
          'utils-vendor': ['typograf'],
        },
      },
    },
    // Минификация и tree-shaking
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Удаляем console.log в production
        drop_debugger: true,
      },
    },
    // Оптимизация chunk size
    chunkSizeWarningLimit: 1000,
  },
})
