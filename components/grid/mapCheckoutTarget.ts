import { isWorkingTreeCommitId } from '../../lib/worktreeSessions';
import type { Node } from './LayoutGrid';

export type MapCheckoutTarget = {
  commitSha: string;
  branchName?: string;
  summary: string;
};

export const parseMapCheckoutTarget = (node: Node): MapCheckoutTarget | null => {
  const commitId = node.commit.id;
  const branchName = node.commit.branchName;

  if (isWorkingTreeCommitId(commitId) || node.commit.kind === 'uncommitted') {
    return null;
  }

  const stashMatch = /^STASH:(\d+)$/.exec(commitId);
  if (stashMatch) {
    const stashNumber = Number.parseInt(stashMatch[1], 10) + 1;
    return {
      commitSha: commitId,
      summary: `Apply stash ${stashNumber}`,
    };
  }

  const branchHeadMatch = /^BRANCH_HEAD:([^:]+):(.+)$/.exec(commitId);
  if (branchHeadMatch || node.commit.kind === 'branch-created') {
    const resolvedBranchName = branchHeadMatch?.[1] ?? branchName;
    const tipSha = branchHeadMatch?.[2] ?? commitId;
    const shortSha = tipSha.slice(0, 7);
    if (resolvedBranchName) {
      return {
        commitSha: tipSha,
        branchName: resolvedBranchName,
        summary: `Check out branch ${resolvedBranchName} (${shortSha})`,
      };
    }
    return {
      commitSha: tipSha,
      summary: `Check out ${shortSha} (detached)`,
    };
  }

  const shortSha = commitId.slice(0, 7);
  // Specific commit nodes always detach at that SHA. Branch checkout is only for
  // BRANCH_HEAD / branch-created placeholders above — otherwise checkout_branch
  // would jump to branch tip instead of the clicked clump member.
  if (branchName) {
    return {
      commitSha: commitId,
      summary: `Check out ${branchName}/${shortSha}`,
    };
  }
  return {
    commitSha: commitId,
    summary: `Check out ${shortSha} (detached)`,
  };
};
