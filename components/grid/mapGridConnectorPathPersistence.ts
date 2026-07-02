import type { ConnectorPathCacheInput } from './mapGridConnectorPathCache';
import { connectorGeometryCacheKey } from './mapGridConnectorPathCache';

export const CONNECTOR_PATH_PERSISTENCE_VERSION = 1;
const DB_NAME = 'cobble-map-grid';
const STORE_NAME = 'connector-path-cache';

export type PersistedConnectorPathBlob = {
  version: typeof CONNECTOR_PATH_PERSISTENCE_VERSION;
  entries: Record<string, string>;
  updatedAt: number;
};

let dbPromise: Promise<IDBDatabase> | null = null;

const openConnectorPathDb = (): Promise<IDBDatabase> => {
  if (typeof indexedDB === 'undefined') {
    return Promise.reject(new Error('indexedDB unavailable'));
  }
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onerror = () => reject(request.error ?? new Error('indexedDB open failed'));
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
  return dbPromise;
};

export const buildConnectorPathCacheScopeKey = (
  scopeBase: string,
  layoutDigest: string,
  cornerRadiusContentPx: number,
): string => {
  const base = scopeBase.trim() || '__no-repo__';
  return `${base}::r${cornerRadiusContentPx.toFixed(3)}::${layoutDigest}`;
};

/** Stable fingerprint for a laid-out connector set (keys must match draw-time geometry). */
export const computeConnectorLayoutDigest = (
  connectors: readonly ConnectorPathCacheInput[],
  cornerRadiusContentPx: number,
): string => {
  let hash = 2166136261;
  for (const connector of connectors) {
    const key = connectorGeometryCacheKey(connector, cornerRadiusContentPx);
    for (let i = 0; i < key.length; i += 1) {
      hash ^= key.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
  }
  return `${connectors.length}:${(hash >>> 0).toString(36)}`;
};

export const readPersistedConnectorPaths = async (
  scopeKey: string,
): Promise<Record<string, string>> => {
  try {
    const db = await openConnectorPathDb();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.get(scopeKey);
      request.onerror = () => reject(request.error ?? new Error('indexedDB read failed'));
      request.onsuccess = () => {
        const raw = request.result as PersistedConnectorPathBlob | undefined;
        if (!raw || raw.version !== CONNECTOR_PATH_PERSISTENCE_VERSION || !raw.entries) {
          resolve({});
          return;
        }
        resolve(raw.entries);
      };
    });
  } catch {
    return {};
  }
};

export const writePersistedConnectorPaths = async (
  scopeKey: string,
  entries: Record<string, string>,
): Promise<void> => {
  if (Object.keys(entries).length === 0) return;
  try {
    const db = await openConnectorPathDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const blob: PersistedConnectorPathBlob = {
        version: CONNECTOR_PATH_PERSISTENCE_VERSION,
        entries,
        updatedAt: Date.now(),
      };
      const request = store.put(blob, scopeKey);
      request.onerror = () => reject(request.error ?? new Error('indexedDB write failed'));
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error ?? new Error('indexedDB transaction failed'));
    });
  } catch {
    // Ignore quota / private-mode failures.
  }
};

export const mergePersistedConnectorPaths = async (
  scopeKey: string,
  entries: Record<string, string>,
): Promise<void> => {
  if (Object.keys(entries).length === 0) return;
  const existing = await readPersistedConnectorPaths(scopeKey);
  await writePersistedConnectorPaths(scopeKey, { ...existing, ...entries });
};
