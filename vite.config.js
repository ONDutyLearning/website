// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'website' with your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/website/', // 🔥 IMPORTANT for GitHub Pages to find your assets
})
