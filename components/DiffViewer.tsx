import { useState, useEffect, useRef } from 'react';
import { invoke } from '@tauri-apps/api/core';
import type { Branch, Commit, MergedPR } from '../types';

function timeAgo(dateStr: string) {
  const s = (Date.now() - new Date(dateStr).getTime()) / 1000;
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  if (s < 86400 * 30) return `${Math.floor(s / 86400)}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

interface SummaryChange {
  type: 'add' | 'remove';
  description: string;
}

interface SummarySection {
  section: string;
  changes: SummaryChange[];
}

// A single before/after screenshot pair for one URL route.
function ComparisonRow({
  route,
  showRouteLabel,
  mainSrc,
  branchSrc,
  mainTitle,
  branchTitle,
  loading,
  error,
}: {
  route: string;
  showRouteLabel: boolean;
  mainSrc: string | null;
  branchSrc: string | null;
  mainTitle: string;
  branchTitle: string;
  loading: boolean;
  error: string | null;
}) {
  return (
    <div className="flex flex-col gap-2">
      {showRouteLabel && (
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium px-1">
          {route}
        </span>
      )}
      <div className="flex gap-4">
        <PreviewPanel title={mainTitle} src={mainSrc} loading={loading} error={error} />
        <PreviewPanel title={branchTitle} src={branchSrc} loading={loading} error={error} />
      </div>
    </div>
  );
}

function PreviewPanel({ title, src, loading, error }: {
  title: string;
  src: string | null;
  loading: boolean;
  error: string | null;
}) {
  const [imgVisible, setImgVisible] = useState(false);

  // Reset fade state when src changes so each new screenshot fades in fresh
  const prevSrc = useRef<string | null>(null);
  if (src !== prevSrc.current) {
    prevSrc.current = src;
    if (src) setImgVisible(false);
  }

  return (
    <div className="flex-1 min-w-0 rounded-2xl bg-card border border-border flex flex-col overflow-hidden">
      <div className="px-5 pt-5 pb-3 flex-shrink-0 border-b border-border/50">
        <h2 className="text-sm font-semibold text-foreground truncate">{title}</h2>
      </div>
      <div className="flex-1 overflow-auto">
        {src ? (
          <img
            src={src}
            alt={title}
            className={`w-full transition-opacity duration-500 ${imgVisible ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgVisible(true)}
          />
        ) : loading ? (
          <div className="animate-pulse p-4 space-y-3">
            <div className="h-5 bg-muted rounded w-1/3" />
            <div className="h-32 bg-muted rounded-lg w-full" />
            <div className="space-y-2">
              <div className="h-3 bg-muted rounded w-full" />
              <div className="h-3 bg-muted rounded w-5/6" />
              <div className="h-3 bg-muted rounded w-2/3" />
            </div>
            <div className="h-24 bg-muted rounded-lg w-full" />
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-40 px-5">
            <p className="text-xs text-destructive text-center">{error}</p>
          </div>
        ) : (
          <div className="flex items-center justify-center h-40">
            <p className="text-xs text-muted-foreground italic">No preview available</p>
          </div>
        )}
      </div>
    </div>
  );
}

interface DiffViewerProps {
  repoPath: string;
  branch: Branch;
  defaultBranch: string;
  mergedPR?: MergedPR;
  onBack: () => void;
  prewarmedMainShots?: (string | null)[] | null;
}

export default function DiffViewer({
  repoPath,
  branch,
  defaultBranch,
  mergedPR,
  onBack,
  prewarmedMainShots,
}: DiffViewerProps) {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [commitsLoading, setCommitsLoading] = useState(true);
  const [summary, setSummary] = useState<SummarySection[] | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(true);
  const [summaryState, setSummaryState] = useState<'loading' | 'done' | 'no-diff' | 'no-key' | 'git-error' | 'api-error' | 'parse-error'>('loading');
  const [apiErrorDetail, setApiErrorDetail] = useState<string | null>(null);
  const [panelView, setPanelView] = useState<'summary' | 'commits'>('summary');

  // Preview state — one entry per detected route
  const [routes, setRoutes] = useState<string[]>(['/']);
  const [mainShots, setMainShots] = useState<(string | null)[]>([]);
  const [branchShots, setBranchShots] = useState<(string | null)[]>([]);
  const [mainLoading, setMainLoading] = useState(true);
  const [branchLoading, setBranchLoading] = useState(true);
  const [mainError, setMainError] = useState<string | null>(null);
  const [branchError, setBranchError] = useState<string | null>(null);

  // Generation counter: prevents React StrictMode double-invocation races.
  // If a newer call starts while an older one is still awaiting Rust, the older
  // call checks this ref after each await and bails if it's been superseded.
  const genRef = useRef(0);

  useEffect(() => {
    generatePreviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repoPath, branch.name, defaultBranch]);

  useEffect(() => {
    async function loadCommits() {
      setCommitsLoading(true);
      try {
        const mergeCommitSha = branch.commitsAhead === 0 && mergedPR?.mergeCommitSha
          ? mergedPR.mergeCommitSha
          : undefined;
        const result = await invoke<Commit[]>('get_branch_commits', {
          repoPath,
          branch: branch.name,
          baseBranch: defaultBranch,
          mergeCommitSha,
        });
        setCommits(result);
      } catch {
        setCommits([]);
      }
      setCommitsLoading(false);
    }

    async function loadDiffSummary() {
      setSummaryLoading(true);
      const mergeCommitSha = branch.commitsAhead === 0 && mergedPR?.mergeCommitSha
        ? mergedPR.mergeCommitSha
        : undefined;

      let diff: string;
      let apiKey: string | null;
      try {
        [diff, apiKey] = await Promise.all([
          invoke<string>('get_branch_diff', {
            repoPath,
            branch: branch.name,
            baseBranch: defaultBranch,
            mergeCommitSha,
          }),
          invoke<string | null>('get_anthropic_key'),
        ]);
      } catch (e) {
        console.log('Diff load failed:', e);
        setSummaryState('git-error');
        setSummaryLoading(false);
        return;
      }

      if (!diff.trim()) {
        setSummaryState('no-diff');
        setSummaryLoading(false);
        return;
      }
      if (!apiKey) {
        setSummaryState('no-key');
        setSummaryLoading(false);
        return;
      }

      let text: string;
      try {
        text = await invoke<string>('summarize_diff', { diff, apiKey });
      } catch (e) {
        console.log('Summarize failed:', e);
        setApiErrorDetail(String(e));
        setSummaryState('api-error');
        setSummaryLoading(false);
        return;
      }

      try {
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (!jsonMatch) throw new Error('No JSON array in response');
        const parsed: SummarySection[] = JSON.parse(jsonMatch[0]);
        setSummary(parsed);
        setSummaryState('done');
      } catch (e) {
        console.log('Summary parse failed:', e);
        setSummaryState('parse-error');
      }
      setSummaryLoading(false);
    }

    loadCommits();
    loadDiffSummary();
  }, [repoPath, branch.name, defaultBranch]);

  async function generatePreviews() {
    const gen = ++genRef.current;

    setMainShots([]);
    setBranchShots([]);
    setMainError(null);
    setBranchError(null);
    setMainLoading(true);
    setBranchLoading(true);

    // Detect which URL routes this branch's diff most likely affects.
    let detectedRoutes: string[] = ['/'];
    try {
      const r = await invoke<string[]>('get_changed_routes', {
        repoPath,
        branch: branch.name,
        baseBranch: defaultBranch,
      });
      if (r.length > 0) detectedRoutes = r;
    } catch { /* fall through to root */ }

    if (gen !== genRef.current) return; // superseded by a newer call
    setRoutes(detectedRoutes);

    // Use pre-warmed main screenshots if they cover exactly the detected routes (['/'])
    const canUsePrewarm =
      prewarmedMainShots != null &&
      detectedRoutes.length === 1 &&
      detectedRoutes[0] === '/';

    // Fire main and branch in parallel. If pre-warm covers main, resolve immediately.
    const mainPromise: Promise<string[]> = canUsePrewarm
      ? Promise.resolve(prewarmedMainShots!.map(s => s ?? ''))
      : invoke<string[]>('generate_preview_routes', {
          repoPath,
          branch: defaultBranch,
          port: 3491,
          paths: detectedRoutes,
        });

    const branchPromise: Promise<string[]> = invoke<string[]>('generate_preview_routes', {
      repoPath,
      branch: branch.name,
      port: 3492,
      paths: detectedRoutes,
    });

    // Update each side as soon as it finishes (don't wait for the other)
    mainPromise
      .then(shots => {
        if (gen !== genRef.current) return;
        setMainShots(shots.map(s => (s.startsWith('data:') ? s : null)));
      })
      .catch(e => {
        if (gen !== genRef.current) return;
        setMainError(String(e));
        setMainShots(detectedRoutes.map(() => null));
      })
      .finally(() => { if (gen === genRef.current) setMainLoading(false); });

    branchPromise
      .then(shots => {
        if (gen !== genRef.current) return;
        setBranchShots(shots.map(s => (s.startsWith('data:') ? s : null)));
      })
      .catch(e => {
        if (gen !== genRef.current) return;
        setBranchError(String(e));
        setBranchShots(detectedRoutes.map(() => null));
      })
      .finally(() => { if (gen === genRef.current) setBranchLoading(false); });

    await Promise.allSettled([mainPromise, branchPromise]);
  }

  const isOutOfDate = branch.commitsBehind > 0;
  const multiRoute = routes.length > 1;

  const renderSummary = () => {
    if (summaryLoading) {
      return (
        <div className="animate-pulse space-y-3 pt-1">
          <div className="h-3.5 bg-muted rounded w-1/2" />
          <div className="space-y-1.5">
            <div className="h-3 bg-muted rounded w-full" />
            <div className="h-3 bg-muted rounded w-5/6" />
            <div className="h-3 bg-muted rounded w-4/6" />
          </div>
          <div className="h-3.5 bg-muted rounded w-2/5 mt-4" />
          <div className="space-y-1.5">
            <div className="h-3 bg-muted rounded w-full" />
            <div className="h-3 bg-muted rounded w-3/4" />
          </div>
        </div>
      );
    }
    if (summary && summary.length > 0) {
      return (
        <div>
          {summary.map((sec, si) => (
            <div key={si}>
              {si > 0 && <div className="border-t border-border/50 my-4" />}
              <p className="text-sm font-semibold text-foreground mb-2">{sec.section}</p>
              <div className="space-y-1.5">
                {sec.changes.map((change, ci) => (
                  <div key={ci} className="flex items-start gap-1.5">
                    <span className={`text-xs font-semibold shrink-0 leading-snug mt-0.5 ${change.type === 'add' ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                      {change.type === 'add' ? '+' : '−'}
                    </span>
                    <span className={`text-sm leading-snug ${change.type === 'add' ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                      {change.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }
    const msg =
      summaryState === 'no-diff'    ? `No unique commits ahead of ${defaultBranch}` :
      summaryState === 'no-key'     ? 'Set ANTHROPIC_API_KEY for AI change summaries' :
      summaryState === 'git-error'  ? 'Could not compute branch diff' :
      summaryState === 'api-error'  ? `Anthropic API error${apiErrorDetail ? `: ${apiErrorDetail}` : ' — check key or quota'}` :
      summaryState === 'parse-error'? 'Summary response could not be parsed' :
                                      'Could not load change summary';
    return <p className="text-xs text-muted-foreground italic">{msg}</p>;
  };

  const renderCommits = () => {
    if (commitsLoading) {
      return (
        <div className="animate-pulse space-y-0">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="py-3 border-b border-border/50 last:border-0">
              <div className="flex justify-between mb-1.5">
                <div className="h-3 bg-muted rounded w-14" />
                <div className="h-3 bg-muted rounded w-10" />
              </div>
              <div className="h-3 bg-muted rounded w-full mb-1" />
              <div className="h-3 bg-muted rounded w-3/5" />
              <div className="h-3 bg-muted rounded w-16 mt-1.5" />
            </div>
          ))}
        </div>
      );
    }
    if (commits.length > 0) {
      return (
        <div className="space-y-0">
          {commits.map((c, i) => (
            <div key={c.sha}>
              <div className="py-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs text-muted-foreground">{c.sha.slice(0, 7)}</span>
                  <span className="text-xs text-muted-foreground">{timeAgo(c.date)}</span>
                </div>
                <p className="text-sm text-foreground leading-snug">{c.message}</p>
                <p className="text-xs text-muted-foreground mt-1">@{c.author}</p>
              </div>
              {i < commits.length - 1 && <div className="border-t border-border/50" />}
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="py-3">
        <p className="font-mono text-xs text-muted-foreground">{branch.headSha?.slice(0, 7) || '---'}</p>
        <p className="text-xs text-muted-foreground mt-1">@{branch.lastCommitAuthor}</p>
        <p className="text-xs text-muted-foreground">{timeAgo(branch.lastCommitDate)}</p>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 flex-shrink-0 relative">
        <button
          onClick={onBack}
          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          ← Back
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <h1 className={`text-base font-medium ${
            branch.status === 'conflict-risk' ? 'text-destructive' :
            branch.status === 'stale' ? 'text-amber-600 dark:text-amber-400' :
            'text-foreground'
          }`}>
            {branch.name}
          </h1>
          {(branch.status === 'conflict-risk' || branch.status === 'stale') && (
            <span className={`text-[10px] uppercase tracking-wide font-medium px-2 py-0.5 rounded-full ${
              branch.status === 'conflict-risk'
                ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
            }`}>
              {branch.status === 'conflict-risk' ? 'conflict' : 'stale'}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          {isOutOfDate && (
            <span className="flex items-center gap-1.5 text-sm text-destructive">
              ⚠ Branch out of date ({branch.commitsBehind} behind)
            </span>
          )}
        </div>
      </header>

      {/* Main layout */}
      <div className="flex-1 px-8 py-6 min-h-0 flex gap-4">
        {/* Left: Changes panel */}
        <div className="w-72 flex-shrink-0 bg-card rounded-2xl border border-border flex flex-col overflow-hidden">
          <div className="px-5 pt-5 pb-4 flex-shrink-0">
            <h2 className="text-base font-semibold text-foreground mb-3">Changes</h2>
            <div className="flex items-center gap-1 bg-muted rounded-lg p-0.5">
              <button
                onClick={() => setPanelView('summary')}
                className={`flex-1 text-xs py-1 rounded-md transition-colors ${panelView === 'summary' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Summary
              </button>
              <button
                onClick={() => setPanelView('commits')}
                className={`flex-1 text-xs py-1 rounded-md transition-colors ${panelView === 'commits' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Commits {commits.length > 0 ? `(${commits.length})` : ''}
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-5 pb-5">
            {panelView === 'summary' ? renderSummary() : renderCommits()}
          </div>
        </div>

        {/* Right: preview comparisons — scrollable when multiple routes */}
        <div className={`flex-1 min-w-0 min-h-0 ${multiRoute ? 'overflow-y-auto' : 'flex gap-4'}`}>
          {multiRoute ? (
            <div className="space-y-6">
              {routes.map((route, i) => (
                <ComparisonRow
                  key={route}
                  route={route}
                  showRouteLabel={true}
                  mainTitle={defaultBranch}
                  branchTitle={branch.name}
                  mainSrc={mainShots[i] ?? null}
                  branchSrc={branchShots[i] ?? null}
                  loading={mainLoading && branchLoading}
                  error={mainError ?? branchError}
                />
              ))}
            </div>
          ) : (
            <>
              <PreviewPanel
                title={defaultBranch}
                src={mainShots[0] ?? null}
                loading={mainLoading}
                error={mainError}
              />
              <PreviewPanel
                title={branch.name}
                src={branchShots[0] ?? null}
                loading={branchLoading}
                error={branchError}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
