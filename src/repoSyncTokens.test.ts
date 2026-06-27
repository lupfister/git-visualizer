import { describe, expect, it } from 'vitest';
import {
  repoSyncGraphHead,
  repoSyncTokenChanged,
  type RepoSyncTokens,
} from './repoSyncTokens';

const tokens = (overrides: Partial<RepoSyncTokens> = {}): RepoSyncTokens => ({
  repoPath: '/repo',
  dirtyToken: '/repo:0',
  graphToken: 'head=a@@refs=main:a@@worktrees=/repo:a:main::1:0',
  dirtyWorktrees: [{ path: '/repo', hasUncommittedChanges: false }],
  ...overrides,
});

describe('repo sync tokens', () => {
  it('detects no change', () => {
    expect(repoSyncTokenChanged(tokens(), tokens())).toBe(false);
  });

  it('detects dirty token change', () => {
    expect(repoSyncTokenChanged(tokens(), tokens({
      dirtyToken: '/repo:1',
      dirtyWorktrees: [{ path: '/repo', hasUncommittedChanges: true }],
    }))).toBe(true);
  });

  it('detects graph token change', () => {
    expect(repoSyncTokenChanged(tokens(), tokens({
      graphToken: 'head=b@@refs=main:b@@worktrees=/repo:b:main::1:0',
    }))).toBe(true);
  });

  it('extracts the graph head', () => {
    expect(repoSyncGraphHead(tokens({
      graphToken: 'head=abc123@@refs=main:abc123@@worktrees=/repo:abc123:main::1:0',
    }))).toBe('abc123');
  });
});
