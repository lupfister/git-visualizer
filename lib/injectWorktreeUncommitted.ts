import type { Branch, BranchCommitPreview, DirectCommit } from '../types';
import { isWorkingTreeCommitId, shaMatches, type WorktreeSession } from './worktreeSessions';

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
  const targetBranch = targetLane && !targetLane.isDefault
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
  const dirtySessions = sessions.filter((session) => session.hasUncommittedChanges);
  if (dirtySessions.length === 0) {
    return {
      branches: branches.map((branch) => {
        if (!isWorkingTreeCommitId(branch.headSha)) return branch;
        const sessionAtBranch = sessions.find((session) => session.branchName === branch.name);
        return sessionAtBranch
          ? { ...branch, headSha: sessionAtBranch.headSha }
          : branch;
      }),
      branchCommitPreviews: stripWorkingTreeFromPreviews(branchCommitPreviews),
      branchUniqueAheadCounts,
    };
  }

  let nextBranches = [...branches];
  let nextPreviews = { ...branchCommitPreviews };
  let nextUniqueAheadCounts = { ...branchUniqueAheadCounts };

  for (const session of dirtySessions) {
    const checkedOutAnchorSha = session.headSha || session.parentSha || null;
    const { branch: targetBranch } = resolveTargetLane(
      session,
      nextBranches,
      directCommits,
      defaultBranch,
    );
    const anchorCommitDate = resolveAnchorCommitDate(
      checkedOutAnchorSha,
      directCommits,
      targetBranch,
      nextPreviews,
    );
    const anchorCommitTimeMs = anchorCommitDate ? new Date(anchorCommitDate).getTime() : Number.NaN;
    const nowTimeMs = Date.now();
    const uncommittedTimeMs = Number.isFinite(anchorCommitTimeMs)
      ? Math.max(nowTimeMs, anchorCommitTimeMs + 1)
      : nowTimeMs;
    const uncommittedDate = new Date(uncommittedTimeMs).toISOString();
    const uncommittedNode: BranchCommitPreview = {
      fullSha: session.workingTreeId,
      sha: 'uncommitted',
      parentSha: checkedOutAnchorSha,
      message: '',
      author: 'You',
      date: uncommittedDate,
      kind: 'uncommitted',
    };

    if (targetBranch) {
      nextBranches = nextBranches.map((branch) => {
        if (branch.name !== targetBranch.name) return branch;
        return {
          ...branch,
          commitsAhead: branch.commitsAhead + 1,
          unpushedCommits: branch.unpushedCommits + 1,
          lastCommitDate: uncommittedDate,
          headSha: session.workingTreeId,
        };
      });
      nextPreviews = {
        ...nextPreviews,
        [targetBranch.name]: [uncommittedNode, ...(nextPreviews[targetBranch.name] || [])],
      };
      nextUniqueAheadCounts = {
        ...nextUniqueAheadCounts,
        [targetBranch.name]: Math.max(
          0,
          (Object.prototype.hasOwnProperty.call(nextUniqueAheadCounts, targetBranch.name)
            ? nextUniqueAheadCounts[targetBranch.name]
            : targetBranch.commitsAhead) ?? 0,
        ) + 1,
      };
    } else {
      nextPreviews = {
        ...nextPreviews,
        [defaultBranch]: [uncommittedNode, ...(nextPreviews[defaultBranch] || [])],
      };
    }
  }

  return {
    branches: nextBranches,
    branchCommitPreviews: nextPreviews,
    branchUniqueAheadCounts: nextUniqueAheadCounts,
  };
};
