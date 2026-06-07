import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { invoke } from './timedInvoke';
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
  hasAiCommitMessageReady,
  resolveAiCommitMessageForCommit,
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
/** Max wait when user commits while the node still shows Building. */
const COMMIT_MESSAGE_WAIT_MS = 95_000;
const COMMIT_MESSAGE_POLL_MS = 150;

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
  onWorktreeCleanStateDetected?: (worktreePath: string) => void;
};

type UseWorktreeDraftMessagesResult = {
  draftsByPath: Readonly<Record<string, WorktreeDraftEntry>>;
  draftsByWorkingTreeId: ReadonlyMap<string, WorktreeDraftDisplay>;
  pathByWorkingTreeId: Readonly<Record<string, string>>;
  getPreparedCommitMessage: (worktreePath: string) => string | null;
  getPreparedStashMessage: (worktreePath: string) => string | null;
  waitForPreparedCommitMessage: (worktreePath: string) => Promise<string | null>;
  clearDraftForPath: (worktreePath: string) => void;
};

export const useWorktreeDraftMessages = ({
  worktreeSessions,
  isPaused,
  enabled = true,
  onWorktreeCleanStateDetected,
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
  const runDraftGenerationRef = useRef<(normalizedPath: string, summaryFingerprint: string) => Promise<void>>(
    async () => {},
  );

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
    if (inFlightRef.current.has(normalizedPath)) {
      clearDebounceTimer(normalizedPath);
      const timerId = window.setTimeout(() => {
        debounceTimersRef.current.delete(normalizedPath);
        void runDraftGenerationRef.current(normalizedPath, summaryFingerprint);
      }, WORKTREE_DRAFT_DEBOUNCE_MS);
      debounceTimersRef.current.set(normalizedPath, timerId);
      return;
    }
    if (isPaused()) {
      clearDebounceTimer(normalizedPath);
      const timerId = window.setTimeout(() => {
        debounceTimersRef.current.delete(normalizedPath);
        void runDraftGenerationRef.current(normalizedPath, summaryFingerprint);
      }, WORKTREE_DRAFT_DEBOUNCE_MS);
      debounceTimersRef.current.set(normalizedPath, timerId);
      return;
    }

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

    setDraftsByPath((previous) => {
      const latest = previous[normalizedPath];
      const preservedCommit = latest?.commitMessage.trim() || existing?.commitMessage.trim() || '';
      const preservedStash = latest?.stashMessage.trim() || existing?.stashMessage.trim() || '';
      const keepReady = latest?.status === 'ready' && Boolean(preservedCommit);
      return {
        ...previous,
        [normalizedPath]: {
          status: keepReady ? 'ready' : 'pending',
          commitMessage: preservedCommit,
          stashMessage: preservedStash,
          summaryFingerprint,
          messageFingerprint: latest?.messageFingerprint ?? existing?.messageFingerprint ?? '',
          fallbackLabel: latest?.fallbackLabel ?? existing?.fallbackLabel ?? formatWorktreeSummaryFallback(''),
        },
      };
    });

    try {
      const previousCommit = resolvePreviousCommitTitleForRegeneration(existing);
      const commitSettled = await invoke<string>('generate_commit_message', {
        repoPath: normalizedPath,
        previousMessage: previousCommit ?? null,
      }).then(
        (value) => ({ status: 'fulfilled' as const, value }),
        (reason) => ({ status: 'rejected' as const, reason }),
      );

      if (generation !== generationTokenRef.current.get(normalizedPath)) return;

      const trimmedCommit = commitSettled.status === 'fulfilled' ? commitSettled.value.trim() : '';
      if (import.meta.env.DEV && commitSettled.status === 'rejected') {
        console.warn('[worktree-draft] commit title failed', normalizedPath, commitSettled.reason);
      }
      const latest = draftsByPathRef.current[normalizedPath];
      if (!trimmedCommit) {
        setDraftsByPath((previous) => {
          const current = previous[normalizedPath];
          return {
            ...previous,
            [normalizedPath]: {
              status: 'error',
              commitMessage: current?.commitMessage ?? existing?.commitMessage ?? '',
              stashMessage: current?.stashMessage ?? existing?.stashMessage ?? '',
              summaryFingerprint,
              messageFingerprint: current?.messageFingerprint ?? existing?.messageFingerprint ?? '',
              fallbackLabel: latest?.fallbackLabel ?? current?.fallbackLabel ?? formatWorktreeSummaryFallback(''),
            },
          };
        });
        return;
      }

      setDraftsByPath((previous) => {
        const current = previous[normalizedPath];
        return {
          ...previous,
          [normalizedPath]: {
            status: 'ready',
            commitMessage: trimmedCommit,
            stashMessage: current?.stashMessage.trim() || existing?.stashMessage.trim() || trimmedCommit,
            summaryFingerprint,
            messageFingerprint: summaryFingerprint,
            fallbackLabel: latest?.fallbackLabel ?? current?.fallbackLabel ?? formatWorktreeSummaryFallback(''),
          },
        };
      });

      const previousStash = resolvePreviousStashTitleForRegeneration(existing);
      void invoke<string>('generate_stash_message', {
        repoPath: normalizedPath,
        previousMessage: previousStash ?? null,
      }).then((stashMessage) => {
        const trimmedStash = stashMessage.trim();
        if (!trimmedStash || generation !== generationTokenRef.current.get(normalizedPath)) return;
        setDraftsByPath((previous) => {
          const current = previous[normalizedPath];
          if (!current || current.summaryFingerprint !== summaryFingerprint) return previous;
          return {
            ...previous,
            [normalizedPath]: {
              ...current,
              stashMessage: trimmedStash,
            },
          };
        });
      }).catch((reason) => {
        if (import.meta.env.DEV) {
          console.warn('[worktree-draft] stash title failed', normalizedPath, reason);
        }
      });
    } catch (error) {
      if (generation !== generationTokenRef.current.get(normalizedPath)) return;
      const latest = draftsByPathRef.current[normalizedPath];
      if (import.meta.env.DEV) {
        console.warn('[worktree-draft] generation failed', normalizedPath, error);
      }
      setDraftsByPath((previous) => {
        const current = previous[normalizedPath];
        return {
          ...previous,
          [normalizedPath]: {
            status: 'error',
            commitMessage: current?.commitMessage ?? existing?.commitMessage ?? '',
            stashMessage: current?.stashMessage ?? existing?.stashMessage ?? '',
            summaryFingerprint,
            messageFingerprint: current?.messageFingerprint ?? existing?.messageFingerprint ?? '',
            fallbackLabel: latest?.fallbackLabel ?? current?.fallbackLabel ?? formatWorktreeSummaryFallback(''),
          },
        };
      });
    } finally {
      inFlightRef.current.delete(normalizedPath);
    }
  }, [clearDebounceTimer, isPaused]);
  runDraftGenerationRef.current = runDraftGeneration;

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

  const kickDraftGenerationForCommit = useCallback(async (normalizedPath: string) => {
    clearDebounceTimer(normalizedPath);
    const summary = await invoke<string>('get_working_tree_summary', { repoPath: normalizedPath }).catch(() => null);
    if (summary == null) return;

    const fingerprint = hashWorktreeSummary(summary);
    const fallbackLabel = formatWorktreeSummaryFallback(summary);
    if (!fingerprint) return;

    lastSummaryFingerprintRef.current.set(normalizedPath, fingerprint);
    const existing = draftsByPathRef.current[normalizedPath];

    setDraftsByPath((previous) => ({
      ...previous,
      [normalizedPath]: {
        status: 'pending',
        commitMessage: existing?.commitMessage ?? '',
        stashMessage: existing?.stashMessage ?? '',
        summaryFingerprint: fingerprint,
        messageFingerprint: existing?.messageFingerprint ?? '',
        fallbackLabel,
      },
    }));

    if (hasAiCommitMessageReady(draftsByPathRef.current[normalizedPath])) {
      return;
    }
    if (inFlightRef.current.has(normalizedPath)) {
      return;
    }
    await runDraftGeneration(normalizedPath, fingerprint);
  }, [clearDebounceTimer, runDraftGeneration]);

  const waitForPreparedCommitMessage = useCallback(async (worktreePath: string): Promise<string | null> => {
    const normalizedPath = normalizeWorktreePath(worktreePath);
    const readReady = (): string | null =>
      resolveAiCommitMessageForCommit(findDraftEntry(draftsByPathRef.current, worktreePath));

    let ready = readReady();
    if (ready) return ready;

    await kickDraftGenerationForCommit(normalizedPath);

    const deadline = Date.now() + COMMIT_MESSAGE_WAIT_MS;
    while (Date.now() < deadline) {
      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, COMMIT_MESSAGE_POLL_MS);
      });
      ready = readReady();
      if (ready) return ready;

      const entry = findDraftEntry(draftsByPathRef.current, worktreePath);
      if (
        entry?.status === 'error'
        && !inFlightRef.current.has(normalizedPath)
        && !debounceTimersRef.current.has(normalizedPath)
      ) {
        break;
      }
    }

    return readReady();
  }, [clearDebounceTimer, kickDraftGenerationForCommit]);

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
      const wasDirty = draftsByPathRef.current[normalizedPath] !== undefined ||
        dirtySessions.some((session) => normalizeWorktreePath(session.path) === normalizedPath);
      clearDraftForPath(normalizedPath);
      if (wasDirty && onWorktreeCleanStateDetected) {
        onWorktreeCleanStateDetected(normalizedPath);
      }
      return;
    }

    const previousFingerprint = lastSummaryFingerprintRef.current.get(normalizedPath);
    lastSummaryFingerprintRef.current.set(normalizedPath, fingerprint);
    const treeChangedSinceLastProbe = previousFingerprint != null && previousFingerprint !== fingerprint;

    setDraftsByPath((previous) => {
      const existing = previous[normalizedPath];
      const treeChangedSinceMessage = existing != null && existing.messageFingerprint !== fingerprint;
      const hasDisplayableTitle = Boolean(existing?.commitMessage.trim());
      const keepReadyWhileRegenerating =
        existing?.status === 'ready'
        && hasDisplayableTitle
        && (treeChangedSinceMessage || treeChangedSinceLastProbe);
      const nextEntry: WorktreeDraftEntry = {
        status: keepReadyWhileRegenerating
          ? 'ready'
          : treeChangedSinceMessage || treeChangedSinceLastProbe
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

    if (
      current?.status === 'ready'
      && current.commitMessage.trim()
      && current.messageFingerprint === fingerprint
    ) {
      return;
    }

    scheduleDraftGeneration(normalizedPath, fingerprint, WORKTREE_DRAFT_DEBOUNCE_MS);
  }, [
    clearDraftForPath,
    enabled,
    isPaused,
    maybeScheduleDraftGeneration,
    scheduleDraftGeneration,
    onWorktreeCleanStateDetected,
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

  const verifyAndClearDraftIfClean = useCallback(async (normalizedPath: string) => {
    if (dirtySessions.some((session) => normalizeWorktreePath(session.path) === normalizedPath)) {
      return;
    }
    const summary = await invoke<string>('get_working_tree_summary', { repoPath: normalizedPath }).catch(() => null);
    if (summary == null) return;
    if (!hashWorktreeSummary(summary)) {
      const wasDirty = draftsByPathRef.current[normalizedPath] !== undefined;
      clearDraftForPath(normalizedPath);
      if (wasDirty && onWorktreeCleanStateDetected) {
        onWorktreeCleanStateDetected(normalizedPath);
      }
    }
  }, [clearDraftForPath, dirtySessions, onWorktreeCleanStateDetected]);

  useEffect(() => {
    if (!enabled) return;

    const dirtyPaths = new Set(dirtySessions.map((session) => normalizeWorktreePath(session.path)));
    for (const path of Object.keys(draftsByPathRef.current)) {
      if (!dirtyPaths.has(path)) {
        void verifyAndClearDraftIfClean(path);
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
  }, [clearDraftForPath, dirtySessions, enabled, isPaused, probeDirtySession, verifyAndClearDraftIfClean]);

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
    waitForPreparedCommitMessage,
    clearDraftForPath,
  };
};
