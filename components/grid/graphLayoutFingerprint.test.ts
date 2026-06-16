import { describe, expect, it } from 'vitest';
import { buildGraphLayoutFingerprint, hashCommitShaList } from './graphLayoutFingerprint';

describe('graphLayoutFingerprint', () => {
  it('hashes commit lists in O(n) without sorting', () => {
    const commitsA = [{ fullSha: 'cccccccccccccccccccccccccccccccccccccccc' }, { fullSha: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' }];
    const commitsB = [{ fullSha: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' }, { fullSha: 'cccccccccccccccccccccccccccccccccccccccc' }];
    expect(hashCommitShaList(commitsA)).not.toBe(hashCommitShaList(commitsB));
    expect(hashCommitShaList(commitsA)).toBe(hashCommitShaList([...commitsA]));
    expect(hashCommitShaList([])).toBe('0:0');
  });

  it('builds a stable layout fingerprint string', () => {
    const fingerprint = buildGraphLayoutFingerprint({
      layoutEpoch: 2,
      defaultBranch: 'main',
      checkedOutBranch: 'main',
      checkedOutHead: 'abc',
      worktreeSessionSignature: 'wt:0',
      branchRowsSignature: 'main:abc:1:0:',
      branchPreviewsSignature: 'main:abc///commit/2026-01-01T00:00:00Z',
      directCommitFingerprint: '2:123',
      unpushedCommitFingerprint: '0:0',
      mergeNodesSignature: '',
    });
    expect(fingerprint).toContain('layout-v16-fingerprint');
    expect(fingerprint).toContain('main');
  });
});
