import { useState, useEffect, useRef, useMemo } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { ArrowLeft } from 'lucide-react';
import BranchMapView, { type OrientationMode } from '../components/svg/core/MapViewSvg';
import FolderPickerModal from './FolderPickerModal';
import type { Branch, BranchCommitPreview, BranchPromptMeta, BranchPromptMarker, CheckedOutRef, Commit, DirectCommit, GitHubAuthStatus, GitHubInfo, GitStashEntry, MergeNode, OpenPR, WorktreeInfo } from '../types';
import { foldStashNodesIntoGraph } from './placeStashNode';

type View = 'landing' | 'map';
type MapMode = 'time' | 'grid';
type OpenRepoEventPayload = {
  path: string;
  sourceApp?: string | null;
};
const PROMPT_ENRICHMENT_ENABLED = false;
const COMMIT_SWITCH_FEEDBACK_VISIBLE_MS = 1400;
const COMMIT_SWITCH_FEEDBACK_FADE_MS = 180;
type PushTarget = {
  branchName: string;
  targetSha?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  const [repoPath, setRepoPath] = useState<string | null>(null);
  const [repoName, setRepoName] = useState<string>('');
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
  const [orientation, setOrientation] = useState<OrientationMode>('vertical');
  const [mapMode, setMapMode] = useState<MapMode>('grid');
  const [gridSearchQuery, setGridSearchQuery] = useState('');
  const [gridSearchJumpToken, setGridSearchJumpToken] = useState(0);
  const [gridSearchResultCount, setGridSearchResultCount] = useState<number | null>(null);
  const [gridFocusSha, setGridFocusSha] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);       // button spinner in landing
  const [mapLoading, setMapLoading] = useState(false); // canvas skeleton in map
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<View>('landing');
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
  const [branchUniqueAheadCounts, setBranchUniqueAheadCounts] = useState<Record<string, number>>({});
  const [stashes, setStashes] = useState<GitStashEntry[]>([]);
  const [stashInProgress, setStashInProgress] = useState(false);
  const [commitInProgress, setCommitInProgress] = useState(false);
  const [stageInProgress, setStageInProgress] = useState(false);
  const [createBranchFromNodeInProgress, setCreateBranchFromNodeInProgress] = useState(false);

  const branchMetaLoadKeyRef = useRef<string | null>(null);

  function handleWindowDragStart(e: React.MouseEvent<HTMLElement>) {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement | null;
    if (target?.closest('.window-no-drag')) return;
    const currentWindow = getCurrentWindow();
    void invoke('start_window_drag')
      .catch(() => currentWindow.startDragging())
      .catch((err) => {
        console.warn('Failed to start window drag:', err);
      });
  }



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

      all.push(...result.nodes.map((node) => ({ ...node, targetBranch: branch })));
      if (!result.hasMore || result.nodes.length === 0) break;
      page += 1;
    }

    return all;
  }

  async function refreshRepoGitState(path: string, resolvedDefaultBranch?: string) {
    const branchDef = resolvedDefaultBranch ?? defaultBranch;
    const [branchList, nodes, directResult, unpushedDirectResult, confirmedCheckedOutRef, worktreeList, stashList] = await Promise.all([
      invoke<Branch[]>('get_branches', { repoPath: path }),
      fetchAllMergeNodes(path, branchDef),
      invoke<DirectCommit[]>('get_direct_commits', {
        repoPath: path,
        branch: branchDef,
      }),
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
    const unpushedShaEntries = await Promise.all(
      [branchDef, ...branchList.map((branch) => branch.name)].map(async (branchName) => {
        const shas = await invoke<string[]>('get_branch_unpushed_commit_shas', {
          repoPath: path,
          branch: branchName,
        }).catch(() => []);
        return [branchName, shas] as const;
      })
    );
    setBranches(branchList);
    setMergeNodes(nodes);
    setDirectCommits(directResult);
    setUnpushedDirectCommits(unpushedDirectResult);
    setUnpushedCommitShasByBranch(Object.fromEntries(unpushedShaEntries));
    setCheckedOutRef(confirmedCheckedOutRef);
    setWorktrees(worktreeList);
    setStashes(stashList);
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

  async function loadRepo(path: string) {
    setLoading(true);
    setMapLoading(true);
    setError(null);
    setBranches([]);
    setMergeNodes([]);
    setDirectCommits([]);
    setUnpushedDirectCommits([]);
    setUnpushedCommitShasByBranch({});

    // Switch to map immediately for instant feedback
    setView('map');

    // Yield to the browser paint cycle so the map shell and loader are painted
    await new Promise((resolve) => setTimeout(resolve, 15));

    try {
      // Phase 1: fast metadata — show the map shell immediately
      const [info, def] = await Promise.all([
        invoke<{ name: string; path: string }>('get_repo_info', { repoPath: path }),
        invoke<string>('get_default_branch', { repoPath: path }),
      ]);
      setRepoName(info.name);
      setDefaultBranch(def);
      
      // Setting repoPath triggers the useEffect which runs 'performFetch' + 'loadPromptMeta'
      setRepoPath(path);
      setLoading(false); // unblock the landing button

      // Phase 3: GitHub data (non-blocking)
      fetchGitHubData(path);
    } catch (e) {
      console.error('Failed to load repo:', e);
      setError(e instanceof Error ? e.message : String(e));
      setView('landing');
      setRepoPath(null);
      setLoading(false);
      setMapLoading(false);
    }
  }

  async function fetchGitHubData(path: string) {
    try {
      setGithubAvailable(false);
      setGithubAuthMessage(null);
      const ghInfo = await invoke<GitHubInfo>('get_github_info', { repoPath: path });
      const authStatus = await invoke<GitHubAuthStatus>('get_github_auth_status');
      setGithubAuthStatus(authStatus);
      if (!authStatus.ghAvailable || !authStatus.authenticated) {
        return;
      }

      const open = await invoke<OpenPR[]>('get_open_prs', {
        owner: ghInfo.owner,
        repo: ghInfo.repo,
      });
      setOpenPRs(open);
      setGithubAvailable(true);
    } catch (e) {
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
        setView('map');
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

  // Hook up exactly as requested: File watcher triggers `git-activity` event from Rust, 
  // and we do an invisible refetch of git state. Instant map updates!
  useEffect(() => {
    if (!repoPath || !defaultBranch) return;

    invoke('watch_repo', { repoPath }).catch(console.error);

    let isFetching = false;
    let pendingFetch = false;
    let timeoutId: number;
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
      list.map((n) => n.fullSha).join('|');

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
        const mergeNodesPromise = fetchAllMergeNodes(repoPath, defaultBranch);
        const checkedOutPromise = invoke<CheckedOutRef>('get_checked_out_ref', { repoPath }).catch(() => null);
        const worktreesPromise = invoke<WorktreeInfo[]>('list_worktrees', { repoPath }).catch(() => []);
        const directCommitsPromise = invoke<DirectCommit[]>('get_direct_commits', { repoPath, branch: defaultBranch });
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
        const nodesResult = await Promise.allSettled([mergeNodesPromise]);
        if (isDisposed) return;
        const mergeNodeResult = nodesResult[0];
        if (mergeNodeResult.status === 'fulfilled') {
          const next = mergeNodeResult.value;
          const sig = getMergeNodesSignature(next);
          if (sig !== lastMergeNodesSignature) {
            lastMergeNodesSignature = sig;
            setMergeNodes(next);
          }
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

    listen<string>('git-activity', (event) => {
      const mode = event.payload;
      if (mode === 'local') {
        void syncCheckedOutRef();
        return;
      }
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
    }, 700);
    void syncCheckedOutRef();

    return () => {
      isDisposed = true;
      clearTimeout(timeoutId);
      if (monitorIntervalId != null) window.clearInterval(monitorIntervalId);
      for (const id of retryTimeoutIds) {
        window.clearTimeout(id);
      }
      retryTimeoutIds.clear();
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
    setBranchPromptMeta({});
    setBranchCommitPreviews({});
    setBranchUniqueAheadCounts({});
    branchMetaLoadKeyRef.current = null;
    setGithubAuthLoading(false);
    setGithubAuthStatus(null);
    setGithubAuthMessage(null);
    setCheckedOutRef(null);
    setCommitSwitchFeedback(null);
  }, [repoPath]);

  useEffect(() => {
    if (!repoPath || !defaultBranch) {
      setBranchPromptMeta({});
      setBranchCommitPreviews({});
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

    const mergeNodeByMergedHeadSha = new Map<string, MergeNode>();
    for (const node of mergeNodes) {
      const mergedParents = node.parentShas?.slice(1) ?? [];
      for (const parentSha of mergedParents) {
        if (parentSha && !mergeNodeByMergedHeadSha.has(parentSha)) {
          mergeNodeByMergedHeadSha.set(parentSha, node);
        }
      }
    }

    const activeBranches = branches.filter((b) => b.name !== defaultBranch);
    const childBranchCountByParent = new Map<string, number>();
    for (const branch of activeBranches) {
      if (!branch.parentBranch || branch.parentBranch === branch.name) continue;
      const current = childBranchCountByParent.get(branch.parentBranch) ?? 0;
      childBranchCountByParent.set(branch.parentBranch, current + 1);
    }

    // Detect fresh-copy branches (worktrees): when multiple branches share the
    // exact same HEAD SHA, all but the oldest are fresh copies with no unique
    // commits. This works regardless of parent-branch detection accuracy.
    const headShaGroups = new Map<string, Branch[]>();
    for (const b of activeBranches) {
      if (!b.headSha) continue;
      const group = headShaGroups.get(b.headSha) ?? [];
      group.push(b);
      headShaGroups.set(b.headSha, group);
    }
    const freshCopyBranchNames = new Set<string>();
    for (const group of headShaGroups.values()) {
      if (group.length < 2) continue;
      const sorted = [...group].sort((a, b) => {
        const aDate = a.createdDate ?? a.divergedFromDate ?? a.lastCommitDate;
        const bDate = b.createdDate ?? b.divergedFromDate ?? b.lastCommitDate;
        return aDate.localeCompare(bDate);
      });
      for (let i = 1; i < sorted.length; i++) {
        freshCopyBranchNames.add(sorted[i].name);
      }
    }
    // Also detect branches at commitsAhead===0 with no merge node — these are
    // fresh branches from the default branch, not genuinely merged.
    for (const b of activeBranches) {
      const hasChildBranches = (childBranchCountByParent.get(b.name) ?? 0) > 0;
      if (
        b.commitsAhead === 0 &&
        b.headSha &&
        !mergeNodeByMergedHeadSha.has(b.headSha) &&
        !hasChildBranches
      ) {
        freshCopyBranchNames.add(b.name);
      }
    }

    let cancelled = false;
    async function loadPromptMeta() {
      const results = await Promise.all(
        activeBranches.map(async (branch) => {
          try {
            const branchCreatedAt = branch.createdDate ?? branch.divergedFromDate ?? branch.lastCommitDate;
            const branchCreatedAtMs = new Date(branchCreatedAt).getTime();
            const parentComparisonBase =
              branch.parentBranch && branch.parentBranch !== branch.name
                ? branch.parentBranch
                : defaultBranch;
            const mergeNode = mergeNodeByMergedHeadSha.get(branch.headSha);
            const isMergedBranch = !!mergeNode;
            const isFreshCopy = freshCopyBranchNames.has(branch.name);
            const hasChildren = (childBranchCountByParent.get(branch.name) ?? 0) > 0;
            const isFreshBranch = isFreshCopy || (
              !isMergedBranch &&
              !hasChildren &&
              branch.remoteSyncStatus !== 'on-github' &&
              branch.commitsAhead === 0 &&
              !!branch.headSha &&
              (branch.headSha === branch.createdFromSha ||
                branch.headSha === branch.divergedFromSha)
            );

            // Only use merge-side attribution when the branch actually merges into
            // the default branch lane. Child branches should stay parent-exclusive.
            const shouldUseMergeRange =
              isMergedBranch &&
              parentComparisonBase === defaultBranch &&
              !!mergeNode?.fullSha;
            const mergeCommitSha = shouldUseMergeRange ? mergeNode?.fullSha : undefined;

            let historyCommits: Commit[] = [];
            let resolvedComparisonRange = false;
            if (!isFreshBranch) {
              if (mergeCommitSha) {
                const commits = await invoke<Commit[]>('get_branch_commits', {
                  repoPath,
                  branch: branch.name,
                  baseBranch: parentComparisonBase,
                  mergeCommitSha,
                  includePrompts: PROMPT_ENRICHMENT_ENABLED,
                });
                historyCommits = commits.filter((c) => c.fullSha !== mergeCommitSha);
                resolvedComparisonRange = true;
              } else {
                const topLevelStableBases = [
                  branch.createdFromSha,
                  branch.divergedFromSha,
                ].filter((value): value is string => !!value);
                const candidateBases = Array.from(
                  new Set(
                    parentComparisonBase === defaultBranch
                      ? [...topLevelStableBases, parentComparisonBase, defaultBranch]
                      : [parentComparisonBase, ...topLevelStableBases, defaultBranch],
                  ),
                );
                let firstSuccessfulCommits: Commit[] | null = null;
                for (const baseBranch of candidateBases) {
                  try {
                    const commits = await invoke<Commit[]>('get_branch_commits', {
                      repoPath,
                      branch: branch.name,
                      baseBranch,
                      includePrompts: PROMPT_ENRICHMENT_ENABLED,
                    });
                    if (firstSuccessfulCommits == null) {
                      firstSuccessfulCommits = commits;
                    }
                    const isStableTopLevelBase =
                      parentComparisonBase === defaultBranch &&
                      (baseBranch === branch.createdFromSha || baseBranch === branch.divergedFromSha);
                    // Parent-relative commits are the source of truth for stacked branches.
                    if (baseBranch === parentComparisonBase) {
                      historyCommits = commits;
                      resolvedComparisonRange = true;
                      break;
                    }
                    // For top-level branches, prefer stable base SHAs so merges into
                    // main do not erase the branch's own historical stack.
                    if (isStableTopLevelBase) {
                      historyCommits = commits;
                      resolvedComparisonRange = true;
                      break;
                    }
                    // For fallback bases, accept the first non-empty result.
                    if (commits.length > 0) {
                      historyCommits = commits;
                      resolvedComparisonRange = true;
                      break;
                    }
                  } catch {
                    // Try the next fallback base.
                  }
                }

                if (!resolvedComparisonRange && firstSuccessfulCommits != null) {
                  // Keep explicit zero-commit results (do not inflate from unrelated bases).
                  historyCommits = firstSuccessfulCommits;
                  resolvedComparisonRange = true;
                }
              }

              if (!resolvedComparisonRange && Number.isFinite(branchCreatedAtMs)) {
                const recent = await invoke<Commit[]>('get_recent_log', {
                  repoPath,
                  branch: branch.name,
                  limit: 400,
                  firstParent: false,
                  includePrompts: PROMPT_ENRICHMENT_ENABLED,
                });
                historyCommits = recent.filter((c) => {
                  const commitMs = new Date(c.date).getTime();
                  return Number.isFinite(commitMs) && commitMs >= branchCreatedAtMs;
                });
              }
            }

            const prompts = historyCommits
              .flatMap(c => c.agentPrompts ?? [])
              .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
            const commitPreviews: BranchCommitPreview[] = historyCommits
              .map((c) => ({
                fullSha: c.fullSha,
                sha: c.sha,
                parentSha: c.parentSha ?? null,
                message: c.message,
                author: c.author,
                date: c.date,
                kind: 'commit',
              }));
            // Never fabricate synthetic "HEAD of <branch>" commits.
            // If we can't resolve real commit objects, render no commit nodes.
            const uniqueCount = isFreshBranch
              ? 0
              : commitPreviews.length;
            const previews: BranchCommitPreview[] = commitPreviews;

            if (prompts.length === 0) {
              return [branch.name, { promptMeta: null, previews, uniqueCount }] as const;
            }

            const latest = prompts[0];
            const promptsAsc = [...prompts]
              .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
            const markers: BranchPromptMarker[] = promptsAsc
              .map(p => ({
                id: p.id,
                agent: p.agent,
                prompt: p.prompt,
                timestamp: p.timestamp,
              }));
            return [branch.name, {
              promptMeta: {
                count: prompts.length,
                latestPrompt: latest.prompt,
                latestAgent: latest.agent,
                latestTimestamp: latest.timestamp,
                markers,
              },
              previews,
              uniqueCount,
            }] as const;
          } catch {
            return [branch.name, {
              promptMeta: null,
              previews: [],
              uniqueCount: null,
            }] as const;
          }
        }),
      );

      let mainPromptMeta: BranchPromptMeta | null = null;
      try {
        const mainCommits = await invoke<Commit[]>('get_recent_log', {
          repoPath,
          branch: defaultBranch,
          limit: 250,
          firstParent: false,
          includePrompts: PROMPT_ENRICHMENT_ENABLED,
        });
        const prompts = mainCommits
          .flatMap((c) => c.agentPrompts ?? [])
          .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        if (prompts.length > 0) {
          const latest = prompts[0];
          const promptsAsc = [...prompts]
            .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
          const markers: BranchPromptMarker[] = promptsAsc
            .map((p) => ({
              id: p.id,
              agent: p.agent,
              prompt: p.prompt,
              timestamp: p.timestamp,
            }));
          mainPromptMeta = {
            count: prompts.length,
            latestPrompt: latest.prompt,
            latestAgent: latest.agent,
            latestTimestamp: latest.timestamp,
            markers,
          };
        }
      } catch {
        mainPromptMeta = null;
      }

      if (cancelled) return;
      const nextPromptMeta: Record<string, BranchPromptMeta> = {};
      const nextCommitPreviews: Record<string, BranchCommitPreview[]> = {};
      const nextUniqueAheadCounts: Record<string, number> = {};
      for (const [branchName, data] of results) {
        if (data.promptMeta) nextPromptMeta[branchName] = data.promptMeta;
        // Keep empty arrays too so the renderer knows this branch has loaded
        // and should show 0 unique commits relative to its selected base.
        nextCommitPreviews[branchName] = [...data.previews];
        if (data.uniqueCount != null) {
          nextUniqueAheadCounts[branchName] = data.uniqueCount;
        }
      }
      if (mainPromptMeta) {
        nextPromptMeta[defaultBranch] = mainPromptMeta;
      }

      setBranchPromptMeta(nextPromptMeta);
      setBranchCommitPreviews(nextCommitPreviews);
      setBranchUniqueAheadCounts(nextUniqueAheadCounts);
    }

    loadPromptMeta();
    return () => {
      cancelled = true;
    };
  }, [repoPath, defaultBranch, branches, mergeNodes]);

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

      setView('map');
      await sleep(800);
      await invoke('screenshot', { path: `${outDir}/main-timeline.png` });
      console.log(`📸 Done — screenshot saved to ${outDir}`);
    }

    const handler = (e: KeyboardEvent) => {
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
      await refreshRepoGitState(repoPath);
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
      await refreshRepoGitState(repoPath);
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
      await refreshRepoGitState(repoPath);
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

  async function handleMoveNodeBackToBranch(targetBranchName: string) {
    if (!repoPath) return;
    setCommitSwitchFeedback(null);
    try {
      const nextRef = await invoke<CheckedOutRef>('checkout_branch', {
        repoPath,
        branchName: targetBranchName,
      });
      setCheckedOutRef(nextRef);
      await refreshRepoGitState(repoPath);
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
      await refreshRepoGitState(repoPath);
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
      await refreshRepoGitState(repoPath);
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
      await refreshRepoGitState(repoPath);
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
      await refreshRepoGitState(repoPath);
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

      await refreshRepoGitState(repoPath);
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

  function handleFocusOnMap(branch: Branch) {
    setView('map');
    setFocusedErrorBranch(branch);
    setScrollRequest(prev => ({ branch, seq: (prev?.seq ?? 0) + 1 }));
    // panel stays open intentionally
  }

  function handleBackToLanding() {
    setRepoPath(null);
    setWorktrees([]);
    setOpenPRs([]);
    setDirectCommits([]);
    setUnpushedDirectCommits([]);
    setUnpushedCommitShasByBranch({});
    setBranchPromptMeta({});
    setBranchCommitPreviews({});
    setBranchUniqueAheadCounts({});
    setStashes([]);
    setGithubAvailable(false);
    setView('landing');
  }



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
    const isOnLaneTip = !!(
      targetLane &&
      checkedOutAnchorSha &&
      shaMatches(targetLane.headSha, checkedOutAnchorSha)
    );
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
    const uncommittedDirectCommit: DirectCommit = {
      fullSha: 'WORKING_TREE',
      sha: 'Uncommited Changes',
      parentSha: checkedOutAnchorSha,
      message: 'Local uncommitted changes',
      author: 'You',
      date: uncommittedDate,
      kind: 'uncommitted',
    };

    if (isOnLaneTip && targetLane?.isDefault) {
      return {
        enrichedBranches: eb,
        enrichedBranchCommitPreviews: ebp,
        enrichedBranchUniqueAheadCounts: ebuac,
        enrichedDirectCommits: [...edc, uncommittedDirectCommit],
      };
    }

    if (isOnLaneTip && targetBranch) {
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

    const fakeBranch: Branch = {
      name: '*Uncommitted',
      commitsAhead: 1,
      commitsBehind: 0,
      lastCommitDate: uncommittedDate,
      lastCommitAuthor: 'You',
      status: 'fresh',
      remoteSyncStatus: 'local-only',
      unpushedCommits: 1,
      headSha: 'WORKING_TREE',
      divergedFromSha: checkedOutAnchorSha ?? undefined,
      parentBranch: targetLane?.name || checkedOutRef.branchName || defaultBranch,
    };
    return {
      enrichedBranches: [fakeBranch, ...eb],
      enrichedBranchCommitPreviews: {
        ...ebp,
        [fakeBranch.name]: [uncommittedNode],
      },
      enrichedBranchUniqueAheadCounts: {
        ...ebuac,
        [fakeBranch.name]: 1,
      },
      enrichedDirectCommits: edc,
    };
  }, [branches, branchCommitPreviews, branchUniqueAheadCounts, checkedOutRef, defaultBranch, directCommits, stashes]);

  return (
    <div className="h-screen min-h-0 text-foreground flex flex-col relative bg-background">
      <header
        data-tauri-drag-region
        className="window-drag-region absolute left-0 right-0 top-0 z-[9999] h-12 px-4"
        style={{ paddingTop: 'max(env(safe-area-inset-top), 0px)' }}
        onMouseDown={handleWindowDragStart}
      >
        {view === 'map' && (
          <div className="relative z-10 pointer-events-none h-12">
            <button
              onClick={handleBackToLanding}
              aria-label="Back"
              title="Back"
              className="window-no-drag pointer-events-auto absolute left-19 top-1/2 inline-flex h-7 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent"
            >
              <ArrowLeft className="h-3.5 w-3.5 shrink-0" />
            </button>
            <div className="absolute left-1/2 top-1/2 min-w-0 max-w-[52vw] -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-sm font-medium text-foreground truncate">
                {repoName}
              </h1>
            </div>
            <button
              onClick={() => setOrientation((previous) => (previous === 'horizontal' ? 'vertical' : 'horizontal'))}
              aria-label={orientation === 'horizontal' ? 'Switch layout to vertical' : 'Switch layout to horizontal'}
              title={orientation === 'horizontal' ? 'Switch layout to vertical' : 'Switch layout to horizontal'}
              className="window-no-drag pointer-events-auto absolute right-[-5px] top-1/2 inline-flex h-7 -translate-y-1/2 items-center justify-center gap-1.5 rounded-full border border-border bg-card px-3 text-xs text-foreground transition-colors hover:bg-accent"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`h-3.5 w-3.5 shrink-0 transition-transform ${orientation === 'horizontal' ? 'rotate-90' : 'rotate-0'}`}
                aria-hidden
              >
                <path
                  d="M5 16V16.18C3.84 16.59 3 17.69 3 19C3 20.65 4.35 22 6 22C7.65 22 9 20.65 9 19C9 17.7 8.16 16.6 7 16.18V13H16.5C17.163 13 17.7989 12.7366 18.2678 12.2678C18.7366 11.7989 19 11.163 19 10.5V7.82C20.16 7.41 21 6.31 21 5C21 3.35 19.65 2 18 2C16.35 2 15 3.35 15 5C15 6.3 15.84 7.4 17 7.82V10.5C17 10.78 16.78 11 16.5 11H7V7.82C8.16 7.41 9 6.31 9 5C9 3.35 7.65 2 6 2C4.35 2 3 3.35 3 5C3 6.3 3.84 7.4 5 7.82V16ZM18 4C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6C17.45 6 17 5.55 17 5C17 4.45 17.45 4 18 4ZM6 4C6.55 4 7 4.45 7 5C7 5.55 6.55 6 6 6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4ZM6 20C5.45 20 5 19.55 5 19C5 18.45 5.45 18 6 18C6.55 18 7 18.45 7 19C7 19.55 6.55 20 6 20Z"
                  fill="currentColor"
                />
              </svg>
              {orientation === 'horizontal' ? 'Horizontal' : 'Vertical'}
            </button>
          </div>
        )}
      </header>
      <div className="h-full min-h-0 flex flex-col relative z-10">
      {view === 'landing' && (
        <div className="flex-1 min-h-0 overflow-hidden">
          <RepoSelector onSelect={loadRepo} loading={loading} error={error} />
        </div>
      )}

      <div className={`flex-1 overflow-hidden relative ${view === 'landing' ? 'hidden' : ''}`}>

        {/* Map view */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <BranchMapView
              branches={enrichedBranches}
              mergeNodes={mergeNodes}
              directCommits={enrichedDirectCommits}
              unpushedDirectCommits={unpushedDirectCommits}
              unpushedCommitShasByBranch={unpushedCommitShasByBranch}
              openPRs={openPRs}
              defaultBranch={defaultBranch}
              onCommitClick={handleMapCommitClick}
              githubAvailable={githubAvailable}
              branchPromptMeta={branchPromptMeta}
              branchCommitPreviews={enrichedBranchCommitPreviews}
              branchUniqueAheadCounts={enrichedBranchUniqueAheadCounts}
              view={mapMode}
              gridSearchQuery={gridSearchQuery}
              gridSearchJumpToken={gridSearchJumpToken}
              gridFocusSha={gridFocusSha}
              onGridSearchResultCountChange={setGridSearchResultCount}
              onGridSearchFocusChange={setGridFocusSha}
              isLoading={mapLoading}
              scrollRequest={scrollRequest}
              focusedErrorBranch={focusedErrorBranch}
              checkedOutRef={checkedOutRef}
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
              stashDisabled={!checkedOutRef?.hasUncommittedChanges}
              onCommitLocalChanges={handleCommitLocalChanges}
              commitInProgress={commitInProgress}
              commitDisabled={!checkedOutRef?.hasUncommittedChanges}
              onStageAllChanges={handleStageAllChanges}
              stageInProgress={stageInProgress}
              onCreateBranchFromNode={handleCreateBranchFromNode}
              createBranchFromNodeInProgress={createBranchFromNodeInProgress}
              onMoveNodeBackToBranch={handleMoveNodeBackToBranch}
              orientation={orientation}
            />
          </div>

          <header
            data-map-ui
            className="absolute left-0 right-0 top-12 z-40 px-4 md:px-8"
          >
            <div className="window-no-drag pointer-events-auto relative z-10 min-h-8 flex flex-wrap items-center gap-2 content-start">
              <div className="inline-flex rounded-full border border-border bg-card p-0.5 shadow-sm">
                <button
                  onClick={() => setMapMode('time')}
                  aria-pressed={mapMode === 'time'}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
                    mapMode === 'time'
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-accent'
                  )}
                >
                  Time
                </button>
                <button
                  onClick={() => setMapMode('grid')}
                  aria-pressed={mapMode === 'grid'}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
                    mapMode === 'grid'
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-accent'
                  )}
                >
                  Grid
                </button>
              </div>
              {githubAuthStatus?.ghAvailable && !githubAuthStatus.authenticated && (
                <button
                  onClick={handleGitHubAuthSetup}
                  disabled={githubAuthLoading}
                  className="text-xs text-muted-foreground hover:text-foreground border border-border/50 rounded-full px-3 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {githubAuthLoading ? 'Connecting GitHub...' : 'Connect GitHub'}
                </button>
              )}
              {githubAuthStatus && !githubAuthStatus.ghAvailable && (
                <span className="text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1">
                  Install `gh` for private PR data
                </span>
              )}
              {githubAuthMessage && (
                <span className="text-xs text-muted-foreground max-w-64 truncate" title={githubAuthMessage}>
                  {githubAuthMessage}
                </span>
              )}
              {mapMode === 'grid' && (
                <div className="window-no-drag flex min-w-56 flex-1 max-w-sm items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm">
                  <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium shrink-0">
                    Search
                  </span>
                  <input
                    value={gridSearchQuery}
                    onChange={(event) => setGridSearchQuery(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        setGridSearchJumpToken((token) => token + 1);
                      }
                    }}
                    placeholder="sha, message, or branch"
                    className="w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/70"
                  />
                  <button
                    type="button"
                    onClick={() => setGridSearchJumpToken((token) => token + 1)}
                    className="shrink-0 rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    Jump
                  </button>
                </div>
              )}
              {mapMode === 'grid' && gridSearchResultCount != null && (
                <span className="text-xs text-muted-foreground">
                  {gridSearchResultCount} match{gridSearchResultCount === 1 ? '' : 'es'}
                </span>
              )}
              {mapMode === 'grid' && gridFocusSha && (
                <span className="text-xs rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary">
                  Focused {gridFocusSha.slice(0, 7)}
                </span>
              )}
              {commitSwitchFeedback && (
                <span
                  className={cn(
                    'text-xs rounded-full px-3 py-1 max-w-[26rem] truncate transition-opacity duration-200',
                    isCommitSwitchFeedbackVisible ? 'opacity-100' : 'opacity-0',
                    commitSwitchFeedback.kind === 'error'
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                      : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  )}
                  title={commitSwitchFeedback.message}
                >
                  {commitSwitchFeedback.message}
                </span>
              )}
            </div>
          </header>

          {/* Branch errors floating panel */}
          {showErrorPanel && (
            <div data-map-ui className={`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden ${errorPanelClosing ? 'animate-error-panel-out' : 'animate-error-panel-in'}`}>
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
                <span className="text-sm font-medium text-foreground">Branch errors</span>
                <button
                  onClick={closeErrorPanel}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
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
                        <p className={`text-sm font-medium truncate ${
                          isFocused
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-foreground'
                        }`}>{b.name}</p>
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
    </div>
  );
}


function RepoSelector({
  onSelect,
  loading,
  error,
}: {
  onSelect: (path: string) => void;
  loading: boolean;
  error: string | null;
}) {
  const RECENT_REPOS_STORAGE_KEY = 'git-visualizer:recent-repositories';
  const MAX_RECENT_REPOS = 10;

  type RecentRepo = {
    path: string;
    name: string;
    lastOpenedAt: number;
  };

  const [path, setPath] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputError, setInputError] = useState<string | null>(null);
  const [recentRepos, setRecentRepos] = useState<RecentRepo[]>([]);

  function sanitizeRecentRepos(value: unknown): RecentRepo[] {
    if (!Array.isArray(value)) return [];
    return value
      .filter((repo): repo is RecentRepo => {
        return (
          typeof repo === 'object' &&
          repo !== null &&
          typeof repo.path === 'string' &&
          typeof repo.name === 'string' &&
          typeof repo.lastOpenedAt === 'number'
        );
      })
      .slice(0, MAX_RECENT_REPOS);
  }

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RECENT_REPOS_STORAGE_KEY);
      if (!raw) return;
      setRecentRepos(sanitizeRecentRepos(JSON.parse(raw)));
    } catch {
      setRecentRepos([]);
    }
  }, []);

  function normalizePath(value: string) {
    if (value === '/') return value;
    return value.replace(/\/+$/, '');
  }

  function persistRecentRepo(repoPath: string) {
    const normalizedPath = normalizePath(repoPath.trim());
    if (!normalizedPath) return;

    const name = normalizedPath.split('/').pop() || normalizedPath;
    const nextRepo: RecentRepo = {
      path: normalizedPath,
      name,
      lastOpenedAt: Date.now(),
    };

    const next = [nextRepo, ...recentRepos.filter((repo) => repo.path !== normalizedPath)].slice(0, MAX_RECENT_REPOS);
    setRecentRepos(next);
    try {
      localStorage.setItem(RECENT_REPOS_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage failures and keep in-memory list.
    }
  }

  function openRepo(selectedPath: string) {
    const normalizedPath = normalizePath(selectedPath);
    setInputError(null);
    persistRecentRepo(normalizedPath);
    onSelect(normalizedPath);
  }

  function handlePickerSelect(selectedPath: string) {
    setShowPicker(false);
    openRepo(selectedPath);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = path.trim();
    if (!value) return;

    const looksLikeUrl =
      value.startsWith('http://') ||
      value.startsWith('https://') ||
      value.startsWith('git@') ||
      value.startsWith('github.com/');

    if (looksLikeUrl) {
      setInputError('Enter a local repo folder path (for example: /Users/you/code/repo).');
      return;
    }

    openRepo(value);
  }

  return (
    <main className="h-full flex flex-col items-center pt-[16vh] bg-background">
      <div className="w-full max-w-sm flex flex-col items-center px-6">

        <div className="flex flex-col w-full gap-3 shrink-0">
          <button
            onClick={() => setShowPicker(true)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-2xl hover:opacity-90 transition-opacity"
          >
            Browse for repository
          </button>

          {!showInput ? (
            <button
              onClick={() => setShowInput(true)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-border bg-card text-foreground text-sm font-medium rounded-2xl hover:bg-accent transition-colors disabled:opacity-50"
            >
              Enter repo path
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <form
                onSubmit={handleSubmit}
                className="flex items-center border border-border bg-card rounded-2xl"
              >
                {/* Input with left-edge gradient fade for overflow text */}
                <div className="relative flex-1 min-w-0 overflow-hidden rounded-l-2xl">
                  <input
                    autoFocus
                    type="text"
                    value={path}
                    onChange={(e) => {
                      setPath(e.target.value);
                      if (inputError) setInputError(null);
                    }}
                    placeholder="Enter local path"
                    className="w-full bg-transparent pl-5 pr-2 py-3.5 text-sm focus:outline-none placeholder:text-muted-foreground tabular-nums min-w-0"
                  />
                  <div
                    className="absolute left-0 inset-y-0 w-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, var(--card), transparent)' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!path || loading}
                  className="m-1.5 w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-[14px] hover:opacity-90 transition-opacity shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
              {inputError && <p className="text-xs text-destructive px-2">{inputError}</p>}
              {!inputError && error && <p className="text-xs text-destructive px-2">{error}</p>}
            </div>
          )}
        </div>

        {recentRepos.length > 0 && (
          <div className="w-full mt-8 flex flex-col">
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium mb-3 shrink-0">Recently opened</p>
            <div className="flex flex-col gap-2">
              {recentRepos.slice(0, 5).map((repo) => (
                <button
                  key={repo.path}
                  onClick={() => openRepo(repo.path)}
                  disabled={loading}
                  className="w-full shrink-0 rounded-xl border border-border bg-card text-left px-4 py-2.5 hover:bg-muted transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <p className="text-foreground truncate text-sm">{repo.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{repo.path}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {showPicker && (
        <FolderPickerModal
          onSelect={handlePickerSelect}
          onClose={() => setShowPicker(false)}
        />
      )}
    </main>
  );
}

export default App;
