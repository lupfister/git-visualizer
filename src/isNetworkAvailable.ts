import { invoke } from './timedInvoke';

const CHECK_INTERVAL_MS = 30_000;

let lastCheck = 0;
let lastResult = true;

export async function isNetworkAvailable(): Promise<boolean> {
  const now = Date.now();
  if (now - lastCheck < CHECK_INTERVAL_MS) {
    return lastResult;
  }
  lastCheck = now;
  lastResult = await invoke<boolean>('check_network_available').catch(() => false);
  return lastResult;
}
