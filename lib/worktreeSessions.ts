import { normalizeRepoPathForCompare, worktreeDisplayName } from '../components/grid/mapGridUtils';
import type { Branch, BranchCommitPreview, CheckedOutRef, TerminalSession, WorktreeInfo } from '../types';

/** Current window only; teal checked-out token. */
export type WorktreeCurrentAccentToken = 'checked';

/** Non-current linked worktrees — never uses blue (`select` / `remote`). */
export type WorktreeSessionAccentToken =
  | 'worktree-rose'
  | 'worktree-salmon'
  | 'worktree-terracotta'
  | 'worktree-amber'
  | 'worktree-olive'
  | 'worktree-lime'
  | 'worktree-sage'
  | 'worktree-green'
  | 'worktree-emerald'
  | 'worktree-teal'
  | 'worktree-cyan'
  | 'worktree-blue'
  | 'worktree-indigo'
  | 'worktree-violet'
  | 'worktree-purple'
  | 'worktree-mauve';

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

export const NON_CURRENT_ACCENT_CYCLE: WorktreeSessionAccentToken[] = [
  'worktree-rose',
  'worktree-salmon',
  'worktree-terracotta',
  'worktree-amber',
  'worktree-olive',
  'worktree-lime',
  'worktree-sage',
  'worktree-green',
  'worktree-emerald',
  'worktree-teal',
  'worktree-cyan',
  'worktree-blue',
  'worktree-indigo',
  'worktree-violet',
  'worktree-purple',
  'worktree-mauve',
];

export const LEGACY_WORKING_TREE_ID = 'WORKING_TREE';

const ESOTERIC_NAMES = [
  // Stones & Rocks
  'obsidian', 'basalt', 'travertine', 'porphyry', 'slate', 'quartzite',
  'schist', 'gneiss', 'granite', 'marble', 'shale', 'limestone',
  'sandstone', 'breccia', 'diorite', 'gabbro', 'rhyolite', 'pumice',
  'pegmatite', 'soapstone', 'tuff', 'hornfels', 'novaculite', 'siltstone',
  // Minerals & Crystals
  'lapis', 'onyx', 'serpentine', 'alabaster', 'malachite', 'selenite',
  'jasper', 'hematite', 'agate', 'sardonyx', 'feldspar', 'fluorite',
  'chalcedony', 'chert', 'sodalite', 'carnelian', 'quartz', 'amethyst',
  'citrine', 'aventurine', 'opal', 'garnet', 'topaz', 'zircon',
  'olivine', 'pyroxene', 'mica', 'calcite', 'dolomite', 'gypsum',
  'pyrite', 'beryl', 'tourmaline', 'emerald', 'sapphire', 'ruby',
  'turquoise', 'jadeite', 'nephrite', 'alexandrite', 'spinel', 'tanzanite',
  'apatite', 'talc', 'sphene', 'larimar', 'prehnite', 'apophyllite',
  'amazonite', 'labradorite', 'moonstone', 'sunstone', 'rhodonite',
  'dioptase', 'azurite', 'chrysocolla', 'variscite', 'wavellite',
  'kyanite', 'staurolite', 'epidote', 'zoisite', 'axinite',
  // Tiling & Architectural layouts
  'sectile', 'tessera', 'cosmatesque', 'mosaic', 'tessellation',
  'chevron', 'herringbone', 'ashlar', 'arabesque', 'windmill',
  'basketweave', 'pinwheel', 'hopscotch', 'versailles', 'ledgerstone',
  'matrix', 'signinum', 'opus', 'spicatum', 'quadratum', 'reticulatum',
  'incertum', 'testaceum', 'mixtum', 'vittatum', 'alexandrinum',
  'scutulatum', 'vermiculatum', 'musivum', 'tessellatum'
];

export const generateEsotericWorktreeName = (existingNames?: Set<string>): string => {
  const filterSet = existingNames ?? new Set<string>();
  const available = ESOTERIC_NAMES.filter(name => !filterSet.has(name.toLowerCase()));
  if (available.length > 0) {
    return available[Math.floor(Math.random() * available.length)];
  }
  const base = ESOTERIC_NAMES[Math.floor(Math.random() * ESOTERIC_NAMES.length)];
  return `${base}${Math.floor(Math.random() * 1000)}`;
};

export const worktreeStableHash = (path: string): number => {
  const normalized = normalizeRepoPathForCompare(path).toLowerCase();
  let hash = 2166136261;
  for (let index = 0; index < normalized.length; index += 1) {
    hash ^= normalized.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

export const worktreeStableKey = (path: string): string => {
  return worktreeStableHash(path).toString(36);
};

export const workingTreeIdForPath = (path: string, isCurrent: boolean): string => {
  if (isCurrent) return LEGACY_WORKING_TREE_ID;
  return `${LEGACY_WORKING_TREE_ID}:${worktreeStableKey(path)}`;
};

/** Map node id to focus when a sidebar terminal session is selected. */
export const resolveTerminalSessionFocusId = (
  session: Pick<TerminalSession, 'targetId' | 'worktreePath' | 'projectPath'>,
): string | null => {
  if (session.targetId) return session.targetId;
  if (!session.worktreePath) return null;
  const isCurrent = normalizeRepoPathForCompare(session.worktreePath).toLowerCase()
    === normalizeRepoPathForCompare(session.projectPath).toLowerCase();
  return workingTreeIdForPath(session.worktreePath, isCurrent);
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

const WORKTREE_COLORS_STORAGE_KEY = 'git-visualizer:worktree-colors';

const readPersistedWorktreeColors = (): Record<string, WorktreeSessionAccentToken> => {
  const storage = worktreeFocusStorage();
  if (!storage) return {};
  try {
    const raw = storage.getItem(WORKTREE_COLORS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const writePersistedWorktreeColors = (colors: Record<string, WorktreeSessionAccentToken>): void => {
  const storage = worktreeFocusStorage();
  if (!storage) return;
  try {
    storage.setItem(WORKTREE_COLORS_STORAGE_KEY, JSON.stringify(colors));
  } catch {
    // ignore storage failures
  }
};

const assignAccentTokens = (
  sessions: Omit<WorktreeSession, 'accentToken' | 'workingTreeId'>[],
  worktreeOrder?: string[],
): WorktreeSession[] => {
  const current = sessions.filter((session) => session.isCurrent);
  const others = sessions.filter((session) => !session.isCurrent);

  if (worktreeOrder && worktreeOrder.length > 0) {
    const orderMap = new Map(worktreeOrder.map((path, idx) => [normalizeRepoPathForCompare(path).toLowerCase(), idx]));
    others.sort((left, right) => {
      const leftKey = normalizeRepoPathForCompare(left.path).toLowerCase();
      const rightKey = normalizeRepoPathForCompare(right.path).toLowerCase();
      const leftIdx = orderMap.has(leftKey) ? orderMap.get(leftKey)! : Infinity;
      const rightIdx = orderMap.has(rightKey) ? orderMap.get(rightKey)! : Infinity;
      if (leftIdx !== rightIdx) return leftIdx - rightIdx;
      return leftKey.localeCompare(rightKey);
    });
  } else {
    others.sort((left, right) => normalizeRepoPathForCompare(left.path).localeCompare(normalizeRepoPathForCompare(right.path)));
  }

  const withAccents: WorktreeSession[] = [];

  for (const session of current) {
    withAccents.push({
      ...session,
      accentToken: 'checked',
      workingTreeId: workingTreeIdForPath(session.path, true),
    });
  }

  const persistedColors = readPersistedWorktreeColors();
  let updated = false;

  // Track colors currently in use by any active non-current worktree in this set
  const activeTakenColors = new Set<WorktreeSessionAccentToken>();
  for (const session of others) {
    const normPath = normalizeRepoPathForCompare(session.path).toLowerCase();
    const token = persistedColors[normPath];
    if (token && NON_CURRENT_ACCENT_CYCLE.includes(token)) {
      activeTakenColors.add(token);
    }
  }

  for (const session of others) {
    const normPath = normalizeRepoPathForCompare(session.path).toLowerCase();
    let token = persistedColors[normPath];

    if (!token || !NON_CURRENT_ACCENT_CYCLE.includes(token)) {
      // Find the first available color in the cycle not taken by other active worktrees
      const availableColor = NON_CURRENT_ACCENT_CYCLE.find((c) => !activeTakenColors.has(c));
      if (availableColor) {
        token = availableColor;
      } else {
        // Fallback if all 4 colors are already in use by active worktrees
        const stableHash = worktreeStableHash(session.path);
        token = NON_CURRENT_ACCENT_CYCLE[stableHash % NON_CURRENT_ACCENT_CYCLE.length]!;
      }
      persistedColors[normPath] = token;
      activeTakenColors.add(token);
      updated = true;
    }

    withAccents.push({
      ...session,
      accentToken: token,
      workingTreeId: workingTreeIdForPath(session.path, false),
    });
  }

  if (updated) {
    writePersistedWorktreeColors(persistedColors);
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
  worktreeOrder?: string[],
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

  return assignAccentTokens(base, worktreeOrder);
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

export interface WorktreePromptDefaults {
  defaultFolderName: string;
  createBranch: boolean;
  createBranchDisabled: boolean;
}

export const determineWorktreePromptDefaults = (
  resolvedTarget: string | undefined,
  sortedWorktrees: WorktreeInfo[],
  branches: Branch[],
): WorktreePromptDefaults => {
  const existingNames = new Set<string>();
  for (const b of branches) {
    existingNames.add(b.name.toLowerCase());
  }
  for (const w of sortedWorktrees) {
    const name = w.path.split(/[/\\]/).pop();
    if (name) {
      existingNames.add(name.toLowerCase());
    }
  }

  if (resolvedTarget === undefined) {
    return {
      defaultFolderName: generateEsotericWorktreeName(existingNames),
      createBranch: true,
      createBranchDisabled: true,
    };
  }

  const cleaned = resolvedTarget.replace(/[^a-zA-Z0-9._-]/g, '_') || 'HEAD';
  const isSha = /^[0-9a-fA-F]{7,40}$/.test(cleaned);
  const isHead = cleaned === 'HEAD';
  const isStashRef = /^stash@\{\d+\}$/.test(resolvedTarget);

  if (isHead || isSha) {
    return {
      defaultFolderName: generateEsotericWorktreeName(existingNames),
      createBranch: true,
      createBranchDisabled: false,
    };
  }

  if (isStashRef) {
    return {
      defaultFolderName: generateEsotericWorktreeName(existingNames),
      createBranch: true,
      createBranchDisabled: true,
    };
  }

  // Check if the branch is already checked out in any worktree
  const isBranchCheckedOut = sortedWorktrees.some(
    (w) => w.branchName && w.branchName === resolvedTarget
  );

  // Check if there is already a worktree with the same folder name
  const isNameConflict = sortedWorktrees.some((w) => {
    const name = w.path.split(/[/\\]/).pop();
    return name && name.toLowerCase() === cleaned.toLowerCase();
  });

  if (isBranchCheckedOut) {
    return {
      defaultFolderName: generateEsotericWorktreeName(existingNames),
      createBranch: true,
      createBranchDisabled: true,
    };
  }

  if (isNameConflict) {
    return {
      defaultFolderName: generateEsotericWorktreeName(existingNames),
      createBranch: false,
      createBranchDisabled: false,
    };
  }

  return {
    defaultFolderName: cleaned,
    createBranch: false,
    createBranchDisabled: false,
  };
};
