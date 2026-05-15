import type { NodePositionOverride, NodePositionOverrides, VisualCommit } from './LayoutGrid';

export type NodePositionCommitIdentity = Pick<VisualCommit, 'id' | 'visualId' | 'kind' | 'parentSha'>;

export const getStableNodePositionKey = (commit: NodePositionCommitIdentity): string => {
  if (commit.id === 'WORKING_TREE') return 'stable:working-tree';
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
): NodePositionOverride | undefined => (
  overrides[getStableNodePositionKey(commit)]
  ?? overrides[commit.visualId]
  ?? overrides[commit.id]
  ?? findLegacyNodePositionOverride(overrides, commit)
);

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
    if (next[stableKey]) continue;
    const legacyValue = next[commit.visualId] ?? next[commit.id] ?? findLegacyNodePositionOverride(next, commit);
    if (!legacyValue) continue;
    if (next === overrides) next = { ...overrides };
    next[stableKey] = legacyValue;
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
