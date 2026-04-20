import type { Branch, BranchCommitPreview, DirectCommit } from '../../../types';
import type { BranchHeadTarget, BranchRenderLayout, CommitSelectionTarget } from '../core/MapSvg.types';

type PushTarget = {
  branchName: string;
  targetSha: string;
  targetIndex: number;
  commitCount: number;
};

export function buildSelectionOps(args: {
  renderedMainAnchorByCommitSha: Map<string, { x: number; y: number }>;
  activeBranches: Branch[];
  getBranchRenderLayout: (branch: Branch) => BranchRenderLayout;
  branchHeadTargets: BranchHeadTarget[];
  projectPoint: (x: number, y: number) => { x: number; y: number };
  selectedCommitShas: string[];
  selectedBranchNames: string[];
  renderBranches: Branch[];
  directCommits: DirectCommit[];
  defaultBranch: string;
  checkedOutBranchName: string | null;
  checkedOutHeadSha: string | null;
  selectableBranchNameSet: Set<string>;
  mergeTargetCommitSha: string | null;
  checkedOutIsDetached: boolean;
  unpushedDirectCommits: DirectCommit[];
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
  freshCopyBranchNames: Set<string>;
}) {
  const {
    renderedMainAnchorByCommitSha,
    activeBranches,
    getBranchRenderLayout,
    branchHeadTargets,
    projectPoint,
    selectedCommitShas,
    selectedBranchNames,
    renderBranches,
    directCommits,
    defaultBranch,
    checkedOutBranchName,
    checkedOutHeadSha,
    selectableBranchNameSet,
    mergeTargetCommitSha,
    checkedOutIsDetached,
    unpushedDirectCommits,
    branchCommitPreviews,
    freshCopyBranchNames,
  } = args;

  const commitSelectionTargets = (() => {
    const bySha = new Map<string, CommitSelectionTarget>();
    for (const [sha, anchor] of renderedMainAnchorByCommitSha.entries()) {
      bySha.set(sha, {
        commitSha: sha,
        point: projectPoint(anchor.x, anchor.y),
      });
    }
    for (const branch of activeBranches) {
      const layout = getBranchRenderLayout(branch);
      for (const cluster of layout.commitDotClusters) {
        for (const entry of cluster.entries) {
          const commit = entry.item.commit;
          if (!commit || commit.kind === 'branch-created') continue;
          if (bySha.has(commit.fullSha)) continue;
          bySha.set(commit.fullSha, {
            commitSha: commit.fullSha,
            point: { x: entry.x, y: entry.y },
          });
        }
      }
    }
    for (const target of branchHeadTargets) {
      if (bySha.has(target.headSha)) continue;
      bySha.set(target.headSha, {
        commitSha: target.headSha,
        point: target.point,
      });
    }
    return Array.from(bySha.values());
  })();

  const selectableCommitShaSet = new Set(commitSelectionTargets.map((target) => target.commitSha));
  const selectedVisibleCommitShas = selectedCommitShas.filter((sha) => selectableCommitShaSet.has(sha));
  const selectedCommitShaSet = new Set(selectedVisibleCommitShas);

  const commitShaToBranchNames = (() => {
    const map = new Map<string, Set<string>>();
    const add = (sha: string | undefined | null, branchName: string) => {
      if (!sha) return;
      const set = map.get(sha) ?? new Set<string>();
      set.add(branchName);
      map.set(sha, set);
    };

    for (const branch of renderBranches) {
      const layout = getBranchRenderLayout(branch);
      for (const cluster of layout.commitDotClusters) {
        for (const entry of cluster.entries) {
          add(entry.item.commit?.fullSha, branch.name);
        }
      }
      add(branch.headSha, branch.name);
    }
    for (const commit of directCommits) {
      add(commit.fullSha, defaultBranch);
    }
    if (checkedOutBranchName === defaultBranch && checkedOutHeadSha) {
      add(checkedOutHeadSha, defaultBranch);
    }
    return map;
  })();

  const selectedBranchList = selectedBranchNames.filter((name) => selectableBranchNameSet.has(name));
  const selectedBranchNameSet = new Set(selectedBranchList);

  const branchCandidatesForCommit = (sha: string): string[] => {
    const branchesForCommit = commitShaToBranchNames.get(sha);
    if (!branchesForCommit) return [];
    return Array.from(branchesForCommit).filter((name) => selectableBranchNameSet.has(name));
  };

  const resolveTargetBranch = (targetSha: string): string | null => {
    const candidates = branchCandidatesForCommit(targetSha);
    if (candidates.length === 0) return null;
    const explicitBranch = selectedBranchList.find((branchName) => candidates.includes(branchName));
    if (explicitBranch) return explicitBranch;
    if (candidates.length === 1) return candidates[0];
    const nonDefault = candidates.find((branchName) => branchName !== defaultBranch);
    return nonDefault ?? candidates[0];
  };

  const commitMergeTargetOptions = Array.from(
    selectedVisibleCommitShas.reduce((byBranch, targetSha) => {
      const targetBranch = resolveTargetBranch(targetSha);
      if (!targetBranch) return byBranch;
      const sourceRefs = selectedVisibleCommitShas
        .filter((sha) => sha !== targetSha)
        .filter((sha) => {
          const sourceCandidates = new Set(branchCandidatesForCommit(sha));
          return !sourceCandidates.has(targetBranch);
        });
      byBranch.set(targetBranch, {
        targetSha,
        targetBranch,
        sourceRefs,
      });
      return byBranch;
    }, new Map<string, { targetSha: string; targetBranch: string; sourceRefs: string[] }>())
      .values(),
  );

  const explicitTargetBranch =
    mergeTargetCommitSha != null ? resolveTargetBranch(mergeTargetCommitSha) : null;
  const selectedCommitTargetOption =
    (explicitTargetBranch
      ? commitMergeTargetOptions.find((option) => option.targetBranch === explicitTargetBranch)
      : null) ?? commitMergeTargetOptions[commitMergeTargetOptions.length - 1] ?? null;
  const targetBranchForSelectedCommit = selectedCommitTargetOption?.targetBranch ?? null;
  const commitMergeSources = selectedCommitTargetOption?.sourceRefs ?? [];

  const pushableBranchByName = new Map(
    [
      ...(checkedOutBranchName === defaultBranch
        ? [{ name: defaultBranch, headSha: checkedOutHeadSha ?? '', unpushedCommits: unpushedDirectCommits.length, remoteSyncStatus: 'unpushed' as const }]
        : []),
      ...activeBranches,
    ]
      .filter(
        (branch) =>
          !branch.name.startsWith('*') &&
          branch.unpushedCommits > 0 &&
          branch.remoteSyncStatus !== 'on-github',
      )
      .map((branch) => [branch.name, branch] as const),
  );

  const pushableRemoteBranchCount = pushableBranchByName.size;
  const canPushCurrentBranch =
    !checkedOutIsDetached &&
    !!checkedOutBranchName &&
    pushableBranchByName.has(checkedOutBranchName);

  const commitPreviewListForBranch = (branchName: string): BranchCommitPreview[] => {
    if (branchName === defaultBranch) {
      return unpushedDirectCommits.map((commit) => ({
        fullSha: commit.fullSha,
        sha: commit.sha,
        parentSha: commit.parentSha ?? null,
        message: commit.message,
        author: commit.author,
        date: commit.date,
        kind: commit.kind ?? 'commit',
      }));
    }
    return branchCommitPreviews[branchName] ?? [];
  };

  const resolvePushBranch = (targetSha: string): string | null => {
    const candidates = branchCandidatesForCommit(targetSha).filter((branchName) =>
      pushableBranchByName.has(branchName),
    );
    if (candidates.length === 0) return null;
    const explicitlySelectedBranch = selectedBranchList.find((branchName) => candidates.includes(branchName));
    if (explicitlySelectedBranch) return explicitlySelectedBranch;
    if (candidates.length === 1) return candidates[0];
    if (checkedOutBranchName && candidates.includes(checkedOutBranchName)) return checkedOutBranchName;
    return candidates[0];
  };

  const selectedPushTargets = Array.from(
    selectedVisibleCommitShas.reduce((byBranch, sha) => {
      const targetBranch = resolvePushBranch(sha);
      if (!targetBranch) return byBranch;
      const branch = pushableBranchByName.get(targetBranch);
      if (!branch) return byBranch;
      const unpushedPreviews = commitPreviewListForBranch(targetBranch).slice(0, branch.unpushedCommits);
      const targetIndex = unpushedPreviews.findIndex((commit) => commit.fullSha === sha);
      if (targetIndex === -1) return byBranch;

      const existing = byBranch.get(targetBranch);
      if (!existing || targetIndex < existing.targetIndex) {
        byBranch.set(targetBranch, {
          branchName: targetBranch,
          targetSha: sha,
          targetIndex,
          commitCount: unpushedPreviews.length - targetIndex,
        });
      }
      return byBranch;
    }, new Map<string, PushTarget>())
      .values(),
  );

  const selectedBranchPushTargets = selectedBranchList
    .map((branchName) => {
      const branch = pushableBranchByName.get(branchName);
      if (!branch || !branch.headSha) return null;
      const previews = commitPreviewListForBranch(branchName);
      const commitCount = Math.max(1, Math.min(branch.unpushedCommits, previews.length || branch.unpushedCommits));
      return {
        branchName,
        targetSha: branch.headSha,
        targetIndex: 0,
        commitCount,
      };
    })
    .filter((target): target is PushTarget => !!target);

  const selectedPushTargetMap = new Map<string, PushTarget>();
  for (const target of selectedPushTargets) {
    selectedPushTargetMap.set(target.branchName, target);
  }
  for (const target of selectedBranchPushTargets) {
    if (!selectedPushTargetMap.has(target.branchName)) {
      selectedPushTargetMap.set(target.branchName, target);
    }
  }

  const resolvedSelectedPushTargets = Array.from(selectedPushTargetMap.values());
  const hasSelection = selectedVisibleCommitShas.length > 0 || selectedBranchList.length > 0;
  const selectedDeletableBranchNames = selectedBranchList.filter(
    (branchName) => branchName !== defaultBranch && freshCopyBranchNames.has(branchName),
  );
  const hasSelectedUncommittedChanges = selectedVisibleCommitShas.includes('WORKING_TREE');
  const selectedStashIndices = Array.from(
    new Set(
      selectedVisibleCommitShas
        .map((sha) => {
          const match = /^STASH:(\d+)$/.exec(sha);
          return match ? parseInt(match[1], 10) : null;
        })
        .filter((n): n is number => n != null && Number.isFinite(n)),
    ),
  ).sort((a, b) => a - b);

  const deletableSelectionCount =
    selectedDeletableBranchNames.length +
    (hasSelectedUncommittedChanges ? 1 : 0) +
    selectedStashIndices.length;

  const deleteSelectionItems = [
    ...selectedDeletableBranchNames.map((branchName) => `Branch: ${branchName}`),
    ...(hasSelectedUncommittedChanges ? ['Uncommitted changes'] : []),
    ...selectedStashIndices.map((idx) => `Stash ${idx + 1}`),
  ];

  const pushCurrentBranchLabel = checkedOutBranchName ? `Push ${checkedOutBranchName}` : 'Push current branch';
  const selectedPushLabel = resolvedSelectedPushTargets.length === 1
    ? resolvedSelectedPushTargets[0].commitCount > 1
      ? `Push ${resolvedSelectedPushTargets[0].commitCount} commits on ${resolvedSelectedPushTargets[0].branchName}`
      : `Push ${resolvedSelectedPushTargets[0].targetSha.slice(0, 7)} on ${resolvedSelectedPushTargets[0].branchName}`
    : `Push ${resolvedSelectedPushTargets.length} selected ranges`;

  const selectedPushTitle = resolvedSelectedPushTargets.length === 1
    ? `Push ${resolvedSelectedPushTargets[0].branchName} through ${resolvedSelectedPushTargets[0].targetSha.slice(0, 7)}, including the earlier unpushed commits in that range`
    : 'Push each selected branch through its newest selected unpushed commit, including the earlier unpushed commits in that range';

  return {
    commitSelectionTargets,
    selectedVisibleCommitShas,
    selectedCommitShaSet,
    selectedBranchList,
    selectedBranchNameSet,
    commitMergeTargetOptions,
    selectedCommitTargetOption,
    targetBranchForSelectedCommit,
    commitMergeSources,
    pushableRemoteBranchCount,
    canPushCurrentBranch,
    resolvedSelectedPushTargets,
    hasSelection,
    selectedDeletableBranchNames,
    hasSelectedUncommittedChanges,
    selectedStashIndices,
    deletableSelectionCount,
    deleteSelectionItems,
    pushCurrentBranchLabel,
    selectedPushLabel,
    selectedPushTitle,
  };
}
