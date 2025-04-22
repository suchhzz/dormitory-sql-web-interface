import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
      }
    }
  },
  build: {
    target: ['esnext'],
  },
  envDir: '../',
  server: {
    proxy: {
      '/home': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/home/, '/home')
      }
    }
  }
})
