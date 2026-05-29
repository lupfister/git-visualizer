import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { normalizeRepoPathForCompare } from '../components/grid/mapGridUtils';
import type { WorktreeSession } from '../lib/worktreeSessions';
import {
  buildWorktreeDraftDisplayMap,
  draftNeedsRegeneration,
  formatWorktreeSummaryFallback,
  hashWorktreeSummary,
  resolvePreviousCommitTitleForRegeneration,
  resolvePreviousStashTitleForRegeneration,
  resolvePreparedCommitMessage,
  resolvePreparedStashMessage,
  WORKTREE_DRAFT_DEBOUNCE_MS,
  type WorktreeDraftEntry,
  type WorktreeDraftDisplay,
} from './worktreeDraftMessages';
import {
  readPersistedWorktreeDraft,
  removePersistedWorktreeDraft,
  writePersistedWorktreeDraft,
} from './worktreeDraftStorage';

const SUMMARY_PROBE_MS = 3000;
const PERSIST_DEBOUNCE_MS = 400;

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
  draftsByWorkingTreeId: ReadonlyMap<string, WorktreeDraftDisplay>;
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
  const hydratedPathsRef = useRef<Set<string>>(new Set());
  const persistTimerRef = useRef<number | null>(null);

  const dirtySessions = useMemo(
    () => worktreeSessions.filter((session) => session.hasUncommittedChanges && session.pathExists !== false),
    [worktreeSessions],
  );

  const dirtyWorkingTreeIds = useMemo(
    () => dirtySessions.map((session) => session.workingTreeId),
    [dirtySessions],
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
    hydratedPathsRef.current.delete(normalizedPath);
    removePersistedWorktreeDraft(normalizedPath);
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
      existing
      && !draftNeedsRegeneration(existing)
      && existing.summaryFingerprint === summaryFingerprint
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
        messageFingerprint: existing?.messageFingerprint ?? '',
        fallbackLabel: existing?.fallbackLabel ?? formatWorktreeSummaryFallback(''),
      },
    }));

    try {
      const previousCommit = resolvePreviousCommitTitleForRegeneration(existing);
      const previousStash = resolvePreviousStashTitleForRegeneration(existing);
      const [commitMessage, stashMessage] = await Promise.all([
        invoke<string>('generate_commit_message', {
          repoPath: normalizedPath,
          previousMessage: previousCommit ?? null,
        }).catch(() => ''),
        invoke<string>('generate_stash_message', {
          repoPath: normalizedPath,
          previousMessage: previousStash ?? null,
        }).catch(() => ''),
      ]);

      if (generation !== generationTokenRef.current.get(normalizedPath)) return;

      const trimmedCommit = commitMessage.trim();
      const trimmedStash = stashMessage.trim();
      const latest = draftsByPathRef.current[normalizedPath];
      if (!trimmedCommit && !trimmedStash) {
        setDraftsByPath((previous) => ({
          ...previous,
          [normalizedPath]: {
            status: 'error',
            commitMessage: existing?.commitMessage ?? '',
            stashMessage: existing?.stashMessage ?? '',
            summaryFingerprint,
            messageFingerprint: existing?.messageFingerprint ?? '',
            fallbackLabel: latest?.fallbackLabel ?? formatWorktreeSummaryFallback(''),
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
          messageFingerprint: summaryFingerprint,
          fallbackLabel: latest?.fallbackLabel ?? formatWorktreeSummaryFallback(''),
        },
      }));
    } catch {
      if (generation !== generationTokenRef.current.get(normalizedPath)) return;
      const latest = draftsByPathRef.current[normalizedPath];
      setDraftsByPath((previous) => ({
        ...previous,
        [normalizedPath]: {
          status: 'error',
          commitMessage: existing?.commitMessage ?? '',
          stashMessage: existing?.stashMessage ?? '',
          summaryFingerprint,
          messageFingerprint: existing?.messageFingerprint ?? '',
          fallbackLabel: latest?.fallbackLabel ?? formatWorktreeSummaryFallback(''),
        },
      }));
    } finally {
      inFlightRef.current.delete(normalizedPath);
    }
  }, [isPaused]);

  const scheduleDraftGeneration = useCallback((
    normalizedPath: string,
    summaryFingerprint: string,
    delayMs: number = WORKTREE_DRAFT_DEBOUNCE_MS,
  ) => {
    clearDebounceTimer(normalizedPath);
    const timerId = window.setTimeout(() => {
      debounceTimersRef.current.delete(normalizedPath);
      void runDraftGeneration(normalizedPath, summaryFingerprint);
    }, delayMs);
    debounceTimersRef.current.set(normalizedPath, timerId);
  }, [clearDebounceTimer, runDraftGeneration]);

  const maybeScheduleDraftGeneration = useCallback((
    normalizedPath: string,
    summaryFingerprint: string,
    options?: { immediate?: boolean },
  ) => {
    const existing = draftsByPathRef.current[normalizedPath];
    if (existing && !draftNeedsRegeneration(existing) && existing.summaryFingerprint === summaryFingerprint) {
      return;
    }
    if (debounceTimersRef.current.has(normalizedPath) || inFlightRef.current.has(normalizedPath)) {
      return;
    }
    const delayMs = options?.immediate ? 0 : WORKTREE_DRAFT_DEBOUNCE_MS;
    scheduleDraftGeneration(normalizedPath, summaryFingerprint, delayMs);
  }, [scheduleDraftGeneration]);

  const probeDirtySession = useCallback(async (session: WorktreeSession) => {
    if (!enabled || isPaused()) return;
    const normalizedPath = normalizeWorktreePath(session.path);
    const summary = await invoke<string>('get_working_tree_summary', { repoPath: normalizedPath }).catch(() => null);
    if (summary == null) return;

    const fingerprint = hashWorktreeSummary(summary);
    const fallbackLabel = formatWorktreeSummaryFallback(summary);
    if (!fingerprint) {
      clearDraftForPath(normalizedPath);
      return;
    }

    const previousFingerprint = lastSummaryFingerprintRef.current.get(normalizedPath);
    const isFirstFingerprint = previousFingerprint == null;
    lastSummaryFingerprintRef.current.set(normalizedPath, fingerprint);
    const treeChangedSinceLastProbe = previousFingerprint != null && previousFingerprint !== fingerprint;

    setDraftsByPath((previous) => {
      const existing = previous[normalizedPath];
      const treeChangedSinceMessage = existing != null && existing.messageFingerprint !== fingerprint;
      const nextEntry: WorktreeDraftEntry = {
        status: treeChangedSinceMessage || treeChangedSinceLastProbe
          ? 'pending'
          : (existing?.status ?? 'pending'),
        commitMessage: existing?.commitMessage ?? '',
        stashMessage: existing?.stashMessage ?? '',
        summaryFingerprint: fingerprint,
        messageFingerprint: existing?.messageFingerprint ?? '',
        fallbackLabel,
      };
      if (
        existing
        && existing.fallbackLabel === nextEntry.fallbackLabel
        && existing.status === nextEntry.status
        && existing.commitMessage === nextEntry.commitMessage
        && existing.stashMessage === nextEntry.stashMessage
        && existing.summaryFingerprint === nextEntry.summaryFingerprint
        && existing.messageFingerprint === nextEntry.messageFingerprint
      ) {
        return previous;
      }
      return {
        ...previous,
        [normalizedPath]: nextEntry,
      };
    });

    const current = draftsByPathRef.current[normalizedPath];
    if (current && !draftNeedsRegeneration(current) && current.summaryFingerprint === fingerprint) {
      return;
    }

    if (previousFingerprint === fingerprint) {
      maybeScheduleDraftGeneration(normalizedPath, fingerprint);
      return;
    }

    const staleMessage = current != null && current.messageFingerprint !== fingerprint;
    const delayMs = isFirstFingerprint || staleMessage ? 0 : WORKTREE_DRAFT_DEBOUNCE_MS;
    scheduleDraftGeneration(normalizedPath, fingerprint, delayMs);
  }, [
    clearDraftForPath,
    enabled,
    isPaused,
    maybeScheduleDraftGeneration,
    scheduleDraftGeneration,
  ]);

  useEffect(() => {
    if (!enabled) return;

    setDraftsByPath((previous) => {
      let changed = false;
      const next = { ...previous };
      for (const session of dirtySessions) {
        const normalizedPath = normalizeWorktreePath(session.path);
        if (hydratedPathsRef.current.has(normalizedPath) || next[normalizedPath]) {
          hydratedPathsRef.current.add(normalizedPath);
          continue;
        }
        const stored = readPersistedWorktreeDraft(normalizedPath);
        hydratedPathsRef.current.add(normalizedPath);
        if (!stored) continue;
        next[normalizedPath] = stored;
        lastSummaryFingerprintRef.current.set(normalizedPath, stored.summaryFingerprint);
        changed = true;
      }
      return changed ? next : previous;
    });
  }, [dirtySessions, enabled]);

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

  useEffect(() => {
    if (!enabled) return;
    if (persistTimerRef.current != null) {
      window.clearTimeout(persistTimerRef.current);
    }
    persistTimerRef.current = window.setTimeout(() => {
      persistTimerRef.current = null;
      for (const [path, entry] of Object.entries(draftsByPathRef.current)) {
        if (entry.commitMessage.trim() || entry.summaryFingerprint) {
          writePersistedWorktreeDraft(path, entry);
        }
      }
    }, PERSIST_DEBOUNCE_MS);

    return () => {
      if (persistTimerRef.current != null) {
        window.clearTimeout(persistTimerRef.current);
      }
    };
  }, [draftsByPath, enabled]);

  useEffect(() => () => {
    for (const timerId of debounceTimersRef.current.values()) {
      window.clearTimeout(timerId);
    }
    debounceTimersRef.current.clear();
  }, []);

  const draftsByWorkingTreeId = useMemo(
    () => buildWorktreeDraftDisplayMap(draftsByPath, pathByWorkingTreeId, dirtyWorkingTreeIds),
    [draftsByPath, dirtyWorkingTreeIds, pathByWorkingTreeId],
  );

  const getPreparedCommitMessage = useCallback((worktreePath: string): string | null => {
    return resolvePreparedCommitMessage(findDraftEntry(draftsByPathRef.current, worktreePath));
  }, []);

  const getPreparedStashMessage = useCallback((worktreePath: string): string | null => {
    return resolvePreparedStashMessage(findDraftEntry(draftsByPathRef.current, worktreePath));
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
