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
        },
      },
    },
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: false, // Один CSS файл вместо множества - быстрее загрузка
    assetsInlineLimit: 4096,
    modulePreload: {
      polyfill: true, // Автоматический preload для модулей
    },
  },
})
