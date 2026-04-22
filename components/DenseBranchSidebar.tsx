import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Branch, BranchCommitPreview, CheckedOutRef, DirectCommit, MergeNode } from '../types';
import { cn, shaMatchesGitRef } from './grid/mapGridUtils';
import type { BranchGridLayoutModel } from './grid/branchGridLayoutModel';

type Props = {
  branches: Branch[];
  defaultBranch: string;
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
  directCommits?: DirectCommit[];
  mergeNodes?: MergeNode[];
  checkedOutRef?: CheckedOutRef | null;
  manuallyOpenedClumps?: Set<string>;
  manuallyClosedClumps?: Set<string>;
  setManuallyOpenedClumps?: Dispatch<SetStateAction<Set<string>>>;
  setManuallyClosedClumps?: Dispatch<SetStateAction<Set<string>>>;
  gridLayoutModel?: BranchGridLayoutModel;
  onSelectCommit?: (sha: string) => void;
  onSelectBranch?: (branchName: string) => void;
  className?: string;
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
  firstBranchParentShaByName,
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
  firstBranchParentShaByName: Map<string, string>;
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
  const firstBranchParentSha = firstBranchParentShaByName.get(branchName) ?? null;
  const firstBranchParentLabel = firstBranchParentSha ? firstBranchParentSha.slice(0, 7) : 'none';

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
      const fallbackKey = `sidebar-single-${branchName}-${current[0]!.fullSha}`;
      clumps.push({
        key: currentClusterKey ?? fallbackKey,
        commits: current,
        count: current.length,
        lead: current[0]!,
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
        depth === 0 && !isLast ? (isExpanded ? 'mb-12' : 'mb-1') : '',
      )}
    >
      {depth > 0 ? (
        <span
          aria-hidden="true"
          className={cn(
            'absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border/60',
            bendCornerClassName,
            connectorLeftClassName,
            bendClassName,
          )}
        />
      ) : null}
      {!isLast && depth > 0 ? (
        <span
          aria-hidden="true"
          className={cn('absolute top-0 bottom-[-1rem] border-l-[1.5px] border-border/50', connectorLeftClassName)}
        />
      ) : null}

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => {
            if (isBranchExpandable) onToggleBranch(branchName);
            onSelectBranch?.(branchName);
          }}
          className={cn(
            'group flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition-colors hover:bg-accent',
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
          <span className="min-w-0 break-words">
            <span className={cn(isCheckedOut ? 'font-medium text-foreground' : 'font-normal')}>{branchName}</span>
            <span className="ml-1 text-[10px] text-muted-foreground/80">(parent {firstBranchParentLabel})</span>
          </span>
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
                      className="min-w-0 flex-1 break-words rounded-md px-2 py-1 text-left text-sm leading-5 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground"
                      title={commit.message}
                    >
                      {commit.message}
                    </button>
                    {clump.count > 1 && commit.fullSha === clump.lead.fullSha ? (
                      <button
                        type="button"
                      data-clump-toggle-id={`${branchName}:${clump.lead.fullSha}`}
                      onClick={() => onToggleGridCluster(clump.key, `${branchName}:${clump.lead.fullSha}`)}
                      className={cn(
                        'shrink-0 rounded-md px-2 py-1 text-left text-sm leading-5 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground',
                        clumpCollapsed ? '' : 'min-w-[2ch] text-center',
                      )}
                      >
                        {clumpCollapsed ? `+${Math.max(1, clump.count - 1)}` : '−'}
                      </button>
                    ) : null}
                  </div>
                  {mergeTargetLabels.length > 0 ? (
                    <div className="mt-1 space-y-1">
                      {mergeTargetLabels.map((targetBranch) => (
                        <div
                          key={`${commit.fullSha}:${targetBranch}`}
                          className="min-w-0 rounded-md px-2 py-1 text-left text-sm leading-5 text-muted-foreground/70"
                        >
                          <span>Merged from </span>
                          <span className="font-medium text-muted-foreground">{targetBranch}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {anchoredChildrenByCommitIndex.get(idx)?.length ? (
                    <ul className="relative mb-1.75 space-y-2">
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
                          firstBranchParentShaByName={firstBranchParentShaByName}
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
        <ul className="relative mb-3.5 space-y-1">
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
              firstBranchParentShaByName={firstBranchParentShaByName}
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

export default function DenseBranchSidebar({
  branches,
  defaultBranch,
  branchCommitPreviews,
  directCommits = [],
  mergeNodes = [],
  checkedOutRef,
  manuallyOpenedClumps: controlledManuallyOpenedClumps,
  manuallyClosedClumps: controlledManuallyClosedClumps,
  setManuallyOpenedClumps: controlledSetManuallyOpenedClumps,
  setManuallyClosedClumps: controlledSetManuallyClosedClumps,
  gridLayoutModel,
  onSelectCommit,
  onSelectBranch,
  className,
}: Props) {
  const asideRef = useRef<HTMLElement | null>(null);
  const scrollBodyRef = useRef<HTMLDivElement | null>(null);
  const [showCommits, setShowCommits] = useState(true);
  const [localManuallyOpenedClumps, setLocalManuallyOpenedClumps] = useState<Set<string>>(() => new Set());
  const [localManuallyClosedClumps, setLocalManuallyClosedClumps] = useState<Set<string>>(() => new Set());
  const manuallyOpenedClumps = controlledManuallyOpenedClumps ?? localManuallyOpenedClumps;
  const manuallyClosedClumps = controlledManuallyClosedClumps ?? localManuallyClosedClumps;
  const setManuallyOpenedClumps = controlledSetManuallyOpenedClumps ?? setLocalManuallyOpenedClumps;
  const setManuallyClosedClumps = controlledSetManuallyClosedClumps ?? setLocalManuallyClosedClumps;
  const [pendingClumpFocusTargetId, setPendingClumpFocusTargetId] = useState<string | null>(null);
  const [pendingClumpAnchor, setPendingClumpAnchor] = useState<{ id: string; topWithinScrollBody: number } | null>(null);
  const sortedDirectCommits = useMemo(
    () =>
      [...directCommits].sort(
        (left, right) => new Date(left.date).getTime() - new Date(right.date).getTime(),
      ),
    [directCommits],
  );
  const syntheticDefaultBranch = useMemo<Branch>(() => {
    const latestDirectCommit = sortedDirectCommits[sortedDirectCommits.length - 1];
    return {
      name: defaultBranch,
      commitsAhead: 0,
      commitsBehind: 0,
      createdFromSha: latestDirectCommit?.fullSha ?? undefined,
      createdDate: latestDirectCommit?.date,
      lastCommitDate: latestDirectCommit?.date ?? new Date(0).toISOString(),
      lastCommitAuthor: latestDirectCommit?.author ?? 'Unknown',
      status: 'fresh',
      remoteSyncStatus: 'on-github',
      unpushedCommits: 0,
      headSha: latestDirectCommit?.fullSha ?? '',
      parentBranch: undefined,
      divergedFromSha: undefined,
      divergedFromDate: undefined,
    };
  }, [defaultBranch, sortedDirectCommits]);
  const branchesWithDefault = useMemo(() => {
    if (branches.some((branch) => branch.name === defaultBranch)) return branches;
    return [syntheticDefaultBranch, ...branches];
  }, [branches, defaultBranch, syntheticDefaultBranch]);
  const branchCommitPreviewsWithDefault = useMemo<Record<string, BranchCommitPreview[]>>(() => {
    const mappedDirectCommits = sortedDirectCommits.map((commit) => ({
      fullSha: commit.fullSha,
      sha: commit.sha,
      parentSha: commit.parentSha ?? null,
      message: commit.message,
      author: commit.author,
      date: commit.date,
      kind: commit.kind ?? 'commit',
    }));
    return {
      ...branchCommitPreviews,
      [defaultBranch]: mappedDirectCommits,
    };
  }, [branchCommitPreviews, defaultBranch, sortedDirectCommits]);
  const branchCommitPreviewsFromLayout = useMemo<Record<string, BranchCommitPreview[]>>(() => {
    if (!gridLayoutModel) return branchCommitPreviewsWithDefault;
    const rowByVisualId = new Map<string, number>(gridLayoutModel.nodes.map((node) => [node.commit.visualId, node.row]));
    const next: Record<string, BranchCommitPreview[]> = {};
    for (const commit of gridLayoutModel.allCommits) {
      const bucket = next[commit.branchName] ?? [];
      bucket.push({
        fullSha: commit.id,
        sha: commit.id.slice(0, 7),
        parentSha: commit.parentSha ?? null,
        message: commit.message,
        author: commit.author,
        date: commit.date,
        kind: commit.kind ?? 'commit',
      });
      next[commit.branchName] = bucket;
    }
    for (const branchName of Object.keys(next)) {
      next[branchName] = next[branchName].sort((left, right) => {
        const leftRow = rowByVisualId.get(`${branchName}:${left.fullSha}`) ?? Number.MAX_SAFE_INTEGER;
        const rightRow = rowByVisualId.get(`${branchName}:${right.fullSha}`) ?? Number.MAX_SAFE_INTEGER;
        if (leftRow !== rightRow) return leftRow - rightRow;
        const leftTime = new Date(left.date).getTime();
        const rightTime = new Date(right.date).getTime();
        if (leftTime !== rightTime) return leftTime - rightTime;
        return left.fullSha.localeCompare(right.fullSha);
      });
    }
    return next;
  }, [gridLayoutModel, branchCommitPreviewsWithDefault]);
  const mergeSourceLabelsByTargetAndMergeSha = useMemo(() => {
    const byTargetBranch = new Map<string, Map<string, Set<string>>>();
    const resolveSourceBranchLabel = (parentSha: string, targetBranch: string): string => {
      const directHeadMatches = branchesWithDefault
        .filter((branch) => branch.name !== targetBranch)
        .filter((branch) => shaMatchesGitRef(branch.headSha, parentSha))
        .map((branch) => branch.name);
      if (directHeadMatches.length > 0) return directHeadMatches.sort()[0]!;

      const previewTipMatches = Object.entries(branchCommitPreviewsFromLayout)
        .filter(([branchName]) => branchName !== targetBranch)
        .flatMap(([branchName, previews]) => {
          const tip = previews[previews.length - 1];
          if (!tip) return [];
          return shaMatchesGitRef(tip.fullSha, parentSha) || shaMatchesGitRef(tip.sha, parentSha) ? [branchName] : [];
        });
      if (previewTipMatches.length > 0) return previewTipMatches.sort()[0]!;

      return parentSha.slice(0, 7);
    };

    for (const mergeNode of mergeNodes) {
      const targetBranch = mergeNode.targetBranch ?? defaultBranch;
      if (!targetBranch || !mergeNode.fullSha) continue;
      const mergedParentShas = (mergeNode.parentShas ?? []).slice(1).filter((sha): sha is string => !!sha && !shaMatchesGitRef(sha, mergeNode.fullSha));
      if (mergedParentShas.length === 0) continue;
      const byMergeSha = byTargetBranch.get(targetBranch) ?? new Map<string, Set<string>>();
      const sourceLabels = byMergeSha.get(mergeNode.fullSha) ?? new Set<string>();
      for (const parentSha of mergedParentShas) {
        sourceLabels.add(resolveSourceBranchLabel(parentSha, targetBranch));
      }
      byMergeSha.set(mergeNode.fullSha, sourceLabels);
      byTargetBranch.set(targetBranch, byMergeSha);
    }
    return byTargetBranch;
  }, [mergeNodes, defaultBranch, branchesWithDefault, branchCommitPreviewsFromLayout]);
  const getMergeTargetLabels = (sha: string, sourceBranchName: string): string[] => {
    const byMergeSha = mergeSourceLabelsByTargetAndMergeSha.get(sourceBranchName);
    if (!byMergeSha) return [];
    for (const [mergeSha, labels] of byMergeSha.entries()) {
      if (!shaMatchesGitRef(sha, mergeSha)) continue;
      return Array.from(labels).sort();
    }
    return [];
  };
  const childNamesByParent = useMemo(
    () => buildChildBranchesByParent(branchesWithDefault, defaultBranch),
    [branchesWithDefault, defaultBranch],
  );
  const rootBranchNames = useMemo(
    () => buildRootNames(branchesWithDefault, defaultBranch, childNamesByParent),
    [branchesWithDefault, defaultBranch, childNamesByParent],
  );
  const branchByName = useMemo(() => new Map(branchesWithDefault.map((branch) => [branch.name, branch])), [branchesWithDefault]);
  const branchAnchorShaByName = useMemo(
    () =>
      new Map(
        branchesWithDefault.map((branch) => [
          branch.name,
          branch.divergedFromSha ?? branch.createdFromSha ?? null,
        ]),
      ),
    [branchesWithDefault],
  );
  const firstBranchParentShaByName = useMemo(() => {
    const next = new Map<string, string>();
    if (!gridLayoutModel) return next;
    for (const [branchName, commit] of gridLayoutModel.firstBranchCommitByName.entries()) {
      if (commit.parentSha) next.set(branchName, commit.parentSha);
    }
    return next;
  }, [gridLayoutModel]);
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
  const clusterKeyByCommitId = gridLayoutModel?.clusterKeyByCommitId ?? new Map<string, string>();
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

  return (
    <aside
      ref={asideRef}
      aria-label="Dense branch sidebar"
      className={cn('pointer-events-auto h-full', className)}
    >
      <div className="mb-2 flex items-center justify-between gap-3 px-5">
        <h2 className="text-sm font-medium text-foreground">Branches</h2>
        <button
          type="button"
          onClick={() => setShowCommits((value) => !value)}
          className="shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          {showCommits ? 'Hide commits' : 'Show commits'}
        </button>
      </div>
      <div ref={scrollBodyRef} className="h-[calc(100%-1.75rem)] overflow-y-auto">
        <ul className="px-5">
          {rootBranchNames.map((branchName, idx) => (
            <BranchRows
              key={branchName}
              branchName={branchName}
              depth={0}
              isLast={idx === rootBranchNames.length - 1}
              branchByName={branchByName}
              branchCommitPreviews={branchCommitPreviewsFromLayout}
              childNamesByParent={childNamesByParent}
              branchAnchorShaByName={branchAnchorShaByName}
              firstBranchParentShaByName={firstBranchParentShaByName}
              expandedBranchNames={expandedBranchNames}
              onToggleBranch={handleToggleBranch}
              checkedOutBranchName={checkedOutBranchName}
              ancestors={new Set()}
              showCommits={showCommits}
              getMergeTargetLabels={getMergeTargetLabels}
              sourceBranchName={branchName}
              clusterKeyByCommitId={clusterKeyByCommitId}
              isGridClusterOpen={isGridClusterOpen}
              onToggleGridCluster={handleToggleGridCluster}
              onSelectCommit={onSelectCommit}
              onSelectBranch={onSelectBranch}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}
