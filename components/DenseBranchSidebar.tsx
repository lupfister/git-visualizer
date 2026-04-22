import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { Branch, BranchCommitPreview, CheckedOutRef, DirectCommit, MergeNode } from '../types';
import { cn, shaMatchesGitRef } from './grid/mapGridUtils';

type Props = {
  branches: Branch[];
  defaultBranch: string;
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
  directCommits?: DirectCommit[];
  mergeNodes?: MergeNode[];
  checkedOutRef?: CheckedOutRef | null;
  onSelectCommit?: (sha: string) => void;
  onSelectBranch?: (branchName: string) => void;
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

function clusterByForkPoints<T>(entries: T[], forkIdx: Set<number>): T[][] {
  const clusters: T[][] = [];
  let current: T[] = [];
  entries.forEach((entry, index) => {
    current.push(entry);
    if (forkIdx.has(index)) {
      clusters.push(current);
      current = [];
    }
  });
  if (current.length > 0) clusters.push(current);
  return clusters;
}

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
  openedCommitClumpKeys,
  onToggleCommitClump,
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
  openedCommitClumpKeys: Set<string>;
  onToggleCommitClump: (clumpKey: string, focusTargetId: string) => void;
  onSelectCommit?: (sha: string) => void;
  onSelectBranch?: (branchName: string) => void;
}) {
  if (ancestors.has(branchName)) return null;
  const branch = branchByName.get(branchName);
  if (!branch) return null;

  const childBranchNames = childNamesByParent.get(branchName) ?? [];
  const hasChildBranches = childBranchNames.length > 0;
  const commitPreviews = useMemo(
    () =>
      [...(branchCommitPreviews[branchName] ?? [])].sort(
        (left, right) => new Date(left.date).getTime() - new Date(right.date).getTime(),
      ),
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
    const forkIdx = new Set<number>();
    visibleCommitPreviews.forEach((commit, idx) => {
      if (anchoredChildrenByCommitIndex.has(idx)) forkIdx.add(idx);
      if (commit.kind === 'uncommitted' || commit.kind === 'stash' || commit.fullSha === 'WORKING_TREE' || commit.fullSha.startsWith('STASH:')) {
        if (idx > 0) forkIdx.add(idx - 1);
        forkIdx.add(idx);
      }
    });
    return clusterByForkPoints(visibleCommitPreviews, forkIdx).map((cluster, clusterIndex) => ({
      key: `sidebar-clump-${branchName}-${cluster[0]!.fullSha}-${cluster[cluster.length - 1]!.fullSha}-${clusterIndex}`,
      commits: cluster,
      count: cluster.length,
      lead: cluster[cluster.length - 1]!,
    }));
  }, [anchoredChildrenByCommitIndex, branchName, showCommits, visibleCommitPreviews]);

  return (
    <li className="relative pl-4">
      {depth > 0 ? (
        <span
          aria-hidden="true"
          className="absolute left-[0.35rem] top-[-0.3rem] h-4.5 w-3 rounded-bl-md border-b-[1.5px] border-l-[1.5px] border-border/60"
        />
      ) : null}
      {!isLast ? (
        <span aria-hidden="true" className="absolute left-[0.35rem] top-0 bottom-[-1rem] border-l-[1.5px] border-border/50" />
      ) : null}

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => {
            if (isBranchExpandable) onToggleBranch(branchName);
            onSelectBranch?.(branchName);
          }}
          className={cn(
            'group flex min-w-0 flex-1 items-center gap-1.5 rounded-md px-1 py-0.5 text-left text-sm transition-colors hover:bg-accent',
            isCheckedOut ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {isBranchExpandable ? (
            <span
              className={cn(
                'inline-block text-[10px] text-muted-foreground transition-transform',
                isExpanded ? 'rotate-90' : '',
              )}
            >
              ▶
            </span>
          ) : null}
          <span className={cn('break-words', isCheckedOut ? 'font-medium text-foreground' : 'font-normal')}>
            {branchName}
          </span>
        </button>
      </div>

      {shouldShowCommitRows ? (
        <ul className="relative mt-2 space-y-1 pl-1">
          {commitClumps.map((clump) => {
            const clumpCollapsed = clump.count > 1 && !openedCommitClumpKeys.has(clump.key);
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
                      className="min-w-0 flex-1 break-words rounded-md px-1 pl-0 py-0.5 text-left text-sm leading-5 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground"
                      title={commit.message}
                    >
                      {commit.message}
                    </button>
                    {clump.count > 1 && commit.fullSha === clump.lead.fullSha ? (
                      <button
                        type="button"
                      data-clump-toggle-id={`${branchName}:${clump.lead.fullSha}`}
                      onClick={() => onToggleCommitClump(clump.key, `${branchName}:${clump.lead.fullSha}`)}
                      className={cn(
                        'shrink-0 rounded-md px-1 py-0.5 text-left text-sm leading-5 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground',
                        clumpCollapsed ? '' : 'min-w-[2ch] text-center',
                      )}
                      >
                        {clumpCollapsed ? `+${Math.max(1, clump.count - 1)}` : '−'}
                      </button>
                    ) : null}
                  </div>
                  {mergeTargetLabels.length > 0 ? (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {mergeTargetLabels.map((targetBranch) => (
                        <span
                          key={`${commit.fullSha}:${targetBranch}`}
                          className="inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground"
                        >
                          Merge to {targetBranch}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {anchoredChildrenByCommitIndex.get(idx)?.length ? (
                    <ul className="relative mt-0.5 mb-3 space-y-2">
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
                          openedCommitClumpKeys={openedCommitClumpKeys}
                          onToggleCommitClump={onToggleCommitClump}
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
        <ul className="relative mt-1 mb-3 space-y-1">
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
              openedCommitClumpKeys={openedCommitClumpKeys}
              onToggleCommitClump={onToggleCommitClump}
              onSelectCommit={onSelectCommit}
              onSelectBranch={onSelectBranch}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function DenseBranchSidebar({
  branches,
  defaultBranch,
  branchCommitPreviews,
  directCommits = [],
  mergeNodes = [],
  checkedOutRef,
  onSelectCommit,
  onSelectBranch,
}: Props) {
  const asideRef = useRef<HTMLElement | null>(null);
  const scrollBodyRef = useRef<HTMLDivElement | null>(null);
  const [showCommits, setShowCommits] = useState(true);
  const [openedCommitClumpKeys, setOpenedCommitClumpKeys] = useState<Set<string>>(() => new Set());
  const [pendingClumpFocusTargetId, setPendingClumpFocusTargetId] = useState<string | null>(null);
  const [pendingClumpAnchor, setPendingClumpAnchor] = useState<{ id: string; topWithinScrollBody: number } | null>(null);
  const sortedDirectCommits = useMemo(
    () =>
      [...directCommits].sort(
        (left, right) => new Date(left.date).getTime() - new Date(right.date).getTime(),
      ),
    [directCommits],
  );
  const mergeTargetsByParentSha = useMemo(() => {
    const byParentSha = new Map<string, Set<string>>();
    for (const mergeNode of mergeNodes) {
      const targetBranch = mergeNode.targetBranch ?? defaultBranch;
      const mergedParentShas = mergeNode.parentShas.slice(1);
      for (const parentSha of mergedParentShas) {
        if (!parentSha) continue;
        const set = byParentSha.get(parentSha) ?? new Set<string>();
        set.add(targetBranch);
        byParentSha.set(parentSha, set);
      }
    }
    return byParentSha;
  }, [mergeNodes, defaultBranch]);
  const getMergeTargetLabels = (sha: string, sourceBranchName: string): string[] => {
    const labels = new Set<string>();
    for (const [parentSha, targetLabels] of mergeTargetsByParentSha.entries()) {
      if (!shaMatchesGitRef(sha, parentSha)) continue;
      for (const label of targetLabels) {
        if (label === sourceBranchName) continue;
        labels.add(label);
      }
    }
    return Array.from(labels);
  };
  const childNamesByParent = useMemo(
    () => buildChildBranchesByParent(branches, defaultBranch),
    [branches, defaultBranch],
  );
  const rootBranchNames = useMemo(
    () => buildRootNames(branches, defaultBranch, childNamesByParent),
    [branches, defaultBranch, childNamesByParent],
  );
  const branchByName = useMemo(() => new Map(branches.map((branch) => [branch.name, branch])), [branches]);
  const branchAnchorShaByName = useMemo(
    () =>
      new Map(
        branches.map((branch) => [
          branch.name,
          branch.divergedFromSha ?? branch.createdFromSha ?? null,
        ]),
      ),
    [branches],
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

  const checkedOutBranchName = checkedOutRef?.branchName ?? null;
  const handleToggleCommitClump = (clumpKey: string, focusTargetId: string) => {
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
    setOpenedCommitClumpKeys((previous) => {
      const next = new Set(previous);
      if (next.has(clumpKey)) next.delete(clumpKey);
      else next.add(clumpKey);
      return next;
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
  }, [openedCommitClumpKeys, pendingClumpFocusTargetId, pendingClumpAnchor]);
  const handleToggleBranch = (branchName: string) => {
    setExpandedBranchNames((previous) => {
      const next = new Set(previous);
      if (next.has(branchName)) next.delete(branchName);
      else next.add(branchName);
      return next;
    });
  };

  return (
    <aside
      ref={asideRef}
      aria-label="Dense branch sidebar"
      className="pointer-events-auto h-full w-[26rem] rounded-2xl border border-border bg-card/95 p-3 shadow-sm backdrop-blur-sm"
    >
      <div className="mb-1 px-1">
        <h2 className="text-sm font-medium text-foreground">Branch Outline</h2>
        <button
          type="button"
          onClick={() => setShowCommits((value) => !value)}
          className="mt-1 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          {showCommits ? 'Hide commits' : 'Show commits'}
        </button>
      </div>
      <div ref={scrollBodyRef} className="h-[calc(100%-1.75rem)] overflow-y-auto pr-1">
        <div className="mb-1">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onSelectBranch?.(defaultBranch)}
              className={cn(
                'min-w-0 flex-1 break-words rounded-md px-1 py-0.5 text-left text-sm transition-colors hover:bg-accent',
                checkedOutBranchName === defaultBranch ? 'font-medium text-foreground' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {defaultBranch}
            </button>
            {null}
          </div>
          {showCommits && sortedDirectCommits.length > 0 ? (
            <ul className="relative mt-2 space-y-1 pl-1">
              {(() => {
                const mainForkIdx = new Set<number>();
                sortedDirectCommits.forEach((commit, idx) => {
                  const mainChildBranchNames = childNamesByParent.get(defaultBranch) ?? [];
                  const hasAnchoredBranch = mainChildBranchNames.some((branchName) => {
                    const anchorSha = branchAnchorShaByName.get(branchName);
                    if (!anchorSha) return false;
                    return shaMatchesGitRef(commit.fullSha, anchorSha) || shaMatchesGitRef(commit.sha, anchorSha);
                  });
                  if (hasAnchoredBranch) mainForkIdx.add(idx);
                  if (commit.kind === 'uncommitted' || commit.kind === 'stash' || commit.fullSha === 'WORKING_TREE' || commit.fullSha.startsWith('STASH:')) {
                    if (idx > 0) mainForkIdx.add(idx - 1);
                    mainForkIdx.add(idx);
                  }
                });
                const clusterEntries = clusterByForkPoints(sortedDirectCommits, mainForkIdx);
                const mainClumps = clusterEntries.map((cluster, index) => ({
                  key: `sidebar-clump-${defaultBranch}-${cluster[0]!.fullSha}-${cluster[cluster.length - 1]!.fullSha}-${index}`,
                  commits: cluster,
                  count: cluster.length,
                  lead: cluster[cluster.length - 1]!,
                }));
                return mainClumps.map((clump) => {
                  const clumpCollapsed = clump.count > 1 && !openedCommitClumpKeys.has(clump.key);
                  const visibleClumpCommits = clumpCollapsed ? [clump.lead] : clump.commits;
                  return visibleClumpCommits.map((commit) => {
                const mergeTargetLabels = getMergeTargetLabels(commit.fullSha, defaultBranch);
                const mainChildBranchNames = childNamesByParent.get(defaultBranch) ?? [];
                const anchoredMainChildBranchNames = mainChildBranchNames.filter((branchName) => {
                  const anchorSha = branchAnchorShaByName.get(branchName);
                  if (!anchorSha) return false;
                  return (
                    shaMatchesGitRef(commit.fullSha, anchorSha) ||
                    shaMatchesGitRef(commit.sha, anchorSha)
                  );
                });
                return (
                  <li key={`${defaultBranch}:${commit.fullSha}`}>
                    <div className="flex items-start gap-1">
                      <button
                        type="button"
                        onClick={() => onSelectCommit?.(commit.fullSha)}
                        className="min-w-0 flex-1 break-words rounded-md px-1 pl-0 py-0.5 text-left text-sm leading-5 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground"
                        title={commit.message}
                      >
                        {commit.message}
                      </button>
                      {clump.count > 1 && commit.fullSha === clump.lead.fullSha ? (
                        <button
                          type="button"
                          data-clump-toggle-id={`${defaultBranch}:${clump.lead.fullSha}`}
                          onClick={() => handleToggleCommitClump(clump.key, `${defaultBranch}:${clump.lead.fullSha}`)}
                          className={cn(
                            'shrink-0 rounded-md px-1 py-0.5 text-left text-sm leading-5 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground',
                            clumpCollapsed ? '' : 'min-w-[2ch] text-center',
                          )}
                        >
                          {clumpCollapsed ? `+${Math.max(1, clump.count - 1)}` : '−'}
                        </button>
                      ) : null}
                    </div>
                    {mergeTargetLabels.length > 0 ? (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {mergeTargetLabels.map((targetBranch) => (
                          <span
                            key={`${commit.fullSha}:${targetBranch}`}
                            className="inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground"
                          >
                            Merge to {targetBranch}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {anchoredMainChildBranchNames.length > 0 ? (
                      <ul className="relative mt-1 mb-3 space-y-2">
                        {anchoredMainChildBranchNames.map((branchName, branchIdx) => (
                          <BranchRows
                            key={branchName}
                            branchName={branchName}
                            depth={1}
                            isLast={branchIdx === anchoredMainChildBranchNames.length - 1}
                            branchByName={branchByName}
                            branchCommitPreviews={branchCommitPreviews}
                            childNamesByParent={childNamesByParent}
                            branchAnchorShaByName={branchAnchorShaByName}
                            expandedBranchNames={expandedBranchNames}
                            onToggleBranch={handleToggleBranch}
                            checkedOutBranchName={checkedOutBranchName}
                            ancestors={new Set([defaultBranch])}
                            showCommits={showCommits}
                            getMergeTargetLabels={getMergeTargetLabels}
                            sourceBranchName={branchName}
                            openedCommitClumpKeys={openedCommitClumpKeys}
                            onToggleCommitClump={handleToggleCommitClump}
                            onSelectCommit={onSelectCommit}
                            onSelectBranch={onSelectBranch}
                          />
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
                  });
                });
              })()}
            </ul>
          ) : null}
          {(() => {
            const mainChildBranchNames = childNamesByParent.get(defaultBranch) ?? [];
            if (mainChildBranchNames.length === 0) return null;
            const visibleMainCommits =
              showCommits ? sortedDirectCommits : [];
            const unanchoredMainChildren = mainChildBranchNames.filter((branchName) => {
              if (!showCommits) return true;
              const anchorSha = branchAnchorShaByName.get(branchName);
              if (!anchorSha) return true;
              return !visibleMainCommits.some((commit) => (
                shaMatchesGitRef(commit.fullSha, anchorSha) || shaMatchesGitRef(commit.sha, anchorSha)
              ));
            });
            if (unanchoredMainChildren.length === 0) return null;
            return (
              <ul className="relative mt-1 mb-3 space-y-1 pl-1">
                {unanchoredMainChildren.map((branchName, branchIdx, list) => (
                  <BranchRows
                    key={branchName}
                    branchName={branchName}
                    depth={1}
                    isLast={branchIdx === list.length - 1}
                    branchByName={branchByName}
                    branchCommitPreviews={branchCommitPreviews}
                    childNamesByParent={childNamesByParent}
                    branchAnchorShaByName={branchAnchorShaByName}
                    expandedBranchNames={expandedBranchNames}
                    onToggleBranch={handleToggleBranch}
                    checkedOutBranchName={checkedOutBranchName}
                    ancestors={new Set([defaultBranch])}
                    showCommits={showCommits}
                    getMergeTargetLabels={getMergeTargetLabels}
                    sourceBranchName={branchName}
                    openedCommitClumpKeys={openedCommitClumpKeys}
                    onToggleCommitClump={handleToggleCommitClump}
                    onSelectCommit={onSelectCommit}
                    onSelectBranch={onSelectBranch}
                  />
                ))}
              </ul>
            );
          })()}
        </div>
        <ul className="space-y-4">
          {rootBranchNames.map((branchName, idx) => (
            <BranchRows
              key={branchName}
              branchName={branchName}
              depth={0}
              isLast={idx === rootBranchNames.length - 1}
              branchByName={branchByName}
              branchCommitPreviews={branchCommitPreviews}
              childNamesByParent={childNamesByParent}
              branchAnchorShaByName={branchAnchorShaByName}
              expandedBranchNames={expandedBranchNames}
              onToggleBranch={handleToggleBranch}
              checkedOutBranchName={checkedOutBranchName}
              ancestors={new Set()}
              showCommits={showCommits}
              getMergeTargetLabels={getMergeTargetLabels}
              sourceBranchName={branchName}
              openedCommitClumpKeys={openedCommitClumpKeys}
              onToggleCommitClump={handleToggleCommitClump}
              onSelectCommit={onSelectCommit}
              onSelectBranch={onSelectBranch}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}
