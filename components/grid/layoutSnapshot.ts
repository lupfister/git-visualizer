import type { BranchGridLayoutModel, ConnectorDecisionRow, GridCluster, MergeDestination } from './branchGridLayoutModel';
import type { Branch } from '../../types';
import type { BranchCommitPreview } from '../../types';
import type { CommitItem, Lane, Node, VisualCommit } from './LayoutGrid';

type Entry<T> = [string, T];
type NestedSetEntry = [string, Array<[string, string[]]>];

type SerializedBranchGridLayoutModel = {
  branchByName: Entry<Branch>[];
  laneByName: Entry<Lane>[];
  mainCommits: CommitItem[];
  branchCommitsByLane: Entry<CommitItem[]>[];
  branchPreviewSets: Entry<BranchCommitPreview[]>[];
  allCommits: VisualCommit[];
  clustersByBranch: Entry<GridCluster[]>[];
  clusterKeyByCommitId: Entry<string>[];
  clusterKeyBySha: Entry<string[]>[];
  leadByClusterKey: Entry<string>[];
  clusterCounts: Entry<number>[];
  debugRows: string[];
  branchDebugRows: string[];
  nodes: Node[];
  normalizedSearchQuery: string;
  matchingNodes: Node[];
  matchingNodeIds: string[];
  focusedNode: Node | null;
  checkedOutClusterKey: string | null;
  defaultCollapsedClumps: string[];
  visibleCommitsList: VisualCommit[];
  renderNodes: Node[];
  visibleNodesBySha: Entry<Node[]>[];
  visibleNodeByClusterKey: Entry<Node>[];
  contentWidth: number;
  contentHeight: number;
  connectors: BranchGridLayoutModel['connectors'];
  mergeConnectors: BranchGridLayoutModel['mergeConnectors'];
  connectorDecisions: ConnectorDecisionRow[];
  nodeWarnings: Entry<string[]>[];
  connectorParentShas: string[];
  branchStartShas: string[];
  branchOffNodeShas: string[];
  crossBranchOutgoingShas: string[];
  commitIdsWithRenderedAncestry: string[];
  branchBaseCommitByName: Entry<CommitItem>[];
  firstBranchCommitByName: Entry<CommitItem>[];
  mergeDestinations: MergeDestination[];
  mergeTargetBranchesBySourceBranchAndCommitSha: NestedSetEntry[];
};

export function serializeBranchGridLayoutModel(model: BranchGridLayoutModel): SerializedBranchGridLayoutModel {
  return {
    branchByName: Array.from(model.branchByName.entries()),
    laneByName: Array.from(model.laneByName.entries()),
    mainCommits: model.mainCommits,
    branchCommitsByLane: Array.from(model.branchCommitsByLane.entries()),
    branchPreviewSets: Array.from(model.branchPreviewSets.entries()),
    allCommits: model.allCommits,
    clustersByBranch: Array.from(model.clustersByBranch.entries()),
    clusterKeyByCommitId: Array.from(model.clusterKeyByCommitId.entries()),
    clusterKeyBySha: Array.from(model.clusterKeyBySha.entries()),
    leadByClusterKey: Array.from(model.leadByClusterKey.entries()),
    clusterCounts: Array.from(model.clusterCounts.entries()),
    debugRows: model.debugRows,
    branchDebugRows: model.branchDebugRows,
    nodes: model.nodes,
    normalizedSearchQuery: model.normalizedSearchQuery,
    matchingNodes: model.matchingNodes,
    matchingNodeIds: Array.from(model.matchingNodeIds),
    focusedNode: model.focusedNode,
    checkedOutClusterKey: model.checkedOutClusterKey,
    defaultCollapsedClumps: Array.from(model.defaultCollapsedClumps),
    visibleCommitsList: model.visibleCommitsList,
    renderNodes: model.renderNodes,
    visibleNodesBySha: Array.from(model.visibleNodesBySha.entries()),
    visibleNodeByClusterKey: Array.from(model.visibleNodeByClusterKey.entries()),
    contentWidth: model.contentWidth,
    contentHeight: model.contentHeight,
    connectors: model.connectors,
    mergeConnectors: model.mergeConnectors,
    connectorDecisions: model.connectorDecisions,
    nodeWarnings: Array.from(model.nodeWarnings.entries()),
    connectorParentShas: Array.from(model.connectorParentShas),
    branchStartShas: Array.from(model.branchStartShas),
    branchOffNodeShas: Array.from(model.branchOffNodeShas),
    crossBranchOutgoingShas: Array.from(model.crossBranchOutgoingShas),
    commitIdsWithRenderedAncestry: Array.from(model.commitIdsWithRenderedAncestry),
    branchBaseCommitByName: Array.from(model.branchBaseCommitByName.entries()),
    firstBranchCommitByName: Array.from(model.firstBranchCommitByName.entries()),
    mergeDestinations: model.mergeDestinations,
    mergeTargetBranchesBySourceBranchAndCommitSha: Array.from(
      model.mergeTargetBranchesBySourceBranchAndCommitSha.entries(),
    ).map(([branchName, byCommitSha]) => [
      branchName,
      Array.from(byCommitSha.entries()).map(([commitSha, targetBranches]) => [commitSha, Array.from(targetBranches)]),
    ]),
  };
}

export function hydrateBranchGridLayoutModel(
  snapshot: SerializedBranchGridLayoutModel,
): BranchGridLayoutModel {
  const mergeTargetBranchesBySourceBranchAndCommitSha = new Map<string, Map<string, Set<string>>>(
    (snapshot.mergeTargetBranchesBySourceBranchAndCommitSha ?? []).map(([branchName, byCommitSha]) => [
      branchName,
      new Map(
        byCommitSha.map(([commitSha, targetBranches]) => [commitSha, new Set(targetBranches)]),
      ),
    ]),
  );
  return {
    branchByName: new Map(snapshot.branchByName ?? []),
    laneByName: new Map(snapshot.laneByName ?? []),
    mainCommits: snapshot.mainCommits ?? [],
    branchCommitsByLane: new Map(snapshot.branchCommitsByLane ?? []),
    branchPreviewSets: new Map(snapshot.branchPreviewSets ?? []),
    allCommits: snapshot.allCommits ?? [],
    clustersByBranch: new Map(snapshot.clustersByBranch ?? []),
    clusterKeyByCommitId: new Map(snapshot.clusterKeyByCommitId ?? []),
    clusterKeyBySha: new Map(snapshot.clusterKeyBySha ?? []),
    leadByClusterKey: new Map(snapshot.leadByClusterKey ?? []),
    clusterCounts: new Map(snapshot.clusterCounts ?? []),
    debugRows: snapshot.debugRows ?? [],
    branchDebugRows: snapshot.branchDebugRows ?? [],
    nodes: snapshot.nodes ?? [],
    normalizedSearchQuery: snapshot.normalizedSearchQuery ?? '',
    matchingNodes: snapshot.matchingNodes ?? [],
    matchingNodeIds: new Set(snapshot.matchingNodeIds ?? []),
    focusedNode: snapshot.focusedNode ?? null,
    checkedOutClusterKey: snapshot.checkedOutClusterKey ?? null,
    defaultCollapsedClumps: new Set(snapshot.defaultCollapsedClumps ?? []),
    visibleCommitsList: snapshot.visibleCommitsList ?? [],
    renderNodes: snapshot.renderNodes ?? [],
    visibleNodesBySha: new Map(snapshot.visibleNodesBySha ?? []),
    visibleNodeByClusterKey: new Map(snapshot.visibleNodeByClusterKey ?? []),
    pointFormatter: (x: number, y: number) => `${x},${y}`,
    contentWidth: snapshot.contentWidth ?? 0,
    contentHeight: snapshot.contentHeight ?? 0,
    connectors: snapshot.connectors ?? [],
    mergeConnectors: snapshot.mergeConnectors ?? [],
    connectorDecisions: snapshot.connectorDecisions ?? [],
    nodeWarnings: new Map(snapshot.nodeWarnings ?? []),
    connectorParentShas: new Set(snapshot.connectorParentShas ?? []),
    branchStartShas: new Set(snapshot.branchStartShas ?? []),
    branchOffNodeShas: new Set(snapshot.branchOffNodeShas ?? []),
    crossBranchOutgoingShas: new Set(snapshot.crossBranchOutgoingShas ?? []),
    commitIdsWithRenderedAncestry: new Set(snapshot.commitIdsWithRenderedAncestry ?? []),
    branchBaseCommitByName: new Map(snapshot.branchBaseCommitByName ?? []),
    firstBranchCommitByName: new Map(snapshot.firstBranchCommitByName ?? []),
    mergeDestinations: snapshot.mergeDestinations ?? [],
    mergeTargetBranchesBySourceBranchAndCommitSha,
  };
}

