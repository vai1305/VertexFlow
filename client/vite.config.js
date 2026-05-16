import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,

    proxy: {
      "/api": {
        target: "https://vertexflow-production-a336.up.railway.app",
        changeOrigin: true,
        secure: true
      }
    }
  },

  preview: {
    allowedHosts: [
      "https://vertexflow-production.up.railway.app"
    ]
  }
});