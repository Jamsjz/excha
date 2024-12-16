import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.tsx",
      refresh: true,
    }),
    react(),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    manifest: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./resources/js"),
      "~": path.resolve(__dirname, "./public"),
    },
  },
  publicDir: "public",
});
