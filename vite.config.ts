// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [visualizer()],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          home: ['./src/pages/Home'],
          about: ['./src/pages/AboutDetail'],
        },
      },
    },
    chunkSizeWarningLimit: 2048,
  },
});