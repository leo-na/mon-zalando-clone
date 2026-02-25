import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Indispensable

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Indispensable
  ],
})