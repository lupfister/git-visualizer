import { isWorkingTreeCommitId, shaMatches } from '../lib/worktreeSessions';
import type { CheckedOutRef, RepoQuickState, RepoVisualSnapshot } from '../types';

export type MergeCheckedOutRefOptions = {
  /** After commit: ignore a stale dirty quick probe while HEAD matches this sha. */
  protectedHeadSha?: string | null;
};

export function snapshotContainsCommitSha(
  snapshot: RepoVisualSnapshot,
  sha: string | null | undefined,
): boolean {
  if (!sha || isWorkingTreeCommitId(sha)) return false;
  if (snapshot.directCommits.some((commit) => commit.fullSha === sha)) return true;
  for (const previews of Object.values(snapshot.branchCommitPreviews)) {
    if (previews.some((preview) => preview.fullSha === sha)) return true;
  }
  return false;
}

/**
 * Merge live git quick-state into a snapshot ref without letting a stale probe
 * revert an optimistic post-commit head or re-mark the tree dirty.
 */
export function mergeCheckedOutRefWithQuickState(
  base: CheckedOutRef,
  quickState: RepoQuickState,
  snapshot: RepoVisualSnapshot,
  options?: MergeCheckedOutRefOptions,
): CheckedOutRef {
  const refHead = base.headSha ?? '';
  const quickHead = quickState.headSha ?? '';

  const refHeadIsCommit = Boolean(refHead)
    && !isWorkingTreeCommitId(refHead)
    && snapshotContainsCommitSha(snapshot, refHead);
  const quickHeadIsCommit = Boolean(quickHead)
    && !isWorkingTreeCommitId(quickHead)
    && snapshotContainsCommitSha(snapshot, quickHead);

  let headSha = refHead;
  if (quickHead === refHead) {
    headSha = refHead;
  } else if (refHeadIsCommit && !quickHeadIsCommit) {
    headSha = refHead;
  } else if (quickHeadIsCommit && !refHeadIsCommit) {
    headSha = quickHead;
  } else {
    headSha = quickHead || refHead;
  }

  const headAlignedWithQuick = headSha === quickHead;
  const protectedHead = options?.protectedHeadSha ?? null;
  const suppressStaleDirtyProbe = Boolean(
    protectedHead
    && headAlignedWithQuick
    && !base.hasUncommittedChanges
    && quickState.hasUncommittedChanges
    && shaMatches(headSha, protectedHead),
  );
  let hasUncommittedChanges = base.hasUncommittedChanges;
  if (headAlignedWithQuick) {
    if (base.hasUncommittedChanges) {
      hasUncommittedChanges = quickState.hasUncommittedChanges;
    } else if (suppressStaleDirtyProbe) {
      hasUncommittedChanges = false;
    } else {
      hasUncommittedChanges = quickState.hasUncommittedChanges;
    }
  } else if (headSha === refHead) {
    hasUncommittedChanges = base.hasUncommittedChanges;
  } else {
    hasUncommittedChanges = quickState.hasUncommittedChanges;
  }

  const parentSha = headAlignedWithQuick
    ? (quickState.upstreamSha ?? base.parentSha ?? null)
    : (base.parentSha ?? null);

  return {
    ...base,
    headSha,
    hasUncommittedChanges,
    parentSha,
  };
}

/** Apply live git dirty flag for markDirty/discardDirty outcomes (ignores post-commit suppression). */
export function checkedOutRefWithDirtyFromQuickState(
  snapshot: RepoVisualSnapshot,
  quickState: RepoQuickState,
  reconciledRef: CheckedOutRef | null,
  dirty: boolean,
): CheckedOutRef {
  const base = reconciledRef ?? snapshot.checkedOutRef ?? {
    branchName: null,
    headSha: quickState.headSha,
    hasUncommittedChanges: false,
    parentSha: quickState.upstreamSha ?? null,
  };
  return {
    ...base,
    headSha: reconciledRef?.headSha ?? quickState.headSha,
    hasUncommittedChanges: dirty,
    parentSha: reconciledRef?.parentSha ?? quickState.upstreamSha ?? null,
  };
}

export function mergeSnapshotCheckedOutRefWithQuickState(
  snapshot: RepoVisualSnapshot,
  quickState: RepoQuickState | null,
  options?: MergeCheckedOutRefOptions,
): RepoVisualSnapshot {
  if (!quickState || !snapshot.checkedOutRef) return snapshot;
  return {
    ...snapshot,
    checkedOutRef: mergeCheckedOutRefWithQuickState(
      snapshot.checkedOutRef,
      quickState,
      snapshot,
      options,
    ),
  };
}
