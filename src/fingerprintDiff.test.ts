import { describe, expect, it } from 'vitest';
import { classifyFingerprintDiff, parseRepoFingerprint } from './fingerprintDiff';

const sample = (overrides: Partial<ReturnType<typeof parseRepoFingerprint>> = {}) => {
  const base = parseRepoFingerprint('main@@abc@@up@@0@@branch-sig@@wt-sig@@stash-sig');
  return { ...base!, ...overrides };
};

describe('parseRepoFingerprint', () => {
  it('parses fingerprint segments', () => {
    const parsed = parseRepoFingerprint('main@@abc@@up@@1@@b@@w@@s');
    expect(parsed?.headSha).toBe('abc');
    expect(parsed?.hasUncommittedChanges).toBe(true);
    expect(parsed?.stashSig).toBe('s');
  });
});

describe('classifyFingerprintDiff', () => {
  it('requests full refresh when head moves', () => {
    const stored = sample({ headSha: 'old' });
    const current = sample({ headSha: 'new' });
    expect(classifyFingerprintDiff(stored, current)).toEqual({ kind: 'full' });
  });

  it('patches dirty-only changes', () => {
    const stored = sample({ hasUncommittedChanges: false });
    const current = sample({ hasUncommittedChanges: true });
    expect(classifyFingerprintDiff(stored, current)).toEqual({
      kind: 'patch',
      segments: ['dirty'],
    });
  });

  it('patches stash-only changes', () => {
    const stored = sample({ stashSig: 'a' });
    const current = sample({ stashSig: 'b' });
    expect(classifyFingerprintDiff(stored, current)).toEqual({
      kind: 'patch',
      segments: ['stash'],
    });
  });

  it('patches combined dirty and stash changes', () => {
    const stored = sample({ hasUncommittedChanges: false, stashSig: 'a' });
    const current = sample({ hasUncommittedChanges: true, stashSig: 'b' });
    expect(classifyFingerprintDiff(stored, current)).toEqual({
      kind: 'patch',
      segments: ['dirty', 'stash'],
    });
  });
});
