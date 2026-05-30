import { isWorkingTreeCommitId, workingTreeIdForPath } from './worktreeSessions';
import type {
  BranchCommitPreview,
  CheckedOutRef,
  DirectCommit,
  EnsureCommitAppPreviewOpts,
  GitStashEntry,
  WorktreeInfo,
} from '../types';

const STASH_KEY_PATTERN = /^STASH:(\d+)$/;

export const isPreviewEligibleCommitKey = (commitKey: string, kind?: BranchCommitPreview['kind']): boolean => {
  if (commitKey.startsWith('BRANCH_HEAD:')) return false;
  if (kind === 'branch-created') return false;
  return true;
};

export const buildEnsureCommitAppPreviewOpts = (input: {
  commitKey: string;
  repoPath: string;
  directCommits: DirectCommit[];
  worktrees: WorktreeInfo[];
  stashes: GitStashEntry[];
  checkedOutRef: CheckedOutRef | null;
  priority?: number;
  kind?: BranchCommitPreview['kind'];
  parentSha?: string | null;
  branchName?: string;
}): EnsureCommitAppPreviewOpts | null => {
  const {
    commitKey,
    repoPath,
    directCommits,
    worktrees,
    stashes,
    checkedOutRef,
    priority,
    kind,
    parentSha,
    branchName,
  } = input;

  if (!isPreviewEligibleCommitKey(commitKey, kind)) {
    return null;
  }

  const baseOpts: EnsureCommitAppPreviewOpts = {
    priority,
    kind,
    parentSha: parentSha ?? null,
    branchName,
  };

  if (isWorkingTreeCommitId(commitKey)) {
    const worktree = worktrees.find((entry) => {
      const workingTreeId = workingTreeIdForPath(entry.path, entry.isCurrent);
      return workingTreeId === commitKey;
    });
    const fallbackWorktree = worktrees.find((entry) => entry.isCurrent);
    const resolved = worktree ?? (commitKey === 'WORKING_TREE' ? fallbackWorktree : undefined);
    if (!resolved) {
      return {
        ...baseOpts,
        kind: 'uncommitted',
        worktreePath: repoPath,
        worktreeHeadSha: checkedOutRef?.headSha,
        worktreeHasUncommitted: checkedOutRef?.hasUncommittedChanges ?? false,
      };
    }
    return {
      ...baseOpts,
      kind: 'uncommitted',
      worktreePath: resolved.path,
      worktreeHeadSha: resolved.headSha,
      worktreeHasUncommitted: resolved.hasUncommittedChanges ?? false,
      branchName: resolved.branchName ?? branchName,
    };
  }

  const stashMatch = STASH_KEY_PATTERN.exec(commitKey);
  if (stashMatch) {
    const stashIndex = Number(stashMatch[1]);
    const stash = stashes.find((entry) => entry.index === stashIndex);
    if (!stash) return null;
    return {
      ...baseOpts,
      kind: 'stash',
      stashIndex: stash.index,
      stashBaseSha: stash.baseSha,
    };
  }

  const directCommit =
    directCommits.find((commit) => commit.fullSha === commitKey || commit.sha === commitKey) ?? null;

  return {
    ...baseOpts,
    fullSha: directCommit?.fullSha ?? commitKey,
    parentSha: directCommit?.parentSha ?? parentSha ?? null,
    kind: directCommit?.kind ?? kind ?? 'commit',
    branchName: directCommit?.branch ?? branchName,
  };
};

export const previewKeyForNode = (input: {
  commitId: string;
  visualId: string;
  clusterKey: string | null;
  isClusterOpen: boolean;
  isClusterLead: boolean;
}): string => {
  const { commitId, visualId, clusterKey, isClusterOpen, isClusterLead } = input;
  if (clusterKey && !isClusterOpen && isClusterLead) {
    const leadCommitId = commitId;
    return leadCommitId;
  }
  return commitId === visualId ? commitId : commitId;
};
