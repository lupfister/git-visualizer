import { normalizeRepoPathForCompare, worktreeDisplayName } from '../components/grid/mapGridUtils';
import type { Branch, BranchCommitPreview, CheckedOutRef, WorktreeInfo } from '../types';

/** Current window only; teal checked-out token. */
export type WorktreeCurrentAccentToken = 'checked';

/** Non-current linked worktrees — never uses blue (`select` / `remote`). */
export type WorktreeSessionAccentToken =
  | 'worktree-violet'
  | 'worktree-amber'
  | 'worktree-emerald'
  | 'worktree-rose';

export type WorktreeAccentToken = WorktreeCurrentAccentToken | WorktreeSessionAccentToken;

export interface WorktreeSession {
  path: string;
  pathExists: boolean;
  branchName: string | null;
  headSha: string;
  parentSha: string | null;
  hasUncommittedChanges: boolean;
  isCurrent: boolean;
  accentToken: WorktreeAccentToken;
  workingTreeId: string;
}

const NON_CURRENT_ACCENT_CYCLE: WorktreeSessionAccentToken[] = [
  'worktree-violet',
  'worktree-amber',
  'worktree-emerald',
  'worktree-rose',
];

export const LEGACY_WORKING_TREE_ID = 'WORKING_TREE';

export const worktreeStableKey = (path: string): string => {
  const normalized = normalizeRepoPathForCompare(path).toLowerCase();
  let hash = 2166136261;
  for (let index = 0; index < normalized.length; index += 1) {
    hash ^= normalized.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
};

export const workingTreeIdForPath = (path: string, isCurrent: boolean): string => {
  if (isCurrent) return LEGACY_WORKING_TREE_ID;
  return `${LEGACY_WORKING_TREE_ID}:${worktreeStableKey(path)}`;
};

export const isWorkingTreeCommitId = (id: string): boolean =>
  id === LEGACY_WORKING_TREE_ID || id.startsWith(`${LEGACY_WORKING_TREE_ID}:`);

/** Synthetic map lane for a linked worktree (detached or otherwise without a branch ref). */
export const worktreeLaneBranchName = (path: string, reservedNames: ReadonlySet<string>): string => {
  const base = `Worktree · ${worktreeDisplayName(path)}`;
  if (!reservedNames.has(base)) return base;
  return `Worktree · ${worktreeDisplayName(path)} (${worktreeStableKey(path)})`;
};

export const isWorktreeLaneBranchName = (branchName: string): boolean =>
  branchName.startsWith('Worktree · ');

export const currentSessionWorkingTreeId = (sessions: WorktreeSession[]): string => {
  const current = sessions.find((session) => session.isCurrent);
  return current?.workingTreeId ?? LEGACY_WORKING_TREE_ID;
};

const LAST_WORKTREE_FOCUS_STORAGE_PREFIX = 'git-visualizer:last-worktree-focus:';

export const lastWorktreeFocusStorageKey = (repoPath: string): string =>
  `${LAST_WORKTREE_FOCUS_STORAGE_PREFIX}${normalizeRepoPathForCompare(repoPath)}`;

const worktreeFocusStorage = (): Storage | null => {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
};

export const readPersistedWorktreeFocusSha = (repoPath: string): string | null => {
  const storage = worktreeFocusStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(lastWorktreeFocusStorageKey(repoPath));
    return raw && isWorkingTreeCommitId(raw) ? raw : null;
  } catch {
    return null;
  }
};

export const persistWorktreeFocusSha = (repoPath: string, workingTreeId: string): void => {
  if (!isWorkingTreeCommitId(workingTreeId)) return;
  const storage = worktreeFocusStorage();
  if (!storage) return;
  try {
    storage.setItem(lastWorktreeFocusStorageKey(repoPath), workingTreeId);
  } catch {
    // ignore storage failures
  }
};

/** Map camera should center this worktree node on project load/reload. */
export const resolveActiveWorktreeFocusSha = (
  sessions: WorktreeSession[],
  repoPath?: string,
): string | null => {
  if (sessions.length === 0) return null;
  const persisted = repoPath ? readPersistedWorktreeFocusSha(repoPath) : null;
  if (persisted && sessions.some((session) => session.workingTreeId === persisted)) {
    return persisted;
  }
  return currentSessionWorkingTreeId(sessions);
};

export const selectedWorktreeSessions = (
  sessions: WorktreeSession[],
  selectedCommitShas: string[],
): WorktreeSession[] => {
  const selected = new Set(selectedCommitShas);
  return sessions.filter((session) => selected.has(session.workingTreeId));
};

export const dirtyWorktreeSessions = (sessions: WorktreeSession[]): WorktreeSession[] =>
  sessions.filter((session) => session.hasUncommittedChanges && session.pathExists !== false);

export const selectedUncommittedSessions = (
  sessions: WorktreeSession[],
  selectedCommitShas: string[],
): WorktreeSession[] =>
  selectedWorktreeSessions(sessions, selectedCommitShas).filter(
    (session) => session.hasUncommittedChanges,
  );

/** Linked worktrees selected on the map without uncommitted changes — remove the checkout. */
export const selectedRemovableWorktreeSessions = (
  sessions: WorktreeSession[],
  selectedCommitShas: string[],
): WorktreeSession[] =>
  selectedWorktreeSessions(sessions, selectedCommitShas).filter(
    (session) => !session.isCurrent && !session.hasUncommittedChanges,
  );

export const shouldAnimateWorktreeNode = (session: Pick<WorktreeSession, 'hasUncommittedChanges'>): boolean =>
  session.hasUncommittedChanges;

/** Tile/header accent for worktree nodes — independent of map selection state. */
export const worktreeAccentActive = (
  isWorktreeNode: boolean,
  accentToken: WorktreeAccentToken | null | undefined,
): accentToken is WorktreeAccentToken => isWorktreeNode && accentToken != null;

export const resolveWorktreeCommitTileShapeCssVar = (
  accentToken: WorktreeAccentToken | null | undefined,
  isSelectedCommit: boolean,
  showCommitTilePattern: boolean,
): string | null => {
  if (!showCommitTilePattern) return null;
  if (isSelectedCommit) return '--select-muted';
  if (accentToken != null) return `--${accentToken}-muted`;
  return '--muted';
};

export const accentCssVars = (token: WorktreeAccentToken): { fg: string; muted: string } => ({
  fg: `var(--${token})`,
  muted: `var(--${token}-muted)`,
});

const isUsableWorktree = (worktree: WorktreeInfo): boolean => worktree.pathExists !== false;

const assignAccentTokens = (sessions: Omit<WorktreeSession, 'accentToken' | 'workingTreeId'>[]): WorktreeSession[] => {
  const current = sessions.filter((session) => session.isCurrent);
  const others = sessions
    .filter((session) => !session.isCurrent)
    .sort((left, right) => normalizeRepoPathForCompare(left.path).localeCompare(normalizeRepoPathForCompare(right.path)));

  let nonCurrentIndex = 0;
  const withAccents: WorktreeSession[] = [];

  for (const session of current) {
    withAccents.push({
      ...session,
      accentToken: 'checked',
      workingTreeId: workingTreeIdForPath(session.path, true),
    });
  }

  for (const session of others) {
    withAccents.push({
      ...session,
      accentToken: NON_CURRENT_ACCENT_CYCLE[nonCurrentIndex % NON_CURRENT_ACCENT_CYCLE.length]!,
      workingTreeId: workingTreeIdForPath(session.path, false),
    });
    nonCurrentIndex += 1;
  }

  return withAccents;
};

/**
 * Resolve dirty for a worktree session. A refreshed worktree list that says "clean"
 * wins over a stale checkedOutRef dirty flag on the current tree.
 */
export const resolveWorktreeSessionDirty = (
  worktree: WorktreeInfo,
  isCurrent: boolean,
  checkedOutRef?: CheckedOutRef | null,
): boolean => {
  const worktreeDirty = worktree.hasUncommittedChanges;
  if (!isCurrent || !checkedOutRef) {
    return worktreeDirty ?? false;
  }
  if (worktreeDirty === false) return false;
  if (worktreeDirty === true) return true;
  return checkedOutRef.hasUncommittedChanges;
};

export const buildWorktreeSessions = (
  worktrees: WorktreeInfo[],
  currentRepoPath?: string,
  checkedOutRef?: CheckedOutRef | null,
): WorktreeSession[] => {
  const normalizedCurrent = currentRepoPath ? normalizeRepoPathForCompare(currentRepoPath) : null;
  const base = worktrees
    .filter(isUsableWorktree)
    .map((worktree) => {
      const normalizedPath = normalizeRepoPathForCompare(worktree.path);
      const isCurrent = normalizedCurrent
        ? normalizedPath === normalizedCurrent || normalizedPath.toLowerCase() === normalizedCurrent.toLowerCase()
        : worktree.isCurrent;
      const hasUncommittedChanges = resolveWorktreeSessionDirty(worktree, isCurrent, checkedOutRef);
      const headSha = isCurrent && checkedOutRef?.headSha
        ? checkedOutRef.headSha
        : worktree.headSha;
      const parentSha = isCurrent && checkedOutRef
        ? (checkedOutRef.parentSha ?? worktree.parentSha ?? null)
        : worktree.parentSha;
      const branchName = isCurrent && checkedOutRef?.branchName != null
        ? checkedOutRef.branchName
        : worktree.branchName;
      return {
        path: worktree.path,
        pathExists: worktree.pathExists,
        branchName,
        headSha,
        parentSha,
        hasUncommittedChanges,
        isCurrent,
      };
    });

  return assignAccentTokens(base);
};

export const shaMatches = (left?: string | null, right?: string | null): boolean => {
  if (!left || !right) return false;
  return left === right || left.startsWith(right) || right.startsWith(left);
};

export const branchTipSha = (branch: Branch): string | null =>
  branch.headSha || branch.createdFromSha || branch.divergedFromSha || branch.presidesFromSha || null;

export const isEmptyBranchGraphPlaceholder = (preview: BranchCommitPreview): boolean =>
  preview.fullSha.startsWith('BRANCH_HEAD:')
  || (preview.kind === 'stash' && preview.sha === 'empty');

/** True when a worktree session is checked out on this branch tip (empty-branch case). */
export const sessionMatchesBranchCheckout = (
  session: WorktreeSession,
  branch: Branch,
): boolean => {
  if (!session.branchName || session.branchName !== branch.name) return false;
  if (isWorkingTreeCommitId(branch.headSha)) return true;
  const tipSha = branchTipSha(branch);
  if (!tipSha) return false;
  if (shaMatches(session.headSha, tipSha)) return true;
  if (session.parentSha && shaMatches(session.parentSha, tipSha)) return true;
  return shaMatches(session.headSha, branch.divergedFromSha)
    || shaMatches(session.headSha, branch.createdFromSha);
};

export const worktreeSessionCoversEmptyBranch = (
  sessions: WorktreeSession[],
  branch: Branch,
): boolean => sessions.some((session) => sessionMatchesBranchCheckout(session, branch));

export const stripEmptyBranchPlaceholdersForWorktreeSessions = (
  sessions: WorktreeSession[],
  branches: Branch[],
  branchCommitPreviews: Record<string, BranchCommitPreview[]>,
): Record<string, BranchCommitPreview[]> => {
  if (sessions.length === 0) return branchCommitPreviews;
  let changed = false;
  const next: Record<string, BranchCommitPreview[]> = {};
  for (const [branchName, previews] of Object.entries(branchCommitPreviews)) {
    const branch = branches.find((candidate) => candidate.name === branchName);
    if (!branch || !worktreeSessionCoversEmptyBranch(sessions, branch)) {
      next[branchName] = previews;
      continue;
    }
    const filtered = previews.filter((preview) => !isEmptyBranchGraphPlaceholder(preview));
    if (filtered.length !== previews.length) changed = true;
    if (filtered.length > 0) next[branchName] = filtered;
  }
  return changed ? next : branchCommitPreviews;
};

export const resolveCommitAccent = (
  commitId: string,
  kind: string | null | undefined,
  sessions: WorktreeSession[],
): WorktreeAccentToken | null => {
  if (isWorkingTreeCommitId(commitId) || kind === 'uncommitted') {
    const byWorkingTree = sessions.find((session) => session.workingTreeId === commitId);
    if (byWorkingTree) return byWorkingTree.accentToken;
    if (commitId === LEGACY_WORKING_TREE_ID) {
      return sessions.find((session) => session.isCurrent)?.accentToken ?? 'checked';
    }
    return null;
  }

  const headMatches = sessions.filter((session) => shaMatches(session.headSha, commitId));
  if (headMatches.length === 0) return null;
  const currentMatch = headMatches.find((session) => session.isCurrent);
  return (currentMatch ?? headMatches[0])!.accentToken;
};

export const buildWorktreeAccentByCommitId = (
  sessions: WorktreeSession[],
  emptyBranchPlaceholderCommitIds: string[] = [],
): Map<string, WorktreeAccentToken> => {
  const map = new Map<string, WorktreeAccentToken>();
  for (const session of sessions) {
    map.set(session.workingTreeId, session.accentToken);
  }
  if (emptyBranchPlaceholderCommitIds.length > 0) {
    const lookups = buildWorktreeAccentLookups(sessions);
    for (const commitId of emptyBranchPlaceholderCommitIds) {
      const branchName = /^BRANCH_HEAD:([^:]+):/.exec(commitId)?.[1];
      if (!branchName) continue;
      const tipSha = parseBranchHeadTipShaFromCommitId(commitId);
      if (
        tipSha
        && worktreeSessionCoversEmptyBranch(sessions, { name: branchName, headSha: tipSha } as Branch)
      ) {
        continue;
      }
      const token = resolveBranchCheckoutAccent(
        branchName,
        parseBranchHeadTipShaFromCommitId(commitId) ?? undefined,
        lookups,
      );
      if (token) map.set(commitId, token);
    }
  }
  return map;
};

export type WorktreeAccentLookups = {
  byBranchName: Map<string, WorktreeAccentToken>;
  byHeadSha: Map<string, WorktreeAccentToken>;
};

/** Branch/HEAD accent for sidebar rows; non-current sessions first so current wins on overlap. */
export const buildWorktreeAccentLookups = (sessions: WorktreeSession[]): WorktreeAccentLookups => {
  const byBranchName = new Map<string, WorktreeAccentToken>();
  const byHeadSha = new Map<string, WorktreeAccentToken>();
  const ordered = [
    ...sessions.filter((session) => !session.isCurrent),
    ...sessions.filter((session) => session.isCurrent),
  ];
  for (const session of ordered) {
    if (session.branchName) {
      byBranchName.set(session.branchName, session.accentToken);
    }
    if (session.headSha) {
      const existing = byHeadSha.get(session.headSha);
      if (!existing || session.isCurrent) {
        byHeadSha.set(session.headSha, session.accentToken);
      }
    }
  }
  return { byBranchName, byHeadSha };
};

export const parseBranchHeadTipShaFromCommitId = (commitId: string): string | null => {
  const match = /^BRANCH_HEAD:[^:]+:(.+)$/.exec(commitId);
  return match?.[1] ?? null;
};

export const resolveBranchCheckoutAccent = (
  branchName: string,
  headSha: string | undefined,
  lookups: WorktreeAccentLookups,
): WorktreeAccentToken | null => {
  const byName = lookups.byBranchName.get(branchName);
  if (byName) return byName;
  if (!headSha) return null;
  for (const [sessionHeadSha, token] of lookups.byHeadSha.entries()) {
    if (shaMatches(sessionHeadSha, headSha)) return token;
  }
  return null;
};
