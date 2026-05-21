import type { Branch } from '../types';

export function isSameTipEmptyBranch(branch: Branch): boolean {
  return branch.commitsAhead <= 0;
}

/** True when `parentName` is another empty ref at the same tip — not a real parent/child relationship. */
export function isParallelEmptyBranchParent(
  branch: Branch,
  parentName: string | null | undefined,
  branchesByName: Map<string, Branch>,
): boolean {
  if (!parentName || parentName === branch.name) return false;
  if (branch.commitsAhead > 0) return false;
  const parent = branchesByName.get(parentName);
  if (!parent || parent.commitsAhead > 0) return false;
  if (!branch.headSha || !parent.headSha) return false;
  return branch.headSha === parent.headSha;
}

/**
 * Apply resolved parent map onto branch records so sidebar + lanes match the graph.
 * `branchParentByName` wins over raw git `parentBranch` when both are set.
 */
export function applyBranchParents(
  branches: Branch[],
  branchParentByName: Record<string, string | null>,
  defaultBranch: string,
): Branch[] {
  const known = new Set(branches.map((branch) => branch.name));
  const byName = new Map(branches.map((branch) => [branch.name, branch] as const));

  return branches.map((branch) => {
    if (branch.name === defaultBranch) {
      return { ...branch, parentBranch: undefined };
    }
    const mapped = branchParentByName[branch.name] ?? branch.parentBranch ?? null;
    if (!mapped || mapped === branch.name) {
      return { ...branch, parentBranch: undefined };
    }
    if (isParallelEmptyBranchParent(branch, mapped, byName)) {
      return { ...branch, parentBranch: defaultBranch };
    }
    if (mapped !== defaultBranch && !known.has(mapped)) {
      return { ...branch, parentBranch: undefined };
    }
    return { ...branch, parentBranch: mapped };
  });
}
