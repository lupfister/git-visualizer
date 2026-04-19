import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  branchBaseCommit,
  buildLanes,
  buildMergeOrthogonalPath,
  CARD_HEIGHT,
  CARD_WIDTH,
  CONNECTOR_COLOR,
  LEFT_PADDING,
  type BranchGridViewProps,
  type CommitItem,
  type Connector,
  type Node,
  type VisualCommit,
  TOP_PADDING,
  COLUMN_WIDTH,
  nodeForCommitSha,
  orderByLineage,
  renderableBranchPreviews,
  ROW_GAP,
  ROW_HEIGHT,
  toCommit,
} from './LayoutGrid';
import type { Branch } from '../../types';
import type { BranchCommitPreview } from '../../types';
import { useMemo } from 'react';

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

function buildRoundedElbowPath(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  cornerR: number,
  pointFormatter: (x: number, y: number) => string,
  tipGap = 0,
): string {
  const finalY = toY - Math.sign(toY - fromY || 1) * tipGap;
  const corner = Math.max(0, Math.min(cornerR, Math.abs(toX - fromX), Math.abs(toY - fromY)));
  if (corner < 0.5) {
    return [
      `M ${pointFormatter(fromX, fromY)}`,
      `L ${pointFormatter(toX, fromY)}`,
      `L ${pointFormatter(toX, finalY)}`,
    ].join(' ');
  }
  const horizontalDir = toX >= fromX ? 1 : -1;
  const verticalDir = toY >= fromY ? 1 : -1;
  const preTurnX = toX - horizontalDir * corner;
  const postTurnY = finalY - verticalDir * corner;
  return [
    `M ${pointFormatter(fromX, fromY)}`,
    `L ${pointFormatter(preTurnX, fromY)}`,
    `Q ${pointFormatter(toX, fromY)} ${pointFormatter(toX, fromY + verticalDir * corner)}`,
    `L ${pointFormatter(toX, postTurnY)}`,
    `L ${pointFormatter(toX, finalY)}`,
  ].join(' ');
}

const GRID_CONNECTOR_GAP_PX = 8;
const GRID_INCOMING_GAP_PX = 8;

function buildChevronArrowHead(
  tipX: number,
  tipY: number,
  pointFormatter: (x: number, y: number) => string,
  size = 14,
  tipYOffset = 0,
): string {
  const y = tipY + tipYOffset;
  const wingX = size * 0.45;
  const wingY = size * 0.6;
  return [
    `M ${pointFormatter(tipX, y)}`,
    `L ${pointFormatter(tipX - wingX, y + wingY)}`,
    `M ${pointFormatter(tipX, y)}`,
    `L ${pointFormatter(tipX + wingX, y + wingY)}`,
  ].join(' ');
}

export default function BranchGridMap({
  branches,
  mergeNodes = [],
  directCommits = [],
  unpushedDirectCommits = [],
  defaultBranch,
  branchCommitPreviews = {},
  branchUniqueAheadCounts = {},
  gridSearchQuery = '',
  gridSearchJumpToken = 0,
  gridFocusSha = null,
  checkedOutRef = null,
  onGridSearchResultCountChange,
  onGridSearchFocusChange,
}: BranchGridViewProps) {
  const cardRefs = useRef(new Map<string, HTMLDivElement | null>());
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [manuallyOpenedClumps, setManuallyOpenedClumps] = useState<Set<string>>(() => new Set());
  const [isDebugOpen, setIsDebugOpen] = useState(false);
  const lanes = buildLanes(branches, defaultBranch);
  const branchByName = new Map(branches.map((branch) => [branch.name, branch]));
  const laneByName = new Map(lanes.map((lane) => [lane.name, lane] as const));

  const mainCommits = orderByLineage([
    ...mergeNodes.map((node) => ({
      id: node.fullSha,
      branchName: defaultBranch,
      message: node.prTitle ?? node.sha,
      author: '',
      date: node.date,
      parentSha: node.parentShas?.[0] ?? null,
    })),
    ...(branchCommitPreviews[defaultBranch] ?? []).map((commit) => toCommit(defaultBranch, commit)),
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
  const oldestMainCommit = [...mainCommits].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime() || a.id.localeCompare(b.id))[0] ?? null;
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
    if (parentName === defaultBranch) return oldestMainCommit?.id ?? childBaseCommit?.parentSha ?? forkSha;
    if (mainCommitShas.has(forkSha)) return forkSha;
    return forkSha;
  };
  const blueStartShaForBranch = (branch: Branch): string | null => resolveBranchStartSha(branch);

  const structuralBlueBoundaryShas = new Set<string>();
  for (const branch of branches) {
    const blueSha = blueStartShaForBranch(branch);
    if (blueSha) structuralBlueBoundaryShas.add(blueSha);
    const forkSha = branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? null;
    if (forkSha) structuralBlueBoundaryShas.add(forkSha);
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

  const allCommits = [...visibleCommits].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime() || a.id.localeCompare(b.id));
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
    const forkIdx = new Set<number>();
    const branchChildBranches = branches.filter((branch) => resolveBranchStartParentName(branch) === branchName);
    if (branchChildBranches.length > 0) {
      const branchTimes = ordered.map((commit) => new Date(commit.date).getTime());
      branchChildBranches.forEach((child) => {
        const childForkSha = child.presidesFromSha ?? child.divergedFromSha ?? child.createdFromSha ?? null;
        if (childForkSha) {
          const bySha = ordered.findIndex((commit) =>
            commit.id === childForkSha ||
            commit.id.startsWith(childForkSha) ||
            childForkSha.startsWith(commit.id)
          );
          if (bySha >= 0) {
            forkIdx.add(bySha);
            return;
          }
        }
        const childForkTime = new Date(child.divergedFromDate ?? child.createdDate ?? child.lastCommitDate).getTime();
        if (!Number.isFinite(childForkTime) || branchTimes.length === 0) return;
        let bestPastIndex = -1;
        let bestPastDelta = Number.POSITIVE_INFINITY;
        let bestFutureIndex = -1;
        let bestFutureDelta = Number.POSITIVE_INFINITY;
        for (let index = 0; index < branchTimes.length; index += 1) {
          const time = branchTimes[index];
          if (!Number.isFinite(time)) continue;
          if (time <= childForkTime) {
            const delta = childForkTime - time;
            if (delta < bestPastDelta) {
              bestPastDelta = delta;
              bestPastIndex = index;
            }
          } else {
            const delta = time - childForkTime;
            if (delta < bestFutureDelta) {
              bestFutureDelta = delta;
              bestFutureIndex = index;
            }
          }
        }
        const idx = bestPastIndex >= 0 ? bestPastIndex : bestFutureIndex;
        if (idx >= 0) forkIdx.add(idx);
      });
    }
    ordered.forEach((commit, index) => {
      if (structuralBlueBoundaryShas.has(commit.id)) {
        if (index < ordered.length - 1) forkIdx.add(index);
      }
      if (commit.kind === 'uncommitted' || commit.kind === 'stash' || commit.id === 'WORKING_TREE' || commit.id.startsWith('STASH:')) {
        forkIdx.add(index);
      }
    });
    const clusterEntries = clusterByForkPoints(
      ordered.map((commit) => ({ item: commit })),
      forkIdx,
    );
    const clusters: GridCluster[] = [];
    clusterEntries.forEach((cluster, clusterIndex) => {
      const chunk = cluster.entries.map((entry) => entry.item);
      if (chunk.length === 0) return;
      const key = `grid-clump-${branchName}-${chunk[0].id}-${chunk[chunk.length - 1].id}-${clusterIndex}`;
      const leadId = chunk[chunk.length - 1].id;
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

  const debugRows = branches.flatMap((branch) => {
    const previews = branchCommitPreviews[branch.name] ?? [];
    const concretePreviews = [...(branchPreviewSets.get(branch.name) ?? [])].reverse();
    const renderedPreviewIds = new Set((branchCommitsByLane.get(branch.name) ?? []).map((commit) => commit.id));
    return [
      `Branch ${branch.name}`,
      `  ahead=${branchUniqueAheadCounts[branch.name] ?? 0} previews=${concretePreviews.length} rendered=${renderedPreviewIds.size}`,
      ...concretePreviews.map((commit) => {
        const status = renderedPreviewIds.has(commit.fullSha) ? 'visible' : 'hidden';
        const reason = renderedPreviewIds.has(commit.fullSha) ? 'kept by render set' : 'dropped by render set';
        return `  ${status} ${commit.fullSha.slice(0, 7)} ${commit.message} [${reason}]`;
      }),
      previews.length === 0 ? '  no preview data' : null,
    ].filter((line): line is string => line != null);
  });
  const branchDebugRows = Array.from(branchCommitsByLane.entries()).map(([branchName, commits]) => {
    return [
      `Branch debug ${branchName}`,
      ...commits.map((commit) => `  ${commit.id.slice(0, 7)} ${commit.message}`),
    ].join('\n');
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

  const checkedOutSha = checkedOutRef?.headSha ?? null;
  const checkedOutClusterKey = (() => {
    const checkedOutBranchName = checkedOutRef?.branchName ?? null;
    if (!checkedOutSha || !checkedOutBranchName) return null;
    return clusterKeyByCommitId.get(`${checkedOutBranchName}:${checkedOutSha}`) ?? null;
  })();
  const defaultCollapsedClumps = useMemo(() => {
    const next = new Set<string>();
    for (const clusters of clustersByBranch.values()) {
      for (const cluster of clusters) {
        if (cluster.count > 1 && cluster.key !== checkedOutClusterKey) next.add(cluster.key);
      }
    }
    return next;
  }, [checkedOutClusterKey, clustersByBranch]);

  const visibleCommitsList = [...allCommits].reverse().filter((commit) => {
    const clusterKey = clusterKeyByCommitId.get(commit.visualId);
    if (!clusterKey) return true;
    const leadId = leadByClusterKey.get(clusterKey);
    const count = clusterCounts.get(clusterKey) ?? 1;
    const isOpen = clusterKey === checkedOutClusterKey || manuallyOpenedClumps.has(clusterKey) || !defaultCollapsedClumps.has(clusterKey);
    return count <= 1 || isOpen || leadId === commit.id;
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
  const pointFormatter = (x: number, y: number) => `${x.toFixed(1)} ${y.toFixed(1)}`;
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
  const nodeWarnings = new Map<string, string[]>();
  const addNodeWarning = (sha: string, message: string) => {
    const list = nodeWarnings.get(sha) ?? [];
    if (!list.includes(message)) list.push(message);
    nodeWarnings.set(sha, list);
  };
  const connectorParentShas = new Set<string>();
  const branchStartShas = new Set<string>();
  const branchOffNodeShas = new Set<string>();
  const connectorParentAccentClass = 'border-slate-400/70 ring-2 ring-slate-400/20 shadow-[0_0_0_1px_rgba(100,116,139,0.14)]';
  const branchStartAccentClass = 'border-blue-500 ring-2 ring-blue-500/35 shadow-[0_0_0_1px_rgba(59,130,246,0.18)]';
  // Blue highlights are driven by branch-off metadata, not by connector usage.
  const nodeForConnectorTipSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    if (!sha) return null;
    const visibleNode = nodeForCommitSha(visibleNodesBySha, sha, preferredBranchName);
    if (visibleNode) return visibleNode;
    const clusterKey = clusterKeyByCommitId.get(`${preferredBranchName ?? defaultBranch}:${sha}`) ?? clusterKeyByCommitId.get(sha);
    if (!clusterKey) return null;
    return visibleNodeByClusterKey.get(clusterKey) ?? null;
  };
  const connectorKeySet = new Set<string>();
  for (const branch of branches) {
    const branchStartSha = blueStartShaForBranch(branch);
    if (branchStartSha) branchStartShas.add(branchStartSha);
    const forkSha = branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? null;
    if (forkSha) branchOffNodeShas.add(forkSha);
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

  const resolveChildNodeForSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    if (!sha) return null;
    return nodeForCommitSha(visibleNodesBySha, sha, preferredBranchName);
  };

  const getIncomingAnchor = (node: Node): { x: number; y: number } => ({
    x: node.x + CARD_WIDTH / 2,
    y: node.y + CARD_HEIGHT + GRID_INCOMING_GAP_PX,
  });

  const getOutgoingAnchor = (node: Node, isBranching: boolean): { x: number; y: number } => ({
    x: isBranching ? node.x + CARD_WIDTH : node.x + CARD_WIDTH / 2,
    y: isBranching ? node.y + CARD_HEIGHT / 2 : node.y,
  });

  const resolveParentNode = (parentSha: string, preferredBranchName: string): Node | null => {
    return nodeForCommitSha(visibleNodesBySha, parentSha, preferredBranchName);
  };

  const resolveNodeForSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    return resolveChildNodeForSha(sha, preferredBranchName);
  };

  const mergeConnectors = mergeNodes.flatMap((mergeNode) => {
    const mergeTarget =
      nodeForConnectorTipSha(mergeNode.fullSha, defaultBranch) ??
      visibleNodesBySha.get(mergeNode.fullSha)?.[0] ??
      null;
    if (!mergeTarget) return [];
    const mergedParents = mergeNode.parentShas?.slice(1) ?? [];
    return mergedParents
      .map((parentSha) => {
        if (!parentSha || parentSha === mergeNode.fullSha) return null;
        const sourceNode = nodeForCommitSha(visibleNodesBySha, parentSha) ?? null;
        if (!sourceNode || sourceNode.commit.id === mergeTarget.commit.id) return null;
        return {
          id: `merge:${mergeNode.fullSha}:${parentSha}`,
          toX: mergeTarget.x + CARD_WIDTH,
          toY: mergeTarget.y + CARD_HEIGHT / 2,
          path: buildMergeOrthogonalPath({
            laneX: sourceNode.x + CARD_WIDTH / 2,
            tipY: sourceNode.y - GRID_CONNECTOR_GAP_PX,
            mergeX: mergeTarget.x + CARD_WIDTH,
            mergeY: mergeTarget.y + CARD_HEIGHT / 2,
            cornerR: 18,
            pointFormatter,
          }),
        };
      })
      .filter((entry): entry is { id: string; path: string; toX: number; toY: number } => entry != null);
  });

  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const branchBaseCommit = branchBaseCommitByName.get(branch.name);
    if (!branchBaseCommit) continue;
    const parentName = resolveBranchStartParentName(branch);
    const parentNode = resolveParentNode(branchBaseCommit.parentSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? '', parentName);
    const receivingCommit = branchReceivingCommitByName.get(branch.name) ?? branchBaseCommit;
    const childNode = resolveNodeForSha(receivingCommit.id, branch.name) ?? resolveConnectorNode(receivingCommit as VisualCommit);
    if (!parentNode || !childNode || parentNode.commit.id === childNode.commit.id) {
      const parentClusterKey = clusterKeyByCommitId.get(`${branch.name}:${branchBaseCommit.id}`);
      const childClusterKey = clusterKeyByCommitId.get(`${branch.name}:${receivingCommit.id}`);
      const parentHiddenByClump = !!parentClusterKey && !defaultCollapsedClumps.has(parentClusterKey) ? false : !!parentClusterKey && !manuallyOpenedClumps.has(parentClusterKey) && parentClusterKey !== checkedOutClusterKey;
      const childHiddenByClump = !!childClusterKey && !defaultCollapsedClumps.has(childClusterKey) ? false : !!childClusterKey && !manuallyOpenedClumps.has(childClusterKey) && childClusterKey !== checkedOutClusterKey;
      if (!parentNode && !parentHiddenByClump) {
        addNodeWarning(childNode?.commit.id ?? branchBaseCommit.id, 'Missing parent node');
      }
      if (!childNode && !childHiddenByClump) {
        addNodeWarning(branchBaseCommit.id, 'Missing child node');
      }
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

  const crossBranchOutgoingShas = new Set<string>();
  for (const decision of connectorDecisions) {
    if (!decision.rendered || decision.kind !== 'branch') continue;
    const parentBranch = renderNodes.find((node) => node.commit.id === decision.parent)?.commit.branchName ?? null;
    const childBranch = renderNodes.find((node) => node.commit.id === decision.child)?.commit.branchName ?? null;
    if (!parentBranch || !childBranch || parentBranch === childBranch) continue;
    crossBranchOutgoingShas.add(decision.parent);
  }

  for (const node of renderNodes) {
    const parentSha = node.commit.parentSha ?? null;
    if (!parentSha) continue;
    const parentNode = resolveParentNode(parentSha, node.commit.branchName);
    if (!parentNode) {
      const parentClusterKey = clusterKeyByCommitId.get(`${node.commit.branchName}:${parentSha}`) ?? clusterKeyByCommitId.get(parentSha);
      const parentHiddenByClump = !!parentClusterKey && !defaultCollapsedClumps.has(parentClusterKey) ? false : !!parentClusterKey && !manuallyOpenedClumps.has(parentClusterKey) && parentClusterKey !== checkedOutClusterKey;
      if (!parentHiddenByClump) {
        addNodeWarning(node.commit.id, 'Missing parent node');
      }
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
      addNodeWarning(childNode.commit.id, 'Parent and child resolve to the same node');
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
      addNodeWarning(parentNode.commit.id, 'Duplicate connector key');
      addNodeWarning(childNode.commit.id, 'Duplicate connector key');
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
    const orderedBranchNodes = [...branchNodes].sort((a, b) => {
      const aTime = Number.isFinite(new Date(a?.commit?.date ?? '').getTime()) ? new Date(a.commit.date).getTime() : 0;
      const bTime = Number.isFinite(new Date(b?.commit?.date ?? '').getTime()) ? new Date(b.commit.date).getTime() : 0;
      return aTime - bTime || (a?.commit?.id ?? '').localeCompare(b?.commit?.id ?? '');
    });
    for (let index = 1; index < orderedBranchNodes.length; index += 1) {
      const parentNode = orderedBranchNodes[index - 1]!;
      const childNode = orderedBranchNodes[index]!;
      if (parentNode.commit.id === childNode.commit.id) continue;
    const key = `chain:${branchName}:${parentNode.commit.id}->${childNode.commit.id}`;
    if (connectorKeySet.has(key)) {
      addNodeWarning(parentNode.commit.id, 'Duplicate branch chain connector');
      addNodeWarning(childNode.commit.id, 'Duplicate branch chain connector');
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
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2">
        <button
          type="button"
          onClick={() => setIsDebugOpen((open) => !open)}
          className={cn(
            'pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium shadow-sm transition-colors',
            isDebugOpen
              ? 'border-primary/30 bg-primary/10 text-primary'
              : 'border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground'
          )}
        >
          Debug
        </button>
      </div>
      {isDebugOpen ? (
        <div className="absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 shadow-lg backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-foreground">Commit debug</p>
              <p className="text-xs text-muted-foreground">Rendered branch summaries and connector decisions</p>
            </div>
            <button
              type="button"
              onClick={() => setIsDebugOpen(false)}
              className="rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              Close
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
            <pre className="whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground">
              {[...debugRows, ...branchDebugRows, '', ...connectorDecisions.map((decision) => `${decision.rendered ? 'rendered' : 'skipped'} [${decision.kind}] ${decision.parent.slice(0, 7)} -> ${decision.child.slice(0, 7)} (${decision.reason})`)].join('\n')}
            </pre>
          </div>
        </div>
      ) : null}
      {allCommits.length === 0 ? (
        <div className="flex flex-1 min-h-0 items-center justify-center py-20">
          <div className="rounded-xl border border-border/50 bg-muted/30 shadow-inner px-4 py-3">
            <p className="text-sm text-muted-foreground">No commits to render</p>
          </div>
        </div>
      ) : (
        <div ref={scrollContainerRef} className="flex-1 min-h-0 overflow-auto">
          <div
            className="relative min-w-full p-2.5"
            style={{ width: contentWidth, minWidth: '100%', height: contentHeight }}
          >
            {renderNodes.map((node) => {
            const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
            const isClusterOpen = clusterKey
              ? clusterKey === checkedOutClusterKey || manuallyOpenedClumps.has(clusterKey) || !defaultCollapsedClumps.has(clusterKey)
              : false;
            const isTop = clusterKey ? leadByClusterKey.get(clusterKey) === node.commit.id : false;
            const clumpCount = clusterKey ? clusterCounts.get(clusterKey) ?? 1 : 1;
            const nodeConnectorDecisions = connectorDecisions.filter((decision) => decision.parent === node.commit.id || decision.child === node.commit.id);
            const hasRenderedAncestry = nodeConnectorDecisions.some((decision) => decision.rendered && decision.kind === 'ancestry');
            const nodeWarningsForCard = nodeWarnings.get(node.commit.id) ?? [];
            const showDataShapeError = nodeWarningsForCard.length > 0 && !hasRenderedAncestry;
            return (
            <div
              key={node.commit.visualId}
              ref={(el) => {
                cardRefs.current.set(node.commit.id, el);
              }}
              className={cn(
                'group absolute z-20 overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-200 ease-in-out hover:border-border hover:shadow-md',
                branchOffNodeShas.has(node.commit.id) ||
                branchStartShas.has(node.commit.id) ||
                crossBranchOutgoingShas.has(node.commit.id)
                  ? branchStartAccentClass
                  : connectorParentShas.has(node.commit.id)
                    ? connectorParentAccentClass
                  : branchBaseCommitByName.get(node.commit.branchName)?.id === node.commit.id
                    ? 'border-amber-500 ring-2 ring-amber-500/35 shadow-[0_0_0_1px_rgba(245,158,11,0.18)]'
                    : showDataShapeError
                      ? 'border-red-500 ring-2 ring-red-500/25 shadow-[0_0_0_1px_rgba(239,68,68,0.12)]'
                      : '',
                normalizedSearchQuery && !matchingNodes.some((match) => match.commit.id === node.commit.id) ? 'opacity-10 blur-[0.5px]' : '',
                normalizedSearchQuery && matchingNodes.some((match) => match.commit.id === node.commit.id) ? 'shadow-md scale-[1.01]' : '',
                focusedNode?.commit.id === node.commit.id ? 'z-30 shadow-lg scale-[1.015] ring-2 ring-primary/20' : ''
              )}
              style={{ left: node.x, top: node.y, width: CARD_WIDTH, height: CARD_HEIGHT }}
            >
              {isTop && clumpCount > 1 ? (
                <button
                  type="button"
                  onClick={() => clusterKey && clusterKey !== checkedOutClusterKey && setManuallyOpenedClumps((prev) => {
                    const next = new Set(prev);
                    if (next.has(clusterKey)) next.delete(clusterKey);
                    else next.add(clusterKey);
                    return next;
                  })}
                  className="absolute right-3 top-3 z-40 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary transition-colors hover:bg-primary/15"
                >
                  {isClusterOpen ? `Collapse ${clumpCount}` : `Show ${clumpCount}`}
                </button>
              ) : null}
              <div className="flex h-full flex-col px-4 py-3">
                <div className="text-[12px] font-medium leading-none text-muted-foreground">
                  {node.commit.branchName}/{node.commit.id.slice(0, 7)}
                </div>
                <div className="mt-2 max-w-[20rem] text-[12px] font-medium leading-tight tracking-tight text-foreground group-hover:text-foreground">
                  {isTop && isClusterOpen
                    ? node.commit.message
                    : isTop && clumpCount > 1
                      ? `${node.commit.message} +${clumpCount - 1}`
                      : node.commit.message}
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  {showDataShapeError ? (
                    <span
                      className="inline-flex items-center gap-1 rounded-full border border-red-500/25 bg-red-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-red-600 dark:bg-red-900/20 dark:text-red-400"
                      title={nodeWarningsForCard.join('\n')}
                    >
                      Broken ancestry
                    </span>
                  ) : null}
                </div>
                <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                  <div className="text-[12px] font-medium text-muted-foreground">@{node.commit.author}</div>
                  <div className="text-[12px] font-medium text-muted-foreground">{new Date(node.commit.date).toLocaleString('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</div>
                </div>
                {focusedNode?.commit.id === node.commit.id && normalizedSearchQuery ? (
                  <div className="absolute left-4 top-3 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                    Search result
                  </div>
                ) : null}
                {showDataShapeError ? null : null}
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
              </defs>
              {mergeConnectors.map((connector) => (
                <Fragment key={connector.id}>
                  <path
                    d={connector.path}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.8)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d={connector.path}
                    fill="none"
                    stroke={CONNECTOR_COLOR}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                  d={buildChevronArrowHead(
                    connector.toX,
                    connector.toY,
                    pointFormatter,
                  14,
                  4,
                  )}
                    fill="none"
                    stroke={CONNECTOR_COLOR}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Fragment>
              ))}
              {connectors.map((connector) => {
                const path = buildRoundedElbowPath(
                  connector.fromX,
                  connector.fromY,
                  connector.toX,
                  connector.toY,
                  18,
                  pointFormatter,
                  GRID_CONNECTOR_GAP_PX,
                );
                const arrowHead = buildChevronArrowHead(connector.toX, connector.toY, pointFormatter, 14, 4);
                return (
                  <Fragment key={connector.id}>
                    <path
                      key={`${connector.id}-halo`}
                      d={path}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.8)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      key={`${connector.id}-line`}
                      d={path}
                      fill="none"
                      stroke={CONNECTOR_COLOR}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      key={`${connector.id}-arrow`}
                      d={arrowHead}
                      fill="none"
                      stroke={CONNECTOR_COLOR}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Fragment>
                );
              })}
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
