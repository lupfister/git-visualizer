import { useCallback, useEffect, useRef, useState } from 'react';
import type { MouseEvent, MutableRefObject, RefObject } from 'react';
import { CARD_BODY_TOP_OFFSET, CARD_HEIGHT, CARD_WIDTH, type Node } from './LayoutGrid';
import { GRID_RENDER_ZOOM, type MapGridCameraState } from './mapGridUtils';

type MarqueeDragState = {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  additive: boolean;
};

function normalizeMarqueeRect(drag: MarqueeDragState) {
  const left = Math.min(drag.startX, drag.currentX);
  const top = Math.min(drag.startY, drag.currentY);
  const width = Math.abs(drag.currentX - drag.startX);
  const height = Math.abs(drag.currentY - drag.startY);
  return { left, top, width, height };
}

type Params = {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  renderedCameraRef: MutableRefObject<MapGridCameraState>;
  getTransformLayerOriginScreen: () => { x: number; y: number } | null;
  renderNodes: Node[];
  shouldRenderNode: (node: Node) => boolean;
  onPointerReleaseNoMarquee: () => void;
};

export function useMapGridSelection({
  scrollContainerRef,
  renderedCameraRef,
  getTransformLayerOriginScreen,
  renderNodes,
  shouldRenderNode,
  onPointerReleaseNoMarquee,
}: Params) {
  const marqueeDragRef = useRef<MarqueeDragState | null>(null);
  const marqueeMovedRef = useRef(false);
  const marqueeBaseSelectionRef = useRef<string[]>([]);
  const [isMarqueeSelecting, setIsMarqueeSelecting] = useState(false);
  const [marqueeRect, setMarqueeRect] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
  const [selectedCommitShas, setSelectedCommitShas] = useState<string[]>([]);
  const [mergeTargetCommitSha, setMergeTargetCommitSha] = useState<string | null>(null);

  const collectCommitSelectionFromMarquee = useCallback(
    (rect: { left: number; top: number; width: number; height: number }): string[] => {
      const viewport = scrollContainerRef.current;
      const origin = getTransformLayerOriginScreen();
      if (!viewport || !origin) return [];
      const viewportRect = viewport.getBoundingClientRect();
      const scale = renderedCameraRef.current.zoom / GRID_RENDER_ZOOM;
      if (scale <= 0) return [];
      const selected: string[] = [];
      const left = rect.left;
      const right = rect.left + rect.width;
      const top = rect.top;
      const bottom = rect.top + rect.height;
      for (const node of renderNodes) {
        if (!shouldRenderNode(node)) continue;
        const nodeLeft = origin.x + renderedCameraRef.current.panX + node.x * scale - viewportRect.left;
        const nodeTop = origin.y + renderedCameraRef.current.panY + node.y * scale - viewportRect.top;
        const nodeRight = nodeLeft + CARD_WIDTH * scale;
        const nodeBottom = nodeTop + (CARD_BODY_TOP_OFFSET + CARD_HEIGHT) * scale;
        const intersects = !(nodeRight < left || nodeLeft > right || nodeBottom < top || nodeTop > bottom);
        if (intersects) selected.push(node.commit.id);
      }
      return selected;
    },
    [getTransformLayerOriginScreen, renderNodes, renderedCameraRef, scrollContainerRef, shouldRenderNode],
  );

  const startMarqueeDrag = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest('[data-commit-card]')) return;
    if (target?.closest('button, a, input, textarea, select')) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    event.preventDefault();
    const bounds = container.getBoundingClientRect();
    const startX = event.clientX - bounds.left;
    const startY = event.clientY - bounds.top;
    marqueeDragRef.current = {
      startX,
      startY,
      currentX: startX,
      currentY: startY,
      additive: event.metaKey || event.ctrlKey,
    };
    marqueeMovedRef.current = false;
    marqueeBaseSelectionRef.current = event.metaKey || event.ctrlKey ? selectedCommitShas : [];
    setIsMarqueeSelecting(true);
    setMarqueeRect({ left: startX, top: startY, width: 0, height: 0 });
  }, [scrollContainerRef, selectedCommitShas]);

  useEffect(() => {
    const handleMove = (event: globalThis.MouseEvent) => {
      const marqueeDrag = marqueeDragRef.current;
      if (!marqueeDrag) return;
      const container = scrollContainerRef.current;
      if (!container) return;
      const bounds = container.getBoundingClientRect();
      marqueeDrag.currentX = event.clientX - bounds.left;
      marqueeDrag.currentY = event.clientY - bounds.top;
      if (!marqueeMovedRef.current && (Math.abs(marqueeDrag.currentX - marqueeDrag.startX) > 2 || Math.abs(marqueeDrag.currentY - marqueeDrag.startY) > 2)) {
        marqueeMovedRef.current = true;
      }
      const nextRect = normalizeMarqueeRect(marqueeDrag);
      setMarqueeRect(nextRect);
      const commitSelection = collectCommitSelectionFromMarquee(nextRect);
      setSelectedCommitShas(
        marqueeDrag.additive
          ? Array.from(new Set([...marqueeBaseSelectionRef.current, ...commitSelection]))
          : Array.from(new Set(commitSelection)),
      );
      if (!marqueeDrag.additive) {
        setMergeTargetCommitSha(commitSelection[commitSelection.length - 1] ?? null);
      }
    };

    const handleUp = () => {
      if (marqueeDragRef.current) {
        const marqueeDragged = marqueeMovedRef.current;
        marqueeDragRef.current = null;
        marqueeMovedRef.current = false;
        setIsMarqueeSelecting(false);
        setMarqueeRect(null);
        if (!marqueeDragged) {
          setSelectedCommitShas([]);
          setMergeTargetCommitSha(null);
        }
        return;
      }
      onPointerReleaseNoMarquee();
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [collectCommitSelectionFromMarquee, onPointerReleaseNoMarquee, scrollContainerRef]);

  return {
    isMarqueeSelecting,
    marqueeRect,
    selectedCommitShas,
    setSelectedCommitShas,
    mergeTargetCommitSha,
    setMergeTargetCommitSha,
    startMarqueeDrag,
  };
}
