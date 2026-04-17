import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { PositionedNode } from './graphLayout';
import { NODE_HEIGHT, NODE_WIDTH } from './graphLayout';

type InteractionLayerProps = {
  width: number;
  height: number;
  panX: number;
  panY: number;
  zoom: number;
  nodes: PositionedNode[];
  onMarqueeSelection: (ids: string[]) => void;
  onPanZoomChange: (next: { panX: number; panY: number; zoom: number }) => void;
};

type DragState =
  | { kind: 'none' }
  | { kind: 'pan'; startX: number; startY: number; panX: number; panY: number }
  | { kind: 'marquee'; startX: number; startY: number; endX: number; endY: number };

const ZOOM_MIN = 0.22;
const ZOOM_MAX = 2.5;

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

export default function InteractionLayer({
  width,
  height,
  panX,
  panY,
  zoom,
  nodes,
  onMarqueeSelection,
  onPanZoomChange,
}: InteractionLayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [drag, setDrag] = useState<DragState>({ kind: 'none' });

  const marqueeRect = useMemo(() => {
    if (drag.kind !== 'marquee') return null;
    const left = Math.min(drag.startX, drag.endX);
    const top = Math.min(drag.startY, drag.endY);
    return {
      left,
      top,
      width: Math.abs(drag.endX - drag.startX),
      height: Math.abs(drag.endY - drag.startY),
    };
  }, [drag]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const rect = el.getBoundingClientRect();
      const pointerX = event.clientX - rect.left;
      const pointerY = event.clientY - rect.top;

      const worldXBefore = (pointerX - panX) / zoom;
      const worldYBefore = (pointerY - panY) / zoom;
      const factor = Math.exp(-Math.max(-80, Math.min(80, event.deltaY)) * 0.0028);
      const nextZoom = clamp(zoom * factor, ZOOM_MIN, ZOOM_MAX);

      const nextPanX = pointerX - worldXBefore * nextZoom;
      const nextPanY = pointerY - worldYBefore * nextZoom;
      onPanZoomChange({ panX: nextPanX, panY: nextPanY, zoom: nextZoom });
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [panX, panY, zoom, onPanZoomChange]);

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (event.button !== 0) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (event.shiftKey) {
      setDrag({ kind: 'marquee', startX: x, startY: y, endX: x, endY: y });
      return;
    }

    setDrag({ kind: 'pan', startX: x, startY: y, panX, panY });
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (drag.kind === 'none') return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (drag.kind === 'pan') {
      onPanZoomChange({
        panX: drag.panX + (x - drag.startX),
        panY: drag.panY + (y - drag.startY),
        zoom,
      });
      return;
    }

    setDrag({ ...drag, endX: x, endY: y });
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = () => {
    if (drag.kind === 'marquee' && marqueeRect && marqueeRect.width > 4 && marqueeRect.height > 4) {
      const worldLeft = (marqueeRect.left - panX) / zoom;
      const worldTop = (marqueeRect.top - panY) / zoom;
      const worldRight = (marqueeRect.left + marqueeRect.width - panX) / zoom;
      const worldBottom = (marqueeRect.top + marqueeRect.height - panY) / zoom;

      const ids = nodes
        .filter((node) => {
          const left = node.x - NODE_WIDTH / 2;
          const right = node.x + NODE_WIDTH / 2;
          const top = node.y - NODE_HEIGHT / 2;
          const bottom = node.y + NODE_HEIGHT / 2;
          return right >= worldLeft && left <= worldRight && bottom >= worldTop && top <= worldBottom;
        })
        .map((node) => node.id);

      onMarqueeSelection(ids);
    }

    setDrag({ kind: 'none' });
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{ width, height, cursor: drag.kind === 'pan' ? 'grabbing' : 'grab' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {marqueeRect && (
        <div
          className="absolute border border-blue-400 bg-blue-200/20 pointer-events-none"
          style={{
            left: marqueeRect.left,
            top: marqueeRect.top,
            width: marqueeRect.width,
            height: marqueeRect.height,
          }}
        />
      )}
    </div>
  );
}
