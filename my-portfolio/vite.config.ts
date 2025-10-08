import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Критические библиотеки
          'react-vendor': ['react', 'react-dom'],
          // Некритические библиотеки
          'marquee-vendor': ['react-fast-marquee'],
          'typewriter-vendor': ['react-simple-typewriter'],
          'utils-vendor': ['typograf'],
        },
      },
    },
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    // Оптимизация CSS
    cssCodeSplit: true,
    // Увеличиваем лимит для CSS
    assetsInlineLimit: 4096,
  },
})
