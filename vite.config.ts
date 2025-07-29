import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  // Add base URL for GitHub Pages deployment
  base: process.env.NODE_ENV === 'production' ? '/play-info/' : '/',
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
    // Plugin to copy multiple asset directories
    {
      name: 'copy-assets',
      generateBundle() {
        // This will be handled by the publicDir and additional copying
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      "@headshots": path.resolve(import.meta.dirname, "headshots"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Ensure assets are properly handled
    assetsDir: 'assets',
  },
  // Make sure assets from attached_assets are copied to the build
  publicDir: path.resolve(import.meta.dirname, "attached_assets"),
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
