import { describe, expect, it } from 'vitest';
import { lumMixToResolvedColor } from './color';

describe('lumMixToResolvedColor', () => {
  it('returns base when mix is zero', () => {
    expect(lumMixToResolvedColor('#F2F2F2', 0)).toBe('#F2F2F2');
  });

  it('mixes toward white at 50%', () => {
    expect(lumMixToResolvedColor('#000000', 0.5)).toBe('#808080');
  });

  it('handles shorthand hex', () => {
    expect(lumMixToResolvedColor('#fff', 0)).toBe('#fff');
  });
});
