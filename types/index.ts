export type BranchStatus = 'fresh' | 'stale' | 'unknown';
export type RemoteSyncStatus = 'local-only' | 'unpushed' | 'on-github';

export interface Branch {
  name: string;
  commitsAhead: number;
  commitsBehind: number;
  presidesFromSha?: string | null;
  createdFromSha?: string;
  createdDate?: string;
  lastCommitDate: string;
  lastCommitAuthor: string;
  lastCommitAuthorAvatar?: string;
  mergeable?: boolean | null;
  status: BranchStatus;
  remoteSyncStatus: RemoteSyncStatus;
  unpushedCommits: number;
  headSha: string;
  parentBranch?: string;
  divergedFromSha?: string;
  divergedFromDate?: string;
}

export interface CheckedOutRef {
  branchName: string | null;
  headSha: string;
  parentSha?: string | null;
  hasUncommittedChanges: boolean;
}

/** One entry from `git stash list` (index 0 = stash@{0}, the newest). */
export interface GitStashEntry {
  index: number;
  baseSha: string;
  message: string;
}

/** One linked or main checkout directory for a single Git repository (see `git worktree`). */
export interface WorktreeInfo {
  path: string;
  /** False when the directory was deleted but Git still lists the worktree (run `git worktree prune`). */
  pathExists: boolean;
  headSha: string;
  branchName: string | null;
  parentSha: string | null;
  isCurrent: boolean;
  isPrunable: boolean;
}

export interface Commit {
  fullSha: string;
  sha: string;
  parentSha?: string | null;
  message: string;
  author: string;
  date: string;
  keywordCloud?: CommitKeyword[];
  promptWindowStart?: string | null;
  promptWindowEnd?: string | null;
  agentPrompts?: AgentPrompt[];
}

export interface CommitKeyword {
  text: string;
  weight: number;
}

export interface BranchCommitPreview {
  fullSha: string;
  sha: string;
  parentSha?: string | null;
  message: string;
  author: string;
  date: string;
  keywordCloud?: CommitKeyword[];
  kind?: 'commit' | 'branch-created' | 'uncommitted' | 'stash';
}

export interface AgentPrompt {
  id: string;
  agent: string;
  prompt: string;
  timestamp: string;
  source: string;
}

export interface BranchPromptMarker {
  id: string;
  agent: string;
  prompt: string;
  timestamp: string;
}

export interface BranchPromptMeta {
  count: number;
  latestPrompt?: string;
  latestAgent?: string;
  latestTimestamp?: string;
  markers?: BranchPromptMarker[];
}

export interface DirectCommit {
  fullSha: string;
  sha: string;
  parentSha?: string | null;
  message: string;
  author: string;
  date: string;
  keywordCloud?: CommitKeyword[];
  kind?: 'commit' | 'uncommitted' | 'stash';
}

export interface MergeNode {
  sha: string;
  fullSha: string;
  prNumber: number | null;
  prTitle: string | null;
  date: string;
  parentShas: string[];
  targetBranch: string;
  targetCommitSha: string;
}

export interface MergedPR {
  number: number;
  title: string;
  branchName: string;
  authorLogin: string;
  authorAvatar: string;
  createdAt: string;
  mergedAt: string;
  mergeCommitSha: string;
  commitCount: number;
}

export interface OpenPR {
  number: number;
  branchName: string;
}

export interface GitHubInfo {
  owner: string;
  repo: string;
  ghAvailable: boolean;
}

export interface GitHubAuthStatus {
  ghAvailable: boolean;
  authenticated: boolean;
  username?: string | null;
  message?: string | null;
}

export interface ChangedFile {
  filename: string;
  additions: number;
  deletions: number;
  status: string;
}

export interface ComponentGroup {
  label: string;
  folder: string;
  additions: number;
  deletions: number;
  files: ChangedFile[];
}
