import { describe, expect, it } from 'vitest';
import { canApplyActiveRepoSnapshot } from './activeRepoGuard';

describe('canApplyActiveRepoSnapshot', () => {
  it('rejects a stale background update for a previous active repo', () => {
    expect(canApplyActiveRepoSnapshot('/repo-a', '/repo-b')).toBe(false);
  });

  it('accepts updates for the current active repo', () => {
    expect(canApplyActiveRepoSnapshot('/repo-b', '/repo-b')).toBe(true);
  });

  it('allows intentional project switches', () => {
    expect(canApplyActiveRepoSnapshot('/repo-a', '/repo-b', true)).toBe(true);
  });
});
