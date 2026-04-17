import { useEffect, useMemo, useRef, useState } from 'react';
import type { CommitDetails, GraphSnapshot } from '../../types';
import { ROW_HEIGHT, buildNodePositionMap, contentBounds } from './graphLayout';
import type { PositionedNode } from './graphLayout';
import NodeLayer from './NodeLayer';
import EdgeLayerCanvas from './EdgeLayerCanvas';
import InteractionLayer from './InteractionLayer';
import { useGraphSnapshot } from './useGraphSnapshot';

type GitGraphViewProps = {
  repoPath?: string;
  checkedOutHeadSha?: string | null;
  onCommitClick?: (target: { commitSha: string; branchName?: string }) => void;
};

const OVERSCAN_ROWS = 25;

function makeViewportRows(panY: number, zoom: number, viewHeight: number) {
  const worldTop = -panY / zoom;
  const worldBottom = (viewHeight - panY) / zoom;
  const min = Math.max(0, Math.floor(worldTop / ROW_HEIGHT) - OVERSCAN_ROWS);
  const max = Math.max(min, Math.ceil(worldBottom / ROW_HEIGHT) + OVERSCAN_ROWS);
  return { min, max };
}

export default function GitGraphView({ repoPath, checkedOutHeadSha, onCommitClick }: GitGraphViewProps) {
  const { snapshot, loading, error, getCommitDetails } = useGraphSnapshot(repoPath, 10000);
  const [viewWidth, setViewWidth] = useState(0);
  const [viewHeight, setViewHeight] = useState(0);
  const [panZoom, setPanZoom] = useState({ panX: 48, panY: 48, zoom: 0.8 });
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [hoveredNode, setHoveredNode] = useState<PositionedNode | null>(null);
  const [hoverDetails, setHoverDetails] = useState<CommitDetails | null>(null);
  const [laneHighlight, setLaneHighlight] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { positionedNodes, byId } = useMemo(() => {
    if (!snapshot) return { positionedNodes: [], byId: new Map<string, PositionedNode>() };
    return buildNodePositionMap(snapshot);
  }, [snapshot]);

  const viewportRows = useMemo(
    () => makeViewportRows(panZoom.panY, panZoom.zoom, viewHeight || 1),
    [panZoom.panY, panZoom.zoom, viewHeight],
  );

  const visibleNodes = useMemo(
    () => positionedNodes.filter((node) => node.row >= viewportRows.min && node.row <= viewportRows.max),
    [positionedNodes, viewportRows.min, viewportRows.max],
  );

  const graphSize = useMemo(() => (snapshot ? contentBounds(snapshot) : { width: 1, height: 1 }), [snapshot]);

  const onNodeHover = async (node: PositionedNode | null) => {
    setHoveredNode(node);
    setHoverDetails(null);
    setLaneHighlight(node?.laneId ?? null);
    if (!node) return;
    const details = await getCommitDetails(node.sha);
    setHoverDetails(details);
  };

  const onNodeClick = (node: PositionedNode, additive: boolean) => {
    setSelectedIds((prev) => {
      const next = additive ? new Set(prev) : new Set<string>();
      if (next.has(node.id)) next.delete(node.id);
      else next.add(node.id);
      return next;
    });
    onCommitClick?.({ commitSha: node.sha, branchName: node.laneId });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setViewWidth(entry.contentRect.width);
      setViewHeight(entry.contentRect.height);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-white"
      ref={containerRef}
    >
      {!repoPath && <div className="p-4 text-sm text-slate-500">Open a repository to render the graph.</div>}
      {repoPath && loading && !snapshot && <div className="p-4 text-sm text-slate-500">Loading graph snapshot…</div>}
      {error && <div className="p-4 text-sm text-red-600">{error}</div>}

      {snapshot && (
        <>
          <EdgeLayerCanvas
            width={viewWidth}
            height={viewHeight}
            dpr={Math.max(1, window.devicePixelRatio || 1)}
            zoom={panZoom.zoom}
            panX={panZoom.panX}
            panY={panZoom.panY}
            edges={snapshot.edges}
            byId={byId}
            laneHighlight={laneHighlight}
            selectedIds={selectedIds}
            viewportRows={viewportRows}
          />

          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute left-0 top-0"
              style={{
                width: graphSize.width,
                height: graphSize.height,
                transform: `translate(${panZoom.panX}px, ${panZoom.panY}px) scale(${panZoom.zoom})`,
                transformOrigin: 'top left',
              }}
            >
              <NodeLayer
                nodes={visibleNodes}
                selectedIds={selectedIds}
                checkedOutSha={checkedOutHeadSha ?? snapshot.checkedOutRef?.headSha}
                laneHighlight={laneHighlight}
                onNodeClick={onNodeClick}
                onNodeHover={onNodeHover}
              />
            </div>
          </div>

          <InteractionLayer
            width={viewWidth}
            height={viewHeight}
            panX={panZoom.panX}
            panY={panZoom.panY}
            zoom={panZoom.zoom}
            nodes={visibleNodes}
            onMarqueeSelection={(ids) => setSelectedIds(new Set(ids))}
            onPanZoomChange={setPanZoom}
          />

          <GraphHud snapshot={snapshot} selectedCount={selectedIds.size} />

          {hoveredNode && (
            <div className="absolute right-4 top-4 z-20 w-80 rounded-lg border border-slate-200 bg-white/95 shadow p-3 text-xs">
              <div className="font-mono text-slate-700">{hoveredNode.sha}</div>
              <div className="mt-1 text-slate-900 font-medium">{hoveredNode.label}</div>
              <div className="mt-1 text-slate-500">lane: {hoveredNode.laneId}</div>
              {hoverDetails && (
                <>
                  <div className="mt-2 text-slate-700">{hoverDetails.authorName} &lt;{hoverDetails.authorEmail}&gt;</div>
                  <div className="mt-1 text-slate-700">
                    {hoverDetails.filesChanged} files · +{hoverDetails.additions} / -{hoverDetails.deletions}
                  </div>
                  {hoverDetails.body && <div className="mt-2 text-slate-600 whitespace-pre-wrap line-clamp-4">{hoverDetails.body}</div>}
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function GraphHud({ snapshot, selectedCount }: { snapshot: GraphSnapshot; selectedCount: number }) {
  return (
    <div className="absolute left-4 top-4 z-10 rounded-lg border border-slate-200 bg-white/95 px-3 py-2 text-xs text-slate-600 shadow-sm">
      <div>snapshot #{snapshot.snapshotId}</div>
      <div className="mt-1">{snapshot.stats.nodeCount} nodes · {snapshot.stats.edgeCount} edges · {snapshot.stats.laneCount} lanes</div>
      <div className="mt-1">selected: {selectedCount}</div>
      <div className="mt-1">drag to pan · wheel to zoom · shift+drag to marquee</div>
    </div>
  );
}
