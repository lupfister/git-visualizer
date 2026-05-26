/**
 * Timeline row-sharing windows for unrelated commits vs branch siblings vs fork-point siblings.
 * Used by row allocation and fork-tip coalescing so both paths stay aligned.
 */

/** Unrelated commits on the same lane may share a row when within this window. */
export const SHARED_ROW_MAX_TIME_DELTA_MS = 60 * 60 * 1000;

/** Branch siblings (same fork parent, different lanes) — default window. */
export const SHARED_ROW_BRANCH_SIBLING_MAX_TIME_DELTA_MS = 60 * 60 * 1000;

/** Branch siblings at a true fork point (parent spans multiple lanes) — wider window. */
export const SHARED_ROW_BRANCH_SIBLING_FORK_POINT_MAX_TIME_DELTA_MS = 24 * 60 * 60 * 1000;

export const localDivergenceLaneBranchName = (defaultBranch: string): string =>
  `${defaultBranch} (local)`;

const shasMatch = (left: string | null | undefined, right: string | null | undefined): boolean => {
  if (!left || !right) return false;
  return left === right || left.startsWith(right) || right.startsWith(left);
};

/** Parent SHA is a fork where direct children span multiple lanes. */
export const isForkPointParentSha = (
  parentSha: string | null | undefined,
  forkParentShas: Set<string>,
  resolveKnownShas: (sha: string) => string[],
): boolean => {
  if (!parentSha) return false;
  if (forkParentShas.has(parentSha)) return true;
  return resolveKnownShas(parentSha).some((knownSha) => forkParentShas.has(knownSha));
};

/** Two commits share the same fork parent (requires resolvable parent SHA). */
export const commitsAreForkSiblings = (
  leftForkParentSha: string | null | undefined,
  rightForkParentSha: string | null | undefined,
  resolveKnownShas: (sha: string) => string[],
): boolean => {
  if (!leftForkParentSha || !rightForkParentSha) return false;
  if (resolveKnownShas(leftForkParentSha).length === 0) return false;
  return shasMatch(leftForkParentSha, rightForkParentSha);
};

/** Max time delta for coalescing / sharing a row among branch siblings of `forkParentSha`. */
export const branchSiblingSharedRowMaxDeltaMs = (
  forkParentSha: string | null | undefined,
  forkParentShas: Set<string>,
  resolveKnownShas: (sha: string) => string[],
): number => {
  if (!forkParentSha) return SHARED_ROW_BRANCH_SIBLING_MAX_TIME_DELTA_MS;
  return isForkPointParentSha(forkParentSha, forkParentShas, resolveKnownShas)
    ? SHARED_ROW_BRANCH_SIBLING_FORK_POINT_MAX_TIME_DELTA_MS
    : SHARED_ROW_BRANCH_SIBLING_MAX_TIME_DELTA_MS;
};

/** Row-sharing window between `commit` and an existing row occupant. */
export const sharedRowMaxDeltaMs = (
  forkParentSha: string | null | undefined,
  occupantForkParentSha: string | null | undefined,
  forkParentShas: Set<string>,
  resolveKnownShas: (sha: string) => string[],
): number => {
  if (commitsAreForkSiblings(forkParentSha, occupantForkParentSha, resolveKnownShas)) {
    return branchSiblingSharedRowMaxDeltaMs(forkParentSha, forkParentShas, resolveKnownShas);
  }
  return SHARED_ROW_MAX_TIME_DELTA_MS;
};
