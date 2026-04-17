import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Copies dist/index.html to dist/404.html so static hosts (GitHub Pages, S3,
// Cloudflare Pages, Netlify) serve the SPA on deep links / refresh.
function spaFallback(): Plugin {
  return {
    name: "spa-404-fallback",
    apply: "build",
    writeBundle(options) {
      const out = options.dir ?? path.resolve(__dirname, "dist");
      const index = path.join(out, "index.html");
      const notFound = path.join(out, "404.html");
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, notFound);
      }
    },
  };
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    spaFallback(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
}));
