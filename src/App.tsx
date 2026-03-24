import { useState, useEffect, useRef } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { getCurrentWindow } from '@tauri-apps/api/window';
import BranchMapView from '../components/BranchMapView';
import DiffViewer from '../components/DiffViewer';
import FolderPickerModal from './FolderPickerModal';
import type { Branch, BranchCommitPreview, BranchPromptMeta, BranchPromptMarker, CheckedOutRef, Commit, DirectCommit, GitHubAuthStatus, GitHubInfo, MergeNode, MergedPR, OpenPR } from '../types';

type View = 'landing' | 'map' | 'diff';

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  const [repoPath, setRepoPath] = useState<string | null>(null);
  const [repoName, setRepoName] = useState<string>('');
  const [branches, setBranches] = useState<Branch[]>([]);
  const [mergeNodes, setMergeNodes] = useState<MergeNode[]>([]);
  const [directCommits, setDirectCommits] = useState<DirectCommit[]>([]);
  const [mergedPRs, setMergedPRs] = useState<MergedPR[]>([]);
  const [openPRs, setOpenPRs] = useState<OpenPR[]>([]);
  const [defaultBranch, setDefaultBranch] = useState<string>('main');
  const [checkedOutRef, setCheckedOutRef] = useState<CheckedOutRef | null>(null);
  const [loading, setLoading] = useState(false);       // button spinner in landing
  const [mapLoading, setMapLoading] = useState(false); // canvas skeleton in map
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<View>('landing');
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [showErrorPanel, setShowErrorPanel] = useState(false);
  const [errorPanelClosing, setErrorPanelClosing] = useState(false);
  const [errorPanelTab, setErrorPanelTab] = useState<'active' | 'inactive'>('active');
  // scrollRequest.seq increments on each click so the same branch re-triggers the effect
  const [scrollRequest, setScrollRequest] = useState<{ branch: Branch; seq: number } | null>(null);
  const [focusedErrorBranch, setFocusedErrorBranch] = useState<Branch | null>(null);
  const [mapUiReady, setMapUiReady] = useState(false);
  const hadMapDataRef = useRef(false);
  const [githubAvailable, setGithubAvailable] = useState(false);
  const [githubOwner, setGithubOwner] = useState<string | null>(null);
  const [githubRepo, setGithubRepo] = useState<string | null>(null);
  const [githubAuthStatus, setGithubAuthStatus] = useState<GitHubAuthStatus | null>(null);
  const [githubAuthLoading, setGithubAuthLoading] = useState(false);
  const [githubAuthMessage, setGithubAuthMessage] = useState<string | null>(null);
  const [branchPromptMeta, setBranchPromptMeta] = useState<Record<string, BranchPromptMeta>>({});
  const [branchCommitPreviews, setBranchCommitPreviews] = useState<Record<string, BranchCommitPreview[]>>({});
  const [branchUniqueAheadCounts, setBranchUniqueAheadCounts] = useState<Record<string, number>>({});

  // Pre-warm: screenshot main branch at '/' as soon as active branches load,
  // so DiffViewer can skip the main-side server start for the common case.
  const [prewarmedMainShots, setPrewarmedMainShots] = useState<(string | null)[] | null>(null);
  const prewarmedRef = useRef(false);
  const [authSetupLoading, setAuthSetupLoading] = useState(false);
  const [isPopoverWindow, setIsPopoverWindow] = useState(false);

  useEffect(() => {
    try {
      setIsPopoverWindow(getCurrentWindow().label === 'main');
    } catch {
      setIsPopoverWindow(false);
    }
  }, []);

  useEffect(() => {
    if (isPopoverWindow) {
      document.body.classList.add('popover-window');
      document.documentElement.classList.add('popover-window');
    } else {
      document.body.classList.remove('popover-window');
      document.documentElement.classList.remove('popover-window');
    }

    return () => {
      document.body.classList.remove('popover-window');
      document.documentElement.classList.remove('popover-window');
    };
  }, [isPopoverWindow]);

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

  async function loadRepo(path: string) {
    setLoading(true);
    setMapLoading(true);
    setError(null);
    setBranches([]);
    setMergeNodes([]);
    setDirectCommits([]);
    setRepoPath(path);
    setRepoName(path.split('/').pop() || '');
    setView('map');

    try {
      // Phase 1: fast metadata — show the map shell immediately
      const [info, def, checkedOut] = await Promise.all([
        invoke<{ name: string; path: string }>('get_repo_info', { repoPath: path }),
        invoke<string>('get_default_branch', { repoPath: path }),
        invoke<CheckedOutRef>('get_checked_out_ref', { repoPath: path }).catch(() => null),
      ]);
      setRepoName(info.name);
      setDefaultBranch(def);
      setCheckedOutRef(checkedOut);
      setLoading(false); // unblock the landing button

      // Phase 2: heavier git data — timeline skeleton shows while this loads
      const [branchList, nodes, directResult] = await Promise.all([
        invoke<Branch[]>('get_branches', { repoPath: path }),
        fetchAllMergeNodes(path, def),
        invoke<DirectCommit[]>('get_direct_commits', {
          repoPath: path,
          branch: def,
        }),
      ]);
      setBranches(branchList);
      setMergeNodes(nodes);
      setDirectCommits(directResult);
      setMapLoading(false);

      // Phase 3: GitHub data (non-blocking)
      fetchGitHubData(path, def);
    } catch (e) {
      console.error('Failed to load repo:', e);
      setError(e instanceof Error ? e.message : String(e));
      setView('landing');
      setRepoPath(null);
      setLoading(false);
      setMapLoading(false);
    }
  }

  async function fetchGitHubData(path: string, baseBranch: string) {
    try {
      setGithubAvailable(false);
      setGithubAuthMessage(null);
      const ghInfo = await invoke<GitHubInfo>('get_github_info', { repoPath: path });
      setGithubOwner(ghInfo.owner);
      setGithubRepo(ghInfo.repo);

      const authStatus = await invoke<GitHubAuthStatus>('get_github_auth_status');
      setGithubAuthStatus(authStatus);
      if (!authStatus.ghAvailable || !authStatus.authenticated) {
        return;
      }

      // Fetch merged PRs and open PRs in parallel
      const [prs, open] = await Promise.all([
        invoke<MergedPR[]>('get_merged_prs', {
          owner: ghInfo.owner,
          repo: ghInfo.repo,
          baseBranch,
          limit: 50,
        }),
        invoke<OpenPR[]>('get_open_prs', {
          owner: ghInfo.owner,
          repo: ghInfo.repo,
        }),
      ]);
      setMergedPRs(prs);
      setOpenPRs(open);
      setGithubAvailable(true);
    } catch (e) {
      // GitHub data is optional, don't show error to user
      console.log('GitHub data not available:', e);
      setGithubAuthMessage(e instanceof Error ? e.message : String(e));
      setGithubAvailable(false);
    }
  }

  async function handleGitHubAuthSetup() {
    if (!repoPath) return;
    setGithubAuthLoading(true);
    setGithubAuthMessage(null);
    try {
      await invoke('authenticate_github');
      const authStatus = await invoke<GitHubAuthStatus>('get_github_auth_status');
      setGithubAuthStatus(authStatus);
      if (authStatus.authenticated) {
        await fetchGitHubData(repoPath, defaultBranch);
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
  const errorBranches = branches.filter((b) => b.status === 'conflict-risk' || b.status === 'stale');
  const activeErrorBranches = errorBranches.filter(
    (b) => openPRBranchNames.has(b.name) || now - new Date(b.lastCommitDate).getTime() <= ACTIVE_MS
  );
  const inactiveErrorBranches = errorBranches.filter(
    (b) => !openPRBranchNames.has(b.name) && now - new Date(b.lastCommitDate).getTime() > ACTIVE_MS
  );

  // Mirror BranchMap's controlsReady timing so the error pill fades in together.
  // BranchMap fires drawReady after 2 rAFs (~33ms), then delays controls 2600ms.
  const hasTimelineData =
    branches.length > 0 || mergeNodes.length > 0 || directCommits.length > 0;
  useEffect(() => {
    if (!hasTimelineData || hadMapDataRef.current) return;
    hadMapDataRef.current = true;
    setMapUiReady(false);
    const id = setTimeout(() => setMapUiReady(true), 2650);
    return () => clearTimeout(id);
  }, [hasTimelineData]);

  // Reset when a new repo is loaded
  useEffect(() => {
    hadMapDataRef.current = false;
    setMapUiReady(false);
    setPrewarmedMainShots(null);
    prewarmedRef.current = false;
    setBranchPromptMeta({});
    setBranchCommitPreviews({});
    setBranchUniqueAheadCounts({});
    setAuthSetupLoading(false);
    setGithubAuthLoading(false);
    setGithubAuthStatus(null);
    setGithubAuthMessage(null);
    setCheckedOutRef(null);
  }, [repoPath]);

  useEffect(() => {
    if (!repoPath || !defaultBranch) {
      setBranchPromptMeta({});
      setBranchCommitPreviews({});
      setBranchUniqueAheadCounts({});
      return;
    }

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

    let cancelled = false;
    async function loadPromptMeta() {
      const results = await Promise.all(
        activeBranches.map(async (branch) => {
          try {
            const branchCreatedAt = branch.createdDate ?? branch.divergedFromDate ?? branch.lastCommitDate;
            const branchCreatedAtMs = new Date(branchCreatedAt).getTime();
            const comparisonBase =
              branch.parentBranch && branch.parentBranch !== branch.name
                ? branch.parentBranch
                : defaultBranch;
            const mergeNode = mergeNodeByMergedHeadSha.get(branch.headSha);
            const parentIsDefault =
              !branch.parentBranch ||
              branch.parentBranch === branch.name ||
              branch.parentBranch === defaultBranch;
            const shouldUseMergeRange = branch.commitsAhead === 0 && parentIsDefault;
            const mergeCommitSha = shouldUseMergeRange ? mergeNode?.fullSha : undefined;
            const commits = await invoke<Commit[]>('get_branch_commits', {
              repoPath,
              branch: branch.name,
              baseBranch: comparisonBase,
              mergeCommitSha,
            });
            let historyCommits = mergeCommitSha
              ? commits.filter((c) => c.fullSha !== mergeCommitSha)
              : commits;

            if (
              historyCommits.length === 0 &&
              branch.commitsAhead === 0 &&
              Number.isFinite(branchCreatedAtMs)
            ) {
              // Branch is already merged into main; recover historical branch commits
              // from first-parent log bounded by branch creation time.
              const recent = await invoke<Commit[]>('get_recent_log', {
                repoPath,
                branch: branch.name,
                limit: 200,
              });
              historyCommits = recent.filter((c) => {
                const commitMs = new Date(c.date).getTime();
                return Number.isFinite(commitMs) && commitMs >= branchCreatedAtMs;
              });
            }

            const prompts = historyCommits
              .flatMap(c => c.agentPrompts ?? [])
              .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
            const commitPreviews: BranchCommitPreview[] = historyCommits
              .map((c) => ({
                fullSha: c.fullSha,
                sha: c.sha,
                message: c.message,
                author: c.author,
                date: c.date,
                kind: 'commit',
              }));
            const branchCreatedSha = branch.divergedFromSha?.slice(0, 7) ?? branch.headSha.slice(0, 7);
            const branchCreationPreview: BranchCommitPreview = {
              fullSha: `branch-created:${branch.name}:${branchCreatedAt}`,
              sha: branchCreatedSha || 'created',
              message: `Branch created: ${branch.name}`,
              author: branch.lastCommitAuthor || 'Unknown',
              date: branchCreatedAt,
              kind: 'branch-created',
            };
            const previews: BranchCommitPreview[] = [...commitPreviews, branchCreationPreview];
            const uniqueCount = branch.commitsAhead > 0 ? commitPreviews.length : null;

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
            const branchCreatedAt = branch.createdDate ?? branch.divergedFromDate ?? branch.lastCommitDate;
            const branchCreatedSha = branch.divergedFromSha?.slice(0, 7) ?? branch.headSha.slice(0, 7);
            const branchCreationPreview: BranchCommitPreview = {
              fullSha: `branch-created:${branch.name}:${branchCreatedAt}`,
              sha: branchCreatedSha || 'created',
              message: `Branch created: ${branch.name}`,
              author: branch.lastCommitAuthor || 'Unknown',
              date: branchCreatedAt,
              kind: 'branch-created',
            };
            return [branch.name, {
              promptMeta: null,
              previews: [branchCreationPreview],
              uniqueCount: branch.commitsAhead > 0 ? branch.commitsAhead : null,
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

  // Pre-warm: start screenshotting main at '/' as soon as active branches arrive.
  // Uses port 3495 (separate from DiffViewer's 3491/3492) to avoid conflicts.
  useEffect(() => {
    const activeBranches = branches.filter(b => b.commitsAhead > 0);
    if (!repoPath || !defaultBranch || activeBranches.length === 0) return;
    if (prewarmedRef.current) return;
    prewarmedRef.current = true;
    invoke<string[]>('generate_preview_routes', {
      repoPath,
      branch: defaultBranch,
      port: 3495,
      paths: ['/'],
    }).then(shots => {
      setPrewarmedMainShots(shots.map(s => (s.startsWith('data:') ? s : null)));
    }).catch(() => { /* silent — DiffViewer will fall back to fresh generation */ });
  }, [repoPath, defaultBranch, branches.length]);


  // ── Cmd+Shift+S: capture screenshots of main timeline + every branch detail ──
  useEffect(() => {
    if (!repoPath || branches.length === 0) return;
    const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
    const sanitize = (s: string) => s.replace(/[/\\:*?"<>|]/g, '-');

    async function captureScreenshots() {
      const homeDir = await invoke<string>('get_home_dir');
      const outDir = `${homeDir}/Desktop/git-viz-screenshots/${repoName}`;
      console.log(`📸 Saving screenshots to ${outDir}`);

      // 1. Main timeline
      setSelectedBranch(null);
      setView('map');
      await sleep(800);
      await invoke('screenshot', { path: `${outDir}/main-timeline.png` });
      console.log('  ✓ main-timeline.png');

      // 2. Each branch detail page
      for (const branch of branches) {
        setSelectedBranch(branch);
        setView('diff');
        await sleep(1200); // wait for commits to load
        await invoke('screenshot', { path: `${outDir}/${sanitize(branch.name)}.png` });
        console.log(`  ✓ ${sanitize(branch.name)}.png`);
      }

      // Back to map
      setSelectedBranch(null);
      setView('map');
      console.log(`📸 Done — ${branches.length + 1} screenshots saved to ${outDir}`);
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

  function handleBranchSelect(branch: Branch) {
    setSelectedBranch(branch);
    setView('diff');
  }

  function handleBranchClick(branch: Branch) {
    setSelectedBranch(branch);
    setView('diff');
  }

  function handleFocusOnMap(branch: Branch) {
    setSelectedBranch(null);
    setView('map');
    setFocusedErrorBranch(branch);
    setScrollRequest(prev => ({ branch, seq: (prev?.seq ?? 0) + 1 }));
    // panel stays open intentionally
  }

  function handleViewDiff() {
    if (selectedBranch) {
      setView('diff');
    }
  }

  function handleBackToMap() {
    setSelectedBranch(null);
    setView('map');
  }

  // True when pre-warm finished but root route is auth-gated (all shots null)
  const previewIsAuthGated =
    prewarmedMainShots !== null && prewarmedMainShots.every(s => s === null);

  async function handleAuthSetup() {
    if (!repoPath) return;
    setAuthSetupLoading(true);
    try {
      await invoke('open_preview_browser', { repoPath, branch: defaultBranch });
    } catch (e) {
      console.error('Auth setup failed:', e);
    }
    setAuthSetupLoading(false);
    // Re-run pre-warm so updated auth is reflected in DiffViewer
    prewarmedRef.current = false;
    setPrewarmedMainShots(null);
  }

  function handleBackToLanding() {
    setRepoPath(null);
    setMergedPRs([]);
    setOpenPRs([]);
    setDirectCommits([]);
    setBranchPromptMeta({});
    setBranchCommitPreviews({});
    setBranchUniqueAheadCounts({});
    setGithubAvailable(false);
    setView('landing');
  }

  async function handleOpenFullApp() {
    try {
      await invoke('open_full_app_window');
    } catch (e) {
      console.error('Failed to open full app window:', e);
    }
  }

  return (
    <div className={`h-screen min-h-0 text-foreground flex flex-col relative ${isPopoverWindow ? 'bg-transparent' : 'bg-background'}`}>
      <div className={`h-full min-h-0 flex flex-col relative ${isPopoverWindow ? 'overflow-hidden popover-continuous-60 bg-background' : ''}`}>
      <button
        onClick={handleOpenFullApp}
        className={cn(
          'absolute z-[80] rounded-lg border border-border bg-card font-medium text-foreground hover:bg-accent transition-colors',
          isPopoverWindow ? 'top-2 right-2 px-2.5 py-1 text-[11px]' : 'top-3 right-3 px-3 py-1.5 text-xs'
        )}
      >
        Open app
      </button>
      {view === 'landing' && (
        <div>
          <RepoSelector onSelect={loadRepo} loading={loading} error={error} isPopoverWindow={isPopoverWindow} />
        </div>
      )}

      {/* Map + Diff share a container — hidden only during landing.
          Map↔Diff transitions use visibility (not display) so CSS animations don't reset. */}
      <div className={`flex-1 overflow-hidden relative ${view === 'landing' ? 'hidden' : ''}`}>

        {/* Map view */}
        <div className={`absolute inset-0 flex flex-col ${view !== 'map' ? 'invisible pointer-events-none' : ''}`}>
          <header className="px-4 py-3 md:px-8 md:py-5">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <button
                onClick={handleBackToLanding}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm shrink-0 justify-self-start"
              >
                ← Back
              </button>
              <h1 className="text-sm md:text-base font-medium text-foreground text-center justify-self-center max-w-[52vw] truncate">
                {repoName}
              </h1>
              <div className="justify-self-end" aria-hidden="true" />
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {selectedBranch && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-cyan-400 border border-cyan-800 rounded-full px-3 py-1 bg-cyan-950/50">
                    {selectedBranch.name}
                  </span>
                  <button
                    onClick={handleViewDiff}
                    className="text-sm text-foreground border border-border rounded-full px-3 py-1 bg-card hover:bg-accent transition-colors"
                  >
                    View diff →
                  </button>
                  <button
                    onClick={() => setSelectedBranch(null)}
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    ✕
                  </button>
                </div>
              )}
              {(previewIsAuthGated || authSetupLoading) && (
                <button
                  onClick={handleAuthSetup}
                  disabled={authSetupLoading}
                  className="text-xs text-muted-foreground hover:text-foreground border border-border/50 rounded-full px-3 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {authSetupLoading ? 'Log in and close Chrome...' : 'Authenticate Preview'}
                </button>
              )}
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
              {activeErrorBranches.length > 0 && (
                <button
                  onClick={() => { if (showErrorPanel) { closeErrorPanel(); } else { setShowErrorPanel(true); } }}
                  style={{ opacity: mapUiReady ? 1 : 0, transition: 'opacity 0.4s ease, background-color 0.2s ease, border-color 0.2s ease' }}
                  className={`flex items-center gap-1.5 text-xs border rounded-full px-3 py-1 ${
                    showErrorPanel
                      ? 'text-destructive border-destructive/40 bg-destructive/10'
                      : 'text-destructive border-destructive/20 bg-destructive/5 hover:bg-destructive/10'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                  {activeErrorBranches.length} active error{activeErrorBranches.length !== 1 ? 's' : ''}
                </button>
              )}
            </div>
          </header>

          {/* Branch errors floating panel */}
          {showErrorPanel && (
            <div className={`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden ${errorPanelClosing ? 'animate-error-panel-out' : 'animate-error-panel-in'}`}>
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
                  return (
                    <button
                      key={b.name}
                      onClick={() => handleFocusOnMap(b)}
                      className={`w-full flex items-start gap-2 py-3 border-b border-border/30 last:border-0 hover:bg-accent transition-colors text-left ${
                        isFocused
                          ? b.status === 'conflict-risk'
                            ? 'bg-red-50/60 dark:bg-red-900/10 px-4'
                            : 'bg-amber-50/60 dark:bg-amber-900/10 px-4'
                          : 'px-4'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${
                          isFocused
                            ? b.status === 'conflict-risk' ? 'text-destructive' : 'text-amber-600 dark:text-amber-400'
                            : 'text-foreground'
                        }`}>{b.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {b.commitsAhead > 0 && `${b.commitsAhead} ahead`}
                          {b.commitsAhead > 0 && b.commitsBehind > 0 && ', '}
                          {b.commitsBehind > 0 && `${b.commitsBehind} behind`}
                        </p>
                      </div>
                      <span className={`text-[10px] font-medium uppercase tracking-wide px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${
                        b.status === 'conflict-risk'
                          ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                          : 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400'
                      }`}>
                        {b.status === 'conflict-risk' ? 'Conflict' : 'Stale'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex-1 overflow-hidden">
            <BranchMapView
              branches={branches}
              mergeNodes={mergeNodes}
              directCommits={directCommits}
              mergedPRs={mergedPRs}
              openPRs={openPRs}
              defaultBranch={defaultBranch}
              selectedBranch={selectedBranch}
              onBranchSelect={handleBranchSelect}
              onBranchClick={handleBranchClick}
              githubAvailable={githubAvailable}
              githubOwner={githubOwner}
              githubRepo={githubRepo}
              branchPromptMeta={branchPromptMeta}
              branchCommitPreviews={branchCommitPreviews}
              branchUniqueAheadCounts={branchUniqueAheadCounts}
              view="time"
              isLoading={mapLoading}
              scrollRequest={scrollRequest}
              focusedErrorBranch={focusedErrorBranch}
              checkedOutRef={checkedOutRef}
            />
          </div>
        </div>

        {/* Diff view */}
        {repoPath && selectedBranch && (
          <div className={`absolute inset-0 flex flex-col transition-opacity duration-150 ${view !== 'diff' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <DiffViewer
              key={selectedBranch.name}
              repoPath={repoPath}
              branch={selectedBranch}
              defaultBranch={defaultBranch}
              mergedPR={mergedPRs.find(p => p.branchName === selectedBranch.name)}
              prewarmedMainShots={prewarmedMainShots}
              onBack={handleBackToMap}
            />
          </div>
        )}

      </div>
      </div>
    </div>
  );
}

function InteractiveDotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const raf = useRef(0);
  const dots = useRef<{ x: number; y: number; phase: number }[]>([]);

  useEffect(() => {
    const rawCanvas = canvasRef.current;
    if (!rawCanvas) return;
    const canvas: HTMLCanvasElement = rawCanvas;
    const ctx = canvas.getContext('2d')!;
    const SPACING = 20;

    function buildDots(w: number, h: number) {
      const arr: { x: number; y: number; phase: number }[] = [];
      const cols = Math.floor(w / SPACING);
      const rows = Math.floor(h / SPACING);
      const ox = (w - cols * SPACING) / 2;
      const oy = (h - rows * SPACING) / 2;
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          arr.push({ x: ox + c * SPACING, y: oy + r * SPACING, phase: Math.random() * Math.PI * 2 });
        }
      }
      dots.current = arr;
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildDots(w, h);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function draw(t: number) {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const mx = mouse.current.x;
      const my = mouse.current.y;
      const INFLUENCE = 160;
      const MAX_PUSH  = 28;

      for (const d of dots.current) {
        const pulse = 0.1 + 0.22 * Math.sin(t * 0.0005 + d.phase);
        const ddx = d.x - mx;
        const ddy = d.y - my;
        const dist = Math.sqrt(ddx * ddx + ddy * ddy);
        const prox = Math.max(0, 1 - dist / INFLUENCE);

        // Repel: push dot away from cursor
        const force = Math.pow(prox, 2) * MAX_PUSH;
        const drawX = dist > 0 ? d.x + (ddx / dist) * force : d.x;
        const drawY = dist > 0 ? d.y + (ddy / dist) * force : d.y;

        const opacity = pulse + prox * 0.4;
        const r = 1.3 + prox * 1.2;

        ctx.beginPath();
        ctx.arc(drawX, drawY, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 162, 158, ${opacity})`;
        ctx.fill();
      }

      raf.current = requestAnimationFrame(draw);
    }

    raf.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }}
      onMouseLeave={() => { mouse.current = { x: -9999, y: -9999 }; }}
    />
  );
}

function RepoSelector({
  onSelect,
  loading,
  error,
  isPopoverWindow = false,
}: {
  onSelect: (path: string) => void;
  loading: boolean;
  error: string | null;
  isPopoverWindow?: boolean;
}) {
  const RECENT_REPOS_STORAGE_KEY = 'git-visualizer:recent-repositories';
  const MAX_RECENT_REPOS = 6;

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

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RECENT_REPOS_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as RecentRepo[];
      if (!Array.isArray(parsed)) return;
      const sanitized = parsed
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
      setRecentRepos(sanitized);
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

    setRecentRepos((prev) => {
      const next = [nextRepo, ...prev.filter((repo) => repo.path !== normalizedPath)].slice(0, MAX_RECENT_REPOS);
      try {
        localStorage.setItem(RECENT_REPOS_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignore storage failures and keep in-memory list.
      }
      return next;
    });
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
    <main className={cn(
      'flex h-full flex-col',
      isPopoverWindow ? 'overflow-y-auto px-3 pt-12 pb-3 bg-background' : 'overflow-hidden md:flex-row'
    )}>
      {!isPopoverWindow && (
        <div className="h-28 md:h-auto md:w-[26%] relative flex-shrink-0 bg-muted overflow-hidden">
          <InteractiveDotField />
        </div>
      )}

      <div className={cn(
        'flex-1 flex flex-col min-h-0',
        isPopoverWindow ? 'justify-start' : 'justify-center px-6 py-8 md:px-16 bg-background'
      )}>
        {!isPopoverWindow && (
          <>
            <p className="font-light text-foreground max-w-md text-3xl md:text-5xl leading-none" style={{ fontFamily: 'var(--font-space-grotesk)' }}>Git visualizer</p>
            <h1 className="font-bold text-foreground mb-8 md:mb-14 max-w-md text-3xl md:text-5xl leading-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              See what your team is building, without reading a line of code.
            </h1>

            <p className="text-sm text-muted-foreground mb-4">Get started</p>
          </>
        )}

        {recentRepos.length > 0 && (
          <div className={cn('w-full', isPopoverWindow ? 'mb-3' : 'max-w-xs mb-4')}>
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium mb-2">Recently opened</p>
            <div className={cn('flex flex-col', isPopoverWindow ? 'gap-1.5' : 'gap-2')}>
              {recentRepos.map((repo) => (
                <button
                  key={repo.path}
                  onClick={() => openRepo(repo.path)}
                  disabled={loading}
                  className={cn(
                    'w-full rounded-xl border border-border bg-card text-left hover:bg-muted transition-colors disabled:opacity-60 disabled:cursor-not-allowed',
                    isPopoverWindow ? 'px-3 py-2' : 'px-4 py-2.5'
                  )}
                >
                  <p className={cn('text-foreground truncate', isPopoverWindow ? 'text-xs' : 'text-sm')}>{repo.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{repo.path}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className={cn('flex flex-col w-full', isPopoverWindow ? 'gap-2' : 'gap-3 max-w-xs')}>
          <button
            onClick={() => setShowPicker(true)}
            className={cn(
              'border border-border bg-card text-foreground hover:bg-accent transition-colors text-center',
              isPopoverWindow ? 'px-3 py-2 text-xs rounded-lg' : 'px-6 py-3 text-sm rounded-2xl'
            )}
          >
            Browse for repository
          </button>

          {!showInput ? (
            <button
              onClick={() => setShowInput(true)}
              className={cn(
                'border border-border bg-card text-foreground hover:bg-accent transition-colors text-center',
                isPopoverWindow ? 'px-3 py-2 text-xs rounded-lg' : 'px-6 py-3 text-sm rounded-2xl'
              )}
            >
              Enter repo path
            </button>
          ) : (
            <div className={cn('flex flex-col gap-2', isPopoverWindow ? '' : 'animate-pill-expand')}>
              <form
                onSubmit={handleSubmit}
                className={cn('flex items-center border border-border bg-card', isPopoverWindow ? 'rounded-lg' : 'rounded-2xl')}
              >
                {/* Input with left-edge gradient fade for overflow text */}
                <div className={cn('relative flex-1 min-w-0 overflow-hidden', isPopoverWindow ? 'rounded-l-lg' : 'rounded-l-2xl')}>
                  <input
                    autoFocus
                    type="text"
                    value={path}
                    onChange={(e) => {
                      setPath(e.target.value);
                      if (inputError) setInputError(null);
                    }}
                    placeholder="Enter local path"
                    className={cn(
                      'w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none',
                      isPopoverWindow ? 'pl-3 pr-2 py-2 text-xs' : 'pl-5 pr-2 py-3.5 text-sm'
                    )}
                  />
                  <div
                    className="absolute left-0 inset-y-0 w-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, var(--card), transparent)' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!path || loading}
                  className={cn(
                    'bg-foreground text-background flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity disabled:opacity-30',
                    isPopoverWindow ? 'm-1 w-8 h-8 rounded-lg' : 'm-1.5 w-10 h-10 rounded-[14px]'
                  )}
                >
                  {loading ? (
                    <div className="w-3.5 h-3.5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              </form>
              {inputError && <p className="text-xs text-destructive px-2">{inputError}</p>}
              {!inputError && error && <p className="text-xs text-destructive px-2">{error}</p>}
            </div>
          )}
        </div>
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
