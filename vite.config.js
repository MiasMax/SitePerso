import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// In dev, the Express API (api/server.js) runs on :3000 and Vite proxies
// /api requests to it. In production, Express serves the built dist/ itself.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
