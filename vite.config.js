import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // NO base property for Vercel deployment
  build: {
    outDir: 'dist',
  },
})