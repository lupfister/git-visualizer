import { describe, expect, it } from 'vitest';
import { createInFlightDeduper } from './inFlightInvoke';

describe('createInFlightDeduper', () => {
  it('returns the same promise for concurrent calls with the same key', async () => {
    const dedupe = createInFlightDeduper<number>();
    let runs = 0;
    const task = () => {
      runs += 1;
      return Promise.resolve(runs);
    };

    const first = dedupe('/repo/a', task);
    const second = dedupe('/repo/a', task);
    const third = dedupe('/repo/b', task);

    expect(first).toBe(second);
    expect(await first).toBe(1);
    expect(await third).toBe(2);
    expect(runs).toBe(2);
  });

  it('allows a new call after the prior promise settles', async () => {
    const dedupe = createInFlightDeduper<string>();
    let runs = 0;
    const task = () => Promise.resolve(`run-${++runs}`);

    expect(await dedupe('/repo/a', task)).toBe('run-1');
    expect(await dedupe('/repo/a', task)).toBe('run-2');
  });
});
