import {
  computeTileGridLayout,
  createTileOmissionSampler,
  fnv1a32,
  isTileOmittedAt,
  lumMixToFillCss,
  pickGridCounts,
  TILE_DEFAULT_OMISSION_RATE,
  TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
  type TileCellSpec,
  type TileGridLayout,
  type TileOmissionSampler,
} from '@git-visualizer/tile-pattern-core';
import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { CARD_HEIGHT, CARD_WIDTH } from './LayoutGrid';

const BOOST_EPSILON = 0.006;
const HOVER_OVERLAY_MAX_OPACITY = 0.6;
const CURSOR_RADIUS_LAYOUT = 12;
const HOVER_CURSOR_CAP = 1;
const HOVER_SUSTAIN_LERP = 0.14;
const HOVER_MOVE_DEPOSIT = 0.11;
const HOVER_AMBIENT_DECAY = 0.985;
const TILE_PATTERN_CLIP_INSET = 1.5;
const TILE_OMIT_VISIBILITY_EPSILON = 0.02;

const cursorFalloff = (dist: number): number => {
  if (dist >= CURSOR_RADIUS_LAYOUT) {
    return 0;
  }
  const t = 1 - dist / CURSOR_RADIUS_LAYOUT;
  return t * t * (3 - 2 * t);
};

const boostToOverlayOpacity = (boost: number): number =>
  Math.max(0, Math.min(1, boost)) * HOVER_OVERLAY_MAX_OPACITY;

const addBoostAt = (
  boosts: Float32Array,
  cols: number,
  rows: number,
  col: number,
  row: number,
  amount: number,
): boolean => {
  if (amount <= 0 || col < 0 || row < 0 || col >= cols || row >= rows) {
    return false;
  }
  const index = row * cols + col;
  const next = Math.min(1, boosts[index] + amount);
  if (next <= boosts[index]) {
    return false;
  }
  boosts[index] = next;
  return true;
};

const sustainCursorBoosts = (
  boosts: Float32Array,
  cols: number,
  cells: TileCellSpec[],
  layoutX: number,
  layoutY: number,
): boolean => {
  let changed = false;

  for (const cell of cells) {
    const dist = Math.hypot(layoutX - cell.cx, layoutY - cell.cy);
    const falloff = cursorFalloff(dist);
    if (falloff <= 0) {
      continue;
    }
    const target = falloff * HOVER_CURSOR_CAP;
    const index = cell.row * cols + cell.col;
    const next = boosts[index] + (target - boosts[index]) * HOVER_SUSTAIN_LERP;
    if (Math.abs(next - boosts[index]) > 0.001) {
      boosts[index] = Math.min(1, next);
      changed = true;
    }
  }

  return changed;
};

const depositAtCursor = (
  boosts: Float32Array,
  cols: number,
  rows: number,
  cells: TileCellSpec[],
  layoutX: number,
  layoutY: number,
  amount: number,
): boolean => {
  let changed = false;

  for (const cell of cells) {
    const dist = Math.hypot(layoutX - cell.cx, layoutY - cell.cy);
    const falloff = cursorFalloff(dist);
    if (falloff <= 0) {
      continue;
    }
    if (addBoostAt(boosts, cols, rows, cell.col, cell.row, falloff * amount)) {
      changed = true;
    }
  }

  return changed;
};

type CommitNodeTilePatternProps = {
  seed: string;
  shapeFillCssVar: string;
  hoverTintColor: string;
  /** Used for grid topology (row/col count). Tile geometry within a topology is zoom-invariant. */
  displayZoom: number;
  randomTileGaps?: boolean;
  animateTileGaps?: boolean;
  tileOmissionRate?: number;
};

export type CommitNodeTilePatternHandle = {
  startHover: () => void;
  applyPointer: (layoutX: number, layoutY: number) => void;
  endHover: () => void;
};

type TileShapeRefs = {
  base: SVGCircleElement | SVGPathElement | null;
  overlay: SVGCircleElement | SVGPathElement | null;
};

const applyTileOpacities = (
  layout: TileGridLayout,
  cells: TileCellSpec[],
  presences: Float32Array | null,
  boosts: Float32Array,
  shapeRefsByKey: Map<string, TileShapeRefs>,
  randomTileGaps: boolean,
  animateGaps: boolean,
  seed: string,
  tileOmissionRate: number,
): void => {
  const { cols } = layout;

  for (const cell of cells) {
    const index = cell.row * cols + cell.col;
    const tilePresence = !randomTileGaps
      ? 1
      : animateGaps
        ? (presences?.[index] ?? 0)
        : isTileOmittedAt(
            seed,
            cell.col,
            cell.row,
            TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
            tileOmissionRate,
          )
          ? 0
          : 1;
    const refs = shapeRefsByKey.get(cell.key);
    if (!refs?.base) {
      continue;
    }

    if (tilePresence <= (animateGaps ? 0 : TILE_OMIT_VISIBILITY_EPSILON)) {
      refs.base.setAttribute('display', 'none');
      refs.overlay?.setAttribute('display', 'none');
      continue;
    }

    refs.base.removeAttribute('display');
    refs.base.setAttribute('fill-opacity', String(tilePresence));

    const overlay = refs.overlay;
    if (!overlay) {
      continue;
    }

    const overlayOpacity = boostToOverlayOpacity(boosts[index] ?? 0) * tilePresence;
    if (overlayOpacity < 0.008) {
      overlay.setAttribute('display', 'none');
      continue;
    }

    overlay.removeAttribute('display');
    overlay.setAttribute('fill-opacity', String(overlayOpacity));
  }
};

const tilePatternPropsEqual = (
  prev: Readonly<CommitNodeTilePatternProps>,
  next: Readonly<CommitNodeTilePatternProps>,
): boolean => {
  if (prev.seed !== next.seed) return false;
  if (prev.shapeFillCssVar !== next.shapeFillCssVar) return false;
  if (prev.hoverTintColor !== next.hoverTintColor) return false;
  if (prev.randomTileGaps !== next.randomTileGaps) return false;
  if (prev.animateTileGaps !== next.animateTileGaps) return false;
  if (prev.tileOmissionRate !== next.tileOmissionRate) return false;

  const prevTopology = pickGridCounts(CARD_WIDTH, CARD_HEIGHT, prev.displayZoom);
  const nextTopology = pickGridCounts(CARD_WIDTH, CARD_HEIGHT, next.displayZoom);
  return prevTopology.cols === nextTopology.cols && prevTopology.rows === nextTopology.rows;
};

export const CommitNodeTilePattern = memo(
  forwardRef<CommitNodeTilePatternHandle, CommitNodeTilePatternProps>(function CommitNodeTilePattern(
    {
      seed,
      shapeFillCssVar,
      hoverTintColor,
      displayZoom,
      randomTileGaps = false,
      animateTileGaps = false,
      tileOmissionRate = TILE_DEFAULT_OMISSION_RATE,
    },
    ref,
  ) {
    const fillValue = `var(${shapeFillCssVar})`;
    const displayZoomForLayoutRef = useRef(displayZoom);
    displayZoomForLayoutRef.current = displayZoom;

    const gridTopology = useMemo(
      () => pickGridCounts(CARD_WIDTH, CARD_HEIGHT, displayZoom),
      [displayZoom],
    );
    const topologyKey = `${gridTopology.cols}x${gridTopology.rows}`;

    const layout = useMemo((): TileGridLayout => {
      return computeTileGridLayout({
        seed,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        displayZoom: displayZoomForLayoutRef.current,
      });
    }, [seed, topologyKey]);
    const layoutRef = useRef(layout);
    layoutRef.current = layout;

    const omissionSampler = useMemo((): TileOmissionSampler | null => {
      if (!randomTileGaps || !animateTileGaps) {
        return null;
      }
      return createTileOmissionSampler(
        seed,
        layout.cols,
        layout.rows,
        TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
        tileOmissionRate,
      );
    }, [animateTileGaps, layout.cols, layout.rows, randomTileGaps, seed, tileOmissionRate, topologyKey]);

    const omissionSamplerRef = useRef(omissionSampler);
    omissionSamplerRef.current = omissionSampler;

    const shapeRefsByKey = useRef(new Map<string, TileShapeRefs>());
    const presencesRef = useRef<Float32Array>(new Float32Array(layout.cols * layout.rows));
    const gapAnimStartMsRef = useRef(0);
    const gapAnimRafRef = useRef<number | null>(null);

    const [boosts, setBoosts] = useState<Float32Array>(
      () => new Float32Array(layout.cols * layout.rows),
    );
    const boostsRef = useRef(boosts);
    boostsRef.current = boosts;
    const isHoveringRef = useRef(false);
    const pointerRef = useRef<{ x: number; y: number } | null>(null);
    const rafRef = useRef<number | null>(null);

    const paintTiles = useCallback(() => {
      const layoutSnapshot = layoutRef.current;
      if (shapeRefsByKey.current.size === 0) {
        return;
      }

      applyTileOpacities(
        layoutSnapshot,
        layoutSnapshot.cells,
        omissionSamplerRef.current ? presencesRef.current : null,
        boostsRef.current,
        shapeRefsByKey.current,
        randomTileGaps,
        Boolean(omissionSamplerRef.current),
        seed,
        tileOmissionRate,
      );
    }, [randomTileGaps, seed, tileOmissionRate]);

    useEffect(() => {
      presencesRef.current = new Float32Array(layout.cols * layout.rows);
      const nextBoosts = new Float32Array(layout.cols * layout.rows);
      boostsRef.current = nextBoosts;
      setBoosts(nextBoosts);
      gapAnimStartMsRef.current = performance.now();
      isHoveringRef.current = false;
      pointerRef.current = null;
    }, [layout.cols, layout.rows, topologyKey]);

    useEffect(() => {
      if (!omissionSampler) {
        paintTiles();
        return;
      }
      if (typeof window === 'undefined') {
        return;
      }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        paintTiles();
        return;
      }

      const tick = (now: number) => {
        const sampler = omissionSamplerRef.current;
        const layoutSnapshot = layoutRef.current;
        if (sampler && presencesRef.current.length === layoutSnapshot.cols * layoutSnapshot.rows) {
          sampler.sample(now - gapAnimStartMsRef.current, presencesRef.current);
        }
        if (shapeRefsByKey.current.size > 0) {
          paintTiles();
        }
        gapAnimRafRef.current = requestAnimationFrame(tick);
      };

      gapAnimStartMsRef.current = performance.now();
      gapAnimRafRef.current = requestAnimationFrame(tick);

      return () => {
        if (gapAnimRafRef.current != null) {
          cancelAnimationFrame(gapAnimRafRef.current);
          gapAnimRafRef.current = null;
        }
      };
    }, [omissionSampler, paintTiles, topologyKey]);

    useEffect(() => {
      if (omissionSampler) {
        return;
      }
      paintTiles();
    }, [boosts, omissionSampler, paintTiles]);

    const stopHoverLoop = useCallback(() => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    }, []);

    const runHoverFrame = useCallback(() => {
      rafRef.current = null;
      const { cols, rows, cells, cellW, cellH } = layoutRef.current;
      const previous = boostsRef.current;
      const next = new Float32Array(previous);
      let dirty = false;
      let keepLooping = false;

      if (isHoveringRef.current && pointerRef.current) {
        const { x, y } = pointerRef.current;
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const index = row * cols + col;
            if (next[index] <= BOOST_EPSILON) {
              continue;
            }
            const cx = (col + 0.5) * cellW;
            const cy = (row + 0.5) * cellH;
            if (Math.hypot(cx - x, cy - y) <= CURSOR_RADIUS_LAYOUT) {
              continue;
            }
            next[index] *= HOVER_AMBIENT_DECAY;
            dirty = true;
          }
        }
        if (sustainCursorBoosts(next, cols, cells, x, y)) {
          dirty = true;
        }
        keepLooping = true;
      } else {
        for (let i = 0; i < next.length; i++) {
          if (next[i] <= BOOST_EPSILON) {
            if (next[i] !== 0) {
              next[i] = 0;
              dirty = true;
            }
            continue;
          }
          next[i] *= HOVER_AMBIENT_DECAY;
          if (next[i] <= BOOST_EPSILON) {
            next[i] = 0;
          } else {
            keepLooping = true;
          }
          dirty = true;
        }
      }

      if (dirty) {
        boostsRef.current = next;
        setBoosts(next);
        paintTiles();
      }
      if (keepLooping) {
        rafRef.current = requestAnimationFrame(runHoverFrame);
      }
    }, [paintTiles]);

    const ensureHoverLoop = useCallback(() => {
      if (rafRef.current != null) {
        return;
      }
      rafRef.current = requestAnimationFrame(runHoverFrame);
    }, [runHoverFrame]);

    useEffect(() => () => stopHoverLoop(), [stopHoverLoop]);

    useImperativeHandle(
      ref,
      () => ({
        startHover() {
          isHoveringRef.current = true;
          ensureHoverLoop();
        },
        applyPointer(layoutX: number, layoutY: number) {
          const { cells, cols, rows } = layoutRef.current;
          pointerRef.current = { x: layoutX, y: layoutY };
          isHoveringRef.current = true;

          const next = new Float32Array(boostsRef.current);
          if (depositAtCursor(next, cols, rows, cells, layoutX, layoutY, HOVER_MOVE_DEPOSIT)) {
            boostsRef.current = next;
            setBoosts(next);
            paintTiles();
          }
          ensureHoverLoop();
        },
        endHover() {
          isHoveringRef.current = false;
          pointerRef.current = null;
          ensureHoverLoop();
        },
      }),
      [ensureHoverLoop, paintTiles],
    );

    const patternClipId = `commit-tile-clip-${fnv1a32(seed)}`;

    const tileShapes = useMemo(() => {
      const base: ReactNode[] = [];
      const overlay: ReactNode[] = [];
      const nextRefs = new Map<string, TileShapeRefs>();

      for (const cell of layout.cells) {
        const restingColor = lumMixToFillCss(fillValue, cell.baseLumMix);
        const overlayStyle = { mixBlendMode: 'darken' as const };
        const assignRefs = (baseEl: SVGCircleElement | SVGPathElement | null) => {
          const entry = nextRefs.get(cell.key) ?? { base: null, overlay: null };
          entry.base = baseEl;
          nextRefs.set(cell.key, entry);
        };
        const assignOverlayRef = (overlayEl: SVGCircleElement | SVGPathElement | null) => {
          const entry = nextRefs.get(cell.key) ?? { base: null, overlay: null };
          entry.overlay = overlayEl;
          nextRefs.set(cell.key, entry);
        };

        if (cell.drawAsCircle) {
          base.push(
            <circle
              key={`${cell.key}:base`}
              ref={assignRefs}
              cx={cell.cx}
              cy={cell.cy}
              r={cell.halfSize}
              fill={restingColor}
              fillOpacity={1}
              stroke="none"
            />,
          );
          overlay.push(
            <circle
              key={`${cell.key}:fx`}
              ref={assignOverlayRef}
              cx={cell.cx}
              cy={cell.cy}
              r={cell.halfSize}
              fill={hoverTintColor}
              fillOpacity={0}
              stroke="none"
              style={overlayStyle}
            />,
          );
          continue;
        }

        if (!cell.pathD) {
          continue;
        }

        base.push(
          <path
            key={`${cell.key}:base`}
            ref={assignRefs}
            d={cell.pathD}
            fill={restingColor}
            fillOpacity={1}
            stroke="none"
          />,
        );
        overlay.push(
          <path
            key={`${cell.key}:fx`}
            ref={assignOverlayRef}
            d={cell.pathD}
            fill={hoverTintColor}
            fillOpacity={0}
            stroke="none"
            style={overlayStyle}
          />,
        );
      }

      shapeRefsByKey.current = nextRefs;
      return { base, overlay };
    }, [fillValue, hoverTintColor, layout.cells, topologyKey]);

    useLayoutEffect(() => {
      if (shapeRefsByKey.current.size === 0) {
        return;
      }
      paintTiles();
    }, [paintTiles, tileShapes]);

    const cardWidth = CARD_WIDTH;
    const cardHeight = CARD_HEIGHT;

    return (
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full [shape-rendering:geometricPrecision]"
        aria-hidden
        viewBox={`0 0 ${cardWidth} ${cardHeight}`}
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id={patternClipId}>
            <rect
              x={TILE_PATTERN_CLIP_INSET}
              y={TILE_PATTERN_CLIP_INSET}
              width={cardWidth - TILE_PATTERN_CLIP_INSET * 2}
              height={cardHeight - TILE_PATTERN_CLIP_INSET * 2}
            />
          </clipPath>
        </defs>
        <g clipPath={`url(#${patternClipId})`}>
          {tileShapes.base}
          {tileShapes.overlay}
        </g>
      </svg>
    );
  }),
  tilePatternPropsEqual,
);

export { COMMIT_CARD_WIDTH, COMMIT_CARD_HEIGHT } from '@git-visualizer/tile-pattern-core';
