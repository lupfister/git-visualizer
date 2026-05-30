#!/usr/bin/env node

import { spawn } from 'node:child_process';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_DEV_PORT = 1420;
const MAX_PORT_ATTEMPTS = 100;
const tauriCliPath = path.join(rootDir, 'node_modules', '@tauri-apps', 'cli', 'tauri.js');

const portHasListener = (port, host) =>
  new Promise((resolve) => {
    const socket = net.createConnection({ port, host });
    const finish = (inUse) => {
      socket.removeAllListeners();
      socket.destroy();
      resolve(inUse);
    };

    socket.setTimeout(300);
    socket.on('connect', () => finish(true));
    socket.on('timeout', () => finish(false));
    socket.on('error', (error) => finish(error.code !== 'ECONNREFUSED'));
  });

const isPortInUse = async (port) => {
  const [ipv4InUse, ipv6InUse] = await Promise.all([
    portHasListener(port, '127.0.0.1'),
    portHasListener(port, '::1'),
  ]);
  return ipv4InUse || ipv6InUse;
};

const findAvailablePort = async (startPort) => {
  for (let port = startPort; port < startPort + MAX_PORT_ATTEMPTS; port++) {
    if (!(await isPortInUse(port))) return port;
  }
  throw new Error(`No free port found in range ${startPort}-${startPort + MAX_PORT_ATTEMPTS - 1}`);
};

const runTauriCli = (args) =>
  new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [tauriCliPath, ...args], {
      cwd: rootDir,
      env: process.env,
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

  const forcedPort = Number(process.env.GIT_VIZ_PREVIEW_PORT);
  const port =
    Number.isFinite(forcedPort) && forcedPort > 0
      ? forcedPort
      : await findAvailablePort(DEFAULT_DEV_PORT);
  const devUrl = `http://localhost:${port}`;
  const beforeDevCommand = `GIT_VIZ_PREVIEW_ROOT=${rootDir} node scripts/vite-dev.mjs --port ${port}`;
  const configPatch = JSON.stringify({
    build: {
      devUrl,
      beforeDevCommand,
    },
  });

  if (port !== DEFAULT_DEV_PORT) {
    console.log(`Port ${DEFAULT_DEV_PORT} is in use — using ${port} for this dev session.`);
  }

  const code = await runTauriCli(['dev', '--config', configPatch, ...restArgs]);
  process.exitCode = code;
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
