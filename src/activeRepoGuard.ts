function normalizePath(path: string): string {
  if (path === '/') return path;
  return path.replace(/\/+$/, '');
}

function sameRepoPath(left: string | null | undefined, right: string | null | undefined): boolean {
  if (!left || !right) return false;
  return normalizePath(left).toLowerCase() === normalizePath(right).toLowerCase();
}

export function canApplyActiveRepoSnapshot(
  targetPath: string | null | undefined,
  currentPath: string | null | undefined,
  allowProjectSwitch = false,
): boolean {
  return allowProjectSwitch || sameRepoPath(targetPath, currentPath);
}
