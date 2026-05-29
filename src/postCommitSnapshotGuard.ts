import { shaMatches } from '../lib/worktreeSessions';
import type { RepoVisualSnapshot } from '../types';
import { snapshotContainsCommitSha } from './reconcileCheckedOutHead';

export function shouldRejectRegressionFromProtectedHead(
  snapshot: RepoVisualSnapshot,
  guard: string | undefined,
  proposedHeadSha: string | null | undefined,
  proposedBranchName?: string | null,
): boolean {
  if (!guard || !proposedHeadSha || shaMatches(proposedHeadSha, guard)) return false;
  if (!snapshotContainsCommitSha(snapshot, guard)) return false;

  const liveBranch = snapshot.checkedOutRef?.branchName ?? null;
  if (proposedBranchName && liveBranch && proposedBranchName !== liveBranch) {
    return false;
  }

  const liveHead = snapshot.checkedOutRef?.headSha ?? null;
  if (liveHead && shaMatches(liveHead, guard)) {
    return !shaMatches(proposedHeadSha, guard);
  }

  return false;
}

export function incomingSnapshotMissingProtectedHead(
  live: RepoVisualSnapshot,
  incoming: RepoVisualSnapshot,
  guard: string | undefined,
): boolean {
  if (!guard) return false;
  if (!snapshotContainsCommitSha(live, guard)) return false;
  return !snapshotContainsCommitSha(incoming, guard);
}

export function incomingSnapshotDropsProtectedHead(
  live: RepoVisualSnapshot,
  incoming: RepoVisualSnapshot,
  guard: string | undefined,
): boolean {
  if (!guard) return false;
  if (!snapshotContainsCommitSha(live, guard)) return false;
  return !snapshotContainsCommitSha(incoming, guard);
}

export function shouldBlockIncomingSnapshotApply(
  live: RepoVisualSnapshot,
  incoming: RepoVisualSnapshot,
  guard: string | undefined,
): boolean {
  if (incomingSnapshotMissingProtectedHead(live, incoming, guard)) return true;
  return (
    shouldRejectRegressionFromProtectedHead(
      live,
      guard,
      incoming.checkedOutRef?.headSha ?? null,
      incoming.checkedOutRef?.branchName ?? null,
    )
    || incomingSnapshotDropsProtectedHead(live, incoming, guard)
  );
}
