import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { PluginOption } from 'vite';

const require = createRequire(import.meta.url);
const reactDevtoolsDir = dirname(require.resolve('react-devtools/package.json'));
const reactDevToolsBackendPath = require.resolve('react-devtools-core/dist/backend.js', {
  paths: [reactDevtoolsDir],
});

let cachedReactDevToolsPayload: string | null = null;

const getReactDevToolsPayload = (): string => {
  if (!cachedReactDevToolsPayload) {
    const raw = readFileSync(reactDevToolsBackendPath, 'utf8');
    // Avoid fetching backend.js.map from the standalone server (8097); it can return JS and break the parser.
    const stripped = raw.replace(/\r?\n\/\/# sourceMappingURL=[^\r\n]*/, '');
    // Must match standalone `react-devtools-core` HTTP bundle: raw backend + initialize + connect (see startServer in standalone.js).
    const port = Number(process.env.REACT_DEVTOOLS_PORT || process.env.PORT) || 8097;
    const host = process.env.HOST || 'localhost';
    cachedReactDevToolsPayload =
      stripped +
      `\nReactDevToolsBackend.initialize();\nReactDevToolsBackend.connectToDevTools({ port: ${port}, host: ${JSON.stringify(host)}, useHttps: false });\n`;
  }
  return cachedReactDevToolsPayload;
};

/**
 * Serves the same bundle the standalone app would inject at http://localhost:8097 (backend +
 * initialize + connect), without requesting backend.js.map from 8097. Run `pnpm devtools` so the
 * WebSocket server on 8097 is up.
 */
const reactDevTools = (): PluginOption => ({
  name: 'react-devtools',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const pathname = req.url?.split('?')[0] ?? '';
      if (pathname !== '/__react-devtools-backend.js') {
        next();
        return;
      }
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      res.end(getReactDevToolsPayload());
    });
  },
  transformIndexHtml(html) {
    return {
      html,
      tags: [
        {
          tag: 'script',
          attrs: { src: '/__react-devtools-backend.js' },
          injectTo: 'head',
        },
      ],
    };
  },
});

export default defineConfig({
  plugins: [react(), reactDevTools()],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
  },
  build: {
    target: ['es2021', 'chrome100', 'safari13'],
    outDir: 'dist',
  },
});
