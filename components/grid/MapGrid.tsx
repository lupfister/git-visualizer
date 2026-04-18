import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
  timeAgo,
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

function branchPreviewIndexForChildFork(
  previews: BranchCommitPreview[],
  branchTimes: number[],
  child: Branch
): number {
  const childForkSha = child.divergedFromSha ?? child.createdFromSha;
  if (childForkSha) {
    const bySha = previews.findIndex((preview) =>
      preview.fullSha === childForkSha ||
      preview.sha === childForkSha ||
      preview.fullSha.startsWith(childForkSha) ||
      childForkSha.startsWith(preview.fullSha) ||
      preview.sha.startsWith(childForkSha) ||
      childForkSha.startsWith(preview.sha)
    );
    if (bySha >= 0) return bySha;
  }
  const childForkTime = new Date(child.divergedFromDate ?? child.createdDate ?? child.lastCommitDate).getTime();
  if (!Number.isFinite(childForkTime) || branchTimes.length === 0) return -1;
  const firstTime = branchTimes[0];
  const lastTime = branchTimes[branchTimes.length - 1];
  if (childForkTime <= firstTime) return 0;
  if (childForkTime >= lastTime) return branchTimes.length - 1;
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
  return bestPastIndex >= 0 ? bestPastIndex : bestFutureIndex;
}

function pruneForkSplitIndices(
  entryCount: number,
  forkIndices: Set<number>,
  preserveSplitIndices: Set<number> = new Set<number>(),
): Set<number> {
  if (entryCount <= 1 || forkIndices.size === 0) return new Set(forkIndices);
  const active = Array.from(forkIndices)
    .filter((index) => index >= 0 && index < entryCount - 1)
    .sort((a, b) => a - b);
  if (active.length === 0) return new Set<number>();
  const buildSegments = () => {
    const segments: Array<{ start: number; end: number; len: number }> = [];
    let start = 0;
    for (const split of active) {
      const end = Math.min(split, entryCount - 1);
      if (end >= start) segments.push({ start, end, len: end - start + 1 });
      start = end + 1;
    }
    if (start <= entryCount - 1) segments.push({ start, end: entryCount - 1, len: entryCount - start });
    return segments;
  };
  while (active.length > 0) {
    const segments = buildSegments();
    const singletonIdx = segments.findIndex((segment) => segment.len === 1);
    if (singletonIdx < 0 || segments.length <= 1) break;
    let splitToRemove = singletonIdx > 0 ? segments[singletonIdx - 1].end : segments[0].end;
    if (preserveSplitIndices.has(splitToRemove)) {
      const alternate = singletonIdx > 0 && singletonIdx < segments.length ? segments[singletonIdx].end : -1;
      if (alternate >= 0 && !preserveSplitIndices.has(alternate)) splitToRemove = alternate;
      else break;
    }
    const removeAt = active.indexOf(splitToRemove);
    if (removeAt < 0) break;
    active.splice(removeAt, 1);
  }
  return new Set(active);
}

function clusterByForkPoints<T>(
  entries: Array<{ item: T }>,
  forkIndices: Set<number>,
  preserveSplitIndices: Set<number> = new Set<number>(),
): Array<{ entries: Array<{ item: T }> }> {
  if (entries.length === 0) return [];
  const effectiveForkIndices = pruneForkSplitIndices(entries.length, forkIndices, preserveSplitIndices);
  const clusters: Array<{ entries: Array<{ item: T }> }> = [];
  let current = [entries[0]];
  const flush = () => {
    if (current.length === 0) return;
    clusters.push({ entries: current });
  };
  for (let i = 0; i < entries.length; i += 1) {
    const isFork = effectiveForkIndices.has(i);
    if (i === 0) {
      if (isFork) {
        flush();
        clusters.push({ entries: [entries[i]] });
        current = [];
      }
      continue;
    }
    if (effectiveForkIndices.has(i - 1)) {
      flush();
      current = [];
    }
    if (isFork) {
      if (current.length > 0) flush();
      clusters.push({ entries: [entries[i]] });
      current = [];
    } else {
      if (current.length === 0) current = [entries[i]];
      else current.push(entries[i]);
    }
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

  const childBranchesByParent = new Map<string, Branch[]>();
  for (const branch of branches) {
    const parent = branch.parentBranch && branch.parentBranch !== branch.name ? branch.parentBranch : defaultBranch;
    const list = childBranchesByParent.get(parent) ?? [];
    list.push(branch);
    childBranchesByParent.set(parent, list);
  }

  const resolveBranchStartParentName = (branch: Branch): string => {
    const declaredParent = branch.parentBranch;
    const hasConcreteParent =
      declaredParent &&
      declaredParent !== defaultBranch &&
      declaredParent !== branch.name &&
      branchByName.has(declaredParent);
    if (!hasConcreteParent) return defaultBranch;

    const forkSha = branch.divergedFromSha ?? branch.createdFromSha;
    if (forkSha) {
      const declaredParentCommitShas = branchCommitShasByName.get(declaredParent) ?? new Set<string>();
      if (declaredParentCommitShas.has(forkSha)) return declaredParent;
      if (mainCommitShas.has(forkSha)) return defaultBranch;
    }

    const forkAnchor = branchBaseCommitByName.get(branch.name)?.parentSha ?? null;
    if (forkAnchor) {
      const declaredParentCommitShas = branchCommitShasByName.get(declaredParent) ?? new Set<string>();
      if (declaredParentCommitShas.has(forkAnchor)) return declaredParent;
      if (mainCommitShas.has(forkAnchor)) return defaultBranch;
    }

    return declaredParent;
  };

  const resolveBranchStartSha = (branch: Branch): string | null => {
    const childBaseCommit = branchBaseCommitByName.get(branch.name);
    const forkSha = branch.divergedFromSha ?? branch.createdFromSha ?? childBaseCommit?.parentSha ?? null;
    if (!forkSha) return null;
    const parentName = resolveBranchStartParentName(branch);
    if (parentName === defaultBranch) {
      return mainCommitShas.has(forkSha) ? forkSha : null;
    }
    const parentCommitShas = branchCommitShasByName.get(parentName) ?? new Set<string>();
    return parentCommitShas.has(forkSha) ? forkSha : null;
  };

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
  const leadByClusterKey = new Map<string, string>();
  const clusterCounts = new Map<string, number>();
  const buildClustersForBranch = (branchName: string, commits: VisualCommit[]): GridCluster[] => {
    if (commits.length === 0) return [];
    const ordered = [...commits].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime() || a.id.localeCompare(b.id));
    const previewLike = ordered.map((commit) => ({ fullSha: commit.id, sha: commit.id, date: commit.date, parentSha: commit.parentSha ?? null, message: commit.message, author: commit.author })) as BranchCommitPreview[];
    const times = ordered.map((commit) => new Date(commit.date).getTime());
    const children = childBranchesByParent.get(branchName) ?? [];
    const forkIdx = new Set<number>();
    for (const child of children) {
      const idx = branchPreviewIndexForChildFork(previewLike, times, child);
      if (idx >= 0) forkIdx.add(idx);
    }
    const clusterEntries = clusterByForkPoints(ordered.map((commit) => ({ item: commit })), forkIdx);
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
      for (const id of clusterVm.commitIds) clusterKeyByCommitId.set(id, key);
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
  if (allCommits.length === 0) {
    return (
      <div className="rounded-xl border border-border/50 bg-muted/30 shadow-inner flex items-center justify-center py-20">
        <p className="text-sm text-muted-foreground">No commits to render</p>
      </div>
    );
  }

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
  const connectorParentShas = new Set<string>();
  const branchStartShas = new Set<string>();
  const nodeForConnectorTipSha = (sha: string | null | undefined, preferredBranchName?: string): Node | null => {
    if (!sha) return null;
    const visibleNode = nodeForCommitSha(visibleNodesBySha, sha, preferredBranchName);
    if (visibleNode) return visibleNode;
    const clusterKey = clusterKeyByCommitId.get(`${preferredBranchName ?? defaultBranch}:${sha}`) ?? clusterKeyByCommitId.get(sha);
    if (!clusterKey || !collapsedClumps.has(clusterKey)) return null;
    return visibleNodeByClusterKey.get(clusterKey) ?? null;
  };
  for (const branch of branches) {
    const parentName = resolveBranchStartParentName(branch);
    if (!parentName) continue;
    const childBaseCommit = branchBaseCommitByName.get(branch.name);
    const childNode = nodeForConnectorTipSha(childBaseCommit?.id, branch.name);
    const parentNode = nodeForCommitSha(visibleNodesBySha, childBaseCommit?.parentSha ?? null, parentName);
    const branchStartSha = resolveBranchStartSha(branch);
    if (branchStartSha) branchStartShas.add(branchStartSha);
    if (!childNode || !parentNode) continue;
    connectorParentShas.add(parentNode.commit.id);
    connectors.push({ id: `${parentName}->${branch.name}`, fromX: parentNode.x + CARD_WIDTH, fromY: parentNode.y + CARD_HEIGHT / 2, toX: childNode.x, toY: childNode.y + CARD_HEIGHT / 2 });
  }

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div ref={scrollContainerRef} className="overflow-auto">
        <div className="relative min-w-max p-2.5" style={{ width: contentWidth, height: contentHeight }}>
          {renderNodes.map((node) => {
            const clusterKey = clusterKeyByCommitId.get(node.commit.visualId);
            const isCollapsed = clusterKey ? collapsedClumps.has(clusterKey) : false;
            const isTop = clusterKey ? leadByClusterKey.get(clusterKey) === node.commit.id : false;
            const clumpCount = clusterKey ? clusterCounts.get(clusterKey) ?? 1 : 1;
            return (
            <div
              key={node.commit.visualId}
              ref={(el) => {
                cardRefs.current.set(node.commit.id, el);
              }}
              className={cn(
                'absolute z-20 rounded-xl bg-card p-1.5 shadow-sm overflow-hidden border transition-all duration-200',
                branchStartShas.has(node.commit.id) || connectorParentShas.has(node.commit.id)
                  ? 'border-blue-500 ring-2 ring-blue-500/20'
                  : branchBaseCommitByName.get(node.commit.branchName)?.id === node.commit.id
                    ? 'border-amber-500 ring-2 ring-amber-500/20'
                    : 'border-border/50',
                normalizedSearchQuery && !matchingNodes.some((match) => match.commit.id === node.commit.id) ? 'opacity-10 blur-[0.5px]' : '',
                normalizedSearchQuery && matchingNodes.some((match) => match.commit.id === node.commit.id) ? 'ring-2 ring-primary/30 border-primary/70 shadow-md scale-[1.02]' : '',
                focusedNode?.commit.id === node.commit.id ? 'z-30 ring-4 ring-primary/30 border-primary shadow-lg scale-[1.03]' : ''
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
                    'absolute right-2 top-2 z-40 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide shadow-sm transition-colors',
                    isCollapsed
                      ? 'border-primary/20 bg-primary/10 text-primary hover:bg-primary/15'
                      : 'border-border/50 bg-muted/40 text-foreground hover:bg-accent'
                  )}
                >
                  {isCollapsed ? `Show ${clumpCount}` : `Collapse ${clumpCount}`}
                </button>
              ) : null}
              {focusedNode?.commit.id === node.commit.id && normalizedSearchQuery ? (
                <div className="mb-1 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                  Search result
                </div>
              ) : null}
              <p className="text-sm font-medium text-foreground truncate">{isCollapsed && isTop ? `${node.commit.message} +${clumpCount - 1}` : node.commit.message}</p>
              <p className="mt-0.5 text-xs text-muted-foreground truncate">{node.commit.branchName} · {timeAgo(node.commit.date)}</p>
            </div>
            );
          })}
          <svg className="pointer-events-none absolute inset-0 z-30" width={contentWidth} height={contentHeight} viewBox={`0 0 ${contentWidth} ${contentHeight}`} aria-hidden="true">
            <defs>
              <marker id="branch-grid-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L8,4 L0,8 z" fill={CONNECTOR_COLOR} />
              </marker>
            </defs>
            {connectors.map((connector) => {
              const elbowX = connector.fromX + Math.sign(connector.toX - connector.fromX) * Math.min(30, Math.abs(connector.toX - connector.fromX) / 2);
              return <path key={connector.id} d={`M ${connector.fromX} ${connector.fromY} C ${elbowX} ${connector.fromY}, ${elbowX} ${connector.toY}, ${connector.toX} ${connector.toY}`} fill="none" stroke={CONNECTOR_COLOR} strokeWidth="1.5" markerEnd="url(#branch-grid-arrow)" />;
            })}
          </svg>
        </div>
      </div>
      <details className="border-t border-border/50 bg-muted/30 px-4 py-3">
        <summary className="cursor-pointer text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
          Commit debug
        </summary>
        <pre className="mt-3 whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground">
          {debugRows.join('\n')}
        </pre>
      </details>
    </div>
  );
}
