import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Reemplaza con tu dirección IP
    port: 3000, // El puerto que desees utilizar
  },
})
