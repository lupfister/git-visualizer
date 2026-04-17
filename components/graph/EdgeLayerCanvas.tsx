import { useEffect, useMemo, useRef } from 'react';
import type { GraphEdge } from '../../types';
import type { PositionedNode } from './graphLayout';

type EdgeSegment = {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  laneId: string;
};

type EdgeLayerCanvasProps = {
  width: number;
  height: number;
  dpr: number;
  zoom: number;
  panX: number;
  panY: number;
  edges: GraphEdge[];
  byId: Map<string, PositionedNode>;
  laneHighlight?: string | null;
  selectedIds: Set<string>;
  viewportRows: { min: number; max: number };
};

function edgeSegments(
  edges: GraphEdge[],
  byId: Map<string, PositionedNode>,
  viewportRows: { min: number; max: number },
): EdgeSegment[] {
  const overscan = 20;
  const minRow = viewportRows.min - overscan;
  const maxRow = viewportRows.max + overscan;
  const out: EdgeSegment[] = [];

  for (const edge of edges) {
    const from = byId.get(edge.fromNodeId);
    const to = byId.get(edge.toNodeId);
    if (!from || !to) continue;
    if ((from.row < minRow || from.row > maxRow) && (to.row < minRow || to.row > maxRow)) {
      continue;
    }
    out.push({
      id: edge.id,
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y,
      laneId: from.laneId,
    });
  }

  return out;
}

export default function EdgeLayerCanvas({
  width,
  height,
  dpr,
  zoom,
  panX,
  panY,
  edges,
  byId,
  laneHighlight,
  selectedIds,
  viewportRows,
}: EdgeLayerCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cacheRef = useRef<Map<string, EdgeSegment[]>>(new Map());

  const segments = useMemo(() => {
    const zoomBucket = Math.round(zoom * 20) / 20;
    const key = `${viewportRows.min}:${viewportRows.max}:${zoomBucket}:${edges.length}`;
    const cached = cacheRef.current.get(key);
    if (cached) return cached;

    const computed = edgeSegments(edges, byId, viewportRows);
    cacheRef.current.set(key, computed);
    if (cacheRef.current.size > 16) {
      const first = cacheRef.current.keys().next().value;
      if (first) cacheRef.current.delete(first);
    }
    return computed;
  }, [edges, byId, viewportRows.min, viewportRows.max, zoom]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    ctx.save();
    ctx.translate(panX, panY);
    ctx.scale(zoom, zoom);

    for (const segment of segments) {
      const muted = laneHighlight != null && laneHighlight !== segment.laneId;
      const selected = selectedIds.has(segment.id.split('->')[0] ?? '');
      ctx.strokeStyle = selected ? '#2563eb' : '#d1d5db';
      ctx.globalAlpha = muted ? 0.15 : 1;
      ctx.lineWidth = selected ? 1.8 / zoom : 1.1 / zoom;

      const elbowX = segment.x1;
      const elbowY = segment.y2;

      ctx.beginPath();
      ctx.moveTo(segment.x1, segment.y1);
      ctx.lineTo(elbowX, elbowY);
      ctx.lineTo(segment.x2, segment.y2);
      ctx.stroke();
    }

    ctx.restore();
  }, [width, height, dpr, panX, panY, zoom, segments, laneHighlight, selectedIds]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}
