/**
 * Coalesce concurrent async calls keyed by repo path (one in-flight promise per key).
 */
export function createInFlightDeduper<T>() {
  const inflight = new Map<string, Promise<T>>();

  return (key: string, task: () => Promise<T>): Promise<T> => {
    const normalizedKey = key.trim();
    if (!normalizedKey) {
      return task();
    }
    const existing = inflight.get(normalizedKey);
    if (existing) {
      return existing;
    }
    const promise = task().finally(() => {
      if (inflight.get(normalizedKey) === promise) {
        inflight.delete(normalizedKey);
      }
    });
    inflight.set(normalizedKey, promise);
    return promise;
  };
}
