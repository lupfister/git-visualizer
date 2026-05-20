import { describe, expect, it } from 'vitest';
import {
  COMMIT_CARD_HEIGHT,
  COMMIT_CARD_WIDTH,
  TILE_PATTERN_MIN_DISPLAY_ZOOM,
} from './constants';
import { computeTileGridLayout, pickGridCounts, tileEdgeGaps } from './layout';

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
