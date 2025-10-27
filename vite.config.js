import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/watches': 'http://localhost:3000',
      '/auth': 'http://localhost:3000'
    }
  }
})
