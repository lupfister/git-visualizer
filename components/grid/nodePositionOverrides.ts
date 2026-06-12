import { isWorkingTreeCommitId } from '../../lib/worktreeSessions';
import type { NodePositionOverride, NodePositionOverrides, VisualCommit } from './LayoutGrid';

export type NodePositionCommitIdentity = Pick<VisualCommit, 'id' | 'visualId' | 'kind' | 'parentSha'>;

export const isPixelNodePositionOverride = (
  override: NodePositionOverride | undefined,
): override is Extract<NodePositionOverride, { x: number; y: number }> =>
  override != null && typeof override.x === 'number' && typeof override.y === 'number';

export const getStableNodePositionKey = (commit: NodePositionCommitIdentity): string => {
  if (isWorkingTreeCommitId(commit.id)) {
    const suffix = commit.id.includes(':') ? commit.id.slice(commit.id.indexOf(':') + 1) : 'current';
    return `stable:working-tree:${suffix}`;
  }
  if (commit.kind === 'branch-created') {
    return `stable:branch-created:${commit.parentSha ?? commit.id}`;
  }
  return `stable:sha:${commit.id}`;
};

const getLegacyVisualIdSuffix = (key: string): string => {
  const separatorIndex = key.indexOf(':');
  return separatorIndex >= 0 ? key.slice(separatorIndex + 1) : key;
};

const findLegacyNodePositionOverride = (
  overrides: NodePositionOverrides,
  commit: NodePositionCommitIdentity,
): NodePositionOverride | undefined => {
  for (const [key, value] of Object.entries(overrides)) {
    if (key.startsWith('stable:')) continue;
    if (getLegacyVisualIdSuffix(key) === commit.id) return value;
  }
  return undefined;
};

export const getNodePositionOverride = (
  overrides: NodePositionOverrides,
  commit: NodePositionCommitIdentity,
): NodePositionOverride | undefined => {
  return (
    overrides[commit.visualId]
    ?? overrides[commit.id]
    ?? overrides[getStableNodePositionKey(commit)]
    ?? findLegacyNodePositionOverride(overrides, commit)
  );
};

export const assignNodePositionOverride = (
  overrides: NodePositionOverrides,
  commit: NodePositionCommitIdentity,
  point: NodePositionOverride,
) => {
  overrides[commit.id] = point;
  overrides[commit.visualId] = point;
  overrides[getStableNodePositionKey(commit)] = point;
};

export const assignNodePositionPreview = (
  overrides: NodePositionOverrides,
  commit: NodePositionCommitIdentity,
  point: NodePositionOverride,
) => {
  overrides[commit.visualId] = point;
};

export const migrateNodePositionOverridesForCommits = (
  overrides: NodePositionOverrides,
  commits: NodePositionCommitIdentity[],
): NodePositionOverrides => {
  let next = overrides;
  for (const commit of commits) {
    const stableKey = getStableNodePositionKey(commit);
    const exactValue = next[commit.visualId] ?? next[commit.id];
    const resolvedValue = exactValue ?? next[stableKey] ?? findLegacyNodePositionOverride(next, commit);
    if (!resolvedValue || next[stableKey] === resolvedValue) continue;
    if (next === overrides) next = { ...overrides };
    next[stableKey] = resolvedValue;
  }
  return next;
};

export const canonicalizeNodePositionOverridesForCommits = (
  overrides: NodePositionOverrides,
  commits: NodePositionCommitIdentity[],
): NodePositionOverrides => {
  const next: NodePositionOverrides = {};
  for (const commit of commits) {
    const override = getNodePositionOverride(overrides, commit);
    if (!override) continue;
    assignNodePositionOverride(next, commit, override);
  }
  return next;
};

const worktreeStableOverrideKey = (workingTreeId: string): string =>
  getStableNodePositionKey({
    id: workingTreeId,
    visualId: workingTreeId,
    kind: 'uncommitted',
  });

/** Whether a persisted override key belongs to a specific synthetic working-tree node. */
export const isWorktreePositionOverrideKeyFor = (key: string, workingTreeId: string): boolean => {
  if (key === workingTreeId) return true;
  if (key === worktreeStableOverrideKey(workingTreeId)) return true;
  // Other worktrees' stable:working-tree:* keys — not this session.
  if (key.startsWith('stable:working-tree:')) return false;
  if (!key.startsWith('stable:') && getLegacyVisualIdSuffix(key) === workingTreeId) return true;
  return false;
};

export const localDivergenceLaneBranchName = (defaultBranch: string): string =>
  `${defaultBranch} (local)`;

/** Lane name prefixes used in visual ids — keep in sync with layout ingest. */
export const laneBranchNamesForPositionOverrides = (options: {
  defaultBranch: string;
  commitBranchName?: string | null;
  checkedOutBranchName?: string | null;
  extraBranchNames?: readonly string[];
}): string[] => {
  const { defaultBranch, commitBranchName, checkedOutBranchName, extraBranchNames = [] } = options;
  return [
    ...new Set(
      [
        commitBranchName,
        checkedOutBranchName,
        ...extraBranchNames,
        defaultBranch,
        localDivergenceLaneBranchName(defaultBranch),
      ].filter((name): name is string => Boolean(name && name.length > 0)),
    ),
  ];
};

/** Resolve a dragged working-tree position (any lane alias or stable key). */
export const resolveWorktreePositionOverride = (
  overrides: NodePositionOverrides,
  workingTreeId: string,
  laneBranchNames: readonly string[],
): NodePositionOverride | undefined => {
  for (const branchName of laneBranchNames) {
    const point = getNodePositionOverride(overrides, {
      id: workingTreeId,
      visualId: `${branchName}:${workingTreeId}`,
      kind: 'uncommitted',
    });
    if (point) return point;
  }
  return getNodePositionOverride(overrides, { id: workingTreeId, visualId: workingTreeId });
};

/**
 * After commit: when the working tree had a drag override, move that position onto the new
 * HEAD (including local-divergence lanes and collapsed-clump leads via stable:sha) and drop
 * worktree overrides so layout can re-pin the fresh working-tree tile beside HEAD.
 */
export const migrateWorkingTreeOverrideToNewHead = (
  overrides: NodePositionOverrides,
  newHeadSha: string,
  workingTreeId: string,
  laneBranchNames: readonly string[],
): NodePositionOverrides => {
  const point = resolveWorktreePositionOverride(overrides, workingTreeId, laneBranchNames);
  if (!point) return overrides;

  const next: NodePositionOverrides = {};
  for (const [key, value] of Object.entries(overrides)) {
    if (!isWorktreePositionOverrideKeyFor(key, workingTreeId)) {
      next[key] = value;
    }
  }
  const uniqueLaneNames = [...new Set(laneBranchNames.filter((name) => name.length > 0))];
  for (const branchName of uniqueLaneNames) {
    assignNodePositionOverride(next, { id: newHeadSha, visualId: `${branchName}:${newHeadSha}` }, point);
  }
  if (uniqueLaneNames.length === 0) {
    assignNodePositionOverride(next, { id: newHeadSha, visualId: newHeadSha }, point);
  }
  if (typeof point.row === 'number' && typeof point.column === 'number') {
    const worktreePoint: NodePositionOverride = {
      row: point.row + 1,
      column: point.column + 1,
    };
    for (const branchName of uniqueLaneNames) {
      assignNodePositionOverride(next, {
        id: workingTreeId,
        visualId: `${branchName}:${workingTreeId}`,
        kind: 'uncommitted',
      }, worktreePoint);
    }
    if (uniqueLaneNames.length === 0) {
      assignNodePositionOverride(next, { id: workingTreeId, visualId: workingTreeId, kind: 'uncommitted' }, worktreePoint);
    }
  }
  return next;
};
