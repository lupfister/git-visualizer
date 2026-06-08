import { invoke as tauriInvoke } from '@tauri-apps/api/core';

export async function invoke<T>(cmd: string, args?: any): Promise<T> {
  return tauriInvoke<T>(cmd, args);
}
