import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ryonakagawa-1012.github.io/',
  plugins: [react()],
})
