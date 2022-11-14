import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    port: 8001,
    strictPort: true,
    open: true,
    https: false,
    proxy : {
      '/api': {
        target: 'http://localhost:8000'
      },
      '/user': {
        target: 'http://localhost:8080'
      }
    }
  }
})
