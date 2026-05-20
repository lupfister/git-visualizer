import { describe, expect, it } from 'vitest';
import { COMMIT_CARD_HEIGHT, COMMIT_CARD_WIDTH } from './constants';
import { buildTilePatternScene } from './scene';

describe('buildTilePatternScene', () => {
  it('is deterministic for the same seed', () => {
    const a = buildTilePatternScene({
      seed: 'abc123',
      shapeFill: '#F2F2F2',
    });
    const b = buildTilePatternScene({
      seed: 'abc123',
      shapeFill: '#F2F2F2',
    });
    expect(a.shapes.length).toBe(b.shapes.length);
    expect(a.shapes[0]?.fill).toBe(b.shapes[0]?.fill);
    expect(a.shapes[0]?.kind).toBe(b.shapes[0]?.kind);
  });

  it('changes tile fills when seed changes', () => {
    const a = buildTilePatternScene({ seed: 'seed-a', shapeFill: '#F2F2F2' });
    const b = buildTilePatternScene({ seed: 'seed-b', shapeFill: '#F2F2F2' });
    const aSample = a.shapes.slice(0, 12).map((shape) => shape.fill).join();
    const bSample = b.shapes.slice(0, 12).map((shape) => shape.fill).join();
    expect(aSample).not.toBe(bSample);
  });

  it('uses commit card dimensions by default', () => {
    const scene = buildTilePatternScene({ seed: 'x', shapeFill: '#F2F2F2' });
    expect(scene.logicalWidth).toBe(COMMIT_CARD_WIDTH);
    expect(scene.logicalHeight).toBe(COMMIT_CARD_HEIGHT);
    expect(scene.shapes.length).toBeGreaterThan(0);
  });
});
