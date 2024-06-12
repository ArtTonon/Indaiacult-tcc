import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Somente necessário para desenvolvimento local
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          // Adicione quaisquer divisões de código que você precisar
        }
      }
    }
  },
})
