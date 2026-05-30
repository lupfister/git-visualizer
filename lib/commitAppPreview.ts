import { convertFileSrc, invoke } from '@tauri-apps/api/core';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { buildEnsureCommitAppPreviewOpts } from './commitAppPreviewKey';
import { workingTreeIdForPath } from './worktreeSessions';
import type {
  BranchCommitPreview,
  CheckedOutRef,
  CommitAppPreview,
  CommitAppPreviewStatus,
  DirectCommit,
  EnsureCommitAppPreviewOpts,
  GitStashEntry,
  WorktreeInfo,
} from '../types';

type CommitAppPreviewRecord = {
  commitKey: string;
  status: string;
  gitRef?: string | null;
  route?: string | null;
  imagePath?: string | null;
  error?: string | null;
};

const POLL_INTERVAL_MS = 2000;

const toPreviewStatus = (status: string): CommitAppPreviewStatus => {
  if (status === 'ready') return 'ready';
  if (status === 'pending') return 'pending';
  if (status === 'failed') return 'failed';
  if (status === 'skipped') return 'skipped';
  return 'idle';
};

const recordToPreview = (record: CommitAppPreviewRecord): CommitAppPreview => ({
  commitKey: record.commitKey,
  status: toPreviewStatus(record.status),
  route: record.route ?? undefined,
  error: record.error ?? undefined,
  gitRef: record.gitRef ?? undefined,
  imageSrc: record.imagePath ? convertFileSrc(record.imagePath) : undefined,
});

const fetchCommitAppPreviewsBatch = async (
  repoPath: string,
  commitKeys: string[],
): Promise<CommitAppPreview[]> => {
  if (commitKeys.length === 0) return [];
  const records = await invoke<CommitAppPreviewRecord[]>('get_commit_app_previews_batch', {
    repoPath,
    commitKeys,
  });
  return records.map(recordToPreview);
};

const ensureCommitAppPreview = async (
  repoPath: string,
  commitKey: string,
  opts: EnsureCommitAppPreviewOpts,
): Promise<CommitAppPreview> => {
  const record = await invoke<CommitAppPreviewRecord>('ensure_commit_app_preview', {
    repoPath,
    commitKey,
    opts,
  });
  return recordToPreview(record);
};

export const openPreviewAuthBrowser = async (repoPath: string, branch: string): Promise<void> => {
  await invoke('open_preview_browser', { repoPath, branch });
};

export type CommitPreviewContext = {
  repoPath: string | null;
  directCommits: DirectCommit[];
  worktrees: WorktreeInfo[];
  stashes: GitStashEntry[];
  checkedOutRef: CheckedOutRef | null;
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
  defaultBranch: string;
};

export const useCommitAppPreviewManager = (
  context: CommitPreviewContext,
  visibleCommitKeys: string[],
) => {
  const [previewsByKey, setPreviewsByKey] = useState<Map<string, CommitAppPreview>>(() => new Map());
  const ensuredKeysRef = useRef<Set<string>>(new Set());
  const pendingPollKeysRef = useRef<Set<string>>(new Set());

  const commitMetaByKey = useMemo(() => {
    const map = new Map<string, BranchCommitPreview>();
    for (const previews of Object.values(context.branchCommitPreviews)) {
      for (const preview of previews) {
        map.set(preview.fullSha, preview);
      }
    }
    for (const commit of context.directCommits) {
      map.set(commit.fullSha, {
        fullSha: commit.fullSha,
        sha: commit.sha,
        parentSha: commit.parentSha ?? null,
        parentShas: commit.parentShas,
        childShas: commit.childShas,
        message: commit.message,
        author: commit.author,
        date: commit.date,
        kind: commit.kind,
        isRemote: commit.isRemote,
      });
    }
    return map;
  }, [context.branchCommitPreviews, context.directCommits]);

  const buildOpts = useCallback(
    (commitKey: string, priority = 0): EnsureCommitAppPreviewOpts | null => {
      if (!context.repoPath) return null;
      const meta = commitMetaByKey.get(commitKey);
      return buildEnsureCommitAppPreviewOpts({
        commitKey,
        repoPath: context.repoPath,
        directCommits: context.directCommits,
        worktrees: context.worktrees,
        stashes: context.stashes,
        checkedOutRef: context.checkedOutRef,
        priority,
        kind: meta?.kind,
        parentSha: meta?.parentSha ?? null,
        branchName: meta ? undefined : context.defaultBranch,
      });
    },
    [
      commitMetaByKey,
      context.checkedOutRef,
      context.defaultBranch,
      context.directCommits,
      context.repoPath,
      context.stashes,
      context.worktrees,
    ],
  );

  const upsertPreviews = useCallback((records: CommitAppPreview[]) => {
    if (records.length === 0) return;
    setPreviewsByKey((previous) => {
      const next = new Map(previous);
      for (const record of records) {
        next.set(record.commitKey, record);
        if (record.status === 'ready' || record.status === 'skipped' || record.status === 'failed') {
          pendingPollKeysRef.current.delete(record.commitKey);
        } else if (record.status === 'pending') {
          pendingPollKeysRef.current.add(record.commitKey);
        }
      }
      return next;
    });
  }, []);

  const allKnownCommitKeys = useMemo(() => {
    const keys = new Set<string>();
    for (const commit of context.directCommits) {
      keys.add(commit.fullSha);
    }
    for (const previews of Object.values(context.branchCommitPreviews)) {
      for (const preview of previews) {
        keys.add(preview.fullSha);
      }
    }
    for (const worktree of context.worktrees) {
      keys.add(workingTreeIdForPath(worktree.path, worktree.isCurrent));
    }
    for (const stash of context.stashes) {
      keys.add(`STASH:${stash.index}`);
    }
    return [...keys];
  }, [context.branchCommitPreviews, context.directCommits, context.stashes, context.worktrees]);

  useEffect(() => {
    if (!context.repoPath) {
      setPreviewsByKey(new Map());
      ensuredKeysRef.current.clear();
      pendingPollKeysRef.current.clear();
      return;
    }

    ensuredKeysRef.current.clear();
    pendingPollKeysRef.current.clear();
    setPreviewsByKey(new Map());

    if (allKnownCommitKeys.length === 0) return;

    void fetchCommitAppPreviewsBatch(context.repoPath, allKnownCommitKeys)
      .then(upsertPreviews)
      .catch((error) => {
        console.error('Failed to load commit app previews', error);
      });
  }, [allKnownCommitKeys, context.repoPath, upsertPreviews]);

  useEffect(() => {
    if (!context.repoPath || visibleCommitKeys.length === 0) return;

    for (const commitKey of visibleCommitKeys) {
      const existing = previewsByKey.get(commitKey);
      if (existing?.status === 'ready' || existing?.status === 'skipped' || existing?.status === 'pending') {
        continue;
      }
      if (ensuredKeysRef.current.has(commitKey) && existing?.status !== 'failed') {
        continue;
      }
      const opts = buildOpts(commitKey, 100);
      if (!opts) continue;
      ensuredKeysRef.current.add(commitKey);
      void ensureCommitAppPreview(context.repoPath, commitKey, opts)
        .then((record) => upsertPreviews([record]))
        .catch((error) => {
          console.error(`Failed to ensure visible preview for ${commitKey}`, error);
        });
    }
  }, [buildOpts, context.repoPath, previewsByKey, upsertPreviews, visibleCommitKeys]);

  useEffect(() => {
    if (!context.repoPath) return;
    const pendingKeys = [...pendingPollKeysRef.current];
    if (pendingKeys.length === 0) return;

    const intervalId = window.setInterval(() => {
      const keys = [...pendingPollKeysRef.current];
      if (keys.length === 0) return;
      void fetchCommitAppPreviewsBatch(context.repoPath!, keys)
        .then(upsertPreviews)
        .catch((error) => {
          console.error('Failed to poll commit app previews', error);
        });
    }, POLL_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [context.repoPath, previewsByKey, upsertPreviews]);

  const commitAppPreviews = useMemo(() => Object.fromEntries(previewsByKey), [previewsByKey]);

  const hasAuthLikePreviewFailures = useMemo(
    () =>
      Object.values(commitAppPreviews).some((preview) => {
        if (preview.status !== 'failed') return false;
        const message = preview.error?.toLowerCase() ?? '';
        return message.includes('login') || message.includes('auth') || message.includes('redirect');
      }),
    [commitAppPreviews],
  );

  const handleOpenPreviewAuth = useCallback(async () => {
    if (!context.repoPath) {
      throw new Error('No repository open');
    }
    const branch = context.checkedOutRef?.branchName ?? context.defaultBranch;
    if (!branch) {
      throw new Error('Could not determine the current branch for preview login');
    }
    await openPreviewAuthBrowser(context.repoPath, branch);
  }, [context.checkedOutRef?.branchName, context.defaultBranch, context.repoPath]);

  return {
    commitAppPreviews,
    hasAuthLikePreviewFailures,
    handleOpenPreviewAuth,
  };
};
