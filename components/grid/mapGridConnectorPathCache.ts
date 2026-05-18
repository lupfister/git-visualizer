import { buildMapGridConnectorPath } from './gridPathUtils';
import type { ConnectorFace } from './LayoutGrid';

const contentPointFormatter = (x: number, y: number) => `${x},${y}`;

/** Soft cap; only evict when exceeded (never wipe the whole map each frame). */
export const MAP_GRID_CONNECTOR_PATH_CACHE_MAX = 20_000;

export type ConnectorPathCacheInput = {
  id: string;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  fromFace?: ConnectorFace;
  toFace?: ConnectorFace;
};

export type ConnectorPathCacheEntry = {
  path: Path2D;
  d: string;
};

export function connectorGeometryCacheKey(
  connector: ConnectorPathCacheInput,
  cornerRadiusContentPx: number,
): string {
  return [
    connector.id,
    connector.fromX.toFixed(2),
    connector.fromY.toFixed(2),
    connector.toX.toFixed(2),
    connector.toY.toFixed(2),
    connector.fromFace ?? '',
    connector.toFace ?? '',
    cornerRadiusContentPx.toFixed(3),
  ].join(':');
}

export function path2DFromPathString(d: string): Path2D {
  return new Path2D(d);
}

export function applyPersistedPathStrings(
  cache: Map<string, ConnectorPathCacheEntry>,
  entries: Record<string, string>,
): number {
  let applied = 0;
  for (const [key, d] of Object.entries(entries)) {
    if (!d || cache.has(key)) continue;
    cache.set(key, { path: path2DFromPathString(d), d });
    applied += 1;
  }
  return applied;
}

export function collectPathStringsForPersistence(
  cache: Map<string, ConnectorPathCacheEntry>,
  connectors?: readonly ConnectorPathCacheInput[],
  cornerRadiusContentPx?: number,
): Record<string, string> {
  const entries: Record<string, string> = {};
  if (connectors && cornerRadiusContentPx != null) {
    for (const connector of connectors) {
      const key = connectorGeometryCacheKey(connector, cornerRadiusContentPx);
      const entry = cache.get(key);
      if (entry) entries[key] = entry.d;
    }
    return entries;
  }
  for (const [key, entry] of cache) {
    entries[key] = entry.d;
  }
  return entries;
}

export function getOrBuildConnectorPath2D(
  cache: Map<string, ConnectorPathCacheEntry>,
  connector: ConnectorPathCacheInput,
  cornerRadiusContentPx: number,
): Path2D {
  const key = connectorGeometryCacheKey(connector, cornerRadiusContentPx);
  const cached = cache.get(key);
  if (cached) return cached.path;
  const d = buildMapGridConnectorPath(
    connector.fromX,
    connector.fromY,
    connector.toX,
    connector.toY,
    contentPointFormatter,
    connector.fromFace,
    connector.toFace,
    cornerRadiusContentPx,
  );
  const path = path2DFromPathString(d);
  cache.set(key, { path, d });
  return path;
}

/** Evict oldest entries only when the cache grows past the soft cap. */
export function trimConnectorPathCacheIfNeeded(
  cache: Map<string, ConnectorPathCacheEntry>,
  protectedKeys: ReadonlySet<string>,
  maxSize = MAP_GRID_CONNECTOR_PATH_CACHE_MAX,
): void {
  if (cache.size <= maxSize) return;
  for (const key of cache.keys()) {
    if (cache.size <= maxSize) break;
    if (protectedKeys.has(key)) continue;
    cache.delete(key);
  }
}

const WARM_BATCH_SIZE = 64;
const WARM_SLICE_MS = 10;

export function warmConnectorPathCacheSlice(
  cache: Map<string, ConnectorPathCacheEntry>,
  connectors: readonly ConnectorPathCacheInput[],
  cornerRadiusContentPx: number,
  startIndex: number,
): number {
  const end = Math.min(connectors.length, startIndex + WARM_BATCH_SIZE);
  for (let i = startIndex; i < end; i += 1) {
    getOrBuildConnectorPath2D(cache, connectors[i]!, cornerRadiusContentPx);
  }
  return end;
}

export function scheduleConnectorPathCacheWarmup(
  cache: Map<string, ConnectorPathCacheEntry>,
  connectors: readonly ConnectorPathCacheInput[],
  cornerRadiusContentPx: number,
  options?: {
    onDone?: () => void;
    shouldYield?: () => boolean;
    onProgress?: (done: number, total: number) => void;
  },
): () => void {
  if (connectors.length === 0) {
    options?.onDone?.();
    return () => {};
  }

  let cancelled = false;
  let index = 0;

  const runSlice = (deadline?: IdleDeadline) => {
    if (cancelled) return;
    if (options?.shouldYield?.()) {
      if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(runSlice, { timeout: 400 });
      } else {
        window.setTimeout(() => runSlice(), 32);
      }
      return;
    }
    const sliceStart = performance.now();
    while (index < connectors.length) {
      index = warmConnectorPathCacheSlice(cache, connectors, cornerRadiusContentPx, index);
      options?.onProgress?.(index, connectors.length);
      const elapsed = performance.now() - sliceStart;
      if (deadline && deadline.timeRemaining() < 2) break;
      if (elapsed >= WARM_SLICE_MS) break;
    }
    if (index >= connectors.length) {
      options?.onDone?.();
      return;
    }
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(runSlice, { timeout: 200 });
    } else {
      window.setTimeout(() => runSlice(), 0);
    }
  };

  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(runSlice, { timeout: 800 });
  } else {
    window.setTimeout(() => runSlice(), 0);
  }

  return () => {
    cancelled = true;
  };
}
