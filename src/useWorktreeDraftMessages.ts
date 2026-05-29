import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { normalizeRepoPathForCompare } from '../components/grid/mapGridUtils';
import type { WorktreeSession } from '../lib/worktreeSessions';
import {
  buildWorktreeDraftDisplayMap,
  hashWorktreeSummary,
  WORKTREE_DRAFT_DEBOUNCE_MS,
  type WorktreeDraftEntry,
} from './worktreeDraftMessages';

const SUMMARY_PROBE_MS = 3000;

const normalizeWorktreePath = (path: string): string =>
  normalizeRepoPathForCompare(path);

const findDraftEntry = (
  draftsByPath: Readonly<Record<string, WorktreeDraftEntry>>,
  worktreePath: string,
): WorktreeDraftEntry | undefined => {
  const normalized = normalizeWorktreePath(worktreePath);
  const direct = draftsByPath[normalized];
  if (direct) return direct;
  const lower = normalized.toLowerCase();
  for (const [path, entry] of Object.entries(draftsByPath)) {
    if (path.toLowerCase() === lower) return entry;
  }
  return undefined;
};

type UseWorktreeDraftMessagesOptions = {
  worktreeSessions: WorktreeSession[];
  isPaused: () => boolean;
  enabled?: boolean;
};

type UseWorktreeDraftMessagesResult = {
  draftsByPath: Readonly<Record<string, WorktreeDraftEntry>>;
  draftsByWorkingTreeId: ReadonlyMap<string, { status: WorktreeDraftEntry['status']; message: string }>;
  pathByWorkingTreeId: Readonly<Record<string, string>>;
  getPreparedCommitMessage: (worktreePath: string) => string | null;
  getPreparedStashMessage: (worktreePath: string) => string | null;
  clearDraftForPath: (worktreePath: string) => void;
};

export const useWorktreeDraftMessages = ({
  worktreeSessions,
  isPaused,
  enabled = true,
}: UseWorktreeDraftMessagesOptions): UseWorktreeDraftMessagesResult => {
  const [draftsByPath, setDraftsByPath] = useState<Record<string, WorktreeDraftEntry>>({});
  const draftsByPathRef = useRef(draftsByPath);
  draftsByPathRef.current = draftsByPath;

  const debounceTimersRef = useRef<Map<string, number>>(new Map());
  const generationTokenRef = useRef<Map<string, number>>(new Map());
  const lastSummaryFingerprintRef = useRef<Map<string, string>>(new Map());
  const inFlightRef = useRef<Set<string>>(new Set());

  const dirtySessions = useMemo(
    () => worktreeSessions.filter((session) => session.hasUncommittedChanges && session.pathExists !== false),
    [worktreeSessions],
  );

  const pathByWorkingTreeId = useMemo(() => {
    const map: Record<string, string> = {};
    for (const session of worktreeSessions) {
      map[session.workingTreeId] = normalizeWorktreePath(session.path);
    }
    return map;
  }, [worktreeSessions]);

  const clearDebounceTimer = useCallback((normalizedPath: string) => {
    const timerId = debounceTimersRef.current.get(normalizedPath);
    if (timerId != null) {
      window.clearTimeout(timerId);
      debounceTimersRef.current.delete(normalizedPath);
    }
  }, []);

  const clearDraftForPath = useCallback((worktreePath: string) => {
    const normalizedPath = normalizeWorktreePath(worktreePath);
    clearDebounceTimer(normalizedPath);
    generationTokenRef.current.set(normalizedPath, (generationTokenRef.current.get(normalizedPath) ?? 0) + 1);
    inFlightRef.current.delete(normalizedPath);
    lastSummaryFingerprintRef.current.delete(normalizedPath);
    setDraftsByPath((previous) => {
      if (!(normalizedPath in previous)) return previous;
      const next = { ...previous };
      delete next[normalizedPath];
      return next;
    });
  }, [clearDebounceTimer]);

  const runDraftGeneration = useCallback(async (normalizedPath: string, summaryFingerprint: string) => {
    if (isPaused() || inFlightRef.current.has(normalizedPath)) return;

    const existing = draftsByPathRef.current[normalizedPath];
    if (
      existing?.status === 'ready'
      && existing.summaryFingerprint === summaryFingerprint
      && existing.commitMessage.trim()
      && existing.stashMessage.trim()
    ) {
      return;
    }

    const generation = (generationTokenRef.current.get(normalizedPath) ?? 0) + 1;
    generationTokenRef.current.set(normalizedPath, generation);
    inFlightRef.current.add(normalizedPath);

    setDraftsByPath((previous) => ({
      ...previous,
      [normalizedPath]: {
        status: 'pending',
        commitMessage: existing?.commitMessage ?? '',
        stashMessage: existing?.stashMessage ?? '',
        summaryFingerprint,
      },
    }));

    try {
      const [commitMessage, stashMessage] = await Promise.all([
        invoke<string>('generate_commit_message', { repoPath: normalizedPath }).catch(() => ''),
        invoke<string>('generate_stash_message', { repoPath: normalizedPath }).catch(() => ''),
      ]);

      if (generation !== generationTokenRef.current.get(normalizedPath)) return;

      const trimmedCommit = commitMessage.trim();
      const trimmedStash = stashMessage.trim();
      if (!trimmedCommit && !trimmedStash) {
        setDraftsByPath((previous) => ({
          ...previous,
          [normalizedPath]: {
            status: 'error',
            commitMessage: '',
            stashMessage: '',
            summaryFingerprint,
          },
        }));
        return;
      }

      setDraftsByPath((previous) => ({
        ...previous,
        [normalizedPath]: {
          status: 'ready',
          commitMessage: trimmedCommit,
          stashMessage: trimmedStash || trimmedCommit,
          summaryFingerprint,
        },
      }));
    } catch {
      if (generation !== generationTokenRef.current.get(normalizedPath)) return;
      setDraftsByPath((previous) => ({
        ...previous,
        [normalizedPath]: {
          status: 'error',
          commitMessage: existing?.commitMessage ?? '',
          stashMessage: existing?.stashMessage ?? '',
          summaryFingerprint,
        },
      }));
    } finally {
      inFlightRef.current.delete(normalizedPath);
    }
  }, [isPaused]);

  const scheduleDraftGeneration = useCallback((normalizedPath: string, summaryFingerprint: string) => {
    clearDebounceTimer(normalizedPath);
    const timerId = window.setTimeout(() => {
      debounceTimersRef.current.delete(normalizedPath);
      void runDraftGeneration(normalizedPath, summaryFingerprint);
    }, WORKTREE_DRAFT_DEBOUNCE_MS);
    debounceTimersRef.current.set(normalizedPath, timerId);
  }, [clearDebounceTimer, runDraftGeneration]);

  const probeDirtySession = useCallback(async (session: WorktreeSession) => {
    if (!enabled || isPaused()) return;
    const normalizedPath = normalizeWorktreePath(session.path);
    const summary = await invoke<string>('get_working_tree_summary', { repoPath: normalizedPath }).catch(() => null);
    if (summary == null) return;
    const fingerprint = hashWorktreeSummary(summary);
    if (!fingerprint) {
      clearDraftForPath(normalizedPath);
      return;
    }
    const previousFingerprint = lastSummaryFingerprintRef.current.get(normalizedPath);
    lastSummaryFingerprintRef.current.set(normalizedPath, fingerprint);
    if (previousFingerprint === fingerprint) return;
    scheduleDraftGeneration(normalizedPath, fingerprint);
  }, [clearDraftForPath, enabled, isPaused, scheduleDraftGeneration]);

  useEffect(() => {
    if (!enabled) return;

    const dirtyPaths = new Set(dirtySessions.map((session) => normalizeWorktreePath(session.path)));
    for (const path of Object.keys(draftsByPathRef.current)) {
      if (!dirtyPaths.has(path)) {
        clearDraftForPath(path);
      }
    }

    if (dirtySessions.length === 0) return;

    let disposed = false;
    const probeAll = async () => {
      if (disposed || isPaused()) return;
      await Promise.all(dirtySessions.map((session) => probeDirtySession(session)));
    };

    void probeAll();
    const intervalId = window.setInterval(() => {
      void probeAll();
    }, SUMMARY_PROBE_MS);

    return () => {
      disposed = true;
      window.clearInterval(intervalId);
    };
  }, [clearDraftForPath, dirtySessions, enabled, isPaused, probeDirtySession]);

  useEffect(() => () => {
    for (const timerId of debounceTimersRef.current.values()) {
      window.clearTimeout(timerId);
    }
    debounceTimersRef.current.clear();
  }, []);

  const draftsByWorkingTreeId = useMemo(
    () => buildWorktreeDraftDisplayMap(draftsByPath, pathByWorkingTreeId),
    [draftsByPath, pathByWorkingTreeId],
  );

  const getPreparedCommitMessage = useCallback((worktreePath: string): string | null => {
    const entry = findDraftEntry(draftsByPathRef.current, worktreePath);
    if (entry?.status !== 'ready') return null;
    const message = entry.commitMessage.trim();
    return message || null;
  }, []);

  const getPreparedStashMessage = useCallback((worktreePath: string): string | null => {
    const entry = findDraftEntry(draftsByPathRef.current, worktreePath);
    if (entry?.status !== 'ready') return null;
    const message = (entry.stashMessage || entry.commitMessage).trim();
    return message || null;
  }, []);

  return {
    draftsByPath,
    draftsByWorkingTreeId,
    pathByWorkingTreeId,
    getPreparedCommitMessage,
    getPreparedStashMessage,
    clearDraftForPath,
  };
};
