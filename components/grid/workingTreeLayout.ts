import { isWorkingTreeCommitId } from '../../lib/worktreeSessions';
import type { BranchGridLayoutModel } from './branchGridLayoutModel';
import type { CommitItem, Node, VisualCommit } from './LayoutGrid';

const isWorkingTreeCommit = (commit: { id: string; kind?: string | null }): boolean =>
  isWorkingTreeCommitId(commit.id) || commit.kind === 'uncommitted';

export function layoutModelHasWorkingTree(model: BranchGridLayoutModel | null | undefined): boolean {
  if (!model) return false;
  if (model.renderNodes.some((node) => isWorkingTreeCommit(node.commit))) return true;
  return model.allCommits.some((commit) => isWorkingTreeCommit(commit));
}

export function stripWorkingTreeFromLayoutModel(model: BranchGridLayoutModel): BranchGridLayoutModel {
  if (!layoutModelHasWorkingTree(model)) return model;

  const filterVisual = (commits: VisualCommit[]) => commits.filter((commit) => !isWorkingTreeCommit(commit));
  const filterItems = (commits: CommitItem[]) => commits.filter((commit) => !isWorkingTreeCommit(commit));
  const filterNodes = (nodes: Node[]) => nodes.filter((node) => !isWorkingTreeCommit(node.commit));

  const renderNodes = filterNodes(model.renderNodes);
  const allCommits = filterVisual(model.allCommits);
  const visibleCommitsList = filterVisual(model.visibleCommitsList);
  const mainCommits = filterItems(model.mainCommits);
  const branchCommitsByLane = new Map(
    Array.from(model.branchCommitsByLane.entries()).map(([branchName, commits]) => [
      branchName,
      filterItems(commits),
    ]),
  );
  const nodes = filterNodes(model.nodes);
  const matchingNodes = filterNodes(model.matchingNodes);
  const focusedNode =
    model.focusedNode && isWorkingTreeCommit(model.focusedNode.commit) ? null : model.focusedNode;
  const matchingNodeIds = new Set(
    Array.from(model.matchingNodeIds).filter((id) => !isWorkingTreeCommitId(id)),
  );
  const visibleNodesBySha = new Map(
    Array.from(model.visibleNodesBySha.entries())
      .filter(([sha]) => !isWorkingTreeCommitId(sha))
      .map(([sha, nodes]) => [sha, filterNodes(nodes)]),
  );
  const visibleNodeByClusterKey = new Map(
    Array.from(model.visibleNodeByClusterKey.entries()).filter(
      ([, node]) => !isWorkingTreeCommit(node.commit),
    ),
  );
  const commitIdsWithRenderedAncestry = new Set(
    Array.from(model.commitIdsWithRenderedAncestry).filter((id) => !isWorkingTreeCommitId(id)),
  );

  return {
    ...model,
    renderNodes,
    allCommits,
    visibleCommitsList,
    mainCommits,
    branchCommitsByLane,
    nodes,
    matchingNodes,
    focusedNode,
    matchingNodeIds,
    visibleNodesBySha,
    visibleNodeByClusterKey,
    commitIdsWithRenderedAncestry,
  };
}
