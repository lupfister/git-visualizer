import {
  COMMIT_CARD_HEIGHT,
  COMMIT_CARD_WIDTH,
  TILE_COLS_BASE,
  TILE_COLS_MAX,
  TILE_COLS_MIN,
  TILE_CORNER_RADIUS_FRACTION,
  TILE_PATTERN_MIN_DISPLAY_ZOOM,
  TILE_ROWS_BASE,
  TILE_ROWS_MAX,
  TILE_ROWS_MIN,
  TILE_SHAPE_GAP_FLOOR,
  TILE_SHAPE_GAP_RATIO,
  TILE_LUM_MIX_MAX,
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
 * Pick column/row counts so cells stay square (even gaps) while matching canvas size.
 * Uses one pitch for both axes instead of independent 26×9 bases.
 */
export const pickGridCounts = (
  width: number,
  height: number,
  displayZoom: number,
): { cols: number; rows: number } => {
  const pitch = referenceCellPitch(displayZoom);
  const colHint = Math.max(1, Math.round(width / pitch));
  let rowHint = Math.max(1, Math.round(height / pitch));

  if (displayZoom <= TILE_PATTERN_MIN_DISPLAY_ZOOM + 1e-6) {
    rowHint = TILE_ROWS_MIN;
  }

  const minCellSize = 6;
  const colsCeiling = Math.min(
    TILE_COLS_MAX * 4,
    Math.max(TILE_COLS_MIN, Math.floor(width / minCellSize)),
  );
  const rowsCeiling = Math.min(
    TILE_ROWS_MAX * 4,
    Math.max(TILE_ROWS_MIN, Math.floor(height / minCellSize)),
  );

  const colsFloor = TILE_COLS_MIN;
  const rowsFloor =
    displayZoom <= TILE_PATTERN_MIN_DISPLAY_ZOOM + 1e-6 ? TILE_ROWS_MIN : TILE_ROWS_MIN;

  const colsMax = Math.max(TILE_COLS_MAX, Math.min(colsCeiling, colHint + 16));
  const rowsMax = Math.max(TILE_ROWS_MAX, Math.min(rowsCeiling, rowHint + 12));

  let bestCols = clampCount(colHint, colsFloor, colsMax);
  let bestRows = clampCount(rowHint, rowsFloor, rowsMax);
  let bestScore = Infinity;

  const colLo = clampCount(colHint - 16, colsFloor, colsMax);
  const colHi = clampCount(colHint + 16, colsFloor, colsMax);
  const rowLo = clampCount(rowHint - 10, rowsFloor, rowsMax);
  const rowHi = clampCount(rowHint + 10, rowsFloor, rowsMax);

  for (let cols = colLo; cols <= colHi; cols++) {
    for (let rows = rowLo; rows <= rowHi; rows++) {
      const cellW = width / cols;
      const cellH = height / rows;
      const squareDelta = Math.abs(cellW - cellH);
      const drift = Math.abs(cols - colHint) + Math.abs(rows - rowHint);
      const score = squareDelta + drift * 0.02;
      if (score < bestScore) {
        bestScore = score;
        bestCols = cols;
        bestRows = rows;
      }
    }
  }

  return { cols: bestCols, rows: bestRows };
};

const pickTileShapeKind = (seed: string, col: number, row: number): TileShapeKind => {
  const random = createMulberry32(fnv1a32(`${seed}|${col}|${row}|shape`));
  const index = Math.floor(random() * TILE_SHAPE_KINDS.length);
  return TILE_SHAPE_KINDS[index] ?? 'rect';
};

const pickTileBaseLumMix = (seed: string, col: number, row: number): number => {
  const random = createMulberry32(fnv1a32(`${seed}|${col}|${row}|lum`));
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
};

export const computeTileGridLayout = ({
  seed,
  width,
  height,
  displayZoom,
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
        baseLumMix: pickTileBaseLumMix(seed, col, row),
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
