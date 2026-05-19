import { memo, useMemo, type ReactNode } from 'react';
import { CARD_HEIGHT, CARD_WIDTH } from './LayoutGrid';
import { computeMapGridInvZoom, MAP_GRID_MIN_DISPLAY_ZOOM } from './mapGridUtils';

/**
 * Target density at `displayZoom === 1` (higher = smaller shapes vs the earlier 16×5 grid).
 * Actual `cols` / `rows` are rounded from counterscaled pitch so the grid always fills the card.
 */
const TILE_COLS_BASE = 26;
const TILE_ROWS_BASE = 9;

/**
 * Column clamp floor must stay low so at max zoom-out (`invZ` large) we are not forced
 * past the counterscaled column count — otherwise tiles shrink instead of tracking typography.
 */
const TILE_COLS_MIN = 5;
const TILE_COLS_MAX = 52;
const TILE_ROWS_MIN = 2;
const TILE_ROWS_MAX = 18;

/**
 * With square tiles sized from `min(cellW, cellH)`, gutters match only when cells are
 * roughly square. Search near the counterscaled column hint for `|cellW - cellH|` minimum.
 */
const pickColumnCountNearSquare = (columnHint: number, rowCount: number): number => {
  const lo = Math.max(TILE_COLS_MIN, columnHint - 10);
  const hi = Math.min(TILE_COLS_MAX, columnHint + 10);
  let best = columnHint;
  let bestDiff = Math.abs(CARD_WIDTH / columnHint - CARD_HEIGHT / rowCount);
  for (let candidate = lo; candidate <= hi; candidate++) {
    const diff = Math.abs(CARD_WIDTH / candidate - CARD_HEIGHT / rowCount);
    if (diff < bestDiff - 1e-9) {
      bestDiff = diff;
      best = candidate;
    } else if (Math.abs(diff - bestDiff) < 1e-9 && Math.abs(candidate - columnHint) < Math.abs(best - columnHint)) {
      best = candidate;
    }
  }
  return best;
};

const fnv1a32 = (value: string): number => {
  let hash = 2166136261 >>> 0;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

/** Per-cell circle vs square — stable when zoom changes grid dimensions. */
const cellUsesCircle = (seed: string, col: number, row: number): boolean => {
  const h = fnv1a32(`${seed}|${col}|${row}`);
  return (h & 1) === 0;
};

type CommitNodeTilePatternProps = {
  /** Stable per node so the motif does not flicker on re-render. */
  seed: string;
  /** Muted surface token without `var()`, e.g. `--checked-muted`. */
  shapeFillCssVar: string;
  /** Same pipeline as card typography (`--map-inv-zoom` source). */
  displayZoom: number;
};

/** Min gutter in layout units; primary spacing is a fraction of cell size (screen-consistent). */
const TILE_SHAPE_GAP_FLOOR = 0.55;
const TILE_SHAPE_GAP_RATIO = 0.078;

/**
 * Tight grid of circles and sharp squares; fills use muted BG tokens. Pitch counterscales like card text.
 */
export const CommitNodeTilePattern = memo(function CommitNodeTilePattern({
  seed,
  shapeFillCssVar,
  displayZoom,
}: CommitNodeTilePatternProps) {
  const shapes = useMemo(() => {
    const fillValue = `var(${shapeFillCssVar})`;
    const invZ = computeMapGridInvZoom(displayZoom);
    const nominalCellW = (CARD_WIDTH / TILE_COLS_BASE) * invZ;
    const nominalCellH = (CARD_HEIGHT / TILE_ROWS_BASE) * invZ;
    let cols = Math.min(
      TILE_COLS_MAX,
      Math.max(TILE_COLS_MIN, Math.round(CARD_WIDTH / nominalCellW)),
    );
    let rows = Math.min(
      TILE_ROWS_MAX,
      Math.max(TILE_ROWS_MIN, Math.round(CARD_HEIGHT / nominalCellH)),
    );
    if (displayZoom <= MAP_GRID_MIN_DISPLAY_ZOOM + 1e-6) {
      rows = 2;
    }
    cols = pickColumnCountNearSquare(cols, rows);
    const cellW = CARD_WIDTH / cols;
    const cellH = CARD_HEIGHT / rows;
    const minCell = Math.min(cellW, cellH);
    const gap = Math.max(TILE_SHAPE_GAP_FLOOR, minCell * TILE_SHAPE_GAP_RATIO);
    const shapeSize = Math.max(1.2, Math.min(cellW, cellH) - gap);
    const radius = shapeSize / 2;
    const nodes: ReactNode[] = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cx = (col + 0.5) * cellW;
        const cy = (row + 0.5) * cellH;
        const useCircle = cellUsesCircle(seed, col, row);
        const key = `${col}:${row}`;

        if (useCircle) {
          nodes.push(
            <circle
              key={key}
              cx={cx}
              cy={cy}
              r={radius}
              fill={fillValue}
              stroke="none"
              strokeWidth={0}
            />,
          );
        } else {
          nodes.push(
            <rect
              key={key}
              x={cx - radius}
              y={cy - radius}
              width={shapeSize}
              height={shapeSize}
              fill={fillValue}
              stroke="none"
              strokeWidth={0}
            />,
          );
        }
      }
    }

    return nodes;
  }, [seed, shapeFillCssVar, displayZoom]);

  const patternClipId = `commit-tile-clip-${fnv1a32(seed)}`;
  const patternClipInset = 1.5;

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full [shape-rendering:geometricPrecision]"
      aria-hidden
      viewBox={`0 0 ${CARD_WIDTH} ${CARD_HEIGHT}`}
      preserveAspectRatio="none"
    >
      <defs>
        <clipPath id={patternClipId}>
          <rect
            x={patternClipInset}
            y={patternClipInset}
            width={CARD_WIDTH - patternClipInset * 2}
            height={CARD_HEIGHT - patternClipInset * 2}
          />
        </clipPath>
      </defs>
      <g clipPath={`url(#${patternClipId})`}>{shapes}</g>
    </svg>
  );
});
