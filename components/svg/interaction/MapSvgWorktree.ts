import type { Branch, DirectCommit, WorktreeInfo } from '../../../types';
import type { CheckoutAccent } from '../core/MapSvg.types';
import { shaMatchesGitRef } from '../core/MapSvg.utils';

export function normalizeRepoPathForCompare(p: string): string {
  return p.replace(/\\/g, '/').replace(/\/+$/, '');
}

export function isOtherWorktree(wt: WorktreeInfo, currentRepoPath?: string): boolean {
  if (currentRepoPath) {
    const a = normalizeRepoPathForCompare(currentRepoPath);
    const b = normalizeRepoPathForCompare(wt.path);
    if (a === b || a.toLowerCase() === b.toLowerCase()) return false;
  }
  if (wt.isCurrent) return false;
  return true;
}

export function isUsableOtherWorktree(wt: WorktreeInfo, currentRepoPath?: string): boolean {
  if (wt.pathExists === false) return false;
  return isOtherWorktree(wt, currentRepoPath);
}

export function worktreeShortLabel(path: string): string {
  const parts = path.replace(/\\/g, '/').split('/').filter(Boolean);
  if (parts.length <= 2) return path;
  return `…/${parts.slice(-2).join('/')}`;
}

type BranchPreviewContainsSha = (branchName: string, sha: string) => boolean;

export function otherWorktreeMatchesBranchCommit(args: {
  branchName: string;
  commitFullSha: string;
  commitSha: string;
  worktrees: WorktreeInfo[];
  currentRepoPath?: string;
  branchPreviewContainsSha: BranchPreviewContainsSha;
  branchByName: Map<string, Branch>;
  defaultBranch: string;
  sortedDirectCommits: DirectCommit[];
}): boolean {
  const {
    branchName,
    commitFullSha,
    commitSha,
    worktrees,
    currentRepoPath,
    branchPreviewContainsSha,
    branchByName,
    defaultBranch,
    sortedDirectCommits,
  } = args;
  for (const wt of worktrees) {
    if (!isUsableOtherWorktree(wt, currentRepoPath)) continue;
    if (wt.branchName) {
      if (wt.branchName === branchName && shaMatchesGitRef(wt.headSha, commitFullSha)) return true;
      continue;
    }
    if (!shaMatchesGitRef(wt.headSha, commitFullSha) && !shaMatchesGitRef(wt.headSha, commitSha)) continue;
    if (wt.parentSha && branchPreviewContainsSha(branchName, wt.parentSha)) return true;
    if (branchPreviewContainsSha(branchName, wt.headSha)) return true;
    const branch = branchByName.get(branchName);
    if (branch && shaMatchesGitRef(branch.headSha, wt.headSha)) return true;
    if (branchName === defaultBranch) {
      if (sortedDirectCommits.some((c) => shaMatchesGitRef(c.fullSha, wt.headSha))) return true;
    }
  }
  return false;
}

export function findOtherWorktreeForCommit(args: {
  branchName: string;
  commitFullSha: string;
  commitSha: string;
  worktrees: WorktreeInfo[];
  currentRepoPath?: string;
  branchPreviewContainsSha: BranchPreviewContainsSha;
  branchByName: Map<string, Branch>;
  defaultBranch: string;
  sortedDirectCommits: DirectCommit[];
}): WorktreeInfo | null {
  const {
    branchName,
    commitFullSha,
    commitSha,
    worktrees,
    currentRepoPath,
    branchPreviewContainsSha,
    branchByName,
    defaultBranch,
    sortedDirectCommits,
  } = args;
  for (const wt of worktrees) {
    if (!isUsableOtherWorktree(wt, currentRepoPath)) continue;
    if (wt.branchName) {
      if (wt.branchName === branchName && shaMatchesGitRef(wt.headSha, commitFullSha)) return wt;
      continue;
    }
    if (!shaMatchesGitRef(wt.headSha, commitFullSha) && !shaMatchesGitRef(wt.headSha, commitSha)) continue;
    if (wt.parentSha && branchPreviewContainsSha(branchName, wt.parentSha)) return wt;
    if (branchPreviewContainsSha(branchName, wt.headSha)) return wt;
    const branch = branchByName.get(branchName);
    if (branch && shaMatchesGitRef(branch.headSha, wt.headSha)) return wt;
    if (branchName === defaultBranch) {
      if (sortedDirectCommits.some((c) => shaMatchesGitRef(c.fullSha, wt.headSha))) return wt;
    }
  }
  return null;
}

export function findWorktreeWithBranchCheckedOut(
  branchName: string,
  worktrees: WorktreeInfo[],
  currentRepoPath?: string,
): WorktreeInfo | null {
  for (const wt of worktrees) {
    if (!isUsableOtherWorktree(wt, currentRepoPath)) continue;
    if (wt.branchName === branchName) return wt;
  }
  return null;
}

export function findOtherWorktreeByHeadSha(
  commitFullSha: string,
  commitShortSha: string,
  worktrees: WorktreeInfo[],
  currentRepoPath?: string,
): WorktreeInfo | null {
  for (const wt of worktrees) {
    if (!isUsableOtherWorktree(wt, currentRepoPath)) continue;
    if (shaMatchesGitRef(wt.headSha, commitFullSha) || shaMatchesGitRef(wt.headSha, commitShortSha)) {
      return wt;
    }
  }
  return null;
}

export function mergeCheckoutAccent(args: {
  isPrimaryCheckout: boolean;
  branchName: string;
  fullSha: string;
  shortSha: string;
  worktrees: WorktreeInfo[];
  currentRepoPath?: string;
  branchPreviewContainsSha: BranchPreviewContainsSha;
  branchByName: Map<string, Branch>;
  defaultBranch: string;
  sortedDirectCommits: DirectCommit[];
}): CheckoutAccent {
  const { isPrimaryCheckout, branchName, fullSha, shortSha } = args;
  if (isPrimaryCheckout) return 'primary';
  if (otherWorktreeMatchesBranchCommit({ ...args, branchName, commitFullSha: fullSha, commitSha: shortSha })) return 'other';
  return 'none';
}

export function isSelectedLaneBranch(args: {
  branch: Branch;
  checkedOutBranchName: string | null;
  checkedOutHeadSha: string | null;
  branchPreviewContainsSha: BranchPreviewContainsSha;
}): boolean {
  const { branch, checkedOutBranchName, checkedOutHeadSha, branchPreviewContainsSha } = args;
  if (checkedOutBranchName) return checkedOutBranchName === branch.name;
  if (!checkedOutHeadSha) return false;
  return (
    shaMatchesGitRef(branch.headSha, checkedOutHeadSha) ||
    branchPreviewContainsSha(branch.name, checkedOutHeadSha)
  );
}
