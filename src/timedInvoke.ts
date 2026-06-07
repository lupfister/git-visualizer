import { invoke as tauriInvoke } from '@tauri-apps/api/core';

export async function invoke<T>(cmd: string, args?: any): Promise<T> {
  const start = performance.now();
  console.log(`[TauriInvoke] Call: ${cmd}`, args);
  try {
    const result = await tauriInvoke<T>(cmd, args);
    console.log(`[TauriInvoke] Done: ${cmd} in ${(performance.now() - start).toFixed(2)}ms`);
    return result;
  } catch (err) {
    console.error(`[TauriInvoke] Fail: ${cmd} in ${(performance.now() - start).toFixed(2)}ms`, err);
    throw err;
  }
}
