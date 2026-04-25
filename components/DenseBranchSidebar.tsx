import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, Dispatch, SetStateAction } from 'react';
import type { Branch, BranchCommitPreview, CheckedOutRef, DirectCommit, GitStashEntry, MergeNode, WorktreeInfo } from '../types';
import { cn, shaMatchesGitRef } from './grid/mapGridUtils';
import type { BranchGridLayoutModel } from './grid/branchGridLayoutModel';
import { deriveRepoVisualState } from '../src/repoVisualState';

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
  projectLoading?: boolean;
  projectError?: string | null;
  branches: Branch[];
  defaultBranch: string;
  checkedOutRef?: CheckedOutRef | null;
  manuallyOpenedClumps?: Set<string>;
  manuallyClosedClumps?: Set<string>;
  setManuallyOpenedClumps?: Dispatch<SetStateAction<Set<string>>>;
  setManuallyClosedClumps?: Dispatch<SetStateAction<Set<string>>>;
  gridLayoutModel?: BranchGridLayoutModel;
  onSelectCommit?: (sha: string) => void;
  onSelectBranch?: (branchName: string) => void;
  showCommits: boolean;
  onToggleShowCommits: () => void;
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
  const bendClassName = 'top-[-0.2rem] h-4.5 w-[10px]';
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
        'relative',
        depth > 0 ? 'pl-4' : 'pl-0',
        depth === 0 && !isLast ? (isExpanded ? 'mb-5' : 'mb-1') : '',
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
            'bottom-[-0.5rem]',
            connectorLeftClassName,
          )}
        />
      ) : null}

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => {
            onSelectBranch?.(branchName);
          }}
          className={cn(
            'group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-7 text-left text-sm font-normal transition-colors hover:bg-accent',
            isCheckedOut ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
          )}
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
              <span
                aria-hidden="true"
                className={cn(
                  'inline-block transition-transform',
                  isExpanded ? 'rotate-90' : '',
                )}
              >
                ▶
              </span>
            </button>
          ) : null}
          <span className="min-w-0 break-words">{branchName}</span>
        </button>
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
                      className="min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground"
                      title={commit.message}
                    >
                      <span className="block truncate">{commit.message}</span>
                      {mergeTargetLabels.length > 0 ? (
                        <span className="mt-0 block space-y-0.5">
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
                        'shrink-0 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground',
                        clumpCollapsed ? '' : 'min-w-[2ch] text-center',
                      )}
                      >
                        {clumpCollapsed ? `+${Math.max(1, clump.count - 1)}` : '−'}
                      </button>
                    ) : null}
                  </div>
                  {anchoredChildrenByCommitIndex.get(idx)?.length ? (
                    <ul className="relative mb-1.75 space-y-0">
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
        <ul className="relative mb-1.75 space-y-1.75">
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
  projectLoading = false,
  projectError = null,
  branches,
  defaultBranch,
  checkedOutRef,
  manuallyOpenedClumps: controlledManuallyOpenedClumps,
  manuallyClosedClumps: controlledManuallyClosedClumps,
  setManuallyOpenedClumps: controlledSetManuallyOpenedClumps,
  setManuallyClosedClumps: controlledSetManuallyClosedClumps,
  gridLayoutModel,
  onSelectCommit,
  onSelectBranch,
  showCommits,
  onToggleShowCommits,
  className,
  style,
  collapsed = false,
}: Props) {
  const asideRef = useRef<HTMLElement | null>(null);
  const scrollBodyRef = useRef<HTMLDivElement | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(() => new Set());
  const [localManuallyOpenedClumps, setLocalManuallyOpenedClumps] = useState<Set<string>>(() => new Set());
  const [localManuallyClosedClumps, setLocalManuallyClosedClumps] = useState<Set<string>>(() => new Set());
  const manuallyOpenedClumps = controlledManuallyOpenedClumps ?? localManuallyOpenedClumps;
  const manuallyClosedClumps = controlledManuallyClosedClumps ?? localManuallyClosedClumps;
  const setManuallyOpenedClumps = controlledSetManuallyOpenedClumps ?? setLocalManuallyOpenedClumps;
  const setManuallyClosedClumps = controlledSetManuallyClosedClumps ?? setLocalManuallyClosedClumps;
  const [pendingClumpFocusTargetId, setPendingClumpFocusTargetId] = useState<string | null>(null);
  const [pendingClumpAnchor, setPendingClumpAnchor] = useState<{ id: string; topWithinScrollBody: number } | null>(null);
  const branchesWithDefault = useMemo<Branch[]>(() => {
    if (branches.some((branch) => branch.name === defaultBranch)) return branches;
    const syntheticDefault: Branch = {
      name: defaultBranch,
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
    };
    return [syntheticDefault, ...branches];
  }, [branches, defaultBranch]);
  const childNamesByParent = useMemo(
    () => buildChildBranchesByParent(branchesWithDefault, defaultBranch),
    [branchesWithDefault, defaultBranch],
  );
  const rootBranchNames = useMemo(
    () => buildRootNames(branchesWithDefault, defaultBranch, childNamesByParent),
    [branchesWithDefault, defaultBranch, childNamesByParent],
  );
  const [expandedBranchNames, setExpandedBranchNames] = useState<Set<string>>(() =>
    inferDefaultExpanded(rootBranchNames, childNamesByParent, checkedOutRef, defaultBranch),
  );
  useEffect(() => {
    setExpandedBranchNames((previous) => {
      const inferred = inferDefaultExpanded(rootBranchNames, childNamesByParent, checkedOutRef, defaultBranch);
      const next = new Set(previous);
      for (const name of inferred) next.add(name);
      return next;
    });
  }, [rootBranchNames, childNamesByParent, checkedOutRef, defaultBranch]);
  useEffect(() => {
    setExpandedProjects((previous) => {
      const next = new Set(previous);
      for (const project of projects) next.add(project.path);
      return next;
    });
  }, [projects]);

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
  const handleToggleBranch = (branchName: string) => {
    setExpandedBranchNames((previous) => {
      const next = new Set(previous);
      if (next.has(branchName)) next.delete(branchName);
      else next.add(branchName);
      return next;
    });
  };

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
      const isActive = project.path === activeProjectPath;
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
        manuallyOpenedClumps: isActive ? manuallyOpenedClumps : new Set<string>(),
        manuallyClosedClumps: isActive ? manuallyClosedClumps : new Set<string>(),
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
      const localManuallyOpenedClumps = isActive ? manuallyOpenedClumps : new Set<string>();
      const localManuallyClosedClumps = isActive ? manuallyClosedClumps : new Set<string>();
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
  }, [activeProjectPath, manuallyClosedClumps, manuallyOpenedClumps, projects]);

  return (
    <aside
      ref={asideRef}
      aria-label="Dense branch sidebar"
      className={cn('pointer-events-auto relative h-full select-none overflow-hidden', className)}
      style={style}
    >
      <header data-tauri-drag-region className="absolute inset-x-0 top-0 z-80 flex h-12 items-start px-2.5 pt-2.25">
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={onAddProject}
            disabled={projectLoading}
            aria-label="Add Repo"
            className="window-no-drag flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
          >
            <img src="/icon-projectNew.svg" alt="" aria-hidden="true" className="h-4 w-4 shrink-0" />
          </button>
          <button
            type="button"
            onClick={onToggleShowCommits}
            className="window-no-drag shrink-0 rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
          >
            {showCommits ? 'Hide Commits' : 'Show Commits'}
          </button>
        </div>
      </header>
      <div className="flex h-full min-h-0 flex-col">
        {projectError && (
          <div className="px-2.5 pb-3">
            <p className="rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400">
              {projectError}
            </p>
          </div>
        )}
        <div
          ref={scrollBodyRef}
          className={cn('min-h-0 flex-1 space-y-8 overflow-y-auto px-2.5 pr-4', collapsed ? 'opacity-0 pointer-events-none' : '')}
          style={{ scrollbarGutter: 'stable both-edges' }}
        >
          {projects.map((project) => {
            const isActive = project.path === activeProjectPath;
            const isExpanded = expandedProjects.has(project.path);
            const projectTreeLoaded = project.treeLoaded ?? project.branches.length > 0;
            const projectRender = projectRenderDataByPath.get(project.path);
            const expandedBranchNamesForProject = isActive
              ? expandedBranchNames
              : new Set(projectRender ? Array.from(projectRender.branchByName.keys()) : []);
            return (
              <div
                key={project.path}
                className={cn(
                  'relative z-0',
                  isExpanded && projectRender ? 'mb-5' : 'mb-1',
                )}
              >
                <div className="relative z-0 px-1">
                  <div
                    className={cn(
                      'sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-background px-0 py-1 transition-colors hover:bg-accent',
                      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setExpandedProjects((previous) => {
                          const next = new Set(previous);
                          if (next.has(project.path)) next.delete(project.path);
                          else next.add(project.path);
                          return next;
                      });
                      }}
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${project.name}`}
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent"
                    >
                      <ProjectIcon open={isExpanded} />
                    </button>
                    <button
                      type="button"
                      onClick={() => { void onSelectProject(project.path); }}
                      className={cn(
                        'min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors',
                        'font-normal',
                        isActive ? 'text-primary' : 'text-muted-foreground',
                      )}
                    >
                      {project.name}
                    </button>
                  </div>
                  {isExpanded ? (
                    projectTreeLoaded && projectRender ? (
                      <ul className="relative z-0 space-y-0 pt-0">
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
                            onToggleBranch={handleToggleBranch}
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
                          />
                        ))}
                      </ul>
                    ) : (
                      <p className="px-2 py-2 text-xs text-muted-foreground">
                        Loading branch tree...
                      </p>
                    )
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
