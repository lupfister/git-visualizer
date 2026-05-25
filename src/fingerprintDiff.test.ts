import { describe, expect, it } from 'vitest';
import { classifyFingerprintDiff, parseBranchRefSig, parseRepoFingerprint } from './fingerprintDiff';

const sample = (overrides: Partial<NonNullable<ReturnType<typeof parseRepoFingerprint>>> = {}) => {
  const base = parseRepoFingerprint('main@@abc@@up@@0@@main:abc:1:0:on-github@@wt-sig@@stash-sig');
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

describe('parseBranchRefSig', () => {
  it('parses branch ref entries', () => {
    const map = parseBranchRefSig('main:abc:1:0:on-github|feature:def:2:1:unpushed');
    expect(map.get('main')?.headSha).toBe('abc');
    expect(map.get('feature')?.unpushedCommits).toBe(1);
  });
});

describe('classifyFingerprintDiff', () => {
  it('requests graph delta when head moves', () => {
    const stored = sample({ headSha: 'old' });
    const current = sample({ headSha: 'new' });
    expect(classifyFingerprintDiff(stored, current)).toEqual({
      kind: 'graphDelta',
      scope: 'head',
    });
  });

  it('requests graph delta when branch refs move without head change', () => {
    const stored = sample({ branchRefSig: 'main:abc:1:0:on-github|feature:old:1:0:local-only' });
    const current = sample({ branchRefSig: 'main:abc:1:0:on-github|feature:new:2:1:unpushed' });
    expect(classifyFingerprintDiff(stored, current)).toEqual({
      kind: 'graphDelta',
      scope: 'branches',
    });
  });

  it('combines graph delta with dirty segment changes', () => {
    const stored = sample({ headSha: 'old', hasUncommittedChanges: false });
    const current = sample({ headSha: 'new', hasUncommittedChanges: true });
    expect(classifyFingerprintDiff(stored, current)).toEqual({
      kind: 'graphDelta',
      scope: 'head',
      segments: ['dirty'],
    });
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
