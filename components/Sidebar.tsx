import { createPortal } from 'react-dom';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import type { WorktreeInfo } from '../types';
import { cn, worktreeDisplayName, worktreeSessionDisplayName } from './grid/mapGridUtils';

const EXPANDED_PROJECTS_STORAGE_KEY = 'git-visualizer:expanded-projects';

function loadExpandedProjectsFromStorage(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = window.localStorage.getItem(EXPANDED_PROJECTS_STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((value): value is string => typeof value === 'string'));
  } catch {
    return new Set();
  }
}

function pathsProbablyEqual(a: string | null | undefined, b: string | null | undefined): boolean {
  if (!a || !b) return false;
  const variantsFor = (value: string): string[] => {
    const normalized = value.replace(/\\/g, '/').replace(/\/+$/, '');
    const variants = new Set<string>([normalized]);
    if (normalized.startsWith('/private/')) variants.add(normalized.slice('/private'.length));
    return Array.from(variants);
  };
  const av = variantsFor(a);
  const bv = variantsFor(b);
  for (const left of av) {
    for (const right of bv) {
      if (left === right || left.toLowerCase() === right.toLowerCase()) return true;
    }
  }
  return false;
}

function projectTouchesActivePath(projectPath: string, worktrees: WorktreeInfo[], activePath: string | null): boolean {
  if (!activePath) return false;
  if (pathsProbablyEqual(projectPath, activePath)) return true;
  return worktrees.some((worktree) => pathsProbablyEqual(worktree.path, activePath));
}

function getSidebarRowLabel(worktree: WorktreeInfo): { sidebar: string; sessionsSidebar: string } {
  return {
    sidebar: worktreeSessionDisplayName(worktree),
    sessionsSidebar: worktree.branchName ?? worktree.headSha.slice(0, 7),
  };
}

function sortWorktreesForSidebar(worktrees: WorktreeInfo[]): WorktreeInfo[] {
  return [...worktrees].sort((left, right) => {
    if (left.isCurrent !== right.isCurrent) return left.isCurrent ? -1 : 1;
    const leftName = left.isCurrent ? 'Primary' : worktreeDisplayName(left.path);
    const rightName = right.isCurrent ? 'Primary' : worktreeDisplayName(right.path);
    return leftName.localeCompare(rightName);
  });
}

type Props = {
  projects: Array<{
    path: string;
    name: string;
    worktrees: WorktreeInfo[];
  }>;
  activeProjectPath: string | null;
  onSelectProject: (path: string) => void | Promise<void>;
  onSelectWorktree?: (path: string) => void | Promise<void>;
  onAddProject: () => void;
  onRemoveProject: (path: string) => void;
  onRevealProjectInFinder: (path: string) => Promise<void> | void;
  onResetProjectNodePositions?: (path: string) => void;
  onReorderProjects?: (nextOrder: string[]) => void;
  projectLoading?: boolean;
  projectError?: string | null;
  className?: string;
  style?: CSSProperties;
  collapsed?: boolean;
};

function ProjectIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 transition-opacity"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {open ? (
        <>
          <path
            d="M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </>
      ) : (
        <>
          <path
            d="M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M4 10.5L12.4211 10.5L20 10.5" stroke="currentColor" strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}

function SidebarRow({
  worktree,
  isActiveProject,
  isActiveWorktree,
  onSelect,
}: {
  worktree: WorktreeInfo;
  isActiveProject: boolean;
  isActiveWorktree: boolean;
  onSelect: () => void;
}) {
  const { sidebar, sessionsSidebar } = getSidebarRowLabel(worktree);
  const ariaLabel = `${sidebar} · ${sessionsSidebar}`;
  const disabled = worktree.pathExists === false;

  return (
    <li>
      <div
        className={cn(
          'sidebar-row',
          'group flex min-w-0 items-center gap-0 rounded-md px-2 h-6 text-left text-sm font-normal transition-colors',
          disabled
            ? 'cursor-not-allowed opacity-50'
            : 'hover:bg-border/50 cursor-pointer',
        )}
        data-active-project={isActiveProject ? 'true' : 'false'}
        data-active-worktree={isActiveWorktree ? 'true' : 'false'}
        style={{
          color: isActiveProject
            ? isActiveWorktree
              ? 'var(--checked)'
              : 'var(--foreground)'
            : 'var(--muted-foreground)',
        }}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        onClick={() => {
          if (disabled) return;
          void onSelect();
        }}
        onKeyDown={(event) => {
          if (disabled) return;
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            void onSelect();
          }
        }}
      >
        <span className="sidebar min-w-0 truncate font-normal whitespace-nowrap overflow-hidden">
          {sidebar}
        </span>
        <span className="shrink-0 px-1 text-muted-foreground/70" aria-hidden="true">
          ·
        </span>
        <span className="sessions-sidebar min-w-0 flex-1 truncate font-normal whitespace-nowrap overflow-hidden text-muted-foreground/80">
          {sessionsSidebar}
        </span>
      </div>
    </li>
  );
}

export default function Sidebar({
  projects,
  activeProjectPath,
  onSelectProject,
  onSelectWorktree,
  onAddProject,
  onRemoveProject,
  onRevealProjectInFinder,
  onResetProjectNodePositions,
  onReorderProjects,
  projectLoading = false,
  projectError = null,
  className,
  style,
  collapsed = false,
}: Props) {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(loadExpandedProjectsFromStorage);
  const [openProjectMenuPath, setOpenProjectMenuPath] = useState<string | null>(null);
  const [dragPendingProjectPath, setDragPendingProjectPath] = useState<string | null>(null);
  const [draggingProjectPath, setDraggingProjectPath] = useState<string | null>(null);
  const [dragPreviewIndex, setDragPreviewIndex] = useState<number | null>(null);
  const [dragGhostRect, setDragGhostRect] = useState<{ x: number; y: number; width: number } | null>(null);
  const [openProjectMenuCoords, setOpenProjectMenuCoords] = useState<{ top: number; right: number } | null>(null);

  const scrollBodyRef = useRef<HTMLDivElement | null>(null);
  const projectMenuButtonRefs = useRef(new Map<string, HTMLButtonElement | null>());
  const suppressProjectSelectRef = useRef(false);
  const dragStateRef = useRef<{
    active: boolean;
    path: string;
    startX: number;
    startY: number;
    offsetX: number;
    offsetY: number;
    width: number;
    moved: boolean;
  } | null>(null);

  const persistExpandedProjects = (next: Set<string>) => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(EXPANDED_PROJECTS_STORAGE_KEY, JSON.stringify(Array.from(next)));
  };

  useEffect(() => {
    persistExpandedProjects(expandedProjects);
  }, [expandedProjects]);

  const orderedProjects = projects;
  const renderedProjects = useMemo(() => {
    if (!draggingProjectPath) return orderedProjects;
    const movingProject = orderedProjects.find((project) => project.path === draggingProjectPath);
    if (!movingProject) return orderedProjects;
    const baseProjects = orderedProjects.filter((project) => project.path !== draggingProjectPath);
    if (dragPreviewIndex == null) return baseProjects;
    const next = [...baseProjects];
    const boundedIndex = Math.max(0, Math.min(dragPreviewIndex, next.length));
    next.splice(boundedIndex, 0, movingProject);
    return next;
  }, [dragPreviewIndex, draggingProjectPath, orderedProjects]);

  const commitProjectOrder = useCallback((nextOrder: string[]) => {
    onReorderProjects?.(nextOrder);
  }, [onReorderProjects]);

  const clearDragPreview = useCallback(() => {
    setDragPendingProjectPath(null);
    setDraggingProjectPath(null);
    setDragPreviewIndex(null);
    setDragGhostRect(null);
    dragStateRef.current = null;
  }, []);

  useEffect(() => {
    if (!dragPendingProjectPath) return;
    const handlePointerMove = (event: PointerEvent) => {
      const currentDragState = dragStateRef.current;
      if (!currentDragState?.active) return;
      const deltaX = Math.abs(event.clientX - currentDragState.startX);
      const deltaY = Math.abs(event.clientY - currentDragState.startY);
      if (!currentDragState.moved && (deltaX > 4 || deltaY > 4)) {
        currentDragState.moved = true;
        setDraggingProjectPath(currentDragState.path);
      }
      if (!currentDragState.moved) return;
      setDragGhostRect({
        x: event.clientX - currentDragState.offsetX,
        y: event.clientY - currentDragState.offsetY,
        width: currentDragState.width,
      });
      const rows = Array.from(scrollBodyRef.current?.querySelectorAll<HTMLElement>('[data-project-path]') ?? []);
      const targetRows = rows.filter((row) => row.dataset.projectPath && row.dataset.projectPath !== currentDragState.path);
      if (targetRows.length === 0) {
        setDragPreviewIndex(0);
        return;
      }
      let nextIndex = targetRows.length;
      for (let index = 0; index < targetRows.length; index += 1) {
        const rect = targetRows[index]!.getBoundingClientRect();
        const midpoint = rect.top + rect.height / 2;
        if (event.clientY < midpoint) {
          nextIndex = index;
          break;
        }
      }
      setDragPreviewIndex(nextIndex);
    };
    const handlePointerUp = () => {
      const currentDragState = dragStateRef.current;
      if (!currentDragState?.active) return;
      if (currentDragState.moved) {
        suppressProjectSelectRef.current = true;
        const currentOrder = orderedProjects.map((project) => project.path);
        const without = currentOrder.filter((path) => path !== currentDragState.path);
        const nextOrder = [...without];
        const insertAt = dragPreviewIndex ?? without.length;
        nextOrder.splice(Math.max(0, Math.min(insertAt, nextOrder.length)), 0, currentDragState.path);
        commitProjectOrder(nextOrder);
        window.setTimeout(() => {
          suppressProjectSelectRef.current = false;
        }, 0);
      }
      clearDragPreview();
    };
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [clearDragPreview, commitProjectOrder, dragPendingProjectPath, dragPreviewIndex, orderedProjects]);

  const startProjectDrag = useCallback((event: ReactPointerEvent<HTMLDivElement>, path: string) => {
    if (event.button !== 0) return;
    const rect = event.currentTarget.getBoundingClientRect();
    dragStateRef.current = {
      active: true,
      path,
      startX: event.clientX,
      startY: event.clientY,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      width: rect.width,
      moved: false,
    };
    setDragPendingProjectPath(path);
    setDraggingProjectPath(null);
    setDragPreviewIndex(null);
    setDragGhostRect({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      width: rect.width,
    });
  }, []);

  useEffect(() => {
    if (openProjectMenuPath == null) return;
    const updateMenuCoords = () => {
      const button = projectMenuButtonRefs.current.get(openProjectMenuPath);
      if (!button) return;
      const rect = button.getBoundingClientRect();
      setOpenProjectMenuCoords({ top: rect.bottom + 8, right: Math.max(8, window.innerWidth - rect.right) });
    };
    updateMenuCoords();
    const handlePointerDown = () => setOpenProjectMenuPath(null);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('resize', updateMenuCoords);
    window.addEventListener('scroll', updateMenuCoords, true);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('resize', updateMenuCoords);
      window.removeEventListener('scroll', updateMenuCoords, true);
    };
  }, [openProjectMenuPath]);

  const handleSelectWorktree = useCallback((worktreePath: string) => {
    if (pathsProbablyEqual(worktreePath, activeProjectPath)) return;
    const selectWorktree = onSelectWorktree ?? onSelectProject;
    void selectWorktree(worktreePath);
  }, [activeProjectPath, onSelectProject, onSelectWorktree]);

  const renderProject = (
    project: Props['projects'][number],
    options: { ghostMode?: boolean; hideLive?: boolean } = {},
  ) => {
    const ghostMode = options.ghostMode ?? false;
    const hideLive = options.hideLive ?? false;
    const isExpanded = expandedProjects.has(project.path);
    const isActiveProject = projectTouchesActivePath(project.path, project.worktrees, activeProjectPath);
    const isDraggingProject = draggingProjectPath === project.path;
    const sortedWorktrees = sortWorktreesForSidebar(project.worktrees);

    return (
      <motion.div
        key={project.path}
        layout={draggingProjectPath != null ? 'position' : false}
        transition={{ duration: 0.12, ease: 'easeOut' }}
        data-project-path={project.path}
        data-active-project={isActiveProject ? 'true' : 'false'}
        className={cn(
          'project-row relative z-10 flex flex-col gap-1 transition-colors',
          isExpanded ? 'mb-2.5' : '',
        )}
      >
        {dragPreviewIndex !== null && draggingProjectPath !== project.path && renderedProjects[dragPreviewIndex]?.path === project.path ? (
          <div className="h-px" aria-hidden="true">
            <div className="mx-1 h-px bg-foreground/60" />
          </div>
        ) : null}
        <div className={cn('relative z-0 px-1', hideLive ? 'pointer-events-none opacity-0' : '')}>
          <div
            className={cn(
              ghostMode
                ? 'group flex w-full items-center gap-0 rounded-lg px-0 h-6'
                : 'group sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-background px-0 h-6 transition-all duration-100 ease-out hover:bg-border/50 cursor-grab active:cursor-grabbing',
              isDraggingProject && !ghostMode ? 'opacity-0' : '',
            )}
            onPointerDownCapture={(event) => {
              if (ghostMode) return;
              const target = event.target as HTMLElement | null;
              if (target?.closest('.window-no-drag, button, input, textarea, select, [contenteditable="true"]')) return;
              startProjectDrag(event, project.path);
            }}
            onClick={(event) => {
              if (ghostMode) return;
              if (isActiveProject) return;
              if (draggingProjectPath === project.path || suppressProjectSelectRef.current) return;
              const target = event.target as HTMLElement | null;
              if (target?.closest('button, input, textarea, select, [contenteditable="true"]')) return;
              void onSelectProject(project.path);
            }}
          >
            <button
              type="button"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setExpandedProjects((previous) => {
                  const next = new Set(previous);
                  if (next.has(project.path)) next.delete(project.path);
                  else next.add(project.path);
                  persistExpandedProjects(next);
                  return next;
                });
              }}
              aria-expanded={isExpanded}
              aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${project.name}`}
              className={cn(
                'project-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-border/50',
                ghostMode ? 'pointer-events-none' : '',
              )}
              style={{ color: isActiveProject ? 'var(--foreground)' : 'var(--muted-foreground)' }}
            >
              <ProjectIcon open={isExpanded} />
            </button>
            <span
              className="project-name min-w-0 flex-1 truncate pl-0 text-left text-sm font-normal transition-colors"
              style={{ color: isActiveProject ? 'var(--foreground)' : 'var(--muted-foreground)' }}
            >
              {project.name}
            </span>
            <div className="relative z-[130] shrink-0">
              <button
                type="button"
                onPointerDown={(event) => event.stopPropagation()}
                aria-label={`Project actions for ${project.name}`}
                aria-expanded={openProjectMenuPath === project.path}
                ref={(node) => {
                  projectMenuButtonRefs.current.set(project.path, node);
                }}
                onClick={(event) => {
                  event.stopPropagation();
                  const rect = event.currentTarget.getBoundingClientRect();
                  setOpenProjectMenuCoords({ top: rect.bottom + 8, right: Math.max(8, window.innerWidth - rect.right) });
                  setOpenProjectMenuPath((current) => (current === project.path ? null : project.path));
                }}
                className={cn('pr-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md opacity-0 hover:bg-border/50 group-hover:opacity-100 text-current', ghostMode ? 'pointer-events-none' : '')}
              >
                <MoreHorizontal className="h-4 w-4 shrink-0" />
              </button>
              {openProjectMenuPath === project.path && !ghostMode && openProjectMenuCoords && typeof document !== 'undefined'
                ? createPortal(
                    <div
                      role="menu"
                      className="fixed z-[10000] inline-flex w-max flex-col overflow-hidden rounded-md border border-border bg-background p-1"
                      style={{ top: `${openProjectMenuCoords.top}px`, right: `${openProjectMenuCoords.right}px` }}
                      onPointerDownCapture={(event) => event.stopPropagation()}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <button
                        type="button"
                        role="menuitem"
                        onPointerDown={(event) => event.stopPropagation()}
                        onClick={() => {
                          setOpenProjectMenuPath(null);
                          void onRevealProjectInFinder(project.path);
                        }}
                        className="flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        Open in Finder
                      </button>
                      {onResetProjectNodePositions ? (
                        <button
                          type="button"
                          role="menuitem"
                          onPointerDown={(event) => event.stopPropagation()}
                          onClick={() => {
                            setOpenProjectMenuPath(null);
                            onResetProjectNodePositions(project.path);
                          }}
                          className="flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          Reset node positions
                        </button>
                      ) : null}
                      <button
                        type="button"
                        role="menuitem"
                        onPointerDown={(event) => event.stopPropagation()}
                        onClick={() => {
                          setOpenProjectMenuPath(null);
                          onRemoveProject(project.path);
                        }}
                        className="project-menu-remove flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium"
                      >
                        Remove
                      </button>
                    </div>,
                    document.body,
                  )
                : null}
            </div>
          </div>
          {isExpanded ? (
            <AnimatePresence initial={false}>
              <motion.div
                key={`${project.path}-worktrees`}
                className="grid min-h-0"
                initial={{ gridTemplateRows: '0fr', opacity: 0 }}
                animate={{ gridTemplateRows: '1fr', opacity: 1 }}
                exit={{ gridTemplateRows: '0fr', opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="min-h-0 overflow-hidden">
                  <ul className={cn('relative z-0 space-y-1 pt-0 pl-4', ghostMode ? 'opacity-70' : '')}>
                    {sortedWorktrees.map((worktree) => (
                      <SidebarRow
                        key={worktree.path}
                        worktree={worktree}
                        isActiveProject={isActiveProject}
                        isActiveWorktree={pathsProbablyEqual(worktree.path, activeProjectPath)}
                        onSelect={() => handleSelectWorktree(worktree.path)}
                      />
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : null}
        </div>
      </motion.div>
    );
  };

  return (
    <aside
      aria-label="Repository worktrees"
      className={cn('pointer-events-auto relative z-[120] h-full select-none overflow-hidden bg-background', className)}
      style={style}
    >
      <header data-tauri-drag-region className="absolute inset-x-0 top-0 z-80 h-12" />
      <div className="flex h-full min-h-0 flex-col">
        {projectError && (
          <div className="px-2.5 pb-2">
            <p className="rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400">
              {projectError}
            </p>
          </div>
        )}
        <div className={cn('px-2 pb-2', collapsed ? 'opacity-0 pointer-events-none' : '')}>
          <div className="px-1">
            <button
              type="button"
              onClick={onAddProject}
              disabled={projectLoading}
              aria-label="Add Repo"
              className="window-no-drag group flex w-full items-center gap-0 rounded-lg bg-background px-0 h-6 text-foreground transition-colors hover:bg-border/50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors group-hover:bg-border/50 text-foreground">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </span>
              <span className="min-w-0 flex-1 truncate pl-0 text-left text-sm font-normal text-foreground">
                New Project
              </span>
            </button>
          </div>
        </div>
        <div
          ref={scrollBodyRef}
          className={cn(
            'sidebar-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto px-2',
            collapsed ? 'opacity-0 pointer-events-none' : '',
          )}
          style={{ scrollbarGutter: 'stable both-edges' }}
        >
          {renderedProjects.map((project) => renderProject(project, { hideLive: draggingProjectPath === project.path }))}
        </div>
      </div>
      {draggingProjectPath && dragGhostRect ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[90]"
          style={{
            transform: `translate3d(${dragGhostRect.x}px, ${dragGhostRect.y}px, 0)`,
            width: `${dragGhostRect.width}px`,
          }}
        >
          {renderProject(
            projects.find((project) => project.path === draggingProjectPath)
              ?? orderedProjects.find((project) => project.path === draggingProjectPath)!,
            { ghostMode: true },
          )}
        </div>
      ) : null}
    </aside>
  );
}
