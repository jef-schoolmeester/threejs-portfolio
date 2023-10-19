import { defineConfig } from 'vite'
import path from 'path'

import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@models': path.resolve(__dirname, './src/Experience/models/'),
      '@camera': path.resolve(__dirname, './src/Experience/camera'),
      '@shaders': path.resolve(__dirname, './src/Experience/shaders/'),
    },
  },
})
