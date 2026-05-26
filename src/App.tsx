import { useState, useEffect, useRef, useMemo, useCallback, startTransition, useDeferredValue } from 'react';
import { flushSync } from 'react-dom';
import type { SetStateAction } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { open } from '@tauri-apps/plugin-dialog';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import BranchGridMapView from '../components/grid/MapViewGrid';
import { mapGridCameraStorageKey, readHasSavedMapGridCamera } from '../components/grid/useMapGridCamera';
import DenseBranchSidebar from '../components/DenseBranchSidebar';
import type { NodePositionOverrides } from '../components/grid/LayoutGrid';
import { stripWorktreeNodePositionOverrides } from '../components/grid/nodePositionOverrides';
import { computeBranchGridLayout, type BranchGridLayoutModel } from '../components/grid/branchGridLayoutModel';
import { hydrateBranchGridLayoutModel, serializeBranchGridLayoutModel } from '../components/grid/layoutSnapshot';
import { layoutModelHasWorkingTree } from '../components/grid/workingTreeLayout';
import type { Branch, BranchCommitPreview, BranchPromptMeta, CheckedOutRef, CommitMutationData, DeleteSelectionMutationData, DirectCommit, GitHubAuthStatus, GitHubInfo, GitStashEntry, MergeNode, OpenPR, RepoMutationOutcome, RepoVisualSnapshot, StashPushMutationData, StashRestoreMutationData, WorktreeInfo } from '../types';
import {
  checkedOutRefWithDirtyFromQuickState,
  mergeCheckedOutRefWithQuickState,
  mergeSnapshotCheckedOutRefWithQuickState,
  snapshotContainsCommitSha,
  type MergeCheckedOutRefOptions,
} from './reconcileCheckedOutHead';
import {
  applyMutationPatch,
  outcomeFromBranchMetadataSync,
  outcomeFromCheckout,
  outcomeFromCommitData,
  outcomeFromDeleteSelection,
  outcomeFromDiscardDirty,
  outcomeFromMarkDirty,
  outcomeFromPush,
  outcomeFromStashDrops,
  outcomeFromStashPush,
  outcomeFromStashRestore,
  outcomeFromStashSync,
  outcomeFromUpstreamSync,
  outcomeFromWorktreeRemove,
  outcomeFromWorktreeSync,
  isDirtyOnlyMutationOutcomes,
} from './repoMutationPatches';
import { classifyFingerprintDiff, formatRepoFingerprint, parseRepoFingerprint, withRepoFingerprintDirty, withRepoFingerprintUpstream, type FingerprintPatchSegment } from './fingerprintDiff';
import { buildGraphDeltaOutcomes, fetchRepoGraphDelta } from './externalGraphSync';
import { formatWorktreeSyncSignature, formatWorktreeSessionLayoutSignature } from './worktreeSignature';
import {
  applyBranchParents,
  isNewerBranchAsParent,
  isParallelEmptyBranchParent,
} from '../lib/branchParents';
import { foldStashNodesIntoGraph } from './placeStashNode';
import { stripWorkingTreeFromPreviews, injectWorktreeUncommittedPreviews } from '../lib/injectWorktreeUncommitted';
import {
  buildWorktreeSessions,
  isWorkingTreeCommitId,
  persistWorktreeFocusSha,
  resolveActiveWorktreeFocusSha,
  shaMatches,
} from '../lib/worktreeSessions';
import { deriveRepoVisualState } from './repoVisualState';
import { setMapGridBackgroundActivity } from '../components/grid/mapGridBackgroundActivity';

const PROJECTS_STORAGE_KEY = 'git-visualizer:projects';
const ACTIVE_PROJECT_STORAGE_KEY = 'git-visualizer:active-project';
const MAX_PROJECTS = 12;
type OpenRepoEventPayload = {
  path: string;
  sourceApp?: string | null;
};
type GitActivityEventPayload = {
  repoPath: string;
  kind: 'graph' | 'local';
};
const COMMIT_SWITCH_FEEDBACK_VISIBLE_MS = 1400;
const COMMIT_SWITCH_FEEDBACK_FADE_MS = 180;
const SIDEBAR_WIDTH_STORAGE_KEY = 'git-visualizer:sidebar-width';
const SIDEBAR_COLLAPSED_STORAGE_KEY = 'git-visualizer:sidebar-collapsed';
const GRID_CLUMPS_STORAGE_KEY = 'git-visualizer:grid-clumps';
const NODE_POSITIONS_STORAGE_KEY_PREFIX = 'git-visualizer:node-positions:';
const SIDEBAR_DEFAULT_WIDTH_PX = 360;
const SIDEBAR_MIN_WIDTH_PX = 180;
const SIDEBAR_MAX_WIDTH_PX = 360;
/** Wait this long after map pan/marquee ends before applying background git snapshot updates. */
const MAP_REPO_REFRESH_SETTLE_MS = 500;
/** Defer SQLite snapshot persist so git CPU work does not contend with map layout. */
const PERSIST_SNAPSHOT_DEFER_MS = 3000;
/** Minimum gap between background fingerprint scans when git state is already synced. */
const MIN_BACKGROUND_FINGERPRINT_CHECK_MS = 12000;
/** Minimum gap between full graph rebuild refreshes (burst coalesce only). */
const MIN_FULL_GRAPH_REFRESH_MS = 2000;
/** Keep optimistic post-commit HEAD on the map until background probes catch up. */
const POST_COMMIT_HEAD_PROTECT_MS = 8000;
const POST_COMMIT_RELEASE_MAX_ATTEMPTS = 15;
const HEAD_STATE_PROBE_MS = 30000;
/** Poll porcelain for unstaged edits — working tree changes do not touch .git. */
const DIRTY_STATE_PROBE_MS = 2500;
/** Coalesce dirty porcelain polls into one UI apply. */
const DIRTY_SYNC_DEBOUNCE_MS = 350;
type PushTarget = {
  branchName: string;
  targetSha?: string;
};
type RepoScopedClumpState = Record<string, Set<string>>;
type MapPresentationState = 'loading' | 'ready' | 'error';

type ProjectRecord = {
  path: string;
  name: string;
  lastOpenedAt: number;
  branchName?: string;
};

type ProjectSnapshot = RepoVisualSnapshot;
type RepoRefreshFingerprint = {
  repoPath: string;
  defaultBranch: string;
  headSha: string;
  upstreamSha?: string | null;
  hasUncommittedChanges: boolean;
  branchCount: number;
  worktreeCount: number;
  stashCount: number;
};
type RepoQuickState = {
  repoPath: string;
  headSha: string;
  upstreamSha?: string | null;
  hasUncommittedChanges: boolean;
};
type RepoHeadState = {
  repoPath: string;
  headSha: string;
  upstreamSha?: string | null;
};
type RepoSyncPeek = {
  repoPath: string;
  signature: string;
};
type ProjectSnapshotRecord = {
  projectId: string;
  repoPath: string;
  snapshotVersion: number;
  fingerprint: string;
  schemaVersion: number;
  createdAtMs: number;
  payload: {
    repoVisualSnapshot: RepoVisualSnapshot;
  };
};
type RefreshProjectResult = {
  projectId: string;
  repoPath: string;
  updated: boolean;
  snapshot?: ProjectSnapshotRecord | null;
};
type FingerprintCheckResult = {
  projectId: string;
  repoPath: string;
  changed: boolean;
  currentFingerprint: string;
  storedFingerprint?: string | null;
};
type CommitMetadata = { subject: string; author: string };

function normalizePath(path: string): string {
  if (path === '/') return path;
  return path.replace(/\/+$/, '');
}

function sameRepoPath(left: string | null | undefined, right: string | null | undefined): boolean {
  if (!left || !right) return false;
  return normalizePath(left).toLowerCase() === normalizePath(right).toLowerCase();
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function basenameFromPath(path: string | null): string {
  if (!path) return '';
  const normalized = path.replace(/\\/g, '/').replace(/\/+$/, '');
  const parts = normalized.split('/');
  return parts[parts.length - 1] ?? '';
}

function setSignature(set: Set<string>): string {
  if (set.size === 0) return '__none__';
  return Array.from(set).sort().join(',');
}

function nodePositionsStorageKey(repoPath: string): string {
  return `${NODE_POSITIONS_STORAGE_KEY_PREFIX}${encodeURIComponent(normalizePath(repoPath))}`;
}


function makeLayoutCacheKey(
  path: string,
  orientation: 'horizontal',
  manuallyOpenedClumps: Set<string>,
  manuallyClosedClumps: Set<string>,
  graphSignature = '',
): string {
  return [
    'layout-v7-switch-reconcile',
    path,
    orientation,
    setSignature(manuallyOpenedClumps),
    setSignature(manuallyClosedClumps),
    graphSignature,
  ].join('|');
}

function buildGraphLayoutSignatureFromSnapshot(
  snapshot: RepoVisualSnapshot,
  repoPath: string,
  layoutEpochValue: number,
): string {
  const sessions = buildWorktreeSessions(snapshot.worktrees, repoPath, snapshot.checkedOutRef);
  const branchesForLayout = applyBranchParents(
    snapshot.branches,
    snapshot.branchParentByName ?? {},
    snapshot.defaultBranch,
  );
  return [
    'layout-v13-worktree-session-sig',
    layoutEpochValue,
    snapshot.defaultBranch,
    snapshot.checkedOutRef?.branchName ?? '',
    snapshot.checkedOutRef?.headSha ?? '',
    formatWorktreeSessionLayoutSignature(sessions),
    branchesForLayout.map((branch) => `${branch.name}:${branch.headSha}:${branch.commitsAhead}:${branch.commitsBehind}:${branch.parentBranch ?? ''}`).join('|'),
    snapshot.directCommits.length,
    snapshot.directCommits.map((commit) => commit.fullSha).sort().join('|'),
    snapshot.unpushedDirectCommits.map((commit) => commit.fullSha).sort().join('|'),
    snapshot.mergeNodes.map((node) => `${node.fullSha}:${node.targetBranch}:${node.targetCommitSha}`).join('|'),
  ].join('@@');
}

function getRepoVisualSnapshotSignature(snapshot: RepoVisualSnapshot): string {
  return [
    snapshot.path,
    snapshot.name,
    snapshot.defaultBranch,
    snapshot.branches.map((branch) => [
      branch.name,
      branch.headSha,
      branch.commitsAhead,
      branch.commitsBehind,
      branch.unpushedCommits,
      branch.remoteSyncStatus,
      branch.status,
      branch.lastCommitDate,
    ].join(':')).join('|'),
    snapshot.mergeNodes.map((node) => [node.fullSha, node.targetBranch, node.targetCommitSha].join(':')).join('|'),
    snapshot.directCommits.map((commit) => commit.fullSha).join('|'),
    snapshot.unpushedDirectCommits.map((commit) => commit.fullSha).join('|'),
    snapshot.checkedOutRef
      ? [
          snapshot.checkedOutRef.branchName ?? '',
          snapshot.checkedOutRef.headSha,
          snapshot.checkedOutRef.parentSha ?? '',
          snapshot.checkedOutRef.hasUncommittedChanges ? '1' : '0',
        ].join(':')
      : '__none__',
    Object.entries(snapshot.unpushedCommitShasByBranch)
      .map(([branchName, shas]) => `${branchName}:${shas.join(',')}`)
      .join('|'),
    Object.entries(snapshot.branchCommitPreviews)
      .map(([branchName, previews]) => `${branchName}:${previews.map((preview) => preview.fullSha).join(',')}`)
      .join('|'),
    Object.entries(snapshot.branchParentByName).map(([branchName, parentName]) => `${branchName}:${parentName ?? ''}`).join('|'),
    Object.entries(snapshot.laneByBranch).map(([branchName, lane]) => `${branchName}:${lane}`).join('|'),
    Object.entries(snapshot.branchUniqueAheadCounts).map(([branchName, count]) => `${branchName}:${count}`).join('|'),
    formatWorktreeSyncSignature(snapshot.worktrees),
  ].join('@@');
}

function toRepoVisualSnapshot(record: ProjectSnapshotRecord | null | undefined): RepoVisualSnapshot | null {
  return record?.payload?.repoVisualSnapshot ?? null;
}

/** After commit, the synthetic `WORKING_TREE` id disappears; copy saved card positions to the new HEAD id. */
function migrateWorkingTreeNodeOverrides(
  overrides: NodePositionOverrides,
  branchName: string,
  newHeadSha: string,
): NodePositionOverrides {
  const next = { ...overrides };
  const candidates = [`${branchName}:WORKING_TREE`, 'WORKING_TREE', ...Object.keys(overrides).filter((key) => key.includes('WORKING_TREE'))] as const;
  let foundKey: string | null = null;
  let point: { x: number; y: number } | null = null;
  for (const key of candidates) {
    const value = next[key];
    if (value && Number.isFinite(value.x) && Number.isFinite(value.y)) {
      foundKey = key;
      point = value;
      break;
    }
  }
  if (!foundKey || !point) return next;
  delete next[foundKey];
  for (const key of candidates) {
    if (key !== foundKey) delete next[key];
  }
  next[`${branchName}:${newHeadSha}`] = point;
  if (!next[newHeadSha]) next[newHeadSha] = point;
  return next;
}

function parseNodePositionOverrides(payloadJson: string | null | undefined): NodePositionOverrides {
  if (!payloadJson) return {};
  try {
    const parsed = JSON.parse(payloadJson) as unknown;
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    const next: NodePositionOverrides = {};
    for (const [nodeId, value] of Object.entries(parsed)) {
      if (!value || typeof value !== 'object' || Array.isArray(value)) continue;
      const point = value as { x?: unknown; y?: unknown };
      const x = typeof point.x === 'number' ? point.x : Number(point.x);
      const y = typeof point.y === 'number' ? point.y : Number(point.y);
      if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
      next[nodeId] = { x, y };
    }
    return next;
  } catch {
    return {};
  }
}

function App() {
  const [repoPath, setRepoPath] = useState<string | null>(null);
  const [repoName, setRepoName] = useState<string>('');
  const [projects, setProjects] = useState<ProjectRecord[]>([]);
  const [projectSnapshots, setProjectSnapshots] = useState<Record<string, ProjectSnapshot>>({});
  const [projectTreeLoading, setProjectTreeLoading] = useState(false);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [mergeNodes, setMergeNodes] = useState<MergeNode[]>([]);
  const [directCommits, setDirectCommits] = useState<DirectCommit[]>([]);
  const [unpushedDirectCommits, setUnpushedDirectCommits] = useState<DirectCommit[]>([]);
  const [unpushedCommitShasByBranch, setUnpushedCommitShasByBranch] = useState<Record<string, string[]>>({});
  const [defaultBranch, setDefaultBranch] = useState<string>('main');
  const [checkedOutRef, setCheckedOutRef] = useState<CheckedOutRef | null>(null);
  const [worktrees, setWorktrees] = useState<WorktreeInfo[]>([]);
  const [removeWorktreeInProgress, setRemoveWorktreeInProgress] = useState(false);
  const [gridSearchQuery, setGridSearchQuery] = useState('');
  const [gridSearchJumpToken, setGridSearchJumpToken] = useState(0);
  const [gridSearchJumpDirection, setGridSearchJumpDirection] = useState<1 | -1>(1);
  const [manuallyOpenedGridClumpsByRepo, setManuallyOpenedGridClumpsByRepo] = useState<RepoScopedClumpState>({});
  const [manuallyClosedGridClumpsByRepo, setManuallyClosedGridClumpsByRepo] = useState<RepoScopedClumpState>({});
  const [gridSearchResultCount, setGridSearchResultCount] = useState<number | null>(null);
  const [gridSearchResultIndex, setGridSearchResultIndex] = useState<number | null>(null);
  const [gridFocusSha, setGridFocusSha] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [mapLoading, setMapLoading] = useState(false);
  const [mapSwitchEpoch, setMapSwitchEpoch] = useState(0);
  const [mapReadyForDisplay, setMapReadyForDisplay] = useState(false);
  const [mapPresentationState, setMapPresentationState] = useState<MapPresentationState>('loading');
  const [error, setError] = useState<string | null>(null);
  // scrollRequest.seq increments on each click so the same branch re-triggers the effect
  const scrollRequest: { branch: Branch; seq: number } | null = null;
  const focusedErrorBranch: Branch | null = null;
  const [githubAuthStatus, setGithubAuthStatus] = useState<GitHubAuthStatus | null>(null);
  const [githubAuthLoading, setGithubAuthLoading] = useState(false);
  const [githubAuthMessage, setGithubAuthMessage] = useState<string | null>(null);
  const [commitSwitchFeedback, setCommitSwitchFeedback] = useState<{
    kind: 'success' | 'error';
    message: string;
  } | null>(null);
  const [isCommitSwitchFeedbackVisible, setIsCommitSwitchFeedbackVisible] = useState(false);
  const [mergeInProgress, setMergeInProgress] = useState(false);
  const [pushInProgress, setPushInProgress] = useState(false);
  const [deleteInProgress, setDeleteInProgress] = useState(false);
  const [branchPromptMeta, setBranchPromptMeta] = useState<Record<string, BranchPromptMeta>>({});
  const [branchCommitPreviews, setBranchCommitPreviews] = useState<Record<string, BranchCommitPreview[]>>({});
  const [branchParentByName, setBranchParentByName] = useState<Record<string, string | null>>({});
  const [laneByBranch, setLaneByBranch] = useState<Record<string, number>>({});
  const [nodePositionOverridesByRepo, setNodePositionOverridesByRepo] = useState<Record<string, NodePositionOverrides>>({});
  /** Monotonic write tokens prevent older failed/successful saves from changing the dirty state for newer edits. */
  const nodePositionPersistVersionByRepoRef = useRef<Record<string, number>>({});
  /** Repo has local card edits not yet flushed to disk; stale `get_repo_node_positions` results must not overwrite them. */
  const userDirtyNodePositionsRef = useRef<Set<string>>(new Set());
  const [branchUniqueAheadCounts, setBranchUniqueAheadCounts] = useState<Record<string, number>>({});
  const [stashes, setStashes] = useState<GitStashEntry[]>([]);
  const [openPRs, setOpenPRs] = useState<OpenPR[]>([]);
  const [stashInProgress, setStashInProgress] = useState(false);
  const [commitInProgress, setCommitInProgress] = useState(false);
  const [stageInProgress, setStageInProgress] = useState(false);
  const [createBranchFromNodeInProgress, setCreateBranchFromNodeInProgress] = useState(false);
  const isMutationBusy =
    commitInProgress ||
    stageInProgress ||
    stashInProgress ||
    pushInProgress ||
    deleteInProgress ||
    mergeInProgress ||
    removeWorktreeInProgress ||
    createBranchFromNodeInProgress;
  const [isMapInteracting, setIsMapInteracting] = useState(false);
  const mapGridOrientation = 'horizontal' as const;
  const [remoteDefaultTipSha] = useState<string | null>(null);
  const [remoteDefaultTipMetadata] = useState<CommitMetadata | null>(null);
  const [remoteDefaultTipParentSha] = useState<string | null>(null);
  const [isRemoteTipHydrated] = useState(false);
  const [isGridDebugOpen, setIsGridDebugOpen] = useState(false);
  const [sidebarWidthPx, setSidebarWidthPx] = useState(SIDEBAR_DEFAULT_WIDTH_PX);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const autoFocusSyncKeyRef = useRef<string | null>(null);
  const focusCameraOnActiveWorktreeRef = useRef<(() => void) | null>(null);
  const isFirstLoadSessionRef = useRef(true);
  const loadRepoRequestIdRef = useRef(0);
  const mapSwitchEpochRef = useRef(0);
  const githubFetchRequestIdRef = useRef(0);
  const projectSnapshotSignatureRef = useRef<Record<string, string>>({});
  const activeSnapshotSignatureRef = useRef<string | null>(null);
  const projectFingerprintRef = useRef<Record<string, string>>({});
  /** Raw `check_project_fingerprint` string last applied to UI (avoids re-sync loops while DB lags). */
  const lastSyncedRepoFingerprintRef = useRef<Record<string, string>>({});
  const lastFingerprintCheckAtRef = useRef<Record<string, number>>({});
  const gitActivityEpochRef = useRef(0);
  const lastHandledGitActivityEpochRef = useRef(0);
  const lastFullGraphRefreshAtRef = useRef<Record<string, number>>({});
  const wasMapInteractingRef = useRef(false);
  const projectHeadStateRef = useRef<Record<string, string>>({});
  const projectQuickStateRef = useRef<Record<string, string>>({});
  /** Lightweight git digest — skips heavy fingerprint when unchanged. */
  const projectSyncPeekRef = useRef<Record<string, string>>({});
  const isRepoSwitchingRef = useRef(false);
  const sidebarDragRef = useRef<{
    startX: number;
    startWidth: number;
    pendingWidth: number;
    pointerId: number;
  } | null>(null);
  const sidebarWidthRef = useRef(SIDEBAR_DEFAULT_WIDTH_PX);
  const sidebarShellRef = useRef<HTMLDivElement | null>(null);

  const branchMetaLoadKeyRef = useRef<string | null>(null);
  const isMapInteractingRef = useRef(false);
  const mapInteractionEpochRef = useRef(0);
  /** Bumped at the start of local git mutations so in-flight background refreshes cannot apply stale snapshots. */
  const repoMutationGenerationRef = useRef(0);
  /** True while a user-initiated git mutation is running through to snapshot apply. */
  const repoMutationInFlightRef = useRef(false);
  /** Optimistic commit HEAD — blocks stale quick-state / DB refresh from regressing the checkout tip. */
  const postCommitProtectedHeadShaRef = useRef<Record<string, string>>({});
  const postCommitProtectTimeoutRef = useRef<Record<string, number>>({});
  /** False while panning and for {@link MAP_REPO_REFRESH_SETTLE_MS} after pan stops. */
  const canApplyRepoRefreshRef = useRef(true);
  const mapRefreshSettleTimeoutRef = useRef<number | null>(null);
  const runRepoRefreshRef = useRef<((reason?: 'graph' | 'local' | 'timer' | 'initial' | 'quick') => void) | null>(null);
  const reconcileInFlightRef = useRef(false);
  const pendingRefreshAfterInteractionRef = useRef(false);
  const reloadRepoSnapshotInFlightRef = useRef(false);
  const reloadRepoSnapshotPendingRef = useRef(false);
  const hasAttemptedAutoRestoreRef = useRef(false);
  const hasHydratedInitialProjectSnapshotsRef = useRef(false);
  /** Cancels stale in-flight `get_repo_node_positions` results when a newer load starts. */
  const loadNodePositionsSeqRef = useRef(0);
  const loadingProjectSnapshotsRef = useRef<Set<string>>(new Set());
  const inflightProjectSnapshotsRef = useRef<Map<string, Promise<RepoVisualSnapshot | null>>>(new Map());
  const [initialProjectSnapshotsReady, setInitialProjectSnapshotsReady] = useState(false);
  const latestBranchesRef = useRef<Branch[]>([]);
  const latestDirectCommitsRef = useRef<DirectCommit[]>([]);
  const latestCheckedOutRef = useRef<CheckedOutRef | null>(null);
  const latestUnpushedDirectCommitsRef = useRef<DirectCommit[]>([]);
  const latestWorktreesRef = useRef<WorktreeInfo[]>([]);
  const latestStashesRef = useRef<GitStashEntry[]>([]);
  const latestUnpushedCommitShasByBranchRef = useRef<Record<string, string[]>>({});
  const latestMergeNodesRef = useRef<MergeNode[]>([]);
  const latestBranchParentByNameRef = useRef<Record<string, string | null>>({});
  const branchHeadByNameRef = useRef<Record<string, string>>({});
  const layoutModelCacheRef = useRef<Map<string, BranchGridLayoutModel>>(new Map());
  const persistedLayoutKeysRef = useRef<Set<string>>(new Set());
  const lastResolvedLayoutModelRef = useRef<BranchGridLayoutModel | null>(null);
  const [hydratedLayoutModel, setHydratedLayoutModel] = useState<BranchGridLayoutModel | null>(null);
  const [hydratedLayoutKey, setHydratedLayoutKey] = useState<string | null>(null);
  /** Bumped when the working tree becomes clean so layout cache keys and MapGrid fully refresh. */
  const [layoutEpoch, setLayoutEpoch] = useState(0);
  const activeRepoScopedKey = repoPath ?? '__no-repo__';
  const persistGridClumps = (opened: RepoScopedClumpState, closed: RepoScopedClumpState) => {
    try {
      const serialized = {
        opened: Object.fromEntries(
          Object.entries(opened).map(([projectPath, clumps]) => [projectPath, Array.from(clumps)]),
        ),
        closed: Object.fromEntries(
          Object.entries(closed).map(([projectPath, clumps]) => [projectPath, Array.from(clumps)]),
        ),
      };
      window.localStorage.setItem(GRID_CLUMPS_STORAGE_KEY, JSON.stringify(serialized));
    } catch {
      // ignore storage failures
    }
  };
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(GRID_CLUMPS_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return;
      const opened: RepoScopedClumpState = {};
      const closed: RepoScopedClumpState = {};
      const asRecord = parsed as {
        opened?: Record<string, string[]>;
        closed?: Record<string, string[]>;
      };
      for (const [projectPath, clumps] of Object.entries(asRecord.opened ?? {})) {
        if (!Array.isArray(clumps)) continue;
        opened[projectPath] = new Set(clumps.filter((value): value is string => typeof value === 'string'));
      }
      for (const [projectPath, clumps] of Object.entries(asRecord.closed ?? {})) {
        if (!Array.isArray(clumps)) continue;
        closed[projectPath] = new Set(clumps.filter((value): value is string => typeof value === 'string'));
      }
      setManuallyOpenedGridClumpsByRepo(opened);
      setManuallyClosedGridClumpsByRepo(closed);
    } catch {
      // ignore storage failures
    }
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      persistGridClumps(manuallyOpenedGridClumpsByRepo, manuallyClosedGridClumpsByRepo);
    }, 500);
    return () => clearTimeout(timer);
  }, [manuallyClosedGridClumpsByRepo, manuallyOpenedGridClumpsByRepo]);
  const manuallyOpenedGridClumps = useMemo(
    () => manuallyOpenedGridClumpsByRepo[activeRepoScopedKey] ?? new Set<string>(),
    [activeRepoScopedKey, manuallyOpenedGridClumpsByRepo],
  );
  const manuallyClosedGridClumps = useMemo(
    () => manuallyClosedGridClumpsByRepo[activeRepoScopedKey] ?? new Set<string>(),
    [activeRepoScopedKey, manuallyClosedGridClumpsByRepo],
  );
  const setManuallyOpenedGridClumps = useCallback(
    (updater: SetStateAction<Set<string>>) => {
      setManuallyOpenedGridClumpsByRepo((previous) => {
        const previousSet = previous[activeRepoScopedKey] ?? new Set<string>();
        const nextSet = typeof updater === 'function' ? updater(previousSet) : updater;
        return { ...previous, [activeRepoScopedKey]: new Set(nextSet) };
      });
    },
    [activeRepoScopedKey],
  );
  const setManuallyClosedGridClumps = useCallback(
    (updater: SetStateAction<Set<string>>) => {
      setManuallyClosedGridClumpsByRepo((previous) => {
        const previousSet = previous[activeRepoScopedKey] ?? new Set<string>();
        const nextSet = typeof updater === 'function' ? updater(previousSet) : updater;
        return { ...previous, [activeRepoScopedKey]: new Set(nextSet) };
      });
    },
    [activeRepoScopedKey],
  );
  const projectCards = useMemo(
    () => projects.map((project) => {
      const isActiveProject = (() => {
        if (!repoPath) return false;
        const left = normalizePath(project.path).toLowerCase();
        const right = normalizePath(repoPath).toLowerCase();
        return left === right;
      })();
      const snapshot = projectSnapshots[project.path] ?? {};
      if (isActiveProject) {
        return {
          ...project,
          name: repoName || snapshot.name || project.name,
          branches,
          mergeNodes,
          directCommits,
          unpushedDirectCommits,
          unpushedCommitShasByBranch,
          checkedOutRef,
          worktrees,
          stashes,
          branchCommitPreviews,
          laneByBranch,
          branchUniqueAheadCounts,
          branchParentByName,
          defaultBranch,
          treeLoaded: snapshot.loaded === true,
        };
      }
      return {
        ...project,
        ...snapshot,
        branches: snapshot.branches ?? [],
        mergeNodes: snapshot.mergeNodes ?? [],
        directCommits: snapshot.directCommits ?? [],
        unpushedDirectCommits: snapshot.unpushedDirectCommits ?? [],
        unpushedCommitShasByBranch: snapshot.unpushedCommitShasByBranch ?? {},
        checkedOutRef: snapshot.checkedOutRef ?? null,
        worktrees: snapshot.worktrees ?? [],
        stashes: snapshot.stashes ?? [],
        branchCommitPreviews: snapshot.branchCommitPreviews ?? {},
        laneByBranch: snapshot.laneByBranch ?? {},
        branchUniqueAheadCounts: snapshot.branchUniqueAheadCounts ?? {},
        defaultBranch: snapshot.defaultBranch ?? project.branchName ?? 'main',
        treeLoaded: snapshot.loaded ?? false,
        branchParentByName: snapshot.branchParentByName ?? {},
      };
    }),
    [
      projects,
      projectSnapshots,
      repoPath,
      checkedOutRef,
      branchParentByName,
      branches,
      mergeNodes,
      directCommits,
      unpushedDirectCommits,
      unpushedCommitShasByBranch,
      worktrees,
      stashes,
      branchCommitPreviews,
      laneByBranch,
      branchUniqueAheadCounts,
      repoName,
      defaultBranch,
    ],
  );
  const gridHudProps = useMemo(
    () => ({
      githubAuthStatus,
      githubAuthLoading,
      onGitHubAuthSetup: handleGitHubAuthSetup,
      gridSearchQuery,
      setGridSearchQuery,
      gridSearchResultCount,
      gridSearchResultIndex,
      setGridSearchJumpDirection,
      setGridSearchJumpToken,
      setIsGridDebugOpen,
      githubAuthMessage,
      commitSwitchFeedback,
      isCommitSwitchFeedbackVisible,
    }),
    [
      commitSwitchFeedback,
      githubAuthLoading,
      githubAuthMessage,
      githubAuthStatus,
      gridSearchQuery,
      gridSearchResultCount,
      gridSearchResultIndex,
      handleGitHubAuthSetup,
      isCommitSwitchFeedbackVisible,
      setGridSearchQuery,
      setGridSearchJumpDirection,
      setGridSearchJumpToken,
      setIsGridDebugOpen,
    ],
  );

  function upsertProjectSnapshot(path: string, snapshot: RepoVisualSnapshot, options?: { force?: boolean }) {
    const signature = getRepoVisualSnapshotSignature(snapshot);
    const force = options?.force === true;
    const previousSignature = projectSnapshotSignatureRef.current[path];
    if (!force && previousSignature === signature) return false;
    projectSnapshotSignatureRef.current = {
      ...projectSnapshotSignatureRef.current,
      [path]: signature,
    };
    setProjectSnapshots((previous) => {
      if (previous[path] === snapshot) return previous;
      return {
        ...previous,
        [path]: snapshot,
      };
    });
    return true;
  }

  const loadNodePositionsForRepo = useCallback(async (targetPath: string) => {
    const normalizedPath = normalizePath(targetPath);
    if (!normalizedPath) return;
    const seq = ++loadNodePositionsSeqRef.current;
    let localOverrides: NodePositionOverrides | null = null;
    try {
      const localPayload = window.localStorage.getItem(nodePositionsStorageKey(normalizedPath));
      if (localPayload) {
        localOverrides = stripWorktreeNodePositionOverrides(parseNodePositionOverrides(localPayload));
        setNodePositionOverridesByRepo((previous) => ({
          ...previous,
          [normalizedPath]: localOverrides ?? {},
        }));
      }
    } catch {
      // The SQLite cache below remains available when localStorage is blocked.
    }
    let payloadJson: string | null = null;
    try {
      payloadJson = await invoke<string | null>('get_repo_node_positions', {
        repoPath: normalizedPath,
      });
    } catch (error) {
      if (localOverrides) return;
      const message = error instanceof Error ? error.message : String(error);
      setCommitSwitchFeedback({
        kind: 'error',
        message: `Could not load saved node positions: ${message}`,
      });
      console.error('Failed to load node positions:', error);
      return;
    }
    if (seq !== loadNodePositionsSeqRef.current) return;
    if (userDirtyNodePositionsRef.current.has(normalizedPath)) return;
    if (localOverrides && Object.keys(localOverrides).length > 0) return;
    const overrides = stripWorktreeNodePositionOverrides(parseNodePositionOverrides(payloadJson));
    setNodePositionOverridesByRepo((previous) => ({
      ...previous,
      [normalizedPath]: overrides,
    }));
    if (Object.keys(overrides).length > 0) {
      try {
        window.localStorage.setItem(nodePositionsStorageKey(normalizedPath), JSON.stringify(overrides));
      } catch {
        // ignore localStorage failures; SQLite remains the durable backend
      }
    }
  }, []);

  const persistRepoNodePositions = useCallback((normalizedPath: string, overrides: NodePositionOverrides) => {
    try {
      window.localStorage.setItem(nodePositionsStorageKey(normalizedPath), JSON.stringify(overrides));
    } catch {
      // ignore localStorage failures; the Tauri write below will report errors
    }
    const version = (nodePositionPersistVersionByRepoRef.current[normalizedPath] ?? 0) + 1;
    nodePositionPersistVersionByRepoRef.current = {
      ...nodePositionPersistVersionByRepoRef.current,
      [normalizedPath]: version,
    };
    void invoke('store_repo_node_positions', {
      repoPath: normalizedPath,
      payloadJson: JSON.stringify(overrides),
    })
      .then(() => {
        if (nodePositionPersistVersionByRepoRef.current[normalizedPath] !== version) return;
        userDirtyNodePositionsRef.current.delete(normalizedPath);
      })
      .catch((error) => {
        if (nodePositionPersistVersionByRepoRef.current[normalizedPath] !== version) return;
        const message = error instanceof Error ? error.message : String(error);
        setCommitSwitchFeedback({
          kind: 'error',
          message: `Could not save node positions: ${message}`,
        });
        console.error('Failed to save node positions:', error);
      });
  }, []);

  const handleNodePositionOverridesChange = useCallback(
    (overrides: NodePositionOverrides) => {
      if (!repoPath) return;
      const normalizedPath = normalizePath(repoPath);
      userDirtyNodePositionsRef.current.add(normalizedPath);
      setNodePositionOverridesByRepo((previous) => ({
        ...previous,
        [normalizedPath]: overrides,
      }));
      persistRepoNodePositions(normalizedPath, overrides);
    },
    [persistRepoNodePositions, repoPath],
  );

  const resetProjectNodePositions = useCallback(
    (targetPath: string) => {
      const normalizedPath = normalizePath(targetPath);
      userDirtyNodePositionsRef.current.delete(normalizedPath);
      nodePositionPersistVersionByRepoRef.current = {
        ...nodePositionPersistVersionByRepoRef.current,
        [normalizedPath]: (nodePositionPersistVersionByRepoRef.current[normalizedPath] ?? 0) + 1,
      };
      setNodePositionOverridesByRepo((previous) => ({
        ...previous,
        [normalizedPath]: {},
      }));
      try {
        window.localStorage.removeItem(nodePositionsStorageKey(normalizedPath));
      } catch {
        // ignore localStorage failures
      }
      void invoke('clear_repo_node_positions', { repoPath: normalizedPath });
    },
    [],
  );

  function fingerprintSignature(fingerprint: RepoRefreshFingerprint): string {
    return [
      fingerprint.repoPath,
      fingerprint.defaultBranch,
      fingerprint.headSha,
      fingerprint.upstreamSha ?? '',
      fingerprint.hasUncommittedChanges ? '1' : '0',
      fingerprint.branchCount,
      fingerprint.worktreeCount,
      fingerprint.stashCount,
    ].join('|');
  }

  function quickStateSignature(state: RepoQuickState): string {
    return [
      state.repoPath,
      state.headSha,
      state.upstreamSha ?? '',
      state.hasUncommittedChanges ? '1' : '0',
    ].join('|');
  }

  function headStateSignature(state: RepoHeadState): string {
    return [
      state.repoPath,
      state.headSha,
      state.upstreamSha ?? '',
    ].join('|');
  }

  function markGitActivityHandled() {
    lastHandledGitActivityEpochRef.current = gitActivityEpochRef.current;
    pendingRefreshAfterInteractionRef.current = false;
  }

  function refreshUiAlreadyMatchesPeek(path: string, peek: RepoSyncPeek): boolean {
    if (!sameRepoPath(repoPath, path)) return false;
    try {
      const parsed = parsePeekSignature(peek.signature);
      const snapshot = getSnapshotForMutation(path);
      const ref = latestCheckedOutRef.current
        ?? snapshot.checkedOutRef;
      if (parsed.headSha && isSnapshotGraphMissingHead(snapshot, parsed.headSha)) return false;
      if (ref?.headSha && isSnapshotGraphMissingHead(snapshot, ref.headSha)) return false;
      return (
        Boolean(ref?.headSha)
        && parsed.headSha === ref.headSha
        && parsed.hasUncommittedChanges === (ref.hasUncommittedChanges ?? false)
        && !isActiveUiBehindPeek(path, peek)
      );
    } catch {
      return false;
    }
  }

  function isGitActivityGraphCaughtUp(path: string, peek: RepoSyncPeek | null): boolean {
    if (!peek || !sameRepoPath(repoPath, path)) return true;
    try {
      if (isActiveUiBehindPeek(path, peek)) return false;
      const parsed = parsePeekSignature(peek.signature);
      if (!parsed.headSha || isWorkingTreeCommitId(parsed.headSha)) return true;
      const snapshot = getSnapshotForMutation(path);
      return snapshotContainsCommitSha(snapshot, parsed.headSha);
    } catch {
      return false;
    }
  }

  function noteGitActivityHandledIfCaughtUp(path: string, peek: RepoSyncPeek | null) {
    if (isGitActivityGraphCaughtUp(path, peek)) {
      markGitActivityHandled();
    }
  }

  function absorbRedundantGitActivityRefresh(path: string, peek: RepoSyncPeek | null): boolean {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || !peek || !refreshUiAlreadyMatchesPeek(path, peek)) return false;
    noteSyncedRepoPeek(normalizedPath, peek.signature);
    markGitActivityHandled();
    return true;
  }

  function noteSyncedFingerprintFromQuickState(path: string, quickState: RepoQuickState) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    const lastSynced = lastSyncedRepoFingerprintRef.current[normalizedPath];
    if (!lastSynced) return;
    let nextFingerprint = withRepoFingerprintDirty(lastSynced, quickState.hasUncommittedChanges);
    if (nextFingerprint && (quickState.upstreamSha ?? '') !== (parseRepoFingerprint(lastSynced)?.upstreamSha ?? '')) {
      nextFingerprint = withRepoFingerprintUpstream(nextFingerprint, quickState.upstreamSha ?? '');
    }
    if (nextFingerprint) {
      noteSyncedRepoFingerprint(normalizedPath, nextFingerprint);
      ackProjectFingerprint(normalizedPath, nextFingerprint);
    }
  }

  function quickStateFromSnapshot(path: string, snapshot: RepoVisualSnapshot): RepoQuickState {
    return {
      repoPath: path,
      headSha: snapshot.checkedOutRef?.headSha ?? '',
      upstreamSha: snapshot.checkedOutRef?.parentSha ?? null,
      hasUncommittedChanges: snapshot.checkedOutRef?.hasUncommittedChanges ?? false,
    };
  }

  function seedProjectSnapshotFromRecord(
    normalizedPath: string,
    record: ProjectSnapshotRecord,
    snapshot: RepoVisualSnapshot,
  ) {
    if (record.fingerprint) {
      lastSyncedRepoFingerprintRef.current = {
        ...lastSyncedRepoFingerprintRef.current,
        [normalizedPath]: record.fingerprint,
      };
      lastFingerprintCheckAtRef.current = {
        ...lastFingerprintCheckAtRef.current,
        [normalizedPath]: Date.now(),
      };
    }
    projectQuickStateRef.current = {
      ...projectQuickStateRef.current,
      [normalizedPath]: quickStateSignature(quickStateFromSnapshot(normalizedPath, snapshot)),
    };
  }

  function noteSyncedRepoFingerprint(path: string, fingerprint: string | null | undefined) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || !fingerprint) return;
    lastSyncedRepoFingerprintRef.current = {
      ...lastSyncedRepoFingerprintRef.current,
      [normalizedPath]: fingerprint,
    };
    lastFingerprintCheckAtRef.current = {
      ...lastFingerprintCheckAtRef.current,
      [normalizedPath]: Date.now(),
    };
    void invoke<RepoSyncPeek>('get_repo_sync_peek', { repoPath: normalizedPath })
      .then((peek) => {
        if (!peek?.signature) return;
        noteSyncedRepoPeek(normalizedPath, peek.signature);
      })
      .catch(() => undefined);
  }

  async function fetchRepoSyncPeek(path: string): Promise<RepoSyncPeek | null> {
    return invoke<RepoSyncPeek>('get_repo_sync_peek', { repoPath: path }).catch(() => null);
  }

  function parsePeekSignature(signature: string) {
    const [headSha, dirty, branchHeadsDigest, worktreeSig, stashSig, headUnpushedCount] = signature.split('@@');
    return {
      headSha: headSha ?? '',
      hasUncommittedChanges: dirty === '1',
      branchHeadsDigest: branchHeadsDigest ?? '',
      worktreeSig: worktreeSig ?? '',
      stashSig: stashSig ?? '',
      headUnpushedCount: headUnpushedCount ?? '0',
    };
  }

  function branchHeadsDigestFromSnapshot(snapshot: RepoVisualSnapshot): string {
    const lines = snapshot.branches.map((branch) => `${branch.name}:${branch.headSha}`);
    if (!lines.some((line) => line.startsWith(`${snapshot.defaultBranch}:`))) {
      const head = snapshot.checkedOutRef?.headSha ?? '';
      if (head) lines.push(`${snapshot.defaultBranch}:${head}`);
    }
    return lines.sort().join('|');
  }

  function isIncomingSnapshotStaleComparedToLive(
    incoming: RepoVisualSnapshot,
    live: RepoVisualSnapshot,
  ): boolean {
    const liveHead = live.checkedOutRef?.headSha ?? null;
    if (!liveHead || isWorkingTreeCommitId(liveHead)) return false;
    if (!snapshotContainsCommitSha(incoming, liveHead) && snapshotContainsCommitSha(live, liveHead)) {
      return true;
    }
    const liveClean = !(live.checkedOutRef?.hasUncommittedChanges ?? false);
    const incomingDirty = incoming.checkedOutRef?.hasUncommittedChanges ?? false;
    if (liveClean && incomingDirty && liveHead === incoming.checkedOutRef?.headSha) {
      return true;
    }
    return false;
  }

  function isSnapshotGraphMissingHead(snapshot: RepoVisualSnapshot, headSha: string | null | undefined): boolean {
    if (!headSha || isWorkingTreeCommitId(headSha)) return false;
    return !snapshotContainsCommitSha(snapshot, headSha);
  }

  function isSnapshotBehindPeek(snapshot: RepoVisualSnapshot, peek: RepoSyncPeek): boolean {
    const parsed = parsePeekSignature(peek.signature);
    if (parsed.headSha && isSnapshotGraphMissingHead(snapshot, parsed.headSha)) return true;
    const ref = snapshot.checkedOutRef;
    if (parsed.headSha && ref?.headSha && parsed.headSha !== ref.headSha) return true;
    if (parsed.hasUncommittedChanges !== (ref?.hasUncommittedChanges ?? false)) return true;
    const branchDigest = branchHeadsDigestFromSnapshot(snapshot);
    if (parsed.branchHeadsDigest && branchDigest && parsed.branchHeadsDigest !== branchDigest) {
      return true;
    }
    const worktreeSig = worktreeListSignature(snapshot.worktrees);
    if (parsed.worktreeSig && worktreeSig && parsed.worktreeSig !== worktreeSig) return true;
    const liveUnpushedCount = String(snapshot.unpushedDirectCommits.length);
    if (parsed.headUnpushedCount !== liveUnpushedCount) return true;
    return false;
  }

  function backgroundSyncCanShortCircuit(gitActivityPending: boolean): boolean {
    return !gitActivityPending;
  }

  function isActiveUiBehindPeek(path: string, peek: RepoSyncPeek): boolean {
    if (!sameRepoPath(repoPath, path)) return false;
    try {
      const snapshot = getSnapshotForMutation(path);
      const ref = latestCheckedOutRef.current ?? snapshot.checkedOutRef;
      const snapshotForCompare = ref === snapshot.checkedOutRef
        ? snapshot
        : { ...snapshot, checkedOutRef: ref };
      return isSnapshotBehindPeek(snapshotForCompare, peek);
    } catch {
      return true;
    }
  }

  function shouldSkipBackgroundSync(path: string, peek: RepoSyncPeek, gitActivityPending: boolean): boolean {
    if (gitActivityPending) return false;
    if (isActiveUiBehindPeek(path, peek)) return false;
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return false;
    try {
      const parsed = parsePeekSignature(peek.signature);
      const ref = latestCheckedOutRef.current
        ?? getSnapshotForMutation(path).checkedOutRef;
      if (
        ref?.headSha
        && parsed.headSha === ref.headSha
        && parsed.hasUncommittedChanges !== (ref.hasUncommittedChanges ?? false)
      ) {
        return false;
      }
    } catch {
      // fall through to cached peek comparison
    }
    const cachedPeek = projectSyncPeekRef.current[normalizedPath];
    const lastSynced = lastSyncedRepoFingerprintRef.current[normalizedPath];
    return Boolean(cachedPeek && lastSynced && cachedPeek === peek.signature);
  }

  function noteSyncedRepoPeek(path: string, peekSignature: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || !peekSignature) return;
    projectSyncPeekRef.current = {
      ...projectSyncPeekRef.current,
      [normalizedPath]: peekSignature,
    };
  }

  function ackProjectFingerprint(path: string, fingerprint: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || !fingerprint) return;
    void invoke('ack_project_fingerprint', { projectId: normalizedPath, fingerprint }).catch((error) => {
      console.warn('Fingerprint ack failed:', error);
    });
  }

  function stashListSignature(stashes: GitStashEntry[]): string {
    return stashes.map((stash) => `${stash.index}:${stash.message}:${stash.branch ?? ''}`).join('|');
  }

  function worktreeListSignature(worktrees: WorktreeInfo[]): string {
    return formatWorktreeSyncSignature(worktrees);
  }

  function fingerprintFromSnapshot(path: string, defaultBranchName: string, snapshot: RepoVisualSnapshot): RepoRefreshFingerprint {
    return {
      repoPath: path,
      defaultBranch: defaultBranchName,
      headSha: snapshot.checkedOutRef?.headSha ?? '',
      upstreamSha: snapshot.checkedOutRef?.parentSha ?? null,
      hasUncommittedChanges: snapshot.checkedOutRef?.hasUncommittedChanges ?? false,
      branchCount: snapshot.branches.length,
      worktreeCount: snapshot.worktrees.length,
      stashCount: snapshot.stashes.length,
    };
  }

  useEffect(() => {
    try {
      const raw = localStorage.getItem(PROJECTS_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return;
      const next = parsed.filter((project): project is ProjectRecord => (
        typeof project === 'object' &&
        project !== null &&
        typeof project.path === 'string' &&
        typeof project.name === 'string' &&
        typeof project.lastOpenedAt === 'number'
      ));
      setProjects(next.slice(0, MAX_PROJECTS));
    } catch {
      setProjects([]);
    }
  }, []);

  useEffect(() => {
    if (hasAttemptedAutoRestoreRef.current) return;
    if (repoPath) return;
    if (projects.length === 0) return;
    if (!initialProjectSnapshotsReady) return;

    const storedActiveProjectPath = (() => {
      try {
        return window.localStorage.getItem(ACTIVE_PROJECT_STORAGE_KEY);
      } catch {
        return null;
      }
    })();
    const restoredProject = storedActiveProjectPath
      ? projects.find((project) => normalizePath(project.path).toLowerCase() === normalizePath(storedActiveProjectPath).toLowerCase())
      : null;

    hasAttemptedAutoRestoreRef.current = true;
    void loadRepo(restoredProject?.path ?? projects[0]!.path);
  }, [initialProjectSnapshotsReady, projects, repoPath]);

  useEffect(() => {
    if (!repoPath) return;
    try {
      window.localStorage.setItem(ACTIVE_PROJECT_STORAGE_KEY, repoPath);
    } catch {
      // ignore storage failures
    }
  }, [repoPath]);

  const mergeTargetBranchByCommitSha = useMemo(
    () =>
      mergeNodes.reduce<Record<string, string>>((map, node) => {
        map[node.targetCommitSha] = node.targetBranch;
        return map;
      }, {}),
    [mergeNodes],
  );

  useEffect(() => {
    if (!repoPath) return;
    if (isRepoSwitchingRef.current) return;
    setProjectSnapshots((previous) => ({
      ...previous,
      [repoPath]: {
        path: repoPath,
        name: repoName || basenameFromPath(repoPath),
        branches,
        mergeNodes,
        directCommits,
        unpushedDirectCommits,
        mergeTargetBranchByCommitSha: mergeNodes.reduce<Record<string, string>>((map, node) => {
          map[node.targetCommitSha] = node.targetBranch;
          return map;
        }, {}),
        unpushedCommitShasByBranch,
        checkedOutRef,
        worktrees,
        stashes,
        branchCommitPreviews,
        branchParentByName,
        laneByBranch,
        branchUniqueAheadCounts,
        defaultBranch,
        loaded: true,
        cacheSchemaVersion: previous[repoPath]?.cacheSchemaVersion ?? 1,
        updatedAtMs: previous[repoPath]?.updatedAtMs ?? Date.now(),
      },
    }));
  }, [
    repoPath,
    repoName,
    branches,
    mergeNodes,
    directCommits,
    unpushedDirectCommits,
    mergeTargetBranchByCommitSha,
    unpushedCommitShasByBranch,
    checkedOutRef,
    worktrees,
    stashes,
    branchCommitPreviews,
    branchParentByName,
    laneByBranch,
    branchUniqueAheadCounts,
    defaultBranch,
  ]);

  async function loadProjectSnapshot(path: string, forceRefresh = false): Promise<RepoVisualSnapshot | null> {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return null;
    if (!forceRefresh && projectSnapshots[normalizedPath]?.loaded) {
      return projectSnapshots[normalizedPath] ?? null;
    }
    const inflight = inflightProjectSnapshotsRef.current.get(normalizedPath);
    if (inflight) return inflight;

    const task = (async (): Promise<RepoVisualSnapshot | null> => {
      if (loadingProjectSnapshotsRef.current.has(normalizedPath)) return projectSnapshots[normalizedPath] ?? null;
      loadingProjectSnapshotsRef.current.add(normalizedPath);
      if (normalizedPath === repoPath) {
        setProjectTreeLoading(true);
      }
      try {
        let record: ProjectSnapshotRecord | null = null;
        if (forceRefresh) {
          record = await invoke<ProjectSnapshotRecord>('add_project_and_ingest', {
            repoPath: normalizedPath,
            forceRefresh: true,
          });
        } else {
          record = await invoke<ProjectSnapshotRecord | null>('load_project_snapshot', {
            projectId: normalizedPath,
          });
          if (!record) {
            record = await invoke<ProjectSnapshotRecord>('add_project_and_ingest', {
              repoPath: normalizedPath,
              forceRefresh: false,
            });
          }
        }
        const snapshot = toRepoVisualSnapshot(record);
        if (!snapshot) {
          throw new Error('Missing repo visual snapshot payload');
        }
        upsertProjectSnapshot(normalizedPath, snapshot);
        seedProjectSnapshotFromRecord(normalizedPath, record, snapshot);
        return snapshot;
      } finally {
        loadingProjectSnapshotsRef.current.delete(normalizedPath);
        if (normalizedPath === repoPath && loadingProjectSnapshotsRef.current.size === 0) {
          setProjectTreeLoading(false);
        }
      }
    })();

    inflightProjectSnapshotsRef.current.set(normalizedPath, task);
    try {
      return await task;
    } finally {
      inflightProjectSnapshotsRef.current.delete(normalizedPath);
    }
  }

  useEffect(() => {
    if (projects.length === 0) {
      setInitialProjectSnapshotsReady(true);
      return;
    }

    setInitialProjectSnapshotsReady(true);

    let isDisposed = false;
    const shouldColdRefresh = false;
    if (shouldColdRefresh) {
      setProjectTreeLoading(true);
    }

    void (async () => {
      try {
        const storedActivePath = (() => {
          try {
            return window.localStorage.getItem(ACTIVE_PROJECT_STORAGE_KEY);
          } catch {
            return null;
          }
        })();
        const activePath = (storedActivePath
          ? projects.find(
              (project) =>
                normalizePath(project.path).toLowerCase() === normalizePath(storedActivePath).toLowerCase(),
            )?.path
          : projects[0]?.path) ?? projects[0]?.path;
        const otherProjects = projects.filter(
          (project) => !activePath || normalizePath(project.path) !== normalizePath(activePath),
        );
        const hydrateProject = async (projectPath: string, watch = false) => {
          await loadProjectSnapshot(projectPath, shouldColdRefresh);
          if (watch) {
            await invoke('watch_repo', { repoPath: projectPath }).catch(console.error);
          }
        };
        if (activePath) {
          await hydrateProject(activePath, true);
        }
        if (isDisposed) return;
        if (shouldColdRefresh) hasHydratedInitialProjectSnapshotsRef.current = true;
        setProjectTreeLoading(false);
        if (otherProjects.length > 0) {
          void (async () => {
            await Promise.all(otherProjects.map((project) => hydrateProject(project.path, false)));
            if (isDisposed) return;
            await Promise.all(
              otherProjects.map((project) =>
                invoke('watch_repo', { repoPath: project.path }).catch(console.error),
              ),
            );
          })();
        }
      } catch (error) {
        console.error('Failed to preload project snapshots:', error);
        if (!isDisposed) setProjectTreeLoading(false);
      }
    })();

    return () => {
      isDisposed = true;
    };
  }, [projects]);

  useEffect(() => {
    let isDisposed = false;
    let unlisten: (() => void) | null = null;

    listen<GitActivityEventPayload>('git-activity', (event) => {
      if (isDisposed) return;
      if (event.payload.kind === 'local') return;
      const changedPath = normalizePath(event.payload.repoPath);
      if (!changedPath || sameRepoPath(changedPath, repoPath)) return;
      // Keep sidebar/project cache DB-first; active repo updates use snapshot refresh commands.
      void loadProjectSnapshot(changedPath, false);
    }).then((fn) => {
      if (isDisposed) fn();
      else unlisten = fn;
    }).catch(console.error);

    return () => {
      isDisposed = true;
      if (unlisten) unlisten();
    };
  }, [repoPath]);

  useEffect(() => {
    if (mapLoading || isRepoSwitchingRef.current) return;
    if (projects.length === 0) return;
    let isDisposed = false;

    const hydrateProjectLayout = async (project: ProjectRecord, allowCompute: boolean) => {
      const normalizedPath = normalizePath(project.path);
      const snapshot = projectSnapshots[normalizedPath];
      if (!snapshot?.loaded) return;
      const projectOpenedClumps = manuallyOpenedGridClumpsByRepo[normalizedPath] ?? new Set<string>();
      const projectClosedClumps = manuallyClosedGridClumpsByRepo[normalizedPath] ?? new Set<string>();
      const layoutKey = makeLayoutCacheKey(
        normalizedPath,
        mapGridOrientation,
        projectOpenedClumps,
        projectClosedClumps,
      );
      if (layoutModelCacheRef.current.has(layoutKey)) return;
      const payloadJson = await invoke<string | null>('get_repo_layout_snapshot', {
        repoPath: normalizedPath,
        layoutKey,
      }).catch(() => null);
      if (isDisposed) return;
      if (payloadJson) {
        try {
          const parsed = JSON.parse(payloadJson);
          const hydrated = hydrateBranchGridLayoutModel(parsed);
          layoutModelCacheRef.current.set(layoutKey, hydrated);
          persistedLayoutKeysRef.current.add(layoutKey);
          return;
        } catch {
          // fall through to recompute when persisted payload is invalid
        }
      }
      if (!allowCompute) return;
      const computedState = deriveRepoVisualState({
        branches: snapshot.branches,
        mergeNodes: snapshot.mergeNodes,
        directCommits: snapshot.directCommits,
        unpushedDirectCommits: snapshot.unpushedDirectCommits,
        unpushedCommitShasByBranch: snapshot.unpushedCommitShasByBranch ?? {},
        defaultBranch: snapshot.defaultBranch,
        branchCommitPreviews: snapshot.branchCommitPreviews,
        branchParentByName: snapshot.branchParentByName,
        branchUniqueAheadCounts: snapshot.branchUniqueAheadCounts,
        checkedOutRef: snapshot.checkedOutRef,
        worktrees: snapshot.worktrees,
        currentRepoPath: normalizedPath,
        stashes: snapshot.stashes,
        manuallyOpenedClumps: projectOpenedClumps,
        manuallyClosedClumps: projectClosedClumps,
        gridSearchQuery: '',
        gridFocusSha: null,
        orientation: mapGridOrientation,
      });
      const computedLayoutModel = computedState.sharedGridLayoutModel;
      layoutModelCacheRef.current.set(layoutKey, computedLayoutModel);
      persistedLayoutKeysRef.current.add(layoutKey);
      const serialized = JSON.stringify(serializeBranchGridLayoutModel(computedLayoutModel));
      void invoke('store_repo_layout_snapshot', {
        repoPath: normalizedPath,
        layoutKey,
        payloadJson: serialized,
      }).catch(() => {
        persistedLayoutKeysRef.current.delete(layoutKey);
      });
      await yieldToPaint();
    };

    void (async () => {
      const activeProject = repoPath
        ? projects.find((project) => sameRepoPath(project.path, repoPath))
        : null;
      const deferredProjects = activeProject
        ? projects.filter((project) => !sameRepoPath(project.path, activeProject.path))
        : projects;

      if (activeProject) {
        await hydrateProjectLayout(activeProject, false);
      }
      if (isDisposed) return;

      for (const project of deferredProjects) {
        if (isDisposed) return;
        await hydrateProjectLayout(project, false);
      }
    })();
    return () => {
      isDisposed = true;
    };
  }, [
    projects,
    projectSnapshots,
    mapGridOrientation,
    manuallyOpenedGridClumpsByRepo,
    manuallyClosedGridClumpsByRepo,
    mapLoading,
    repoPath,
  ]);

  function persistProject(project: ProjectRecord) {
    setProjects((previous) => {
      const normalizedPath = normalizePath(project.path);
      if (!normalizedPath) return previous;
      const normalizedProject: ProjectRecord = {
        ...project,
        path: normalizedPath,
      };
      const next = previous.some((item) => item.path === normalizedPath)
        ? previous.map((item) => (item.path === normalizedPath ? normalizedProject : item))
        : [...previous, normalizedProject];
      const trimmed = next.slice(-MAX_PROJECTS);
      try {
        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(trimmed));
      } catch {
        // ignore storage failures
      }
      return trimmed;
    });
  }

  function reorderProjects(nextOrder: string[]) {
    setProjects((previous) => {
      const byPath = new Map(previous.map((project) => [project.path, project]));
      const next: ProjectRecord[] = [];
      for (const path of nextOrder) {
        const project = byPath.get(path);
        if (!project) continue;
        next.push(project);
        byPath.delete(path);
      }
      for (const project of previous) {
        if (byPath.has(project.path)) next.push(project);
      }
      try {
        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(next.slice(0, MAX_PROJECTS)));
      } catch {
        // ignore storage failures
      }
      return next.slice(0, MAX_PROJECTS);
    });
  }

  async function addProject(path: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    setError(null);
    try {
      const [info, resolvedDefaultBranch] = await Promise.all([
        invoke<{ name: string; path: string }>('get_repo_info', { repoPath: normalizedPath }),
        invoke<string>('get_default_branch', { repoPath: normalizedPath }).catch(() => 'main'),
      ]);
      persistProject({
        path: normalizedPath,
        name: info.name,
        lastOpenedAt: Date.now(),
        branchName: resolvedDefaultBranch,
      });
      await loadProjectSnapshot(normalizedPath, false);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  function removeProject(path: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    setProjects((previous) => {
      const next = previous.filter((project) => project.path !== normalizedPath);
      try {
        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage failures
      }
      return next;
    });
    try {
      if (repoPath && normalizePath(repoPath).toLowerCase() === normalizedPath.toLowerCase()) {
        window.localStorage.removeItem(ACTIVE_PROJECT_STORAGE_KEY);
      }
    } catch {
      // ignore storage failures
    }
    setProjectSnapshots((previous) => {
      if (!(normalizedPath in previous)) return previous;
      const next = { ...previous };
      delete next[normalizedPath];
      return next;
    });
    userDirtyNodePositionsRef.current.delete(normalizedPath);
    if (repoPath === normalizedPath) {
      const nextPath = projects.find((project) => project.path !== normalizedPath)?.path ?? null;
      if (nextPath) {
        void loadRepo(nextPath);
      } else {
        setRepoPath(null);
        setRepoName('');
        setBranches([]);
        setMergeNodes([]);
        setDirectCommits([]);
        setUnpushedDirectCommits([]);
        setUnpushedCommitShasByBranch({});
        setCheckedOutRef(null);
        setWorktrees([]);
        setStashes([]);
        setBranchCommitPreviews({});
        setBranchParentByName({});
        setLaneByBranch({});
        setBranchUniqueAheadCounts({});
      }
    }
  }

  async function revealProjectInFinder(path: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    try {
      await invoke('reveal_in_finder', { path: normalizedPath });
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  const handleAddProject = () => {
    void (async () => {
      try {
        const selected = await open({ directory: true, multiple: false, defaultPath: projects[0]?.path ?? undefined });
        if (typeof selected === 'string' && selected) await addProject(selected);
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      }
    })();
  };

  async function fetchAllMergeNodes(path: string, branch: string): Promise<MergeNode[]> {
    const perPage = 100;
    const all: MergeNode[] = [];
    let page = 0;

    while (true) {
      const result = await invoke<{ nodes: MergeNode[]; hasMore: boolean }>('get_merge_nodes', {
        repoPath: path,
        branch,
        page,
        perPage,
      });

      all.push(...result.nodes);
      if (!result.hasMore || result.nodes.length === 0) break;
      page += 1;
    }

    return all;
  }

  async function fetchAllMergeNodesForBranches(path: string, branchList: Branch[], defaultBranchName: string): Promise<MergeNode[]> {
    const normalizedBranchNames = Array.from(new Set([defaultBranchName, ...branchList.map((branch) => branch.name)].filter((branchName) => !!branchName)));
    if (normalizedBranchNames.length === 0) return [];
    const branchMergeLists = await Promise.all(
      normalizedBranchNames.map((branchName) => fetchAllMergeNodes(path, branchName).catch(() => [])),
    );
    const dedupedByMergeAndTarget = new Map<string, MergeNode>();
    for (const list of branchMergeLists) {
      for (const node of list) {
        const dedupeKey = `${node.targetCommitSha}:${node.targetBranch}`;
        if (!dedupedByMergeAndTarget.has(dedupeKey)) {
          dedupedByMergeAndTarget.set(dedupeKey, node);
        }
      }
    }
    return Array.from(dedupedByMergeAndTarget.values());
  }

  async function refreshRepoGitState(
    path: string,
    resolvedDefaultBranch?: string,
    options?: {
      includeMergeNodes?: boolean;
      includeUnpushedShaMap?: boolean;
      includeWorktrees?: boolean;
      includeStashes?: boolean;
      skipCheckedOutRef?: boolean;
    },
  ) {
    const branchDef = resolvedDefaultBranch ?? defaultBranch;
    const includeMergeNodes = options?.includeMergeNodes ?? true;
    const includeUnpushedShaMap = options?.includeUnpushedShaMap ?? true;
    const includeWorktrees = options?.includeWorktrees ?? true;
    const includeStashes = options?.includeStashes ?? true;
    const [branchList, directResult, unpushedDirectResult, confirmedCheckedOutRef, worktreeList, stashList] = await Promise.all([
      invoke<Branch[]>('get_branches', { repoPath: path }),
      invoke<DirectCommit[]>('get_all_repo_commits', { repoPath: path }),
      invoke<DirectCommit[]>('get_unpushed_direct_commits', {
        repoPath: path,
        branch: branchDef,
      }).catch(() => []),
      invoke<CheckedOutRef>('get_checked_out_ref', {
        repoPath: path,
      }).catch(() => null),
      includeWorktrees ? invoke<WorktreeInfo[]>('list_worktrees', { repoPath: path }).catch(() => []) : Promise.resolve(worktrees),
      includeStashes ? invoke<GitStashEntry[]>('list_stashes', { repoPath: path }).catch(() => []) : Promise.resolve(stashes),
    ]);
    const nodes = includeMergeNodes ? await fetchAllMergeNodesForBranches(path, branchList, branchDef) : mergeNodes;
    const unpushedShaEntries = includeUnpushedShaMap
      ? await Promise.all(
          [branchDef, ...branchList.map((branch) => branch.name)].map(async (branchName) => {
            const shas = await invoke<string[]>('get_branch_unpushed_commit_shas', {
              repoPath: path,
              branch: branchName,
            }).catch(() => []);
            return [branchName, shas] as const;
          }),
        )
      : Object.entries(unpushedCommitShasByBranch);
    startTransition(() => {
      setBranches(branchList);
      setMergeNodes(nodes);
      setDirectCommits(directResult);
      setUnpushedDirectCommits(unpushedDirectResult);
      setUnpushedCommitShasByBranch(Object.fromEntries(unpushedShaEntries));
      if (!options?.skipCheckedOutRef) {
        setCheckedOutRef(confirmedCheckedOutRef);
      }
      setWorktrees(worktreeList);
      setStashes(stashList);
    });
  }

  function beginRepoMutation() {
    repoMutationGenerationRef.current += 1;
    repoMutationInFlightRef.current = true;
  }

  function endRepoMutation() {
    repoMutationInFlightRef.current = false;
    pendingRefreshAfterInteractionRef.current = false;
  }

  function buildActiveRepoSnapshot(path: string): RepoVisualSnapshot {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) {
      throw new Error(`Invalid repo path: ${path}`);
    }
    const cached = projectSnapshots[normalizedPath];
    return {
      path: normalizedPath,
      name: repoName,
      defaultBranch,
      branches,
      mergeNodes,
      directCommits,
      unpushedDirectCommits,
      mergeTargetBranchByCommitSha,
      unpushedCommitShasByBranch,
      checkedOutRef,
      worktrees,
      stashes,
      branchCommitPreviews,
      branchParentByName,
      laneByBranch,
      branchUniqueAheadCounts,
      loaded: true,
      cacheSchemaVersion: cached?.cacheSchemaVersion ?? 1,
      updatedAtMs: Date.now(),
    };
  }

  function getSnapshotForMutation(path: string): RepoVisualSnapshot {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) {
      throw new Error(`Invalid repo path: ${path}`);
    }
    if (sameRepoPath(repoPath, normalizedPath)) {
      const snapshot = buildActiveRepoSnapshot(normalizedPath);
      if (latestCheckedOutRef.current) {
        snapshot.checkedOutRef = latestCheckedOutRef.current;
      }
      if (latestWorktreesRef.current.length > 0) {
        snapshot.worktrees = latestWorktreesRef.current;
      }
      return snapshot;
    }
    const cached = projectSnapshots[normalizedPath];
    if (cached?.loaded) {
      return {
        ...cached,
        branches: [...cached.branches],
        mergeNodes: [...cached.mergeNodes],
        directCommits: [...cached.directCommits],
        unpushedDirectCommits: [...cached.unpushedDirectCommits],
        worktrees: [...cached.worktrees],
        stashes: [...cached.stashes],
        branchCommitPreviews: { ...cached.branchCommitPreviews },
        branchParentByName: { ...cached.branchParentByName },
        laneByBranch: { ...cached.laneByBranch },
        branchUniqueAheadCounts: { ...cached.branchUniqueAheadCounts },
        unpushedCommitShasByBranch: { ...cached.unpushedCommitShasByBranch },
        mergeTargetBranchByCommitSha: { ...cached.mergeTargetBranchByCommitSha },
        checkedOutRef: cached.checkedOutRef ? { ...cached.checkedOutRef } : null,
      };
    }
    throw new Error(`No snapshot available for ${normalizedPath}`);
  }

  function isPostCommitProtectionActive(path: string): boolean {
    const normalizedPath = normalizePath(path);
    return Boolean(normalizedPath && postCommitProtectedHeadShaRef.current[normalizedPath]);
  }

  function invalidateRepoLayoutCacheForPath(path: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    for (const key of layoutModelCacheRef.current.keys()) {
      if (key.split('|')[1] === normalizedPath) {
        layoutModelCacheRef.current.delete(key);
      }
    }
    for (const key of persistedLayoutKeysRef.current) {
      if (key.split('|')[1] === normalizedPath) {
        persistedLayoutKeysRef.current.delete(key);
      }
    }
    if (sameRepoPath(repoPath, normalizedPath)) {
      setHydratedLayoutModel(null);
      setHydratedLayoutKey(null);
    }
  }

  /** Drop cached layout/clumps and recompute the map from current React graph state. */
  function redrawRepoGraph(path: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    invalidateRepoLayoutCacheForPath(normalizedPath);
    lastResolvedLayoutModelRef.current = null;
    setLayoutEpoch((epoch) => epoch + 1);
    if (!sameRepoPath(repoPath, normalizedPath)) return;
    setNodePositionOverridesByRepo((previous) => {
      const current = previous[normalizedPath] ?? {};
      const stripped = stripWorktreeNodePositionOverrides(current);
      if (stripped === current) return previous;
      persistRepoNodePositions(normalizedPath, stripped);
      return { ...previous, [normalizedPath]: stripped };
    });
  }

  async function syncCheckedOutRefFromQuickGitState(path: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || !sameRepoPath(repoPath, normalizedPath)) return;
    const quickState = await invoke<RepoQuickState>('get_repo_quick_state', { repoPath: path }).catch(() => null);
    if (!quickState) return;
    flushSync(() => {
      setCheckedOutRef((previous) => {
        if (!previous) return previous;
        let snapshot: RepoVisualSnapshot;
        try {
          snapshot = getSnapshotForMutation(normalizedPath);
        } catch {
          return previous;
        }
        const merged = mergeCheckedOutRefWithQuickState(previous, quickState, snapshot);
        if (
          previous.headSha === merged.headSha
          && previous.hasUncommittedChanges === merged.hasUncommittedChanges
          && (previous.parentSha ?? null) === (merged.parentSha ?? null)
        ) {
          return previous;
        }
        latestCheckedOutRef.current = merged;
        return merged;
      });
    });
    projectQuickStateRef.current = {
      ...projectQuickStateRef.current,
      [normalizedPath]: quickStateSignature(quickState),
    };
  }

  function bustRepoSyncCachesForPath(path: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    if (normalizedPath in lastSyncedRepoFingerprintRef.current) {
      const next = { ...lastSyncedRepoFingerprintRef.current };
      delete next[normalizedPath];
      lastSyncedRepoFingerprintRef.current = next;
    }
    if (normalizedPath in projectSyncPeekRef.current) {
      const next = { ...projectSyncPeekRef.current };
      delete next[normalizedPath];
      projectSyncPeekRef.current = next;
    }
    if (normalizedPath in lastFingerprintCheckAtRef.current) {
      const next = { ...lastFingerprintCheckAtRef.current };
      delete next[normalizedPath];
      lastFingerprintCheckAtRef.current = next;
    }
    if (normalizedPath in projectQuickStateRef.current) {
      const next = { ...projectQuickStateRef.current };
      delete next[normalizedPath];
      projectQuickStateRef.current = next;
    }
    if (normalizedPath in lastFullGraphRefreshAtRef.current) {
      const next = { ...lastFullGraphRefreshAtRef.current };
      delete next[normalizedPath];
      lastFullGraphRefreshAtRef.current = next;
    }
  }

  function incomingSnapshotDropsProtectedHead(path: string, incoming: RepoVisualSnapshot): boolean {
    const normalizedPath = normalizePath(path);
    const guard = normalizedPath ? postCommitProtectedHeadShaRef.current[normalizedPath] : undefined;
    if (!guard) return false;
    try {
      const live = getSnapshotForMutation(normalizedPath);
      if (!snapshotContainsCommitSha(live, guard)) return false;
      return !snapshotContainsCommitSha(incoming, guard);
    } catch {
      return false;
    }
  }

  async function releasePostCommitProtectionAfterReconcile(
    path: string,
    protectedSha: string,
    attempt = 0,
  ) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || postCommitProtectedHeadShaRef.current[normalizedPath] !== protectedSha) {
      return;
    }
    try {
      const snapshot = getSnapshotForMutation(normalizedPath);
      if (!snapshotContainsCommitSha(snapshot, protectedSha)) {
        if (attempt >= POST_COMMIT_RELEASE_MAX_ATTEMPTS) {
          clearPostCommitProtectionForPath(normalizedPath);
          if (sameRepoPath(repoPath, normalizedPath)) {
            gitActivityEpochRef.current += 1;
            void runRepoRefreshRef.current?.('graph');
          }
          return;
        }
        window.setTimeout(() => {
          void releasePostCommitProtectionAfterReconcile(normalizedPath, protectedSha, attempt + 1);
        }, 2000);
        return;
      }
    } catch {
      return;
    }
    clearPostCommitProtectionForPath(normalizedPath);
    if (sameRepoPath(repoPath, normalizedPath)) {
      focusCameraOnActiveWorktreeRef.current?.();
      if (pendingRefreshAfterInteractionRef.current) {
        pendingRefreshAfterInteractionRef.current = false;
        void runRepoRefreshRef.current?.('quick');
      }
    }
  }

  function schedulePostCommitGraphReconcile(path: string, protectedSha: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    pendingRefreshAfterInteractionRef.current = false;
    invalidateRepoLayoutCacheForPath(normalizedPath);
    if (sameRepoPath(repoPath, normalizedPath)) {
      try {
        const live = getSnapshotForMutation(normalizedPath);
        if (snapshotContainsCommitSha(live, protectedSha)) {
          clearPostCommitProtectionForPath(normalizedPath);
          setLayoutEpoch((epoch) => epoch + 1);
          autoFocusSyncKeyRef.current = null;
          focusCameraOnActiveWorktreeRef.current?.();
          return;
        }
      } catch {
        // fall through to graph refresh when live snapshot is unavailable
      }
    }
    if (!sameRepoPath(repoPath, normalizedPath)) return;
    setLayoutEpoch((epoch) => epoch + 1);
    autoFocusSyncKeyRef.current = null;
    gitActivityEpochRef.current += 1;
    void runRepoRefreshRef.current?.('graph').then(() => {
      void releasePostCommitProtectionAfterReconcile(normalizedPath, protectedSha);
    });
  }

  function clearPostCommitProtectionTimeout(path: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    const timeoutId = postCommitProtectTimeoutRef.current[normalizedPath];
    if (timeoutId == null) return;
    window.clearTimeout(timeoutId);
    delete postCommitProtectTimeoutRef.current[normalizedPath];
  }

  function clearPostCommitProtectionForPath(path: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    clearPostCommitProtectionTimeout(normalizedPath);
    const next = { ...postCommitProtectedHeadShaRef.current };
    delete next[normalizedPath];
    postCommitProtectedHeadShaRef.current = next;
  }

  function protectPostCommitHead(path: string, headSha: string | null | undefined) {
    const normalizedPath = normalizePath(path);
    const sha = headSha?.trim();
    if (!normalizedPath || !sha || isWorkingTreeCommitId(sha)) return;
    if (postCommitProtectedHeadShaRef.current[normalizedPath] === sha) return;
    clearPostCommitProtectionTimeout(normalizedPath);
    postCommitProtectedHeadShaRef.current = {
      ...postCommitProtectedHeadShaRef.current,
      [normalizedPath]: sha,
    };
    postCommitProtectTimeoutRef.current[normalizedPath] = window.setTimeout(() => {
      delete postCommitProtectTimeoutRef.current[normalizedPath];
      if (postCommitProtectedHeadShaRef.current[normalizedPath] !== sha) return;
      schedulePostCommitGraphReconcile(normalizedPath, sha);
    }, POST_COMMIT_HEAD_PROTECT_MS);
  }

  function shouldRejectRegressionFromProtectedHead(
    path: string,
    proposedHeadSha: string | null | undefined,
  ): boolean {
    const normalizedPath = normalizePath(path);
    const guard = normalizedPath ? postCommitProtectedHeadShaRef.current[normalizedPath] : undefined;
    if (!guard || !proposedHeadSha || shaMatches(proposedHeadSha, guard)) return false;
    try {
      const snapshot = getSnapshotForMutation(normalizedPath);
      if (snapshotContainsCommitSha(snapshot, guard)) {
        return !shaMatches(proposedHeadSha, guard);
      }
      const liveHead = snapshot.checkedOutRef?.headSha ?? null;
      if (liveHead && shaMatches(proposedHeadSha, liveHead)) {
        return false;
      }
      return !shaMatches(proposedHeadSha, guard);
    } catch {
      return false;
    }
  }

  function incomingSnapshotMissingProtectedHead(path: string, incoming: RepoVisualSnapshot): boolean {
    const normalizedPath = normalizePath(path);
    const guard = normalizedPath ? postCommitProtectedHeadShaRef.current[normalizedPath] : undefined;
    if (!guard) return false;
    try {
      const live = getSnapshotForMutation(normalizedPath);
      if (!snapshotContainsCommitSha(live, guard)) return false;
      return !snapshotContainsCommitSha(incoming, guard);
    } catch {
      return false;
    }
  }

  function outcomeAllowedDuringPostCommitProtection(outcome: RepoMutationOutcome): boolean {
    return outcome.kind === 'markDirty'
      || outcome.kind === 'discardDirty'
      || outcome.kind === 'upstreamSync'
      || outcome.kind === 'worktreeSync'
      || outcome.kind === 'checkout';
  }

  function shouldBlockIncomingSnapshotApply(path: string, incoming: RepoVisualSnapshot): boolean {
    if (incomingSnapshotMissingProtectedHead(path, incoming)) return true;
    return (
      shouldRejectRegressionFromProtectedHead(path, incoming.checkedOutRef?.headSha ?? null)
      || incomingSnapshotDropsProtectedHead(path, incoming)
    );
  }

  async function syncPostCommitProtectionFromQuickState(path: string) {
    const gitActivityPending = gitActivityEpochRef.current !== lastHandledGitActivityEpochRef.current;
    if (!gitActivityPending) return;
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    const quickState = await invoke<RepoQuickState>('get_repo_quick_state', { repoPath: normalizedPath }).catch(
      () => null,
    );
    const quickHead = quickState?.headSha?.trim();
    if (!quickHead || isWorkingTreeCommitId(quickHead)) return;
    if (postCommitProtectedHeadShaRef.current[normalizedPath] === quickHead) return;
    let liveHead: string | null = null;
    try {
      liveHead = getSnapshotForMutation(normalizedPath).checkedOutRef?.headSha ?? null;
    } catch {
      return;
    }
    if (!liveHead || quickHead === liveHead) return;
    protectPostCommitHead(normalizedPath, quickHead);
    invalidateRepoLayoutCacheForPath(normalizedPath);
  }

  function mergeOptionsForRepo(path: string): MergeCheckedOutRefOptions | undefined {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return undefined;
    const guard = postCommitProtectedHeadShaRef.current[normalizedPath];
    return guard ? { protectedHeadSha: guard } : undefined;
  }

  function mutationChangesWorktreeLayout(
    previous: RepoVisualSnapshot | null,
    next: RepoVisualSnapshot,
  ): boolean {
    if ((previous?.worktrees.length ?? 0) === 0 && next.worktrees.length === 0) return false;
    const prevRef = previous?.checkedOutRef;
    const nextRef = next.checkedOutRef;
    if (!prevRef || !nextRef) return next.worktrees.length > 0;
    return (
      prevRef.headSha !== nextRef.headSha
      || prevRef.branchName !== nextRef.branchName
      || (prevRef.parentSha ?? null) !== (nextRef.parentSha ?? null)
    );
  }

  function schedulePostMutationGraphReconcile(path: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    window.setTimeout(() => {
      void reconcileProjectSnapshotAfterMutation(normalizedPath);
    }, 50);
  }

  async function buildPushSyncOutcomeFromGit(
    path: string,
    snapshot: RepoVisualSnapshot,
  ): Promise<RepoMutationOutcome | null> {
    try {
      const [branchList, unpushedDirectCommits] = await Promise.all([
        invoke<Branch[]>('get_branches', { repoPath: path }),
        invoke<DirectCommit[]>('get_unpushed_direct_commits', {
          repoPath: path,
          branch: snapshot.defaultBranch,
        }).catch(() => [] as DirectCommit[]),
      ]);
      const branchNames = [...new Set([
        snapshot.defaultBranch,
        ...branchList.map((branch) => branch.name),
      ])];
      const unpushedShaEntries = await Promise.all(
        branchNames.map(async (branchName) => {
          const shas = await invoke<string[]>('get_branch_unpushed_commit_shas', {
            repoPath: path,
            branch: branchName,
          }).catch(() => []);
          return [branchName, shas] as const;
        }),
      );
      return outcomeFromBranchMetadataSync({
        branches: branchList,
        defaultBranch: snapshot.defaultBranch,
        removedBranchNames: [],
        unpushedCommitShasByBranch: Object.fromEntries(unpushedShaEntries),
        unpushedDirectCommits,
        branchUniqueAheadCounts: Object.fromEntries(
          branchList.map((branch) => [branch.name, Math.max(0, branch.commitsAhead)]),
        ),
        checkedOutRef: snapshot.checkedOutRef,
        layoutTopologyChanged: false,
      });
    } catch {
      return null;
    }
  }

  async function reloadRepoSnapshotFromGit(
    path: string,
    peek?: RepoSyncPeek | null,
  ): Promise<boolean> {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || !sameRepoPath(repoPath, normalizedPath)) return false;

    if (reloadRepoSnapshotInFlightRef.current) {
      reloadRepoSnapshotPendingRef.current = true;
      return false;
    }

    if (repoMutationInFlightRef.current || reconcileInFlightRef.current) {
      pendingRefreshAfterInteractionRef.current = true;
      return false;
    }
    if (isMapInteractingRef.current || !canApplyRepoRefreshRef.current) {
      pendingRefreshAfterInteractionRef.current = true;
      setMapGridBackgroundActivity('git-refresh-pending', 'Git refresh queued', true, 'blocked');
      return false;
    }

    reloadRepoSnapshotInFlightRef.current = true;
    bustRepoSyncCachesForPath(normalizedPath);
    setMapGridBackgroundActivity('git-refresh', 'Reload repo from git', true, 'git-activity');

    try {
      await invoke('persist_project_snapshot', { projectId: normalizedPath, force: true }).catch((error) => {
        console.warn('Git reload persist failed:', error);
      });

      const record = await invoke<ProjectSnapshotRecord | null>('load_project_snapshot', {
        projectId: normalizedPath,
      }).catch(() => null);
      let nextSnapshot = toRepoVisualSnapshot(record);
      if (!nextSnapshot) return false;

      // Abort if a mutation started during the async database call
      if (repoMutationInFlightRef.current || reconcileInFlightRef.current) {
        return false;
      }

      if (shouldBlockIncomingSnapshotApply(normalizedPath, nextSnapshot)) {
        return false;
      }

      nextSnapshot = await reconcileSnapshotForProjectSwitch(normalizedPath, nextSnapshot);
      if (shouldBlockIncomingSnapshotApply(normalizedPath, nextSnapshot)) {
        return false;
      }

      // Abort if a mutation started during the async reconciliation call
      if (repoMutationInFlightRef.current || reconcileInFlightRef.current) {
        return false;
      }

      flushSync(() => {
        applyPatchedSnapshot(normalizedPath, nextSnapshot, true, {
          force: true,
          skipLayoutRebuild: false,
        });
      });
      await syncCheckedOutRefFromQuickGitState(path);

      const resolvedPeek = peek ?? await fetchRepoSyncPeek(normalizedPath);
      if (resolvedPeek?.signature) {
        noteSyncedRepoPeek(normalizedPath, resolvedPeek.signature);
      }
      void invoke<FingerprintCheckResult>('check_project_fingerprint', { projectId: normalizedPath })
        .then((check) => noteSyncedRepoFingerprint(normalizedPath, check?.currentFingerprint))
        .catch(() => undefined);

      pendingRefreshAfterInteractionRef.current = false;
      noteGitActivityHandledIfCaughtUp(normalizedPath, resolvedPeek);
      return true;
    } catch (error) {
      console.warn('Git snapshot reload failed:', error);
      return false;
    } finally {
      setMapGridBackgroundActivity('git-refresh', 'Reload repo from git', false);
      reloadRepoSnapshotInFlightRef.current = false;
      if (reloadRepoSnapshotPendingRef.current) {
        reloadRepoSnapshotPendingRef.current = false;
        window.setTimeout(() => {
          void reloadRepoSnapshotFromGit(path);
        }, 50);
      }
    }
  }

  async function applyPublishedSnapshotWhenBehind(
    path: string,
    peek?: RepoSyncPeek | null,
    options?: { force?: boolean },
  ): Promise<boolean> {
    if (options?.force) {
      return reloadRepoSnapshotFromGit(path, peek);
    }
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || !sameRepoPath(repoPath, normalizedPath)) return false;

    if (reloadRepoSnapshotInFlightRef.current) {
      reloadRepoSnapshotPendingRef.current = true;
      return false;
    }
    if (repoMutationInFlightRef.current || reconcileInFlightRef.current) {
      return false;
    }

    const resolvedPeek = peek ?? await fetchRepoSyncPeek(normalizedPath);
    if (!options?.force && resolvedPeek && !isActiveUiBehindPeek(normalizedPath, resolvedPeek)) {
      return false;
    }

    reloadRepoSnapshotInFlightRef.current = true;
    try {
      const result = await invoke<RefreshProjectResult>('refresh_project_if_changed', {
        projectId: normalizedPath,
      }).catch(() => null);
      let nextSnapshot = toRepoVisualSnapshot(result?.snapshot ?? null);
      if (result?.updated && nextSnapshot) {
        if (repoMutationInFlightRef.current || reconcileInFlightRef.current) {
          return false;
        }
        nextSnapshot = await reconcileSnapshotForProjectSwitch(normalizedPath, nextSnapshot);
        if (repoMutationInFlightRef.current || reconcileInFlightRef.current) {
          return false;
        }
        flushSync(() => {
          applyPatchedSnapshot(normalizedPath, nextSnapshot!, false, {
            force: true,
            skipLayoutRebuild: false,
          });
        });
        if (resolvedPeek?.signature) noteSyncedRepoPeek(normalizedPath, resolvedPeek.signature);
        noteGitActivityHandledIfCaughtUp(normalizedPath, resolvedPeek);
        return true;
      }

      await invoke('persist_project_snapshot', { projectId: normalizedPath, force: true }).catch((error) => {
        console.warn('Background snapshot persist failed:', error);
      });
      if (repoMutationInFlightRef.current || reconcileInFlightRef.current) {
        return false;
      }
      const loaded = await loadAndApplyPublishedSnapshot(normalizedPath, resolvedPeek);
      if (loaded) {
        if (resolvedPeek?.signature) noteSyncedRepoPeek(normalizedPath, resolvedPeek.signature);
        noteGitActivityHandledIfCaughtUp(normalizedPath, resolvedPeek);
        return true;
      }
      return false;
    } finally {
      reloadRepoSnapshotInFlightRef.current = false;
      if (reloadRepoSnapshotPendingRef.current) {
        reloadRepoSnapshotPendingRef.current = false;
        window.setTimeout(() => {
          void reloadRepoSnapshotFromGit(path);
        }, 50);
      }
    }
  }

  async function loadAndApplyPublishedSnapshot(path: string, peek?: RepoSyncPeek | null) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || !sameRepoPath(repoPath, normalizedPath)) return false;
    const record = await invoke<ProjectSnapshotRecord | null>('load_project_snapshot', {
      projectId: normalizedPath,
    }).catch(() => null);
    const nextSnapshot = toRepoVisualSnapshot(record);
    if (!nextSnapshot) return false;
    const uiSignature = activeSnapshotSignatureRef.current;
    const nextSignature = getRepoVisualSnapshotSignature(nextSnapshot);
    const behindPeek = peek ? isSnapshotBehindPeek(nextSnapshot, peek) : false;
    const uiBehind = peek ? isActiveUiBehindPeek(normalizedPath, peek) : uiSignature !== nextSignature;
    if (!uiBehind && !behindPeek && uiSignature === nextSignature) return false;
    flushSync(() => {
      applyPatchedSnapshot(normalizedPath, nextSnapshot, false, {
        force: true,
        skipLayoutRebuild: false,
      });
    });
    return true;
  }

  async function reconcileProjectSnapshotAfterMutation(path: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || !sameRepoPath(repoPath, normalizedPath)) return;
    if (repoMutationInFlightRef.current || reconcileInFlightRef.current) return;
    reconcileInFlightRef.current = true;
    try {
      const peek = await fetchRepoSyncPeek(normalizedPath);
      let needsBackendSnapshot = false;

      if (peek && isActiveUiBehindPeek(normalizedPath, peek)) {
        gitActivityEpochRef.current += 1;
        await tryIncrementalBackgroundSync(normalizedPath, { force: true, peek });
        needsBackendSnapshot = isActiveUiBehindPeek(normalizedPath, peek);
      }

      const finalizeMetadata = async () => {
        const check = await invoke<FingerprintCheckResult>('check_project_fingerprint', {
          projectId: normalizedPath,
        }).catch(() => null);
        if (check?.currentFingerprint) {
          noteSyncedRepoFingerprint(normalizedPath, check.currentFingerprint);
          ackProjectFingerprint(normalizedPath, check.currentFingerprint);
        }
        if (peek?.signature) {
          noteSyncedRepoPeek(normalizedPath, peek.signature);
        }
        markGitActivityHandled();
      };

      if (needsBackendSnapshot) {
        const result = await invoke<RefreshProjectResult>('refresh_project_if_changed', {
          projectId: normalizedPath,
        }).catch(() => null);
        let nextSnapshot = toRepoVisualSnapshot(result?.snapshot ?? null);
        if (result?.updated && nextSnapshot && sameRepoPath(repoPath, normalizedPath)) {
          flushSync(() => {
            applyPatchedSnapshot(normalizedPath, nextSnapshot!, false, {
              force: true,
              skipLayoutRebuild: true,
            });
          });
        } else if (isActiveUiBehindPeek(normalizedPath, peek)) {
          await invoke('persist_project_snapshot', { projectId: normalizedPath, force: true }).catch((error) => {
            console.warn('Post-mutation snapshot persist failed:', error);
          });
          await loadAndApplyPublishedSnapshot(normalizedPath, peek);
        } else {
          void invoke('persist_project_snapshot', { projectId: normalizedPath, force: true }).catch((error) => {
            console.warn('Post-mutation snapshot persist failed:', error);
          });
        }
        await finalizeMetadata();
      } else {
        void invoke('persist_project_snapshot', { projectId: normalizedPath, force: true })
          .then(() => finalizeMetadata())
          .catch((error) => {
            console.warn('Post-mutation snapshot persist/sync failed:', error);
          });
      }
    } finally {
      reconcileInFlightRef.current = false;
      pendingRefreshAfterInteractionRef.current = false;
    }
  }

  function noteDirtySyncComplete(
    path: string,
    quickState: RepoQuickState,
    peekSignature?: string | null,
    options?: { markGitActivity?: boolean },
  ) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    projectQuickStateRef.current = {
      ...projectQuickStateRef.current,
      [normalizedPath]: quickStateSignature(quickState),
    };
    noteSyncedFingerprintFromQuickState(normalizedPath, quickState);
    if (peekSignature) {
      noteSyncedRepoPeek(normalizedPath, peekSignature);
    } else {
      void fetchRepoSyncPeek(normalizedPath).then((peek) => {
        if (peek?.signature) noteSyncedRepoPeek(normalizedPath, peek.signature);
      }).catch(() => undefined);
    }
    if (options?.markGitActivity !== false) {
      markGitActivityHandled();
    }
  }

  function shouldSkipDirtyOnlySync(path: string): boolean {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return true;
    if (isPostCommitProtectionActive(normalizedPath)) return true;
    if (repoMutationInFlightRef.current) return true;
    return false;
  }

  function applyLiveDirtyStateFromQuickState(
    path: string,
    quickState: RepoQuickState,
    snapshot: RepoVisualSnapshot,
    nextDirty: boolean,
    peekSignature?: string | null,
  ): boolean {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return false;

    const reconciledRef = reconcileCheckedOutRefFromQuickState(snapshot, quickState, path, {
      trustLiveGitDirty: true,
    });
    if (!reconciledRef) return false;

    const refForDirty = checkedOutRefWithDirtyFromQuickState(
      snapshot,
      quickState,
      reconciledRef,
      nextDirty,
    );
    const uiDirty = latestCheckedOutRef.current?.hasUncommittedChanges
      ?? snapshot.checkedOutRef?.hasUncommittedChanges
      ?? false;
    if (uiDirty === nextDirty) {
      noteDirtySyncComplete(normalizedPath, quickState, peekSignature, { markGitActivity: false });
      return false;
    }

    const patched = applyMutationPatch(
      snapshot,
      nextDirty ? outcomeFromMarkDirty(refForDirty) : outcomeFromDiscardDirty(refForDirty),
    );
    upsertProjectSnapshot(normalizedPath, patched, { force: true });
    if (sameRepoPath(repoPath, normalizedPath)) {
      latestCheckedOutRef.current = refForDirty;
      latestWorktreesRef.current = patched.worktrees;
      flushSync(() => {
        setCheckedOutRef(refForDirty);
        setWorktrees(patched.worktrees);
      });
    }
    noteDirtySyncComplete(normalizedPath, quickState, peekSignature, { markGitActivity: false });
    return true;
  }

  function applyPatchedSnapshot(
    path: string,
    patched: RepoVisualSnapshot,
    layoutTopologyChanged: boolean,
    options?: { force?: boolean; previousSnapshot?: RepoVisualSnapshot | null; skipLayoutRebuild?: boolean },
  ) {
    const normalizedPath = normalizePath(path);
    const force = options?.force === true;
    const patchedSignature = getRepoVisualSnapshotSignature(patched);
    if (
      !force
      && sameRepoPath(repoPath, normalizedPath)
      && activeSnapshotSignatureRef.current === patchedSignature
    ) {
      upsertProjectSnapshot(normalizedPath, patched, { force });
      projectQuickStateRef.current = {
        ...projectQuickStateRef.current,
        [normalizedPath]: quickStateSignature(quickStateFromSnapshot(normalizedPath, patched)),
      };
      return;
    }
    let previousSnapshot = options?.previousSnapshot ?? null;
    if (previousSnapshot === null) {
      try {
        previousSnapshot = getSnapshotForMutation(normalizedPath);
      } catch {
        previousSnapshot = null;
      }
    }
    const needsLayoutRebuild = !options?.skipLayoutRebuild
      && (layoutTopologyChanged || mutationChangesWorktreeLayout(previousSnapshot, patched));
    const previousUnpushedSignature = previousSnapshot
      ? previousSnapshot.unpushedDirectCommits.map((commit) => commit.fullSha).sort().join('|')
      : '';
    const nextUnpushedSignature = patched.unpushedDirectCommits.map((commit) => commit.fullSha).sort().join('|');
    const unpushedStateChanged = previousUnpushedSignature !== nextUnpushedSignature;
    upsertProjectSnapshot(normalizedPath, patched, { force });
    projectQuickStateRef.current = {
      ...projectQuickStateRef.current,
      [normalizedPath]: quickStateSignature(quickStateFromSnapshot(normalizedPath, patched)),
    };
    if (sameRepoPath(repoPath, normalizedPath)) {
      const applied = applySnapshotToActiveState(normalizedPath, patched, {
        force,
        allowIncomingDirty: force,
      });
      if (applied && !force && needsLayoutRebuild) {
        redrawRepoGraph(normalizedPath);
      } else if (applied && unpushedStateChanged && !force) {
        invalidateRepoLayoutCacheForPath(normalizedPath);
        setHydratedLayoutModel(null);
        setHydratedLayoutKey(null);
      }
    }
  }

  const mutationOutcomeNeedsImmediateApply = (outcomes: RepoMutationOutcome[]): boolean =>
    outcomes.some((outcome) => (
      outcome.kind === 'commit'
      || outcome.kind === 'push'
      || outcome.kind === 'discardDirty'
      || outcome.kind === 'markDirty'
      || outcome.kind === 'checkout'
      || outcome.kind === 'stashPush'
      || outcome.kind === 'stashRestore'
    ));

  async function refreshRepoAfterMutationFull(
    path: string,
    options?: { immediate?: boolean; forceApply?: boolean },
  ) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    const immediate = options?.immediate === true;
    const forceApply = options?.forceApply === true;

    const applyGeneration = repoMutationGenerationRef.current;
    const result = await invoke<RefreshProjectResult>('refresh_project_if_changed', {
      projectId: normalizedPath,
    }).catch(() => null);
    if (!result) return;
    if (!forceApply && applyGeneration !== repoMutationGenerationRef.current) return;

    const quickState = await invoke<RepoQuickState>('get_repo_quick_state', {
      repoPath: normalizedPath,
    }).catch(() => null);

    const applyReconciledSnapshot = async (base: RepoVisualSnapshot, layoutTopologyChanged = true) => {
      const nextSnapshot = await reconcileSnapshotForProjectSwitch(normalizedPath, base);
      if (!forceApply && applyGeneration !== repoMutationGenerationRef.current) return;
      await yieldToPaint();
      if (!forceApply && applyGeneration !== repoMutationGenerationRef.current) return;
      const applySnapshot = () => {
        applyPatchedSnapshot(normalizedPath, nextSnapshot, layoutTopologyChanged, { force: true });
      };
      if (immediate) flushSync(applySnapshot);
      else startTransition(applySnapshot);
    };

    if (!result.updated) {
      if (forceApply && sameRepoPath(repoPath, normalizedPath)) {
        try {
          await applyReconciledSnapshot(getSnapshotForMutation(normalizedPath), true);
          return;
        } catch {
          // fall through to quick ref sync
        }
      }
      if (quickState && sameRepoPath(repoPath, normalizedPath)) {
        projectQuickStateRef.current = {
          ...projectQuickStateRef.current,
          [normalizedPath]: quickStateSignature(quickState),
        };
        const syncRef = () => {
          setCheckedOutRef((previous) => {
            if (!previous) return previous;
            return {
              ...previous,
              headSha: quickState.headSha,
              hasUncommittedChanges: quickState.hasUncommittedChanges,
              parentSha: quickState.upstreamSha ?? previous.parentSha,
            };
          });
        };
        if (immediate) flushSync(syncRef);
        else startTransition(syncRef);
      }
      return;
    }

    const incoming = toRepoVisualSnapshot(result.snapshot ?? null);
    if (!incoming) return;

    await applyReconciledSnapshot(incoming, true);
  }

  async function finalizeRepoMutation(path: string, ...outcomes: RepoMutationOutcome[]) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || outcomes.length === 0) {
      endRepoMutation();
      return;
    }

    const applyGeneration = repoMutationGenerationRef.current;
    try {
      if (outcomes.some((outcome) => outcome.kind === 'fullRefresh')) {
        await refreshRepoAfterMutationFull(normalizedPath);
        return;
      }

      const previousSnapshot = getSnapshotForMutation(normalizedPath);
      let snapshot = previousSnapshot;
      for (const outcome of outcomes) {
        snapshot = applyMutationPatch(snapshot, outcome);
      }
      const layoutTopologyChanged = outcomes.some((outcome) => outcome.layoutTopologyChanged);
      const isCommit = outcomes.some((outcome) => outcome.kind === 'commit');
      const isPush = outcomes.some((outcome) => outcome.kind === 'push');
      const commitOutcome = isCommit
        ? outcomes.find((outcome): outcome is RepoMutationOutcome & { kind: 'commit' } => outcome.kind === 'commit')
        : undefined;

      if (isCommit) {
        const worktrees = await invoke<WorktreeInfo[]>('list_worktrees', { repoPath: normalizedPath }).catch(
          () => [] as WorktreeInfo[],
        );
        snapshot = applyMutationPatch(snapshot, outcomeFromWorktreeSync(worktrees));
        protectPostCommitHead(
          normalizedPath,
          snapshot.checkedOutRef?.headSha ?? commitOutcome?.commit.fullSha ?? null,
        );
      }

      if (isPush) {
        const gitPushSync = await buildPushSyncOutcomeFromGit(normalizedPath, snapshot);
        if (gitPushSync) {
          snapshot = applyMutationPatch(snapshot, gitPushSync);
        }
      }

      await yieldToPaint();
      if (!isCommit && !isPush && applyGeneration !== repoMutationGenerationRef.current) return;

      const immediateApply = mutationOutcomeNeedsImmediateApply(outcomes);
      const patchApplyOptions = { force: true as const, previousSnapshot };
      if (immediateApply) {
        flushSync(() => {
          applyPatchedSnapshot(normalizedPath, snapshot, layoutTopologyChanged, patchApplyOptions);
        });
      } else {
        startTransition(() => {
          applyPatchedSnapshot(normalizedPath, snapshot, layoutTopologyChanged, patchApplyOptions);
        });
      }

      if (isCommit || isPush) {
        if (isCommit) {
          autoFocusSyncKeyRef.current = null;
          const focusSha = resolveActiveWorktreeFocusSha(
            buildWorktreeSessions(snapshot.worktrees, normalizedPath, snapshot.checkedOutRef),
            normalizedPath,
          ) ?? commitOutcome?.commit.fullSha ?? null;
          if (focusSha && !readHasSavedMapGridCamera(normalizedPath, mapGridOrientation)) {
            setGridFocusSha(focusSha);
            setGridSearchJumpToken((token) => token + 1);
          }
          schedulePostCommitQuickReconcile(normalizedPath);
        }
        if (isCommit) {
          markGitActivityHandled();
        } else {
          void fetchRepoSyncPeek(normalizedPath).then((postPushPeek) => {
            if (postPushPeek && !isActiveUiBehindPeek(normalizedPath, postPushPeek)) {
              markGitActivityHandled();
            }
          }).catch(() => undefined);
        }
        noteSyncedAfterMutationOutcomes(normalizedPath, ...outcomes);
        schedulePostMutationGraphReconcile(normalizedPath);
      } else {
        window.setTimeout(() => {
          void invoke('persist_project_snapshot', { projectId: normalizedPath }).catch((error) => {
            console.warn('Background snapshot persist failed:', error);
          });
        }, PERSIST_SNAPSHOT_DEFER_MS);
      }
    } finally {
      endRepoMutation();
    }
  }

  function noteSyncedAfterMutationOutcomes(path: string, ...outcomes: RepoMutationOutcome[]) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    const syncedCommit = outcomes.some((outcome) => outcome.kind === 'commit');
    const syncedPush = outcomes.some((outcome) => outcome.kind === 'push');
    if (!syncedCommit && !syncedPush) return;
    void invoke<RepoSyncPeek>('get_repo_sync_peek', { repoPath: normalizedPath })
      .then((peek) => {
        if (!peek?.signature) return;
        try {
          const snapshot = getSnapshotForMutation(normalizedPath);
          const parsed = parsePeekSignature(peek.signature);
          const headSha = snapshot.checkedOutRef?.headSha ?? '';
          if (headSha && parsed.headSha !== headSha) return;
          if (syncedPush) {
            const liveUnpushedCount = String(snapshot.unpushedDirectCommits.length);
            if (parsed.headUnpushedCount !== liveUnpushedCount) return;
          }
        } catch {
          return;
        }
        noteSyncedRepoPeek(normalizedPath, peek.signature);
      })
      .catch(() => undefined);
  }

  function schedulePostCommitQuickReconcile(path: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    const delaysMs = [200, 600, 1500];
    for (const delayMs of delaysMs) {
      window.setTimeout(() => {
        if (repoMutationInFlightRef.current) return;
        void (async () => {
          const quickState = await invoke<RepoQuickState>('get_repo_quick_state', {
            repoPath: normalizedPath,
          }).catch(() => null);
          if (!quickState) return;
          let snapshot: RepoVisualSnapshot;
          try {
            snapshot = getSnapshotForMutation(normalizedPath);
          } catch {
            return;
          }
          const ref = snapshot.checkedOutRef;
          if (!ref || quickState.headSha !== ref.headSha) return;
          projectQuickStateRef.current = {
            ...projectQuickStateRef.current,
            [normalizedPath]: quickStateSignature(quickState),
          };
        })();
      }, delayMs);
    }
  }

  function reconcileCheckedOutRefFromQuickState(
    snapshot: RepoVisualSnapshot,
    quickState: RepoQuickState | null,
    path: string,
    options?: { trustLiveGitDirty?: boolean },
  ): CheckedOutRef | null {
    if (!quickState) return snapshot.checkedOutRef;
    const base = snapshot.checkedOutRef ?? {
      branchName: null,
      headSha: quickState.headSha,
      hasUncommittedChanges: quickState.hasUncommittedChanges,
      parentSha: quickState.upstreamSha ?? null,
    };
    const mergeOpts = options?.trustLiveGitDirty ? undefined : mergeOptionsForRepo(path);
    return mergeCheckedOutRefWithQuickState(base, quickState, snapshot, mergeOpts);
  }

  async function reconcileSnapshotWorktreesOnly(
    path: string,
    snapshot: RepoVisualSnapshot,
  ): Promise<RepoVisualSnapshot> {
    const worktrees = await invoke<WorktreeInfo[]>('list_worktrees', { repoPath: path }).catch(
      () => [] as WorktreeInfo[],
    );
    return applyMutationPatch(snapshot, outcomeFromWorktreeSync(worktrees));
  }

  async function reconcileSnapshotForProjectSwitch(
    path: string,
    snapshot: RepoVisualSnapshot,
  ): Promise<RepoVisualSnapshot> {
    const [quickState, worktrees] = await Promise.all([
      invoke<RepoQuickState>('get_repo_quick_state', { repoPath: path }).catch(() => null),
      invoke<WorktreeInfo[]>('list_worktrees', { repoPath: path }).catch(() => [] as WorktreeInfo[]),
    ]);

    let next = mergeSnapshotCheckedOutRefWithQuickState(snapshot, quickState, mergeOptionsForRepo(path));
    next = applyMutationPatch(next, outcomeFromWorktreeSync(worktrees));

    const reconciledRef = reconcileCheckedOutRefFromQuickState(next, quickState, path);
    if (!reconciledRef || !quickState) {
      return next;
    }

    const wasDirty = next.checkedOutRef?.hasUncommittedChanges ?? false;
    const isDirty = reconciledRef.hasUncommittedChanges;
    if (wasDirty !== isDirty) {
      return applyMutationPatch(
        next,
        isDirty ? outcomeFromMarkDirty(reconciledRef) : outcomeFromDiscardDirty(reconciledRef),
      );
    }

    if (
      next.checkedOutRef?.headSha !== reconciledRef.headSha
      || (next.checkedOutRef?.parentSha ?? null) !== (reconciledRef.parentSha ?? null)
    ) {
      return applyMutationPatch(next, outcomeFromUpstreamSync(reconciledRef));
    }

    return next;
  }

  async function resolveSnapshotForProjectSwitch(path: string): Promise<RepoVisualSnapshot> {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) {
      throw new Error(`Invalid repo path: ${path}`);
    }

    let snapshot = projectSnapshots[normalizedPath]?.loaded
      ? projectSnapshots[normalizedPath]!
      : await loadProjectSnapshot(normalizedPath, false);
    if (!snapshot?.loaded) {
      snapshot = await loadProjectSnapshot(normalizedPath, true);
    }
    if (!snapshot?.loaded) {
      throw new Error(`No snapshot available for ${normalizedPath}`);
    }

    return reconcileSnapshotForProjectSwitch(normalizedPath, snapshot);
  }

  function shouldPreferLiveSnapshotOverIncoming(
    path: string,
    incoming: RepoVisualSnapshot,
    peek: RepoSyncPeek | null,
  ): boolean {
    if (!peek || !sameRepoPath(repoPath, path)) return false;
    try {
      const live = buildActiveRepoSnapshot(path);
      return isSnapshotBehindPeek(incoming, peek) && !isSnapshotBehindPeek(live, peek);
    } catch {
      return false;
    }
  }

  function finalizeProjectSwitchSnapshot(path: string, snapshot: RepoVisualSnapshot) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    upsertProjectSnapshot(normalizedPath, snapshot, { force: true });
    projectQuickStateRef.current = {
      ...projectQuickStateRef.current,
      [normalizedPath]: quickStateSignature(quickStateFromSnapshot(normalizedPath, snapshot)),
    };
    lastHandledGitActivityEpochRef.current = gitActivityEpochRef.current;
    void fetchRepoSyncPeek(normalizedPath).then((peek) => {
      if (peek?.signature) noteSyncedRepoPeek(normalizedPath, peek.signature);
    });
    void invoke<FingerprintCheckResult>('check_project_fingerprint', { projectId: normalizedPath })
      .then((check) => {
        if (check?.currentFingerprint) {
          noteSyncedRepoFingerprint(normalizedPath, check.currentFingerprint);
        }
      })
      .catch(() => undefined);
    window.setTimeout(() => {
      void invoke('persist_project_snapshot', { projectId: normalizedPath }).catch((error) => {
        console.warn('Project switch snapshot persist failed:', error);
      });
    }, PERSIST_SNAPSHOT_DEFER_MS);
  }

  async function buildWorktreeSyncOutcomesIfNeeded(
    path: string,
    snapshot: RepoVisualSnapshot,
  ): Promise<RepoMutationOutcome[]> {
    const worktrees = await invoke<WorktreeInfo[]>('list_worktrees', { repoPath: path }).catch(() => []);
    if (worktreeListSignature(worktrees) === worktreeListSignature(snapshot.worktrees)) {
      return [];
    }
    return [outcomeFromWorktreeSync(worktrees)];
  }

  async function buildIncrementalOutcomesFromSegments(
    path: string,
    segments: FingerprintPatchSegment[],
    quickState: RepoQuickState | null,
  ): Promise<RepoMutationOutcome[]> {
    const snapshot = getSnapshotForMutation(path);
    const reconciledRef = reconcileCheckedOutRefFromQuickState(snapshot, quickState, path);
    const outcomes: RepoMutationOutcome[] = [];

    for (const segment of segments) {
      if (segment === 'dirty' && quickState) {
        const trustedRef = reconcileCheckedOutRefFromQuickState(snapshot, quickState, path, {
          trustLiveGitDirty: true,
        });
        const currentDirty = snapshot.checkedOutRef?.hasUncommittedChanges ?? false;
        const nextDirty = quickState.hasUncommittedChanges;
        if (nextDirty !== currentDirty && trustedRef) {
          const refForDirty = checkedOutRefWithDirtyFromQuickState(
            snapshot,
            quickState,
            trustedRef,
            nextDirty,
          );
          outcomes.push(
            nextDirty ? outcomeFromMarkDirty(refForDirty) : outcomeFromDiscardDirty(refForDirty),
          );
        }
      }
      if (segment === 'upstream' && reconciledRef) {
        const currentRef = snapshot.checkedOutRef;
        if (
          currentRef?.headSha !== reconciledRef.headSha
          || (currentRef?.parentSha ?? null) !== (reconciledRef.parentSha ?? null)
        ) {
          outcomes.push(outcomeFromUpstreamSync(reconciledRef));
        }
      }
      if (segment === 'stash') {
        const stashes = await invoke<GitStashEntry[]>('list_stashes', { repoPath: path }).catch(() => []);
        if (stashListSignature(stashes) !== stashListSignature(snapshot.stashes)) {
          outcomes.push(outcomeFromStashSync(stashes));
        }
      }
      if (segment === 'worktree') {
        const worktrees = await invoke<WorktreeInfo[]>('list_worktrees', { repoPath: path }).catch(() => []);
        if (worktreeListSignature(worktrees) !== worktreeListSignature(snapshot.worktrees)) {
          outcomes.push(outcomeFromWorktreeSync(worktrees));
        }
      }
    }

    return outcomes;
  }

  async function applyBackgroundRepoPatch(
    path: string,
    currentFingerprint: string,
    outcomes: RepoMutationOutcome[],
    options?: { force?: boolean; peekSignature?: string },
  ): Promise<boolean> {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || outcomes.length === 0) return false;
    const includesCommitOutcome = outcomes.some((outcome) => outcome.kind === 'commit');
    const protectionSafePatch = outcomes.every(outcomeAllowedDuringPostCommitProtection);
    if (isPostCommitProtectionActive(normalizedPath) && !includesCommitOutcome && !protectionSafePatch) {
      return false;
    }
    const force = options?.force === true;

    try {
      const previousSnapshot = getSnapshotForMutation(normalizedPath);
      let snapshot = previousSnapshot;
      const beforeSignature = getRepoVisualSnapshotSignature(snapshot);

      for (const outcome of outcomes) {
        snapshot = applyMutationPatch(snapshot, outcome);
      }
      if (includesCommitOutcome) {
        const worktrees = await invoke<WorktreeInfo[]>('list_worktrees', { repoPath: normalizedPath }).catch(
          () => [] as WorktreeInfo[],
        );
        snapshot = applyMutationPatch(snapshot, outcomeFromWorktreeSync(worktrees));
      }
      const afterSignature = getRepoVisualSnapshotSignature(snapshot);
      const layoutTopologyChanged = outcomes.some((outcome) => outcome.layoutTopologyChanged);
      const snapshotChanged = beforeSignature !== afterSignature;

      const dirtyOnly = isDirtyOnlyMutationOutcomes(outcomes);
      if (
        dirtyOnly
        && sameRepoPath(repoPath, normalizedPath)
        && activeSnapshotSignatureRef.current === afterSignature
      ) {
        noteSyncedRepoFingerprint(normalizedPath, currentFingerprint);
        ackProjectFingerprint(normalizedPath, currentFingerprint);
        if (options?.peekSignature) {
          noteSyncedRepoPeek(normalizedPath, options.peekSignature);
        }
        return false;
      }

      if (!snapshotChanged) {
        return false;
      }

      if (shouldBlockIncomingSnapshotApply(normalizedPath, snapshot)) {
        return false;
      }

      if (includesCommitOutcome) {
        const commitOutcome = outcomes.find(
          (outcome): outcome is RepoMutationOutcome & { kind: 'commit' } => outcome.kind === 'commit',
        );
        protectPostCommitHead(
          normalizedPath,
          snapshot.checkedOutRef?.headSha ?? commitOutcome?.commit.fullSha ?? null,
        );
      }

      noteSyncedRepoFingerprint(normalizedPath, currentFingerprint);
      ackProjectFingerprint(normalizedPath, currentFingerprint);
      if (options?.peekSignature) {
        noteSyncedRepoPeek(normalizedPath, options.peekSignature);
      }

      if (!dirtyOnly) {
        setMapGridBackgroundActivity('git-refresh', 'Apply repo changes', true, 'patch');
      }
      const applyPatch = () => {
        applyPatchedSnapshot(normalizedPath, snapshot, layoutTopologyChanged, {
          force,
          previousSnapshot,
          skipLayoutRebuild: dirtyOnly,
        });
      };
      const needsImmediateApply = includesCommitOutcome
        || outcomes.some((outcome) => outcome.kind === 'branchMetadataSync');
      if (needsImmediateApply) {
        flushSync(applyPatch);
        if (includesCommitOutcome && sameRepoPath(repoPath, normalizedPath)) {
          autoFocusSyncKeyRef.current = null;
          focusCameraOnActiveWorktreeRef.current?.();
        }
      } else {
        startTransition(applyPatch);
      }
      if (!dirtyOnly) {
        setMapGridBackgroundActivity('git-refresh', 'Apply repo changes', false);
      }

      window.setTimeout(() => {
        void invoke('persist_project_snapshot', { projectId: normalizedPath }).catch((error) => {
          console.warn('Background snapshot persist failed:', error);
        });
      }, PERSIST_SNAPSHOT_DEFER_MS);
      return true;
    } catch (error) {
      console.warn('Incremental background patch failed:', error);
      return false;
    }
  }

  async function tryIncrementalBackgroundSync(
    path: string,
    options?: { force?: boolean; peek?: RepoSyncPeek | null },
  ): Promise<boolean> {
    const normalizedPath = normalizePath(path);
    const lastSynced = normalizedPath ? lastSyncedRepoFingerprintRef.current[normalizedPath] : undefined;
    const lastCheckAt = normalizedPath ? (lastFingerprintCheckAtRef.current[normalizedPath] ?? 0) : 0;
    const gitActivityPending = gitActivityEpochRef.current !== lastHandledGitActivityEpochRef.current;

    const peek = options?.peek ?? await fetchRepoSyncPeek(path);
    if (peek && shouldSkipBackgroundSync(path, peek, gitActivityPending)) {
      markGitActivityHandled();
      return true;
    }

    if (
      lastSynced
      && !gitActivityPending
      && Date.now() - lastCheckAt < MIN_BACKGROUND_FINGERPRINT_CHECK_MS
    ) {
      return false;
    }

    const check = await invoke<FingerprintCheckResult>('check_project_fingerprint', {
      projectId: path,
    }).catch(() => null);
    if (!check) return false;

    if (normalizedPath) {
      lastFingerprintCheckAtRef.current = {
        ...lastFingerprintCheckAtRef.current,
        [normalizedPath]: Date.now(),
      };
    }

    if (
      backgroundSyncCanShortCircuit(gitActivityPending)
      && normalizedPath
      && lastSyncedRepoFingerprintRef.current[normalizedPath] === check.currentFingerprint
    ) {
      if (peek && !isActiveUiBehindPeek(path, peek)) {
        markGitActivityHandled();
        return true;
      }
    }
    if (!check.changed) {
      if (backgroundSyncCanShortCircuit(gitActivityPending) && peek && !isActiveUiBehindPeek(path, peek)) {
        noteSyncedRepoFingerprint(path, check.currentFingerprint);
        markGitActivityHandled();
        return true;
      }
    }

    const current = parseRepoFingerprint(check.currentFingerprint);
    const stored = parseRepoFingerprint(check.storedFingerprint ?? lastSynced ?? null);
    if (!current) return false;

    const classification = classifyFingerprintDiff(stored, current);
    if (classification.kind === 'none') {
      if (backgroundSyncCanShortCircuit(gitActivityPending) && peek && !isActiveUiBehindPeek(path, peek)) {
        noteSyncedRepoFingerprint(path, check.currentFingerprint);
        markGitActivityHandled();
        return true;
      }
      return false;
    }

    const quickState = await invoke<RepoQuickState>('get_repo_quick_state', { repoPath: path }).catch(() => null);
    const patchOptions = {
      force: options?.force === true,
      peekSignature: peek?.signature,
    };

    if (
      classification.kind === 'patch'
      && classification.segments.length === 1
      && classification.segments[0] === 'dirty'
      && quickState
    ) {
      const snapshot = getSnapshotForMutation(path);
      const uiDirty = latestCheckedOutRef.current?.hasUncommittedChanges
        ?? snapshot.checkedOutRef?.hasUncommittedChanges
        ?? false;
      if (uiDirty === quickState.hasUncommittedChanges) {
        noteSyncedRepoFingerprint(path, check.currentFingerprint);
        ackProjectFingerprint(path, check.currentFingerprint);
        if (peek?.signature) noteSyncedRepoPeek(path, peek.signature);
        markGitActivityHandled();
        return true;
      }
    }

    if (classification.kind === 'graphDelta') {
      const baselineFingerprint = stored ?? parseRepoFingerprint(lastSynced ?? null);
      const delta = await fetchRepoGraphDelta(path, baselineFingerprint?.branchRefSig ?? null);
      if (!delta) return false;
      const snapshot = getSnapshotForMutation(path);
      const graphOutcomes = buildGraphDeltaOutcomes(delta, snapshot, stored);
      if (!graphOutcomes) return false;

      let outcomes = graphOutcomes;
      if (classification.segments?.length) {
        const segmentOutcomes = await buildIncrementalOutcomesFromSegments(
          path,
          classification.segments,
          quickState,
        );
        outcomes = [...graphOutcomes, ...segmentOutcomes];
      }
      const worktreeOutcomes = await buildWorktreeSyncOutcomesIfNeeded(path, snapshot);
      if (worktreeOutcomes.length > 0) {
        outcomes = [...outcomes, ...worktreeOutcomes];
      }

      const patched = await applyBackgroundRepoPatch(
        path,
        check.currentFingerprint,
        outcomes,
        patchOptions,
      );
      if (patched) markGitActivityHandled();
      return patched;
    }

    let outcomes = await buildIncrementalOutcomesFromSegments(
      path,
      classification.segments,
      quickState,
    );
    if (outcomes.length === 0) {
      outcomes = await buildWorktreeSyncOutcomesIfNeeded(path, getSnapshotForMutation(path));
    }
    if (outcomes.length === 0) return false;

    const patched = await applyBackgroundRepoPatch(
      path,
      check.currentFingerprint,
      outcomes,
      patchOptions,
    );
    if (patched) markGitActivityHandled();
    return patched;
  }

  async function tryWorktreeListSync(
    path: string,
    peek?: RepoSyncPeek | null,
  ): Promise<boolean> {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || !sameRepoPath(repoPath, path)) return false;

    let snapshot: RepoVisualSnapshot;
    try {
      snapshot = getSnapshotForMutation(normalizedPath);
    } catch {
      return false;
    }

    const resolvedPeek = peek ?? await fetchRepoSyncPeek(path);
    const parsedPeek = resolvedPeek ? parsePeekSignature(resolvedPeek.signature) : null;
    const uiWorktreeSig = worktreeListSignature(snapshot.worktrees);
    if (parsedPeek?.worktreeSig && parsedPeek.worktreeSig === uiWorktreeSig) {
      return false;
    }

    const worktrees = await invoke<WorktreeInfo[]>('list_worktrees', { repoPath: path }).catch(() => null);
    if (!worktrees) return false;
    if (worktreeListSignature(worktrees) === uiWorktreeSig) {
      if (resolvedPeek?.signature) noteSyncedRepoPeek(path, resolvedPeek.signature);
      return false;
    }

    const check = await invoke<FingerprintCheckResult>('check_project_fingerprint', {
      projectId: normalizedPath,
    }).catch(() => null);
    const fingerprint = check?.currentFingerprint
      ?? lastSyncedRepoFingerprintRef.current[normalizedPath]
      ?? '';

    const patched = await applyBackgroundRepoPatch(
      normalizedPath,
      fingerprint,
      [outcomeFromWorktreeSync(worktrees)],
      { force: true, peekSignature: resolvedPeek?.signature },
    );
    if (!patched) return false;
    markGitActivityHandled();
    return true;
  }

  async function tryQuickStateDirtySync(
    path: string,
    peek?: RepoSyncPeek | null,
  ): Promise<boolean> {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return false;

    const gitActivityPending = gitActivityEpochRef.current !== lastHandledGitActivityEpochRef.current;
    const resolvedPeek = peek ?? await fetchRepoSyncPeek(path);
    if (await tryWorktreeListSync(path, resolvedPeek)) {
      return true;
    }

    if (resolvedPeek && shouldSkipBackgroundSync(path, resolvedPeek, gitActivityPending)) {
      markGitActivityHandled();
      return true;
    }

    const quickState = await invoke<RepoQuickState>('get_repo_quick_state', { repoPath: path }).catch(() => null);
    if (!quickState) return false;

    if (quickState.hasUncommittedChanges && isPostCommitProtectionActive(normalizedPath)) {
      return false;
    }

    const nextSig = quickStateSignature(quickState);
    const cachedSig = projectQuickStateRef.current[normalizedPath];
    const snapshot = getSnapshotForMutation(normalizedPath);
    const activeRef = latestCheckedOutRef.current ?? snapshot.checkedOutRef;
    const activeHead = activeRef?.headSha && !isWorkingTreeCommitId(activeRef.headSha)
      ? activeRef.headSha
      : (snapshot.checkedOutRef?.headSha && !isWorkingTreeCommitId(snapshot.checkedOutRef.headSha)
        ? snapshot.checkedOutRef.headSha
        : quickState.headSha);

    if (quickState.headSha !== activeHead) {
      const guard = postCommitProtectedHeadShaRef.current[normalizedPath];
      if (!guard || !shaMatches(quickState.headSha, guard)) {
        return false;
      }
    }

    const nextDirty = quickState.hasUncommittedChanges;
    const uiDirty = activeRef?.hasUncommittedChanges ?? snapshot.checkedOutRef?.hasUncommittedChanges ?? false;
    if (cachedSig === nextSig && uiDirty === nextDirty) {
      markGitActivityHandled();
      return true;
    }

    if (uiDirty !== nextDirty) {
      if (shouldSkipDirtyOnlySync(path)) return false;
      if (applyLiveDirtyStateFromQuickState(
        path,
        quickState,
        snapshot,
        nextDirty,
        resolvedPeek?.signature,
      )) {
        return true;
      }
    }

    const reconciledRef = reconcileCheckedOutRefFromQuickState(snapshot, quickState, path, {
      trustLiveGitDirty: true,
    });
    const cachedUpstream = cachedSig?.split('|')[2] ?? '';
    const nextUpstream = quickState.upstreamSha ?? '';
    let applied = false;
    if (cachedUpstream !== nextUpstream && reconciledRef) {
      const check = await invoke<FingerprintCheckResult>('check_project_fingerprint', {
        projectId: normalizedPath,
      }).catch(() => null);
      const fingerprint = check?.currentFingerprint
        ?? lastSyncedRepoFingerprintRef.current[normalizedPath]
        ?? '';
      const upstreamPatched = await applyBackgroundRepoPatch(
        normalizedPath,
        fingerprint,
        [outcomeFromUpstreamSync(reconciledRef)],
        { force: true, peekSignature: resolvedPeek?.signature },
      );
      applied = upstreamPatched || applied;
    }

    return applied;
  }

  async function syncLiveDirtyState(
    path: string,
    options?: { peek?: RepoSyncPeek | null },
  ): Promise<boolean> {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath || !sameRepoPath(repoPath, path)) return false;
    if (isMapInteractingRef.current || !canApplyRepoRefreshRef.current) return false;
    if (shouldSkipDirtyOnlySync(path)) return false;

    let snapshot: RepoVisualSnapshot;
    try {
      snapshot = getSnapshotForMutation(normalizedPath);
    } catch {
      return false;
    }

    const uiDirty = latestCheckedOutRef.current?.hasUncommittedChanges
      ?? snapshot.checkedOutRef?.hasUncommittedChanges
      ?? false;

    if (!options?.peek) {
      const isDirty = await invoke<boolean>('get_repo_dirty_state', { repoPath: path }).catch(() => null);
      if (isDirty === null) return false;
      if (uiDirty === isDirty) {
        return false;
      }
    }

    const resolvedPeek = options?.peek ?? await fetchRepoSyncPeek(path);

    if (resolvedPeek && isActiveUiBehindPeek(normalizedPath, resolvedPeek)) {
      return applyPublishedSnapshotWhenBehind(path, resolvedPeek);
    }

    if (resolvedPeek?.signature) {
      const parsed = parsePeekSignature(resolvedPeek.signature);
      if (uiDirty === parsed.hasUncommittedChanges) {
        return false;
      }
    }

    const quickState = await invoke<RepoQuickState>('get_repo_quick_state', { repoPath: path }).catch(() => null);
    if (!quickState) return false;

    const nextDirty = quickState.hasUncommittedChanges;
    if (uiDirty === nextDirty) {
      noteDirtySyncComplete(normalizedPath, quickState, resolvedPeek?.signature, { markGitActivity: false });
      return false;
    }

    return applyLiveDirtyStateFromQuickState(
      path,
      quickState,
      snapshot,
      nextDirty,
      resolvedPeek?.signature,
    );
  }

  async function probeLiveDirtyState(path: string): Promise<void> {
    await syncLiveDirtyState(path);
  }

  async function yieldToPaint() {
    await new Promise<void>((resolve) => {
      window.requestAnimationFrame(() => resolve());
    });
  }

  function beginMapSwitch() {
    const nextEpoch = mapSwitchEpochRef.current + 1;
    mapSwitchEpochRef.current = nextEpoch;
    lastResolvedLayoutModelRef.current = null;
    setHydratedLayoutModel(null);
    setHydratedLayoutKey(null);
    setMapSwitchEpoch(nextEpoch);
    setMapReadyForDisplay(false);
    setMapPresentationState('loading');
    return nextEpoch;
  }

  function finishMapSwitch(epoch: number, nextState: MapPresentationState = 'ready') {
    if (epoch !== mapSwitchEpochRef.current) return;
    setMapLoading(false);
    isRepoSwitchingRef.current = false;
    setMapPresentationState(nextState);
  }

  async function handleSwitchToWorktree(targetPath: string) {
    const switchEpoch = beginMapSwitch();
    let hasError = false;
    setCommitSwitchFeedback(null);
    setMapLoading(true);
    isRepoSwitchingRef.current = true;
    try {
      const normalizedTarget = normalizePath(targetPath);
      if (!normalizedTarget) throw new Error('Invalid worktree path');

      const targetOpenedClumps = manuallyOpenedGridClumpsByRepo[normalizedTarget] ?? new Set<string>();
      const targetClosedClumps = manuallyClosedGridClumpsByRepo[normalizedTarget] ?? new Set<string>();
      const cachedSnapshot = projectSnapshots[normalizedTarget];
      if (cachedSnapshot?.loaded) {
        await loadNodePositionsForRepo(normalizedTarget);
        const reconciledSnapshot = await resolveSnapshotForProjectSwitch(normalizedTarget);
        applySnapshotToActiveState(normalizedTarget, reconciledSnapshot, {
          force: true,
          allowIncomingDirty: true,
        });
        finalizeProjectSwitchSnapshot(normalizedTarget, reconciledSnapshot);
        void fetchGitHubData(normalizedTarget);
        setCommitSwitchFeedback({
          kind: 'success',
          message: `Now targeting worktree at ${targetPath}`,
        });
        return;
      }

      const [info, def] = await Promise.all([
        invoke<{ name: string; path: string }>('get_repo_info', { repoPath: normalizedTarget }),
        invoke<string>('get_default_branch', { repoPath: normalizedTarget }),
      ]);
      await loadNodePositionsForRepo(normalizedTarget);
      setRepoName(info.name);
      setDefaultBranch(def);
      setRepoPath(normalizedTarget);
      await refreshRepoGitState(normalizedTarget, def);
      void fetchGitHubData(normalizedTarget);
      setCommitSwitchFeedback({
        kind: 'success',
        message: `Now targeting worktree at ${targetPath}`,
      });
    } catch (e) {
      hasError = true;
      const message = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({
        kind: 'error',
        message,
      });
      console.error('Failed to switch worktree:', message);
    } finally {
      finishMapSwitch(switchEpoch, hasError ? 'error' : 'ready');
    }
  }

  async function handleRemoveWorktree(worktreePath: string, force: boolean) {
    if (!repoPath || removeWorktreeInProgress) return;
    setRemoveWorktreeInProgress(true);
    setCommitSwitchFeedback(null);
    try {
      beginRepoMutation();
      await invoke('remove_worktree', { repoPath, worktreePath, force });
      await finalizeRepoMutation(repoPath, outcomeFromWorktreeRemove(worktreePath));
      setCommitSwitchFeedback({
        kind: 'success',
        message: `Removed worktree at ${worktreePath}`,
      });
    } catch (e) {
      endRepoMutation();
      const message = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({
        kind: 'error',
        message,
      });
      console.error('Failed to remove worktree:', message);
    } finally {
      setRemoveWorktreeInProgress(false);
    }
  }

  function applySnapshotToActiveState(
    path: string,
    snapshot: RepoVisualSnapshot,
    options?: { force?: boolean; allowIncomingDirty?: boolean },
  ) {
    if (
      sameRepoPath(repoPath, path)
      && options?.force !== true
    ) {
      try {
        const live = buildActiveRepoSnapshot(path);
        if (isIncomingSnapshotStaleComparedToLive(snapshot, live)) {
          setMapGridBackgroundActivity('snapshot-apply', 'Apply repo snapshot', false);
          return false;
        }
      } catch {
        // keep applying when live snapshot cannot be built
      }
    }
    if (!options?.force && (isMapInteractingRef.current || !canApplyRepoRefreshRef.current)) {
      pendingRefreshAfterInteractionRef.current = true;
      setMapGridBackgroundActivity('git-refresh-pending', 'Git refresh queued', true, 'snapshot deferred');
      return false;
    }
    const signature = getRepoVisualSnapshotSignature(snapshot);
    if (activeSnapshotSignatureRef.current === signature) {
      return false;
    }
    setMapGridBackgroundActivity('snapshot-apply', 'Apply repo snapshot', true);
    latestBranchesRef.current = snapshot.branches;
    latestDirectCommitsRef.current = snapshot.directCommits;
    latestUnpushedDirectCommitsRef.current = snapshot.unpushedDirectCommits;
    latestWorktreesRef.current = snapshot.worktrees;
    latestStashesRef.current = snapshot.stashes;
    latestUnpushedCommitShasByBranchRef.current = snapshot.unpushedCommitShasByBranch;
    latestMergeNodesRef.current = snapshot.mergeNodes;
    latestBranchParentByNameRef.current = snapshot.branchParentByName ?? {};
    activeSnapshotSignatureRef.current = signature;
    setRepoName(snapshot.name || basenameFromPath(path));
    setDefaultBranch(snapshot.defaultBranch || 'main');
    setBranches(snapshot.branches);
    setMergeNodes(snapshot.mergeNodes);
    setDirectCommits(snapshot.directCommits);
    setUnpushedDirectCommits(snapshot.unpushedDirectCommits);
    setUnpushedCommitShasByBranch(snapshot.unpushedCommitShasByBranch);
    if (shouldBlockIncomingSnapshotApply(path, snapshot)) {
      return false;
    }

    const previousCheckedOutRef = latestCheckedOutRef.current;
    const incomingCheckedOutRef = snapshot.checkedOutRef;
    const isProjectSwitch = !sameRepoPath(path, repoPath);
    let nextCheckedOutRef = incomingCheckedOutRef;
    if (
      !isProjectSwitch &&
      !options?.allowIncomingDirty &&
      incomingCheckedOutRef &&
      previousCheckedOutRef &&
      !previousCheckedOutRef.hasUncommittedChanges &&
      incomingCheckedOutRef.hasUncommittedChanges
    ) {
      nextCheckedOutRef = {
        ...incomingCheckedOutRef,
        headSha: previousCheckedOutRef.headSha || incomingCheckedOutRef.headSha,
        hasUncommittedChanges: false,
        parentSha: previousCheckedOutRef.parentSha ?? incomingCheckedOutRef.parentSha,
      };
    }
    latestCheckedOutRef.current = nextCheckedOutRef;
    setCheckedOutRef(nextCheckedOutRef);
    setWorktrees(snapshot.worktrees);
    setStashes(snapshot.stashes);
    setBranchCommitPreviews(stripWorkingTreeFromPreviews(snapshot.branchCommitPreviews));
    setBranchParentByName(snapshot.branchParentByName ?? {});
    setLaneByBranch(snapshot.laneByBranch ?? {});
    setBranchUniqueAheadCounts(snapshot.branchUniqueAheadCounts);
    setRepoPath(path);
    setMapGridBackgroundActivity('snapshot-apply', 'Apply repo snapshot', false);
    setMapGridBackgroundActivity('git-refresh-pending', 'Git refresh queued', false);
    if (options?.force === true && sameRepoPath(repoPath, path)) {
      redrawRepoGraph(path);
      void syncCheckedOutRefFromQuickGitState(path);
    }
    return true;
  }

  async function ensureFrozenLayoutReady(
    targetRepoPath: string,
    snapshot: RepoVisualSnapshot,
    manuallyOpenedClumps: Set<string>,
    manuallyClosedClumps: Set<string>,
    graphSignature: string,
  ): Promise<{ layoutKey: string; model: BranchGridLayoutModel }> {
    const layoutKey = makeLayoutCacheKey(
      targetRepoPath,
      mapGridOrientation,
      manuallyOpenedClumps,
      manuallyClosedClumps,
      graphSignature,
    );
    const expectedWorktrees = buildWorktreeSessions(snapshot.worktrees, targetRepoPath, snapshot.checkedOutRef);
    const expectsWorktreeNodes = expectedWorktrees.length > 0;
    const layoutMatchesWorktrees = (model: BranchGridLayoutModel) =>
      layoutModelHasWorkingTree(model) === expectsWorktreeNodes;

    const inMemory = layoutModelCacheRef.current.get(layoutKey);
    if (inMemory && layoutMatchesWorktrees(inMemory)) return { layoutKey, model: inMemory };

    const payloadJson = await invoke<string | null>('get_repo_layout_snapshot', {
      repoPath: targetRepoPath,
      layoutKey,
    }).catch(() => null);
    if (payloadJson) {
      try {
        const parsed = JSON.parse(payloadJson);
        const hydrated = hydrateBranchGridLayoutModel(parsed);
        if (layoutMatchesWorktrees(hydrated)) {
          layoutModelCacheRef.current.set(layoutKey, hydrated);
          persistedLayoutKeysRef.current.add(layoutKey);
          return { layoutKey, model: hydrated };
        }
      } catch {
        // fall through to compute when persisted payload is invalid
      }
    }

    const computed = deriveRepoVisualState({
      branches: snapshot.branches,
      mergeNodes: snapshot.mergeNodes,
      directCommits: snapshot.directCommits,
      unpushedDirectCommits: snapshot.unpushedDirectCommits,
      unpushedCommitShasByBranch: snapshot.unpushedCommitShasByBranch ?? {},
      defaultBranch: snapshot.defaultBranch,
      branchCommitPreviews: snapshot.branchCommitPreviews,
      branchParentByName: snapshot.branchParentByName,
      branchUniqueAheadCounts: snapshot.branchUniqueAheadCounts,
      checkedOutRef: snapshot.checkedOutRef,
      worktrees: snapshot.worktrees,
      currentRepoPath: targetRepoPath,
      stashes: snapshot.stashes,
      manuallyOpenedClumps,
      manuallyClosedClumps,
      gridSearchQuery: '',
      gridFocusSha: null,
      orientation: mapGridOrientation,
    }).sharedGridLayoutModel;
    layoutModelCacheRef.current.set(layoutKey, computed);
    persistedLayoutKeysRef.current.add(layoutKey);
    const serialized = JSON.stringify(serializeBranchGridLayoutModel(computed));
    void invoke('store_repo_layout_snapshot', {
      repoPath: targetRepoPath,
      layoutKey,
      payloadJson: serialized,
    }).catch(() => {
      persistedLayoutKeysRef.current.delete(layoutKey);
    });
    return { layoutKey, model: computed };
  }

  async function loadRepo(path: string) {
    const requestId = ++loadRepoRequestIdRef.current;
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;

    const nextPeekCache = { ...projectSyncPeekRef.current };
    delete nextPeekCache[normalizedPath];
    projectSyncPeekRef.current = nextPeekCache;

    const previousPath = repoPath ? normalizePath(repoPath) : null;
    if (previousPath && !sameRepoPath(previousPath, normalizedPath)) {
      try {
        upsertProjectSnapshot(previousPath, buildActiveRepoSnapshot(previousPath), { force: true });
      } catch {
        // Active repo state unavailable — cached snapshot remains as-is.
      }
    }

    const switchEpoch = beginMapSwitch();
    let hasError = false;
    if (repoPath && sharedGridLayoutCacheKey) {
      layoutModelCacheRef.current.set(sharedGridLayoutCacheKey, sharedGridLayoutModel);
    }
    const targetOpenedClumps = manuallyOpenedGridClumpsByRepo[normalizedPath] ?? new Set<string>();
    const targetClosedClumps = manuallyClosedGridClumpsByRepo[normalizedPath] ?? new Set<string>();
    setHydratedLayoutModel(null);
    setHydratedLayoutKey(null);
    isRepoSwitchingRef.current = true;
    setMapLoading(true);
    setLoading(true);
    setError(null);
    await yieldToPaint();
    if (requestId !== loadRepoRequestIdRef.current) return;

    let cachedSnapshot: RepoVisualSnapshot | null = null;
    try {
      cachedSnapshot = await resolveSnapshotForProjectSwitch(normalizedPath);
    } catch {
      cachedSnapshot = projectSnapshots[normalizedPath]
        ?? await loadProjectSnapshot(normalizedPath);
    }
    if (cachedSnapshot?.loaded) {
      await loadNodePositionsForRepo(normalizedPath);
      if (requestId !== loadRepoRequestIdRef.current) return;
      applySnapshotToActiveState(normalizedPath, cachedSnapshot, {
        force: true,
        allowIncomingDirty: true,
      });
      finalizeProjectSwitchSnapshot(normalizedPath, cachedSnapshot);
      persistProject({
        path: normalizedPath,
        name: cachedSnapshot.name || basenameFromPath(normalizedPath),
        lastOpenedAt: Date.now(),
        branchName: cachedSnapshot.defaultBranch,
      });
      await yieldToPaint();
      await yieldToPaint();
      if (requestId !== loadRepoRequestIdRef.current) return;
      finishMapSwitch(switchEpoch, 'ready');
      setLoading(false);
      void fetchGitHubData(normalizedPath);
      window.setTimeout(() => {
        if (requestId !== loadRepoRequestIdRef.current) return;
        gitActivityEpochRef.current += 1;
        void runRepoRefreshRef.current?.('quick');
      }, 2600);
      return;
    }

    // Yield to the browser paint cycle so the map shell and loader are painted
    await new Promise((resolve) => setTimeout(resolve, 15));
    if (requestId !== loadRepoRequestIdRef.current) return;

    try {
      // Phase 1: fast metadata — show the map shell immediately
      const [info, def] = await Promise.all([
        invoke<{ name: string; path: string }>('get_repo_info', { repoPath: normalizedPath }),
        invoke<string>('get_default_branch', { repoPath: normalizedPath }),
      ]);
      if (requestId !== loadRepoRequestIdRef.current) return;
      setRepoName(info.name);
      setDefaultBranch(def);

      const record = await invoke<ProjectSnapshotRecord>('add_project_and_ingest', {
        repoPath: normalizedPath,
      });
      const snapshot = toRepoVisualSnapshot(record);
      if (!snapshot) {
        throw new Error('Missing repo visual snapshot payload');
      }
      if (requestId !== loadRepoRequestIdRef.current) return;
      await loadNodePositionsForRepo(normalizedPath);
      if (requestId !== loadRepoRequestIdRef.current) return;
      upsertProjectSnapshot(normalizedPath, snapshot);
      projectFingerprintRef.current = {
        ...projectFingerprintRef.current,
        [normalizedPath]: fingerprintSignature(fingerprintFromSnapshot(normalizedPath, def, snapshot)),
      };
      projectQuickStateRef.current = {
        ...projectQuickStateRef.current,
        [normalizedPath]: quickStateSignature(quickStateFromSnapshot(normalizedPath, snapshot)),
      };
      applySnapshotToActiveState(normalizedPath, snapshot, {
        force: true,
        allowIncomingDirty: true,
      });
      void invoke<FingerprintCheckResult>('check_project_fingerprint', { projectId: normalizedPath })
        .then((check) => {
          noteSyncedRepoFingerprint(normalizedPath, check?.currentFingerprint);
          lastHandledGitActivityEpochRef.current = gitActivityEpochRef.current;
        })
        .catch(() => undefined);
      void invoke<RepoHeadState>('get_repo_head_state', { repoPath: normalizedPath })
        .then((headState) => {
          if (!headState) return;
          projectHeadStateRef.current = {
            ...projectHeadStateRef.current,
            [normalizedPath]: headStateSignature(headState),
          };
        })
        .catch(() => undefined);
      persistProject({
        path: normalizedPath,
        name: info.name,
        lastOpenedAt: Date.now(),
        branchName: def,
      });
      await yieldToPaint();
      await yieldToPaint();
      if (requestId !== loadRepoRequestIdRef.current) return;
      finishMapSwitch(switchEpoch, 'ready');
      setLoading(false); // unblock the landing button

      // Phase 3: GitHub data (non-blocking)
      void fetchGitHubData(normalizedPath);
    } catch (e) {
      hasError = true;
      if (requestId !== loadRepoRequestIdRef.current) return;
      console.error('Failed to load repo:', e);
      setError(e instanceof Error ? e.message : String(e));
      setRepoPath(null);
      setLoading(false);
    } finally {
      if (requestId !== loadRepoRequestIdRef.current) return;
      finishMapSwitch(switchEpoch, hasError ? 'error' : 'ready');
    }
  }

  async function fetchGitHubData(path: string) {
    const requestId = ++githubFetchRequestIdRef.current;
    try {
      if (requestId !== githubFetchRequestIdRef.current) return;
      setGithubAuthMessage(null);
      const ghInfo = await invoke<GitHubInfo>('get_github_info', { repoPath: path });
      const authStatus = await invoke<GitHubAuthStatus>('get_github_auth_status');
      if (requestId !== githubFetchRequestIdRef.current) return;
      setGithubAuthStatus(authStatus);
      if (!authStatus.ghAvailable || !authStatus.authenticated) {
        return;
      }

      const open = await invoke<OpenPR[]>('get_open_prs', {
        owner: ghInfo.owner,
        repo: ghInfo.repo,
      });
      if (requestId !== githubFetchRequestIdRef.current) return;
      setOpenPRs(open);
    } catch (e) {
      if (requestId !== githubFetchRequestIdRef.current) return;
      // GitHub data is optional, don't show error to user
      console.log('GitHub data not available:', e);
      setGithubAuthMessage(e instanceof Error ? e.message : String(e));
    }
  }

  useEffect(() => {
    let unlisten: null | (() => void) = null;
    let isDisposed = false;
    const windowLabel = (() => {
      try {
        return getCurrentWindow().label;
      } catch {
        return null;
      }
    })();

    const openPath = async (payload?: OpenRepoEventPayload | null) => {
      const nextPath = payload?.path?.trim();
      if (!nextPath || isDisposed) return;
      if (repoPath === nextPath) {
        return;
      }
      await loadRepo(nextPath);
    };

    const attach = async () => {
      if (windowLabel === 'main') {
        unlisten = await listen<OpenRepoEventPayload>('gitviz://open-repo', async (event) => {
          await openPath(event.payload);
        });
      }
      const pending = await invoke<OpenRepoEventPayload | null>('take_pending_open_repo');
      await openPath(pending);
    };

    void attach();
    return () => {
      isDisposed = true;
      if (unlisten) unlisten();
    };
  }, [repoPath]);

  useEffect(() => {
    latestBranchesRef.current = branches;
  }, [branches]);

  useEffect(() => {
    latestDirectCommitsRef.current = directCommits;
  }, [directCommits]);

  useEffect(() => {
    latestCheckedOutRef.current = checkedOutRef;
  }, [checkedOutRef]);

  useEffect(() => {
    latestUnpushedDirectCommitsRef.current = unpushedDirectCommits;
  }, [unpushedDirectCommits]);

  useEffect(() => {
    latestWorktreesRef.current = worktrees;
  }, [worktrees]);

  useEffect(() => {
    latestStashesRef.current = stashes;
  }, [stashes]);

  useEffect(() => {
    latestUnpushedCommitShasByBranchRef.current = unpushedCommitShasByBranch;
  }, [unpushedCommitShasByBranch]);

  useEffect(() => {
    latestMergeNodesRef.current = mergeNodes;
  }, [mergeNodes]);

  useEffect(() => {
    latestBranchParentByNameRef.current = branchParentByName;
  }, [branchParentByName]);

  useEffect(() => {
    isMapInteractingRef.current = isMapInteracting;
    if (isMapInteracting) {
      wasMapInteractingRef.current = true;
      mapInteractionEpochRef.current += 1;
      canApplyRepoRefreshRef.current = false;
      setMapGridBackgroundActivity('git-refresh-settle', 'Git refresh settle wait', false);
      if (mapRefreshSettleTimeoutRef.current != null) {
        window.clearTimeout(mapRefreshSettleTimeoutRef.current);
        mapRefreshSettleTimeoutRef.current = null;
      }
      return;
    }

    if (!wasMapInteractingRef.current) {
      canApplyRepoRefreshRef.current = true;
      return;
    }
    wasMapInteractingRef.current = false;

    if (mapRefreshSettleTimeoutRef.current != null) {
      window.clearTimeout(mapRefreshSettleTimeoutRef.current);
    }
    setMapGridBackgroundActivity(
      'git-refresh-settle',
      'Git refresh settle wait',
      true,
      `${MAP_REPO_REFRESH_SETTLE_MS}ms after pan`,
    );
    mapRefreshSettleTimeoutRef.current = window.setTimeout(() => {
      mapRefreshSettleTimeoutRef.current = null;
      canApplyRepoRefreshRef.current = true;
      setMapGridBackgroundActivity('git-refresh-settle', 'Git refresh settle wait', false);
      if (pendingRefreshAfterInteractionRef.current) {
        const gitStillPending = gitActivityEpochRef.current !== lastHandledGitActivityEpochRef.current;
        if (gitStillPending && repoPath) {
          void reloadRepoSnapshotFromGit(repoPath);
        } else {
          runRepoRefreshRef.current?.();
        }
      }
    }, MAP_REPO_REFRESH_SETTLE_MS);

    return () => {
      if (mapRefreshSettleTimeoutRef.current != null) {
        window.clearTimeout(mapRefreshSettleTimeoutRef.current);
        mapRefreshSettleTimeoutRef.current = null;
      }
    };
  }, [isMapInteracting]);

  useEffect(() => {
    if (!repoPath || !defaultBranch) return;
    gitActivityEpochRef.current = 0;
    lastHandledGitActivityEpochRef.current = 0;
    invoke('watch_repo', { repoPath }).catch(console.error);

    let isDisposed = false;
    let refreshInFlight = false;
    let pollTimeoutId: number | null = null;
    let headPollTimeoutId: number | null = null;
    let dirtyPollTimeoutId: number | null = null;
    let dirtySyncDebounceId: number | null = null;
    let fullRefreshCoalesceId: number | null = null;
    let pendingFullGraphRefresh = false;
    let unlisten: (() => void) | null = null;

    const scheduleCoalescedFullRefresh = () => {
      pendingFullGraphRefresh = true;
      if (fullRefreshCoalesceId != null) return;
      fullRefreshCoalesceId = window.setTimeout(() => {
        fullRefreshCoalesceId = null;
        if (!pendingFullGraphRefresh || isDisposed) return;
        pendingFullGraphRefresh = false;
        void runRefresh('timer');
      }, MIN_FULL_GRAPH_REFRESH_MS);
    };

    const isRepoRefreshBlocked = () =>
      isMapInteractingRef.current || !canApplyRepoRefreshRef.current;

    const runRefresh = async (incomingReason: 'graph' | 'local' | 'timer' | 'initial' | 'quick' = 'timer') => {
      let reason = incomingReason;
      if (isDisposed) return;
      if (refreshInFlight || reconcileInFlightRef.current) {
        pendingRefreshAfterInteractionRef.current = true;
        return;
      }
      if (repoMutationInFlightRef.current) {
        pendingRefreshAfterInteractionRef.current = true;
        setMapGridBackgroundActivity('git-refresh-pending', 'Git refresh queued', true, 'mutation in flight');
        return;
      }
      if (isRepoRefreshBlocked()) {
        pendingRefreshAfterInteractionRef.current = true;
        setMapGridBackgroundActivity('git-refresh-pending', 'Git refresh queued', true, reason);
        return;
      }

      const normalizedPath = normalizePath(repoPath);
      if (normalizedPath) {
        await syncPostCommitProtectionFromQuickState(normalizedPath);
      }
      const postCommitGuarded = Boolean(
        normalizedPath && isPostCommitProtectionActive(normalizedPath),
      );
      if (postCommitGuarded && reason !== 'graph' && reason !== 'quick') {
        pendingRefreshAfterInteractionRef.current = true;
        return;
      }
      const gitActivityPending = gitActivityEpochRef.current !== lastHandledGitActivityEpochRef.current;
      if (
        reason !== 'quick'
        && normalizedPath
        && lastSyncedRepoFingerprintRef.current[normalizedPath]
        && !gitActivityPending
        && Date.now() - (lastFingerprintCheckAtRef.current[normalizedPath] ?? 0) < MIN_BACKGROUND_FINGERPRINT_CHECK_MS
      ) {
        pendingRefreshAfterInteractionRef.current = false;
        return;
      }

      const externalRefresh = reason === 'graph' || reason === 'local' || reason === 'quick';

      const peek = await fetchRepoSyncPeek(repoPath);
      const gitActivityPendingNow = gitActivityEpochRef.current !== lastHandledGitActivityEpochRef.current;
      if (gitActivityPendingNow && (reason === 'graph' || reason === 'local')) {
        await reloadRepoSnapshotFromGit(repoPath, peek);
        return;
      }
      if (
        peek
        && !gitActivityPending
        && !postCommitGuarded
        && !isActiveUiBehindPeek(repoPath, peek)
        && absorbRedundantGitActivityRefresh(repoPath, peek)
      ) {
        return;
      }
      if (
        peek
        && !gitActivityPending
        && normalizedPath
        && lastSyncedRepoFingerprintRef.current[normalizedPath]
        && projectSyncPeekRef.current[normalizedPath] === peek.signature
      ) {
        try {
          if (reason !== 'quick' && refreshUiAlreadyMatchesPeek(repoPath, peek)) {
            markGitActivityHandled();
            pendingRefreshAfterInteractionRef.current = false;
            return;
          }
        } catch {
          // continue with refresh when peek/live comparison is unavailable
        }
      }
      if (peek && !postCommitGuarded && !gitActivityPending && await tryWorktreeListSync(repoPath, peek)) {
        pendingRefreshAfterInteractionRef.current = false;
        return;
      }
      if (peek && shouldSkipBackgroundSync(repoPath, peek, gitActivityPending)) {
        markGitActivityHandled();
        pendingRefreshAfterInteractionRef.current = false;
        return;
      }

      refreshInFlight = true;
      try {
        if (reason === 'quick') {
          if (await tryQuickStateDirtySync(repoPath, peek)) {
            pendingRefreshAfterInteractionRef.current = false;
            if (!peek || !isActiveUiBehindPeek(repoPath, peek)) {
              return;
            }
          }
        }

        if (!gitActivityPending) {
          const patched = await tryIncrementalBackgroundSync(repoPath, { force: externalRefresh, peek });
          if (patched && (!peek || !isActiveUiBehindPeek(repoPath, peek))) {
            pendingRefreshAfterInteractionRef.current = false;
            return;
          }
        }
      } catch (error) {
        console.warn('Quick-state sync failed:', error);
      } finally {
        refreshInFlight = false;
      }
      const uiBehindPeek = peek ? isActiveUiBehindPeek(repoPath, peek) : false;
      if (reason === 'quick' && !uiBehindPeek) {
        noteGitActivityHandledIfCaughtUp(repoPath, peek);
        return;
      }
      if (reason === 'quick' && uiBehindPeek) {
        reason = 'graph';
      }

      if (reason === 'graph' && normalizedPath && !gitActivityPending) {
        const lastFull = lastFullGraphRefreshAtRef.current[normalizedPath] ?? 0;
        if (Date.now() - lastFull < MIN_FULL_GRAPH_REFRESH_MS) {
          scheduleCoalescedFullRefresh();
          return;
        }
      }

      const refreshGitActivityPending = gitActivityEpochRef.current !== lastHandledGitActivityEpochRef.current;
      const refreshEpoch = mapInteractionEpochRef.current;
      const mutationAtStart = repoMutationGenerationRef.current;
      refreshInFlight = true;
      setMapGridBackgroundActivity('git-refresh', 'Git project refresh', true, reason);
      try {
        pendingRefreshAfterInteractionRef.current = false;
        setMapGridBackgroundActivity('git-refresh-pending', 'Git refresh queued', false);
        const result = await invoke<RefreshProjectResult>('refresh_project_if_changed', {
          projectId: repoPath,
        });
        if (refreshEpoch !== mapInteractionEpochRef.current || isRepoRefreshBlocked()) {
          pendingRefreshAfterInteractionRef.current = true;
          setMapGridBackgroundActivity('git-refresh-pending', 'Git refresh queued', true, 'stale or blocked');
          return;
        }
        const quickState = await invoke<RepoQuickState>('get_repo_quick_state', { repoPath }).catch(() => null);
        if (mutationAtStart !== repoMutationGenerationRef.current) return;
        if (!result.updated) {
          if (refreshGitActivityPending) {
            await applyPublishedSnapshotWhenBehind(repoPath, peek, { force: true });
          } else if (peek && isActiveUiBehindPeek(repoPath, peek)) {
            await applyPublishedSnapshotWhenBehind(repoPath, peek);
          } else if (quickState) {
            projectQuickStateRef.current = {
              ...projectQuickStateRef.current,
              [repoPath]: quickStateSignature(quickState),
            };
            if (!shouldRejectRegressionFromProtectedHead(repoPath, quickState.headSha)) {
              startTransition(() => {
                setCheckedOutRef((previous) => {
                  if (!previous) return previous;
                  let liveSnapshot: RepoVisualSnapshot;
                  try {
                    liveSnapshot = getSnapshotForMutation(repoPath);
                  } catch {
                    return previous;
                  }
                  const merged = mergeCheckedOutRefWithQuickState(
                    previous,
                    quickState,
                    liveSnapshot,
                  );
                  if (
                    previous.headSha === merged.headSha
                    && previous.hasUncommittedChanges === merged.hasUncommittedChanges
                    && (previous.parentSha ?? null) === (merged.parentSha ?? null)
                  ) {
                    return previous;
                  }
                  return merged;
                });
              });
            }
          }
          void invoke<FingerprintCheckResult>('check_project_fingerprint', { projectId: repoPath })
            .then((check) => noteSyncedRepoFingerprint(repoPath, check?.currentFingerprint))
            .catch(() => undefined);
          noteGitActivityHandledIfCaughtUp(repoPath, peek);
          return;
        }
        let nextSnapshot = toRepoVisualSnapshot(result.snapshot ?? null);
        if (!nextSnapshot) return;
        if (shouldBlockIncomingSnapshotApply(repoPath, nextSnapshot)) {
          markGitActivityHandled();
          return;
        }
        nextSnapshot = postCommitGuarded
          ? await reconcileSnapshotWorktreesOnly(repoPath, nextSnapshot)
          : await reconcileSnapshotForProjectSwitch(repoPath, nextSnapshot);
        if (shouldBlockIncomingSnapshotApply(repoPath, nextSnapshot)) {
          markGitActivityHandled();
          return;
        }
        if (shouldPreferLiveSnapshotOverIncoming(repoPath, nextSnapshot, peek)) {
          if (refreshGitActivityPending) {
            await applyPublishedSnapshotWhenBehind(repoPath, peek, { force: true });
          } else {
            markGitActivityHandled();
          }
          window.setTimeout(() => {
            void invoke('persist_project_snapshot', { projectId: repoPath }).catch((error) => {
              console.warn('Background snapshot persist failed:', error);
            });
          }, PERSIST_SNAPSHOT_DEFER_MS);
          return;
        }
        if (sameRepoPath(repoPath, repoPath)) {
          try {
            const live = buildActiveRepoSnapshot(repoPath);
            if (isIncomingSnapshotStaleComparedToLive(nextSnapshot, live)) {
              const prevCheckedOutRef = latestCheckedOutRef.current;
              if (refreshGitActivityPending) {
                flushSync(() => {
                  applyPatchedSnapshot(repoPath, live, false, {
                    force: true,
                    skipLayoutRebuild: false,
                  });
                });
              }
              noteGitActivityHandledIfCaughtUp(repoPath, peek);
              const headChanged = prevCheckedOutRef && live.checkedOutRef?.headSha !== prevCheckedOutRef.headSha;
              const branchChanged = prevCheckedOutRef && live.checkedOutRef?.branchName !== prevCheckedOutRef.branchName;
              if (headChanged || branchChanged) {
                autoFocusSyncKeyRef.current = null;
                focusCameraOnActiveWorktreeRef.current?.();
              }
              return;
            }
          } catch {
            // apply incoming when live snapshot is unavailable
          }
        }
        if (postCommitGuarded && normalizedPath) {
          const guard = postCommitProtectedHeadShaRef.current[normalizedPath];
          if (guard) {
            try {
              const live = getSnapshotForMutation(repoPath);
              if (
                snapshotContainsCommitSha(live, guard)
                && snapshotContainsCommitSha(nextSnapshot, guard)
              ) {
                const synced = await reconcileSnapshotWorktreesOnly(repoPath, live);
                const layoutChanged = mutationChangesWorktreeLayout(live, synced);
                const liveSignature = getRepoVisualSnapshotSignature(live);
                const syncedSignature = getRepoVisualSnapshotSignature(synced);
                if (syncedSignature === liveSignature) {
                  markGitActivityHandled();
                  void invoke<FingerprintCheckResult>('check_project_fingerprint', { projectId: repoPath })
                    .then((check) => noteSyncedRepoFingerprint(repoPath, check?.currentFingerprint))
                    .catch(() => undefined);
                  return;
                }
                upsertProjectSnapshot(repoPath, synced, { force: true });
                projectQuickStateRef.current = {
                  ...projectQuickStateRef.current,
                  [repoPath]: quickStateSignature(quickStateFromSnapshot(repoPath, synced)),
                };
                if (mutationAtStart === repoMutationGenerationRef.current && !isRepoRefreshBlocked()) {
                  startTransition(() => {
                    applyPatchedSnapshot(repoPath, synced, layoutChanged, { force: true });
                  });
                }
                void invoke<FingerprintCheckResult>('check_project_fingerprint', { projectId: repoPath })
                  .then((check) => noteSyncedRepoFingerprint(repoPath, check?.currentFingerprint))
                  .catch(() => undefined);
                markGitActivityHandled();
                return;
              }
            } catch {
              // fall through to full snapshot apply
            }
          }
        }
        upsertProjectSnapshot(repoPath, nextSnapshot);
        projectQuickStateRef.current = {
          ...projectQuickStateRef.current,
          [repoPath]: quickStateSignature(quickStateFromSnapshot(repoPath, nextSnapshot)),
        };
        if (normalizePath(repoPath) === normalizePath(nextSnapshot.path)) {
          if (isRepoRefreshBlocked()) {
            pendingRefreshAfterInteractionRef.current = true;
            setMapGridBackgroundActivity('git-refresh-pending', 'Git refresh queued', true, 'awaiting settle');
            return;
          }
          if (mutationAtStart !== repoMutationGenerationRef.current) return;
          const applySnapshot = () => {
            const prevCheckedOutRef = latestCheckedOutRef.current;
            const applied = applySnapshotToActiveState(repoPath, nextSnapshot, {
              force: reason === 'graph' || reason === 'local' || refreshGitActivityPending,
              allowIncomingDirty: true,
            });
            if (applied && quickState && !quickState.hasUncommittedChanges) {
              const headChanged = prevCheckedOutRef && quickState.headSha !== prevCheckedOutRef.headSha;
              const branchChanged = prevCheckedOutRef && quickState.branchName !== prevCheckedOutRef.branchName;
              if (headChanged || branchChanged) {
                autoFocusSyncKeyRef.current = null;
                focusCameraOnActiveWorktreeRef.current?.();
              }
            }
          };
          if (refreshGitActivityPending) {
            flushSync(applySnapshot);
            await syncCheckedOutRefFromQuickGitState(repoPath);
          } else {
            startTransition(applySnapshot);
          }
          if (normalizedPath) {
            lastFullGraphRefreshAtRef.current = {
              ...lastFullGraphRefreshAtRef.current,
              [normalizedPath]: Date.now(),
            };
          }
          void invoke<FingerprintCheckResult>('check_project_fingerprint', { projectId: repoPath })
            .then((check) => noteSyncedRepoFingerprint(repoPath, check?.currentFingerprint))
            .catch(() => undefined);
          noteGitActivityHandledIfCaughtUp(repoPath, peek);
        }
      } catch (error) {
        console.warn('Background project refresh failed:', error);
      } finally {
        refreshInFlight = false;
        setMapGridBackgroundActivity('git-refresh', 'Git project refresh', false);
        const stillPending = gitActivityEpochRef.current !== lastHandledGitActivityEpochRef.current;
        if (
          !isDisposed
          && stillPending
          && peek
          && !isGitActivityGraphCaughtUp(repoPath, peek)
          && !isRepoRefreshBlocked()
        ) {
          void reloadRepoSnapshotFromGit(repoPath, peek);
        } else if (!isDisposed && pendingRefreshAfterInteractionRef.current && !isRepoRefreshBlocked()) {
          void runRefresh();
        } else if (pendingRefreshAfterInteractionRef.current) {
          setMapGridBackgroundActivity('git-refresh-pending', 'Git refresh queued', true, 'waiting');
        }
      }
    };

    runRepoRefreshRef.current = (reason = 'timer') => {
      void runRefresh(reason);
    };

    const scheduleBackgroundProbe = () => {
      if (isDisposed) return;
      if (pollTimeoutId != null) window.clearTimeout(pollTimeoutId);
      const hidden = document.visibilityState !== 'visible';
      const delayMs = hidden ? 300000 : 120000;
      pollTimeoutId = window.setTimeout(() => {
        void runRefresh('timer');
        scheduleBackgroundProbe();
      }, delayMs);
    };

    const scheduleHeadStateProbe = () => {
      if (isDisposed) return;
      if (headPollTimeoutId != null) window.clearTimeout(headPollTimeoutId);
      const hidden = document.visibilityState !== 'visible';
      headPollTimeoutId = window.setTimeout(async () => {
        if (
          !isDisposed
          && !hidden
          && !isRepoRefreshBlocked()
          && !repoMutationInFlightRef.current
        ) {
          const peek = await fetchRepoSyncPeek(repoPath);
          const gitActivityPending = gitActivityEpochRef.current !== lastHandledGitActivityEpochRef.current;
          if (peek && (gitActivityPending || isActiveUiBehindPeek(repoPath, peek))) {
            void reloadRepoSnapshotFromGit(repoPath, peek);
          }
        }
        scheduleHeadStateProbe();
      }, hidden ? 60000 : HEAD_STATE_PROBE_MS);
    };

    const scheduleCoalescedDirtySync = () => {
      if (isDisposed) return;
      if (dirtySyncDebounceId != null) window.clearTimeout(dirtySyncDebounceId);
      dirtySyncDebounceId = window.setTimeout(() => {
        dirtySyncDebounceId = null;
        void syncLiveDirtyState(repoPath);
      }, DIRTY_SYNC_DEBOUNCE_MS);
    };

    const scheduleDirtyStateProbe = () => {
      if (isDisposed) return;
      if (dirtyPollTimeoutId != null) window.clearTimeout(dirtyPollTimeoutId);
      const hidden = document.visibilityState !== 'visible';
      dirtyPollTimeoutId = window.setTimeout(async () => {
        if (
          !isDisposed
          && !hidden
          && !isRepoRefreshBlocked()
          && !repoMutationInFlightRef.current
          && !isPostCommitProtectionActive(normalizePath(repoPath) ?? '')
        ) {
          // Working-tree edits do not touch .git/index; lightweight porcelain poll only.
          scheduleCoalescedDirtySync();
        }
        scheduleDirtyStateProbe();
      }, hidden ? 120000 : DIRTY_STATE_PROBE_MS);
    };

    listen<GitActivityEventPayload>('git-activity', (event) => {
      if (!sameRepoPath(event.payload.repoPath, repoPath)) return;
      gitActivityEpochRef.current += 1;
      if (event.payload.kind === 'local') {
        void syncLiveDirtyState(repoPath);
      } else {
        void reloadRepoSnapshotFromGit(repoPath);
      }
    }).then((fn) => {
      if (isDisposed) fn();
      else unlisten = fn;
    }).catch(console.error);

    scheduleBackgroundProbe();
    scheduleHeadStateProbe();
    scheduleDirtyStateProbe();

    return () => {
      isDisposed = true;
      runRepoRefreshRef.current = null;
      if (pollTimeoutId != null) window.clearTimeout(pollTimeoutId);
      if (headPollTimeoutId != null) window.clearTimeout(headPollTimeoutId);
      if (dirtyPollTimeoutId != null) window.clearTimeout(dirtyPollTimeoutId);
      if (dirtySyncDebounceId != null) window.clearTimeout(dirtySyncDebounceId);
      if (fullRefreshCoalesceId != null) window.clearTimeout(fullRefreshCoalesceId);
      if (unlisten) unlisten();
    };
  }, [repoPath, defaultBranch]);

  async function handleGitHubAuthSetup() {
    if (!repoPath) return;
    setGithubAuthLoading(true);
    setGithubAuthMessage(null);
    try {
      await invoke('authenticate_github');
      const authStatus = await invoke<GitHubAuthStatus>('get_github_auth_status');
      setGithubAuthStatus(authStatus);
      if (authStatus.authenticated) {
        await fetchGitHubData(repoPath);
      } else if (authStatus.message) {
        setGithubAuthMessage(authStatus.message);
      }
    } catch (e) {
      setGithubAuthMessage(e instanceof Error ? e.message : String(e));
    } finally {
      setGithubAuthLoading(false);
    }
  }

  // Reset when a new repo is loaded
  useEffect(() => {
    // Keep loaded graph/snapshot state intact while switching repos.
    // We only clear ephemeral UI state that should not carry over.
    setBranchPromptMeta({});
    branchMetaLoadKeyRef.current = null;
    branchHeadByNameRef.current = {};
    setGithubAuthLoading(false);
    setGithubAuthStatus(null);
    setGithubAuthMessage(null);
    setOpenPRs([]);
    setCommitSwitchFeedback(null);
  }, [repoPath]);

  useEffect(() => {
    if (!repoPath || !defaultBranch) {
      setBranchPromptMeta({});
      setBranchCommitPreviews({});
      setBranchParentByName({});
      setLaneByBranch({});
      setBranchUniqueAheadCounts({});
      branchMetaLoadKeyRef.current = null;
      branchHeadByNameRef.current = {};
      return;
    }

    const branchHeadKey = branches
      .map((branch) => `${branch.name}:${branch.headSha}`)
      .join('|');
    const mergeNodesKey = mergeNodes
      .map((node) => `${node.fullSha}:${node.parentShas?.[1] ?? ''}`)
      .join('|');
    const directCommitsKey = String(directCommits.length);
    const branchMetaLoadKey = `${repoPath}|${defaultBranch}|${branchHeadKey}|${mergeNodesKey}|${directCommitsKey}`;
    if (branchMetaLoadKeyRef.current === branchMetaLoadKey) {
      return;
    }
    branchMetaLoadKeyRef.current = branchMetaLoadKey;
    const nextCommitPreviews: Record<string, BranchCommitPreview[]> = {};
    const nextUniqueAheadCounts: Record<string, number> = {};
    for (const branch of branches) {
      if (branch.name === defaultBranch) continue;
      const previews = directCommits
        .filter((commit) => commit.branch === branch.name)
        .map((commit) => ({
          fullSha: commit.fullSha,
          sha: commit.sha,
          parentSha: commit.parentSha ?? null,
          message: commit.message,
          author: commit.author,
          date: commit.date,
          kind: 'commit' as const,
        }));
      nextCommitPreviews[branch.name] = previews;
      nextUniqueAheadCounts[branch.name] = previews.length;
    }

    const commitBranchesBySha = new Map<string, Set<string>>();
    for (const commit of directCommits) {
      const known = commitBranchesBySha.get(commit.fullSha) ?? new Set<string>();
      known.add(commit.branch);
      commitBranchesBySha.set(commit.fullSha, known);
    }
    const knownBranchNames = new Set(branches.map((branch) => branch.name));
    const isValidParentBranch = (candidate: string | null | undefined, selfName: string): candidate is string => {
      if (!candidate) return false;
      if (candidate === selfName) return false;
      if (candidate === defaultBranch) return true;
      return knownBranchNames.has(candidate);
    };
    const declaredParentByBranch = new Map(branches.map((branch) => [branch.name, branch.parentBranch ?? null]));
    const branchDepthByName = new Map<string, number>();
    const resolveBranchDepth = (branchName: string, visiting = new Set<string>()): number => {
      if (branchName === defaultBranch) return 0;
      const cached = branchDepthByName.get(branchName);
      if (cached != null) return cached;
      if (visiting.has(branchName)) return Number.MAX_SAFE_INTEGER;
      visiting.add(branchName);
      const parent = declaredParentByBranch.get(branchName) ?? null;
      const depth = parent && parent !== branchName
        ? resolveBranchDepth(parent, visiting) + 1
        : 1;
      visiting.delete(branchName);
      branchDepthByName.set(branchName, depth);
      return depth;
    };
    const branchCreatedAtByName = new Map(
      branches.map((branch) => [branch.name, new Date(branch.createdDate ?? branch.divergedFromDate ?? branch.lastCommitDate).getTime()]),
    );
    const pickCanonicalParentBranch = (candidates: Iterable<string>): string | null => {
      const valid = Array.from(candidates).filter((candidate) => knownBranchNames.has(candidate));
      if (valid.length === 0) return null;
      if (valid.includes(defaultBranch)) return defaultBranch;
      valid.sort((left, right) => {
        const depthDelta = resolveBranchDepth(left) - resolveBranchDepth(right);
        if (depthDelta !== 0) return depthDelta;
        const leftTime = branchCreatedAtByName.get(left) ?? Number.MAX_SAFE_INTEGER;
        const rightTime = branchCreatedAtByName.get(right) ?? Number.MAX_SAFE_INTEGER;
        if (leftTime !== rightTime) return leftTime - rightTime;
        return left.localeCompare(right);
      });
      return valid[0] ?? null;
    };
    const resolveParentBranchForSha = (sha: string | null | undefined): string | null => {
      if (!sha) return null;
      const exact = commitBranchesBySha.get(sha);
      if (exact) return pickCanonicalParentBranch(exact);
      const prefixMatches = new Set<string>();
      if (sha.length >= 7) {
        for (const [knownSha, branchNames] of commitBranchesBySha.entries()) {
          if (!knownSha.startsWith(sha)) continue;
          for (const name of branchNames) prefixMatches.add(name);
        }
      }
      return pickCanonicalParentBranch(prefixMatches);
    };
    const nextBranchParentByName: Record<string, string | null> = { [defaultBranch]: null };
    const nextBranchHeadByName: Record<string, string> = {};
    for (const branch of branches) {
      nextBranchHeadByName[branch.name] = branch.headSha;
      if (branch.name === defaultBranch) {
        nextBranchParentByName[branch.name] = null;
        continue;
      }
      const previousHead = branchHeadByNameRef.current[branch.name];
      const previousParent = latestBranchParentByNameRef.current[branch.name];
      if (
        previousHead === branch.headSha
        && previousParent !== undefined
        && isValidParentBranch(previousParent, branch.name)
      ) {
        nextBranchParentByName[branch.name] = previousParent;
        continue;
      }
      const branchCommits = directCommits.filter((commit) => commit.branch === branch.name);
      const branchCommitShas = new Set(branchCommits.map((commit) => commit.fullSha));
      const graphParentSha = branchCommits
        .filter((commit) => {
          const parentSha = commit.parentSha ?? null;
          return !parentSha || !branchCommitShas.has(parentSha);
        })
        .sort((a, b) => {
          const dt = new Date(a.date).getTime() - new Date(b.date).getTime();
          if (dt !== 0) return dt;
          return a.fullSha.localeCompare(b.fullSha);
        })[0]?.parentSha ?? null;
      const parentFromGraph = resolveParentBranchForSha(graphParentSha);
      const parentFromForkSha = resolveParentBranchForSha(
        branch.presidesFromSha ?? branch.divergedFromSha ?? branch.createdFromSha ?? null,
      );
      const parentFromBranchMeta = isValidParentBranch(branch.parentBranch ?? null, branch.name)
        ? branch.parentBranch!
        : null;
      const parentFromLatest = isValidParentBranch(latestBranchParentByNameRef.current[branch.name] ?? null, branch.name)
        ? latestBranchParentByNameRef.current[branch.name]!
        : null;
      const branchesByName = new Map(branches.map((item) => [item.name, item] as const));
      let resolvedParent =
        parentFromBranchMeta ??
        parentFromForkSha ??
        parentFromGraph ??
        parentFromLatest ??
        null;
      if (isParallelEmptyBranchParent(branch, resolvedParent, branchesByName, defaultBranch)) {
        resolvedParent = defaultBranch;
      } else if (
        resolvedParent &&
        isNewerBranchAsParent(branch, resolvedParent, branchesByName)
      ) {
        resolvedParent = defaultBranch;
      } else if (branch.commitsAhead <= 0 && resolvedParent && resolvedParent !== defaultBranch) {
        resolvedParent = defaultBranch;
      }
      if (!resolvedParent && isValidParentBranch(branch.parentBranch ?? null, branch.name)) {
        resolvedParent = branch.parentBranch!;
      }
      nextBranchParentByName[branch.name] = resolvedParent;
    }

    branchHeadByNameRef.current = nextBranchHeadByName;
    setBranchPromptMeta({});
    setBranchCommitPreviews(nextCommitPreviews);
    setBranchParentByName(nextBranchParentByName);
    setLaneByBranch((previous) => {
      const next: Record<string, number> = {};
      for (const branch of branches) {
        const lane = previous[branch.name];
        if (lane != null && Number.isFinite(lane)) {
          next[branch.name] = lane;
        }
      }
      return next;
    });
    setBranchUniqueAheadCounts(nextUniqueAheadCounts);
  }, [repoPath, defaultBranch, branches, mergeNodes, directCommits]);

  useEffect(() => {
    if (!commitSwitchFeedback) {
      setIsCommitSwitchFeedbackVisible(false);
      return;
    }

    setIsCommitSwitchFeedbackVisible(true);
    const hideTimer = window.setTimeout(() => {
      setIsCommitSwitchFeedbackVisible(false);
    }, COMMIT_SWITCH_FEEDBACK_VISIBLE_MS);
    const clearTimer = window.setTimeout(() => {
      setCommitSwitchFeedback(null);
    }, COMMIT_SWITCH_FEEDBACK_VISIBLE_MS + COMMIT_SWITCH_FEEDBACK_FADE_MS);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(clearTimer);
    };
  }, [commitSwitchFeedback]);

  // ── Cmd+Shift+S: capture screenshots of main timeline ──
  useEffect(() => {
    if (!repoPath || branches.length === 0) return;
    const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

    async function captureScreenshots() {
      const homeDir = await invoke<string>('get_home_dir');
      const outDir = `${homeDir}/Desktop/git-viz-screenshots/${repoName}`;
      console.log(`📸 Saving screenshots to ${outDir}`);

      await sleep(800);
      await invoke('screenshot', { path: `${outDir}/main-timeline.png` });
      console.log(`📸 Done — screenshot saved to ${outDir}`);
    }

    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && !e.shiftKey && !e.altKey && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsSidebarCollapsed((value) => !value);
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        captureScreenshots();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [repoPath, repoName, branches]);

  async function handleMapCommitClick(target: {
    commitSha: string;
    branchName?: string;
    worktreePath: string;
  }) {
    if (!repoPath) return;
    setCommitSwitchFeedback(null);

    const pathsProbablyEqual = (left: string, right: string): boolean => {
      const normalizedLeft = left.replace(/\\/g, '/').replace(/\/+$/, '');
      const normalizedRight = right.replace(/\\/g, '/').replace(/\/+$/, '');
      return (
        normalizedLeft === normalizedRight
        || normalizedLeft.toLowerCase() === normalizedRight.toLowerCase()
      );
    };

    const effectiveRepoPath = target.worktreePath;
    const shouldSwitchAppToTarget = !pathsProbablyEqual(effectiveRepoPath, repoPath);

    const finishCheckoutMutation = async (outcomes: RepoMutationOutcome[]) => {
      if (shouldSwitchAppToTarget) {
        endRepoMutation();
        await handleSwitchToWorktree(effectiveRepoPath);
        return;
      }
      await finalizeRepoMutation(effectiveRepoPath, ...outcomes);
    };

    const stashRestore = /^STASH:(\d+)$/.exec(target.commitSha);
    if (stashRestore) {
      try {
        beginRepoMutation();
        const stashIndex = parseInt(stashRestore[1], 10);
        const result = await invoke<StashRestoreMutationData>('apply_stash_restore', {
          repoPath: effectiveRepoPath,
          stashIndex,
        });
        await finishCheckoutMutation([outcomeFromStashRestore(result)]);
        const label = `Stash ${stashIndex + 1}`;
        setCommitSwitchFeedback({
          kind: 'success',
          message: `Restored ${label}; stash applied and dropped (uncommitted changes).`,
        });
      } catch (e) {
        endRepoMutation();
        const message = e instanceof Error ? e.message : String(e);
        setCommitSwitchFeedback({
          kind: 'error',
          message,
        });
        console.error('Failed to apply stash:', message);
      }
      return;
    }

    try {
      beginRepoMutation();
      let stashedPrefix = '';
      const checkoutOutcomes: RepoMutationOutcome[] = [];
      const refBefore = await invoke<CheckedOutRef>('get_checked_out_ref', { repoPath: effectiveRepoPath });
      if (refBefore.hasUncommittedChanges) {
        const stashResult = await invoke<StashPushMutationData>('stash_push', {
          repoPath: effectiveRepoPath,
          includeUntracked: true,
          message: (await invoke<string>('generate_stash_message', { repoPath: effectiveRepoPath })).trim(),
        });
        checkoutOutcomes.push(outcomeFromStashPush(stashResult));
        stashedPrefix = 'Stashed local changes (including untracked), then ';
      }

      const checkedOutRef = await (target.branchName
        ? invoke<CheckedOutRef>('checkout_branch', {
            repoPath: effectiveRepoPath,
            branchName: target.branchName,
          })
        : invoke<CheckedOutRef>('checkout_ref', {
            repoPath: effectiveRepoPath,
            refName: target.commitSha,
          }));
      checkoutOutcomes.push(outcomeFromCheckout(checkedOutRef));
      await finishCheckoutMutation(checkoutOutcomes);
      const refLabel = target.branchName
        ? target.branchName
        : `${target.commitSha.slice(0, 7)} (detached)`;
      setCommitSwitchFeedback({
        kind: 'success',
        message: `${stashedPrefix}Checked out ${refLabel}`,
      });
    } catch (e) {
      endRepoMutation();
      const message = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({
        kind: 'error',
        message,
      });
      console.error('Failed to checkout commit:', message);
    }
  }

  async function handleStashLocalChanges() {
    if (!repoPath || stashInProgress) return;
    setCommitSwitchFeedback(null);
    setStashInProgress(true);
    try {
      const ref = await invoke<CheckedOutRef>('get_checked_out_ref', { repoPath });
      if (!ref.hasUncommittedChanges) {
        setCommitSwitchFeedback({
          kind: 'error',
          message: 'No local changes to stash.',
        });
        return;
      }
      beginRepoMutation();
      const stashResult = await invoke<StashPushMutationData>('stash_push', {
        repoPath,
        includeUntracked: true,
        message: (await invoke<string>('generate_stash_message', { repoPath })).trim(),
      });
      await finalizeRepoMutation(repoPath, outcomeFromStashPush(stashResult));
      setCommitSwitchFeedback({
        kind: 'success',
        message: 'Stashed local changes (including untracked files).',
      });
    } catch (e) {
      endRepoMutation();
      const message = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({
        kind: 'error',
        message,
      });
      console.error('Failed to stash:', message);
    } finally {
      setStashInProgress(false);
    }
  }

  async function commitLocalChangesWithMessage(trimmed: string): Promise<boolean> {
    if (!repoPath) return false;
    try {
      const ref = await invoke<CheckedOutRef>('get_checked_out_ref', { repoPath });
      if (!ref.hasUncommittedChanges) {
        setCommitSwitchFeedback({
          kind: 'error',
          message: 'No local changes to commit.',
        });
        return false;
      }
      beginRepoMutation();
      const commitResult = await invoke<CommitMutationData>('commit_working_tree', {
        repoPath,
        message: trimmed,
      });
      if (commitResult.branchName && commitResult.fullSha) {
        const normalizedPath = normalizePath(repoPath);
        userDirtyNodePositionsRef.current.add(normalizedPath);
        const migrated = migrateWorkingTreeNodeOverrides(
          nodePositionOverridesByRepo[normalizedPath] ?? {},
          commitResult.branchName,
          commitResult.fullSha,
        );
        persistRepoNodePositions(normalizedPath, migrated);
        setNodePositionOverridesByRepo((previous) => ({
          ...previous,
          [normalizedPath]: migrated,
        }));
      }
      await finalizeRepoMutation(repoPath, outcomeFromCommitData(commitResult));
      setCommitSwitchFeedback({
        kind: 'success',
        message: 'Committed local changes.',
      });
      return true;
    } catch (e) {
      endRepoMutation();
      const errText = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({
        kind: 'error',
        message: errText,
      });
      console.error('Failed to commit:', errText);
      return false;
    }
  }

  async function handleCommitLocalChanges(message: string): Promise<boolean> {
    if (!repoPath || commitInProgress) return false;
    const trimmed = message.trim();
    if (!trimmed) {
      setCommitSwitchFeedback({
        kind: 'error',
        message: 'Enter a commit message.',
      });
      return false;
    }
    setCommitSwitchFeedback(null);
    setCommitInProgress(true);
    try {
      return await commitLocalChangesWithMessage(trimmed);
    } finally {
      setCommitInProgress(false);
    }
  }

  async function handleAutoCommitLocalChanges(): Promise<boolean> {
    if (!repoPath || commitInProgress) return false;
    setCommitSwitchFeedback(null);
    setCommitInProgress(true);
    try {
      const ref = await invoke<CheckedOutRef>('get_checked_out_ref', { repoPath });
      if (!ref.hasUncommittedChanges) {
        setCommitSwitchFeedback({
          kind: 'error',
          message: 'No local changes to commit.',
        });
        return false;
      }
      const message = (await invoke<string>('generate_commit_message', { repoPath })).trim();
      if (!message) {
        setCommitSwitchFeedback({
          kind: 'error',
          message: 'Could not generate a commit message. Use Write commit.',
        });
        return false;
      }
      return await commitLocalChangesWithMessage(message);
    } catch (e) {
      const errText = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({
        kind: 'error',
        message: errText,
      });
      console.error('Failed to auto-commit:', errText);
      return false;
    } finally {
      setCommitInProgress(false);
    }
  }

  async function handleStageAllChanges(): Promise<boolean> {
    if (!repoPath || stageInProgress) return false;
    setCommitSwitchFeedback(null);
    setStageInProgress(true);
    try {
      const ref = await invoke<CheckedOutRef>('get_checked_out_ref', { repoPath });
      if (!ref.hasUncommittedChanges) {
        setCommitSwitchFeedback({
          kind: 'error',
          message: 'No local changes to stage.',
        });
        return false;
      }
      beginRepoMutation();
      const nextRef = await invoke<CheckedOutRef>('stage_working_tree', { repoPath });
      await finalizeRepoMutation(repoPath, outcomeFromCheckout(nextRef));
      setCommitSwitchFeedback({
        kind: 'success',
        message: 'Staged all changes.',
      });
      return true;
    } catch (e) {
      endRepoMutation();
      const errText = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({
        kind: 'error',
        message: errText,
      });
      console.error('Failed to stage:', errText);
      return false;
    } finally {
      setStageInProgress(false);
    }
  }

  async function handleCreateBranchFromNode(nodeId: string, branchName: string) {
    if (!repoPath || createBranchFromNodeInProgress) return;
    setCreateBranchFromNodeInProgress(true);
    setCommitSwitchFeedback(null);
    try {
      beginRepoMutation();
      const stashMatch = /^STASH:(\d+)$/.exec(nodeId);
      if (stashMatch) {
        const stashIndex = parseInt(stashMatch[1], 10);
        await invoke<CheckedOutRef>('move_stash_to_new_branch', {
          repoPath,
          stashIndex,
          branchName,
        });
      } else {
        await invoke<CheckedOutRef>('create_branch_from_uncommitted', {
          repoPath,
          branchName,
        });
      }
      await finalizeRepoMutation(repoPath, { kind: 'fullRefresh', layoutTopologyChanged: true });
      setCommitSwitchFeedback({
        kind: 'success',
        message: `Moved to new branch "${branchName}"`,
      });
    } catch (e) {
      endRepoMutation();
      const message = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({ kind: 'error', message });
      console.error('Failed to create branch from node:', message);
    } finally {
      setCreateBranchFromNodeInProgress(false);
    }
  }

  async function handleCreateRootBranch(branchName: string) {
    if (!repoPath || createBranchFromNodeInProgress) return;
    setCreateBranchFromNodeInProgress(true);
    setCommitSwitchFeedback(null);
    try {
      beginRepoMutation();
      await invoke<CheckedOutRef>('create_root_branch', {
        repoPath,
        branchName,
      });
      await finalizeRepoMutation(repoPath, { kind: 'fullRefresh', layoutTopologyChanged: true });
      setCommitSwitchFeedback({
        kind: 'success',
        message: `Created new root branch "${branchName}"`,
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({ kind: 'error', message });
      console.error('Failed to create root branch:', message);
    } finally {
      setCreateBranchFromNodeInProgress(false);
    }
  }

  async function handleMoveNodeBackToBranch(targetBranchName: string) {
    if (!repoPath) return;
    setCommitSwitchFeedback(null);
    try {
      beginRepoMutation();
      const checkedOutRef = await invoke<CheckedOutRef>('checkout_branch', {
        repoPath,
        branchName: targetBranchName,
      });
      await finalizeRepoMutation(repoPath, outcomeFromCheckout(checkedOutRef));
      setCommitSwitchFeedback({
        kind: 'success',
        message: `Moved back to "${targetBranchName}"`,
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({ kind: 'error', message });
      console.error('Failed to move node back:', message);
    }
  }

  async function handleMergeRefsIntoBranch(sourceRefs: string[], targetBranch: string) {
    if (!repoPath) return;
    const uniqueSourceRefs = Array.from(new Set(sourceRefs.filter((ref) => !!ref && ref !== targetBranch)));
    if (uniqueSourceRefs.length === 0) return;
    setCommitSwitchFeedback(null);
    setMergeInProgress(true);
    try {
      beginRepoMutation();
      for (const sourceRef of uniqueSourceRefs) {
        await invoke<CheckedOutRef>('merge_ref_into_branch', {
          repoPath,
          sourceRef,
          targetBranch,
        });
      }
      await finalizeRepoMutation(repoPath, { kind: 'fullRefresh', layoutTopologyChanged: true });
      setCommitSwitchFeedback({
        kind: 'success',
        message: uniqueSourceRefs.length === 1
          ? `Merged ${uniqueSourceRefs[0].slice(0, 7)} into ${targetBranch}`
          : `Merged ${uniqueSourceRefs.length} commits into ${targetBranch}`,
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({
        kind: 'error',
        message,
      });
      console.error('Failed to merge refs into branch:', message);
    } finally {
      setMergeInProgress(false);
    }
  }

  async function handlePushAllBranches() {
    if (!repoPath || pushInProgress) return;
    setCommitSwitchFeedback(null);
    setPushInProgress(true);
    try {
      beginRepoMutation();
      let pushed: Array<{ branchName: string }> = [];
      let usedPull = false;
      try {
        pushed = await invoke<Array<{ branchName: string }>>('push_all_unpushed_branches', {
          repoPath,
        });
      } catch (pushError) {
        const pushMessage = pushError instanceof Error ? pushError.message : String(pushError);
        const isNonFastForward = /non-fast-forward|fetch first|rejected/i.test(pushMessage);
        if (!isNonFastForward) throw pushError;
        const branchName = checkedOutRef?.branchName;
        if (!branchName) throw pushError;
        const useRebase = window.confirm(
          'Push all hit non-fast-forward.\n\nOK: pull --rebase then retry\nCancel: pull --no-rebase then retry',
        );
        await invoke('pull_branch_with_strategy', { repoPath, branchName, rebase: useRebase });
        usedPull = true;
        pushed = await invoke<Array<{ branchName: string }>>('push_all_unpushed_branches', {
          repoPath,
        });
      }
      if (usedPull) {
        await finalizeRepoMutation(repoPath, { kind: 'fullRefresh', layoutTopologyChanged: true });
      } else {
        await finalizeRepoMutation(
          repoPath,
          outcomeFromPush(pushed.map((entry) => entry.branchName)),
        );
      }
      setCommitSwitchFeedback({
        kind: 'success',
        message: pushed.length > 0
          ? pushed.length === 1
            ? `Pushed ${pushed[0].branchName}`
            : `Pushed ${pushed.length} branches`
          : 'Everything local is already pushed.',
      });
    } catch (e) {
      endRepoMutation();
      const message = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({
        kind: 'error',
        message,
      });
      console.error('Failed to push all branches:', message);
    } finally {
      setPushInProgress(false);
    }
  }

  async function handlePushCurrentBranch() {
    if (!repoPath || pushInProgress) return;
    setCommitSwitchFeedback(null);
    setPushInProgress(true);
    try {
      beginRepoMutation();
      const pushed = await invoke<{ branchName: string }>('push_current_branch', {
        repoPath,
      });
      await finalizeRepoMutation(repoPath, outcomeFromPush([pushed.branchName]));
      setCommitSwitchFeedback({
        kind: 'success',
        message: `Pushed ${pushed.branchName}`,
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      const isNonFastForward = /non-fast-forward|fetch first|rejected/i.test(message);
      if (isNonFastForward) {
        const useRebase = window.confirm(
          'Push was rejected (non-fast-forward).\n\nOK: pull --rebase then retry push\nCancel: pull --no-rebase then retry push',
        );
        try {
          const branchName = checkedOutRef?.branchName;
          if (!branchName) throw new Error('Cannot resolve current branch for pull.');
          await invoke('pull_branch_with_strategy', { repoPath, branchName, rebase: useRebase });
          const pushed = await invoke<{ branchName: string }>('push_current_branch', { repoPath });
          await finalizeRepoMutation(repoPath, { kind: 'fullRefresh', layoutTopologyChanged: true });
          setCommitSwitchFeedback({
            kind: 'success',
            message: `Pulled (${useRebase ? 'rebase' : 'merge'}) and pushed ${pushed.branchName}`,
          });
          return;
        } catch (retryError) {
          endRepoMutation();
          const retryMessage = retryError instanceof Error ? retryError.message : String(retryError);
          setCommitSwitchFeedback({ kind: 'error', message: retryMessage });
          console.error('Failed to resolve non-fast-forward:', retryMessage);
          return;
        }
      }
      endRepoMutation();
      setCommitSwitchFeedback({
        kind: 'error',
        message,
      });
      console.error('Failed to push current branch:', message);
    } finally {
      setPushInProgress(false);
    }
  }

  async function handlePushCommitTargets(targets: PushTarget[]) {
    if (!repoPath || pushInProgress) return;
    const uniqueTargets = Array.from(
      new Map(
        targets
          .filter((target) => target.branchName && target.targetSha)
          .map((target) => [target.branchName, target])
      ).values()
    );
    if (uniqueTargets.length === 0) return;

    setCommitSwitchFeedback(null);
    setPushInProgress(true);
    try {
      beginRepoMutation();
      let usedPull = false;
      for (const target of uniqueTargets) {
        try {
          await invoke('push_branch', {
            repoPath,
            branchName: target.branchName,
            targetSha: target.targetSha,
          });
        } catch (pushError) {
          const pushMessage = pushError instanceof Error ? pushError.message : String(pushError);
          const isNonFastForward = /non-fast-forward|fetch first|rejected/i.test(pushMessage);
          if (!isNonFastForward) throw pushError;
          const useRebase = window.confirm(
            `Push rejected for ${target.branchName} (non-fast-forward).\n\nOK: pull --rebase then retry\nCancel: pull --no-rebase then retry`,
          );
          await invoke('pull_branch_with_strategy', { repoPath, branchName: target.branchName, rebase: useRebase });
          usedPull = true;
          await invoke('push_branch', {
            repoPath,
            branchName: target.branchName,
            targetSha: target.targetSha,
          });
        }
      }
      if (usedPull) {
        await finalizeRepoMutation(repoPath, { kind: 'fullRefresh', layoutTopologyChanged: true });
      } else {
        await finalizeRepoMutation(
          repoPath,
          outcomeFromPush(uniqueTargets.map((target) => target.branchName)),
        );
      }
      setCommitSwitchFeedback({
        kind: 'success',
        message: uniqueTargets.length === 1
          ? `Pushed ${uniqueTargets[0].branchName} through ${uniqueTargets[0].targetSha?.slice(0, 7)}`
          : `Pushed ${uniqueTargets.length} selected commit ranges`,
      });
    } catch (e) {
      endRepoMutation();
      const message = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({
        kind: 'error',
        message,
      });
      console.error('Failed to push selected commits:', message);
    } finally {
      setPushInProgress(false);
    }
  }

  async function handleDeleteSelection(targets: {
    branchNames: string[];
    discardUncommittedChanges: boolean;
    discardUncommittedWorktreePaths?: string[];
    stashIndices?: number[];
  }) {
    if (!repoPath || deleteInProgress) return;
    const uniqueBranchNames = Array.from(new Set(targets.branchNames.filter((branchName) => branchName && branchName !== defaultBranch)));
    const discardPaths = Array.from(
      new Set(
        (targets.discardUncommittedWorktreePaths?.length
          ? targets.discardUncommittedWorktreePaths
          : targets.discardUncommittedChanges
            ? [repoPath]
            : []
        ).filter((path) => path.trim().length > 0),
      ),
    );
    const shouldDiscardUncommitted = discardPaths.length > 0;
    const stashIndices = targets.stashIndices ?? [];
    const uniqueStashDescending = Array.from(new Set(stashIndices)).sort((a, b) => b - a);
    if (uniqueBranchNames.length === 0 && !shouldDiscardUncommitted && uniqueStashDescending.length === 0) return;

    setCommitSwitchFeedback(null);
    setDeleteInProgress(true);
    try {
      beginRepoMutation();
      const mutationOutcomes: RepoMutationOutcome[] = [];

      for (const stashIndex of uniqueStashDescending) {
        await invoke('stash_drop', { repoPath, stashIndex });
      }
      if (uniqueStashDescending.length > 0) {
        mutationOutcomes.push(outcomeFromStashDrops(uniqueStashDescending));
      }

      let deleteResult: DeleteSelectionMutationData = {
        deletedBranches: [],
        discardedUncommittedChanges: false,
        checkedOutRef: null,
      };
      if (uniqueBranchNames.length > 0) {
        const result = await invoke<DeleteSelectionMutationData>('delete_selected_elements', {
          repoPath,
          branchNames: uniqueBranchNames,
          discardUncommittedChanges: false,
        });
        deleteResult = {
          deletedBranches: result.deletedBranches,
          discardedUncommittedChanges: result.discardedUncommittedChanges,
          checkedOutRef: result.checkedOutRef,
        };
      }
      for (const worktreePath of discardPaths) {
        const discardResult = await invoke<DeleteSelectionMutationData>('delete_selected_elements', {
          repoPath: worktreePath,
          branchNames: [],
          discardUncommittedChanges: true,
        });
        if (discardResult.discardedUncommittedChanges) {
          deleteResult = {
            ...deleteResult,
            discardedUncommittedChanges: true,
            checkedOutRef: discardResult.checkedOutRef ?? deleteResult.checkedOutRef,
          };
        }
      }

      if (deleteResult.deletedBranches.length > 0 || deleteResult.discardedUncommittedChanges) {
        mutationOutcomes.push(outcomeFromDeleteSelection(deleteResult));
      }

      await finalizeRepoMutation(repoPath, ...mutationOutcomes);
      const feedbackParts: string[] = [];
      if (uniqueStashDescending.length > 0) {
        feedbackParts.push(
          uniqueStashDescending.length === 1
            ? `removed stash ${uniqueStashDescending[0]! + 1}`
            : `removed ${uniqueStashDescending.length} stashes`
        );
      }
      if (deleteResult.discardedUncommittedChanges) feedbackParts.push('discarded local uncommitted changes');
      if (deleteResult.deletedBranches.length > 0) {
        feedbackParts.push(
          deleteResult.deletedBranches.length === 1
            ? `deleted ${deleteResult.deletedBranches[0]}`
            : `deleted ${deleteResult.deletedBranches.length} branches`
        );
      }
      setCommitSwitchFeedback({
        kind: 'success',
        message: feedbackParts.length > 0 ? feedbackParts.join(' and ') : 'Nothing to delete.',
      });
    } catch (e) {
      endRepoMutation();
      const message = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({
        kind: 'error',
        message,
      });
      console.error('Failed to delete selected elements:', message);
    } finally {
      setDeleteInProgress(false);
    }
  }

  void [
    mapLoading,
    worktrees,
    removeWorktreeInProgress,
    scrollRequest,
    focusedErrorBranch,
    mergeInProgress,
    pushInProgress,
    deleteInProgress,
    branchPromptMeta,
    stashInProgress,
    commitInProgress,
    stageInProgress,
    createBranchFromNodeInProgress,
    handleMapCommitClick,
    handleRemoveWorktree,
    handleStashLocalChanges,
    handleCommitLocalChanges,
    handleStageAllChanges,
    handleCreateBranchFromNode,
    handleCreateRootBranch,
    handleMoveNodeBackToBranch,
    handleMergeRefsIntoBranch,
    handlePushAllBranches,
    handlePushCurrentBranch,
    handlePushCommitTargets,
    handleDeleteSelection,
  ];

  const handleGridFocusChange = useCallback((sha: string | null) => {
    setGridFocusSha(sha);
    if (sha && repoPath && isWorkingTreeCommitId(sha)) {
      persistWorktreeFocusSha(repoPath, sha);
    }
  }, [repoPath]);

  function handleSidebarSelectCommit(sha: string) {
    if (!sha) return;
    handleGridFocusChange(sha);
    setGridSearchJumpToken((token) => token + 1);
  }

  function handleSidebarSelectBranch(branchName: string) {
    if (!branchName) return;
    setGridSearchQuery(branchName);
    setGridSearchJumpToken((token) => token + 1);
  }

  // Synthetic stash nodes (yellow) and per-worktree worktree nodes — same lane rules as before.
  const {
    enrichedBranches,
    enrichedBranchCommitPreviews,
    enrichedBranchUniqueAheadCounts,
    enrichedDirectCommits,
    enrichedUnpushedDirectCommits,
    visualCheckedOutRef,
  } = useMemo(() => {
    const sessionsForGraph = buildWorktreeSessions(worktrees, repoPath ?? undefined, checkedOutRef);
    const anyDirty = sessionsForGraph.some((session) => session.hasUncommittedChanges);
    const stashFolded = foldStashNodesIntoGraph(
      stashes,
      branches,
      directCommits,
      branchCommitPreviews,
      branchUniqueAheadCounts,
      defaultBranch,
      anyDirty,
    );
    let eb = stashFolded.branches;
    let edc = stashFolded.directCommits;
    let eupdc = unpushedDirectCommits;
    let ebp = stashFolded.branchCommitPreviews;
    let ebuac = stashFolded.branchUniqueAheadCounts;
    let effectiveCheckedOutRef = checkedOutRef;
    const hasRemoteTipInLocalGraph = remoteDefaultTipSha
      ? edc.some((commit) => commit.fullSha === remoteDefaultTipSha || commit.sha === remoteDefaultTipSha.slice(0, 7))
      : true;
    if (remoteDefaultTipSha && remoteDefaultTipParentSha && !hasRemoteTipInLocalGraph) {
      const parentDate =
        edc.find((commit) => commit.fullSha === remoteDefaultTipParentSha || commit.sha === remoteDefaultTipParentSha.slice(0, 7))?.date ??
        ebp[defaultBranch]?.find((commit) => commit.fullSha === remoteDefaultTipParentSha || commit.sha === remoteDefaultTipParentSha.slice(0, 7))?.date ??
        null;
      const remoteDate = parentDate
        ? new Date(new Date(parentDate).getTime() + 1000).toISOString()
        : new Date().toISOString();
      const previousDefaultHeadSha =
        remoteDefaultTipParentSha ??
        eb.find((branch) => branch.name === defaultBranch)?.headSha ??
        (edc[0]?.fullSha ?? null);
      const remotePreviewNode: BranchCommitPreview = {
        fullSha: remoteDefaultTipSha,
        sha: remoteDefaultTipSha.slice(0, 7),
        parentSha: previousDefaultHeadSha,
        message: remoteDefaultTipMetadata?.subject?.trim() || `Remote commit on origin/${defaultBranch}`,
        author: remoteDefaultTipMetadata?.author?.trim() || 'Unknown',
        date: remoteDate,
        kind: 'commit',
        isRemote: true,
      };
      const remoteDirectCommit: DirectCommit = {
        fullSha: remoteDefaultTipSha,
        sha: remoteDefaultTipSha.slice(0, 7),
        parentSha: previousDefaultHeadSha,
        parentShas: previousDefaultHeadSha ? [previousDefaultHeadSha] : [],
        childShas: [],
        branch: defaultBranch,
        message: remotePreviewNode.message,
        author: remotePreviewNode.author,
        date: remoteDate,
        kind: 'commit',
        isRemote: true,
      };
      edc = [remoteDirectCommit, ...edc];
      ebp = {
        ...ebp,
        [defaultBranch]: [remotePreviewNode, ...(ebp[defaultBranch] ?? [])],
      };
      eb = eb.map((branch) => (
        branch.name === defaultBranch
          ? {
              ...branch,
              headSha: remoteDefaultTipSha,
              lastCommitDate: remoteDate,
            }
          : branch
      ));
    }

    const hasActiveRemoteOnlyDivergence =
      !!remoteDefaultTipSha &&
      !!remoteDefaultTipParentSha &&
      !hasRemoteTipInLocalGraph;
    const shouldSplitLocalDivergenceLane =
      hasActiveRemoteOnlyDivergence &&
      checkedOutRef?.branchName === defaultBranch &&
      checkedOutRef.headSha !== remoteDefaultTipSha &&
      (checkedOutRef.hasUncommittedChanges || unpushedDirectCommits.length > 0);
    if (shouldSplitLocalDivergenceLane) {
      const localBranchName = `${defaultBranch} (local)`;
      const localUnpushedShas = new Set(unpushedDirectCommits.map((commit) => commit.fullSha));
      if (checkedOutRef?.headSha) localUnpushedShas.add(checkedOutRef.headSha);
      const localBranchDate =
        unpushedDirectCommits[0]?.date ??
        (checkedOutRef?.headSha ? edc.find((commit) => commit.fullSha === checkedOutRef.headSha)?.date : undefined) ??
        new Date().toISOString();

      if (!eb.some((branch) => branch.name === localBranchName)) {
        eb = [
          ...eb,
          {
            name: localBranchName,
            commitsAhead: Math.max(1, localUnpushedShas.size),
            commitsBehind: 0,
            lastCommitDate: localBranchDate,
            lastCommitAuthor: checkedOutRef?.branchName ?? 'You',
            status: 'fresh',
            remoteSyncStatus: 'unpushed',
            unpushedCommits: Math.max(1, localUnpushedShas.size),
            headSha: checkedOutRef?.headSha ?? (unpushedDirectCommits[0]?.fullSha ?? 'WORKING_TREE'),
            parentBranch: defaultBranch,
          },
        ];
      }

      edc = edc.map((commit) =>
        commit.branch === defaultBranch && localUnpushedShas.has(commit.fullSha)
          ? { ...commit, branch: localBranchName }
          : commit,
      );
      eupdc = eupdc.map((commit) =>
        commit.branch === defaultBranch && localUnpushedShas.has(commit.fullSha)
          ? { ...commit, branch: localBranchName }
          : commit,
      );

      const defaultPreviews = ebp[defaultBranch] ?? [];
      const localPreviews = defaultPreviews.filter((preview) => (
        (effectiveCheckedOutRef?.hasUncommittedChanges && isWorkingTreeCommitId(preview.fullSha))
        || localUnpushedShas.has(preview.fullSha)
      ));
      const retainedDefaultPreviews = defaultPreviews.filter((preview) => !localPreviews.includes(preview));
      if (localPreviews.length > 0) {
        ebp = {
          ...ebp,
          [defaultBranch]: retainedDefaultPreviews,
          [localBranchName]: [...localPreviews, ...(ebp[localBranchName] ?? [])],
        };
      }
      ebuac = {
        ...ebuac,
        [localBranchName]: Math.max(1, localUnpushedShas.size),
      };
      if (effectiveCheckedOutRef?.branchName === defaultBranch) {
        effectiveCheckedOutRef = {
          ...effectiveCheckedOutRef,
          branchName: localBranchName,
        };
      }
    }

    const sessionsForInject = buildWorktreeSessions(worktrees, repoPath ?? undefined, effectiveCheckedOutRef);
    const injected = injectWorktreeUncommittedPreviews({
      sessions: sessionsForInject,
      branches: eb,
      branchCommitPreviews: ebp,
      branchUniqueAheadCounts: ebuac,
      directCommits: edc,
      defaultBranch,
    });
    return {
      enrichedBranches: injected.branches,
      enrichedDirectCommits: edc,
      enrichedUnpushedDirectCommits: eupdc,
      enrichedBranchCommitPreviews: injected.branchCommitPreviews,
      enrichedBranchUniqueAheadCounts: injected.branchUniqueAheadCounts,
      visualCheckedOutRef: effectiveCheckedOutRef,
    };
  }, [branches, branchCommitPreviews, branchUniqueAheadCounts, checkedOutRef, defaultBranch, directCommits, remoteDefaultTipMetadata, remoteDefaultTipParentSha, remoteDefaultTipSha, repoPath, stashes, unpushedDirectCommits, worktrees]);

  /** Must match `visualCheckedOutRef` (lane split) so layout pin + inject agree after incremental patches. */
  const worktreeSessions = useMemo(
    () => buildWorktreeSessions(worktrees, repoPath ?? undefined, visualCheckedOutRef ?? checkedOutRef),
    [worktrees, repoPath, visualCheckedOutRef, checkedOutRef],
  );

  const focusCameraOnActiveWorktree = useCallback(() => {
    if (!repoPath) return;
    const focusSha = worktreeSessions.length > 0
      ? resolveActiveWorktreeFocusSha(worktreeSessions, repoPath)
      : visualCheckedOutRef?.headSha ?? null;
    if (!focusSha) return;
    const syncKey = `${repoPath}|${mapGridOrientation}|${mapSwitchEpoch}|${focusSha}`;
    if (autoFocusSyncKeyRef.current === syncKey) return;
    autoFocusSyncKeyRef.current = syncKey;
    if (isWorkingTreeCommitId(focusSha)) {
      persistWorktreeFocusSha(repoPath, focusSha);
    }
    const isFirstLoad = isFirstLoadSessionRef.current;
    if (isFirstLoad) {
      isFirstLoadSessionRef.current = false;
      try {
        window.localStorage.removeItem(mapGridCameraStorageKey(`${repoPath}::${mapGridOrientation}`));
      } catch {
        // ignore storage failures
      }
      setGridFocusSha(focusSha);
      setGridSearchJumpToken((token) => token + 1);
      return;
    }
    if (!readHasSavedMapGridCamera(repoPath, mapGridOrientation)) {
      setGridFocusSha(focusSha);
      setGridSearchJumpToken((token) => token + 1);
    }
  }, [
    mapGridOrientation,
    mapSwitchEpoch,
    repoPath,
    visualCheckedOutRef?.headSha,
    worktreeSessions,
  ]);
  focusCameraOnActiveWorktreeRef.current = focusCameraOnActiveWorktree;

  useEffect(() => {
    const readyForAutoFocus =
      !mapLoading &&
      !loading &&
      mapReadyForDisplay &&
      (
        remoteDefaultTipSha == null ||
        (isRemoteTipHydrated && remoteDefaultTipParentSha != null)
      );
    if (!readyForAutoFocus || !repoPath) return;
    focusCameraOnActiveWorktree();
  }, [
    focusCameraOnActiveWorktree,
    isRemoteTipHydrated,
    loading,
    mapReadyForDisplay,
    mapLoading,
    remoteDefaultTipParentSha,
    remoteDefaultTipSha,
    repoPath,
    branches,
    directCommits,
    unpushedDirectCommits,
  ]);

  useEffect(() => {
    autoFocusSyncKeyRef.current = null;
    setGridFocusSha(null);
  }, [repoPath, mapSwitchEpoch]);
  const branchesForLayout = useMemo(
    () => applyBranchParents(enrichedBranches, branchParentByName, defaultBranch),
    [enrichedBranches, branchParentByName, defaultBranch],
  );
  const enrichedBranchParentByName = useMemo(() => {
    const map: Record<string, string | null> = { [defaultBranch]: null };
    for (const branch of branchesForLayout) {
      if (branch.name === defaultBranch) continue;
      map[branch.name] = branch.parentBranch ?? null;
    }
    return map;
  }, [branchesForLayout, defaultBranch]);
  const graphLayoutSignature = useMemo(
    () => [
      'layout-v14-worktree-session-sig',
      layoutEpoch,
      defaultBranch,
      visualCheckedOutRef?.branchName ?? '',
      visualCheckedOutRef?.headSha ?? '',
      formatWorktreeSessionLayoutSignature(worktreeSessions),
      branchesForLayout.map((branch) => `${branch.name}:${branch.headSha}:${branch.commitsAhead}:${branch.commitsBehind}:${branch.parentBranch ?? ''}`).join('|'),
      enrichedDirectCommits.length,
      enrichedDirectCommits.map((commit) => commit.fullSha).sort().join('|'),
      enrichedUnpushedDirectCommits.map((commit) => commit.fullSha).sort().join('|'),
      mergeNodes.map((node) => `${node.fullSha}:${node.targetBranch}:${node.targetCommitSha}`).join('|'),
    ].join('@@'),
    [
      layoutEpoch,
      defaultBranch,
      visualCheckedOutRef?.branchName,
      visualCheckedOutRef?.headSha,
      worktreeSessions,
      branchesForLayout,
      enrichedDirectCommits,
      enrichedUnpushedDirectCommits,
      mergeNodes,
    ],
  );
  const layoutRevision = useMemo(
    () => ({
      repoPath: repoPath ?? '',
      graphLayoutSignature,
      branchesForLayout,
      mergeNodes,
      enrichedDirectCommits,
      enrichedUnpushedDirectCommits,
      unpushedCommitShasByBranch,
      defaultBranch,
      enrichedBranchCommitPreviews,
      enrichedBranchParentByName,
      enrichedBranchUniqueAheadCounts,
      manuallyOpenedGridClumps,
      manuallyClosedGridClumps,
      gridSearchQuery,
      gridFocusSha,
      nodePositionOverrides: repoPath ? (nodePositionOverridesByRepo[normalizePath(repoPath)] ?? {}) : {},
      visualCheckedOutRef,
      worktreeSessions,
      mapGridOrientation,
    }),
    [
      repoPath,
      graphLayoutSignature,
      branchesForLayout,
      mergeNodes,
      enrichedDirectCommits,
      enrichedUnpushedDirectCommits,
      unpushedCommitShasByBranch,
      defaultBranch,
      enrichedBranchCommitPreviews,
      enrichedBranchParentByName,
      enrichedBranchUniqueAheadCounts,
      manuallyOpenedGridClumps,
      manuallyClosedGridClumps,
      gridSearchQuery,
      gridFocusSha,
      nodePositionOverridesByRepo,
      visualCheckedOutRef,
      worktreeSessions,
      mapGridOrientation,
    ],
  );
  const deferredLayoutRevision = useDeferredValue(layoutRevision);
  const layoutRevisionForView = useMemo(
    () => {
      if (mapLoading || deferredLayoutRevision.repoPath !== (repoPath ?? '')) {
        return layoutRevision;
      }
      if (deferredLayoutRevision.graphLayoutSignature !== layoutRevision.graphLayoutSignature) {
        return layoutRevision;
      }
      if (
        deferredLayoutRevision.manuallyOpenedGridClumps !== layoutRevision.manuallyOpenedGridClumps ||
        deferredLayoutRevision.manuallyClosedGridClumps !== layoutRevision.manuallyClosedGridClumps ||
        deferredLayoutRevision.mapGridOrientation !== layoutRevision.mapGridOrientation ||
        deferredLayoutRevision.gridFocusSha !== layoutRevision.gridFocusSha
      ) {
        return layoutRevision;
      }
      return deferredLayoutRevision;
    },
    [deferredLayoutRevision, layoutRevision, mapLoading, repoPath],
  );
  const sharedGridLayoutCacheKey = useMemo(() => {
    if (!repoPath) return null;
    return makeLayoutCacheKey(
      repoPath,
      layoutRevisionForView.mapGridOrientation,
      layoutRevisionForView.manuallyOpenedGridClumps,
      layoutRevisionForView.manuallyClosedGridClumps,
      layoutRevisionForView.graphLayoutSignature,
    );
  }, [repoPath, layoutRevisionForView]);
  useEffect(() => {
    if (!repoPath || !sharedGridLayoutCacheKey) {
      setHydratedLayoutModel(null);
      setHydratedLayoutKey(null);
      return;
    }
    const normalizedRepoPath = normalizePath(repoPath);
    if (normalizedRepoPath && isPostCommitProtectionActive(normalizedRepoPath)) {
      setHydratedLayoutModel(null);
      setHydratedLayoutKey(null);
      return;
    }
    const hasWorktreeNodes = worktreeSessions.length > 0;
    const inMemory = layoutModelCacheRef.current.get(sharedGridLayoutCacheKey);
    if (inMemory) {
      if (layoutModelHasWorkingTree(inMemory) === hasWorktreeNodes) {
        setHydratedLayoutModel(inMemory);
        setHydratedLayoutKey(sharedGridLayoutCacheKey);
        persistedLayoutKeysRef.current.add(sharedGridLayoutCacheKey);
        return;
      }
      layoutModelCacheRef.current.delete(sharedGridLayoutCacheKey);
    }
    let disposed = false;
    setHydratedLayoutModel(null);
    setHydratedLayoutKey(null);
    void invoke<string | null>('get_repo_layout_snapshot', {
      repoPath,
      layoutKey: sharedGridLayoutCacheKey,
    })
      .then((payloadJson) => {
        if (disposed || !payloadJson) return;
        const parsed = JSON.parse(payloadJson);
        const hydrated = hydrateBranchGridLayoutModel(parsed);
        if (layoutModelHasWorkingTree(hydrated) !== hasWorktreeNodes) {
          return;
        }
        layoutModelCacheRef.current.set(sharedGridLayoutCacheKey, hydrated);
        persistedLayoutKeysRef.current.add(sharedGridLayoutCacheKey);
        setHydratedLayoutModel(hydrated);
        setHydratedLayoutKey(sharedGridLayoutCacheKey);
      })
      .catch(() => {
        if (disposed) return;
        setHydratedLayoutModel(null);
        setHydratedLayoutKey(null);
      });
    return () => {
      disposed = true;
    };
  }, [repoPath, sharedGridLayoutCacheKey, worktreeSessions]);
  const sharedGridLayoutModel: BranchGridLayoutModel = useMemo(
    () => {
      const revision = layoutRevisionForView;
      const hasWorktreeNodes = revision.worktreeSessions.length > 0;
      if (hasWorktreeNodes) {
        return computeBranchGridLayout({
          branches: revision.branchesForLayout,
          mergeNodes: revision.mergeNodes,
          directCommits: revision.enrichedDirectCommits,
          unpushedDirectCommits: revision.enrichedUnpushedDirectCommits,
          unpushedCommitShasByBranch: revision.unpushedCommitShasByBranch,
          defaultBranch: revision.defaultBranch,
          branchCommitPreviews: revision.enrichedBranchCommitPreviews,
          branchParentByName: revision.enrichedBranchParentByName,
          branchUniqueAheadCounts: revision.enrichedBranchUniqueAheadCounts,
          manuallyOpenedClumps: revision.manuallyOpenedGridClumps,
          manuallyClosedClumps: revision.manuallyClosedGridClumps,
          isDebugOpen: false,
          gridSearchQuery: revision.gridSearchQuery,
          gridFocusSha: revision.gridFocusSha,
          checkedOutRef: revision.visualCheckedOutRef ?? null,
          worktreeSessions: revision.worktreeSessions,
          orientation: revision.mapGridOrientation,
          nodePositionOverrides: revision.nodePositionOverrides,
        });
      }
      const hasGraphSourceData =
        revision.branchesForLayout.length > 0 ||
        revision.enrichedDirectCommits.length > 0 ||
        revision.enrichedUnpushedDirectCommits.length > 0;
      const hydratedLooksEmptyButShouldNot =
        Boolean(hydratedLayoutModel) &&
        (hydratedLayoutModel?.allCommits.length ?? 0) === 0 &&
        hasGraphSourceData;
      const hydratedHasWorkingTree = layoutModelHasWorkingTree(hydratedLayoutModel);
      const canReuseHydratedLayout = hydratedHasWorkingTree === hasWorktreeNodes;
      if (
        revision.gridSearchQuery.trim().length === 0 &&
        sharedGridLayoutCacheKey &&
        hydratedLayoutKey === sharedGridLayoutCacheKey &&
        hydratedLayoutModel &&
        !hydratedLooksEmptyButShouldNot &&
        canReuseHydratedLayout
      ) {
        return hydratedLayoutModel;
      }
      if (mapLoading) {
        const fromCache = sharedGridLayoutCacheKey
          ? layoutModelCacheRef.current.get(sharedGridLayoutCacheKey) ?? null
          : null;
        if (fromCache && layoutModelHasWorkingTree(fromCache) === hasWorktreeNodes) return fromCache;
      }
      if (sharedGridLayoutCacheKey) {
        const fromCache = layoutModelCacheRef.current.get(sharedGridLayoutCacheKey);
        if (fromCache && layoutModelHasWorkingTree(fromCache) === hasWorktreeNodes) {
          return fromCache;
        }
      }
      return computeBranchGridLayout({
        branches: revision.branchesForLayout,
        mergeNodes: revision.mergeNodes,
        directCommits: revision.enrichedDirectCommits,
        unpushedDirectCommits: revision.enrichedUnpushedDirectCommits,
        unpushedCommitShasByBranch: revision.unpushedCommitShasByBranch,
        defaultBranch: revision.defaultBranch,
        branchCommitPreviews: revision.enrichedBranchCommitPreviews,
        branchParentByName: revision.enrichedBranchParentByName,
        branchUniqueAheadCounts: revision.enrichedBranchUniqueAheadCounts,
        manuallyOpenedClumps: revision.manuallyOpenedGridClumps,
        manuallyClosedClumps: revision.manuallyClosedGridClumps,
        isDebugOpen: false,
        gridSearchQuery: revision.gridSearchQuery,
        gridFocusSha: revision.gridFocusSha,
        checkedOutRef: revision.visualCheckedOutRef ?? null,
        worktreeSessions: revision.worktreeSessions,
        orientation: revision.mapGridOrientation,
        nodePositionOverrides: revision.nodePositionOverrides,
      });
    },
    [
      layoutRevisionForView,
      sharedGridLayoutCacheKey,
      hydratedLayoutKey,
      hydratedLayoutModel,
      mapLoading,
      hydratedLayoutModel?.allCommits.length ?? 0,
    ],
  );
  const gridLayoutModelForView = sharedGridLayoutModel;
  useEffect(() => {
    lastResolvedLayoutModelRef.current = gridLayoutModelForView;
  }, [gridLayoutModelForView]);
  useEffect(() => {
    if (!repoPath || !sharedGridLayoutCacheKey) return;
    const normalizedRepoPath = normalizePath(repoPath);
    if (normalizedRepoPath && isPostCommitProtectionActive(normalizedRepoPath)) return;
    layoutModelCacheRef.current.set(sharedGridLayoutCacheKey, sharedGridLayoutModel);
    if (persistedLayoutKeysRef.current.has(sharedGridLayoutCacheKey)) return;
    const timer = setTimeout(() => {
      persistedLayoutKeysRef.current.add(sharedGridLayoutCacheKey);
      try {
        const payloadJson = JSON.stringify(serializeBranchGridLayoutModel(sharedGridLayoutModel));
        void invoke('store_repo_layout_snapshot', {
          repoPath,
          layoutKey: sharedGridLayoutCacheKey,
          payloadJson,
        }).catch(() => {
          persistedLayoutKeysRef.current.delete(sharedGridLayoutCacheKey);
        });
      } catch {
        persistedLayoutKeysRef.current.delete(sharedGridLayoutCacheKey);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [repoPath, sharedGridLayoutCacheKey, sharedGridLayoutModel]);

  useEffect(() => {
    try {
      const rawWidth = window.localStorage.getItem(SIDEBAR_WIDTH_STORAGE_KEY);
      if (rawWidth) {
        const parsed = Number(rawWidth);
        if (Number.isFinite(parsed)) {
          setSidebarWidthPx(Math.min(SIDEBAR_MAX_WIDTH_PX, Math.max(SIDEBAR_MIN_WIDTH_PX, parsed)));
        }
      }
      const rawCollapsed = window.localStorage.getItem(SIDEBAR_COLLAPSED_STORAGE_KEY);
      if (rawCollapsed != null) setIsSidebarCollapsed(rawCollapsed === 'true');
    } catch {
      // ignore storage failures
    }
  }, []);

  useEffect(() => {
    sidebarWidthRef.current = sidebarWidthPx;
  }, [sidebarWidthPx]);

  useEffect(() => {
    const shell = sidebarShellRef.current;
    if (!shell) return;
    shell.style.width = isSidebarCollapsed ? '0px' : `${sidebarWidthPx}px`;
  }, [sidebarWidthPx, isSidebarCollapsed]);

  useEffect(() => {
    try {
      window.localStorage.setItem(SIDEBAR_COLLAPSED_STORAGE_KEY, String(isSidebarCollapsed));
    } catch {
      // ignore storage failures
    }
  }, [isSidebarCollapsed]);

  const updateSidebarWidthFromPointer = (clientX: number) => {
    const drag = sidebarDragRef.current;
    if (!drag) return;
    const nextWidth = drag.startWidth + (clientX - drag.startX);
    drag.pendingWidth = Math.min(SIDEBAR_MAX_WIDTH_PX, Math.max(SIDEBAR_MIN_WIDTH_PX, nextWidth));
    const shell = sidebarShellRef.current;
    if (shell) shell.style.width = `${drag.pendingWidth}px`;
  };

  const finishSidebarDrag = (_reason: string, pointerId?: number) => {
    const drag = sidebarDragRef.current;
    if (!drag) return;
    if (pointerId != null && drag.pointerId !== pointerId) return;
    sidebarDragRef.current = null;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    setSidebarWidthPx(drag.pendingWidth);
    try {
      window.localStorage.setItem(SIDEBAR_WIDTH_STORAGE_KEY, String(drag.pendingWidth));
    } catch {
      // ignore storage failures
    }
  };

  const handleSidebarPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    event.preventDefault();
    sidebarDragRef.current = {
      startX: event.clientX,
      startWidth: sidebarWidthRef.current,
      pendingWidth: sidebarWidthRef.current,
      pointerId: event.pointerId,
    };
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleSidebarPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = sidebarDragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    updateSidebarWidthFromPointer(event.clientX);
  };

  const handleSidebarPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!sidebarDragRef.current) return;
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // ignore if capture already released
    }
    finishSidebarDrag('pointerup', event.pointerId);
  };

  const handleSidebarPointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!sidebarDragRef.current) return;
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // ignore if capture already released
    }
    finishSidebarDrag('pointercancel', event.pointerId);
  };

  const handleMapReadyForDisplay = useCallback((epoch: number) => {
    if (epoch !== mapSwitchEpochRef.current) return;
    setMapReadyForDisplay(true);
  }, []);

  const blockMapDisplay = !mapReadyForDisplay || mapPresentationState !== 'ready';
  const blockMapInteraction = mapLoading || loading;

  return (
    <div className="relative flex h-screen min-h-0 flex-col bg-background text-foreground">
      <div className="relative z-30 flex h-full min-h-0 flex-col">
        <div className="relative flex h-full min-h-0 flex-1 overflow-hidden">
          <div
            ref={sidebarShellRef}
            className="relative z-[60] flex h-full min-h-0 flex-none overflow-visible"
            style={{ width: isSidebarCollapsed ? 64 : sidebarWidthPx }}
          >
            <button
              type="button"
              className="window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted"
              aria-label={isSidebarCollapsed ? 'Open sidebar' : 'Collapse sidebar'}
              onClick={() => setIsSidebarCollapsed((value) => !value)}
            >
              {isSidebarCollapsed ? (
                <PanelLeftOpen className="h-4 w-4 shrink-0" />
              ) : (
                <PanelLeftClose className="h-4 w-4 shrink-0" />
              )}
            </button>
            <DenseBranchSidebar
              className={cn(
                'min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out',
                'opacity-100',
              )}
              style={{ width: '100%' }}
              collapsed={isSidebarCollapsed}
              projects={projectCards}
              activeProjectPath={repoPath}
              onSelectProject={loadRepo}
              onAddProject={handleAddProject}
              onRemoveProject={removeProject}
              onReorderProjects={reorderProjects}
              onRevealProjectInFinder={revealProjectInFinder}
              onResetProjectNodePositions={resetProjectNodePositions}
              projectLoading={loading || (projectTreeLoading && repoPath ? !projectSnapshots[repoPath]?.loaded : false)}
              projectError={error}
              checkedOutRef={checkedOutRef}
              showCommits={false}
              manuallyOpenedClumpsByProject={manuallyOpenedGridClumpsByRepo}
              manuallyClosedClumpsByProject={manuallyClosedGridClumpsByRepo}
              manuallyOpenedClumps={manuallyOpenedGridClumps}
              manuallyClosedClumps={manuallyClosedGridClumps}
              setManuallyOpenedClumps={setManuallyOpenedGridClumps}
              setManuallyClosedClumps={setManuallyClosedGridClumps}
              gridLayoutModel={gridLayoutModelForView}
              onSelectCommit={handleSidebarSelectCommit}
              onSelectBranch={handleSidebarSelectBranch}
            />
            {!isSidebarCollapsed ? (
              <div
                aria-hidden="true"
                onPointerDown={handleSidebarPointerDown}
                onPointerMove={handleSidebarPointerMove}
                onPointerUp={handleSidebarPointerUp}
                onPointerCancel={handleSidebarPointerCancel}
                className="absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"
              />
            ) : null}
          </div>

          <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
            <div className="pointer-events-none absolute left-0 right-0 top-0 z-40 h-12" />
              <BranchGridMapView
                branches={branchesForLayout}
                mergeNodes={mergeNodes}
                directCommits={enrichedDirectCommits}
                unpushedDirectCommits={enrichedUnpushedDirectCommits}
                unpushedCommitShasByBranch={unpushedCommitShasByBranch}
                openPRs={openPRs}
                defaultBranch={defaultBranch}
                branchCommitPreviews={enrichedBranchCommitPreviews}
                branchParentByName={enrichedBranchParentByName}
                branchUniqueAheadCounts={enrichedBranchUniqueAheadCounts}
                gridSearchQuery={gridSearchQuery}
                gridSearchJumpToken={gridSearchJumpToken}
                gridSearchJumpDirection={gridSearchJumpDirection}
                gridFocusSha={gridFocusSha}
                isLoading={mapLoading || loading}
                blockMapDisplay={blockMapDisplay}
                blockMapInteraction={blockMapInteraction}
                mapReadyEpoch={mapSwitchEpoch}
                onMapReadyForDisplay={handleMapReadyForDisplay}
                onGridSearchResultCountChange={setGridSearchResultCount}
                onGridSearchResultIndexChange={setGridSearchResultIndex}
                onGridSearchFocusChange={handleGridFocusChange}
                checkedOutRef={visualCheckedOutRef}
                onCommitClick={handleMapCommitClick}
                onMergeRefsIntoBranch={handleMergeRefsIntoBranch}
                mergeInProgress={mergeInProgress}
                onPushAllBranches={handlePushAllBranches}
                onPushCurrentBranch={handlePushCurrentBranch}
                onPushCommitTargets={handlePushCommitTargets}
                pushInProgress={pushInProgress}
                onDeleteSelection={handleDeleteSelection}
                deleteInProgress={deleteInProgress}
                worktrees={worktrees}
                currentRepoPath={repoPath ?? undefined}
                onRemoveWorktree={handleRemoveWorktree}
                removeWorktreeInProgress={removeWorktreeInProgress}
                onSwitchToWorktree={handleSwitchToWorktree}
                onStashLocalChanges={handleStashLocalChanges}
                stashInProgress={stashInProgress}
                stashDisabled={false}
                onCommitLocalChanges={handleCommitLocalChanges}
                onAutoCommitLocalChanges={handleAutoCommitLocalChanges}
                commitInProgress={commitInProgress}
                commitDisabled={false}
                onStageAllChanges={handleStageAllChanges}
                stageInProgress={stageInProgress}
                onCreateBranchFromNode={handleCreateBranchFromNode}
                onCreateRootBranch={handleCreateRootBranch}
                createBranchFromNodeInProgress={createBranchFromNodeInProgress}
                isMutationBusy={isMutationBusy}
                isDebugOpen={isGridDebugOpen}
                onDebugClose={() => setIsGridDebugOpen(false)}
                onInteractionChange={setIsMapInteracting}
                manuallyOpenedClumps={manuallyOpenedGridClumps}
                manuallyClosedClumps={manuallyClosedGridClumps}
                setManuallyOpenedClumps={setManuallyOpenedGridClumps}
                setManuallyClosedClumps={setManuallyClosedGridClumps}
                layoutModel={gridLayoutModelForView}
                nodePositionOverrides={
                  repoPath ? (nodePositionOverridesByRepo[normalizePath(repoPath)] ?? {}) : {}
                }
                onNodePositionOverridesChange={handleNodePositionOverridesChange}
                orientation={mapGridOrientation}
                  gridHudProps={gridHudProps}
              />
          </div>

        </div>
      </div>
    </div>
  );
}


export default App;
