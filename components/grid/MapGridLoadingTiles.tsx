import {
  computeTileGridLayout,
  fnv1a32,
  isTileOmittedAt,
  lumMixToFillCss,
  TILE_DEFAULT_OMISSION_RATE,
  TILE_PATTERN_DEFAULT_CLIP_INSET,
  TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
  type TileCellSpec,
  type TileGridLayout,
} from '@git-visualizer/tile-pattern-core';
import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { CARD_HEIGHT, CARD_WIDTH } from './LayoutGrid';

const LOADING_TILE_SEED = 'map-grid-loading';
const LOADING_SHAPE_FILL = 'var(--muted)';
const SHIMMER_SPEED_PX_PER_MS = 1;
/** Core ramp width along the diagonal axis (px). */
const SHIMMER_BAND_WIDTH_PX = 1600;
/** Soft falloff after the bright edge (px). */
const SHIMMER_FADE_TAIL_PX = 800;
/** Extra luminance mixed toward white at the peak of the shimmer band. */
const SHIMMER_PEAK_LUM_MIX = 0.55;
const MIN_VIEWPORT_PX = 64;

type LoadingPatch = {
  patchCol: number;
  patchRow: number;
  seed: string;
  offsetX: number;
  offsetY: number;
  layout: TileGridLayout;
};

type PaintedLoadingCell = {
  refKey: string;
  seed: string;
  col: number;
  row: number;
  baseLumMix: number;
  globalCx: number;
  globalCy: number;
};

const patchSeed = (patchCol: number, patchRow: number): string =>
  `${LOADING_TILE_SEED}:${patchCol}:${patchRow}`;

const buildLoadingPatches = (viewportWidth: number, viewportHeight: number): LoadingPatch[] => {
  const patchCols = Math.ceil(viewportWidth / CARD_WIDTH) + 1;
  const patchRows = Math.ceil(viewportHeight / CARD_HEIGHT) + 1;
  const patches: LoadingPatch[] = [];

  for (let patchRow = 0; patchRow < patchRows; patchRow += 1) {
    for (let patchCol = 0; patchCol < patchCols; patchCol += 1) {
      const seed = patchSeed(patchCol, patchRow);
      patches.push({
        patchCol,
        patchRow,
        seed,
        offsetX: patchCol * CARD_WIDTH,
        offsetY: patchRow * CARD_HEIGHT,
        layout: computeTileGridLayout({
          seed,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          displayZoom: TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
        }),
      });
    }
  }

  return patches;
};

const flattenPaintedCells = (patches: LoadingPatch[]): PaintedLoadingCell[] => {
  const painted: PaintedLoadingCell[] = [];
  for (const patch of patches) {
    for (const cell of patch.layout.cells) {
      painted.push({
        refKey: `${patch.patchCol}:${patch.patchRow}:${cell.key}`,
        seed: patch.seed,
        col: cell.col,
        row: cell.row,
        baseLumMix: cell.baseLumMix,
        globalCx: patch.offsetX + cell.cx,
        globalCy: patch.offsetY + cell.cy,
      });
    }
  }
  return painted;
};

const shimmerBoostAt = (
  cellCx: number,
  cellCy: number,
  shimmerSpanPx: number,
  timeMs: number,
): number => {
  const diag = cellCx + cellCy;
  const travel = timeMs * SHIMMER_SPEED_PX_PER_MS;
  const totalBandPx = SHIMMER_BAND_WIDTH_PX + SHIMMER_FADE_TAIL_PX;
  const phase = ((diag - travel) % shimmerSpanPx + shimmerSpanPx) % shimmerSpanPx;
  if (phase > totalBandPx) {
    return 0;
  }

  if (phase <= SHIMMER_BAND_WIDTH_PX) {
    const t = phase / SHIMMER_BAND_WIDTH_PX;
    return t * t * (3 - 2 * t);
  }

  const fadeT = (phase - SHIMMER_BAND_WIDTH_PX) / SHIMMER_FADE_TAIL_PX;
  return Math.pow(Math.cos((fadeT * Math.PI) / 2), 0.8);
};

const applyLoadingTileOpacities = (
  paintedCells: PaintedLoadingCell[],
  shapeRefsByKey: Map<string, SVGCircleElement | SVGPathElement>,
  shimmerSpanPx: number,
  timeMs: number | null,
): void => {
  for (const painted of paintedCells) {
    const basePresence = isTileOmittedAt(
      painted.seed,
      painted.col,
      painted.row,
      TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
      TILE_DEFAULT_OMISSION_RATE,
    )
      ? 0
      : 1;
    const shape = shapeRefsByKey.get(painted.refKey);
    if (!shape) {
      continue;
    }

    if (basePresence <= 0) {
      shape.setAttribute('display', 'none');
      continue;
    }

    shape.removeAttribute('display');
    shape.setAttribute('fill-opacity', String(basePresence));

    const boost =
      timeMs == null
        ? 0
        : shimmerBoostAt(painted.globalCx, painted.globalCy, shimmerSpanPx, timeMs);
    const highlightMix = Math.min(1, painted.baseLumMix + boost * SHIMMER_PEAK_LUM_MIX);
    shape.setAttribute('fill', lumMixToFillCss(LOADING_SHAPE_FILL, highlightMix));
  }
};

const renderPatchCellShape = (
  cell: TileCellSpec,
  refKey: string,
  nextRefs: Map<string, SVGCircleElement | SVGPathElement>,
): ReactNode | null => {
  const restingColor = lumMixToFillCss(LOADING_SHAPE_FILL, cell.baseLumMix);
  const assignRef = (element: SVGCircleElement | SVGPathElement | null) => {
    if (element) {
      nextRefs.set(refKey, element);
    }
  };

  if (cell.drawAsCircle) {
    return (
      <circle
        key={`${refKey}:base`}
        ref={assignRef}
        cx={cell.cx}
        cy={cell.cy}
        r={cell.halfSize}
        fill={restingColor}
        fillOpacity={1}
        stroke="none"
      />
    );
  }

  if (!cell.pathD) {
    return null;
  }

  return (
    <path
      key={`${refKey}:base`}
      ref={assignRef}
      d={cell.pathD}
      fill={restingColor}
      fillOpacity={1}
      stroke="none"
    />
  );
};

export default function MapGridLoadingTiles() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewportSize, setViewportSize] = useState<{ width: number; height: number } | null>(null);
  const shapeRefsByKey = useRef(new Map<string, SVGCircleElement | SVGPathElement>());
  const paintedCellsRef = useRef<PaintedLoadingCell[]>([]);
  const shimmerSpanPxRef = useRef(1);
  const animStartMsRef = useRef(0);
  const animRafRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const syncSize = () => {
      const width = Math.max(MIN_VIEWPORT_PX, Math.round(container.clientWidth));
      const height = Math.max(MIN_VIEWPORT_PX, Math.round(container.clientHeight));
      setViewportSize((prev) =>
        prev?.width === width && prev?.height === height ? prev : { width, height },
      );
      shimmerSpanPxRef.current = width + height + SHIMMER_BAND_WIDTH_PX + SHIMMER_FADE_TAIL_PX;
    };

    syncSize();
    const observer = new ResizeObserver(syncSize);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const patches = useMemo(() => {
    if (!viewportSize) {
      return [];
    }
    return buildLoadingPatches(viewportSize.width, viewportSize.height);
  }, [viewportSize]);

  paintedCellsRef.current = useMemo(() => flattenPaintedCells(patches), [patches]);

  const patternClipId = `map-grid-loading-clip-${fnv1a32(LOADING_TILE_SEED)}`;

  const tileShapes = useMemo(() => {
    if (patches.length === 0) {
      shapeRefsByKey.current = new Map();
      return [] as ReactNode[];
    }

    const nodes: ReactNode[] = [];
    const nextRefs = new Map<string, SVGCircleElement | SVGPathElement>();

    for (const patch of patches) {
      const patchNodes: ReactNode[] = [];

      for (const cell of patch.layout.cells) {
        const refKey = `${patch.patchCol}:${patch.patchRow}:${cell.key}`;
        const shape = renderPatchCellShape(cell, refKey, nextRefs);
        if (shape) {
          patchNodes.push(shape);
        }
      }

      nodes.push(
        <g
          key={`patch-${patch.patchCol}-${patch.patchRow}`}
          transform={`translate(${patch.offsetX} ${patch.offsetY})`}
          clipPath={`url(#${patternClipId}-${patch.patchCol}-${patch.patchRow})`}
        >
          {patchNodes}
        </g>,
      );
    }

    shapeRefsByKey.current = nextRefs;
    return nodes;
  }, [patches, patternClipId]);

  const patchClipDefs = useMemo(() => {
    return patches.map((patch) => (
      <clipPath key={`clip-${patch.patchCol}-${patch.patchRow}`} id={`${patternClipId}-${patch.patchCol}-${patch.patchRow}`}>
        <rect
          x={TILE_PATTERN_DEFAULT_CLIP_INSET}
          y={TILE_PATTERN_DEFAULT_CLIP_INSET}
          width={CARD_WIDTH - TILE_PATTERN_DEFAULT_CLIP_INSET * 2}
          height={CARD_HEIGHT - TILE_PATTERN_DEFAULT_CLIP_INSET * 2}
        />
      </clipPath>
    ));
  }, [patches, patternClipId]);

  const paintTiles = (timeMs: number | null) => {
    if (shapeRefsByKey.current.size === 0 || paintedCellsRef.current.length === 0) {
      return;
    }
    applyLoadingTileOpacities(
      paintedCellsRef.current,
      shapeRefsByKey.current,
      shimmerSpanPxRef.current,
      timeMs,
    );
  };

  useLayoutEffect(() => {
    paintTiles(null);
  }, [tileShapes]);

  useEffect(() => {
    if (patches.length === 0) {
      return;
    }

    if (typeof window === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      paintTiles(null);
      return;
    }

    animStartMsRef.current = performance.now();

    const tick = (now: number) => {
      paintTiles(now - animStartMsRef.current);
      animRafRef.current = requestAnimationFrame(tick);
    };

    animRafRef.current = requestAnimationFrame(tick);

    return () => {
      if (animRafRef.current != null) {
        cancelAnimationFrame(animRafRef.current);
        animRafRef.current = null;
      }
    };
  }, [patches]);

  if (!viewportSize || patches.length === 0) {
    return (
      <div
        ref={containerRef}
        role="status"
        aria-label="Loading commits"
        className="relative flex flex-1 min-h-0 bg-background"
      />
    );
  }

  const { width, height } = viewportSize;

  return (
    <div
      ref={containerRef}
      role="status"
      aria-label="Loading commits"
      className="relative flex flex-1 min-h-0 overflow-hidden bg-background"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full [shape-rendering:geometricPrecision]"
        aria-hidden
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>{patchClipDefs}</defs>
        {tileShapes}
      </svg>
    </div>
  );
}
