#!/usr/bin/env node

import { spawn } from 'node:child_process';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_DEV_PORT = 1420;
const tauriCliPath = path.join(rootDir, 'node_modules', '@tauri-apps', 'cli', 'tauri.js');

const findAvailablePort = (startPort) =>
  new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(findAvailablePort(startPort + 1));
        return;
      }
      reject(err);
    });
    server.listen(startPort, '127.0.0.1', () => {
      const address = server.address();
      const port = typeof address === 'object' && address ? address.port : startPort;
      server.close(() => resolve(port));
    });
  });

const runTauriCli = (args, env = process.env) =>
  new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [tauriCliPath, ...args], {
      cwd: rootDir,
      env,
      stdio: 'inherit',
    });

    child.on('error', reject);
    child.on('exit', (code, signal) => {
      if (signal) {
        process.kill(process.pid, signal);
        return;
      }
      resolve(code ?? 0);
    });
  });

const main = async () => {
  const [subcommand, ...restArgs] = process.argv.slice(2);

  if (subcommand !== 'dev') {
    const code = await runTauriCli(process.argv.slice(2));
    process.exitCode = code;
    return;
  }

  const port = await findAvailablePort(DEFAULT_DEV_PORT);
  const devUrl = `http://localhost:${port}`;
  const configPatch = JSON.stringify({ build: { devUrl } });

  if (port !== DEFAULT_DEV_PORT) {
    console.log(`Port ${DEFAULT_DEV_PORT} is in use — using ${port} for this dev session.`);
  }

  const code = await runTauriCli(
    ['dev', '--config', configPatch, ...restArgs],
    { ...process.env, VITE_DEV_PORT: String(port) },
  );
  process.exitCode = code;
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
