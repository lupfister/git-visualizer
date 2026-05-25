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
const PINWHEEL_ROTATION_MS = 3400;
const PINWHEEL_ARMS = 3;
/** Angular width of each arm as a fraction of the arm period. */
const PINWHEEL_ARM_SPAN = 0.62;
/** Leading segment held near peak brightness before the long tail fades. */
const PINWHEEL_ARM_PLATEAU = 0.14;
/** Max angular lag at the viewport edge — outer tiles trail the hub. */
const PINWHEEL_MAX_DRAG_MS = 900;
/** Extra luminance mixed toward white at the peak of each pinwheel arm. */
const PINWHEEL_PEAK_LUM_MIX = 0.55;
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

const pinwheelBoostAt = (
  cellCx: number,
  cellCy: number,
  originX: number,
  originY: number,
  maxDragRadius: number,
  timeMs: number,
): number => {
  const dx = cellCx - originX;
  const dy = cellCy - originY;
  const dist = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx);
  const dragMs =
    maxDragRadius > 0 ? (dist / maxDragRadius) * PINWHEEL_MAX_DRAG_MS : 0;
  const laggedTimeMs = timeMs - dragMs;
  const rotation = (laggedTimeMs / PINWHEEL_ROTATION_MS) * Math.PI * 2;
  const armPeriod = (Math.PI * 2) / PINWHEEL_ARMS;
  const armSpan = armPeriod * PINWHEEL_ARM_SPAN;

  let phase = angle - rotation;
  phase = ((phase % armPeriod) + armPeriod) % armPeriod;
  if (phase > armSpan) {
    return 0;
  }

  const t = phase / armSpan;
  if (t <= PINWHEEL_ARM_PLATEAU) {
    return 1;
  }

  const fade = (t - PINWHEEL_ARM_PLATEAU) / (1 - PINWHEEL_ARM_PLATEAU);
  return Math.pow(Math.cos((fade * Math.PI) / 2), 0.65);
};

const applyLoadingTileOpacities = (
  paintedCells: PaintedLoadingCell[],
  shapeRefsByKey: Map<string, SVGCircleElement | SVGPathElement>,
  originX: number,
  originY: number,
  maxDragRadius: number,
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
        : pinwheelBoostAt(
            painted.globalCx,
            painted.globalCy,
            originX,
            originY,
            maxDragRadius,
            timeMs,
          );
    const highlightMix = Math.min(1, painted.baseLumMix + boost * PINWHEEL_PEAK_LUM_MIX);
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
  const spinOriginRef = useRef({ x: 0, y: 0, maxDragRadius: 1 });
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
      spinOriginRef.current = {
        x: width / 2,
        y: height / 2,
        maxDragRadius: Math.hypot(width / 2, height / 2),
      };
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
    const { x, y, maxDragRadius } = spinOriginRef.current;
    applyLoadingTileOpacities(
      paintedCellsRef.current,
      shapeRefsByKey.current,
      x,
      y,
      maxDragRadius,
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
