import type { Node } from './LayoutGrid';

export type GridSearchMatch = {
  normalizedSearchQuery: string;
  matchingNodes: Node[];
  matchingNodeIds: Set<string>;
};

export const deriveGridSearchMatch = (
  nodes: ReadonlyArray<Node>,
  gridSearchQuery: string,
  /** Temp commit titles shown on dirty worktree cards (not stored on layout nodes). */
  worktreeSearchLabelsByCommitId?: ReadonlyMap<string, string>,
): GridSearchMatch => {
  const normalizedSearchQuery = gridSearchQuery.trim().toLowerCase();
  if (!normalizedSearchQuery) {
    return {
      normalizedSearchQuery: '',
      matchingNodes: [],
      matchingNodeIds: new Set(),
    };
  }
  const matchingNodes = nodes.filter((node) => {
    const sha = node.commit.id.toLowerCase();
    const shortSha = node.commit.id.slice(0, 7).toLowerCase();
    const message = node.commit.message.toLowerCase();
    const branchName = node.commit.branchName.toLowerCase();
    const draftLabel = worktreeSearchLabelsByCommitId?.get(node.commit.id)?.toLowerCase() ?? '';
    return (
      sha.includes(normalizedSearchQuery)
      || shortSha.includes(normalizedSearchQuery)
      || message.includes(normalizedSearchQuery)
      || branchName.includes(normalizedSearchQuery)
      || draftLabel.includes(normalizedSearchQuery)
    );
  });
  return {
    normalizedSearchQuery,
    matchingNodes,
    matchingNodeIds: new Set(matchingNodes.map((node) => node.commit.id)),
  };
};
