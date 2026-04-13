import { defineConfig } from 'vite';

export default defineConfig({
  // The root index.html is in the project root
  root: '.',
  // Public directory for static assets (images, favicon, etc.)
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
