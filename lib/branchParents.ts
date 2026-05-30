import type { Branch } from '../types';

export function isSameTipEmptyBranch(branch: Branch): boolean {
  return branch.commitsAhead <= 0;
}

const branchCreatedAtMs = (branch: Branch): number => {
  const raw = branch.createdDate ?? branch.divergedFromDate ?? branch.lastCommitDate;
  const time = new Date(raw).getTime();
  return Number.isFinite(time) ? time : 0;
};

/** Parent ref was created after this branch — cannot be a logical parent (e.g. worktree-agents → tile-nodebkd). */
export function isNewerBranchAsParent(
  branch: Branch,
  parentName: string,
  branchesByName: Map<string, Branch>,
): boolean {
  const parent = branchesByName.get(parentName);
  if (!parent) return false;
  return branchCreatedAtMs(parent) > branchCreatedAtMs(branch);
}

const shasMatch = (left?: string | null, right?: string | null): boolean => {
  if (!left || !right) return false;
  return left === right || left.startsWith(right) || right.startsWith(left);
};

export function isValidBranchParentName(
  parentName: string | null | undefined,
  branchName: string,
  defaultBranch: string,
  knownBranchNames: Set<string>,
): parentName is string {
  if (!parentName || parentName === branchName) return false;
  if (parentName === defaultBranch) return true;
  return knownBranchNames.has(parentName);
}

/**
 * True when `parentName` is another branch ref, not a real parent/child line.
 * Covers same-tip empty peers and same fork-on-main worktrees (map shows these as siblings).
 */
export function isParallelEmptyBranchParent(
  branch: Branch,
  parentName: string | null | undefined,
  branchesByName: Map<string, Branch>,
  defaultBranch: string,
): boolean {
  if (!parentName || parentName === branch.name || parentName === defaultBranch) return false;
  if (branch.commitsAhead > 0) return false;
  const parent = branchesByName.get(parentName);
  if (!parent) return false;

  if (branch.headSha && parent.headSha && branch.headSha === parent.headSha) {
    return true;
  }

  if (parent.commitsAhead > 0) {
    return false;
  }

  const childFork =
    branch.divergedFromSha ?? branch.createdFromSha ?? branch.presidesFromSha ?? null;
  const parentFork =
    parent.divergedFromSha ?? parent.createdFromSha ?? parent.presidesFromSha ?? null;
  if (childFork && parentFork && shasMatch(childFork, parentFork)) {
    return true;
  }

  return isNewerBranchAsParent(branch, parentName, branchesByName);
}

function pickValidatedParent(
  candidates: Array<string | null | undefined>,
  branch: Branch,
  defaultBranch: string,
  knownBranchNames: Set<string>,
): string | null {
  for (const candidate of candidates) {
    if (!isValidBranchParentName(candidate, branch.name, defaultBranch, knownBranchNames)) continue;
    return candidate;
  }
  return null;
}

/**
 * Resolved parent for sidebar/lanes. Validates map + git parent; ignores invalid map entries.
 */
export function resolveBranchParentName(
  branch: Branch,
  branchParentByName: Record<string, string | null>,
  defaultBranch: string,
  knownBranchNames: Set<string>,
): string | null {
  const mapped = branchParentByName[branch.name];
  return pickValidatedParent(
    [mapped != null ? mapped : undefined, branch.parentBranch],
    branch,
    defaultBranch,
    knownBranchNames,
  );
}

/**
 * Apply resolved parent map onto branch records so sidebar + lanes match the graph.
 * Invalid map parents fall back to git `parentBranch` (default branch is never in `branches[]`).
 */
export function applyBranchParents(
  branches: Branch[],
  branchParentByName: Record<string, string | null>,
  defaultBranch: string,
): Branch[] {
  const knownBranchNames = new Set(branches.map((branch) => branch.name));
  const byName = new Map(branches.map((branch) => [branch.name, branch] as const));

  return branches.map((branch) => {
    if (branch.name === defaultBranch) {
      return { ...branch, parentBranch: undefined };
    }

    const mapped = branchParentByName[branch.name];
    let parent = pickValidatedParent(
      [mapped != null ? mapped : undefined, branch.parentBranch],
      branch,
      defaultBranch,
      knownBranchNames,
    );

    if (parent && isParallelEmptyBranchParent(branch, parent, byName, defaultBranch)) {
      parent = defaultBranch;
    } else if (parent && isNewerBranchAsParent(branch, parent, byName)) {
      parent = defaultBranch;
    } else if (
      branch.commitsAhead <= 0
      && branch.remoteSyncStatus !== 'on-github'
      && parent !== defaultBranch
    ) {
      // No unique commits: only default is a valid parent (matches map lane rules).
      parent = defaultBranch;
    }

    if (!parent) {
      return { ...branch, parentBranch: undefined };
    }
    return { ...branch, parentBranch: parent };
  });
}
