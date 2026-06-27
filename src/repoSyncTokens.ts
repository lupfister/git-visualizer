export type RepoSyncWorktreeDirty = {
  path: string;
  hasUncommittedChanges: boolean;
};

export type RepoSyncTokens = {
  repoPath: string;
  dirtyToken: string;
  graphToken: string;
  dirtyWorktrees: RepoSyncWorktreeDirty[];
};

export function repoSyncTokenChanged(
  previous: RepoSyncTokens | null | undefined,
  next: RepoSyncTokens,
): boolean {
  if (!previous) return true;
  return previous.dirtyToken !== next.dirtyToken || previous.graphToken !== next.graphToken;
}

export function repoSyncGraphHead(token: RepoSyncTokens): string | null {
  const match = token.graphToken.match(/^head=([^@]+)/);
  return match?.[1] ?? null;
}

export function summarizeRepoSyncToken(token: string): string {
  if (!token) return 'empty';
  return `${token.length}:${token.slice(0, 12)}`;
}
