import {
  COMMIT_CARD_HEIGHT,
  COMMIT_CARD_WIDTH,
  TILE_COLS_BASE,
  TILE_COLS_MAX,
  TILE_COLS_MIN,
  TILE_CORNER_RADIUS_FRACTION,
  TILE_ROWS_BASE,
  TILE_ROWS_MAX,
  TILE_ROWS_MIN,
  TILE_SHAPE_GAP_FLOOR,
  TILE_SHAPE_GAP_RATIO,
  TILE_LUM_MIX_MAX,
  TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
  TILE_PATTERN_MIN_DISPLAY_ZOOM,
  TILE_RANDOM_OMISSION_RATE,
} from './constants';
import { createMulberry32, fnv1a32 } from './prng';
import {
  TILE_SHAPE_KINDS,
  applyCardAnchorCornerRadii,
  buildRoundedRectPath,
  cornerRadiiForShape,
  isCardAnchorCornerCell,
  type TileShapeKind,
} from './paths';

export const computeDisplayZoomInvZoom = (displayZoom: number): number => {
  if (!Number.isFinite(displayZoom) || displayZoom <= 0) return 1;
  return 1 / displayZoom;
};

/** Target tile pitch at displayZoom 1 — geometric mean of commit-card row/col pitch. */
export const referenceCellPitch = (displayZoom: number): number => {
  const invZ = computeDisplayZoomInvZoom(displayZoom);
  const pitchW = COMMIT_CARD_WIDTH / TILE_COLS_BASE;
  const pitchH = COMMIT_CARD_HEIGHT / TILE_ROWS_BASE;
  return Math.sqrt(pitchW * pitchH) * invZ;
};

const clampCount = (value: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, value));

/**
 * With square tiles sized from `min(cellW, cellH)`, gutters match only when cells are
 * square. Rows come from counterscale; search all valid column counts for minimum
 * `|cellW - cellH|` (±10 was too narrow for square / wide studio aspect ratios).
 */
const pickColumnCountNearSquare = (
  columnHint: number,
  rowCount: number,
  width: number,
  height: number,
): number => {
  const cellH = height / rowCount;
  const lo = TILE_COLS_MIN;
  const hi = dynamicColsMax(width);
  let best = clampCount(columnHint, lo, hi);
  let bestScore = Infinity;

  for (let candidate = lo; candidate <= hi; candidate++) {
    const squareDelta = Math.abs(width / candidate - cellH);
    const drift = Math.abs(candidate - columnHint);
    const score = squareDelta + drift * 0.02;
    if (score < bestScore) {
      bestScore = score;
      best = candidate;
    }
  }

  return best;
};

const minCellSize = 6;

const dynamicColsMax = (width: number): number =>
  Math.min(
    Math.floor(width / minCellSize),
    Math.max(TILE_COLS_MAX, Math.round(width / (COMMIT_CARD_WIDTH / TILE_COLS_MAX))),
  );

const dynamicRowsMax = (height: number): number =>
  Math.min(
    Math.floor(height / minCellSize),
    Math.max(TILE_ROWS_MAX, Math.round(height / (COMMIT_CARD_HEIGHT / TILE_ROWS_MAX))),
  );

/**
 * Row/column counts follow independent invZ counterscale (gradual zoom-out).
 * Only columns are nudged for square cells — rows track zoom smoothly down to two.
 */
export const pickGridCounts = (
  width: number,
  height: number,
  displayZoom: number,
): { cols: number; rows: number } => {
  const invZ = computeDisplayZoomInvZoom(displayZoom);
  const nominalCellW = (width / TILE_COLS_BASE) * invZ;
  const nominalCellH = (height / TILE_ROWS_BASE) * invZ;

  let cols = clampCount(
    Math.round(width / nominalCellW),
    TILE_COLS_MIN,
    dynamicColsMax(width),
  );
  let rows = clampCount(
    Math.round(height / nominalCellH),
    TILE_ROWS_MIN,
    dynamicRowsMax(height),
  );

  cols = pickColumnCountNearSquare(cols, rows, width, height);

  return { cols, rows };
};

const pickTileShapeKind = (seed: string, col: number, row: number): TileShapeKind => {
  const random = createMulberry32(fnv1a32(`${seed}|${col}|${row}|shape`));
  const index = Math.floor(random() * TILE_SHAPE_KINDS.length);
  return TILE_SHAPE_KINDS[index] ?? 'rect';
};

export type TileLumMixProfile = 'default' | 'bright';

const clamp01 = (value: number): number => Math.max(0, Math.min(1, value));

/**
 * How strongly omission follows a checkerboard (1) vs random scatter (0).
 * Ramps up as the map zooms out so the motif reads at low zoom.
 */
export const computeTileOmissionCheckerWeight = (displayZoom: number): number => {
  const highZoom = 0.85;
  const lowZoom = TILE_PATTERN_MIN_DISPLAY_ZOOM;
  const minWeight = 0.12;
  if (!Number.isFinite(displayZoom) || displayZoom >= highZoom) {
    return minWeight;
  }
  if (displayZoom <= lowZoom) {
    return 1;
  }
  const t = (highZoom - displayZoom) / (highZoom - lowZoom);
  return minWeight + clamp01(t) * (1 - minWeight);
};

/** Seed-stable omission for working-tree tile patterns (checkerboard-biased). */
export const isTileOmittedAt = (
  seed: string,
  col: number,
  row: number,
  displayZoom = TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
  omissionRate = TILE_RANDOM_OMISSION_RATE,
): boolean => {
  const random = createMulberry32(fnv1a32(`${seed}|${col}|${row}|omit`));
  const phase = fnv1a32(`${seed}|omit-checker`) % 2;
  const onChecker = (col + row + phase) % 2 === 0;
  const checkerWeight = computeTileOmissionCheckerWeight(displayZoom);
  const checkerOmitProb = Math.min(1, omissionRate * 2);
  const r = random();

  if (r < checkerWeight) {
    return onChecker && random() < checkerOmitProb;
  }

  const r2 = random();
  const bias = 0.24 * (1 - checkerWeight);
  const threshold = onChecker
    ? Math.min(1, omissionRate + bias)
    : Math.max(0, omissionRate - bias);
  return r2 < threshold;
};

const pickTileBaseLumMix = (
  seed: string,
  col: number,
  row: number,
  profile: TileLumMixProfile,
): number => {
  const random = createMulberry32(fnv1a32(`${seed}|${col}|${row}|lum`));
  if (profile === 'bright') {
    const tier = random();
    if (tier < 0.1) {
      return 0;
    }
    const accent = random();
    return 0.2 + accent * (TILE_LUM_MIX_MAX - 0.2);
  }
  const mix = random() * TILE_LUM_MIX_MAX;
  return mix < 0.003 ? 0 : mix;
};

export type TileCellSpec = {
  key: string;
  col: number;
  row: number;
  cx: number;
  cy: number;
  baseLumMix: number;
  drawAsCircle: boolean;
  halfSize: number;
  pathD: string | null;
};

export type TileGridLayout = {
  cols: number;
  rows: number;
  cellW: number;
  cellH: number;
  cells: TileCellSpec[];
};

export type TileGridLayoutInput = {
  seed: string;
  width: number;
  height: number;
  displayZoom: number;
  /** Optional luminance distribution (`bright` raises highlight frequency). */
  lumMixProfile?: TileLumMixProfile;
};

export const computeTileGridLayout = ({
  seed,
  width,
  height,
  displayZoom,
  lumMixProfile = 'default',
}: TileGridLayoutInput): TileGridLayout => {
  const { cols, rows } = pickGridCounts(width, height, displayZoom);
  const cellW = width / cols;
  const cellH = height / rows;
  const minCell = Math.min(cellW, cellH);
  const gap = Math.max(TILE_SHAPE_GAP_FLOOR, minCell * TILE_SHAPE_GAP_RATIO);
  const shapeSize = Math.max(1.2, minCell - gap);
  const halfSize = shapeSize / 2;
  const cornerRadius = shapeSize * TILE_CORNER_RADIUS_FRACTION;
  const cells: TileCellSpec[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = (col + 0.5) * cellW;
      const cy = (row + 0.5) * cellH;
      const x = cx - halfSize;
      const y = cy - halfSize;
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

      cells.push({
        key: `${col}:${row}`,
        col,
        row,
        cx,
        cy,
        baseLumMix: pickTileBaseLumMix(seed, col, row, lumMixProfile),
        drawAsCircle,
        halfSize,
        pathD: drawAsCircle
          ? null
          : buildRoundedRectPath(x, y, shapeSize, shapeSize, radii),
      });
    }
  }

  return { cols, rows, cellW, cellH, cells };
};

/** Edge gap between adjacent tiles (for tests). */
export const tileEdgeGaps = (layout: TileGridLayout): { horizontal: number; vertical: number } => {
  const shapeSize = (layout.cells[0]?.halfSize ?? 0) * 2;
  return {
    horizontal: layout.cellW - shapeSize,
    vertical: layout.cellH - shapeSize,
  };
};
