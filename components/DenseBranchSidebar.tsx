import { useEffect, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { ChevronRight, Eye, MoreHorizontal, Plus, TerminalSquare } from 'lucide-react';
import type { Branch, BranchCommitPreview, TerminalSession, WorktreeInfo } from '../types';
import { accentCssVars, buildWorktreeSessions, workingTreeIdForPath } from '../lib/worktreeSessions';
import { cn, normalizeRepoPathForCompare, worktreeDisplayName } from './grid/mapGridUtils';

const EXPANDED_WORKTREES_KEY = 'git-visualizer:expanded-worktrees';
const EXPANDED_PROJECTS_KEY = 'git-visualizer:expanded-projects';

const loadSet = (key: string): Set<string> => {
  try {
    return new Set(JSON.parse(localStorage.getItem(key) ?? '[]') as string[]);
  } catch {
    return new Set();
  }
};

const persistSet = (key: string, values: Set<string>) => {
  try {
    localStorage.setItem(key, JSON.stringify(Array.from(values)));
  } catch {
    // Ignore unavailable storage.
  }
};

const samePath = (left: string, right: string) =>
  normalizeRepoPathForCompare(left).toLowerCase() === normalizeRepoPathForCompare(right).toLowerCase();

type SidebarProject = {
  path: string;
  name: string;
  branches: Branch[];
  worktrees: WorktreeInfo[];
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
};

type Props = {
  projects: SidebarProject[];
  activeProjectPath: string | null;
  terminalSessions: TerminalSession[];
  activeTerminalId: string | null;
  onSelectProject: (path: string) => void | Promise<void>;
  onAddProject: () => void;
  onRemoveProject: (path: string) => void;
  onRevealProjectInFinder: (path: string) => Promise<void> | void;
  onResetProjectNodePositions?: (path: string) => void;
  onSelectWorktree: (projectPath: string, workingTreeId: string) => void | Promise<void>;
  onCreateTerminal: (projectPath: string, worktreePath: string) => void | Promise<void>;
  onSelectTerminal: (session: TerminalSession) => void;
  projectLoading?: boolean;
  projectError?: string | null;
  className?: string;
  style?: CSSProperties;
  collapsed?: boolean;
};

export const previewLabel = (project: SidebarProject, session: TerminalSession): string => {
  const sha = session.targetId ?? '';
  const branch = Object.entries(project.branchCommitPreviews).find(([, commits]) =>
    commits.some((commit) => commit.fullSha === sha || commit.sha === sha),
  )?.[0] ?? project.branches.find((candidate) => candidate.headSha === sha)?.name;
  return `Preview · ${branch ? `${branch}/` : ''}${sha.slice(0, 7)}`;
};

export const worktreeRefLabel = (worktree: WorktreeInfo): string =>
  worktree.branchName
    ? `${worktree.branchName}/${worktree.headSha.slice(0, 7)}`
    : worktree.headSha.slice(0, 7);

export const visibleNestedSessions = (
  sessions: TerminalSession[],
  worktreePath: string,
): TerminalSession[] => sessions.filter((session) =>
  samePath(session.worktreePath, worktreePath)
  && session.targetKind !== 'commit'
  && (session.kind !== 'preview' || session.status === 'running'),
);

export default function DenseBranchSidebar({
  projects,
  activeProjectPath,
  terminalSessions,
  activeTerminalId,
  onSelectProject,
  onAddProject,
  onRemoveProject,
  onRevealProjectInFinder,
  onResetProjectNodePositions,
  onSelectWorktree,
  onCreateTerminal,
  onSelectTerminal,
  projectLoading,
  projectError,
  className,
  style,
  collapsed,
}: Props) {
  const [expandedWorktrees, setExpandedWorktrees] = useState<Set<string>>(() => loadSet(EXPANDED_WORKTREES_KEY));
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(() => loadSet(EXPANDED_PROJECTS_KEY));
  const [openProjectMenu, setOpenProjectMenu] = useState<string | null>(null);

  useEffect(() => {
    if (!activeProjectPath) return;
    setExpandedProjects((current) => {
      if (current.has(activeProjectPath)) return current;
      const next = new Set(current);
      next.add(activeProjectPath);
      persistSet(EXPANDED_PROJECTS_KEY, next);
      return next;
    });
  }, [activeProjectPath]);

  const sessionsByProject = useMemo(() => {
    const grouped = new Map<string, TerminalSession[]>();
    for (const session of terminalSessions) {
      const key = normalizeRepoPathForCompare(session.projectPath).toLowerCase();
      grouped.set(key, [...(grouped.get(key) ?? []), session]);
    }
    return grouped;
  }, [terminalSessions]);

  const toggle = (key: string, values: Set<string>, setValues: (next: Set<string>) => void, storageKey: string) => {
    const next = new Set(values);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    setValues(next);
    persistSet(storageKey, next);
  };

  return (
    <aside
      aria-label="Worktree sidebar"
      className={cn('pointer-events-auto relative h-full select-none overflow-hidden bg-background', className)}
      style={style}
    >
      <header data-tauri-drag-region className="absolute inset-x-0 top-0 h-12" />
      <div className={cn('flex h-full min-h-0 flex-col', collapsed && 'pointer-events-none opacity-0')}>
        {projectError ? (
          <p className="mx-2 mb-2 rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400">
            {projectError}
          </p>
        ) : null}
        <div className="px-2 pb-2">
          <button
            type="button"
            onClick={onAddProject}
            disabled={projectLoading}
            className="group flex h-7 w-full items-center gap-1 rounded-lg px-1 text-sm text-foreground transition-colors hover:bg-muted disabled:opacity-50"
          >
            <Plus className="h-4 w-4 shrink-0" />
            <span>New Project</span>
          </button>
        </div>
        <div className="sidebar-scrollbar min-h-0 flex-1 space-y-3 overflow-y-auto px-2">
          {projects.map((project) => {
            const isActive = activeProjectPath != null && samePath(project.path, activeProjectPath);
            const isExpanded = expandedProjects.has(project.path);
            const projectSessions = sessionsByProject.get(normalizeRepoPathForCompare(project.path).toLowerCase()) ?? [];
            const commitPreviews = projectSessions.filter((session) => session.kind === 'preview' && session.targetKind === 'commit' && session.status === 'running');
            const worktreeAccentByPath = new Map(
              buildWorktreeSessions(project.worktrees, project.path).map((session) => [
                normalizeRepoPathForCompare(session.path).toLowerCase(),
                accentCssVars(session.accentToken).fg,
              ]),
            );
            return (
              <section key={project.path}>
                <div
                  className={cn(
                    'group relative flex h-7 items-center rounded-lg transition-colors hover:bg-muted',
                    isActive && 'text-foreground',
                    !isActive && 'text-muted-foreground',
                  )}
                  onClick={() => void onSelectProject(project.path)}
                >
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggle(project.path, expandedProjects, setExpandedProjects, EXPANDED_PROJECTS_KEY);
                    }}
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-muted"
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${project.name}`}
                  >
                    <img
                      src={isExpanded ? '/icon-projectOpen.svg' : '/icon-projectClosed.svg'}
                      alt=""
                      className="h-4 w-4 shrink-0"
                    />
                  </button>
                  <span className="min-w-0 flex-1 truncate text-sm font-medium">{project.name}</span>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setOpenProjectMenu((current) => current === project.path ? null : project.path);
                    }}
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg opacity-0 transition-colors hover:bg-muted group-hover:opacity-100"
                    aria-label={`Project actions for ${project.name}`}
                  >
                    <MoreHorizontal className="h-4 w-4 shrink-0" />
                  </button>
                  {openProjectMenu === project.path ? (
                    <div className="absolute right-0 top-8 z-50 w-40 rounded-lg border border-border bg-card p-1 shadow-lg">
                      <button type="button" onClick={() => void onRevealProjectInFinder(project.path)} className="w-full rounded-lg px-2 py-1.5 text-left text-xs transition-colors hover:bg-muted">Open in Finder</button>
                      {onResetProjectNodePositions ? <button type="button" onClick={() => onResetProjectNodePositions(project.path)} className="w-full rounded-lg px-2 py-1.5 text-left text-xs transition-colors hover:bg-muted">Reset node positions</button> : null}
                      <button type="button" onClick={() => onRemoveProject(project.path)} className="w-full rounded-lg px-2 py-1.5 text-left text-xs text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20">Remove</button>
                    </div>
                  ) : null}
                </div>
                {isExpanded ? <div className="mt-1 space-y-1 pl-3">
                    {commitPreviews.map((session) => (
                      <TerminalRow key={session.id} session={session} label={previewLabel(project, session)} active={activeTerminalId === session.id} onSelect={onSelectTerminal} />
                    ))}
                    {project.worktrees.map((worktree) => {
                      const key = `${project.path}:${worktree.path}`;
                      const expanded = expandedWorktrees.has(key);
                      const sessions = visibleNestedSessions(projectSessions, worktree.path);
                      const label = worktree.isCurrent ? 'Primary' : worktreeDisplayName(worktree.path);
                      const refLabel = worktreeRefLabel(worktree);
                      const accentColor = worktreeAccentByPath.get(
                        normalizeRepoPathForCompare(worktree.path).toLowerCase(),
                      );
                      return (
                        <div key={worktree.path}>
                          <div
                            className={cn(
                              'group flex h-7 items-center rounded-lg transition-colors hover:bg-muted',
                              !accentColor && 'text-muted-foreground hover:text-foreground',
                            )}
                            style={accentColor ? { color: accentColor } : undefined}
                            onClick={() => void onSelectWorktree(project.path, workingTreeIdForPath(worktree.path, worktree.isCurrent))}
                          >
                            <button
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();
                                toggle(key, expandedWorktrees, setExpandedWorktrees, EXPANDED_WORKTREES_KEY);
                              }}
                              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-muted"
                              aria-label={`${expanded ? 'Collapse' : 'Expand'} ${label}`}
                            >
                              <ChevronRight className={cn('h-3.5 w-3.5 shrink-0 transition-transform', expanded && 'rotate-90')} />
                            </button>
                            <span className="min-w-0 flex-1 truncate text-sm">{label} · {refLabel}</span>
                            <button
                              type="button"
                              disabled={!worktree.pathExists}
                              onClick={(event) => {
                                event.stopPropagation();
                                if (!expandedWorktrees.has(key)) {
                                  const next = new Set(expandedWorktrees);
                                  next.add(key);
                                  setExpandedWorktrees(next);
                                  persistSet(EXPANDED_WORKTREES_KEY, next);
                                }
                                void onCreateTerminal(project.path, worktree.path);
                              }}
                              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg opacity-0 transition-colors hover:bg-muted group-hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-30"
                              aria-label={`New terminal in ${label}`}
                              title="New terminal"
                            >
                              <Plus className="h-3.5 w-3.5 shrink-0" />
                            </button>
                          </div>
                          {expanded ? (
                            <div className="space-y-1 pl-7">
                              {sessions.map((session) => (
                                <TerminalRow key={session.id} session={session} label={session.kind === 'preview' ? 'Preview' : session.label} active={activeTerminalId === session.id} onSelect={onSelectTerminal} />
                              ))}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                </div> : null}
              </section>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

function TerminalRow({ session, label, active, onSelect }: { session: TerminalSession; label: string; active: boolean; onSelect: (session: TerminalSession) => void }) {
  const Icon = session.kind === 'preview' ? Eye : TerminalSquare;
  return (
    <button
      type="button"
      onClick={() => onSelect(session)}
      className={cn(
        'flex h-7 w-full items-center gap-2 rounded-lg px-2 text-left text-sm transition-colors hover:bg-muted',
        active ? 'bg-primary/10 text-primary' : 'text-muted-foreground',
      )}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" />
      <span className="min-w-0 flex-1 truncate">{label}</span>
      {session.status === 'exited' ? <span className="text-[10px] uppercase tracking-wide">Exited</span> : null}
    </button>
  );
}
