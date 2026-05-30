#!/usr/bin/env node

import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const viteCliPath = path.join(rootDir, 'node_modules', 'vite', 'bin', 'vite.js');

const parsePortArg = () => {
  const flagIndex = process.argv.indexOf('--port');
  if (flagIndex === -1) return null;
  const value = Number(process.argv[flagIndex + 1]);
  return Number.isFinite(value) && value > 0 ? value : null;
};

const runVite = (port) =>
  new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      [viteCliPath, '--port', String(port), '--strictPort'],
      {
        cwd: rootDir,
        env: process.env,
        stdio: 'inherit',
      },
    );

    child.on('error', reject);
    child.on('exit', (code, signal) => {
      if (signal) {
        process.kill(process.pid, signal);
        return;
      }
      resolve(code ?? 1);
    });
  });

const main = async () => {
  const port = parsePortArg();
  if (!port) {
    console.error('vite-dev.mjs requires --port <number>');
    process.exit(1);
    return;
  }

  const code = await runVite(port);
  process.exitCode = code;
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
