import { describe, expect, it } from 'vitest';
import {
  COMMIT_CARD_HEIGHT,
  COMMIT_CARD_WIDTH,
  TILE_PATTERN_MIN_DISPLAY_ZOOM,
} from './constants';
import { computeTileGridLayout, isTileOmittedAt, pickGridCounts, tileEdgeGaps } from './layout';

describe('computeTileGridLayout', () => {
  it('keeps cells square at commit card size', () => {
    const layout = computeTileGridLayout({
      seed: 'test',
      width: COMMIT_CARD_WIDTH,
      height: COMMIT_CARD_HEIGHT,
      displayZoom: 1,
    });
    expect(Math.abs(layout.cellW - layout.cellH)).toBeLessThan(0.35);
  });

  it('keeps cells square at 16:9 export size', () => {
    const layout = computeTileGridLayout({
      seed: 'test',
      width: 1920,
      height: 1080,
      displayZoom: 1,
    });
    const relativeDelta = Math.abs(layout.cellW - layout.cellH) / layout.cellW;
    expect(relativeDelta).toBeLessThan(0.02);
  });

  it('matches horizontal and vertical edge gaps', () => {
    const layout = computeTileGridLayout({
      seed: 'test',
      width: 1920,
      height: 1080,
      displayZoom: 1,
    });
    const gaps = tileEdgeGaps(layout);
    expect(Math.abs(gaps.horizontal - gaps.vertical)).toBeLessThan(0.25);
  });

  it('matches edge gaps on square studio aspect ratio', () => {
    const layout = computeTileGridLayout({
      seed: 'test',
      width: 540,
      height: 540,
      displayZoom: 1,
    });
    const gaps = tileEdgeGaps(layout);
    expect(Math.abs(gaps.horizontal - gaps.vertical)).toBeLessThan(0.25);
    expect(Math.abs(layout.cellW - layout.cellH)).toBeLessThan(0.25);
  });

  it('reaches two rows at minimum display zoom via counterscale', () => {
    const { rows } = pickGridCounts(
      COMMIT_CARD_WIDTH,
      COMMIT_CARD_HEIGHT,
      TILE_PATTERN_MIN_DISPLAY_ZOOM,
    );
    expect(rows).toBe(2);
  });

  it('reduces row count gradually as display zoom decreases', () => {
    const zoomLevels = [1, 0.75, 0.5, 0.35, TILE_PATTERN_MIN_DISPLAY_ZOOM];
    const rowCounts = zoomLevels.map(
      (displayZoom) =>
        pickGridCounts(COMMIT_CARD_WIDTH, COMMIT_CARD_HEIGHT, displayZoom).rows,
    );
    for (let index = 1; index < rowCounts.length; index++) {
      expect(rowCounts[index]).toBeLessThanOrEqual(rowCounts[index - 1]!);
    }
    expect(rowCounts[0]).toBeGreaterThan(rowCounts[rowCounts.length - 1]!);
  });

  it('tile omission is seed-stable and near the configured rate', () => {
    const seed = 'omit-test';
    const omitted = Array.from({ length: 500 }, (_, index) =>
      isTileOmittedAt(seed, index % 26, Math.floor(index / 26), 1),
    );
    const rate = omitted.filter(Boolean).length / omitted.length;
    expect(isTileOmittedAt(seed, 0, 0, 1)).toBe(omitted[0]);
    expect(rate).toBeGreaterThan(0.28);
    expect(rate).toBeLessThan(0.45);
  });

  it('tile omission is checkerboard-biased more at low display zoom', () => {
    const seed = 'checker-bias';
    const neighborMismatchRate = (displayZoom: number) => {
      let mismatches = 0;
      let total = 0;
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 14; col++) {
          const here = isTileOmittedAt(seed, col, row, displayZoom);
          const east = isTileOmittedAt(seed, col + 1, row, displayZoom);
          const south = isTileOmittedAt(seed, col, row + 1, displayZoom);
          if (here !== east) mismatches++;
          if (here !== south) mismatches++;
          total += 2;
        }
      }
      return mismatches / total;
    };

    expect(neighborMismatchRate(TILE_PATTERN_MIN_DISPLAY_ZOOM)).toBeGreaterThan(
      neighborMismatchRate(1),
    );
    expect(neighborMismatchRate(TILE_PATTERN_MIN_DISPLAY_ZOOM)).toBeGreaterThan(0.65);
  });

  it('bright lum profile yields higher average tile luminance than default', () => {
    const defaultLayout = computeTileGridLayout({
      seed: 'lum-compare',
      width: COMMIT_CARD_WIDTH,
      height: COMMIT_CARD_HEIGHT,
      displayZoom: 1,
      lumMixProfile: 'default',
    });
    const brightLayout = computeTileGridLayout({
      seed: 'lum-compare',
      width: COMMIT_CARD_WIDTH,
      height: COMMIT_CARD_HEIGHT,
      displayZoom: 1,
      lumMixProfile: 'bright',
    });
    const avg = (cells: typeof defaultLayout.cells) =>
      cells.reduce((sum, cell) => sum + cell.baseLumMix, 0) / cells.length;
    const brightShare = (cells: typeof defaultLayout.cells) =>
      cells.filter((cell) => cell.baseLumMix >= 0.16).length / cells.length;

    expect(avg(brightLayout.cells)).toBeGreaterThan(avg(defaultLayout.cells));
    expect(brightShare(brightLayout.cells)).toBeGreaterThan(brightShare(defaultLayout.cells));
  });

  it('reduces column count gradually as display zoom decreases', () => {
    const zoomLevels = [1, 0.75, 0.5, 0.35, TILE_PATTERN_MIN_DISPLAY_ZOOM];
    const colCounts = zoomLevels.map(
      (displayZoom) =>
        pickGridCounts(COMMIT_CARD_WIDTH, COMMIT_CARD_HEIGHT, displayZoom).cols,
    );
    for (let index = 1; index < colCounts.length; index++) {
      expect(colCounts[index]).toBeLessThanOrEqual(colCounts[index - 1]!);
    }
  });
});
