export type BranchStatus = 'fresh' | 'stale' | 'conflict-risk' | 'unknown';
export type RemoteSyncStatus = 'local-only' | 'unpushed' | 'on-github';

export interface Branch {
  name: string;
  commitsAhead: number;
  commitsBehind: number;
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
}

export interface Commit {
  fullSha: string;
  sha: string;
  parentSha?: string | null;
  message: string;
  author: string;
  date: string;
  promptWindowStart?: string | null;
  promptWindowEnd?: string | null;
  agentPrompts?: AgentPrompt[];
}

export interface BranchCommitPreview {
  fullSha: string;
  sha: string;
  message: string;
  author: string;
  date: string;
  kind?: 'commit' | 'branch-created';
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
  message: string;
  author: string;
  date: string;
}

export interface MergeNode {
  sha: string;
  fullSha: string;
  prNumber: number | null;
  prTitle: string | null;
  date: string;
  parentShas: string[];
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
