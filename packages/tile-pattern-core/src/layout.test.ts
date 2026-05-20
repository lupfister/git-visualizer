import { describe, expect, it } from 'vitest';
import { COMMIT_CARD_HEIGHT, COMMIT_CARD_WIDTH } from './constants';
import { computeTileGridLayout, tileEdgeGaps } from './layout';

describe('computeTileGridLayout', () => {
  it('keeps cells square at commit card size', () => {
    const layout = computeTileGridLayout({
      seed: 'test',
      width: COMMIT_CARD_WIDTH,
      height: COMMIT_CARD_HEIGHT,
      displayZoom: 1,
    });
    expect(Math.abs(layout.cellW - layout.cellH)).toBeLessThan(0.25);
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

  it('scales grid counts with canvas size', () => {
    const small = computeTileGridLayout({
      seed: 'test',
      width: COMMIT_CARD_WIDTH,
      height: COMMIT_CARD_HEIGHT,
      displayZoom: 1,
    });
    const large = computeTileGridLayout({
      seed: 'test',
      width: COMMIT_CARD_WIDTH * 4,
      height: COMMIT_CARD_HEIGHT * 4,
      displayZoom: 1,
    });
    expect(large.cols).toBeGreaterThan(small.cols);
    expect(large.rows).toBeGreaterThan(small.rows);
  });
});
