import { resolveAnchorOwningBranchName } from '../src/placeStashNode';
import type { Branch, BranchCommitPreview, DirectCommit } from '../types';
import {
  isWorkingTreeCommitId,
  shaMatches,
  stripEmptyBranchPlaceholdersForWorktreeSessions,
  worktreeLaneBranchName,
  type WorktreeSession,
} from './worktreeSessions';

export type InjectWorktreeUncommittedInput = {
  sessions: WorktreeSession[];
  branches: Branch[];
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
  branchUniqueAheadCounts: Record<string, number>;
  directCommits: DirectCommit[];
  defaultBranch: string;
};

export type InjectWorktreeUncommittedResult = {
  branches: Branch[];
  branchCommitPreviews: Record<string, BranchCommitPreview[]>;
  branchUniqueAheadCounts: Record<string, number>;
};

export const stripWorkingTreeFromPreviews = (
  previews: Record<string, BranchCommitPreview[]>,
): Record<string, BranchCommitPreview[]> => {
  let changed = false;
  const next: Record<string, BranchCommitPreview[]> = {};
  for (const [branchName, branchPreviews] of Object.entries(previews)) {
    const filtered = branchPreviews.filter(
      (preview) => !isWorkingTreeCommitId(preview.fullSha) && preview.kind !== 'uncommitted',
    );
    if (filtered.length !== branchPreviews.length) changed = true;
    if (filtered.length > 0) next[branchName] = filtered;
  }
  return changed ? next : previews;
};

const restoreBranchHeadsFromSessions = (
  branches: Branch[],
  sessions: WorktreeSession[],
): Branch[] =>
  branches.map((branch) => {
    if (!isWorkingTreeCommitId(branch.headSha)) return branch;
    const sessionAtBranch = sessions.find((session) => session.branchName === branch.name);
    if (sessionAtBranch && !sessionAtBranch.hasUncommittedChanges) {
      return { ...branch, headSha: sessionAtBranch.headSha };
    }
    return branch;
  });

const resolveAnchorCommitDate = (
  anchorSha: string | null,
  directCommits: DirectCommit[],
  targetBranch: Branch | undefined,
  previews: Record<string, BranchCommitPreview[]>,
): string | null => {
  if (!anchorSha) return null;
  const matchingDirectCommit = directCommits.find((commit) => (
    shaMatches(commit.fullSha, anchorSha) || shaMatches(commit.sha, anchorSha)
  ));
  if (matchingDirectCommit?.date) return matchingDirectCommit.date;
  if (targetBranch) {
    const matchingPreviewCommit = (previews[targetBranch.name] ?? []).find((commit) => (
      shaMatches(commit.fullSha, anchorSha) || shaMatches(commit.sha, anchorSha)
    ));
    if (matchingPreviewCommit?.date) return matchingPreviewCommit.date;
  }
  for (const branchPreviews of Object.values(previews)) {
    const matchingPreviewCommit = branchPreviews.find((commit) => (
      shaMatches(commit.fullSha, anchorSha) || shaMatches(commit.sha, anchorSha)
    ));
    if (matchingPreviewCommit?.date) return matchingPreviewCommit.date;
  }
  return null;
};

type LaneRef = { name: string; headSha: string; isDefault: boolean };

const resolveTargetLane = (
  session: WorktreeSession,
  branches: Branch[],
  directCommits: DirectCommit[],
  defaultBranch: string,
): { lane: LaneRef | undefined; branch: Branch | undefined } => {
  const checkedOutAnchorSha = session.headSha || session.parentSha || null;
  const latestMainDirectCommitSha = directCommits[0]?.fullSha ?? null;
  const allLanes: LaneRef[] = [
    { name: defaultBranch, headSha: latestMainDirectCommitSha ?? '', isDefault: true },
    ...branches.map((branch) => ({ name: branch.name, headSha: branch.headSha, isDefault: false })),
  ];
  const explicitLane = session.branchName
    ? allLanes.find((lane) => lane.name === session.branchName)
    : undefined;
  const tipMatchedLanes = checkedOutAnchorSha
    ? allLanes.filter((lane) => shaMatches(lane.headSha, checkedOutAnchorSha))
    : [];
  const targetLane =
    explicitLane ??
    tipMatchedLanes.find((lane) => lane.isDefault) ??
    tipMatchedLanes[0];
  const targetBranch = targetLane
    ? branches.find((branch) => branch.name === targetLane.name)
    : undefined;
  return { lane: targetLane, branch: targetBranch };
};

export const injectWorktreeUncommittedPreviews = ({
  sessions,
  branches,
  branchCommitPreviews,
  branchUniqueAheadCounts,
  directCommits,
  defaultBranch,
}: InjectWorktreeUncommittedInput): InjectWorktreeUncommittedResult => {
  if (sessions.length === 0) {
    return {
      branches: restoreBranchHeadsFromSessions(branches, sessions),
      branchCommitPreviews: stripWorkingTreeFromPreviews(branchCommitPreviews),
      branchUniqueAheadCounts,
    };
  }

  let nextBranches = restoreBranchHeadsFromSessions(branches, sessions);
  let nextPreviews = stripWorkingTreeFromPreviews(branchCommitPreviews);
  let nextUniqueAheadCounts = { ...branchUniqueAheadCounts };
  const reservedLaneNames = new Set(nextBranches.map((branch) => branch.name));

  for (const session of sessions) {
    const useDedicatedLane = !session.branchName;
    // Same timeline anchor for clean and dirty: one step after the checked-out tip commit.
    const parentSha = session.headSha || session.parentSha || null;
    const { branch: targetBranch } = resolveTargetLane(
      session,
      nextBranches,
      directCommits,
      defaultBranch,
    );
    const parentCommitDate = resolveAnchorCommitDate(
      parentSha,
      directCommits,
      targetBranch,
      nextPreviews,
    );
    const worktreeDate = parentCommitDate ?? new Date().toISOString();
    const worktreeNode: BranchCommitPreview = {
      fullSha: session.workingTreeId,
      sha: 'uncommitted',
      parentSha,
      message: '',
      author: 'You',
      date: worktreeDate,
      kind: 'uncommitted',
    };

    if (useDedicatedLane) {
      const laneName = worktreeLaneBranchName(session.path, reservedLaneNames);
      reservedLaneNames.add(laneName);
      const parentBranch =
        resolveAnchorOwningBranchName(parentSha, directCommits, nextPreviews, defaultBranch)
        ?? defaultBranch;
      if (!nextBranches.some((branch) => branch.name === laneName)) {
        nextBranches = [
          ...nextBranches,
          {
            name: laneName,
            commitsAhead: session.hasUncommittedChanges ? 1 : 0,
            commitsBehind: 0,
            lastCommitDate: worktreeDate,
            lastCommitAuthor: 'You',
            status: 'fresh',
            remoteSyncStatus: 'local-only',
            unpushedCommits: session.hasUncommittedChanges ? 1 : 0,
            headSha: session.hasUncommittedChanges ? session.workingTreeId : (parentSha ?? session.workingTreeId),
            parentBranch,
            divergedFromSha: parentSha ?? undefined,
          },
        ];
      }
      if (session.hasUncommittedChanges) {
        nextUniqueAheadCounts = {
          ...nextUniqueAheadCounts,
          [laneName]: Math.max(0, (nextUniqueAheadCounts[laneName] ?? 0)) + 1,
        };
      } else if (!Object.prototype.hasOwnProperty.call(nextUniqueAheadCounts, laneName)) {
        nextUniqueAheadCounts = { ...nextUniqueAheadCounts, [laneName]: 0 };
      }
      nextPreviews = {
        ...nextPreviews,
        [laneName]: [worktreeNode, ...(nextPreviews[laneName] || [])],
      };
      continue;
    }

    if (targetBranch) {
      if (session.hasUncommittedChanges) {
        nextBranches = nextBranches.map((branch) => {
          if (branch.name !== targetBranch.name) return branch;
          return {
            ...branch,
            commitsAhead: branch.commitsAhead + 1,
            unpushedCommits: branch.unpushedCommits + 1,
            lastCommitDate: worktreeDate,
            headSha: session.workingTreeId,
          };
        });
        nextUniqueAheadCounts = {
          ...nextUniqueAheadCounts,
          [targetBranch.name]: Math.max(
            0,
            (Object.prototype.hasOwnProperty.call(nextUniqueAheadCounts, targetBranch.name)
              ? nextUniqueAheadCounts[targetBranch.name]
              : targetBranch.commitsAhead) ?? 0,
          ) + 1,
        };
      }
      nextPreviews = {
        ...nextPreviews,
        [targetBranch.name]: [worktreeNode, ...(nextPreviews[targetBranch.name] || [])],
      };
      continue;
    }

    nextPreviews = {
      ...nextPreviews,
      [defaultBranch]: [worktreeNode, ...(nextPreviews[defaultBranch] || [])],
    };
  }

  const branchesForStrip = restoreBranchHeadsFromSessions(nextBranches, sessions);

  return {
    branches: nextBranches,
    branchCommitPreviews: stripEmptyBranchPlaceholdersForWorktreeSessions(
      sessions,
      branchesForStrip,
      nextPreviews,
    ),
    branchUniqueAheadCounts: nextUniqueAheadCounts,
  };
};
