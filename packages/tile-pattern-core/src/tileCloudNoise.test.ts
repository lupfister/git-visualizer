import { describe, expect, it } from 'vitest';
import { CLOUD_DRIFT_PERIOD_MS } from './constants';
import {
  CLOUD_HEIGHT_TILES,
  CLOUD_WIDTH_MAX_TILES,
  CLOUD_WIDTH_MIN_TILES,
  cloudFbm,
  cloudGridMetrics,
  cloudRowDriftOffset,
  computeTileCloudPresence,
  findCloudSlotForTile,
} from './tileCloudNoise';
import { pickGridCounts } from './layout';
import {
  COMMIT_CARD_HEIGHT,
  COMMIT_CARD_WIDTH,
  TILE_PATTERN_MIN_DISPLAY_ZOOM,
} from './constants';

describe('tileCloudNoise', () => {
  const cols = 26;
  const rows = 9;

  it('is stable for the same seed and cell', () => {
    const a = computeTileCloudPresence('abc', 4, 2, cols, rows);
    const b = computeTileCloudPresence('abc', 4, 2, cols, rows);
    expect(a).toBe(b);
  });

  it('differs across seeds', () => {
    let anyDiff = false;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const a = computeTileCloudPresence('seed-a', col, row, cols, rows);
        const b = computeTileCloudPresence('seed-b', col, row, cols, rows);
        if (a !== b) {
          anyDiff = true;
          break;
        }
      }
      if (anyDiff) break;
    }
    expect(anyDiff).toBe(true);
  });

  it('scales stride down when the tile grid has fewer columns (zoomed out)', () => {
    const ref = pickGridCounts(COMMIT_CARD_WIDTH, COMMIT_CARD_HEIGHT, 1);
    const zoomed = pickGridCounts(COMMIT_CARD_WIDTH, COMMIT_CARD_HEIGHT, TILE_PATTERN_MIN_DISPLAY_ZOOM);
    const refMetrics = cloudGridMetrics(ref.cols, ref.rows);
    const zoomedMetrics = cloudGridMetrics(zoomed.cols, zoomed.rows);
    expect(zoomedMetrics.strideC).toBeLessThan(refMetrics.strideC);
    expect(zoomedMetrics.cloudWidthMax).toBeLessThanOrEqual(refMetrics.cloudWidthMax);
  });

  it('keeps reasonable cloud coverage on a zoomed-out grid', () => {
    const zoomed = pickGridCounts(COMMIT_CARD_WIDTH, COMMIT_CARD_HEIGHT, TILE_PATTERN_MIN_DISPLAY_ZOOM);
    const seed = 'zoom-out';
    let hits = 0;
    const total = zoomed.cols * zoomed.rows;
    for (let row = 0; row < zoomed.rows; row++) {
      for (let col = 0; col < zoomed.cols; col++) {
        if (computeTileCloudPresence(seed, col, row, zoomed.cols, zoomed.rows) > 0.2) {
          hits += 1;
        }
      }
    }
    expect(hits / total).toBeGreaterThan(0.22);
  });

  it('always places cloud in all four corners', () => {
    const seed = 'corners';
    const corners: Array<[number, number]> = [
      [0, 0],
      [cols - 1, 0],
      [0, rows - 1],
      [cols - 1, rows - 1],
    ];
    for (const [col, row] of corners) {
      expect(computeTileCloudPresence(seed, col, row, cols, rows)).toBeGreaterThan(0.2);
    }
  });

  it('covers the right edge of the card', () => {
    const seed = 'right-edge';
    let rightHits = 0;
    for (let row = 0; row < rows; row++) {
      if (computeTileCloudPresence(seed, cols - 1, row, cols, rows) > 0.15) {
        rightHits += 1;
      }
      if (computeTileCloudPresence(seed, cols - 2, row, cols, rows) > 0.15) {
        rightHits += 1;
      }
    }
    expect(rightHits).toBeGreaterThan(0);
  });

  it('uses checkerboard slots (not every tile is cloud)', () => {
    const seed = 'checker';
    let cloud = 0;
    let sky = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const v = computeTileCloudPresence(seed, col, row, cols, rows);
        if (v > 0.2) cloud += 1;
        else sky += 1;
      }
    }
    expect(cloud).toBeGreaterThan(0);
    expect(sky).toBeGreaterThan(cloud);
  });

  it('cloud slots are two tiles tall and four to six wide', () => {
    const seed = 'dims';
    let slot = null as ReturnType<typeof findCloudSlotForTile>;
    for (let row = 0; row < rows && !slot; row++) {
      for (let col = 0; col < cols && !slot; col++) {
        slot = findCloudSlotForTile(col, row, seed, cols, rows);
      }
    }
    expect(slot).not.toBeNull();
    if (!slot) return;
    expect(slot.height).toBe(CLOUD_HEIGHT_TILES);
    expect(slot.width).toBeGreaterThanOrEqual(CLOUD_WIDTH_MIN_TILES);
    expect(slot.width).toBeLessThanOrEqual(CLOUD_WIDTH_MAX_TILES);
  });

  it('keeps two-tile height regardless of slot position', () => {
    const seed = 'scale';
    let slot = null as ReturnType<typeof findCloudSlotForTile>;
    for (let row = 0; row < rows && !slot; row++) {
      for (let col = 0; col < cols && !slot; col++) {
        slot = findCloudSlotForTile(col, row, seed, cols, rows);
      }
    }
    expect(slot?.height).toBe(2);
  });

  it('offsets odd cloud rows by half a horizontal stride', () => {
    const seed = 'stagger';
    const metrics = cloudGridMetrics(cols, rows);
    const midCol = Math.floor(cols / 2);
    const evenSlot = findCloudSlotForTile(midCol, 0, seed, cols, rows);
    const oddSlot = findCloudSlotForTile(
      midCol,
      metrics.strideR,
      seed,
      cols,
      rows,
    );
    expect(evenSlot).not.toBeNull();
    expect(oddSlot).not.toBeNull();
    expect(Math.abs((oddSlot?.anchorCol ?? 0) - (evenSlot?.anchorCol ?? 0))).toBeGreaterThanOrEqual(2);
    expect(Math.abs((oddSlot?.anchorCol ?? 0) - (evenSlot?.anchorCol ?? 0))).toBeLessThanOrEqual(6);
  });

  it('drifts continuously with alternating row direction when timeMs is set', () => {
    const seed = 'drift';
    const tLater = 5_000;
    let evenDrifted = false;
    let oddDrifted = false;
    for (let col = 0; col < cols; col++) {
      const evenA = computeTileCloudPresence(seed, col, 0, cols, rows, 1, 0);
      const evenB = computeTileCloudPresence(seed, col, 0, cols, rows, 1, tLater);
      if (evenA !== evenB) evenDrifted = true;
      const oddA = computeTileCloudPresence(seed, col, 1, cols, rows, 1, 0);
      const oddB = computeTileCloudPresence(seed, col, 1, cols, rows, 1, tLater);
      if (oddA !== oddB) oddDrifted = true;
    }
    expect(evenDrifted).toBe(true);
    expect(oddDrifted).toBe(true);
    expect(cloudRowDriftOffset(0, tLater, cols)).toBeGreaterThan(0);
    expect(cloudRowDriftOffset(0, CLOUD_DRIFT_PERIOD_MS, cols)).toBe(cols);
  });

  it('loops seamlessly after one card-width scroll (pac-man wrap)', () => {
    const seed = 'pacman';
    const row = 4;
    const col = 10;
    const t0 = 12_000;
    const tLoop = t0 + CLOUD_DRIFT_PERIOD_MS;
    const p0 = computeTileCloudPresence(seed, col, row, cols, rows, 1, t0);
    const pLoop = computeTileCloudPresence(seed, col, row, cols, rows, 1, tLoop);
    expect(pLoop).toBeCloseTo(p0, 5);
  });

  it('fbm stays in a reasonable range', () => {
    for (let i = 0; i < 20; i++) {
      const v = cloudFbm({ x: i * 0.37, y: i * 0.19 });
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThanOrEqual(1.5);
    }
  });
});
