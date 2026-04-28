import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import type { SetStateAction } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { open } from '@tauri-apps/plugin-dialog';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import BranchGridMapView, { type OrientationMode } from '../components/grid/MapViewGrid';
import DenseBranchSidebar from '../components/DenseBranchSidebar';
import { buildLanes, lanesFromStoredColumns } from '../components/grid/LayoutGrid';
import { computeBranchGridLayout, type BranchGridLayoutModel } from '../components/grid/branchGridLayoutModel';
import type { Branch, BranchCommitPreview, BranchPromptMeta, CheckedOutRef, DirectCommit, GitHubAuthStatus, GitHubInfo, GitStashEntry, MergeNode, OpenPR, RepoVisualSnapshot, WorktreeInfo } from '../types';
import { foldStashNodesIntoGraph } from './placeStashNode';

const FROZEN_REPO_BASENAME = 'git-visualizer';
const PROJECTS_STORAGE_KEY = 'git-visualizer:projects';
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
const SIDEBAR_DEFAULT_WIDTH_PX = 432;
const SIDEBAR_MIN_WIDTH_PX = 280;
const SIDEBAR_MAX_WIDTH_PX = 640;
type PushTarget = {
  branchName: string;
  targetSha?: string;
};
type RepoScopedClumpState = Record<string, Set<string>>;

type ProjectRecord = {
  path: string;
  name: string;
  lastOpenedAt: number;
  branchName?: string;
};

type ProjectSnapshot = RepoVisualSnapshot;

function normalizePath(path: string): string {
  if (path === '/') return path;
  return path.replace(/\/+$/, '');
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

function isFrozenRepoPath(path: string | null): boolean {
  return basenameFromPath(path) === FROZEN_REPO_BASENAME;
}

function getRepoVisualSnapshotSignature(snapshot: RepoVisualSnapshot): string {
  return [
    snapshot.path,
    snapshot.name,
    snapshot.defaultBranch,
    snapshot.updatedAtMs,
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
  ].join('@@');
}

function App() {
  const [repoPath, setRepoPath] = useState<string | null>(null);
  const [repoName, setRepoName] = useState<string>('');
  const [recentProjects, setRecentProjects] = useState<ProjectRecord[]>([]);
  const [projectSnapshots, setProjectSnapshots] = useState<Record<string, ProjectSnapshot>>({});
  const [projectTreeLoading, setProjectTreeLoading] = useState(false);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [mergeNodes, setMergeNodes] = useState<MergeNode[]>([]);
  const [directCommits, setDirectCommits] = useState<DirectCommit[]>([]);
  const [unpushedDirectCommits, setUnpushedDirectCommits] = useState<DirectCommit[]>([]);
  const [unpushedCommitShasByBranch, setUnpushedCommitShasByBranch] = useState<Record<string, string[]>>({});
  const [openPRs, setOpenPRs] = useState<OpenPR[]>([]);
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
  const [showCommits, setShowCommits] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mapLoading, setMapLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showErrorPanel, setShowErrorPanel] = useState(false);
  const [errorPanelClosing, setErrorPanelClosing] = useState(false);
  const [errorPanelTab, setErrorPanelTab] = useState<'active' | 'inactive'>('active');
  // scrollRequest.seq increments on each click so the same branch re-triggers the effect
  const [scrollRequest, setScrollRequest] = useState<{ branch: Branch; seq: number } | null>(null);
  const [focusedErrorBranch, setFocusedErrorBranch] = useState<Branch | null>(null);
  const [githubAvailable, setGithubAvailable] = useState(false);
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
  const [branchUniqueAheadCounts, setBranchUniqueAheadCounts] = useState<Record<string, number>>({});
  const [stashes, setStashes] = useState<GitStashEntry[]>([]);
  const [stashInProgress, setStashInProgress] = useState(false);
  const [commitInProgress, setCommitInProgress] = useState(false);
  const [stageInProgress, setStageInProgress] = useState(false);
  const [createBranchFromNodeInProgress, setCreateBranchFromNodeInProgress] = useState(false);
  const [isMapInteracting, setIsMapInteracting] = useState(false);
  const [mapGridOrientation, setMapGridOrientation] = useState<OrientationMode>('horizontal');
  const [isGridDebugOpen, setIsGridDebugOpen] = useState(false);
  const [sidebarWidthPx, setSidebarWidthPx] = useState(SIDEBAR_DEFAULT_WIDTH_PX);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [sidebarDebug, setSidebarDebug] = useState<{
    dragging: boolean;
    lastEvent: string;
  }>({
    dragging: false,
    lastEvent: 'idle',
  });
  const autoFocusSyncKeyRef = useRef<string | null>(null);
  const loadRepoRequestIdRef = useRef(0);
  const githubFetchRequestIdRef = useRef(0);
  const projectSnapshotSignatureRef = useRef<Record<string, string>>({});
  const activeSnapshotSignatureRef = useRef<string | null>(null);
  const sidebarDragRef = useRef<{
    startX: number;
    startWidth: number;
    pendingWidth: number;
    pointerId: number;
  } | null>(null);
  const sidebarWidthRef = useRef(SIDEBAR_DEFAULT_WIDTH_PX);
  const sidebarShellRef = useRef<HTMLDivElement | null>(null);

  const branchMetaLoadKeyRef = useRef<string | null>(null);
  // Keep every selected repo on the same low-churn refresh strategy that was
  // previously reserved for the default/frozen project.
  const isFrozenRepo = isFrozenRepoPath(repoPath) || true;
  const isMapInteractingRef = useRef(false);
  const hasAttemptedAutoRestoreRef = useRef(false);
  const loadingProjectSnapshotsRef = useRef<Set<string>>(new Set());
  const latestBranchesRef = useRef<Branch[]>([]);
  const latestDirectCommitsRef = useRef<DirectCommit[]>([]);
  const latestCheckedOutRef = useRef<CheckedOutRef | null>(null);
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
    persistGridClumps(manuallyOpenedGridClumpsByRepo, manuallyClosedGridClumpsByRepo);
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
        const nextState = { ...previous, [activeRepoScopedKey]: new Set(nextSet) };
        persistGridClumps(nextState, manuallyClosedGridClumpsByRepo);
        return nextState;
      });
    },
    [activeRepoScopedKey, manuallyClosedGridClumpsByRepo],
  );
  const setManuallyClosedGridClumps = useCallback(
    (updater: SetStateAction<Set<string>>) => {
      setManuallyClosedGridClumpsByRepo((previous) => {
        const previousSet = previous[activeRepoScopedKey] ?? new Set<string>();
        const nextSet = typeof updater === 'function' ? updater(previousSet) : updater;
        const nextState = { ...previous, [activeRepoScopedKey]: new Set(nextSet) };
        persistGridClumps(manuallyOpenedGridClumpsByRepo, nextState);
        return nextState;
      });
    },
    [activeRepoScopedKey, manuallyOpenedGridClumpsByRepo],
  );
  const projectCards = useMemo(
    () => recentProjects.map((project) => ({
      ...project,
      ...(projectSnapshots[project.path] ?? {}),
      branches: projectSnapshots[project.path]?.branches ?? [],
      mergeNodes: projectSnapshots[project.path]?.mergeNodes ?? [],
      directCommits: projectSnapshots[project.path]?.directCommits ?? [],
      unpushedDirectCommits: projectSnapshots[project.path]?.unpushedDirectCommits ?? [],
      unpushedCommitShasByBranch: projectSnapshots[project.path]?.unpushedCommitShasByBranch ?? {},
      checkedOutRef: projectSnapshots[project.path]?.checkedOutRef ?? null,
      worktrees: projectSnapshots[project.path]?.worktrees ?? [],
      stashes: projectSnapshots[project.path]?.stashes ?? [],
      branchCommitPreviews: projectSnapshots[project.path]?.branchCommitPreviews ?? {},
      laneByBranch: projectSnapshots[project.path]?.laneByBranch ?? {},
      branchUniqueAheadCounts: projectSnapshots[project.path]?.branchUniqueAheadCounts ?? {},
      defaultBranch: projectSnapshots[project.path]?.defaultBranch ?? project.branchName ?? 'main',
      treeLoaded: projectSnapshots[project.path]?.loaded ?? false,
    })),
    [recentProjects, projectSnapshots],
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
      mapGridOrientation,
      setMapGridOrientation,
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
      mapGridOrientation,
      setGridSearchQuery,
      setGridSearchJumpDirection,
      setGridSearchJumpToken,
      setIsGridDebugOpen,
      setMapGridOrientation,
    ],
  );

  function upsertProjectSnapshot(path: string, snapshot: RepoVisualSnapshot) {
    const signature = getRepoVisualSnapshotSignature(snapshot);
    const previousSignature = projectSnapshotSignatureRef.current[path];
    if (previousSignature === signature) return false;
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
      setRecentProjects(next.slice(0, MAX_PROJECTS));
    } catch {
      setRecentProjects([]);
    }
  }, []);

  useEffect(() => {
    if (hasAttemptedAutoRestoreRef.current) return;
    if (repoPath) return;
    if (recentProjects.length === 0) return;

    hasAttemptedAutoRestoreRef.current = true;
    void loadRepo(recentProjects[0]!.path);
  }, [recentProjects, repoPath]);

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
        updatedAtMs: Date.now(),
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

  async function loadProjectSnapshot(path: string, forceRefresh = false) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    if (loadingProjectSnapshotsRef.current.has(normalizedPath)) return;
    if (!forceRefresh && projectSnapshots[normalizedPath]?.loaded) return;

    loadingProjectSnapshotsRef.current.add(normalizedPath);
    setProjectTreeLoading(true);
    try {
      const snapshot = await invoke<RepoVisualSnapshot>('get_repo_visual_snapshot', {
        repoPath: normalizedPath,
        forceRefresh,
      });
      upsertProjectSnapshot(normalizedPath, snapshot);
    } finally {
      loadingProjectSnapshotsRef.current.delete(normalizedPath);
      if (loadingProjectSnapshotsRef.current.size === 0) {
        setProjectTreeLoading(false);
      }
    }
  }

  useEffect(() => {
    if (recentProjects.length === 0) return;
    recentProjects.forEach((project) => {
      void loadProjectSnapshot(project.path);
      void invoke('watch_repo', { repoPath: project.path }).catch(console.error);
    });
  }, [recentProjects]);

  useEffect(() => {
    let isDisposed = false;
    let unlisten: (() => void) | null = null;

    listen<GitActivityEventPayload>('git-activity', (event) => {
      if (isDisposed) return;
      const changedPath = normalizePath(event.payload.repoPath);
      if (!changedPath || changedPath === repoPath) return;
      void loadProjectSnapshot(changedPath, true);
    }).then((fn) => {
      if (isDisposed) fn();
      else unlisten = fn;
    }).catch(console.error);

    return () => {
      isDisposed = true;
      if (unlisten) unlisten();
    };
  }, [repoPath]);

  function persistProject(project: ProjectRecord) {
    setRecentProjects((previous) => {
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
      await loadProjectSnapshot(normalizedPath, true);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  function updateProjectBranch(path: string, branchName: string) {
    setRecentProjects((previous) => {
      const next = previous.map((project) => (project.path === path ? { ...project, branchName } : project));
      try {
        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage failures
      }
      return next;
    });
  }

  function removeProject(path: string) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;
    setRecentProjects((previous) => {
      const next = previous.filter((project) => project.path !== normalizedPath);
      try {
        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage failures
      }
      return next;
    });
    setProjectSnapshots((previous) => {
      if (!(normalizedPath in previous)) return previous;
      const next = { ...previous };
      delete next[normalizedPath];
      return next;
    });
    if (repoPath === normalizedPath) {
      const nextPath = recentProjects.find((project) => project.path !== normalizedPath)?.path ?? null;
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
        const selected = await open({ directory: true, multiple: false, defaultPath: recentProjects[0]?.path ?? undefined });
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

  const getBranchesSignature = (list: Branch[]): string =>
    list
      .map((b) => `${b.name}|${b.headSha}|${b.commitsAhead}|${b.commitsBehind}|${b.unpushedCommits}|${b.remoteSyncStatus}`)
      .join('||');

  const getDirectCommitsSignature = (list: DirectCommit[]): string =>
    list.map((c) => c.fullSha).join('|');

  const getCheckedOutSignature = (ref: CheckedOutRef | null): string =>
    ref
      ? `${ref.branchName ?? ''}|${ref.headSha}|${ref.parentSha ?? ''}|${ref.hasUncommittedChanges ? 1 : 0}`
      : '__none__';

  async function refreshRepoGitState(
    path: string,
    resolvedDefaultBranch?: string,
    options?: { includeMergeNodes?: boolean; includeUnpushedShaMap?: boolean },
  ) {
    const branchDef = resolvedDefaultBranch ?? defaultBranch;
    const includeMergeNodes = options?.includeMergeNodes ?? true;
    const includeUnpushedShaMap = options?.includeUnpushedShaMap ?? true;
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
      invoke<WorktreeInfo[]>('list_worktrees', { repoPath: path }).catch(() => []),
      invoke<GitStashEntry[]>('list_stashes', { repoPath: path }).catch(() => []),
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
    setBranches(branchList);
    setMergeNodes(nodes);
    setDirectCommits(directResult);
    setUnpushedDirectCommits(unpushedDirectResult);
    setUnpushedCommitShasByBranch(Object.fromEntries(unpushedShaEntries));
    setCheckedOutRef(confirmedCheckedOutRef);
    setWorktrees(worktreeList);
    setStashes(stashList);
  }

  async function hasFrozenRepoStateChanged(path: string): Promise<boolean> {
    const [nextBranches, nextDirectCommits, nextCheckedOutRef] = await Promise.all([
      invoke<Branch[]>('get_branches', { repoPath: path }).catch(() => []),
      invoke<DirectCommit[]>('get_all_repo_commits', { repoPath: path }).catch(() => []),
      invoke<CheckedOutRef>('get_checked_out_ref', { repoPath: path }).catch(() => null),
    ]);

    return (
      getBranchesSignature(nextBranches) !== getBranchesSignature(latestBranchesRef.current) ||
      getDirectCommitsSignature(nextDirectCommits) !== getDirectCommitsSignature(latestDirectCommitsRef.current) ||
      getCheckedOutSignature(nextCheckedOutRef) !== getCheckedOutSignature(latestCheckedOutRef.current)
    );
  }

  async function handleSwitchToWorktree(targetPath: string) {
    setCommitSwitchFeedback(null);
    setMapLoading(true);
    try {
      const [info, def] = await Promise.all([
        invoke<{ name: string; path: string }>('get_repo_info', { repoPath: targetPath }),
        invoke<string>('get_default_branch', { repoPath: targetPath }),
      ]);
      setRepoName(info.name);
      setDefaultBranch(def);
      setRepoPath(targetPath);
      await refreshRepoGitState(targetPath, def);
      void fetchGitHubData(targetPath);
      setCommitSwitchFeedback({
        kind: 'success',
        message: `Now targeting worktree at ${targetPath}`,
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({
        kind: 'error',
        message,
      });
      console.error('Failed to switch worktree:', message);
    } finally {
      setMapLoading(false);
    }
  }

  async function handleRemoveWorktree(worktreePath: string, force: boolean) {
    if (!repoPath || removeWorktreeInProgress) return;
    setRemoveWorktreeInProgress(true);
    setCommitSwitchFeedback(null);
    try {
      await invoke('remove_worktree', { repoPath, worktreePath, force });
      await refreshRepoGitState(repoPath);
      setCommitSwitchFeedback({
        kind: 'success',
        message: `Removed worktree at ${worktreePath}`,
      });
    } catch (e) {
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

  function applySnapshotToActiveState(path: string, snapshot: RepoVisualSnapshot) {
    const signature = getRepoVisualSnapshotSignature(snapshot);
    if (activeSnapshotSignatureRef.current === signature) {
      return false;
    }
    activeSnapshotSignatureRef.current = signature;
    setRepoName(snapshot.name || basenameFromPath(path));
    setDefaultBranch(snapshot.defaultBranch || 'main');
    setBranches(snapshot.branches);
    setMergeNodes(snapshot.mergeNodes);
    setDirectCommits(snapshot.directCommits);
    setUnpushedDirectCommits(snapshot.unpushedDirectCommits);
    setUnpushedCommitShasByBranch(snapshot.unpushedCommitShasByBranch);
    setCheckedOutRef(snapshot.checkedOutRef);
    setWorktrees(snapshot.worktrees);
    setStashes(snapshot.stashes);
    setBranchCommitPreviews(snapshot.branchCommitPreviews);
    setBranchParentByName(snapshot.branchParentByName ?? {});
    setLaneByBranch(snapshot.laneByBranch ?? {});
    setBranchUniqueAheadCounts(snapshot.branchUniqueAheadCounts);
    setRepoPath(path);
    return true;
  }

  async function refreshRepoSnapshotInBackground(
    path: string,
    requestId: number,
    options?: { forceRefresh?: boolean; applyToActiveState?: boolean },
  ) {
    const forceRefresh = options?.forceRefresh ?? true;
    const applyToActiveState = options?.applyToActiveState ?? true;
    try {
      const [info, def] = await Promise.all([
        invoke<{ name: string; path: string }>('get_repo_info', { repoPath: path }),
        invoke<string>('get_default_branch', { repoPath: path }),
      ]);
      if (requestId !== loadRepoRequestIdRef.current) return;
      const snapshot = await invoke<RepoVisualSnapshot>('get_repo_visual_snapshot', {
        repoPath: path,
        forceRefresh,
      });
      if (requestId !== loadRepoRequestIdRef.current) return;
      upsertProjectSnapshot(path, snapshot);
      if (applyToActiveState && (repoPath === path || loadRepoRequestIdRef.current === requestId)) {
        setRepoName(info.name);
        setDefaultBranch(def);
        applySnapshotToActiveState(path, snapshot);
      }
      void fetchGitHubData(path);
    } catch (e) {
      if (requestId !== loadRepoRequestIdRef.current) return;
      console.error('Background snapshot refresh failed:', e);
    }
  }

  async function loadRepo(path: string) {
    const requestId = ++loadRepoRequestIdRef.current;
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;

    const cachedSnapshot = projectSnapshots[normalizedPath];
    if (cachedSnapshot?.loaded) {
      setError(null);
      applySnapshotToActiveState(normalizedPath, cachedSnapshot);
      persistProject({
        path: normalizedPath,
        name: cachedSnapshot.name || basenameFromPath(normalizedPath),
        lastOpenedAt: Date.now(),
        branchName: cachedSnapshot.defaultBranch,
      });
      setMapLoading(false);
      setLoading(false);
      void refreshRepoSnapshotInBackground(normalizedPath, requestId, {
        forceRefresh: false,
        applyToActiveState: false,
      });
      return;
    }

    setLoading(true);
    setMapLoading(true);
    setError(null);

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

      const snapshot = await invoke<RepoVisualSnapshot>('get_repo_visual_snapshot', {
        repoPath: normalizedPath,
        forceRefresh: true,
      });
      if (requestId !== loadRepoRequestIdRef.current) return;
      upsertProjectSnapshot(normalizedPath, snapshot);
      applySnapshotToActiveState(normalizedPath, snapshot);
      persistProject({
        path: normalizedPath,
        name: info.name,
        lastOpenedAt: Date.now(),
        branchName: def,
      });
      setMapLoading(false);
      setLoading(false); // unblock the landing button

      // Phase 3: GitHub data (non-blocking)
      void fetchGitHubData(normalizedPath);
    } catch (e) {
      if (requestId !== loadRepoRequestIdRef.current) return;
      console.error('Failed to load repo:', e);
      setError(e instanceof Error ? e.message : String(e));
      setRepoPath(null);
      setLoading(false);
      setMapLoading(false);
    }
  }

  async function fetchGitHubData(path: string) {
    const requestId = ++githubFetchRequestIdRef.current;
    try {
      if (requestId !== githubFetchRequestIdRef.current) return;
      setGithubAvailable(false);
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
      setGithubAvailable(true);
    } catch (e) {
      if (requestId !== githubFetchRequestIdRef.current) return;
      // GitHub data is optional, don't show error to user
      console.log('GitHub data not available:', e);
      setGithubAuthMessage(e instanceof Error ? e.message : String(e));
      setGithubAvailable(false);
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
    isMapInteractingRef.current = isMapInteracting;
  }, [isMapInteracting]);

  // Hook up exactly as requested: File watcher triggers `git-activity` event from Rust, 
  // and we do an invisible refetch of git state. Instant map updates!
  useEffect(() => {
    if (!repoPath || !defaultBranch || isFrozenRepo) return;

    invoke('watch_repo', { repoPath }).catch(console.error);

    let isFetching = false;
    let pendingFetch = false;
    let timeoutId: number;
    let localRefreshTimeoutId: number | null = null;
    let monitorIntervalId: number | null = null;
    const retryTimeoutIds = new Set<number>();
    let unlisten: (() => void) | null = null;
    let isDisposed = false;
    let isSyncingCheckedOut = false;
    let lastCheckedOutKey: string | null = null;
    let lastBranchesSignature: string | null = null;
    let lastMergeNodesSignature: string | null = null;
    let lastDirectCommitsSignature: string | null = null;

    const getBranchesSignature = (list: Branch[]): string =>
      list
        .map((b) => `${b.name}|${b.headSha}|${b.commitsAhead}|${b.commitsBehind}|${b.unpushedCommits}|${b.remoteSyncStatus}`)
        .join('||');

    const getMergeNodesSignature = (list: MergeNode[]): string =>
      list
        .map((n) => `${n.targetCommitSha}:${n.targetBranch}:${(n.parentShas ?? []).join(',')}`)
        .join('|');

    const getDirectCommitsSignature = (list: DirectCommit[]): string =>
      list.map((c) => c.fullSha).join('|');

    const performFetch = async () => {
      if (isFetching) {
        pendingFetch = true;
        return;
      }
      isFetching = true;
      try {
        const branchesPromise = invoke<Branch[]>('get_branches', { repoPath });
        const checkedOutPromise = invoke<CheckedOutRef>('get_checked_out_ref', { repoPath }).catch(() => null);
        const worktreesPromise = invoke<WorktreeInfo[]>('list_worktrees', { repoPath }).catch(() => []);
        const directCommitsPromise = invoke<DirectCommit[]>('get_all_repo_commits', { repoPath });
        const unpushedDirectPromise = invoke<DirectCommit[]>('get_unpushed_direct_commits', { repoPath, branch: defaultBranch }).catch(() => []);

        // Prioritize the minimum data needed for first paint and interactions.
        const [branchListResult, currentCheckedOutResult, worktreesResult, directResultResult, unpushedDirectResult] = await Promise.allSettled([
          branchesPromise,
          checkedOutPromise,
          worktreesPromise,
          directCommitsPromise,
          unpushedDirectPromise,
        ]);
        if (isDisposed) return;

        const resolvedBranches = branchListResult.status === 'fulfilled' ? branchListResult.value : null;

        if (resolvedBranches) {
          const sig = getBranchesSignature(resolvedBranches);
          if (sig !== lastBranchesSignature) {
            lastBranchesSignature = sig;
            setBranches(resolvedBranches);
          }
        }
        if (directResultResult.status === 'fulfilled') {
          const next = directResultResult.value;
          const sig = getDirectCommitsSignature(next);
          if (sig !== lastDirectCommitsSignature) {
            lastDirectCommitsSignature = sig;
            setDirectCommits(next);
          }
        }
        if (unpushedDirectResult.status === 'fulfilled') {
          setUnpushedDirectCommits(unpushedDirectResult.value);
        }
        if (worktreesResult.status === 'fulfilled') {
          setWorktrees(worktreesResult.value);
        }

        // Fetch per-branch unpushed SHAs for accurate per-commit classification.
        const allBranchNames = [defaultBranch, ...(resolvedBranches ?? []).map((b) => b.name)];
        const unpushedShaEntries = await Promise.all(
          allBranchNames.map(async (branchName) => {
            const shas = await invoke<string[]>('get_branch_unpushed_commit_shas', {
              repoPath,
              branch: branchName,
            }).catch(() => []);
            return [branchName, shas] as const;
          })
        );
        if (!isDisposed) {
          setUnpushedCommitShasByBranch(Object.fromEntries(unpushedShaEntries));
        }

        invoke<GitStashEntry[]>('list_stashes', { repoPath })
          .then((list) => {
            if (!isDisposed) setStashes(list);
          })
          .catch(() => {});

        // Unblock the map as soon as primary graph data is ready.
        setMapLoading(false);
        if (
          currentCheckedOutResult.status === 'fulfilled' &&
          currentCheckedOutResult.value
        ) {
          const nextRef = currentCheckedOutResult.value;
          setCheckedOutRef((prev) => {
            if (
              prev &&
              prev.branchName === nextRef.branchName &&
              prev.headSha === nextRef.headSha &&
              prev.parentSha === nextRef.parentSha &&
              prev.hasUncommittedChanges === nextRef.hasUncommittedChanges
            ) {
              return prev;
            }
            return nextRef;
          });
        }

        // Merge nodes can be expensive on large repos; resolve them after first paint.
        const next = await fetchAllMergeNodesForBranches(repoPath, resolvedBranches ?? [], defaultBranch).catch(() => []);
        if (isDisposed) return;
        const sig = getMergeNodesSignature(next);
        if (sig !== lastMergeNodesSignature) {
          lastMergeNodesSignature = sig;
          setMergeNodes(next);
        }
      } catch (e) {
        console.error('Auto-refresh failed:', e);
      } finally {
        setMapLoading(false);
        isFetching = false;
        if (pendingFetch && !isDisposed) {
          pendingFetch = false;
          // Defer the pending fetch slightly to avoid infinite tight loops
          timeoutId = window.setTimeout(performFetch, 200);
        }
      }
    };

    const syncCheckedOutRef = async () => {
      if (isSyncingCheckedOut) return;
      isSyncingCheckedOut = true;
      try {
        const nextRef = await invoke<CheckedOutRef>('get_checked_out_ref', { repoPath });
        if (isDisposed) return;
        // Only track the fields that matter for visible UI transitions:
        // branch/head movement and dirty-state toggles.
        const nextKey = `${nextRef.branchName ?? ''}|${nextRef.headSha}|${nextRef.hasUncommittedChanges ? 1 : 0}`;
        const prevKey = lastCheckedOutKey;
        const branchOrHeadChanged = !prevKey || prevKey.split('|').slice(0, 2).join('|') !== nextKey.split('|').slice(0, 2).join('|');
        lastCheckedOutKey = nextKey;
        setCheckedOutRef((prev) => {
          if (
            prev &&
            prev.branchName === nextRef.branchName &&
            prev.headSha === nextRef.headSha &&
            prev.hasUncommittedChanges === nextRef.hasUncommittedChanges
          ) {
            return prev;
          }
          return nextRef;
        });
        if (nextRef.branchName) {
          updateProjectBranch(repoPath, nextRef.branchName);
        }

        // Heavy graph refresh only when branch/head actually moves (commit/checkout/merge).
        if (branchOrHeadChanged) {
          scheduleRefreshBurst();
        }
      } catch {
        // ignore transient git read failures
      } finally {
        isSyncingCheckedOut = false;
      }
    };

    const scheduleRefreshBurst = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(performFetch, 100);
      const retries = [450];
      for (const delayMs of retries) {
        const id = window.setTimeout(() => {
          retryTimeoutIds.delete(id);
          void performFetch();
        }, delayMs);
        retryTimeoutIds.add(id);
      }
    };
    const scheduleLocalRefresh = () => {
      if (localRefreshTimeoutId != null) {
        window.clearTimeout(localRefreshTimeoutId);
      }
      localRefreshTimeoutId = window.setTimeout(() => {
        localRefreshTimeoutId = null;
        if (isDisposed) return;
        void performFetch();
      }, 300);
    };

    listen<GitActivityEventPayload>('git-activity', (event) => {
      if (normalizePath(event.payload.repoPath) !== repoPath) return;
      const mode = event.payload.kind;
      if (mode === 'local') {
        void syncCheckedOutRef();
        scheduleLocalRefresh();
        return;
      }
      void loadProjectSnapshot(repoPath, true);
      scheduleRefreshBurst();
    }).then(fn => {
      if (isDisposed) fn();
      else unlisten = fn;
    }).catch(console.error);

    // Prime UI state once when listener attaches.
    void performFetch();
    // Authoritative monitor independent of filesystem notifications.
    monitorIntervalId = window.setInterval(() => {
      void syncCheckedOutRef();
    }, 1800);
    void syncCheckedOutRef();

    return () => {
      isDisposed = true;
      clearTimeout(timeoutId);
      if (localRefreshTimeoutId != null) window.clearTimeout(localRefreshTimeoutId);
      if (monitorIntervalId != null) window.clearInterval(monitorIntervalId);
      for (const id of retryTimeoutIds) {
        window.clearTimeout(id);
      }
      retryTimeoutIds.clear();
      if (unlisten) unlisten();
    };
  }, [repoPath, defaultBranch, isFrozenRepo]);

  useEffect(() => {
    if (!repoPath || !defaultBranch || !isFrozenRepo) return;

    invoke('watch_repo', { repoPath }).catch(console.error);

    let isDisposed = false;
    let refreshQueued = false;
    let refreshInFlight = false;
    let unlisten: (() => void) | null = null;

    const runRefreshIfNeeded = async () => {
      if (isDisposed) return;
      if (isMapInteractingRef.current) {
        refreshQueued = true;
        return;
      }
      if (refreshInFlight) {
        refreshQueued = true;
        return;
      }

      refreshInFlight = true;
      try {
        const changed = await hasFrozenRepoStateChanged(repoPath);
        if (!changed || isDisposed) return;
        await refreshRepoGitState(repoPath, defaultBranch);
      } catch (error) {
        console.warn('Frozen git-activity refresh failed:', error);
      } finally {
        refreshInFlight = false;
        if (refreshQueued && !isDisposed) {
          refreshQueued = false;
          window.setTimeout(() => {
            void runRefreshIfNeeded();
          }, 0);
        }
      }
    };

    const queueRefresh = () => {
      refreshQueued = true;
      void runRefreshIfNeeded();
    };

    listen<GitActivityEventPayload>('git-activity', (event) => {
      if (normalizePath(event.payload.repoPath) !== repoPath) return;
      void loadProjectSnapshot(repoPath, true);
      queueRefresh();
    }).then((fn) => {
      if (isDisposed) fn();
      else unlisten = fn;
    }).catch(console.error);

    return () => {
      isDisposed = true;
      if (unlisten) unlisten();
    };
  }, [repoPath, defaultBranch, isFrozenRepo]);

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

  const openPRBranchNames = new Set(openPRs.map((p) => p.branchName));
  const ACTIVE_MS = 14 * 86400000;
  const now = Date.now();
  const errorBranches = branches.filter((b) => b.status === 'stale');
  const activeErrorBranches = errorBranches.filter(
    (b) => openPRBranchNames.has(b.name) || now - new Date(b.lastCommitDate).getTime() <= ACTIVE_MS
  );
  const inactiveErrorBranches = errorBranches.filter(
    (b) => !openPRBranchNames.has(b.name) && now - new Date(b.lastCommitDate).getTime() > ACTIVE_MS
  );
  const aheadCountForBranch = (branch: Branch): number => (
    Object.prototype.hasOwnProperty.call(branchUniqueAheadCounts, branch.name)
      ? Math.max(0, branchUniqueAheadCounts[branch.name] ?? 0)
      : Math.max(0, branch.commitsAhead)
  );

  // Reset when a new repo is loaded
  useEffect(() => {
    // Keep loaded graph/snapshot state intact while switching repos.
    // We only clear ephemeral UI state that should not carry over.
    setBranchPromptMeta({});
    branchMetaLoadKeyRef.current = null;
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
      return;
    }

    const branchHeadKey = branches
      .map((branch) => `${branch.name}:${branch.headSha}:${branch.parentBranch ?? ''}:${branch.commitsAhead}`)
      .join('|');
    const mergeNodesKey = mergeNodes
      .map((node) => `${node.fullSha}:${node.parentShas?.[1] ?? ''}`)
      .join('|');
    const branchMetaLoadKey = `${repoPath}|${defaultBranch}|${branchHeadKey}|${mergeNodesKey}`;
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

    const commitBranchBySha = new Map<string, string>();
    for (const commit of directCommits) {
      commitBranchBySha.set(commit.fullSha, commit.branch);
    }
    const resolveParentBranchForSha = (sha: string | null | undefined): string | null => {
      if (!sha) return null;
      const exact = commitBranchBySha.get(sha);
      if (exact) return exact;
      for (const [knownSha, branchName] of commitBranchBySha.entries()) {
        if (knownSha.startsWith(sha) || sha.startsWith(knownSha)) return branchName;
      }
      return null;
    };
    const nextBranchParentByName: Record<string, string | null> = { [defaultBranch]: null };
    for (const branch of branches) {
      if (branch.name === defaultBranch) {
        nextBranchParentByName[branch.name] = null;
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
      nextBranchParentByName[branch.name] =
        parentFromGraph ??
        branchParentByName[branch.name] ??
        branch.parentBranch ??
        null;
    }

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
  }, [repoPath, defaultBranch, branches, mergeNodes, directCommits, branchParentByName]);

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

  function closeErrorPanel() {
    setErrorPanelClosing(true);
    setTimeout(() => {
      setShowErrorPanel(false);
      setErrorPanelClosing(false);
      setErrorPanelTab('active');
      setFocusedErrorBranch(null);
    }, 100);
  }

  async function handleMapCommitClick(target: { commitSha: string; branchName?: string }) {
    if (!repoPath) return;
    setCommitSwitchFeedback(null);

    const stashRestore = /^STASH:(\d+)$/.exec(target.commitSha);
    if (stashRestore) {
      try {
        const stashIndex = parseInt(stashRestore[1], 10);
        const nextRef = await invoke<CheckedOutRef>('apply_stash_restore', {
          repoPath,
          stashIndex,
        });
        setCheckedOutRef(nextRef);
        await refreshRepoGitState(repoPath);
        const label = `Stash ${stashIndex + 1}`;
        const branchHint = nextRef.branchName
          ? ` on branch ${nextRef.branchName}`
          : ' at the stash base (detached HEAD)';
        setCommitSwitchFeedback({
          kind: 'success',
          message: `Restored ${label}${branchHint}; stash applied and dropped (uncommitted changes).`,
        });
      } catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        setCommitSwitchFeedback({
          kind: 'error',
          message,
        });
        console.error('Failed to apply stash:', message);
      }
      return;
    }

    // Branch refs live in one place: if this branch is checked out in another worktree, switch the app there
    // instead of `git checkout` (which fails with "already checked out at …").
    if (target.branchName) {
      const pathsProbablyEqual = (a: string, b: string) => {
        const na = a.replace(/\\/g, '/').replace(/\/+$/, '');
        const nb = b.replace(/\\/g, '/').replace(/\/+$/, '');
        return na === nb || na.toLowerCase() === nb.toLowerCase();
      };
      const other = worktrees.find((wt) => {
        if (wt.pathExists === false) return false;
        if (wt.isCurrent) return false;
        if (repoPath && pathsProbablyEqual(wt.path, repoPath)) return false;
        return wt.branchName === target.branchName;
      });
      if (other) {
        await handleSwitchToWorktree(other.path);
        return;
      }
    }

    try {
      let stashedPrefix = '';
      const refBefore = await invoke<CheckedOutRef>('get_checked_out_ref', { repoPath });
      if (refBefore.hasUncommittedChanges) {
        await invoke('stash_push', { repoPath, includeUntracked: true });
        stashedPrefix = 'Stashed local changes (including untracked), then ';
        await refreshRepoGitState(repoPath);
      }

      const nextCheckedOutRef = target.branchName
        ? await invoke<CheckedOutRef>('checkout_branch', {
            repoPath,
            branchName: target.branchName,
          })
        : await invoke<CheckedOutRef>('checkout_ref', {
            repoPath,
            refName: target.commitSha,
          });
      const confirmedCheckedOutRef = await invoke<CheckedOutRef>('get_checked_out_ref', {
        repoPath,
      }).catch(() => nextCheckedOutRef);
      setCheckedOutRef(confirmedCheckedOutRef);
      await refreshRepoGitState(repoPath);
      const refLabel = confirmedCheckedOutRef.branchName
        ? confirmedCheckedOutRef.branchName
        : `${confirmedCheckedOutRef.headSha.slice(0, 7)} (detached)`;
      setCommitSwitchFeedback({
        kind: 'success',
        message: `${stashedPrefix}Checked out ${refLabel}`,
      });
    } catch (e) {
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
      await invoke('stash_push', { repoPath, includeUntracked: true });
      await refreshRepoGitState(repoPath);
      setCommitSwitchFeedback({
        kind: 'success',
        message: 'Stashed local changes (including untracked files).',
      });
    } catch (e) {
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
      const ref = await invoke<CheckedOutRef>('get_checked_out_ref', { repoPath });
      if (!ref.hasUncommittedChanges) {
        setCommitSwitchFeedback({
          kind: 'error',
          message: 'No local changes to commit.',
        });
        return false;
      }
      const nextRef = await invoke<CheckedOutRef>('commit_working_tree', {
        repoPath,
        message: trimmed,
      });
      setCheckedOutRef(nextRef);
      void refreshRepoGitState(repoPath, undefined, {
        includeMergeNodes: false,
        includeUnpushedShaMap: false,
      });
      setCommitSwitchFeedback({
        kind: 'success',
        message: 'Committed local changes.',
      });
      return true;
    } catch (e) {
      const errText = e instanceof Error ? e.message : String(e);
      setCommitSwitchFeedback({
        kind: 'error',
        message: errText,
      });
      console.error('Failed to commit:', errText);
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
      const nextRef = await invoke<CheckedOutRef>('stage_working_tree', { repoPath });
      setCheckedOutRef(nextRef);
      void refreshRepoGitState(repoPath, undefined, {
        includeMergeNodes: false,
        includeUnpushedShaMap: false,
      });
      setCommitSwitchFeedback({
        kind: 'success',
        message: 'Staged all changes.',
      });
      return true;
    } catch (e) {
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
      const stashMatch = /^STASH:(\d+)$/.exec(nodeId);
      let nextRef: CheckedOutRef;
      if (stashMatch) {
        const stashIndex = parseInt(stashMatch[1], 10);
        nextRef = await invoke<CheckedOutRef>('move_stash_to_new_branch', {
          repoPath,
          stashIndex,
          branchName,
        });
      } else {
        nextRef = await invoke<CheckedOutRef>('create_branch_from_uncommitted', {
          repoPath,
          branchName,
        });
      }
      setCheckedOutRef(nextRef);
      void refreshRepoGitState(repoPath, undefined, {
        includeMergeNodes: false,
        includeUnpushedShaMap: false,
      });
      setCommitSwitchFeedback({
        kind: 'success',
        message: `Moved to new branch "${branchName}"`,
      });
    } catch (e) {
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
      const nextRef = await invoke<CheckedOutRef>('create_root_branch', {
        repoPath,
        branchName,
      });
      setCheckedOutRef(nextRef);
      void refreshRepoGitState(repoPath, undefined, {
        includeMergeNodes: false,
        includeUnpushedShaMap: false,
      });
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
      const nextRef = await invoke<CheckedOutRef>('checkout_branch', {
        repoPath,
        branchName: targetBranchName,
      });
      setCheckedOutRef(nextRef);
      void refreshRepoGitState(repoPath, undefined, {
        includeMergeNodes: false,
        includeUnpushedShaMap: false,
      });
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
      let nextCheckedOutRef: CheckedOutRef | null = null;
      for (const sourceRef of uniqueSourceRefs) {
        nextCheckedOutRef = await invoke<CheckedOutRef>('merge_ref_into_branch', {
          repoPath,
          sourceRef,
          targetBranch,
        });
      }
      void refreshRepoGitState(repoPath, undefined, {
        includeMergeNodes: false,
        includeUnpushedShaMap: false,
      });
      if (nextCheckedOutRef) {
        setCheckedOutRef(nextCheckedOutRef);
      }
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
      const pushed = await invoke<Array<{ branchName: string }>>('push_all_unpushed_branches', {
        repoPath,
      });
      void refreshRepoGitState(repoPath, undefined, {
        includeMergeNodes: false,
        includeUnpushedShaMap: false,
      });
      setCommitSwitchFeedback({
        kind: 'success',
        message: pushed.length > 0
          ? pushed.length === 1
            ? `Pushed ${pushed[0].branchName}`
            : `Pushed ${pushed.length} branches`
          : 'Everything local is already pushed.',
      });
    } catch (e) {
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
      const pushed = await invoke<{ branchName: string }>('push_current_branch', {
        repoPath,
      });
      void refreshRepoGitState(repoPath, undefined, {
        includeMergeNodes: false,
        includeUnpushedShaMap: false,
      });
      setCommitSwitchFeedback({
        kind: 'success',
        message: `Pushed ${pushed.branchName}`,
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
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
      for (const target of uniqueTargets) {
        await invoke('push_branch', {
          repoPath,
          branchName: target.branchName,
          targetSha: target.targetSha,
        });
      }
      void refreshRepoGitState(repoPath, undefined, {
        includeMergeNodes: false,
        includeUnpushedShaMap: false,
      });
      setCommitSwitchFeedback({
        kind: 'success',
        message: uniqueTargets.length === 1
          ? `Pushed ${uniqueTargets[0].branchName} through ${uniqueTargets[0].targetSha?.slice(0, 7)}`
          : `Pushed ${uniqueTargets.length} selected commit ranges`,
      });
    } catch (e) {
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
    stashIndices?: number[];
  }) {
    if (!repoPath || deleteInProgress) return;
    const uniqueBranchNames = Array.from(new Set(targets.branchNames.filter((branchName) => branchName && branchName !== defaultBranch)));
    const shouldDiscardUncommitted = !!targets.discardUncommittedChanges;
    const stashIndices = targets.stashIndices ?? [];
    const uniqueStashDescending = Array.from(new Set(stashIndices)).sort((a, b) => b - a);
    if (uniqueBranchNames.length === 0 && !shouldDiscardUncommitted && uniqueStashDescending.length === 0) return;

    setCommitSwitchFeedback(null);
    setDeleteInProgress(true);
    try {
      for (const stashIndex of uniqueStashDescending) {
        await invoke('stash_drop', { repoPath, stashIndex });
      }

      const result =
        uniqueBranchNames.length > 0 || shouldDiscardUncommitted
          ? await invoke<{ deletedBranches: string[]; discardedUncommittedChanges: boolean }>('delete_selected_elements', {
              repoPath,
              branchNames: uniqueBranchNames,
              discardUncommittedChanges: shouldDiscardUncommitted,
            })
          : { deletedBranches: [] as string[], discardedUncommittedChanges: false };

      void refreshRepoGitState(repoPath, undefined, {
        includeMergeNodes: false,
        includeUnpushedShaMap: false,
      });
      const feedbackParts: string[] = [];
      if (uniqueStashDescending.length > 0) {
        feedbackParts.push(
          uniqueStashDescending.length === 1
            ? `removed stash ${uniqueStashDescending[0]! + 1}`
            : `removed ${uniqueStashDescending.length} stashes`
        );
      }
      if (result.discardedUncommittedChanges) feedbackParts.push('discarded local uncommitted changes');
      if (result.deletedBranches.length > 0) {
        feedbackParts.push(
          result.deletedBranches.length === 1
            ? `deleted ${result.deletedBranches[0]}`
            : `deleted ${result.deletedBranches.length} branches`
        );
      }
      setCommitSwitchFeedback({
        kind: 'success',
        message: feedbackParts.length > 0 ? feedbackParts.join(' and ') : 'Nothing to delete.',
      });
    } catch (e) {
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
    githubAvailable,
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

  function handleFocusOnMap(branch: Branch) {
    setFocusedErrorBranch(branch);
    setScrollRequest(prev => ({ branch, seq: (prev?.seq ?? 0) + 1 }));
    // panel stays open intentionally
  }

  function handleSidebarSelectCommit(sha: string) {
    if (!sha) return;
    setGridFocusSha(sha);
    setGridSearchJumpToken((token) => token + 1);
  }

  function handleSidebarSelectBranch(branchName: string) {
    if (!branchName) return;
    setGridSearchQuery(branchName);
    setGridSearchJumpToken((token) => token + 1);
  }

  useEffect(() => {
    const focusSha = checkedOutRef?.hasUncommittedChanges ? 'WORKING_TREE' : checkedOutRef?.headSha ?? null;
    if (!focusSha) return;

    const syncKey = `${repoPath ?? '__no-repo__'}|${mapGridOrientation}|${focusSha}`;
    if (autoFocusSyncKeyRef.current === syncKey) return;
    autoFocusSyncKeyRef.current = syncKey;

    setGridFocusSha(focusSha);
    setGridSearchJumpToken((token) => token + 1);
  }, [checkedOutRef?.hasUncommittedChanges, checkedOutRef?.headSha, mapGridOrientation, repoPath]);

  useEffect(() => {
    autoFocusSyncKeyRef.current = null;
  }, [repoPath]);



  // Synthetic stash nodes (yellow) and optional uncommitted node (blue) — same lane rules as before.
  const {
    enrichedBranches,
    enrichedBranchCommitPreviews,
    enrichedBranchUniqueAheadCounts,
    enrichedDirectCommits,
  } = useMemo(() => {
    const stashFolded = foldStashNodesIntoGraph(
      stashes,
      branches,
      directCommits,
      branchCommitPreviews,
      branchUniqueAheadCounts,
      defaultBranch,
      checkedOutRef?.hasUncommittedChanges ?? false,
    );

    let eb = stashFolded.branches;
    let edc = stashFolded.directCommits;
    let ebp = stashFolded.branchCommitPreviews;
    let ebuac = stashFolded.branchUniqueAheadCounts;

    if (!checkedOutRef?.hasUncommittedChanges) {
      return {
        enrichedBranches: eb,
        enrichedDirectCommits: edc,
        enrichedBranchCommitPreviews: ebp,
        enrichedBranchUniqueAheadCounts: ebuac,
      };
    }

    // Resolve uncommitted placement by lane head ownership (stash-augmented graph).
    const checkedOutAnchorSha = checkedOutRef.headSha || checkedOutRef.parentSha || null;
    const latestMainDirectCommitSha = edc[0]?.fullSha ?? null;
    const shaMatches = (left?: string | null, right?: string | null): boolean => {
      if (!left || !right) return false;
      return left === right || left.startsWith(right) || right.startsWith(left);
    };
    type LaneRef = { name: string; headSha: string; isDefault: boolean };
    const allLanes: LaneRef[] = [
      { name: defaultBranch, headSha: latestMainDirectCommitSha ?? '', isDefault: true },
      ...eb.map((b) => ({ name: b.name, headSha: b.headSha, isDefault: false })),
    ];
    const explicitLane = checkedOutRef.branchName
      ? allLanes.find((lane) => lane.name === checkedOutRef.branchName)
      : undefined;
    const tipMatchedLanes = checkedOutAnchorSha
      ? allLanes.filter((lane) => shaMatches(lane.headSha, checkedOutAnchorSha))
      : [];
    const targetLane =
      explicitLane ??
      tipMatchedLanes.find((lane) => lane.isDefault) ??
      tipMatchedLanes[0];
    const targetBranch = targetLane && !targetLane.isDefault
      ? eb.find((b) => b.name === targetLane.name)
      : undefined;

    const anchorCommitDate = (() => {
      if (!checkedOutAnchorSha) return null;
      const matchingDirectCommit = edc.find((commit) => (
        shaMatches(commit.fullSha, checkedOutAnchorSha) ||
        shaMatches(commit.sha, checkedOutAnchorSha)
      ));
      if (matchingDirectCommit?.date) return matchingDirectCommit.date;
      if (targetBranch) {
        const matchingPreviewCommit = (ebp[targetBranch.name] ?? []).find((commit) => (
          shaMatches(commit.fullSha, checkedOutAnchorSha) ||
          shaMatches(commit.sha, checkedOutAnchorSha)
        ));
        if (matchingPreviewCommit?.date) return matchingPreviewCommit.date;
      }
      return null;
    })();
    const anchorCommitTimeMs = anchorCommitDate ? new Date(anchorCommitDate).getTime() : Number.NaN;
    const nowTimeMs = Date.now();
    const uncommittedTimeMs = Number.isFinite(anchorCommitTimeMs)
      ? Math.max(nowTimeMs, anchorCommitTimeMs + 1)
      : nowTimeMs;
    const uncommittedDate = new Date(uncommittedTimeMs).toISOString();
    const uncommittedNode: BranchCommitPreview = {
      fullSha: 'WORKING_TREE',
      sha: 'Uncommited Changes',
      parentSha: checkedOutAnchorSha,
      message: 'Local uncommitted changes',
      author: 'You',
      date: uncommittedDate,
      kind: 'uncommitted',
    };
    if (targetBranch) {
      const nextBranches = eb.map((b) => {
        if (b.name === targetBranch.name) {
          return {
            ...b,
            commitsAhead: b.commitsAhead + 1,
            unpushedCommits: b.unpushedCommits + 1,
            lastCommitDate: uncommittedDate,
            headSha: 'WORKING_TREE',
          };
        }
        return b;
      });
      return {
        enrichedBranches: nextBranches,
        enrichedDirectCommits: edc,
        enrichedBranchCommitPreviews: {
          ...ebp,
          [targetBranch.name]: [uncommittedNode, ...(ebp[targetBranch.name] || [])],
        },
        enrichedBranchUniqueAheadCounts: {
          ...ebuac,
          [targetBranch.name]: Math.max(
            0,
            (Object.prototype.hasOwnProperty.call(ebuac, targetBranch.name)
              ? ebuac[targetBranch.name]
              : targetBranch.commitsAhead) ?? 0,
          ) + 1,
        },
      };
    }

    return {
      enrichedBranches: eb,
      enrichedBranchCommitPreviews: {
        ...ebp,
        [defaultBranch]: [uncommittedNode, ...(ebp[defaultBranch] || [])],
      },
      enrichedBranchUniqueAheadCounts: {
        ...ebuac,
      },
      enrichedDirectCommits: edc,
    };
  }, [branches, branchCommitPreviews, branchUniqueAheadCounts, checkedOutRef, defaultBranch, directCommits, stashes]);
  const enrichedBranchParentByName = useMemo(() => {
    const map: Record<string, string | null> = { ...branchParentByName };
    map[defaultBranch] = null;
    return map;
  }, [branchParentByName, defaultBranch, enrichedBranches]);
  const sharedGridLanes = useMemo(
    () =>
      lanesFromStoredColumns(enrichedBranches, defaultBranch, enrichedBranchParentByName, laneByBranch)
      ?? buildLanes(enrichedBranches, defaultBranch, enrichedBranchCommitPreviews, enrichedBranchParentByName),
    [enrichedBranches, defaultBranch, enrichedBranchCommitPreviews, enrichedBranchParentByName, laneByBranch],
  );
  const baseSharedGridLayoutModel: BranchGridLayoutModel = useMemo(
    () =>
      computeBranchGridLayout({
        lanes: sharedGridLanes,
        branches: enrichedBranches,
        mergeNodes,
        directCommits: enrichedDirectCommits,
        unpushedDirectCommits,
        defaultBranch,
        branchCommitPreviews: enrichedBranchCommitPreviews,
        branchParentByName: enrichedBranchParentByName,
        branchUniqueAheadCounts: enrichedBranchUniqueAheadCounts,
        manuallyOpenedClumps: manuallyOpenedGridClumps,
        manuallyClosedClumps: manuallyClosedGridClumps,
        isDebugOpen: false,
        gridSearchQuery,
        gridFocusSha,
        checkedOutRef: checkedOutRef ?? null,
        orientation: mapGridOrientation,
      }),
    [
      sharedGridLanes,
      enrichedBranches,
      mergeNodes,
      enrichedDirectCommits,
      unpushedDirectCommits,
      defaultBranch,
      enrichedBranchCommitPreviews,
      enrichedBranchParentByName,
      enrichedBranchUniqueAheadCounts,
      manuallyOpenedGridClumps,
      manuallyClosedGridClumps,
      gridSearchQuery,
      gridFocusSha,
      checkedOutRef?.headSha ?? null,
      checkedOutRef?.branchName ?? null,
      mapGridOrientation,
    ],
  );
  const tempSearchOpenClusterKey = useMemo(() => {
    if (!gridFocusSha) return null;
    return baseSharedGridLayoutModel.clusterKeyByCommitId.get(gridFocusSha) ?? null;
  }, [baseSharedGridLayoutModel.clusterKeyByCommitId, gridFocusSha]);
  const effectiveManuallyOpenedGridClumps = useMemo(() => {
    if (!tempSearchOpenClusterKey) return manuallyOpenedGridClumps;
    if (manuallyClosedGridClumps.has(tempSearchOpenClusterKey)) return manuallyOpenedGridClumps;
    const next = new Set(manuallyOpenedGridClumps);
    next.add(tempSearchOpenClusterKey);
    return next;
  }, [manuallyClosedGridClumps, manuallyOpenedGridClumps, tempSearchOpenClusterKey]);
  const effectiveManuallyClosedGridClumps = useMemo(() => {
    if (!tempSearchOpenClusterKey) return manuallyClosedGridClumps;
    const next = new Set(manuallyClosedGridClumps);
    next.delete(tempSearchOpenClusterKey);
    return next;
  }, [manuallyClosedGridClumps, tempSearchOpenClusterKey]);
  const sharedGridLayoutModel: BranchGridLayoutModel = useMemo(
    () =>
      computeBranchGridLayout({
        lanes: sharedGridLanes,
        branches: enrichedBranches,
        mergeNodes,
        directCommits: enrichedDirectCommits,
        unpushedDirectCommits,
        defaultBranch,
        branchCommitPreviews: enrichedBranchCommitPreviews,
        branchParentByName: enrichedBranchParentByName,
        branchUniqueAheadCounts: enrichedBranchUniqueAheadCounts,
        manuallyOpenedClumps: effectiveManuallyOpenedGridClumps,
        manuallyClosedClumps: effectiveManuallyClosedGridClumps,
        isDebugOpen: false,
        gridSearchQuery,
        gridFocusSha,
        checkedOutRef: checkedOutRef ?? null,
        orientation: mapGridOrientation,
      }),
    [
      sharedGridLanes,
      enrichedBranches,
      mergeNodes,
      enrichedDirectCommits,
      unpushedDirectCommits,
      defaultBranch,
      enrichedBranchCommitPreviews,
      enrichedBranchParentByName,
      enrichedBranchUniqueAheadCounts,
      effectiveManuallyOpenedGridClumps,
      effectiveManuallyClosedGridClumps,
      gridSearchQuery,
      gridFocusSha,
      checkedOutRef?.headSha ?? null,
      checkedOutRef?.branchName ?? null,
      mapGridOrientation,
    ],
  );

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

  const finishSidebarDrag = (reason: string, pointerId?: number) => {
    const drag = sidebarDragRef.current;
    if (!drag) return;
    if (pointerId != null && drag.pointerId !== pointerId) return;
    sidebarDragRef.current = null;
    setSidebarDebug({ dragging: false, lastEvent: reason });
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
    setSidebarDebug({ dragging: true, lastEvent: 'handle:pointerdown' });
    console.debug('[sidebar-resize] pointerdown', {
      pointerId: event.pointerId,
      clientX: event.clientX,
      width: sidebarWidthRef.current,
    });
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
    if (sidebarDebug.lastEvent !== 'move') console.debug('[sidebar-resize] pointermove', { clientX: event.clientX });
    setSidebarDebug((previous) => (previous.dragging ? { dragging: true, lastEvent: 'move' } : previous));
    updateSidebarWidthFromPointer(event.clientX);
  };

  const handleSidebarPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!sidebarDragRef.current) return;
    console.debug('[sidebar-resize] pointerup', { pointerId: event.pointerId });
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // ignore if capture already released
    }
    finishSidebarDrag('pointerup', event.pointerId);
  };

  const handleSidebarPointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!sidebarDragRef.current) return;
    console.debug('[sidebar-resize] pointercancel', { pointerId: event.pointerId });
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // ignore if capture already released
    }
    finishSidebarDrag('pointercancel', event.pointerId);
  };

  return (
    <div className="relative flex h-screen min-h-0 flex-col bg-background text-foreground">
      <div className="relative z-30 flex h-full min-h-0 flex-col">
        <div className="relative flex h-full min-h-0 flex-1 overflow-hidden">
          <div
            ref={sidebarShellRef}
            className="relative z-20 flex h-full min-h-0 flex-none overflow-visible"
            style={{ width: isSidebarCollapsed ? 64 : sidebarWidthPx }}
          >
            <button
              type="button"
              className="window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent"
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
              onRevealProjectInFinder={revealProjectInFinder}
              projectLoading={loading || projectTreeLoading}
              projectError={error}
              checkedOutRef={checkedOutRef}
              showCommits={showCommits}
              onToggleShowCommits={() => setShowCommits((value) => !value)}
              manuallyOpenedClumpsByProject={manuallyOpenedGridClumpsByRepo}
              manuallyClosedClumpsByProject={manuallyClosedGridClumpsByRepo}
              manuallyOpenedClumps={effectiveManuallyOpenedGridClumps}
              manuallyClosedClumps={effectiveManuallyClosedGridClumps}
              setManuallyOpenedClumps={setManuallyOpenedGridClumps}
              setManuallyClosedClumps={setManuallyClosedGridClumps}
              gridLayoutModel={sharedGridLayoutModel}
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
                branches={enrichedBranches}
                mergeNodes={mergeNodes}
                directCommits={enrichedDirectCommits}
                unpushedDirectCommits={unpushedDirectCommits}
                unpushedCommitShasByBranch={unpushedCommitShasByBranch}
                defaultBranch={defaultBranch}
                branchCommitPreviews={enrichedBranchCommitPreviews}
                branchParentByName={enrichedBranchParentByName}
                branchUniqueAheadCounts={enrichedBranchUniqueAheadCounts}
                gridSearchQuery={gridSearchQuery}
                gridSearchJumpToken={gridSearchJumpToken}
                gridSearchJumpDirection={gridSearchJumpDirection}
                gridFocusSha={gridFocusSha}
                onGridSearchResultCountChange={setGridSearchResultCount}
                onGridSearchResultIndexChange={setGridSearchResultIndex}
                onGridSearchFocusChange={setGridFocusSha}
                checkedOutRef={checkedOutRef}
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
                commitInProgress={commitInProgress}
                commitDisabled={false}
                onStageAllChanges={handleStageAllChanges}
                stageInProgress={stageInProgress}
                onCreateBranchFromNode={handleCreateBranchFromNode}
                onCreateRootBranch={handleCreateRootBranch}
                createBranchFromNodeInProgress={createBranchFromNodeInProgress}
                isDebugOpen={isGridDebugOpen}
                onDebugClose={() => setIsGridDebugOpen(false)}
                onInteractionChange={setIsMapInteracting}
                manuallyOpenedClumps={effectiveManuallyOpenedGridClumps}
                manuallyClosedClumps={effectiveManuallyClosedGridClumps}
                setManuallyOpenedClumps={setManuallyOpenedGridClumps}
                setManuallyClosedClumps={setManuallyClosedGridClumps}
                layoutModel={sharedGridLayoutModel}
                orientation={mapGridOrientation}
                  gridHudProps={gridHudProps}
              />
          </div>

          {showErrorPanel && (
            <div
              data-map-ui
              className={`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl overflow-hidden ${errorPanelClosing ? 'animate-error-panel-out' : 'animate-error-panel-in'}`}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
                <span className="text-sm font-medium text-foreground">Branch errors</span>
                <button onClick={closeErrorPanel} className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30">
                <button
                  onClick={() => setErrorPanelTab('active')}
                  className={`text-xs font-medium transition-colors ${errorPanelTab === 'active' ? 'text-destructive' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {activeErrorBranches.length} active
                </button>
                <span className="text-xs text-muted-foreground">·</span>
                <button
                  onClick={() => setErrorPanelTab('inactive')}
                  className={`text-xs font-medium transition-colors ${errorPanelTab === 'inactive' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {inactiveErrorBranches.length} inactive
                </button>
              </div>
              <div className="overflow-y-auto max-h-64">
                {(errorPanelTab === 'active' ? activeErrorBranches : inactiveErrorBranches).map((b) => {
                  const isFocused = focusedErrorBranch?.name === b.name;
                  const ahead = aheadCountForBranch(b);
                  return (
                    <button
                      key={b.name}
                      onClick={() => handleFocusOnMap(b)}
                      className="w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left"
                    >
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${isFocused ? 'text-amber-600 dark:text-amber-400' : 'text-foreground'}`}>
                          {b.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {ahead > 0 && `${ahead} ahead`}
                          {ahead > 0 && b.commitsBehind > 0 && ', '}
                          {b.commitsBehind > 0 && `${b.commitsBehind} behind`}
                        </p>
                      </div>
                      <span className="text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                        Stale
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


export default App;
