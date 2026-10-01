import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.ngrok-free.app', '.ngrok.app', '.result-stooge-effort.ngrok-free.dev'],
    proxy: {
      '/api': 'http://127.0.0.1:5000' // Routes /api requests to Flask
    }
  },
})
