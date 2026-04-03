import { Branch, BranchStatus } from '../types';
import { ViewMode } from './BranchMapView';
import RemoteSyncBadge from './RemoteSyncBadge';

function timeAgo(dateStr: string) {
  const s = (Date.now() - new Date(dateStr).getTime()) / 1000;
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  if (s < 86400 * 30) return `${Math.floor(s / 86400)}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function BranchTable({
  branches,
  getAccentColor,
  emptyLabel = 'No branches',
}: {
  branches: Branch[];
  getAccentColor: (branch: Branch) => string;
  emptyLabel?: string;
}) {
  if (branches.length === 0) {
    return (
      <div className="rounded-xl border border-border/50 bg-muted/30 px-4 py-6 text-center">
        <p className="text-xs text-muted-foreground">{emptyLabel}</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div
        className="grid grid-cols-[16px_1fr_auto] sm:grid-cols-[16px_1.5fr_160px_1fr_88px_88px] gap-3 px-3 py-2 border-b border-border/50 bg-muted/30"
        role="row"
      >
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium" aria-hidden="true" />
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Branch</span>
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium justify-self-end sm:justify-self-auto sm:text-left">
          Updated
        </span>
        <span className="hidden sm:block text-[10px] uppercase tracking-wide text-muted-foreground font-medium">
          Sync
        </span>
        <span className="hidden sm:block text-[10px] uppercase tracking-wide text-muted-foreground font-medium">
          Author
        </span>
        <span className="hidden sm:block text-[10px] uppercase tracking-wide text-muted-foreground font-medium text-right">
          Δ
        </span>
      </div>

      <div className="divide-y divide-border/50" role="rowgroup">
        {branches.map((branch) => {
          const accentColor = getAccentColor(branch);
          const deltaText =
            branch.commitsAhead > 0 || branch.commitsBehind > 0
              ? `${branch.commitsAhead > 0 ? `+${branch.commitsAhead}` : ''}${branch.commitsAhead > 0 && branch.commitsBehind > 0 ? ' / ' : ''}${branch.commitsBehind > 0 ? `-${branch.commitsBehind}` : ''}`
              : '—';

          return (
            <div
              key={branch.name}
              className="w-full text-left grid grid-cols-[16px_1fr_auto] sm:grid-cols-[16px_1.5fr_160px_1fr_88px_88px] gap-3 px-3 py-2.5"
            >
              <span className="flex items-center justify-center">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: accentColor }} aria-hidden="true" />
              </span>

              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{branch.name}</p>
                <div className="sm:hidden mt-0.5 flex items-center gap-2 min-w-0">
                  <span className="text-xs text-muted-foreground truncate">{branch.lastCommitAuthor || 'Unknown'}</span>
                  <span className="text-xs text-muted-foreground shrink-0">·</span>
                  <span className="text-xs text-muted-foreground shrink-0 tabular-nums">{deltaText}</span>
                </div>
              </div>

              <span className="text-xs text-muted-foreground shrink-0 tabular-nums justify-self-end sm:justify-self-auto">
                {timeAgo(branch.lastCommitDate)}
              </span>

              <div className="hidden sm:flex items-center min-w-0">
                <RemoteSyncBadge
                  status={branch.remoteSyncStatus}
                  unpushedCommits={branch.unpushedCommits}
                  compact
                />
              </div>

              <div className="hidden sm:flex items-center gap-2 min-w-0">
                {branch.lastCommitAuthorAvatar ? (
                  <img
                    src={branch.lastCommitAuthorAvatar}
                    alt={branch.lastCommitAuthor}
                    className="w-5 h-5 rounded-full shrink-0"
                  />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <span className="text-[10px] text-muted-foreground font-medium">
                      {branch.lastCommitAuthor?.charAt(0).toUpperCase() || '?'}
                    </span>
                  </div>
                )}
                <span className="text-xs text-muted-foreground truncate">{branch.lastCommitAuthor || 'Unknown'}</span>
              </div>

              <span className="hidden sm:block text-xs text-muted-foreground tabular-nums text-right">
                {deltaText}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── By Status ────────────────────────────────────────────────────────────────

const STATUS_CONFIG: {
  status: BranchStatus;
  label: string;
  color: string;
  bg: string;
  description: string;
}[] = [
  {
    status: 'stale',
    label: 'Stale',
    color: '#f59e0b',
    bg: 'bg-amber-500/10',
    description: 'No commits in 14+ days',
  },
  {
    status: 'fresh',
    label: 'Fresh',
    color: '#22c55e',
    bg: 'bg-green-500/10',
    description: 'Recently active',
  },
];

function StatusView({
  branches,
  defaultBranch,
}: {
  branches: Branch[];
  defaultBranch: string;
}) {
  const active = branches.filter(b => b.name !== defaultBranch && b.commitsAhead > 0);

  return (
    <div className="grid grid-cols-3 gap-6 items-start">
      {STATUS_CONFIG.map(({ status, label, color, bg, description }) => {
        const group = active.filter(b => b.status === status);
        return (
          <div key={status}>
            <div className={`rounded-xl ${bg} border border-border/50 px-4 py-3 mb-3`}>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                <span className="text-sm font-medium text-foreground">{label}</span>
                <span className="ml-auto text-xs text-muted-foreground tabular-nums">{group.length}</span>
              </div>
              <p className="text-[10px] text-muted-foreground pl-4">{description}</p>
            </div>
            <BranchTable
              branches={group}
              getAccentColor={() => color}
              emptyLabel="No branches"
            />
          </div>
        );
      })}
    </div>
  );
}

// ── By Creator ───────────────────────────────────────────────────────────────

function CreatorView({
  branches,
  defaultBranch,
}: {
  branches: Branch[];
  defaultBranch: string;
}) {
  const active = branches.filter(b => b.name !== defaultBranch && b.commitsAhead > 0);

  // Group by author, preserve most-recently-active author first
  const authorMap = new Map<string, Branch[]>();
  for (const b of active.sort(
    (a, b) => new Date(b.lastCommitDate).getTime() - new Date(a.lastCommitDate).getTime()
  )) {
    const author = b.lastCommitAuthor || 'Unknown';
    if (!authorMap.has(author)) authorMap.set(author, []);
    authorMap.get(author)!.push(b);
  }

  const STATUS_COLORS: Record<BranchStatus, string> = {
    stale: '#f59e0b',
    fresh: '#22c55e',
    unknown: '#78716c',
  };

  return (
    <div className="flex flex-col gap-8">
      {[...authorMap.entries()].map(([author, authorBranches]) => {
        const avatar = authorBranches[0]?.lastCommitAuthorAvatar;
        return (
          <div key={author}>
            {/* Author header */}
            <div className="flex items-center gap-3 mb-3">
              {avatar ? (
                <img src={avatar} alt={author} className="w-8 h-8 rounded-full shrink-0" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <span className="text-sm text-muted-foreground font-medium">
                    {author.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-foreground">{author}</p>
                <p className="text-[10px] text-muted-foreground">
                  {authorBranches.length} branch{authorBranches.length !== 1 ? 'es' : ''}
                </p>
              </div>
            </div>

            {/* Table-like branch grid */}
            <div className="pl-11">
              <BranchTable
                branches={authorBranches}
                getAccentColor={(b) => STATUS_COLORS[b.status]}
                emptyLabel="No branches"
              />
            </div>
          </div>
        );
      })}

      {active.length === 0 && (
        <div className="rounded-xl bg-muted/30 shadow-inner flex items-center justify-center py-20">
          <p className="text-sm text-muted-foreground">No active branches</p>
        </div>
      )}
    </div>
  );
}

// ── Unified export ────────────────────────────────────────────────────────────

export default function BranchGroupView({
  view,
  branches,
  defaultBranch,
}: {
  view: Exclude<ViewMode, 'time'>;
  branches: Branch[];
  defaultBranch: string;
}) {
  if (view === 'status') {
    return <StatusView branches={branches} defaultBranch={defaultBranch} />;
  }
  return <CreatorView branches={branches} defaultBranch={defaultBranch} />;
}
