import type { RepoVisualSnapshot } from '../types';
import { snapshotContainsCommitSha } from './reconcileCheckedOutHead';
import { formatWorktreeSyncSignature } from './worktreeSignature';

export type RepoSyncPeekLike = {
  signature: string;
};

export function parseRepoSyncPeekSignature(signature: string) {
  const [
    headSha,
    dirty,
    branchRefDigest,
    worktreeSig,
    stashSig,
    headUnpushedCount,
    remoteHeadsDigest,
  ] = signature.split('@@');
  return {
    headSha: headSha ?? '',
    hasUncommittedChanges: dirty === '1',
    branchRefDigest: branchRefDigest ?? '',
    worktreeSig: worktreeSig ?? '',
    stashSig: stashSig ?? '',
    headUnpushedCount: headUnpushedCount ?? '0',
    remoteHeadsDigest: remoteHeadsDigest ?? '',
  };
}

export function branchRefDigestFromSnapshot(snapshot: RepoVisualSnapshot): string {
  const lines = snapshot.branches.map((branch) => {
    const unpushedShas = [...(snapshot.unpushedCommitShasByBranch[branch.name] ?? [])].sort();
    return [
      branch.name,
      branch.headSha,
      branch.commitsAhead,
      branch.commitsBehind,
      branch.unpushedCommits,
      branch.remoteSyncStatus,
      unpushedShas.join(','),
    ].join(':');
  });
  if (!lines.some((line) => line.startsWith(`${snapshot.defaultBranch}:`))) {
    const head = snapshot.checkedOutRef?.headSha ?? '';
    if (head) lines.push(`${snapshot.defaultBranch}:${head}:0:0:0:on-github:`);
  }
  return lines.sort().join('|');
}

export function isRepoSnapshotBehindPeek(
  snapshot: RepoVisualSnapshot,
  peek: RepoSyncPeekLike,
): boolean {
  const parsed = parseRepoSyncPeekSignature(peek.signature);
  if (parsed.headSha && !snapshotContainsCommitSha(snapshot, parsed.headSha)) return true;
  const ref = snapshot.checkedOutRef;
  if (parsed.headSha && parsed.headSha !== (ref?.headSha ?? '')) return true;
  if (parsed.hasUncommittedChanges !== (ref?.hasUncommittedChanges ?? false)) return true;
  const branchDigest = branchRefDigestFromSnapshot(snapshot);
  if (parsed.branchRefDigest && branchDigest && parsed.branchRefDigest !== branchDigest) {
    return true;
  }
  const worktreeSig = formatWorktreeSyncSignature(snapshot.worktrees);
  if (parsed.worktreeSig && worktreeSig && parsed.worktreeSig !== worktreeSig) return true;
  const liveUnpushedCount = String(snapshot.unpushedDirectCommits.length);
  if (parsed.headUnpushedCount !== liveUnpushedCount) return true;
  return false;
}
