import {
  CLOUD_DRIFT_PERIOD_MS,
  COMMIT_CARD_HEIGHT,
  COMMIT_CARD_WIDTH,
  TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
} from './constants';
import { pickGridCounts } from './layout';
import { createMulberry32, fnv1a32 } from './prng';

/** Each cloud spans this many tile rows. */
export const CLOUD_HEIGHT_TILES = 2;
/** Cloud width in tiles (inclusive), chosen per checker slot from seed. */
export const CLOUD_WIDTH_MIN_TILES = 4;
export const CLOUD_WIDTH_MAX_TILES = 6;
/**
 * Packing tightness 0–1. 0 = loose (wider slot spacing), 1 = tight (clouds nearly touch).
 * ~0.55 is a modest bump over the original; push toward 0.75 only if you want much denser.
 */
export const CLOUD_PACKING = 0.8;
/** Random holes in checker slots so tight packing does not read as a solid wall. */
export const CLOUD_CHECKER_HOLE_CHANCE = 0.1;
const CLOUD_PUFF_EDGE = 0.1;
const CLOUD_EDGE_WOBBLE = 0.04;

const clamp01 = (value: number): number => Math.max(0, Math.min(1, value));

const smoothstep = (edge0: number, edge1: number, x: number): number => {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
};

type CloudEllipse = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
};

type CloudSlot = {
  anchorCol: number;
  anchorRow: number;
  width: number;
  height: number;
};

/** Scales checker spacing and cloud footprints with the active tile grid (zoom). */
export type CloudGridMetrics = {
  strideC: number;
  strideR: number;
  cloudHeight: number;
  cloudWidthMin: number;
  cloudWidthMax: number;
};

const lerp = (loose: number, tight: number, t: number): number => loose + (tight - loose) * clamp01(t);

const referenceGridCounts = (): { cols: number; rows: number } =>
  pickGridCounts(COMMIT_CARD_WIDTH, COMMIT_CARD_HEIGHT, TILE_PATTERN_DEFAULT_DISPLAY_ZOOM);

const scaleToGrid = (base: number, count: number, reference: number): number =>
  Math.max(1, Math.round(base * (count / reference)));

/** Match reference layout density at any `pickGridCounts` topology. */
export const cloudGridMetrics = (cols: number, rows: number): CloudGridMetrics => {
  const ref = referenceGridCounts();
  const cloudWidthMin = Math.max(2, scaleToGrid(CLOUD_WIDTH_MIN_TILES, cols, ref.cols));
  const cloudWidthMax = Math.max(
    cloudWidthMin,
    scaleToGrid(CLOUD_WIDTH_MAX_TILES, cols, ref.cols),
  );
  return {
    strideC: Math.max(cloudWidthMin, scaleToGrid(slotStrideCols(), cols, ref.cols)),
    strideR: Math.max(1, scaleToGrid(slotStrideRows(), rows, ref.rows)),
    cloudHeight: Math.max(1, scaleToGrid(CLOUD_HEIGHT_TILES, rows, ref.rows)),
    cloudWidthMin,
    cloudWidthMax,
  };
};

/** Horizontal slot step — min width so 4–6-wide clouds can meet without a skipped column gap. */
const slotStrideCols = (): number =>
  Math.max(
    CLOUD_WIDTH_MIN_TILES,
    Math.round(
      lerp(CLOUD_WIDTH_MAX_TILES + 1, CLOUD_WIDTH_MIN_TILES, CLOUD_PACKING),
    ),
  );

const slotStrideRows = (): number =>
  Math.max(
    CLOUD_HEIGHT_TILES,
    Math.round(lerp(CLOUD_HEIGHT_TILES + 1, CLOUD_HEIGHT_TILES, CLOUD_PACKING)),
  );

/** Cloud index along a row (only valid when checker parity matches). */
const cloudLaneIndex = (slotCol: number, slotRow: number): number =>
  slotRow % 2 === 0 ? slotCol / 2 : (slotCol - 1) / 2;

const cloudLanesAcross = (cols: number, metrics: CloudGridMetrics): number =>
  Math.max(1, Math.ceil((cols - metrics.cloudWidthMin + 1) / metrics.strideC));

/** Highest `slotCol` index we ever need for a card this wide. */
const maxSlotColForGrid = (cols: number, metrics: CloudGridMetrics): number =>
  2 * cloudLanesAcross(cols, metrics) + 2;

const slotAnchor = (
  slotCol: number,
  slotRow: number,
  metrics: CloudGridMetrics,
): { anchorCol: number; anchorRow: number } => {
  const lane = cloudLaneIndex(slotCol, slotRow);
  const rowOffset = slotRow % 2 === 1 ? metrics.strideC * 0.5 : 0;
  return {
    anchorCol: Math.round(lane * metrics.strideC + rowOffset),
    anchorRow: slotRow * metrics.strideR,
  };
};

const checkerPhase = (seed: string): number => fnv1a32(`${seed}|cloud-checker`) % 2;

/**
 * Offset checkerboard: even rows use even slot columns, odd rows use odd columns
 * (plus the half-row brick shift in `slotAnchor`). Avoids aligned columns and wide sky bands.
 */
const isCheckerCloudSlot = (slotCol: number, slotRow: number, seed: string): boolean => {
  if ((slotCol + slotRow + checkerPhase(seed)) % 2 !== 0) {
    return false;
  }
  const rng = createMulberry32(fnv1a32(`${seed}|keep|${slotCol}|${slotRow}`));
  return rng() >= CLOUD_CHECKER_HOLE_CHANCE;
};

const cloudWidthForSlot = (
  seed: string,
  slotCol: number,
  slotRow: number,
  metrics: CloudGridMetrics,
): number => {
  const rng = createMulberry32(fnv1a32(`${seed}|w|${slotCol}|${slotRow}`));
  const span = metrics.cloudWidthMax - metrics.cloudWidthMin + 1;
  return metrics.cloudWidthMin + Math.floor(rng() * span);
};

const ellipsePresence = (lx: number, ly: number, puff: CloudEllipse): number => {
  const dx = (lx - puff.cx) / puff.rx;
  const dy = (ly - puff.cy) / puff.ry;
  const d = Math.hypot(dx, dy);
  return smoothstep(1 + CLOUD_PUFF_EDGE, 1 - CLOUD_PUFF_EDGE, d);
};

/** Tiered puff shape in local cloud space (lx, ly ∈ [0, 1]²). */
const miniCloudPuffs = (slotSeed: string): CloudEllipse[] => {
  const rng = createMulberry32(fnv1a32(`${slotSeed}|puffs`));
  const jx = (rng() - 0.5) * 0.06;
  const jy = (rng() - 0.5) * 0.05;
  const scale = 0.9 + rng() * 0.12;
  const s = (v: number) => v * scale;

  return [
    { cx: s(0.5) + jx, cy: s(0.74) + jy, rx: s(0.4), ry: s(0.12) },
    { cx: s(0.5) + jx, cy: s(0.52) + jy, rx: s(0.28), ry: s(0.09) },
    { cx: s(0.36) + jx, cy: s(0.3) + jy, rx: s(0.08), ry: s(0.08) },
    { cx: s(0.64) + jx, cy: s(0.28) + jy, rx: s(0.09), ry: s(0.08) },
  ];
};

type CornerId = 'tl' | 'tr' | 'bl' | 'br';

const tileInCloudSlot = (
  col: number,
  row: number,
  slot: CloudSlot,
): boolean =>
  col >= slot.anchorCol &&
  col < slot.anchorCol + slot.width &&
  row >= slot.anchorRow &&
  row < slot.anchorRow + slot.height;

const isCardCornerTile = (col: number, row: number, cols: number, rows: number): boolean =>
  (col === 0 || col === cols - 1) && (row === 0 || row === rows - 1);

/** Sample toward the card interior so corner tiles hit dense puff geometry. */
const localCoordsInSlot = (
  col: number,
  row: number,
  slot: CloudSlot,
  cols: number,
  rows: number,
): { lx: number; ly: number } => {
  if (isCardCornerTile(col, row, cols, rows)) {
    return {
      lx: col === 0 ? 0.72 : 0.28,
      ly: row === 0 ? 0.72 : 0.28,
    };
  }
  return {
    lx: (col - slot.anchorCol + 0.5) / slot.width,
    ly: (row - slot.anchorRow + 0.5) / slot.height,
  };
};

const cloudWidthForCorner = (
  seed: string,
  corner: CornerId,
  metrics: CloudGridMetrics,
): number => {
  const rng = createMulberry32(fnv1a32(`${seed}|corner-w|${corner}`));
  const span = metrics.cloudWidthMax - metrics.cloudWidthMin + 1;
  return metrics.cloudWidthMin + Math.floor(rng() * span);
};

/** Always-on corner clouds so card edges never read empty in the corners. */
const cornerCloudSlot = (
  corner: CornerId,
  cols: number,
  rows: number,
  seed: string,
  metrics: CloudGridMetrics,
): CloudSlot => {
  const width = Math.min(cloudWidthForCorner(seed, corner, metrics), cols);
  const height = Math.min(metrics.cloudHeight, rows);
  const anchorCol = corner === 'tr' || corner === 'br' ? Math.max(0, cols - width) : 0;
  const anchorRow = corner === 'bl' || corner === 'br' ? Math.max(0, rows - height) : 0;
  return { anchorCol, anchorRow, width, height };
};

const miniCloudAt = (lx: number, ly: number, slotSeed: string): number => {
  const puffs = miniCloudPuffs(slotSeed);
  let mask = 0;
  for (const puff of puffs) {
    mask = Math.max(mask, ellipsePresence(lx, ly, puff));
  }

  if (CLOUD_EDGE_WOBBLE > 0 && mask > 0.04) {
    const rng = createMulberry32(fnv1a32(`${slotSeed}|wobble`));
    const wobble = rng();
    const edgeBias = smoothstep(0.4, 0.9, mask);
    mask *= 1 - CLOUD_EDGE_WOBBLE * edgeBias * (1 - wobble);
  }

  return clamp01(mask);
};

/** Cloud slot anchored on the tile grid (checkerboard), if this tile lies inside it. */
export const findCloudSlotForTile = (
  col: number,
  row: number,
  seed: string,
  cols: number,
  rows: number,
): CloudSlot | null => {
  if (cols <= 0 || rows <= 0) {
    return null;
  }

  const metrics = cloudGridMetrics(cols, rows);
  const corners: CornerId[] = ['tl', 'tr', 'bl', 'br'];
  for (const corner of corners) {
    const cornerSlot = cornerCloudSlot(corner, cols, rows, seed, metrics);
    if (tileInCloudSlot(col, row, cornerSlot)) {
      return cornerSlot;
    }
  }

  const { strideC, strideR, cloudHeight, cloudWidthMax } = metrics;
  const gridMaxSlotCol = maxSlotColForGrid(cols, metrics);
  const minSlotCol = Math.max(
    0,
    2 * Math.floor((col - cloudWidthMax) / strideC) - 2,
  );
  const maxSlotCol = Math.min(
    gridMaxSlotCol,
    2 * Math.ceil((col + cloudWidthMax) / strideC) + 2,
  );
  const minSlotRow = Math.max(0, Math.floor((row - cloudHeight) / strideR) - 1);
  const maxSlotRow = Math.min(
    Math.ceil(rows / strideR) + 1,
    Math.floor(row / strideR) + 2,
  );

  for (let slotRow = minSlotRow; slotRow <= maxSlotRow; slotRow++) {
    for (let slotCol = minSlotCol; slotCol <= maxSlotCol; slotCol++) {
      if (!isCheckerCloudSlot(slotCol, slotRow, seed)) continue;

      const { anchorCol, anchorRow } = slotAnchor(slotCol, slotRow, metrics);
      const width = cloudWidthForSlot(seed, slotCol, slotRow, metrics);

      const slot: CloudSlot = {
        anchorCol,
        anchorRow,
        width,
        height: cloudHeight,
      };
      if (tileInCloudSlot(col, row, slot)) {
        return slot;
      }
    }
  }

  return null;
};

/** Hash-based value noise in [0, 1]. */
export const cloudHash = (p: { x: number; y: number }): number => {
  let px = p.x * 123.34;
  let py = p.y * 456.21;
  px = px - Math.floor(px);
  py = py - Math.floor(py);
  const dot = px * (px + 45.32) + py * (py + 45.32);
  const mixed = (px + dot) * (py + dot);
  return mixed - Math.floor(mixed);
};

export const cloudValueNoise = (p: { x: number; y: number }): number => {
  const ix = Math.floor(p.x);
  const iy = Math.floor(p.y);
  const fx = p.x - ix;
  const fy = p.y - iy;
  const a = cloudHash({ x: ix, y: iy });
  const b = cloudHash({ x: ix + 1, y: iy });
  const c = cloudHash({ x: ix, y: iy + 1 });
  const d = cloudHash({ x: ix + 1, y: iy + 1 });
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  return (1 - uy) * ((1 - ux) * a + ux * b) + uy * ((1 - ux) * c + ux * d);
};

export const cloudFbm = (p: { x: number; y: number }): number => {
  let v = 0;
  let a = 0.5;
  let px = p.x;
  let py = p.y;
  for (let i = 0; i < 3; i++) {
    v += a * cloudValueNoise({ x: px, y: py });
    const nextPx = px * 0.8 - py * 0.6;
    const nextPy = px * 0.6 + py * 0.8;
    px = nextPx * 2;
    py = nextPy * 2;
    a *= 0.5;
  }
  return v;
};

/** Sample tiered cloud fill at normalized coords (used by tests / exports). */
export const cloudSilhouettePresence = (
  nx: number,
  ny: number,
  seed: string,
  cols: number,
  rows: number,
): number => {
  if (cols <= 0 || rows <= 0) return 0;
  const col = Math.min(cols - 1, Math.max(0, Math.floor(nx * cols)));
  const row = Math.min(rows - 1, Math.max(0, Math.floor(ny * rows)));
  return computeTileCloudPresence(seed, col, row, cols, rows);
};

/** Unbounded horizontal drift (tile units); one card width per `CLOUD_DRIFT_PERIOD_MS`. */
export const cloudRowDriftOffset = (
  _row: number,
  timeMs: number,
  cols: number,
): number => (timeMs * cols) / CLOUD_DRIFT_PERIOD_MS;

const modTileCol = (col: number, cols: number): number =>
  ((col % cols) + cols) % cols;

/** Sample cloud presence with horizontal pac-man wrap on the tile grid. */
const presenceAtShiftedCol = (
  seed: string,
  shiftedCol: number,
  row: number,
  cols: number,
  rows: number,
): number => {
  const base = Math.floor(shiftedCol);
  const frac = shiftedCol - base;
  const col0 = modTileCol(base, cols);
  const col1 = modTileCol(base + 1, cols);

  if (frac <= 1e-9) {
    return presenceAtIntegerCol(seed, col0, row, cols, rows);
  }

  const p0 = presenceAtIntegerCol(seed, col0, row, cols, rows);
  const p1 = presenceAtIntegerCol(seed, col1, row, cols, rows);
  return clamp01(p0 * (1 - frac) + p1 * frac);
};

const presenceAtIntegerCol = (
  seed: string,
  col: number,
  row: number,
  cols: number,
  rows: number,
): number => {
  const slot = findCloudSlotForTile(col, row, seed, cols, rows);
  if (!slot) {
    return 0;
  }

  const { lx, ly } = localCoordsInSlot(col, row, slot, cols, rows);
  const slotSeed = `${seed}|${slot.anchorCol}|${slot.anchorRow}|${slot.width}`;
  const presence = miniCloudAt(lx, ly, slotSeed);

  if (isCardCornerTile(col, row, cols, rows)) {
    return clamp01(Math.max(presence, 0.28));
  }

  return presence;
};

/**
 * Checkerboard grid of tiered clouds on the commit-card tile lattice.
 * Stride and footprint scale with `cols`/`rows` so coverage stays similar when zoomed out.
 * Pass `timeMs` for slow row-alternating horizontal drift; omit for a static field.
 */
export const computeTileCloudPresence = (
  seed: string,
  col: number,
  row: number,
  cols: number,
  rows: number,
  _displayZoom = TILE_PATTERN_DEFAULT_DISPLAY_ZOOM,
  timeMs?: number,
): number => {
  if (cols <= 0 || rows <= 0) {
    return 0;
  }

  void _displayZoom;

  if (timeMs == null || isCardCornerTile(col, row, cols, rows)) {
    return presenceAtIntegerCol(seed, col, row, cols, rows);
  }

  const drift = cloudRowDriftOffset(row, timeMs, cols);
  const shiftedCol = row % 2 === 0 ? col + drift : col - drift;
  return presenceAtShiftedCol(seed, shiftedCol, row, cols, rows);
};
