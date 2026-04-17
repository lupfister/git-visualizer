import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';
import type { CommitDetails, GraphDelta, GraphSnapshot } from '../../types';

type UseGraphSnapshotResult = {
  snapshot: GraphSnapshot | null;
  loading: boolean;
  error: string | null;
  reload: () => Promise<void>;
  getCommitDetails: (sha: string) => Promise<CommitDetails | null>;
};

export function useGraphSnapshot(repoPath?: string | null, maxCommits = 4000): UseGraphSnapshotResult {
  const [snapshot, setSnapshot] = useState<GraphSnapshot | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const detailsCache = useRef(new Map<string, CommitDetails>());
  const reloadTimer = useRef<number | null>(null);

  const load = useCallback(async () => {
    if (!repoPath) {
      setSnapshot(null);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const next = await invoke<GraphSnapshot>('load_graph_snapshot', {
        repoPath,
        options: { maxCommits },
      });
      setSnapshot(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, [repoPath, maxCommits]);

  useEffect(() => {
    if (!repoPath) return;
    let disposed = false;
    let unlistenDelta: null | (() => void) = null;

    const scheduleReload = (_delta?: GraphDelta) => {
      if (disposed) return;
      if (reloadTimer.current != null) {
        window.clearTimeout(reloadTimer.current);
      }
      reloadTimer.current = window.setTimeout(() => {
        reloadTimer.current = null;
        void load();
      }, 120);
    };

    void invoke('watch_repo', { repoPath }).catch(() => undefined);

    void listen<GraphDelta>('graph-delta', (event) => {
      if (disposed) return;
      if (event.payload) scheduleReload(event.payload);
    }).then((fn) => {
      if (disposed) {
        fn();
        return;
      }
      unlistenDelta = fn;
    });

    void load();

    return () => {
      disposed = true;
      if (reloadTimer.current != null) {
        window.clearTimeout(reloadTimer.current);
        reloadTimer.current = null;
      }
      if (unlistenDelta) unlistenDelta();
    };
  }, [repoPath, load]);

  const getCommitDetails = useCallback(async (sha: string) => {
    if (!repoPath) return null;
    if (detailsCache.current.has(sha)) {
      return detailsCache.current.get(sha) ?? null;
    }
    try {
      const details = await invoke<CommitDetails>('get_commit_details', {
        repoPath,
        commitSha: sha,
      });
      detailsCache.current.set(sha, details);
      return details;
    } catch {
      return null;
    }
  }, [repoPath]);

  return useMemo(() => ({
    snapshot,
    loading,
    error,
    reload: load,
    getCommitDetails,
  }), [snapshot, loading, error, load, getCommitDetails]);
}
