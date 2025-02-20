// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          home: ["./src/pages/Home"],
          about: ["./src/pages/AboutDetail"],
        },
      },
    },
    chunkSizeWarningLimit: 2048,
  },
});
