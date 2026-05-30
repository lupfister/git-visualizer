import { describe, expect, it } from 'vitest';
import type { Node } from './LayoutGrid';
import { parseMapCheckoutTarget } from './mapCheckoutTarget';

const node = (id: string, branchName: string, kind?: string): Node => ({
  x: 0,
  y: 0,
  commit: {
    id,
    visualId: `${branchName}:${id}`,
    branchName,
    message: '',
    author: 'a',
    date: '2024-01-01T00:00:00Z',
    kind: kind as Node['commit']['kind'],
  },
});

describe('parseMapCheckoutTarget', () => {
  it('parses stash nodes', () => {
    expect(parseMapCheckoutTarget(node('STASH:0', 'main', 'stash'))).toEqual({
      commitSha: 'STASH:0',
      summary: 'Apply stash 1',
    });
  });

  it('parses branch head placeholders', () => {
    expect(parseMapCheckoutTarget(node('BRANCH_HEAD:feature:abc1234567890', 'feature', 'branch-created'))).toEqual({
      commitSha: 'abc1234567890',
      branchName: 'feature',
      summary: 'Check out branch feature (abc1234)',
    });
  });

  it('rejects working tree nodes', () => {
    expect(parseMapCheckoutTarget(node('WORKING_TREE', 'main', 'uncommitted'))).toBeNull();
  });

  it('checks out specific commits by SHA even when branch is known', () => {
    expect(parseMapCheckoutTarget(node('abc1234567890abcdef1234567890abcdef123456', 'feature'))).toEqual({
      commitSha: 'abc1234567890abcdef1234567890abcdef123456',
      summary: 'Check out feature/abc1234',
    });
  });
});
