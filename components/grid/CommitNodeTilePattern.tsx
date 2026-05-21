import {
  computeTileGridLayout,
  fnv1a32,
  isTileOmittedAt,
  lumMixToFillCss,
  type TileCellSpec,
} from '@git-visualizer/tile-pattern-core';
import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
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
  displayZoom: number;
  /** Omit a seed-stable random subset of tiles (working tree and stash). */
  randomTileGaps?: boolean;
};

export type CommitNodeTilePatternHandle = {
  startHover: () => void;
  applyPointer: (layoutX: number, layoutY: number) => void;
  endHover: () => void;
};

export const CommitNodeTilePattern = memo(
  forwardRef<CommitNodeTilePatternHandle, CommitNodeTilePatternProps>(function CommitNodeTilePattern(
    { seed, shapeFillCssVar, hoverTintColor, displayZoom, randomTileGaps = false },
    ref,
  ) {
    const fillValue = `var(${shapeFillCssVar})`;
    const layout = useMemo(
      () =>
        computeTileGridLayout({
          seed,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          displayZoom,
        }),
      [seed, displayZoom],
    );
    const layoutRef = useRef(layout);
    layoutRef.current = layout;

    const [boosts, setBoosts] = useState<Float32Array>(
      () => new Float32Array(layout.cols * layout.rows),
    );
    const boostsRef = useRef(boosts);
    boostsRef.current = boosts;
    const isHoveringRef = useRef(false);
    const pointerRef = useRef<{ x: number; y: number } | null>(null);
    const rafRef = useRef<number | null>(null);

    const stopHoverLoop = useCallback(() => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    }, []);

    useEffect(() => {
      const nextBoosts = new Float32Array(layout.cols * layout.rows);
      setBoosts(nextBoosts);
      isHoveringRef.current = false;
      pointerRef.current = null;
    }, [layout.cols, layout.rows]);

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
        setBoosts(next);
      }
      if (keepLooping) {
        rafRef.current = requestAnimationFrame(runHoverFrame);
      }
    }, [seed]);

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

          setBoosts((previous) => {
            if (previous.length !== cells.length) {
              return previous;
            }
            const next = new Float32Array(previous);
            if (depositAtCursor(next, cols, rows, cells, layoutX, layoutY, HOVER_MOVE_DEPOSIT)) {
              return next;
            }
            return previous;
          });
          ensureHoverLoop();
        },
        endHover() {
          isHoveringRef.current = false;
          pointerRef.current = null;
          ensureHoverLoop();
        },
      }),
      [ensureHoverLoop, seed],
    );

    const patternClipId = `commit-tile-clip-${fnv1a32(seed)}`;

    const { baseShapes, overlayShapes } = useMemo(() => {
      const base: ReactNode[] = [];
      const overlay: ReactNode[] = [];

      for (const cell of layout.cells) {
        if (randomTileGaps && isTileOmittedAt(seed, cell.col, cell.row, displayZoom)) {
          continue;
        }
        const index = cell.row * layout.cols + cell.col;
        const hoverBoost = boosts[index] ?? 0;
        const restingColor = lumMixToFillCss(fillValue, cell.baseLumMix);
        const overlayOpacity = boostToOverlayOpacity(hoverBoost);
        const overlayStyle = { mixBlendMode: 'darken' as const };

        if (cell.drawAsCircle) {
          base.push(
            <circle
              key={`${cell.key}:base`}
              cx={cell.cx}
              cy={cell.cy}
              r={cell.halfSize}
              fill={restingColor}
              stroke="none"
            />,
          );
          if (overlayOpacity >= 0.008) {
            overlay.push(
              <circle
                key={`${cell.key}:fx`}
                cx={cell.cx}
                cy={cell.cy}
                r={cell.halfSize}
                fill={hoverTintColor}
                fillOpacity={overlayOpacity}
                stroke="none"
                style={overlayStyle}
              />,
            );
          }
          continue;
        }

        if (!cell.pathD) {
          continue;
        }

        base.push(<path key={`${cell.key}:base`} d={cell.pathD} fill={restingColor} stroke="none" />);
        if (overlayOpacity >= 0.008) {
          overlay.push(
            <path
              key={`${cell.key}:fx`}
              d={cell.pathD}
              fill={hoverTintColor}
              fillOpacity={overlayOpacity}
              stroke="none"
              style={overlayStyle}
            />,
          );
        }
      }

      return { baseShapes: base, overlayShapes: overlay };
    }, [boosts, fillValue, hoverTintColor, layout, randomTileGaps, seed]);

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
          {baseShapes}
          {overlayShapes}
        </g>
      </svg>
    );
  }),
);

export { COMMIT_CARD_WIDTH, COMMIT_CARD_HEIGHT } from '@git-visualizer/tile-pattern-core';
