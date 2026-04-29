import { createPortal } from 'react-dom';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, Dispatch, PointerEvent as ReactPointerEvent, SetStateAction } from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Branch, BranchCommitPreview, CheckedOutRef, DirectCommit, GitStashEntry, MergeNode, WorktreeInfo } from '../types';
import { cn, shaMatchesGitRef } from './grid/mapGridUtils';
import type { BranchGridLayoutModel } from './grid/branchGridLayoutModel';
import { deriveRepoVisualState } from '../src/repoVisualState';

const EXPANDED_PROJECTS_STORAGE_KEY = 'git-visualizer:expanded-projects';
const EXPANDED_BRANCHES_STORAGE_KEY = 'git-visualizer:expanded-branches';

type Props = {
  projects: Array<{
    path: string;
    name: string;
    branchName?: string;
    branches: Branch[];
    mergeNodes: MergeNode[];
    directCommits: DirectCommit[];
    unpushedDirectCommits: DirectCommit[];
    unpushedCommitShasByBranch: Record<string, string[]>;
    checkedOutRef: CheckedOutRef | null;
    worktrees: WorktreeInfo[];
    stashes: GitStashEntry[];
    branchCommitPreviews: Record<string, BranchCommitPreview[]>;
    branchUniqueAheadCounts: Record<string, number>;
    defaultBranch: string;
    treeLoaded?: boolean;
  }>;
  activeProjectPath: string | null;
  onSelectProject: (path: string) => void | Promise<void>;
  onAddProject: () => void;
  onRemoveProject: (path: string) => void;
  onRevealProjectInFinder: (path: string) => Promise<void> | void;
  onReorderProjects?: (nextOrder: string[]) => void;
  projectLoading?: boolean;
  projectError?: string | null;
  checkedOutRef?: CheckedOutRef | null;
  manuallyOpenedClumpsByProject?: Record<string, Set<string>>;
  manuallyClosedClumpsByProject?: Record<string, Set<string>>;
  manuallyOpenedClumps?: Set<string>;
  manuallyClosedClumps?: Set<string>;
  setManuallyOpenedClumps?: Dispatch<SetStateAction<Set<string>>>;
  setManuallyClosedClumps?: Dispatch<SetStateAction<Set<string>>>;
  gridLayoutModel?: BranchGridLayoutModel;
  onSelectCommit?: (sha: string) => void;
  onSelectBranch?: (branchName: string) => void;
  showCommits: boolean;
  className?: string;
  style?: CSSProperties;
  collapsed?: boolean;
};

function buildChildBranchesByParent(branches: Branch[], defaultBranch: string): Map<string, string[]> {
  const branchByName = new Map(branches.map((branch) => [branch.name, branch]));
  const childNamesByParent = new Map<string, string[]>();
  for (const branch of branches) {
    const parent = branch.parentBranch;
    if (!parent || parent === branch.name) continue;
    const parentIsKnownBranch = branchByName.has(parent) || parent === defaultBranch;
    if (!parentIsKnownBranch) continue;
    const next = childNamesByParent.get(parent) ?? [];
    next.push(branch.name);
    childNamesByParent.set(parent, next);
  }

  const sortByDateAsc = (left: string, right: string) => {
    const leftDate = new Date(branchByName.get(left)?.lastCommitDate ?? 0).getTime();
    const rightDate = new Date(branchByName.get(right)?.lastCommitDate ?? 0).getTime();
    return leftDate - rightDate;
  };
  for (const [name, childNames] of childNamesByParent.entries()) {
    void name;
    childNames.sort(sortByDateAsc);
  }
  return childNamesByParent;
}

function buildRootNames(
  branches: Branch[],
  defaultBranch: string,
  childNamesByParent: Map<string, string[]>,
): string[] {
  const branchByName = new Map(branches.map((branch) => [branch.name, branch]));
  const sortByDateAsc = (left: string, right: string) => {
    const leftDate = new Date(branchByName.get(left)?.lastCommitDate ?? 0).getTime();
    const rightDate = new Date(branchByName.get(right)?.lastCommitDate ?? 0).getTime();
    return leftDate - rightDate;
  };
  const attachedChildren = new Set<string>();
  for (const childNames of childNamesByParent.values()) {
    for (const childName of childNames) attachedChildren.add(childName);
  }

  return branches
    .map((branch) => branch.name)
    .filter((name) => !attachedChildren.has(name))
    .sort((left, right) => {
      if (left === defaultBranch) return -1;
      if (right === defaultBranch) return 1;
      return sortByDateAsc(left, right);
    });
}

function inferDefaultExpanded(
  rootNames: string[],
  childNamesByParent: Map<string, string[]>,
  checkedOutRef: CheckedOutRef | null | undefined,
  defaultBranch: string,
): Set<string> {
  const expanded = new Set<string>([defaultBranch]);
  if (!checkedOutRef?.branchName) return expanded;

  const walk = (nodeNames: string[], ancestors: string[]): boolean => {
    for (const nodeName of nodeNames) {
      const lineage = [...ancestors, nodeName];
      if (nodeName === checkedOutRef.branchName) {
        for (const name of lineage) expanded.add(name);
        return true;
      }
      if (walk(childNamesByParent.get(nodeName) ?? [], lineage)) return true;
    }
    return false;
  };

  walk(rootNames, []);
  return expanded;
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

type CommitClump<T extends { fullSha: string; kind?: string }> = {
  key: string;
  commits: T[];
  count: number;
  lead: T;
};

function BranchRows({
  branchName,
  depth,
  isLast,
  branchByName,
  branchCommitPreviews,
  childNamesByParent,
  branchAnchorShaByName,
  expandedBranchNames,
  onToggleBranch,
  checkedOutBranchName,
  ancestors,
  showCommits,
  getMergeTargetLabels,
  sourceBranchName,
  clusterKeyByCommitId,
  isGridClusterOpen,
  onToggleGridCluster,
  onSelectCommit,
  onSelectBranch,
  isActiveProject,
}: {
  branchName: string;
  depth: number;
  isLast: boolean;
  branchByName: Map<string, Branch>;
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
  childNamesByParent: Map<string, string[]>;
  branchAnchorShaByName: Map<string, string | null>;
  expandedBranchNames: Set<string>;
  onToggleBranch: (branchName: string) => void;
  checkedOutBranchName: string | null;
  ancestors: Set<string>;
  showCommits: boolean;
  getMergeTargetLabels: (sha: string, sourceBranchName: string) => string[];
  sourceBranchName?: string;
  clusterKeyByCommitId: Map<string, string>;
  isGridClusterOpen: (clusterKey: string) => boolean;
  onToggleGridCluster: (clusterKey: string, focusTargetId: string) => void;
  onSelectCommit?: (sha: string) => void;
  onSelectBranch?: (branchName: string) => void;
  isActiveProject: boolean;
}) {
  if (ancestors.has(branchName)) return null;
  const branch = branchByName.get(branchName);
  if (!branch) return null;
  const childBranchNames = childNamesByParent.get(branchName) ?? [];
  const hasChildBranches = childBranchNames.length > 0;
  const commitPreviews = useMemo(
    () => [...(branchCommitPreviews[branchName] ?? [])],
    [branchCommitPreviews, branchName],
  );
  const hasCommits = showCommits && commitPreviews.length > 0;
  const shouldRenderCommitRows = showCommits;
  const isBranchExpandable = hasChildBranches || hasCommits;
  const isExpanded = expandedBranchNames.has(branchName);
  const visibleCommitPreviews = shouldRenderCommitRows ? commitPreviews : [];
  const shouldShowCommitRows = isExpanded && visibleCommitPreviews.length > 0;
  const isCheckedOut = checkedOutBranchName === branchName;
  const nextAncestors = new Set(ancestors);
  nextAncestors.add(branchName);
  const bendClassName = 'top-[-0.45rem] h-5 w-[10px]';
  const bendCornerClassName = 'rounded-bl-[7px]';
  const connectorLeftClassName = 'left-[0.65rem]';

  const anchoredChildrenByCommitIndex = new Map<number, string[]>();
  const unanchoredChildren: string[] = [];
  for (const childName of childBranchNames) {
    const anchorSha = branchAnchorShaByName.get(childName);
    if (anchorSha) {
      const anchorIndex = visibleCommitPreviews.findIndex((commit) =>
        shaMatchesGitRef(commit.fullSha, anchorSha) || shaMatchesGitRef(commit.sha, anchorSha),
      );
      if (anchorIndex >= 0) {
        const names = anchoredChildrenByCommitIndex.get(anchorIndex) ?? [];
        names.push(childName);
        anchoredChildrenByCommitIndex.set(anchorIndex, names);
        continue;
      }
    }
    unanchoredChildren.push(childName);
  }
  const commitClumps = useMemo(() => {
    if (!showCommits || visibleCommitPreviews.length === 0) return [] as Array<CommitClump<BranchCommitPreview>>;
    const clumps: Array<CommitClump<BranchCommitPreview>> = [];
    let current: BranchCommitPreview[] = [];
    let currentClusterKey: string | null = null;
    const flushCurrent = () => {
      if (current.length === 0) return;
      const tip = current[current.length - 1]!;
      const fallbackKey = `sidebar-single-${branchName}-${tip.fullSha}`;
      clumps.push({
        key: currentClusterKey ?? fallbackKey,
        commits: current,
        count: current.length,
        lead: tip,
      });
      current = [];
      currentClusterKey = null;
    };
    visibleCommitPreviews.forEach((commit) => {
      const clusterKey = clusterKeyByCommitId.get(`${branchName}:${commit.fullSha}`) ?? null;
      if (current.length === 0) {
        current = [commit];
        currentClusterKey = clusterKey;
        return;
      }
      if (clusterKey === currentClusterKey) {
        current.push(commit);
        return;
      }
      flushCurrent();
      current = [commit];
      currentClusterKey = clusterKey;
    });
    flushCurrent();
    return clumps;
  }, [branchName, showCommits, visibleCommitPreviews, clusterKeyByCommitId]);

    return (
      <li
        className={cn(
          'relative flex flex-col gap-1',
          depth > 0 ? 'pl-4' : 'pl-0',
          isExpanded ? 'mb-2.5' : '',
        )}
      >
      {depth > 0 ? (
        <span
          aria-hidden="true"
          className={cn(
            'absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border',
            bendCornerClassName,
            connectorLeftClassName,
            bendClassName,
          )}
        />
      ) : null}
      {!isLast && depth > 0 ? (
        <span
          aria-hidden="true"
          className={cn(
            'absolute top-0 border-l-[1.5px] border-border',
            'bottom-[-0.25rem]',
            connectorLeftClassName,
          )}
        />
      ) : null}

      <div className="flex items-center gap-1">
        <div
          className={cn(
            'group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-6 text-left text-sm font-normal transition-colors hover:bg-accent',
            'text-muted-foreground hover:text-foreground',
          )}
          role={isBranchExpandable ? 'button' : undefined}
          tabIndex={isBranchExpandable ? 0 : undefined}
          onClick={() => {
            if (isBranchExpandable) onToggleBranch(branchName);
            else onSelectBranch?.(branchName);
          }}
          onKeyDown={(event) => {
            if (!isBranchExpandable) return;
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onToggleBranch(branchName);
            }
          }}
        >
          {isBranchExpandable ? (
            <button
              type="button"
              aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${branchName}`}
              onPointerDown={(event) => {
                event.preventDefault();
              }}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onToggleBranch(branchName);
              }}
              className="group/chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none text-muted-foreground transition-colors hover:bg-accent"
            >
              <ChevronRight
                aria-hidden="true"
                className={cn(
                  'h-3.5 w-3.5 shrink-0 transition-transform',
                  isCheckedOut && isActiveProject ? 'text-[#38BDF2]' : 'text-muted-foreground',
                  isExpanded ? 'rotate-90' : '',
                )}
              />
            </button>
          ) : null}
          <span
            className={cn(
              'min-w-0 flex-1 break-words',
              isCheckedOut && isActiveProject ? 'font-medium text-[#38BDF2]' : 'font-normal text-muted-foreground',
            )}
          >
            {branchName}
          </span>
        </div>
      </div>

      {shouldShowCommitRows ? (
        <ul className="relative space-y-1 pl-4">
          {commitClumps.map((clump) => {
            const clumpCollapsed = clump.count > 1 && !isGridClusterOpen(clump.key);
            const visibleClumpCommits = clumpCollapsed ? [clump.lead] : clump.commits;
            return visibleClumpCommits.map((commit) => {
              const idx = visibleCommitPreviews.findIndex((candidate) => candidate.fullSha === commit.fullSha);
              const mergeTargetLabels = getMergeTargetLabels(commit.fullSha, sourceBranchName ?? branchName);
              return (
                <li key={`${branchName}:${commit.fullSha}`}>
                  <div className="flex items-start gap-1">
                    <button
                      type="button"
                      onClick={() => onSelectCommit?.(commit.fullSha)}
                      className="min-w-0 flex-1 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground"
                      title={commit.message}
                    >
                      <span className="block truncate">{commit.message}</span>
                      {mergeTargetLabels.length > 0 ? (
                        <span className="mt-0 block space-y-2">
                          {mergeTargetLabels.map((targetBranch) => (
                            <span key={`${commit.fullSha}:${targetBranch}`} className="block truncate">
                              <span>Merged to </span>
                              <span className="font-medium text-muted-foreground">{targetBranch}</span>
                            </span>
                          ))}
                        </span>
                      ) : null}
                    </button>
                    {clump.count > 1 && commit.fullSha === clump.lead.fullSha ? (
                      <button
                        type="button"
                      data-clump-toggle-id={`${branchName}:${clump.lead.fullSha}`}
                      onClick={() => onToggleGridCluster(clump.key, `${branchName}:${clump.lead.fullSha}`)}
                      className={cn(
                        'shrink-0 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground',
                        clumpCollapsed ? '' : 'min-w-[2ch] text-center',
                      )}
                      >
                        {clumpCollapsed ? `+${Math.max(1, clump.count - 1)}` : '−'}
                      </button>
                    ) : null}
                  </div>
                  {anchoredChildrenByCommitIndex.get(idx)?.length ? (
                    <ul className="relative space-y-1">
                      {anchoredChildrenByCommitIndex.get(idx)!.map((childName, childIdx, list) => (
                        <BranchRows
                          key={childName}
                          branchName={childName}
                          depth={depth + 1}
                          isLast={childIdx === list.length - 1 && unanchoredChildren.length === 0}
                          branchByName={branchByName}
                          branchCommitPreviews={branchCommitPreviews}
                          childNamesByParent={childNamesByParent}
                          branchAnchorShaByName={branchAnchorShaByName}
                          expandedBranchNames={expandedBranchNames}
                          onToggleBranch={onToggleBranch}
                          checkedOutBranchName={checkedOutBranchName}
                          ancestors={nextAncestors}
                          showCommits={showCommits}
                          getMergeTargetLabels={getMergeTargetLabels}
                          sourceBranchName={childName}
                          clusterKeyByCommitId={clusterKeyByCommitId}
                          isGridClusterOpen={isGridClusterOpen}
                          onToggleGridCluster={onToggleGridCluster}
                          onSelectCommit={onSelectCommit}
                          onSelectBranch={onSelectBranch}
                          isActiveProject={isActiveProject}
                        />
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            });
          })}
        </ul>
      ) : null}

      {hasChildBranches && isExpanded && unanchoredChildren.length > 0 ? (
        <ul className="relative space-y-1">
          {unanchoredChildren.map((childName, idx) => (
            <BranchRows
              key={childName}
              branchName={childName}
              depth={depth + 1}
              isLast={idx === unanchoredChildren.length - 1}
              branchByName={branchByName}
              branchCommitPreviews={branchCommitPreviews}
              childNamesByParent={childNamesByParent}
              branchAnchorShaByName={branchAnchorShaByName}
              expandedBranchNames={expandedBranchNames}
              onToggleBranch={onToggleBranch}
              checkedOutBranchName={checkedOutBranchName}
              ancestors={nextAncestors}
              showCommits={showCommits}
              getMergeTargetLabels={getMergeTargetLabels}
              sourceBranchName={childName}
              clusterKeyByCommitId={clusterKeyByCommitId}
              isGridClusterOpen={isGridClusterOpen}
              onToggleGridCluster={onToggleGridCluster}
              onSelectCommit={onSelectCommit}
              onSelectBranch={onSelectBranch}
              isActiveProject={isActiveProject}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

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

export default function DenseBranchSidebar({
  projects,
  activeProjectPath,
  onSelectProject,
  onAddProject,
  onRemoveProject,
  onRevealProjectInFinder,
  onReorderProjects,
  projectLoading = false,
  projectError = null,
  checkedOutRef,
  manuallyOpenedClumpsByProject = {},
  manuallyClosedClumpsByProject = {},
  manuallyOpenedClumps: controlledManuallyOpenedClumps,
  manuallyClosedClumps: controlledManuallyClosedClumps,
  setManuallyOpenedClumps: controlledSetManuallyOpenedClumps,
  setManuallyClosedClumps: controlledSetManuallyClosedClumps,
  gridLayoutModel,
  onSelectCommit,
  onSelectBranch,
  showCommits,
  className,
  style,
  collapsed = false,
}: Props) {
  const asideRef = useRef<HTMLElement | null>(null);
  const scrollBodyRef = useRef<HTMLDivElement | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const raw = window.localStorage.getItem(EXPANDED_PROJECTS_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const next = new Set<string>();
          for (const value of parsed) {
            if (typeof value === 'string') next.add(value);
          }
          return next;
        }
      }
    } catch {
      // ignore storage failures
    }
    return new Set(projects.map((project) => project.path));
  });
  const [expandedBranchNamesByProject, setExpandedBranchNamesByProject] = useState<Record<string, Set<string>>>({});
  const [localManuallyOpenedClumps, setLocalManuallyOpenedClumps] = useState<Set<string>>(() => new Set());
  const [localManuallyClosedClumps, setLocalManuallyClosedClumps] = useState<Set<string>>(() => new Set());
  const [openProjectMenuPath, setOpenProjectMenuPath] = useState<string | null>(null);
  const manuallyOpenedClumps = controlledManuallyOpenedClumps ?? localManuallyOpenedClumps;
  const manuallyClosedClumps = controlledManuallyClosedClumps ?? localManuallyClosedClumps;
  const setManuallyOpenedClumps = controlledSetManuallyOpenedClumps ?? setLocalManuallyOpenedClumps;
  const setManuallyClosedClumps = controlledSetManuallyClosedClumps ?? setLocalManuallyClosedClumps;
  const [pendingClumpFocusTargetId, setPendingClumpFocusTargetId] = useState<string | null>(null);
  const [pendingClumpAnchor, setPendingClumpAnchor] = useState<{ id: string; topWithinScrollBody: number } | null>(null);
  const [dragPendingProjectPath, setDragPendingProjectPath] = useState<string | null>(null);
  const [draggingProjectPath, setDraggingProjectPath] = useState<string | null>(null);
  const [dragPreviewIndex, setDragPreviewIndex] = useState<number | null>(null);
  const [dragGhostRect, setDragGhostRect] = useState<{ x: number; y: number; width: number } | null>(null);
  const [openProjectMenuCoords, setOpenProjectMenuCoords] = useState<{ top: number; right: number } | null>(null);
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
  const dragRafRef = useRef<number | null>(null);
  const persistExpandedProjects = (next: Set<string>) => {
    try {
      window.localStorage.setItem(EXPANDED_PROJECTS_STORAGE_KEY, JSON.stringify(Array.from(next)));
    } catch {
      // ignore storage failures
    }
  };
  const persistExpandedBranches = (next: Record<string, Set<string>>) => {
    try {
      const serialized = Object.fromEntries(
        Object.entries(next).map(([projectPath, branchNames]) => [projectPath, Array.from(branchNames)]),
      );
      window.localStorage.setItem(EXPANDED_BRANCHES_STORAGE_KEY, JSON.stringify(serialized));
    } catch {
      // ignore storage failures
    }
  };
  useEffect(() => {
    persistExpandedProjects(expandedProjects);
  }, [expandedProjects]);
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(EXPANDED_BRANCHES_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return;
      const next: Record<string, Set<string>> = {};
      for (const [projectPath, branchNames] of Object.entries(parsed as Record<string, unknown>)) {
        if (!Array.isArray(branchNames)) continue;
        const set = new Set<string>();
        for (const value of branchNames) {
          if (typeof value === 'string') set.add(value);
        }
        next[projectPath] = set;
      }
      setExpandedBranchNamesByProject(next);
    } catch {
      // ignore storage failures
    }
  }, []);
  useEffect(() => {
    persistExpandedBranches(expandedBranchNamesByProject);
  }, [expandedBranchNamesByProject]);
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
  }, []);

  useEffect(() => {
    if (!dragPendingProjectPath) return;
    const handlePointerMove = (event: PointerEvent) => {
      const dragState = dragStateRef.current;
      if (!dragState || !dragState.active) return;
      if (Math.abs(event.clientX - dragState.startX) <= 4 && Math.abs(event.clientY - dragState.startY) <= 4) return;
      if (dragRafRef.current != null) return;
      dragRafRef.current = window.requestAnimationFrame(() => {
        dragRafRef.current = null;
        const currentDragState = dragStateRef.current;
        if (!currentDragState || !currentDragState.active) return;
        if (Math.abs(event.clientX - currentDragState.startX) > 4 || Math.abs(event.clientY - currentDragState.startY) > 4) {
          currentDragState.moved = true;
          setDraggingProjectPath(currentDragState.path);
        }
        setDragGhostRect({
          x: event.clientX - currentDragState.offsetX,
          y: event.clientY - currentDragState.offsetY,
          width: currentDragState.width,
        });

        const rows = Array.from(scrollBodyRef.current?.querySelectorAll<HTMLElement>('[data-project-path]') ?? []);
        const targetRows = rows.filter((row) => row.dataset.projectPath && row.dataset.projectPath !== currentDragState.path);
        let nextPreviewIndex = targetRows.length;
        if (targetRows.length > 0) {
          for (let index = 0; index < targetRows.length; index += 1) {
            const rect = targetRows[index]!.getBoundingClientRect();
            const midpoint = rect.top + rect.height / 2;
            if (event.clientY < midpoint) {
              nextPreviewIndex = index;
              break;
            }
          }
        }
        setDragPreviewIndex(nextPreviewIndex);
      });
    };
    const handlePointerUp = () => {
      const dragState = dragStateRef.current;
      dragStateRef.current = null;
      if (dragRafRef.current != null) {
        window.cancelAnimationFrame(dragRafRef.current);
        dragRafRef.current = null;
      }
      if (!dragState) {
        clearDragPreview();
        return;
      }
      if (!dragState.moved) {
        clearDragPreview();
        return;
      }
      suppressProjectSelectRef.current = true;
      const currentOrder = orderedProjects.map((project) => project.path);
      const fromIndex = currentOrder.indexOf(dragState.path);
      if (fromIndex < 0) {
        clearDragPreview();
        return;
      }
      const previewIndex = dragPreviewIndex;
      if (previewIndex == null) {
        clearDragPreview();
        return;
      }
      const nextOrder = currentOrder.filter((path) => path !== dragState.path);
      const boundedIndex = Math.max(0, Math.min(previewIndex, nextOrder.length));
      nextOrder.splice(boundedIndex, 0, dragState.path);
      commitProjectOrder(nextOrder);
      clearDragPreview();
      window.requestAnimationFrame(() => {
        suppressProjectSelectRef.current = false;
        setOpenProjectMenuPath(null);
      });
    };
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [
    clearDragPreview,
    commitProjectOrder,
    dragPendingProjectPath,
    dragPreviewIndex,
    orderedProjects,
  ]);

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

  const defaultCollapsedClumps = gridLayoutModel?.defaultCollapsedClumps ?? new Set<string>();
  const isGridClusterOpen = (clusterKey: string): boolean =>
    manuallyOpenedClumps.has(clusterKey) ||
    (!defaultCollapsedClumps.has(clusterKey) && !manuallyClosedClumps.has(clusterKey));
  const handleToggleGridCluster = (clumpKey: string, focusTargetId: string) => {
    const host = asideRef.current;
    const scrollBody = scrollBodyRef.current;
    if (host && scrollBody) {
      const selector = `[data-clump-toggle-id="${focusTargetId}"]`;
      const toggleButton = host.querySelector<HTMLButtonElement>(selector);
      if (toggleButton) {
        const topWithinScrollBody =
          toggleButton.getBoundingClientRect().top - scrollBody.getBoundingClientRect().top;
        setPendingClumpAnchor({ id: focusTargetId, topWithinScrollBody });
      } else {
        setPendingClumpAnchor(null);
      }
    } else {
      setPendingClumpAnchor(null);
    }
    setPendingClumpFocusTargetId(focusTargetId);
    setManuallyOpenedClumps((previousOpened) => {
      const nextOpened = new Set(previousOpened);
      const currentlyOpen = isGridClusterOpen(clumpKey);
      setManuallyClosedClumps((previousClosed) => {
        const nextClosed = new Set(previousClosed);
        if (currentlyOpen) {
          nextOpened.delete(clumpKey);
          nextClosed.add(clumpKey);
        } else {
          nextClosed.delete(clumpKey);
          nextOpened.add(clumpKey);
        }
        return nextClosed;
      });
      return nextOpened;
    });
  };
  useLayoutEffect(() => {
    if (!pendingClumpFocusTargetId) return;
    const host = asideRef.current;
    const scrollBody = scrollBodyRef.current;
    if (!host || !scrollBody) return;
    const selector = `[data-clump-toggle-id="${pendingClumpFocusTargetId}"]`;
    const toggleButton = host.querySelector<HTMLButtonElement>(selector);
    if (!toggleButton) return;
    if (pendingClumpAnchor?.id === pendingClumpFocusTargetId) {
      const nextTopWithinScrollBody =
        toggleButton.getBoundingClientRect().top - scrollBody.getBoundingClientRect().top;
      const delta = nextTopWithinScrollBody - pendingClumpAnchor.topWithinScrollBody;
      if (Number.isFinite(delta) && delta !== 0) {
        scrollBody.scrollTop += delta;
      }
    }
    // Keep keyboard focus on same toggle after rerender.
    toggleButton.focus({ preventScroll: true });
    setPendingClumpFocusTargetId(null);
    setPendingClumpAnchor(null);
  }, [
    manuallyOpenedClumps,
    manuallyClosedClumps,
    pendingClumpFocusTargetId,
    pendingClumpAnchor,
  ]);
  const handleToggleBranch = (projectPath: string, branchName: string) => {
    setExpandedBranchNamesByProject((previous) => {
      const current = previous[projectPath] ?? new Set<string>();
      const next = new Set(current);
      if (next.has(branchName)) next.delete(branchName);
      else next.add(branchName);
      const nextState = { ...previous, [projectPath]: next };
      persistExpandedBranches(nextState);
      return nextState;
    });
  };

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

  const projectRenderDataByPath = useMemo(() => {
    const next = new Map<string, {
      rootBranchNames: string[];
      branchByName: Map<string, Branch>;
      branchCommitPreviewsFromLayout: Record<string, BranchCommitPreview[]>;
      childNamesByParent: Map<string, string[]>;
      branchAnchorShaByName: Map<string, string | null>;
      checkedOutBranchName: string | null;
      clusterKeyByCommitId: Map<string, string>;
      getMergeTargetLabels: (sha: string, sourceBranchName: string) => string[];
      isGridClusterOpen: (clusterKey: string) => boolean;
    }>();

    for (const project of projects) {
      const visualState = deriveRepoVisualState({
        branches: project.branches,
        mergeNodes: project.mergeNodes,
        directCommits: project.directCommits,
        unpushedDirectCommits: project.unpushedDirectCommits,
        defaultBranch: project.defaultBranch,
        branchCommitPreviews: project.branchCommitPreviews,
        branchUniqueAheadCounts: project.branchUniqueAheadCounts,
        checkedOutRef: project.checkedOutRef,
        stashes: project.stashes,
        manuallyOpenedClumps: manuallyOpenedClumpsByProject[project.path] ?? new Set<string>(),
        manuallyClosedClumps: manuallyClosedClumpsByProject[project.path] ?? new Set<string>(),
      });

      const branchesWithDefault: Branch[] = visualState.enrichedBranches.some((branch) => branch.name === project.defaultBranch)
        ? visualState.enrichedBranches
        : [{
            name: project.defaultBranch,
            commitsAhead: 0,
            commitsBehind: 0,
            lastCommitDate: new Date(0).toISOString(),
            lastCommitAuthor: 'Unknown',
            status: 'unknown',
            remoteSyncStatus: 'on-github',
            unpushedCommits: 0,
            headSha: '',
            parentBranch: undefined,
            divergedFromSha: undefined,
            divergedFromDate: undefined,
          } as Branch, ...visualState.enrichedBranches];
      const rowByVisualId = new Map<string, number>(visualState.sharedGridLayoutModel.nodes.map((node) => [node.commit.visualId, node.row]));
      const branchCommitPreviewsFromLayout: Record<string, BranchCommitPreview[]> = {};
      for (const commit of visualState.sharedGridLayoutModel.allCommits) {
        const bucket = branchCommitPreviewsFromLayout[commit.branchName] ?? [];
        bucket.push({
          fullSha: commit.id,
          sha: commit.id.slice(0, 7),
          parentSha: commit.parentSha ?? null,
          message: commit.message,
          author: commit.author,
          date: commit.date,
          kind: commit.kind ?? 'commit',
        });
        branchCommitPreviewsFromLayout[commit.branchName] = bucket;
      }
      for (const branchName of Object.keys(branchCommitPreviewsFromLayout)) {
        branchCommitPreviewsFromLayout[branchName] = branchCommitPreviewsFromLayout[branchName]!.sort((left, right) => {
          const leftTime = new Date(left.date).getTime();
          const rightTime = new Date(right.date).getTime();
          if (leftTime !== rightTime) return leftTime - rightTime;
          const leftRow = rowByVisualId.get(`${branchName}:${left.fullSha}`) ?? Number.MAX_SAFE_INTEGER;
          const rightRow = rowByVisualId.get(`${branchName}:${right.fullSha}`) ?? Number.MAX_SAFE_INTEGER;
          if (leftRow !== rightRow) return leftRow - rightRow;
          return left.fullSha.localeCompare(right.fullSha);
        });
      }
      const mergeTargetLabelsBySourceAndCommitSha =
        visualState.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha ?? new Map<string, Map<string, Set<string>>>();
      const getMergeTargetLabels = (sha: string, sourceBranchName: string): string[] => {
        const byCommitSha = mergeTargetLabelsBySourceAndCommitSha.get(sourceBranchName);
        if (!byCommitSha) return [];
        for (const [commitSha, labels] of byCommitSha.entries()) {
          if (!shaMatchesGitRef(sha, commitSha)) continue;
          return Array.from(labels).sort();
        }
        return [];
      };
      const childNamesByParent = buildChildBranchesByParent(branchesWithDefault, project.defaultBranch);
      const rootBranchNames = buildRootNames(branchesWithDefault, project.defaultBranch, childNamesByParent);
      const branchByName = new Map(branchesWithDefault.map((branch) => [branch.name, branch]));
      const branchAnchorShaByName = new Map<string, string | null>();
      for (const branch of branchesWithDefault) {
        const fromModel = visualState.sharedGridLayoutModel.firstBranchCommitByName.get(branch.name)?.parentSha ?? null;
        const resolved = fromModel ?? null;
        branchAnchorShaByName.set(branch.name, resolved);
      }
      const defaultCollapsedClumps = visualState.sharedGridLayoutModel.defaultCollapsedClumps ?? new Set<string>();
      const localManuallyOpenedClumps = manuallyOpenedClumpsByProject[project.path] ?? new Set<string>();
      const localManuallyClosedClumps = manuallyClosedClumpsByProject[project.path] ?? new Set<string>();
      const isGridClusterOpen = (clusterKey: string): boolean =>
        localManuallyOpenedClumps.has(clusterKey) ||
        (!defaultCollapsedClumps.has(clusterKey) && !localManuallyClosedClumps.has(clusterKey));

      next.set(project.path, {
        rootBranchNames,
        branchByName,
        branchCommitPreviewsFromLayout,
        childNamesByParent,
        branchAnchorShaByName,
        checkedOutBranchName: project.checkedOutRef?.branchName ?? null,
        clusterKeyByCommitId: visualState.sharedGridLayoutModel.clusterKeyByCommitId ?? new Map<string, string>(),
        getMergeTargetLabels,
        isGridClusterOpen,
      });
    }

    return next;
  }, [activeProjectPath, manuallyClosedClumpsByProject, manuallyOpenedClumpsByProject, projects]);

  const renderProject = (
    project: Props['projects'][number],
    options: { ghostMode?: boolean; hideLive?: boolean } = {},
  ) => {
    const ghostMode = options.ghostMode ?? false;
    const hideLive = options.hideLive ?? false;
    const isActive = pathsProbablyEqual(project.path, activeProjectPath);
    const isExpanded = expandedProjects.has(project.path);
    const projectTreeLoaded = project.treeLoaded ?? project.branches.length > 0;
    const projectRender = projectRenderDataByPath.get(project.path);
    const expandedBranchNamesForProject = expandedBranchNamesByProject[project.path] ??
      (projectRender
        ? inferDefaultExpanded(
            projectRender.rootBranchNames,
            projectRender.childNamesByParent,
            checkedOutRef,
            project.defaultBranch,
          )
        : new Set<string>());
    const isDraggingProject = draggingProjectPath === project.path;
    const isActiveProject = pathsProbablyEqual(project.path, activeProjectPath);
    return (
      <motion.div
        key={project.path}
        layout="position"
        transition={{ duration: 0.12, ease: 'easeOut' }}
        data-project-path={project.path}
        data-active-project={isActiveProject ? 'true' : 'false'}
        className={cn(
          'project-row relative z-10 flex flex-col gap-1 text-muted-foreground',
          isExpanded && projectRender ? 'mb-2.5' : '',
        )}
      >
        {dragPreviewIndex !== null && draggingProjectPath !== project.path && renderedProjects[dragPreviewIndex]?.path === project.path ? (
          <div className="h-px" aria-hidden="true">
            <div className="mx-1 h-px bg-primary/60" />
          </div>
        ) : null}
        <div className={cn('relative z-0 px-1', hideLive ? 'pointer-events-none opacity-0' : '')}>
          <div
            className={cn(
              ghostMode
                ? 'group flex w-full items-center gap-0 rounded-lg px-0 h-6'
                : 'group sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-background px-0 h-6 transition-all duration-100 ease-out hover:bg-accent cursor-grab active:cursor-grabbing',
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
                'project-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent text-inherit',
                ghostMode ? 'pointer-events-none' : '',
              )}
            >
              <ProjectIcon open={isExpanded} />
            </button>
          <span
            className={cn(
              'project-name min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors',
              'font-normal',
              'text-inherit',
            )}
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
                className={cn('pr-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md opacity-0 hover:bg-accent group-hover:opacity-100 text-inherit', ghostMode ? 'pointer-events-none' : '')}
              >
                <MoreHorizontal className="h-4 w-4 shrink-0" />
              </button>
            {openProjectMenuPath === project.path && !ghostMode && openProjectMenuCoords && typeof document !== 'undefined'
              ? createPortal(
                  <div
                    role="menu"
                    className="fixed z-[10000] inline-flex w-max flex-col overflow-hidden rounded-md border border-[#E7E5DE] bg-background p-1"
                    style={{ top: `${openProjectMenuCoords.top}px`, right: `${openProjectMenuCoords.right}px` }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setOpenProjectMenuPath(null);
                        void onRevealProjectInFinder(project.path);
                      }}
                      className="flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      Open in Finder
                    </button>
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setOpenProjectMenuPath(null);
                        onRemoveProject(project.path);
                      }}
                      className="flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium text-red-600 transition-colors hover:bg-red-100 hover:text-red-600 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:text-red-400"
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
            projectTreeLoaded && projectRender ? (
              <ul className={cn('relative z-0 space-y-1 pt-0', ghostMode ? 'opacity-70' : '')}>
                {projectRender.rootBranchNames.map((branchName, idx) => (
                  <BranchRows
                    key={`${project.path}:${branchName}`}
                    branchName={branchName}
                    depth={0}
                    isLast={idx === projectRender.rootBranchNames.length - 1}
                    branchByName={projectRender.branchByName}
                    branchCommitPreviews={projectRender.branchCommitPreviewsFromLayout}
                    childNamesByParent={projectRender.childNamesByParent}
                    branchAnchorShaByName={projectRender.branchAnchorShaByName}
                    expandedBranchNames={expandedBranchNamesForProject}
                    onToggleBranch={(branchName) => handleToggleBranch(project.path, branchName)}
                    checkedOutBranchName={projectRender.checkedOutBranchName}
                    ancestors={new Set()}
                    showCommits={showCommits}
                    getMergeTargetLabels={projectRender.getMergeTargetLabels}
                    sourceBranchName={branchName}
                    clusterKeyByCommitId={projectRender.clusterKeyByCommitId}
                    isGridClusterOpen={projectRender.isGridClusterOpen}
                    onToggleGridCluster={handleToggleGridCluster}
                    onSelectCommit={async (sha) => {
                      if (!isActive) await onSelectProject(project.path);
                      onSelectCommit?.(sha);
                    }}
                    onSelectBranch={async (branchName) => {
                      if (!isActive) await onSelectProject(project.path);
                      onSelectBranch?.(branchName);
                    }}
                    isActiveProject={isActiveProject}
                  />
                ))}
              </ul>
            ) : (
              <p className={cn('px-2 py-2 text-xs text-muted-foreground', ghostMode ? 'opacity-70' : '')}>
                Loading branch tree...
              </p>
            )
          ) : null}
        </div>
      </motion.div>
    );
  };

  return (
    <aside
      ref={asideRef}
      aria-label="Dense branch sidebar"
      className={cn('pointer-events-auto relative z-[120] h-full select-none overflow-hidden', className)}
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
              className="window-no-drag group flex w-full items-center gap-0 rounded-lg px-0 h-6 text-muted-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors group-hover:bg-accent">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </span>
              <span className="min-w-0 flex-1 truncate pl-0 text-left text-sm font-normal text-muted-foreground">
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
          {renderProject(projects.find((project) => project.path === draggingProjectPath) ?? orderedProjects.find((project) => project.path === draggingProjectPath)!, { ghostMode: true })}
        </div>
      ) : null}
    </aside>
  );
}
