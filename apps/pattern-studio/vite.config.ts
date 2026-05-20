import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 1421,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    target: ['es2021', 'chrome100', 'safari13'],
  },
});
