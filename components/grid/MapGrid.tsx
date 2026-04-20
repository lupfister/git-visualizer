import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import GridCanvas from './GridCanvas';
import {
  branchBaseCommit,
  buildLanes,
  buildMergeOrthogonalPath,
  CARD_HEIGHT,
  CARD_BODY_TOP_OFFSET,
  CARD_WIDTH,
  LEFT_PADDING,
  type BranchGridViewProps,
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

const GRID_RENDER_ZOOM = 2.25;
const GRID_CONNECTOR_GAP_PX = 4;
const GRID_INCOMING_GAP_PX = 4;
const GRID_MERGE_TARGET_GAP_PX = -8;

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

function buildRoundedElbowPath(fromX: number, fromY: number, toX: number, toY: number, cornerR: number, pointFormatter: (x: number, y: number) => string, tipGap = 0): string {
  const finalY = toY - Math.sign(toY - fromY || 1) * tipGap;
  const corner = Math.max(0, Math.min(cornerR, Math.abs(toX - fromX), Math.abs(toY - fromY)));
  if (corner < 0.5) return [`M ${pointFormatter(fromX, fromY)}`, `L ${pointFormatter(toX, fromY)}`, `L ${pointFormatter(toX, finalY)}`].join(' ');
  const horizontalDir = toX >= fromX ? 1 : -1;
  const verticalDir = toY >= fromY ? 1 : -1;
  const preTurnX = toX - horizontalDir * corner;
  const postTurnY = finalY - verticalDir * corner;
  return [`M ${pointFormatter(fromX, fromY)}`, `L ${pointFormatter(preTurnX, fromY)}`, `Q ${pointFormatter(toX, fromY)} ${pointFormatter(toX, fromY + verticalDir * corner)}`, `L ${pointFormatter(toX, postTurnY)}`, `L ${pointFormatter(toX, finalY)}`].join(' ');
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
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [isDebugOpen, setIsDebugOpen] = useState(false);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [viewport, setViewport] = useState({ panX: 0, panY: 0, zoom: 1 });

  const lanes = useMemo(() => buildLanes(branches, defaultBranch), [branches, defaultBranch]);
  const laneByName = useMemo(() => new Map(lanes.map((lane) => [lane.name, lane] as const)), [lanes]);

  const mainCommits = useMemo(() => orderByLineage([
    ...mergeNodes.map((node) => ({ id: node.fullSha, branchName: defaultBranch, message: node.prTitle ?? node.sha, author: '', date: node.date, parentSha: node.parentShas?.[0] ?? null })),
    ...(branchCommitPreviews[defaultBranch] ?? []).map((commit) => toCommit(defaultBranch, commit)),
    ...directCommits.map((commit) => toCommit(defaultBranch, commit)),
    ...unpushedDirectCommits.map((commit) => toCommit(defaultBranch, commit)),
  ]), [mergeNodes, defaultBranch, branchCommitPreviews, directCommits, unpushedDirectCommits]);

  const branchCommitsByLane = useMemo(() => {
    const map = new Map<string, ReturnType<typeof toCommit>[]>();
    for (const branch of branches) {
      if (branch.name === defaultBranch) continue;
      const branchPreviews = renderableBranchPreviews(branch.name, branchUniqueAheadCounts, branchCommitPreviews);
      const commits = orderByLineage(branchPreviews.map((commit) => toCommit(branch.name, commit)));
      if (commits.length > 0) map.set(branch.name, commits);
    }
    return map;
  }, [branches, branchCommitPreviews, branchUniqueAheadCounts, defaultBranch]);

  const visibleCommits = useMemo(() => {
    const branchCommitShaUnion = new Set<string>();
    for (const commits of branchCommitsByLane.values()) for (const commit of commits) branchCommitShaUnion.add(commit.id);
    const visible: VisualCommit[] = [];
    for (const commit of mainCommits) if (!branchCommitShaUnion.has(commit.id)) visible.push({ ...commit, visualId: `${defaultBranch}:${commit.id}` });
    for (const [branchName, commits] of branchCommitsByLane.entries()) for (const commit of commits) visible.push({ ...commit, visualId: `${branchName}:${commit.id}` });
    return visible.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime() || a.id.localeCompare(b.id));
  }, [mainCommits, branchCommitsByLane, defaultBranch]);

  const nodes = useMemo<Node[]>(() => {
    const rows = new Map<string, number>(visibleCommits.map((commit, index) => [commit.visualId, index + 1] as const));
    const zoomAwareRowPitch = ROW_HEIGHT + ROW_GAP / GRID_RENDER_ZOOM + 20 / GRID_RENDER_ZOOM;
    return visibleCommits.map((commit) => {
      const lane = laneByName.get(commit.branchName);
      const row = rows.get(commit.visualId) ?? 1;
      return { commit, row, column: lane?.column ?? 0, x: LEFT_PADDING + (lane?.column ?? 0) * COLUMN_WIDTH, y: TOP_PADDING + (row - 1) * zoomAwareRowPitch };
    });
  }, [visibleCommits, laneByName]);

  const nodeBySha = useMemo(() => new Map(nodes.map((node) => [node.commit.id, node] as const)), [nodes]);
  const normalizedSearchQuery = gridSearchQuery.trim().toLowerCase();
  const matchingNodeIds = useMemo(() => new Set(
    normalizedSearchQuery
      ? nodes.filter((node) => {
          const sha = node.commit.id.toLowerCase();
          const shortSha = node.commit.id.slice(0, 7).toLowerCase();
          const message = node.commit.message.toLowerCase();
          const branchName = node.commit.branchName.toLowerCase();
          return sha.includes(normalizedSearchQuery) || shortSha.includes(normalizedSearchQuery) || message.includes(normalizedSearchQuery) || branchName.includes(normalizedSearchQuery);
        }).map((node) => node.commit.id)
      : []
  ), [nodes, normalizedSearchQuery]);

  useEffect(() => {
    onGridSearchResultCountChange?.(normalizedSearchQuery ? matchingNodeIds.size : null);
  }, [matchingNodeIds.size, normalizedSearchQuery, onGridSearchResultCountChange]);

  useEffect(() => {
    onGridSearchFocusChange?.(normalizedSearchQuery ? (nodes.find((node) => matchingNodeIds.has(node.commit.id))?.commit.id ?? null) : null);
  }, [matchingNodeIds, normalizedSearchQuery, nodes, onGridSearchFocusChange]);

  useLayoutEffect(() => {
    if (!gridFocusSha) return;
    const node = nodeBySha.get(gridFocusSha);
    const container = viewportRef.current;
    if (!node || !container) return;
    setViewport((current) => ({
      ...current,
      panX: Math.max(0, node.x - container.clientWidth / 2 + CARD_WIDTH / 2),
      panY: Math.max(0, node.y - container.clientHeight / 2 + CARD_HEIGHT / 2),
    }));
  }, [gridFocusSha, gridSearchJumpToken, nodeBySha]);

  const checkedOutClusterKey = checkedOutRef?.headSha && checkedOutRef?.branchName ? `${checkedOutRef.branchName}:${checkedOutRef.headSha}` : null;
  const clusterKeyByCommitId = new Map<string, string>();
  const leadByClusterKey = new Map<string, string>();
  const clusterCounts = new Map<string, number>();
  const clustersByBranch = new Map<string, Array<{ key: string; count: number }>>();
  for (const node of nodes) {
    const key = `${node.commit.branchName}:${node.commit.id}`;
    clusterKeyByCommitId.set(node.commit.visualId, key);
    leadByClusterKey.set(key, node.commit.id);
    clusterCounts.set(key, 1);
    const list = clustersByBranch.get(node.commit.branchName) ?? [];
    list.push({ key, count: 1 });
    clustersByBranch.set(node.commit.branchName, list);
  }
  const defaultCollapsedClumps = useMemo(() => new Set<string>(Array.from(clustersByBranch.values()).flat().filter((cluster) => cluster.count > 1 && cluster.key !== checkedOutClusterKey).map((cluster) => cluster.key)), [clustersByBranch, checkedOutClusterKey]);
  const manuallyOpenedClumps = useMemo(() => new Set<string>(), []);

  const visibleNodesBySha = useMemo(() => {
    const map = new Map<string, Node[]>();
    for (const node of nodes) {
      const list = map.get(node.commit.id) ?? [];
      list.push(node);
      map.set(node.commit.id, list);
    }
    return map;
  }, [nodes]);

  const pointFormatter = (x: number, y: number) => `${x.toFixed(1)} ${y.toFixed(1)}`;
  const connectors: Connector[] = [];
  const mergeConnectors = mergeNodes.flatMap((mergeNode) => {
    const mergeTarget = visibleNodesBySha.get(mergeNode.fullSha)?.[0] ?? null;
    if (!mergeTarget) return [];
    return (mergeNode.parentShas?.slice(1) ?? []).map((parentSha) => {
      const sourceNode = nodeForCommitSha(visibleNodesBySha, parentSha) ?? null;
      if (!sourceNode || sourceNode.commit.id === mergeTarget.commit.id) return null;
      return {
        id: `merge:${mergeNode.fullSha}:${parentSha}`,
        fromX: sourceNode.x + CARD_WIDTH / 2,
        fromY: sourceNode.y,
        toX: mergeTarget.x + CARD_WIDTH - GRID_MERGE_TARGET_GAP_PX,
        toY: mergeTarget.y + CARD_BODY_TOP_OFFSET + CARD_HEIGHT / 2,
        path: buildMergeOrthogonalPath({
          laneX: sourceNode.x + CARD_WIDTH / 2,
          tipY: sourceNode.y,
          mergeX: mergeTarget.x + CARD_WIDTH - GRID_MERGE_TARGET_GAP_PX,
          mergeY: mergeTarget.y + CARD_BODY_TOP_OFFSET + CARD_HEIGHT / 2,
          cornerR: 18,
          pointFormatter,
        }),
      };
    }).filter((entry): entry is { id: string; fromX: number; fromY: number; toX: number; toY: number; path: string } => entry != null);
  });

  for (const node of nodes) {
    if (!node.commit.parentSha) continue;
    const parentNode = nodeForCommitSha(visibleNodesBySha, node.commit.parentSha, node.commit.branchName);
    if (!parentNode || parentNode.commit.id === node.commit.id) continue;
    const sourceX = parentNode.x + CARD_WIDTH / 2;
    const sourceY = parentNode.y + CARD_BODY_TOP_OFFSET;
    const targetX = node.x + CARD_WIDTH / 2;
    const targetY = node.y + CARD_BODY_TOP_OFFSET + GRID_INCOMING_GAP_PX;
    connectors.push({
      id: `${node.commit.branchName}:${parentNode.commit.id}->${node.commit.id}`,
      fromX: sourceX,
      fromY: sourceY,
      toX: targetX,
      toY: targetY,
      path: buildRoundedElbowPath(sourceX, sourceY, targetX, targetY, 18, pointFormatter, GRID_CONNECTOR_GAP_PX),
    });
  }

  const connectorParentShas = new Set<string>();
  const branchOffNodeShas = new Set<string>();
  const branchStartShas = new Set<string>();
  const crossBranchOutgoingShas = new Set<string>();
  const branchBaseCommitIds = new Set<string>();
  const nodeWarnings = new Map<string, string[]>();

  for (const branch of branches) {
    if (branch.name === defaultBranch) continue;
    const baseCommit = branchBaseCommit(branch.name, branchCommitPreviews, branchUniqueAheadCounts);
    if (baseCommit) branchBaseCommitIds.add(baseCommit.id);
    if (branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha) branchOffNodeShas.add(branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? '');
  }
  for (const node of nodes) {
    const parent = node.commit.parentSha ? nodeForCommitSha(visibleNodesBySha, node.commit.parentSha, node.commit.branchName) : null;
    if (parent) connectorParentShas.add(parent.commit.id);
    if (normalizedSearchQuery && !matchingNodeIds.has(node.commit.id)) nodeWarnings.set(node.commit.id, ['Search filtered']);
  }

  useLayoutEffect(() => {
    const container = viewportRef.current;
    if (!container) return;
    const sync = () => {
      setViewportSize({
        width: Math.max(1, container.clientWidth || window.innerWidth),
        height: Math.max(1, container.clientHeight || window.innerHeight),
      });
    };
    sync();
    const resizeObserver = new ResizeObserver(sync);
    resizeObserver.observe(container);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2">
        <button type="button" onClick={() => setIsDebugOpen((open) => !open)} className={cn('pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium shadow-sm transition-colors', isDebugOpen ? 'border-primary/30 bg-primary/10 text-primary' : 'border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground')}>Debug</button>
      </div>
      {isDebugOpen ? <div className="absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 shadow-lg backdrop-blur-sm"><div className="flex items-center justify-between border-b border-border/50 px-4 py-3"><div><p className="text-sm font-medium text-foreground">Commit debug</p><p className="text-xs text-muted-foreground">Canvas-rendered branch summaries</p></div><button type="button" onClick={() => setIsDebugOpen(false)} className="rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">Close</button></div><div className="min-h-0 flex-1 overflow-y-auto px-4 py-3"><pre className="whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground">{`nodes=${nodes.length}\nconnectors=${connectors.length}\nsearch=${normalizedSearchQuery || '(none)'}`}</pre></div></div> : null}
      {nodes.length === 0 ? (
        <div className="flex flex-1 min-h-0 items-center justify-center py-20"><div className="rounded-xl border border-border/50 bg-muted/30 shadow-inner px-4 py-3"><p className="text-sm text-muted-foreground">No commits to render</p></div></div>
      ) : (
        <div ref={viewportRef} className="relative flex-1 min-h-0 overflow-hidden">
          <GridCanvas
            nodes={nodes}
            connectors={connectors}
            mergeConnectors={mergeConnectors}
            viewportWidth={viewportSize.width}
            viewportHeight={viewportSize.height}
            panX={viewport.panX}
            panY={viewport.panY}
            zoom={viewport.zoom}
            onViewportChange={setViewport}
            searchQuery={normalizedSearchQuery}
            matchingNodeIds={matchingNodeIds}
            focusedNodeId={gridFocusSha}
            clusterKeyByCommitId={clusterKeyByCommitId}
            leadByClusterKey={leadByClusterKey}
            clusterCounts={clusterCounts}
            defaultCollapsedClumps={defaultCollapsedClumps}
            manuallyOpenedClumps={manuallyOpenedClumps}
            checkedOutClusterKey={checkedOutClusterKey}
            connectorParentShas={connectorParentShas}
            branchOffNodeShas={branchOffNodeShas}
            branchStartShas={branchStartShas}
            crossBranchOutgoingShas={crossBranchOutgoingShas}
            branchBaseCommitIds={branchBaseCommitIds}
            nodeWarnings={nodeWarnings}
          />
        </div>
      )}
    </div>
  );
}
