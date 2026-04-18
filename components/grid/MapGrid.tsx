import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  branchBaseCommit,
  branchAheadCount,
  buildLanes,
  CARD_HEIGHT,
  CARD_WIDTH,
  CONNECTOR_COLOR,
  LEFT_PADDING,
  nodeForCommitSha,
  orderByLineage,
  renderableBranchPreviews,
  sortedConcreteBranchPreviews,
  ROW_GAP,
  ROW_HEIGHT,
  sortByTimeDesc,
  toCommit,
  type BranchGridViewProps,
  type CommitItem,
  type Connector,
  type Node,
  type VisualCommit,
  TOP_PADDING,
  COLUMN_WIDTH,
} from './LayoutGrid';
import type { Branch } from '../../types';
import type { BranchCommitPreview } from '../../types';

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

function clusterByForkPoints<T>(
  entries: Array<{ item: T }>,
  forkIndices: Set<number>,
): Array<{ entries: Array<{ item: T }> }> {
  if (entries.length === 0) return [];
  const effectiveForkIndices = new Set(
    Array.from(forkIndices).filter((index) => index >= 0 && index < entries.length)
  );
  const clusters: Array<{ entries: Array<{ item: T }> }> = [];
  let current: Array<{ item: T }> = [];
  const flush = () => {
    if (current.length === 0) return;
    clusters.push({ entries: current });
    current = [];
  };
  for (let i = 0; i < entries.length; i += 1) {
    current.push(entries[i]);
    if (effectiveForkIndices.has(i)) flush();
  }
  flush();
  return clusters;
}

export default function BranchGridMap({
  branches,
  directCommits = [],
  unpushedDirectCommits = [],
  defaultBranch,
  branchCommitPreviews = {},
  branchUniqueAheadCounts = {},
  gridSearchQuery = '',
  gridSearchJumpToken = 0,
  gridFocusSha = null,
  onGridSearchResultCountChange,
  onGridSearchFocusChange,
}: BranchGridViewProps) {
  const cardRefs = useRef(new Map<string, HTMLDivElement | null>());
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [collapsedClumps, setCollapsedClumps] = useState<Set<string>>(() => new Set());
  const didInitCollapsedClumps = useRef(false);
  const lanes = buildLanes(branches, defaultBranch);
  const branchByName = new Map(branches.map((branch) => [branch.name, branch]));
  const laneByName = new Map(lanes.map((lane) => [lane.name, lane] as const));

  const mainCommits = orderByLineage([
    ...directCommits.map((commit) => toCommit(defaultBranch, commit)),
    ...unpushedDirectCommits.map((commit) => toCommit(defaultBranch, commit)),
  ]);

  const branchCommitsByLane = new Map<string, CommitItem[]>();
  const branchPreviewSets = new Map<string, BranchCommitPreview[]>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const branchPreviews = renderableBranchPreviews(branch.name, branchUniqueAheadCounts, branchCommitPreviews);
    branchPreviewSets.set(branch.name, branchPreviews);
    const commits = orderByLineage(branchPreviews.map((commit) => toCommit(branch.name, commit)));
    if (commits.length > 0) branchCommitsByLane.set(branch.name, commits);
  }

  const mainCommitShas = new Set<string>(mainCommits.map((commit) => commit.id));
  const branchCommitShasByName = new Map<string, Set<string>>(
    Array.from(branchCommitsByLane.entries()).map(([branchName, commits]) => [
      branchName,
      new Set(commits.map((commit) => commit.id)),
    ] as const)
  );
  const branchBaseCommitByName = new Map<string, CommitItem>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const baseCommit = branchBaseCommit(branch.name, branchCommitPreviews, branchUniqueAheadCounts);
    if (baseCommit) branchBaseCommitByName.set(branch.name, baseCommit);
  }
  const branchReceivingCommitByName = new Map<string, CommitItem>();
  for (const [branchName, commits] of branchCommitsByLane.entries()) {
    const firstConcreteCommit = commits.find((commit) => commit.kind !== 'branch-created');
    if (firstConcreteCommit) branchReceivingCommitByName.set(branchName, firstConcreteCommit);
  }

  const resolveBranchStartParentName = (branch: Branch): string => {
    const declaredParent = branch.parentBranch;
    const hasConcreteParent =
      declaredParent &&
      declaredParent !== defaultBranch &&
      declaredParent !== branch.name &&
      branchByName.has(declaredParent);
    if (!hasConcreteParent) return declaredParent ?? defaultBranch;

    const forkSha = branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha;
    if (forkSha) {
      const declaredParentCommitShas = branchCommitShasByName.get(declaredParent) ?? new Set<string>();
      if (declaredParentCommitShas.has(forkSha)) return declaredParent;
    }

    const forkAnchor = branchBaseCommitByName.get(branch.name)?.parentSha ?? null;
    if (forkAnchor) {
      const declaredParentCommitShas = branchCommitShasByName.get(declaredParent) ?? new Set<string>();
      if (declaredParentCommitShas.has(forkAnchor)) return declaredParent;
    }

    return declaredParent;
  };

  const resolveBranchStartSha = (branch: Branch): string | null => {
    const childBaseCommit = branchBaseCommitByName.get(branch.name);
    const forkSha = branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? childBaseCommit?.parentSha ?? null;
    if (!forkSha) return null;
    const parentName = resolveBranchStartParentName(branch);
    if (parentName === defaultBranch) {
      return mainCommitShas.has(forkSha) ? forkSha : null;
    }
    const parentCommitShas = branchCommitShasByName.get(parentName) ?? new Set<string>();
    return parentCommitShas.has(forkSha) ? forkSha : null;
  };
  const blueStartShaForBranch = (branch: Branch): string | null => resolveBranchStartSha(branch);

  const blueBoundaryShasByBranch = new Map<string, Set<string>>();
  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const branchStartSha = blueStartShaForBranch(branch);
    const parentName = resolveBranchStartParentName(branch);
    const existing = blueBoundaryShasByBranch.get(parentName) ?? new Set<string>();
    if (branchStartSha) existing.add(branchStartSha);
    const childBaseCommit = branchBaseCommitByName.get(branch.name);
    if (childBaseCommit?.parentSha) existing.add(childBaseCommit.parentSha);
    blueBoundaryShasByBranch.set(parentName, existing);
  }

  const visibleCommits: VisualCommit[] = [];
  const branchCommitShaSets = new Map<string, Set<string>>(
    Array.from(branchCommitsByLane.entries()).map(([branchName, commits]) => [
      branchName,
      new Set(commits.map((commit) => commit.id)),
    ] as const)
  );
  const branchCommitShaUnion = new Set<string>();
  for (const shaSet of branchCommitShaSets.values()) {
    for (const sha of shaSet) branchCommitShaUnion.add(sha);
  }
  for (const commit of mainCommits) {
    if (branchCommitShaUnion.has(commit.id)) continue;
    visibleCommits.push({ ...commit, visualId: `${defaultBranch}:${commit.id}` });
  }
  for (const [branchName, commits] of branchCommitsByLane.entries()) {
    for (const commit of commits) {
      visibleCommits.push({ ...commit, visualId: `${branchName}:${commit.id}` });
    }
  }

  const allCommits = sortByTimeDesc(visibleCommits);
  const commitsByBranch = new Map<string, VisualCommit[]>();
  for (const commit of allCommits) {
    const list = commitsByBranch.get(commit.branchName) ?? [];
    list.push(commit);
    commitsByBranch.set(commit.branchName, list);
  }
  type GridCluster = { branchName: string; key: string; commitIds: string[]; leadId: string; count: number };
  const clustersByBranch = new Map<string, GridCluster[]>();
  const clusterKeyByCommitId = new Map<string, string>();
  const clusterKeyBySha = new Map<string, string[]>();
  const leadByClusterKey = new Map<string, string>();
  const clusterCounts = new Map<string, number>();
  const buildClustersForBranch = (branchName: string, commits: VisualCommit[]): GridCluster[] => {
    if (commits.length === 0) return [];
    const ordered = [...commits].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime() || a.id.localeCompare(b.id));
    const blueBoundaryShas = blueBoundaryShasByBranch.get(branchName) ?? new Set<string>();
    const forkIdx = new Set<number>();
    for (let index = 0; index < ordered.length; index += 1) {
      if (blueBoundaryShas.has(ordered[index]!.id)) forkIdx.add(index);
    }
    const clusterEntries = clusterByForkPoints(ordered.map((commit) => ({ item: commit })), forkIdx);
    const clusters: GridCluster[] = [];
    clusterEntries.forEach((cluster, clusterIndex) => {
      const chunk = cluster.entries.map((entry) => entry.item);
      if (chunk.length === 0) return;
      const key = `grid-clump-${branchName}-${chunk[0].id}-${chunk[chunk.length - 1].id}-${clusterIndex}`;
      const blueHead = [...chunk].reverse().find((commit) => blueBoundaryShas.has(commit.id)) ?? chunk[chunk.length - 1];
      const leadId = blueHead.id;
      const clusterVm = { branchName, key, commitIds: chunk.map((commit) => commit.visualId), leadId, count: chunk.length };
      clusters.push(clusterVm);
      leadByClusterKey.set(key, leadId);
      clusterCounts.set(key, chunk.length);
      for (const id of clusterVm.commitIds) {
        clusterKeyByCommitId.set(id, key);
        const sha = id.split(':').slice(1).join(':');
        const keys = clusterKeyBySha.get(sha) ?? [];
        if (!keys.includes(key)) keys.push(key);
        clusterKeyBySha.set(sha, keys);
      }
    });
    return clusters;
  };
  for (const [branchName, commits] of commitsByBranch.entries()) {
    clustersByBranch.set(branchName, buildClustersForBranch(branchName, commits));
  }

  useEffect(() => {
    if (didInitCollapsedClumps.current) return;
    didInitCollapsedClumps.current = true;
    const initial = new Set<string>();
    for (const clusters of clustersByBranch.values()) {
      for (const cluster of clusters) {
        if (cluster.count > 1) initial.add(cluster.key);
      }
    }
    setCollapsedClumps(initial);
  }, [clustersByBranch]);
  const debugRows = branches.flatMap((branch) => {
    const previews = branchCommitPreviews[branch.name] ?? [];
    const concretePreviews = sortedConcreteBranchPreviews(branch.name, branchCommitPreviews);
    const renderedPreviewIds = new Set((branchPreviewSets.get(branch.name) ?? []).map((commit) => commit.fullSha));
    return [
      `Branch ${branch.name}`,
      `  ahead=${branchAheadCount(branch.name, branchUniqueAheadCounts, branchCommitPreviews)} previews=${concretePreviews.length} rendered=${renderedPreviewIds.size}`,
      ...concretePreviews.map((commit) => {
        const status = renderedPreviewIds.has(commit.fullSha) ? 'visible' : 'hidden';
        const reason =
          commit.kind === 'branch-created'
            ? 'branch-created'
            : renderedPreviewIds.size === 0
              ? 'no visible previews'
              : renderedPreviewIds.has(commit.fullSha)
                ? 'kept by uniqueAhead slice'
                : 'dropped by uniqueAhead slice';
        return `  ${status} ${commit.fullSha.slice(0, 7)} ${commit.message} [${reason}]`;
      }),
      previews.length === 0 ? '  no preview data' : null,
    ].filter((line): line is string => line != null);
  });
  const rowByVisualId = new Map<string, number>(allCommits.map((commit, index) => [commit.visualId, index + 1] as const));
  const nodes: Node[] = allCommits.map((commit) => {
    const lane = laneByName.get(commit.branchName);
    const row = rowByVisualId.get(commit.visualId) ?? 1;
    return { commit, row, column: lane?.column ?? 0, x: LEFT_PADDING + (lane?.column ?? 0) * COLUMN_WIDTH, y: TOP_PADDING + (row - 1) * (ROW_HEIGHT + ROW_GAP) };
  });
  const normalizedSearchQuery = gridSearchQuery.trim().toLowerCase();
  const matchingNodes = normalizedSearchQuery
    ? nodes.filter((node) => {
        const sha = node.commit.id.toLowerCase();
        const shortSha = node.commit.id.slice(0, 7).toLowerCase();
        const message = node.commit.message.toLowerCase();
        const branchName = node.commit.branchName.toLowerCase();
        return sha.includes(normalizedSearchQuery) || shortSha.includes(normalizedSearchQuery) || message.includes(normalizedSearchQuery) || branchName.includes(normalizedSearchQuery);
      })
    : nodes;
  const focusedNode = gridFocusSha ? nodes.find((node) => node.commit.id === gridFocusSha) ?? null : null;

  useEffect(() => {
    onGridSearchResultCountChange?.(normalizedSearchQuery ? matchingNodes.length : null);
  }, [matchingNodes.length, normalizedSearchQuery, onGridSearchResultCountChange]);

  useEffect(() => {
    if (!normalizedSearchQuery) {
      onGridSearchFocusChange?.(null);
      return;
    }
    const firstMatch = matchingNodes[0]?.commit.id ?? null;
    onGridSearchFocusChange?.(firstMatch);
  }, [matchingNodes, normalizedSearchQuery, onGridSearchFocusChange]);

  useEffect(() => {
    if (!normalizedSearchQuery || matchingNodes.length === 0) return;
    const firstMatchCluster = clusterKeyByCommitId.get(matchingNodes[0]!.commit.visualId);
    if (!firstMatchCluster) return;
    if (!collapsedClumps.has(firstMatchCluster)) return;
    setCollapsedClumps((prev) => {
      const next = new Set(prev);
      next.delete(firstMatchCluster);
      return next;
    });
  }, [collapsedClumps, matchingNodes, normalizedSearchQuery]);

  useEffect(() => {
    if (!gridFocusSha) return;
    const focusedCommit = nodes.find((node) => node.commit.id === gridFocusSha)?.commit;
    if (!focusedCommit) return;
    const clusterKey = clusterKeyByCommitId.get(focusedCommit.visualId ?? focusedCommit.id);
    if (!clusterKey) return;
    if (!collapsedClumps.has(clusterKey)) return;
    setCollapsedClumps((prev) => {
      const next = new Set(prev);
      next.delete(clusterKey);
      return next;
    });
  }, [collapsedClumps, gridFocusSha, nodes]);

  useLayoutEffect(() => {
    if (!gridFocusSha) return;
    const el = cardRefs.current.get(gridFocusSha);
    if (!el) return;
    const container = scrollContainerRef.current;
    if (!container) {
      el.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const nextTop = container.scrollTop + (elRect.top - containerRect.top) - (containerRect.height / 2) + (elRect.height / 2);
    const nextLeft = container.scrollLeft + (elRect.left - containerRect.left) - (containerRect.width / 2) + (elRect.width / 2);
    container.scrollTo({ top: Math.max(0, nextTop), left: Math.max(0, nextLeft), behavior: 'smooth' });
  }, [gridFocusSha, gridSearchJumpToken]);

  const visibleCommitsList = allCommits.filter((commit) => {
    const clusterKey = clusterKeyByCommitId.get(commit.visualId);
    if (!clusterKey) return true;
    const leadId = leadByClusterKey.get(clusterKey);
    const count = clusterCounts.get(clusterKey) ?? 1;
    return count <= 1 || !collapsedClumps.has(clusterKey) || leadId === commit.id;
  });
  const visibleRows = new Map<string, number>(visibleCommitsList.map((commit, index) => [commit.visualId, index + 1] as const));
  const renderNodes: Node[] = visibleCommitsList.map((commit) => {
    const lane = laneByName.get(commit.branchName);
    const row = visibleRows.get(commit.visualId) ?? 1;
    return {
      commit,
      row,
      column: lane?.column ?? 0,
      x: LEFT_PADDING + (lane?.column ?? 0) * COLUMN_WIDTH,
      y: TOP_PADDING + (row - 1) * (ROW_HEIGHT + ROW_GAP),
    };
  });
  const visibleNodesBySha = new Map<string, Node[]>();
  for (const node of renderNodes) {
    const list = visibleNodesBySha.get(node.commit.id) ?? [];
    list.push(node);
    visibleNodesBySha.set(node.commit.id, list);
  }
  const visibleNodeByClusterKey = new Map<string, Node>();
  for (const node of renderNodes) {
    const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
    if (!clusterKey) continue;
    const current = visibleNodeByClusterKey.get(clusterKey);
    if (!current || node.y < current.y) visibleNodeByClusterKey.set(clusterKey, node);
  }

  const contentWidth = LEFT_PADDING * 2 + (Math.max(0, ...lanes.map((lane) => lane.column)) + 1) * COLUMN_WIDTH;
  const contentHeight = TOP_PADDING * 2 + Math.max(0, visibleCommitsList.length - 1) * (ROW_HEIGHT + ROW_GAP) + CARD_HEIGHT;

  const connectors: Connector[] = [];
  const connectorDecisions: Array<{
    id: string;
    kind: 'branch' | 'ancestry';
    parent: string;
    child: string;
    rendered: boolean;
    reason: string;
  }> = [];
  const connectorParentShas = new Set<string>();
  const branchStartShas = new Set<string>();
  const connectorParentAccentClass = 'border-slate-400/70 ring-2 ring-slate-400/20 shadow-[0_0_0_1px_rgba(100,116,139,0.14)]';
  const branchStartAccentClass = 'border-blue-500 ring-2 ring-blue-500/35 shadow-[0_0_0_1px_rgba(59,130,246,0.18)]';
  // These two sets intentionally track the same logical "blue" idea from two
  // render paths:
  // - `branchStartShas`: commits that mark where a branch begins in the data.
  // - `connectorParentShas`: commits that a visible connector actually snaps to.
  // In practice they are usually the same SHA, but we keep both labels because
  // the grid renders the blue outline and the connector line separately.
  const nodeForConnectorTipSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    if (!sha) return null;
    const visibleNode = nodeForCommitSha(visibleNodesBySha, sha, preferredBranchName);
    if (visibleNode) return visibleNode;
    const clusterKey = clusterKeyByCommitId.get(`${preferredBranchName ?? defaultBranch}:${sha}`) ?? clusterKeyByCommitId.get(sha);
    if (!clusterKey || !collapsedClumps.has(clusterKey)) return null;
    return visibleNodeByClusterKey.get(clusterKey) ?? null;
  };
  const connectorKeySet = new Set<string>();
  for (const branch of branches) {
    const branchStartSha = blueStartShaForBranch(branch);
    if (branchStartSha) branchStartShas.add(branchStartSha);
  }
  const resolveConnectorNode = (commit: VisualCommit): Node | null => {
    const directNode = nodeForConnectorTipSha(commit.id, commit.branchName);
    if (directNode) return directNode;
    const clusterKey = clusterKeyByCommitId.get(commit.visualId);
    if (!clusterKey) return null;
    const leadId = leadByClusterKey.get(clusterKey);
    if (!leadId) return null;
    return renderNodes.find((candidate) => candidate.commit.id === leadId) ?? null;
  };

  const resolveCanonicalNodeForSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    if (!sha) return null;
    const directNode = nodeForCommitSha(visibleNodesBySha, sha, preferredBranchName);
    if (directNode) return directNode;
    const clusterKeys = clusterKeyBySha.get(sha) ?? [];
    for (const clusterKey of clusterKeys) {
      const leadId = leadByClusterKey.get(clusterKey);
      if (!leadId) continue;
      const leadNode = renderNodes.find((candidate) => candidate.commit.id === leadId);
      if (leadNode) return leadNode;
    }
    return null;
  };

  const resolveChildNodeForSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    if (!sha) return null;
    const preferredNode = nodeForCommitSha(visibleNodesBySha, sha, preferredBranchName);
    if (preferredNode) return preferredNode;
    const canonicalNode = resolveCanonicalNodeForSha(sha, preferredBranchName);
    if (canonicalNode) return canonicalNode;
    const clusterKeys = clusterKeyBySha.get(sha) ?? [];
    for (const clusterKey of clusterKeys) {
      const leadId = leadByClusterKey.get(clusterKey);
      if (!leadId) continue;
      const leadNode = renderNodes.find((candidate) => candidate.commit.id === leadId);
      if (leadNode) return leadNode;
    }
    return null;
  };

  const getIncomingAnchor = (node: Node): { x: number; y: number } => ({
    x: node.x + CARD_WIDTH / 2,
    y: node.y + CARD_HEIGHT,
  });

  const getOutgoingAnchor = (node: Node, isBranching: boolean): { x: number; y: number } => ({
    x: isBranching ? node.x + CARD_WIDTH : node.x + CARD_WIDTH / 2,
    y: isBranching ? node.y + CARD_HEIGHT / 2 : node.y,
  });

  const resolveParentNode = (parentSha: string, preferredBranchName: string): Node | null => {
    const preferredNode = nodeForCommitSha(visibleNodesBySha, parentSha, preferredBranchName);
    if (preferredNode) return preferredNode;
    return resolveCanonicalNodeForSha(parentSha, preferredBranchName);
  };

  const resolveNodeForSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    return resolveChildNodeForSha(sha, preferredBranchName);
  };

  const branchDebugRows =
    process.env.NODE_ENV !== 'production'
      ? branches.flatMap((branch) => {
          if (branch.name !== 'promptsOnGraph' && branch.name !== 'verticalGraph') return [];
          const baseCommit = branchBaseCommitByName.get(branch.name);
          const receivingCommit = branchReceivingCommitByName.get(branch.name);
          const parentName = resolveBranchStartParentName(branch);
          const branchStartSha = blueStartShaForBranch(branch);
          const parentNode = baseCommit
            ? resolveParentNode(baseCommit.parentSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? '', parentName)
            : null;
          const childNode = receivingCommit
            ? resolveNodeForSha(receivingCommit.id, branch.name) ?? resolveConnectorNode(receivingCommit as VisualCommit)
            : null;
          return [
            `Branch debug ${branch.name}`,
            `  parentName=${parentName}`,
            `  branchStartSha=${branchStartSha ?? 'null'}`,
            `  baseCommit=${baseCommit?.id ?? 'null'}`,
            `  receivingCommit=${receivingCommit?.id ?? 'null'}`,
            `  baseParentSha=${baseCommit?.parentSha ?? 'null'}`,
            `  divergedFromSha=${branch.divergedFromSha ?? 'null'}`,
            `  createdFromSha=${branch.createdFromSha ?? 'null'}`,
          `  parentNode=${parentNode ? `${parentNode.commit.branchName}/${parentNode.commit.id.slice(0, 7)} col=${parentNode.column} row=${parentNode.row}` : 'null'}`,
          `  childNode=${childNode ? `${childNode.commit.branchName}/${childNode.commit.id.slice(0, 7)} col=${childNode.column} row=${childNode.row}` : 'null'}`,
        ];
      })
      : [];

  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const branchBaseCommit = branchBaseCommitByName.get(branch.name);
    if (!branchBaseCommit) continue;
    const parentName = resolveBranchStartParentName(branch);
    const parentNode = resolveParentNode(branchBaseCommit.parentSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? '', parentName);
    const receivingCommit = branchReceivingCommitByName.get(branch.name) ?? branchBaseCommit;
    const childNode = resolveNodeForSha(receivingCommit.id, branch.name) ?? resolveConnectorNode(receivingCommit as VisualCommit);
    if (!parentNode || !childNode || parentNode.commit.id === childNode.commit.id) {
      connectorDecisions.push({
        id: `branch:${parentNode?.commit.id ?? 'null'}->${childNode?.commit.id ?? 'null'}`,
        kind: 'branch',
        parent: parentNode?.commit.id ?? 'null',
        child: childNode?.commit.id ?? 'null',
        rendered: false,
        reason: !parentNode ? 'missing parent node' : !childNode ? 'missing child node' : 'parent and child are the same node',
      });
      continue;
    }
    const key = `branch:${parentNode.commit.id}->${childNode.commit.id}`;
    if (connectorKeySet.has(key)) {
      connectorDecisions.push({
        id: key,
        kind: 'branch',
        parent: parentNode.commit.id,
        child: childNode.commit.id,
        rendered: false,
        reason: 'duplicate connector key',
      });
      continue;
    }
    connectorKeySet.add(key);
    connectorParentShas.add(parentNode.commit.id);
    const isBranching = parentNode.column !== childNode.column;
    const sourceAnchor = getOutgoingAnchor(parentNode, isBranching);
    const targetAnchor = getIncomingAnchor(childNode);
    connectors.push({
      id: key,
      fromX: sourceAnchor.x,
      fromY: sourceAnchor.y,
      toX: targetAnchor.x,
      toY: targetAnchor.y,
    });
    connectorDecisions.push({
      id: key,
      kind: 'branch',
      parent: parentNode.commit.id,
      child: childNode.commit.id,
      rendered: true,
      reason: isBranching ? 'branch connector rendered' : 'vertical connector rendered',
    });
  }

  for (const node of renderNodes) {
    const parentSha = node.commit.parentSha ?? null;
    if (!parentSha) continue;
    const parentNode = resolveParentNode(parentSha, node.commit.branchName);
    if (!parentNode) {
      connectorDecisions.push({
        id: `${node.commit.visualId}->${parentSha}`,
        kind: 'ancestry',
        parent: parentSha,
        child: node.commit.id,
        rendered: false,
        reason: 'missing parent node',
      });
      continue;
    }
    const childNode = node;
    if (childNode.commit.id === parentNode.commit.id) {
      connectorDecisions.push({
        id: `${parentNode.commit.id}->${childNode.commit.id}`,
        kind: 'ancestry',
        parent: parentNode.commit.id,
        child: childNode.commit.id,
        rendered: false,
        reason: 'parent and child are the same node',
      });
      continue;
    }
    const key = `${node.commit.branchName}:${parentNode.commit.visualId ?? parentNode.commit.id}->${childNode.commit.visualId}`;
    if (connectorKeySet.has(key)) {
      connectorDecisions.push({
        id: key,
        kind: 'ancestry',
        parent: parentNode.commit.id,
        child: childNode.commit.id,
        rendered: false,
        reason: 'duplicate connector key',
      });
      continue;
    }
    connectorKeySet.add(key);
    connectorParentShas.add(parentNode.commit.id);
    const isBranching = parentNode.column !== childNode.column;
    const sourceAnchor = getOutgoingAnchor(parentNode, isBranching);
    const targetAnchor = getIncomingAnchor(childNode);
    connectors.push({
      id: key,
      fromX: sourceAnchor.x,
      fromY: sourceAnchor.y,
      toX: targetAnchor.x,
      toY: targetAnchor.y,
    });
    connectorDecisions.push({
      id: key,
      kind: 'ancestry',
      parent: parentNode.commit.id,
      child: childNode.commit.id,
      rendered: true,
      reason: isBranching ? 'ancestry connector rendered' : 'vertical ancestry rendered',
    });
  }

  const nodesByBranch = new Map<string, Node[]>();
  for (const node of renderNodes) {
    const list = nodesByBranch.get(node.commit.branchName) ?? [];
    list.push(node);
    nodesByBranch.set(node.commit.branchName, list);
  }
  for (const [branchName, branchNodes] of nodesByBranch.entries()) {
    if (branchNodes.length < 2) continue;
    const orderedBranchNodes = [...branchNodes].sort(
      (a, b) => new Date(a.commit.date).getTime() - new Date(b.commit.date).getTime() || a.commit.id.localeCompare(b.commit.id)
    );
    for (let index = 1; index < orderedBranchNodes.length; index += 1) {
      const parentNode = orderedBranchNodes[index - 1]!;
      const childNode = orderedBranchNodes[index]!;
      if (parentNode.commit.id === childNode.commit.id) continue;
      const key = `chain:${branchName}:${parentNode.commit.id}->${childNode.commit.id}`;
      if (connectorKeySet.has(key)) {
        connectorDecisions.push({
          id: key,
          kind: 'ancestry',
          parent: parentNode.commit.id,
          child: childNode.commit.id,
          rendered: false,
          reason: 'duplicate branch chain key',
        });
        continue;
      }
      connectorKeySet.add(key);
      const isBranching = parentNode.column !== childNode.column;
      const sourceAnchor = getOutgoingAnchor(parentNode, isBranching);
      const targetAnchor = getIncomingAnchor(childNode);
      connectors.push({
        id: key,
        fromX: sourceAnchor.x,
        fromY: sourceAnchor.y,
        toX: targetAnchor.x,
        toY: targetAnchor.y,
      });
      connectorDecisions.push({
        id: key,
        kind: 'ancestry',
        parent: parentNode.commit.id,
        child: childNode.commit.id,
        rendered: true,
        reason: 'branch chain rendered',
      });
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {allCommits.length === 0 ? (
        <div className="flex items-center justify-center py-20">
          <div className="rounded-xl border border-border/50 bg-muted/30 shadow-inner px-4 py-3">
            <p className="text-sm text-muted-foreground">No commits to render</p>
          </div>
        </div>
      ) : (
        <div ref={scrollContainerRef} className="overflow-auto">
          <div className="relative min-w-max p-2.5" style={{ width: contentWidth, height: contentHeight }}>
            {renderNodes.map((node) => {
            const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
            const isCollapsed = clusterKey ? collapsedClumps.has(clusterKey) : false;
            const isTop = clusterKey ? leadByClusterKey.get(clusterKey) === node.commit.id : false;
            const clumpCount = clusterKey ? clusterCounts.get(clusterKey) ?? 1 : 1;
            const nodeConnectorDecisions = connectorDecisions.filter((decision) => decision.parent === node.commit.id || decision.child === node.commit.id);
            const nodeConnectorRendered = nodeConnectorDecisions.filter((decision) => decision.rendered).length;
            const renderedBranchDecisions = nodeConnectorDecisions.filter((decision) => decision.rendered && decision.kind === 'branch').length;
            const renderedAncestryDecisions = nodeConnectorDecisions.filter((decision) => decision.rendered && decision.kind === 'ancestry').length;
            const nodeConnectorSummary = nodeConnectorDecisions.length > 0
              ? `${nodeConnectorRendered} shown`
              : 'No connector decisions';
            return (
            <div
              key={node.commit.visualId}
              ref={(el) => {
                cardRefs.current.set(node.commit.id, el);
              }}
              className={cn(
                'absolute z-20 overflow-hidden rounded-2xl border border-border bg-background/95 shadow-sm transition-all duration-200',
                branchStartShas.has(node.commit.id)
                  ? branchStartAccentClass
                  : connectorParentShas.has(node.commit.id)
                    ? connectorParentAccentClass
                  : branchBaseCommitByName.get(node.commit.branchName)?.id === node.commit.id
                    ? 'border-amber-500 ring-2 ring-amber-500/35 shadow-[0_0_0_1px_rgba(245,158,11,0.18)]'
                    : 'border-border/50',
                normalizedSearchQuery && !matchingNodes.some((match) => match.commit.id === node.commit.id) ? 'opacity-10 blur-[0.5px]' : '',
                normalizedSearchQuery && matchingNodes.some((match) => match.commit.id === node.commit.id) ? 'shadow-md scale-[1.01]' : '',
                focusedNode?.commit.id === node.commit.id ? 'z-30 shadow-lg scale-[1.015]' : ''
              )}
              style={{ left: node.x, top: node.y, width: CARD_WIDTH, height: CARD_HEIGHT }}
            >
              {isTop && clumpCount > 1 ? (
                <button
                  type="button"
                  onClick={() => clusterKey && setCollapsedClumps((prev) => {
                    const next = new Set(prev);
                    if (next.has(clusterKey)) next.delete(clusterKey);
                    else next.add(clusterKey);
                    return next;
                  })}
                  className={cn(
                    'absolute right-3 top-3 z-40 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary transition-colors hover:bg-primary/15'
                  )}
                >
                  {isCollapsed ? `Show ${clumpCount}` : `Collapse ${clumpCount}`}
                </button>
              ) : null}
              <div className="flex h-full flex-col px-4 py-3">
                <div className="text-[12px] font-medium leading-none text-primary/80">
                  {node.commit.branchName}/{node.commit.id.slice(0, 7)}
                </div>
                <div className="mt-2 max-w-[20rem] text-[12px] font-medium leading-tight tracking-tight text-primary/85">
                  {isCollapsed && isTop ? `${node.commit.message} +${clumpCount - 1}` : node.commit.message}
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  <span
                    className={cn(
                      'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide',
                      nodeConnectorRendered > 0
                        ? 'border-blue-500/20 bg-primary/10 text-primary'
                        : nodeConnectorDecisions.length > 0
                          ? 'border-amber-500/20 bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400'
                          : 'border-border/50 bg-muted/30 text-muted-foreground'
                    )}
                    title={nodeConnectorDecisions.map((decision) => `${decision.rendered ? 'rendered' : 'skipped'} ${decision.kind} ${decision.parent.slice(0, 7)} -> ${decision.child.slice(0, 7)}: ${decision.reason}`).join('\n') || 'No connector decisions'}
                  >
                    {nodeConnectorSummary}
                  </span>
                  {renderedBranchDecisions > 0 ? (
                    <span className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      Branch {renderedBranchDecisions}
                    </span>
                  ) : null}
                  {renderedAncestryDecisions > 0 ? (
                    <span className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      Ancestry {renderedAncestryDecisions}
                    </span>
                  ) : null}
                </div>
                <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                  <div className="text-[12px] font-medium text-primary/80">@{node.commit.author}</div>
                  <div className="text-[12px] font-medium text-primary/80">{new Date(node.commit.date).toLocaleString('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</div>
                </div>
                {focusedNode?.commit.id === node.commit.id && normalizedSearchQuery ? (
                  <div className="absolute left-4 top-3 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                    Search result
                  </div>
                ) : null}
              </div>
            </div>
            );
            })}
            <svg
              className="pointer-events-none absolute inset-0 z-10"
              width={contentWidth}
              height={contentHeight}
              viewBox={`0 0 ${contentWidth} ${contentHeight}`}
              aria-hidden="true"
              overflow="visible"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <marker id="branch-grid-arrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L5,2.5 L0,5 z" fill={CONNECTOR_COLOR} />
                </marker>
              </defs>
              {connectors.map((connector) => {
                const elbowX = connector.toX;
                return (
                  <Fragment key={connector.id}>
                    <path
                      d={[
                        `M ${connector.fromX} ${connector.fromY}`,
                        `H ${elbowX}`,
                        `V ${connector.toY}`,
                      ].join(' ')}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.8)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d={[
                        `M ${connector.fromX} ${connector.fromY}`,
                        `H ${elbowX}`,
                        `V ${connector.toY}`,
                      ].join(' ')}
                      fill="none"
                      stroke={CONNECTOR_COLOR}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      markerEnd="url(#branch-grid-arrow)"
                    />
                  </Fragment>
                );
              })}
            </svg>
          </div>
        </div>
      )}
      <details className="border-t border-border/50 bg-muted/30 px-4 py-3" open={process.env.NODE_ENV !== 'production'}>
        <summary className="cursor-pointer text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
          Commit debug
        </summary>
        <pre className="mt-3 whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground">
          {[...debugRows, ...branchDebugRows, '', ...connectorDecisions.map((decision) => `${decision.rendered ? 'rendered' : 'skipped'} [${decision.kind}] ${decision.parent.slice(0, 7)} -> ${decision.child.slice(0, 7)} (${decision.reason})`)].join('\n')}
        </pre>
      </details>
    </div>
  );
}
