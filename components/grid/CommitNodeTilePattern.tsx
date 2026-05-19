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

const createMulberry32 = (seed: number) => {
  let state = seed;
  return (): number => {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

type TileCornerRadii = {
  tl: number;
  tr: number;
  br: number;
  bl: number;
};

const TILE_SHAPE_KINDS = [
  'rect',
  'teardrop',
  'halfMoonRight',
  'halfMoonBottom',
  'circle',
] as const;

type TileShapeKind = (typeof TILE_SHAPE_KINDS)[number];

/** Uniform random shape per cell — stable for a given seed and grid position. */
const pickTileShapeKind = (seed: string, col: number, row: number): TileShapeKind => {
  const random = createMulberry32(fnv1a32(`${seed}|${col}|${row}|shape`));
  const index = Math.floor(random() * TILE_SHAPE_KINDS.length);
  return TILE_SHAPE_KINDS[index] ?? 'rect';
};

const cornerRadiiForShape = (kind: TileShapeKind, cornerRadius: number): TileCornerRadii => {
  const sharp = 0;
  const round = cornerRadius;

  switch (kind) {
    case 'teardrop':
      return { tl: sharp, tr: round, br: round, bl: round };
    case 'halfMoonRight':
      return { tl: sharp, tr: round, br: round, bl: sharp };
    case 'halfMoonBottom':
      return { tl: sharp, tr: sharp, br: round, bl: round };
    case 'rect':
    default:
      return { tl: sharp, tr: sharp, br: sharp, bl: sharp };
  }
};

/** Grid corner cells align with the card: BL/BR/TR outward corners rounded at 50%; TL stays sharp. */
const applyCardAnchorCornerRadii = (
  radii: TileCornerRadii,
  col: number,
  row: number,
  cols: number,
  rows: number,
  cornerRadius: number,
): TileCornerRadii => {
  const round = cornerRadius;
  const isBottomLeftCell = col === 0 && row === rows - 1;
  const isBottomRightCell = col === cols - 1 && row === rows - 1;
  const isTopRightCell = col === cols - 1 && row === 0;

  return {
    tl: 0,
    tr: isTopRightCell ? round : radii.tr,
    br: isBottomRightCell ? round : radii.br,
    bl: isBottomLeftCell ? round : radii.bl,
  };
};

const isCardAnchorCornerCell = (col: number, row: number, cols: number, rows: number): boolean =>
  (col === 0 && row === rows - 1) || (col === cols - 1 && row === rows - 1) || (col === cols - 1 && row === 0);

const buildRoundedRectPath = (
  x: number,
  y: number,
  width: number,
  height: number,
  radii: TileCornerRadii,
): string => {
  const cap = Math.min(width, height) / 2;
  const tl = Math.min(radii.tl, cap);
  const tr = Math.min(radii.tr, cap);
  const br = Math.min(radii.br, cap);
  const bl = Math.min(radii.bl, cap);
  const right = x + width;
  const bottom = y + height;
  const parts: string[] = [`M ${x + tl} ${y}`, `H ${right - tr}`];

  if (tr > 0) {
    parts.push(`A ${tr} ${tr} 0 0 1 ${right} ${y + tr}`);
  } else {
    parts.push(`L ${right} ${y}`);
  }

  parts.push(`V ${bottom - br}`);

  if (br > 0) {
    parts.push(`A ${br} ${br} 0 0 1 ${right - br} ${bottom}`);
  } else {
    parts.push(`L ${right} ${bottom}`);
  }

  parts.push(`H ${x + bl}`);

  if (bl > 0) {
    parts.push(`A ${bl} ${bl} 0 0 1 ${x} ${bottom - bl}`);
  } else {
    parts.push(`L ${x} ${bottom}`);
  }

  parts.push(`V ${y + tl}`);

  if (tl > 0) {
    parts.push(`A ${tl} ${tl} 0 0 1 ${x + tl} ${y}`);
  }

  parts.push('Z');
  return parts.join(' ');
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
/** Matches CSS `border-radius: 50%` on a square tile — quarter-circle per corner. */
const TILE_CORNER_RADIUS_FRACTION = 0.5;

/**
 * Grid of rects, teardrops, half-moons, and circles — random per cell; every tile’s top-left stays sharp;
 * the grid’s bottom-left, bottom-right, and top-right corner cells round their outward corner at 50%.
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
    const halfSize = shapeSize / 2;
    const cornerRadius = shapeSize * TILE_CORNER_RADIUS_FRACTION;
    const nodes: ReactNode[] = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cx = (col + 0.5) * cellW;
        const cy = (row + 0.5) * cellH;
        const x = cx - halfSize;
        const y = cy - halfSize;
        const key = `${col}:${row}`;
        const shapeKind = pickTileShapeKind(seed, col, row);
        const baseKind = shapeKind === 'circle' ? 'rect' : shapeKind;
        const radii = applyCardAnchorCornerRadii(
          cornerRadiiForShape(baseKind, cornerRadius),
          col,
          row,
          cols,
          rows,
          cornerRadius,
        );
        const drawAsCircle =
          shapeKind === 'circle' && !isCardAnchorCornerCell(col, row, cols, rows);

        if (drawAsCircle) {
          nodes.push(
            <circle key={key} cx={cx} cy={cy} r={halfSize} fill={fillValue} stroke="none" />,
          );
          continue;
        }

        nodes.push(
          <path
            key={key}
            d={buildRoundedRectPath(x, y, shapeSize, shapeSize, radii)}
            fill={fillValue}
            stroke="none"
          />,
        );
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
