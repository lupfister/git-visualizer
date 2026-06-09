import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { ChevronRight, MoreHorizontal, Plus, Trash2 } from 'lucide-react';
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
  onTerminateTerminal?: (id: string) => void | Promise<void>;
  projectLoading?: boolean;
  projectError?: string | null;
  className?: string;
  style?: CSSProperties;
  collapsed?: boolean;
};

export const commitPreviewSessions = (sessions: TerminalSession[]): TerminalSession[] => {
  const commitPreviews = sessions.filter((session) => session.kind === 'preview' && session.targetKind === 'commit');
  if (commitPreviews.length <= 1) return commitPreviews;
  const running = commitPreviews.find((session) => session.status === 'running');
  return running ? [running] : [commitPreviews[commitPreviews.length - 1]!];
};

export const previewLabel = (session: TerminalSession): string => {
  if (session.previewUrl) {
    try {
      return new URL(session.previewUrl).port;
    } catch {
      return 'Preview';
    }
  }
  return 'Preview';
};

export const worktreeRefLabel = (worktree: WorktreeInfo): string =>
  worktree.branchName
    ? `${worktree.branchName}/${worktree.headSha.slice(0, 7)}`
    : worktree.headSha.slice(0, 7);

export const visibleNestedSessions = (
  sessions: TerminalSession[],
  worktreePath: string,
  workingTreeId: string,
): TerminalSession[] => sessions.filter((session) =>
  (
    samePath(session.worktreePath, worktreePath)
    || (session.targetKind === 'worktree' && session.targetId === workingTreeId)
  )
  && session.targetKind !== 'commit'
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
  onTerminateTerminal,
  projectLoading,
  projectError,
  className,
  style,
  collapsed,
}: Props) {
  const [expandedWorktrees, setExpandedWorktrees] = useState<Set<string>>(() => loadSet(EXPANDED_WORKTREES_KEY));
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(() => loadSet(EXPANDED_PROJECTS_KEY));
  const [openProjectMenu, setOpenProjectMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!openProjectMenu) return;
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (menuRef.current?.contains(target)) return;
      setOpenProjectMenu(null);
    };
    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, [openProjectMenu]);

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

  const expandWorktree = (key: string) => {
    setExpandedWorktrees((current) => {
      if (current.has(key)) return current;
      const next = new Set(current);
      next.add(key);
      persistSet(EXPANDED_WORKTREES_KEY, next);
      return next;
    });
  };

  useEffect(() => {
    if (!activeTerminalId) return;
    const session = terminalSessions.find((candidate) => candidate.id === activeTerminalId);
    if (!session) return;

    const project = projects.find((candidate) => samePath(candidate.path, session.projectPath));
    if (!project) return;

    setExpandedProjects((current) => {
      if (current.has(project.path)) return current;
      const next = new Set(current);
      next.add(project.path);
      persistSet(EXPANDED_PROJECTS_KEY, next);
      return next;
    });

    for (const worktree of project.worktrees) {
      const workingTreeId = workingTreeIdForPath(worktree.path, worktree.isCurrent);
      const nested = visibleNestedSessions(
        sessionsByProject.get(normalizeRepoPathForCompare(project.path).toLowerCase()) ?? [],
        worktree.path,
        workingTreeId,
      );
      if (!nested.some((candidate) => candidate.id === activeTerminalId)) continue;
      expandWorktree(`${project.path}:${worktree.path}`);
      return;
    }
  }, [activeTerminalId, projects, sessionsByProject, terminalSessions]);

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
            const commitPreviews = commitPreviewSessions(projectSessions);
            const worktreeAccentByPath = new Map(
              buildWorktreeSessions(project.worktrees, project.path).map((session) => [
                normalizeRepoPathForCompare(session.path).toLowerCase(),
                accentCssVars(session.accentToken),
              ]),
            );
            return (
              <section key={project.path}>
                <div
                  className={cn(
                    'group relative flex h-7 items-center rounded-lg transition-colors hover:bg-muted',
                    isActive && 'text-foreground',
                    !isActive && 'text-muted-foreground',
                    openProjectMenu === project.path && 'z-40',
                  )}
                  onClick={() => void onSelectProject(project.path)}
                >
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggle(project.path, expandedProjects, setExpandedProjects, EXPANDED_PROJECTS_KEY);
                    }}
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors"
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${project.name}`}
                  >
                    {isExpanded ? (
                      <ProjectOpenIcon className="h-4 w-4 shrink-0" />
                    ) : (
                      <ProjectClosedIcon className="h-4 w-4 shrink-0" />
                    )}
                  </button>
                  <span className="min-w-0 flex-1 truncate text-sm font-medium">{project.name}</span>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setOpenProjectMenu((current) => current === project.path ? null : project.path);
                    }}
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg opacity-0 transition-colors group-hover:opacity-100"
                    aria-label={`Project actions for ${project.name}`}
                  >
                    <MoreHorizontal className="h-4 w-4 shrink-0" />
                  </button>
                  {openProjectMenu === project.path ? (
                    <div ref={menuRef} className="absolute right-0 top-8 z-50 w-40 rounded-lg border border-border bg-background p-1">
                      <button type="button" onClick={() => void onRevealProjectInFinder(project.path)} className="w-full rounded-lg px-2 py-1.5 text-left text-xs transition-colors hover:bg-muted">Open in Finder</button>
                      {onResetProjectNodePositions ? <button type="button" onClick={() => onResetProjectNodePositions(project.path)} className="w-full rounded-lg px-2 py-1.5 text-left text-xs transition-colors hover:bg-muted">Reset node positions</button> : null}
                      <button type="button" onClick={() => onRemoveProject(project.path)} className="w-full rounded-lg px-2 py-1.5 text-left text-xs text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20">Remove</button>
                    </div>
                  ) : null}
                </div>
                {isExpanded ? <div className="mt-1 space-y-1">
                    {commitPreviews.map((session) => (
                      <TerminalRow
                        key={session.id}
                        session={session}
                        label={previewLabel(session)}
                        active={activeTerminalId === session.id}
                        onSelect={onSelectTerminal}
                        isActiveProject={isActive}
                        onTerminate={onTerminateTerminal}
                        alignWithProjectRow
                      />
                    ))}
                    <div className="space-y-1 pl-1">
                    {project.worktrees.map((worktree) => {
                      const key = `${project.path}:${worktree.path}`;
                      const expanded = expandedWorktrees.has(key);
                      const workingTreeId = workingTreeIdForPath(worktree.path, worktree.isCurrent);
                      const sessions = visibleNestedSessions(projectSessions, worktree.path, workingTreeId);
                      const label = worktree.isCurrent ? 'Primary' : worktreeDisplayName(worktree.path);
                      const refLabel = worktreeRefLabel(worktree);
                      const accent = worktreeAccentByPath.get(
                        normalizeRepoPathForCompare(worktree.path).toLowerCase(),
                      );
                      const accentColor = accent?.fg;
                      const hasNestedSessions = sessions.length > 0;
                      const rowAccentStyle = accent ? ({
                        color: accent.fg,
                        '--worktree-fg': accent.fg,
                        '--worktree-muted': accent.muted,
                      } as React.CSSProperties) : undefined;
                      const rowSurfaceClass = cn(
                        accent ? 'hover:bg-[var(--worktree-muted)]' : 'hover:bg-muted',
                        !accentColor && 'text-muted-foreground hover:text-foreground',
                        !isActive && 'opacity-80 hover:opacity-100',
                      );
                      const plusButton = (
                        <button
                          type="button"
                          disabled={!worktree.pathExists}
                          onClick={(event) => {
                            event.stopPropagation();
                            void (async () => {
                              await onCreateTerminal(project.path, worktree.path);
                              expandWorktree(key);
                            })();
                          }}
                          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg opacity-0 transition-colors group-hover/row:opacity-100 disabled:cursor-not-allowed disabled:opacity-30"
                          aria-label={`New terminal in ${label}`}
                          title="New terminal"
                        >
                          <Plus className="h-3.5 w-3.5 shrink-0" />
                        </button>
                      );
                      return (
                        <div key={worktree.path}>
                          {hasNestedSessions ? (
                            <div
                              className={cn(
                                'group/row flex h-7 flex-1 min-w-0 cursor-pointer items-center rounded-lg pl-2 pr-0 transition-colors',
                                rowSurfaceClass,
                              )}
                              style={rowAccentStyle}
                              onClick={() => void onSelectWorktree(project.path, workingTreeId)}
                            >
                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  toggle(key, expandedWorktrees, setExpandedWorktrees, EXPANDED_WORKTREES_KEY);
                                }}
                                className="inline-flex h-7 w-4 shrink-0 items-center justify-center rounded-lg transition-colors"
                                aria-label={`${expanded ? 'Collapse' : 'Expand'} ${label}`}
                              >
                                <ChevronRight className={cn('h-3.5 w-3.5 shrink-0 transition-transform duration-200', expanded && 'rotate-90')} />
                              </button>
                              <span className="min-w-0 flex-1 truncate text-sm">{label} · {refLabel}</span>
                              {plusButton}
                            </div>
                          ) : (
                            <div
                              className="flex h-7 min-w-0 flex-1 cursor-pointer items-center pl-2 pr-0"
                              onClick={() => void onSelectWorktree(project.path, workingTreeId)}
                            >
                              <span className="w-4 shrink-0" aria-hidden="true" />
                              <div
                                className={cn(
                                  'group/row -ml-2 flex min-w-0 flex-1 items-center rounded-lg pl-2 pr-0 transition-colors',
                                  rowSurfaceClass,
                                )}
                                style={rowAccentStyle}
                              >
                                <span className="min-w-0 flex-1 truncate text-sm">{label} · {refLabel}</span>
                                {plusButton}
                              </div>
                            </div>
                          )}
                          {expanded ? (
                            <div className="space-y-1 pl-4">
                              {sessions.map((session) => (
                                <TerminalRow
                                  key={session.id}
                                  session={session}
                                  label={session.kind === 'preview' ? previewLabel(session) : session.label}
                                  active={activeTerminalId === session.id}
                                  onSelect={onSelectTerminal}
                                  accent={accent}
                                  isActiveProject={isActive}
                                  onTerminate={onTerminateTerminal}
                                />
                              ))}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                    </div>
                </div> : null}
              </section>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

const OUTPUT_PULSE_SETTLE_MS = 1200;

function TerminalRow({
  session,
  label,
  active,
  onSelect,
  accent,
  isActiveProject,
  onTerminate,
  alignWithProjectRow,
}: {
  session: TerminalSession;
  label: string;
  active: boolean;
  onSelect: (session: TerminalSession) => void;
  accent?: { fg: string; muted: string };
  isActiveProject?: boolean;
  onTerminate?: (id: string) => void | Promise<void>;
  alignWithProjectRow?: boolean;
}) {
  const Icon = session.kind === 'preview' ? PreviewIcon : TerminalIcon;
  const [displayLabel, setDisplayLabel] = useState(label);
  const style = accent
    ? ({
        '--worktree-fg': accent.fg,
        '--worktree-muted': accent.muted,
      } as React.CSSProperties)
    : undefined;

  useEffect(() => {
    if (label === displayLabel) return;
    const timeout = window.setTimeout(() => setDisplayLabel(label), 350);
    return () => window.clearTimeout(timeout);
  }, [displayLabel, label]);

  const isRunning = session.status === 'running';
  const outputActive = isRunning && session.outputActive === true;
  const [pulseVisible, setPulseVisible] = useState(false);
  const [isSettling, setIsSettling] = useState(false);
  const pulseVisibleRef = useRef(false);
  const settlingRef = useRef(false);

  useEffect(() => {
    pulseVisibleRef.current = pulseVisible;
  }, [pulseVisible]);

  useEffect(() => {
    if (!isRunning) {
      settlingRef.current = false;
      pulseVisibleRef.current = false;
      setPulseVisible(false);
      setIsSettling(false);
      return;
    }

    if (outputActive) {
      settlingRef.current = false;
      pulseVisibleRef.current = true;
      setPulseVisible(true);
      setIsSettling(false);
      return;
    }

    if (!pulseVisibleRef.current || settlingRef.current) return;

    settlingRef.current = true;
    setIsSettling(true);
  }, [isRunning, outputActive]);

  useEffect(() => {
    if (!isSettling) return;

    const timeout = window.setTimeout(() => {
      settlingRef.current = false;
      pulseVisibleRef.current = false;
      setPulseVisible(false);
      setIsSettling(false);
    }, OUTPUT_PULSE_SETTLE_MS);

    return () => window.clearTimeout(timeout);
  }, [isSettling]);

  return (
    <div
      style={style}
      className={cn(
        'group/terminal relative flex h-7 items-center w-full rounded-lg transition-colors',
        accent
          ? active
            ? 'bg-[var(--worktree-muted)]'
            : 'hover:bg-[var(--worktree-muted)]'
          : active
            ? 'bg-primary/10 hover:bg-muted'
            : 'hover:bg-muted',
        isActiveProject === false && 'opacity-80 hover:opacity-100',
      )}
    >
      <button
        type="button"
        onClick={() => onSelect(session)}
        aria-busy={pulseVisible || undefined}
        className={cn(
          'flex h-7 flex-1 items-center rounded-lg text-left text-sm min-w-0 pr-8',
          alignWithProjectRow ? 'pl-0' : 'gap-1.5 px-2',
          !pulseVisible && accent && 'text-[var(--worktree-fg)]',
          !pulseVisible && !accent && active && 'text-primary',
          !pulseVisible && !accent && !active && 'text-muted-foreground group-hover/terminal:text-foreground',
          pulseVisible && 'terminal-row-shimmer',
          pulseVisible && accent && 'terminal-row-shimmer--accent',
          pulseVisible && !accent && active && 'terminal-row-shimmer--primary',
          pulseVisible && !accent && !active && 'terminal-row-shimmer--default',
        )}
      >
        {pulseVisible ? (
          <span
            className={cn(
              'terminal-row-shimmer__content flex min-w-0 flex-1 items-center',
              !alignWithProjectRow && 'gap-1.5',
              isSettling && 'terminal-row-shimmer__content--settling',
            )}
          >
            <span
              aria-hidden
              className={cn(
                'inline-flex shrink-0 items-center justify-center',
                alignWithProjectRow ? 'h-7 w-7' : 'h-3.5 w-3.5',
              )}
            >
              <span
                className={cn(
                  'terminal-row-shimmer__icon shrink-0',
                  session.kind === 'preview'
                    ? 'terminal-row-shimmer__icon--preview'
                    : 'terminal-row-shimmer__icon--terminal',
                )}
              />
            </span>
            <span className="terminal-row-shimmer__text min-w-0 flex-1 truncate">{displayLabel}</span>
          </span>
        ) : (
          <>
            <span
              className={cn(
                'inline-flex shrink-0 items-center justify-center',
                alignWithProjectRow ? 'h-7 w-7' : 'h-3.5 w-3.5',
              )}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" />
            </span>
            <span className="min-w-0 flex-1 truncate">{displayLabel}</span>
          </>
        )}
        {session.status === 'exited' ? (
          <span className="text-[10px] uppercase tracking-wide group-hover/terminal:opacity-0 transition-opacity duration-150 shrink-0">Exited</span>
        ) : null}
      </button>
      {onTerminate ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            void onTerminate(session.id);
          }}
          className={cn(
            'absolute right-0 top-0 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg opacity-0 transition-opacity duration-150 group-hover/terminal:opacity-100',
            accent
              ? 'text-[var(--worktree-fg)]'
              : 'text-muted-foreground',
          )}
          aria-label="Terminate session"
          title="Terminate session"
        >
          <Trash2 className="h-3.5 w-3.5 shrink-0" />
        </button>
      ) : null}
    </div>
  );
}

function ProjectClosedIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 10.5L12.4211 10.5L20 10.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function ProjectOpenIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function TerminalIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M10.7272 2.33331H3.27208C2.10812 2.33331 1.16455 3.27688 1.16455 4.44084V9.55912C1.16455 10.7231 2.10812 11.6666 3.27208 11.6666H10.7272C11.8911 11.6666 12.8347 10.7231 12.8347 9.55912V4.44084C12.8347 3.27688 11.8911 2.33331 10.7272 2.33331Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.79736 5.01288L5.78446 6.99998L3.79736 8.98707M7.44037 8.98707H10.0898"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PreviewIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M4.21449 11.4349L10.8684 7.76319C11.4716 7.43033 11.4713 6.56324 10.8679 6.23073L4.21404 2.56418C3.63088 2.24284 2.91675 2.6647 2.91675 3.33053L2.91675 10.6688C2.91675 11.3348 3.63132 11.7567 4.21449 11.4349Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
