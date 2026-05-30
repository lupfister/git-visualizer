import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const devPort = Number(process.env.VITE_DEV_PORT) || 1420;

export default defineConfig({
  root: rootDir,
  publicDir: path.join(rootDir, 'public'),
  plugins: [react()],
  clearScreen: false,
  server: {
    port: devPort,
    // When launched via `pnpm tauri dev`, the wrapper pre-picks a free port.
    // For standalone `pnpm dev`, fall through to the next available port.
    strictPort: Boolean(process.env.VITE_DEV_PORT),
  },
  build: {
    target: ['es2021', 'chrome100', 'safari13'],
    outDir: 'dist',
  },
  worker: {
    format: 'es',
  },
});
