import { useEffect, useMemo, useRef, useState } from 'react';
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

function promptTime(dateStr: string) {
  return new Date(dateStr).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

interface SummaryChange {
  type: 'add' | 'remove';
  description: string;
}

interface SummarySection {
  section: string;
  changes: SummaryChange[];
}

function ComparisonRow({
  route,
  showRouteLabel,
  beforeSrc,
  afterSrc,
  beforeTitle,
  afterTitle,
  beforeLoading,
  afterLoading,
  beforeError,
  afterError,
}: {
  route: string;
  showRouteLabel: boolean;
  beforeSrc: string | null;
  afterSrc: string | null;
  beforeTitle: string;
  afterTitle: string;
  beforeLoading: boolean;
  afterLoading: boolean;
  beforeError: string | null;
  afterError: string | null;
}) {
  return (
    <div className="flex flex-col gap-2">
      {showRouteLabel && (
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium px-1">
          {route}
        </span>
      )}
      <div className="flex flex-col gap-4 lg:flex-row">
        <PreviewPanel title={beforeTitle} src={beforeSrc} loading={beforeLoading} error={beforeError} />
        <PreviewPanel title={afterTitle} src={afterSrc} loading={afterLoading} error={afterError} />
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
  const prevSrc = useRef<string | null>(null);

  if (src !== prevSrc.current) {
    prevSrc.current = src;
    if (src) setImgVisible(false);
  }

  return (
    <div className="flex-1 min-w-0 rounded-2xl bg-card border border-border flex flex-col overflow-hidden">
      <div className="px-5 pt-4 pb-3 flex-shrink-0 border-b border-border/50">
        <h2 className="text-sm font-semibold text-foreground truncate">{title}</h2>
      </div>
      <div className="flex-1 overflow-auto">
        {src ? (
          <img
            src={src}
            alt={title}
            className={`w-full transition-opacity duration-300 ${imgVisible ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgVisible(true)}
          />
        ) : loading ? (
          <div className="animate-pulse p-4 space-y-3">
            <div className="h-4 bg-muted rounded w-1/3" />
            <div className="h-32 bg-muted rounded-lg w-full" />
            <div className="space-y-2">
              <div className="h-3 bg-muted rounded w-full" />
              <div className="h-3 bg-muted rounded w-5/6" />
              <div className="h-3 bg-muted rounded w-2/3" />
            </div>
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
  const [selectedCommitSha, setSelectedCommitSha] = useState<string | null>(null);
  const [commitsLoading, setCommitsLoading] = useState(true);

  const [summary, setSummary] = useState<SummarySection[] | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(true);
  const [summaryState, setSummaryState] = useState<'loading' | 'done' | 'no-diff' | 'no-key' | 'git-error' | 'api-error' | 'parse-error'>('loading');
  const [apiErrorDetail, setApiErrorDetail] = useState<string | null>(null);

  const [routes, setRoutes] = useState<string[]>(['/']);
  const [beforeShots, setBeforeShots] = useState<(string | null)[]>([]);
  const [afterShots, setAfterShots] = useState<(string | null)[]>([]);
  const [beforeLoading, setBeforeLoading] = useState(true);
  const [afterLoading, setAfterLoading] = useState(true);
  const [beforeError, setBeforeError] = useState<string | null>(null);
  const [afterError, setAfterError] = useState<string | null>(null);

  const currentCommit = useMemo(
    () => commits.find(c => c.fullSha === selectedCommitSha) ?? commits[0] ?? null,
    [commits, selectedCommitSha],
  );
  const multiRoute = routes.length > 1;

  const baseRef = currentCommit?.parentSha || defaultBranch;
  const afterRef = currentCommit?.fullSha || null;
  const beforeTitle = currentCommit?.parentSha
    ? `${currentCommit.parentSha.slice(0, 7)} (parent)`
    : defaultBranch;
  const afterTitle = currentCommit ? `${currentCommit.sha} (selected)` : branch.name;

  const genRef = useRef(0);
  const lastPreviewStartRef = useRef(0);

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
        setSelectedCommitSha(prev => {
          if (prev && result.some(c => c.fullSha === prev)) return prev;
          return result[0]?.fullSha ?? null;
        });
      } catch {
        setCommits([]);
        setSelectedCommitSha(null);
      }
      setCommitsLoading(false);
    }

    loadCommits();
  }, [repoPath, branch.name, defaultBranch, mergedPR?.mergeCommitSha, branch.commitsAhead]);

  useEffect(() => {
    async function loadDiffSummary() {
      if (!currentCommit?.fullSha) {
        setSummary(null);
        setSummaryState('no-diff');
        setSummaryLoading(false);
        return;
      }

      setSummaryLoading(true);
      setSummary(null);
      setApiErrorDetail(null);
      setSummaryState('loading');

      let diff: string;
      let apiKey: string | null;
      try {
        [diff, apiKey] = await Promise.all([
          invoke<string>('get_commit_diff', {
            repoPath,
            commitSha: currentCommit.fullSha,
            baseSha: currentCommit.parentSha ?? undefined,
          }),
          invoke<string | null>('get_anthropic_key'),
        ]);
      } catch {
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
      } catch {
        setSummaryState('parse-error');
      }

      setSummaryLoading(false);
    }

    loadDiffSummary();
  }, [repoPath, currentCommit?.fullSha, currentCommit?.parentSha]);

  useEffect(() => {
    async function generatePreviews() {
      if (!afterRef) {
        setRoutes(['/']);
        setBeforeShots([null]);
        setAfterShots([null]);
        setBeforeLoading(false);
        setAfterLoading(false);
        return;
      }

      const now = Date.now();
      if (now - lastPreviewStartRef.current < 50) return;
      lastPreviewStartRef.current = now;
      const gen = ++genRef.current;

      setBeforeShots([]);
      setAfterShots([]);
      setBeforeError(null);
      setAfterError(null);
      setBeforeLoading(true);
      setAfterLoading(true);

      let detectedRoutes: string[] = ['/'];
      try {
        const r = await invoke<string[]>('get_changed_routes_for_commit', {
          repoPath,
          commitSha: afterRef,
          baseSha: currentCommit?.parentSha ?? undefined,
        });
        if (r.length > 0) detectedRoutes = r;
      } catch {
        // fall back to root
      }

      if (gen !== genRef.current) return;
      setRoutes(detectedRoutes);

      const canUsePrewarm =
        prewarmedMainShots != null &&
        baseRef === defaultBranch &&
        detectedRoutes.length === 1 &&
        detectedRoutes[0] === '/';

      const beforePromise: Promise<string[]> = canUsePrewarm
        ? Promise.resolve(prewarmedMainShots!.map(s => s ?? ''))
        : invoke<string[]>('generate_preview_routes', {
            repoPath,
            branch: baseRef,
            port: 3491,
            paths: detectedRoutes,
          });

      const afterPromise: Promise<string[]> = invoke<string[]>('generate_preview_routes', {
        repoPath,
        branch: afterRef,
        port: 3492,
        paths: detectedRoutes,
      });

      beforePromise
        .then(shots => {
          if (gen !== genRef.current) return;
          setBeforeShots(shots.map(s => (s.startsWith('data:') ? s : null)));
        })
        .catch(e => {
          if (gen !== genRef.current) return;
          setBeforeError(String(e));
          setBeforeShots(detectedRoutes.map(() => null));
        })
        .finally(() => {
          if (gen === genRef.current) setBeforeLoading(false);
        });

      afterPromise
        .then(shots => {
          if (gen !== genRef.current) return;
          setAfterShots(shots.map(s => (s.startsWith('data:') ? s : null)));
        })
        .catch(e => {
          if (gen !== genRef.current) return;
          setAfterError(String(e));
          setAfterShots(detectedRoutes.map(() => null));
        })
        .finally(() => {
          if (gen === genRef.current) setAfterLoading(false);
        });

      await Promise.allSettled([beforePromise, afterPromise]);
    }

    generatePreviews();
  }, [repoPath, afterRef, currentCommit?.parentSha, baseRef, defaultBranch, prewarmedMainShots]);

  const renderSummary = () => {
    if (summaryLoading) {
      return (
        <div className="animate-pulse space-y-3">
          <div className="h-3.5 bg-muted rounded w-1/2" />
          <div className="space-y-2">
            <div className="h-3 bg-muted rounded w-full" />
            <div className="h-3 bg-muted rounded w-5/6" />
            <div className="h-3 bg-muted rounded w-4/6" />
          </div>
        </div>
      );
    }

    if (summary && summary.length > 0) {
      return (
        <div className="space-y-4">
          {summary.map((sec, si) => (
            <div key={si}>
              <p className="text-sm font-semibold text-foreground mb-2">{sec.section}</p>
              <div className="space-y-1.5">
                {sec.changes.map((change, ci) => (
                  <div key={ci} className="flex items-start gap-1.5">
                    <span className={`text-xs font-semibold shrink-0 mt-0.5 ${change.type === 'add' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {change.type === 'add' ? '+' : '−'}
                    </span>
                    <span className="text-sm text-foreground leading-snug">{change.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    const msg =
      summaryState === 'no-diff' ? 'No diff found for this commit snapshot' :
      summaryState === 'no-key' ? 'Set ANTHROPIC_API_KEY for AI summaries' :
      summaryState === 'git-error' ? 'Could not compute commit diff' :
      summaryState === 'api-error' ? `Anthropic API error${apiErrorDetail ? `: ${apiErrorDetail}` : ''}` :
      summaryState === 'parse-error' ? 'Summary response could not be parsed' :
      'Could not load change summary';

    return <p className="text-xs text-muted-foreground italic">{msg}</p>;
  };

  const renderCommitList = () => {
    if (commitsLoading) {
      return (
        <div className="animate-pulse space-y-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-lg border border-border/60 p-3">
              <div className="h-3 bg-muted rounded w-20 mb-2" />
              <div className="h-3 bg-muted rounded w-full mb-1" />
              <div className="h-3 bg-muted rounded w-3/4" />
            </div>
          ))}
        </div>
      );
    }

    if (commits.length === 0) {
      return (
        <p className="text-xs text-muted-foreground italic">
          No unmerged commits ahead of {defaultBranch}
        </p>
      );
    }

    return (
      <div className="space-y-2">
        {commits.map(c => {
          const isSelected = currentCommit?.fullSha === c.fullSha;
          const promptCount = c.agentPrompts?.length ?? 0;
          return (
            <button
              key={c.fullSha}
              onClick={() => setSelectedCommitSha(c.fullSha)}
              className={`w-full text-left rounded-lg border px-3 py-2.5 transition-colors ${isSelected ? 'border-primary/40 bg-primary/10' : 'border-border hover:bg-muted/50'}`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-mono text-xs text-foreground">{c.sha}</span>
                <span className="text-xs text-muted-foreground">{timeAgo(c.date)}</span>
              </div>
              <p className="text-sm text-foreground leading-snug line-clamp-2">{c.message}</p>
              <p className="text-xs text-muted-foreground mt-1">@{c.author}</p>
              {promptCount > 0 && (
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium mt-1.5">
                  {promptCount} agent prompt{promptCount === 1 ? '' : 's'}
                </p>
              )}
            </button>
          );
        })}
      </div>
    );
  };

  const renderAgentPrompts = () => {
    const prompts = currentCommit?.agentPrompts ?? [];
    if (!currentCommit) {
      return <p className="text-xs text-muted-foreground italic">No commit selected</p>;
    }

    if (prompts.length === 0) {
      return (
        <p className="text-xs text-muted-foreground italic">
          No agent prompts captured between this commit and its parent
        </p>
      );
    }

    return (
      <div className="space-y-2.5">
        {prompts.map(prompt => (
          <div key={prompt.id} className="rounded-lg border border-border/60 bg-muted/30 p-3">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">
                {prompt.agent}
              </span>
              <span className="text-xs text-muted-foreground">{promptTime(prompt.timestamp)}</span>
            </div>
            <p className="text-sm text-foreground leading-snug whitespace-pre-wrap line-clamp-4">
              {prompt.prompt}
            </p>
            <p className="text-[10px] text-muted-foreground mt-1">{prompt.source}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-background">
      <header className="flex items-center justify-between px-8 py-5 flex-shrink-0">
        <button
          onClick={onBack}
          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          ← Back
        </button>

        <div className="text-center">
          <h1 className="text-base font-medium text-foreground">{branch.name}</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {currentCommit ? `Viewing commit ${currentCommit.sha}` : 'Commit snapshots'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs border border-border rounded-full px-3 py-1 bg-card text-muted-foreground">
            {branch.commitsBehind > 0 ? `${branch.commitsBehind} behind ${defaultBranch}` : 'Up to date'}
          </span>
        </div>
      </header>

      <div className="flex-1 px-8 pb-6 min-h-0 flex gap-4">
        <div className="w-80 flex-shrink-0 bg-card rounded-2xl border border-border flex flex-col overflow-hidden">
          <div className="px-4 py-4 border-b border-border/60">
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium mb-1">Snapshot</p>
            {currentCommit ? (
              <>
                <p className="font-mono text-sm text-foreground">{currentCommit.fullSha.slice(0, 12)}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Parent: {currentCommit.parentSha ? currentCommit.parentSha.slice(0, 12) : defaultBranch}
                </p>
              </>
            ) : (
              <p className="text-xs text-muted-foreground italic">No commit selected</p>
            )}
          </div>

          <div className="px-4 py-4 border-b border-border/60 max-h-[28%] overflow-y-auto">
            <p className="text-sm font-medium text-foreground mb-3">Summary</p>
            {renderSummary()}
          </div>

          <div className="px-4 py-4 border-b border-border/60 max-h-[34%] overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-foreground">Agent prompts</p>
              <span className="text-xs text-muted-foreground">{currentCommit?.agentPrompts?.length ?? 0}</span>
            </div>
            {renderAgentPrompts()}
          </div>

          <div className="px-4 py-4 flex-1 min-h-0 overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-foreground">Commits</p>
              <span className="text-xs text-muted-foreground">{commits.length}</span>
            </div>
            {renderCommitList()}
          </div>
        </div>

        <div className={`flex-1 min-w-0 min-h-0 ${multiRoute ? 'overflow-y-auto' : 'flex gap-4'}`}>
          {multiRoute ? (
            <div className="space-y-6">
              {routes.map((route, i) => (
                <ComparisonRow
                  key={route}
                  route={route}
                  showRouteLabel={true}
                  beforeTitle={beforeTitle}
                  afterTitle={afterTitle}
                  beforeSrc={beforeShots[i] ?? null}
                  afterSrc={afterShots[i] ?? null}
                  beforeLoading={beforeLoading}
                  afterLoading={afterLoading}
                  beforeError={beforeError}
                  afterError={afterError}
                />
              ))}
            </div>
          ) : (
            <>
              <PreviewPanel
                title={beforeTitle}
                src={beforeShots[0] ?? null}
                loading={beforeLoading}
                error={beforeError}
              />
              <PreviewPanel
                title={afterTitle}
                src={afterShots[0] ?? null}
                loading={afterLoading}
                error={afterError}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
