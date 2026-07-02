export function isManagedPreviewWorktreePath(path: string): boolean {
  const normalized = path.replace(/\\/g, '/');
  return normalized.includes('/preview-worktrees/')
    && (normalized.endsWith('/preview') || normalized.endsWith('/worktree'));
}

export function visibleWorktrees<T extends { path: string }>(worktrees: T[]): T[] {
  return worktrees.filter((worktree) => !isManagedPreviewWorktreePath(worktree.path));
}
