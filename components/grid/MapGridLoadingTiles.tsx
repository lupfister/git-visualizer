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
/** Duration of one eased pulse sweep across the diagonal. */
const SHIMMER_PULSE_MS = 3200;
/** Core ramp width along the diagonal axis (px). */
const SHIMMER_BAND_WIDTH_PX = 1600;
/** Soft falloff after the bright edge (px). */
const SHIMMER_FADE_TAIL_PX = 800;
/** Extra luminance mixed toward white at the peak of the shimmer band. */
const SHIMMER_PEAK_LUM_MIX = 0.55;
const RIPPLE_PULSE_MS = 950;
const RIPPLE_BAND_WIDTH_PX = 20;
const RIPPLE_PEAK_LUM_MIX = 0.52;
/**
 * Total period of one burst sequence. Rings fire at the offsets below, then
 * there is silence until the next burst begins.
 */
const RIPPLE_CYCLE_MS = 1200;
/** Launch times (ms into cycle) for each ring — gaps grow progressively. */
const RIPPLE_RING_OFFSETS_MS = [0, 240, 560] as const;
const MIN_VIEWPORT_PX = 64;

type MapGridLoadingTilesProps = {
  shimmer?: boolean;
  rippleActive?: boolean;
};

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

const easeInOutSine = (t: number): number => (1 - Math.cos(Math.PI * t)) / 2;

const pulsedTravelPx = (timeMs: number, shimmerSpanPx: number): number => {
  const cycleT = (timeMs % SHIMMER_PULSE_MS) / SHIMMER_PULSE_MS;
  return easeInOutSine(cycleT) * shimmerSpanPx;
};

const shimmerBoostAt = (
  cellCx: number,
  cellCy: number,
  shimmerSpanPx: number,
  timeMs: number,
): number => {
  const diag = cellCx + cellCy;
  const travel = pulsedTravelPx(timeMs, shimmerSpanPx);
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

const rippleBoostAt = (
  cellCx: number,
  cellCy: number,
  viewportWidth: number,
  viewportHeight: number,
  /** Elapsed ms since *this ring* launched — caller ensures [0, RIPPLE_PULSE_MS). */
  ringT: number,
): number => {
  const dx = cellCx - viewportWidth / 2;
  const dy = cellCy - viewportHeight / 2;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const maxDistance = Math.sqrt((viewportWidth / 2) ** 2 + (viewportHeight / 2) ** 2) + RIPPLE_BAND_WIDTH_PX;
  const travel = (ringT / RIPPLE_PULSE_MS) * maxDistance;
  const delta = Math.abs(distance - travel);
  if (delta > RIPPLE_BAND_WIDTH_PX) {
    return 0;
  }
  const t = 1 - delta / RIPPLE_BAND_WIDTH_PX;
  return t * t * (3 - 2 * t);
};

/** Sum contributions from all progressively-staggered rings within the current burst cycle. */
const allRipplesBoostAt = (
  cellCx: number,
  cellCy: number,
  viewportWidth: number,
  viewportHeight: number,
  rippleElapsedMs: number,
): number => {
  // Position within the current cycle [0, RIPPLE_CYCLE_MS).
  const cycleT = rippleElapsedMs % RIPPLE_CYCLE_MS;
  let total = 0;
  for (const offset of RIPPLE_RING_OFFSETS_MS) {
    const ringT = cycleT - offset;
    if (ringT <= 0 || ringT >= RIPPLE_PULSE_MS) continue;
    total += rippleBoostAt(cellCx, cellCy, viewportWidth, viewportHeight, ringT);
  }
  return Math.min(1, total);
};

type DrainState = { frozenCycleT: number; startedAtMs: number };

/**
 * Drain-mode ripple: cycleT is frozen at deactivation so no new rings launch.
 * Only rings that were already in-flight keep advancing until they exit.
 */
const drainRipplesBoostAt = (
  cellCx: number,
  cellCy: number,
  viewportWidth: number,
  viewportHeight: number,
  { frozenCycleT, startedAtMs }: DrainState,
): number => {
  const drainElapsed = performance.now() - startedAtMs;
  let total = 0;
  for (const offset of RIPPLE_RING_OFFSETS_MS) {
    const ringTAtFreeze = frozenCycleT - offset;
    if (ringTAtFreeze <= 0) continue;          // wasn't launched yet — don't start it
    const ringT = ringTAtFreeze + drainElapsed;
    if (ringT >= RIPPLE_PULSE_MS) continue;    // already exited the viewport
    total += rippleBoostAt(cellCx, cellCy, viewportWidth, viewportHeight, ringT);
  }
  return Math.min(1, total);
};

/** Returns true while any frozen ring is still inside the viewport. */
const isDrainActive = (drain: DrainState): boolean => {
  const drainElapsed = performance.now() - drain.startedAtMs;
  for (const offset of RIPPLE_RING_OFFSETS_MS) {
    const ringTAtFreeze = drain.frozenCycleT - offset;
    if (ringTAtFreeze <= 0) continue;
    if (ringTAtFreeze + drainElapsed < RIPPLE_PULSE_MS) return true;
  }
  return false;
};

const applyLoadingTileOpacities = (
  paintedCells: PaintedLoadingCell[],
  shapeRefsByKey: Map<string, SVGCircleElement | SVGPathElement>,
  shimmerSpanPx: number,
  viewportWidth: number,
  viewportHeight: number,
  timeMs: number | null,
  options: { shimmer: boolean; rippleElapsedMs: number | null; drainState: DrainState | null },
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

    const shimmerBoost =
      options.shimmer && timeMs != null
        ? shimmerBoostAt(painted.globalCx, painted.globalCy, shimmerSpanPx, timeMs) * SHIMMER_PEAK_LUM_MIX
        : 0;
    const rippleBoost = options.rippleElapsedMs != null
      ? allRipplesBoostAt(painted.globalCx, painted.globalCy, viewportWidth, viewportHeight, options.rippleElapsedMs) * RIPPLE_PEAK_LUM_MIX
      : options.drainState != null
      ? drainRipplesBoostAt(painted.globalCx, painted.globalCy, viewportWidth, viewportHeight, options.drainState) * RIPPLE_PEAK_LUM_MIX
      : 0;
    const highlightMix = Math.min(1, painted.baseLumMix + shimmerBoost + rippleBoost);
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

export default function MapGridLoadingTiles({
  shimmer = true,
  rippleActive = false,
}: MapGridLoadingTilesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewportSize, setViewportSize] = useState<{ width: number; height: number } | null>(null);
  const shapeRefsByKey = useRef(new Map<string, SVGCircleElement | SVGPathElement>());
  const paintedCellsRef = useRef<PaintedLoadingCell[]>([]);
  const shimmerSpanPxRef = useRef(1);
  const animStartMsRef = useRef(0);
  const rippleStartMsRef = useRef<number | null>(null);
  const animRafRef = useRef<number | null>(null);
  // Ref mirrors so the RAF tick always reads the latest prop without stale closures.
  const shimmerRef = useRef(shimmer);
  shimmerRef.current = shimmer;
  const rippleActiveRef = useRef(rippleActive);
  rippleActiveRef.current = rippleActive;
  // Frozen cycle position + start time set on hover-out; null while hovering or fully stopped.
  const rippleDrainStateRef = useRef<DrainState | null>(null);

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
    if (shapeRefsByKey.current.size === 0 || paintedCellsRef.current.length === 0 || !viewportSize) {
      return;
    }
    const rippleElapsedMs =
      rippleActive && rippleStartMsRef.current != null && timeMs != null
        ? timeMs - (rippleStartMsRef.current - animStartMsRef.current)
        : null;
    applyLoadingTileOpacities(
      paintedCellsRef.current,
      shapeRefsByKey.current,
      shimmerSpanPxRef.current,
      viewportSize.width,
      viewportSize.height,
      timeMs,
      { shimmer, rippleElapsedMs, drainState: rippleActive ? null : rippleDrainStateRef.current },
    );
  };

  useLayoutEffect(() => {
    paintTiles(null);
  // rippleActive intentionally omitted: the drain RAF handles the visual exit when
  // hovering stops. Keeping it here would clobber the drain with a resting-state
  // paint in the same synchronous frame, before drain useEffects can run.
  }, [tileShapes, shimmer, viewportSize]); // eslint-disable-line react-hooks/exhaustive-deps

  // Track rising/falling edges of rippleActive to manage rippleStartMsRef and drain state.
  const prevRippleActiveRef = useRef(false);
  useEffect(() => {
    if (rippleActive && !prevRippleActiveRef.current) {
      // Rising edge: fresh hover — start the ripple clock, clear any drain.
      rippleStartMsRef.current = performance.now();
      rippleDrainStateRef.current = null;
    } else if (!rippleActive && prevRippleActiveRef.current) {
      // Falling edge: freeze the cycle position so no new rings launch,
      // but let the currently in-flight rings finish expanding.
      const now = performance.now();
      const rippleElapsed = rippleStartMsRef.current != null ? now - rippleStartMsRef.current : 0;
      rippleDrainStateRef.current = {
        frozenCycleT: rippleElapsed % RIPPLE_CYCLE_MS,
        startedAtMs: now,
      };
      // Keep rippleStartMsRef alive — no longer needed for drain but harmless.
    }
    prevRippleActiveRef.current = rippleActive;
  }, [rippleActive]);

  useEffect(() => {
    if (patches.length === 0) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      paintTiles(null);
      return;
    }

    // Don't start a loop if there's genuinely nothing to animate right now.
    const needsLoop =
      shimmerRef.current || rippleActiveRef.current || rippleDrainStateRef.current != null;
    if (!needsLoop) {
      paintTiles(null);
      return;
    }

    animStartMsRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - animStartMsRef.current;
      paintTiles(elapsed);

      // Self-stop when shimmer is off, ripple is inactive, and all frozen rings have exited.
      const draining =
        rippleDrainStateRef.current != null && isDrainActive(rippleDrainStateRef.current);
      if (!shimmerRef.current && !rippleActiveRef.current && !draining) {
        rippleDrainStateRef.current = null;
        rippleStartMsRef.current = null;
        paintTiles(null);
        animRafRef.current = null;
        return;
      }

      animRafRef.current = requestAnimationFrame(tick);
    };

    animRafRef.current = requestAnimationFrame(tick);

    return () => {
      if (animRafRef.current != null) {
        cancelAnimationFrame(animRafRef.current);
        animRafRef.current = null;
      }
    };
  // Narrowed deps: shimmer/rippleActive are read via refs inside the tick.
  // The effect only rebuilds when patches or viewport change (geometry rebuild),
  // or when shimmer/rippleActive go from off→on (to kick-start the loop).
  }, [patches, shimmer, rippleActive, viewportSize]);

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
