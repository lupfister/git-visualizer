import { Branch, BranchStatus, Commit, MergeNode, MergedPR, ChangedFile, ComponentGroup } from '@/types';

const GITHUB_API = 'https://api.github.com';
const STALE_DAYS = 14;

function makeHeaders(token?: string) {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  return headers;
}

function staleness(lastCommitDate: string): BranchStatus {
  const days = (Date.now() - new Date(lastCommitDate).getTime()) / (1000 * 60 * 60 * 24);
  return days >= STALE_DAYS ? 'stale' : 'fresh';
}

export async function fetchBranches(
  owner: string,
  repo: string,
  token?: string,
  page = 1,
  knownDefaultBranch?: string,
): Promise<{ branches: Branch[]; defaultBranch: string; hasMore: boolean }> {
  const headers = makeHeaders(token);

  // Get repo info for default branch (skip on subsequent pages when already known)
  let defaultBranch = knownDefaultBranch ?? 'main';
  if (!knownDefaultBranch) {
    const repoRes = await fetch(`${GITHUB_API}/repos/${owner}/${repo}`, { headers });
    if (!repoRes.ok) {
      let ghMessage = '';
      try { ghMessage = (await repoRes.json()).message ?? ''; } catch {}
      if (repoRes.status === 404) throw new Error(`Repository not found (404)${ghMessage ? ': ' + ghMessage : ''}`);
      if (repoRes.status === 401) throw new Error(`Invalid token (401)${ghMessage ? ': ' + ghMessage : ''}`);
      if (repoRes.status === 403) throw new Error(`Access denied (403)${ghMessage ? ': ' + ghMessage : ''}`);
      throw new Error(`GitHub error ${repoRes.status}${ghMessage ? ': ' + ghMessage : ''}`);
    }
    const contentType = repoRes.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json')) {
      throw new Error('GitHub returned an unexpected response. If this is a private org repo, you may need to authorize your token for SSO.');
    }
    const repoData = await repoRes.json();
    defaultBranch = repoData.default_branch ?? 'main';
  }

  // List one page of branches
  const branchListRes = await fetch(
    `${GITHUB_API}/repos/${owner}/${repo}/branches?per_page=100&page=${page}`,
    { headers }
  );
  if (!branchListRes.ok) throw new Error(`Branches fetch failed: ${branchListRes.status}`);
  const branchList: { name: string; commit: { sha: string } }[] = await branchListRes.json();
  const hasMore = branchList.length === 100;

  // Compare each branch to default in parallel
  const branches: Branch[] = await Promise.all(
    branchList.map(async (b: { name: string; commit: { sha: string } }) => {
      const name: string = b.name;
      const headSha: string = b.commit.sha;

      // Fetch full commit data to get author info (branch list API doesn't include it)
      let lastCommitDate = new Date().toISOString();
      let lastCommitAuthor = '';
      let lastCommitAuthorAvatar = '';
      try {
        const commitRes = await fetch(
          `${GITHUB_API}/repos/${owner}/${repo}/commits/${headSha}`,
          { headers }
        );
        if (commitRes.ok) {
          const commitData = await commitRes.json();
          lastCommitDate = commitData.commit?.author?.date ?? lastCommitDate;
          lastCommitAuthor = commitData.commit?.author?.name ?? '';
          lastCommitAuthorAvatar = commitData.author?.avatar_url ?? '';
        }
      } catch {}

      if (name === defaultBranch) {
        return {
          name,
          commitsAhead: 0,
          commitsBehind: 0,
          presidesFromSha: null,
          lastCommitDate,
          lastCommitAuthor,
          lastCommitAuthorAvatar,
          mergeable: null,
          status: 'fresh' as BranchStatus,
          remoteSyncStatus: 'on-github' as const,
          unpushedCommits: 0,
          headSha,
        };
      }

      try {
        const compareRes = await fetch(
          `${GITHUB_API}/repos/${owner}/${repo}/compare/${defaultBranch}...${encodeURIComponent(name)}`,
          { headers }
        );
        if (!compareRes.ok) {
          return {
            name,
            commitsAhead: 0,
            commitsBehind: 0,
            lastCommitDate,
            lastCommitAuthor,
            lastCommitAuthorAvatar,
            mergeable: null,
            status: staleness(lastCommitDate),
            remoteSyncStatus: 'on-github' as const,
            unpushedCommits: 0,
            headSha,
          };
        }
        const compare = await compareRes.json();
        const commitsAhead: number = compare.ahead_by ?? 0;
        const commitsBehind: number = compare.behind_by ?? 0;
        const divergedFromSha: string = compare.merge_base_commit?.sha;
        const divergedFromDate: string | undefined = compare.merge_base_commit?.commit?.author?.date;
        const mergeable: boolean | null = compare.mergeable ?? null;
        const presidesFromSha: string | null = compare.merge_base_commit?.sha ?? null;

        // We intentionally do not surface "conflict risk" as a separate UI status.
        // Mergeability still influences the `mergeable` field, but the visible state
        // falls back to fresh/stale based on last commit date.
        const status: BranchStatus = staleness(lastCommitDate);

        return {
          name,
          commitsAhead,
          commitsBehind,
          presidesFromSha,
          lastCommitDate,
          lastCommitAuthor,
          lastCommitAuthorAvatar,
          mergeable,
          status,
          remoteSyncStatus: 'on-github' as const,
          unpushedCommits: 0,
          divergedFromSha,
          divergedFromDate,
          headSha,
        };
      } catch {
        return {
          name,
          commitsAhead: 0,
          commitsBehind: 0,
          presidesFromSha: null,
          lastCommitDate,
          lastCommitAuthor,
          lastCommitAuthorAvatar,
          mergeable: null,
          status: 'unknown' as BranchStatus,
          remoteSyncStatus: 'on-github' as const,
          unpushedCommits: 0,
          headSha,
        };
      }
    })
  );

  return { branches, defaultBranch, hasMore };
}

export async function fetchBranchCommits(
  owner: string,
  repo: string,
  branch: string,
  base: string,
  token?: string
): Promise<Commit[]> {
  const headers = makeHeaders(token);
  const allCommits: Array<{ sha: string; commit: { message: string; author: { name: string; date: string } }; author: { avatar_url: string } | null }> = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const res = await fetch(
      `${GITHUB_API}/repos/${owner}/${repo}/compare/${base}...${encodeURIComponent(branch)}?page=${page}&per_page=${perPage}`,
      { headers }
    );
    if (!res.ok) break;
    const data = await res.json();
    const commits = Array.isArray(data.commits) ? data.commits : [];
    if (commits.length === 0) break;
    allCommits.push(...commits);
    if (commits.length < perPage) break;
    page += 1;
  }

  return allCommits.map((c) => ({
    sha: c.sha.slice(0, 7),
    message: c.commit.message.split('\n')[0],
    author: c.commit.author.name,
    authorAvatar: c.author?.avatar_url ?? '',
    date: c.commit.author.date,
  }));
}

export async function fetchChangedFiles(
  owner: string,
  repo: string,
  branch: string,
  base: string,
  token?: string
): Promise<{ files: ChangedFile[]; groups: ComponentGroup[] }> {
  const headers = makeHeaders(token);
  const allFiles: ChangedFile[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const res = await fetch(
      `${GITHUB_API}/repos/${owner}/${repo}/compare/${base}...${encodeURIComponent(branch)}?page=${page}&per_page=${perPage}`,
      { headers }
    );
    if (!res.ok) return { files: [], groups: [] };
    const data = await res.json();
    const files = Array.isArray(data.files) ? data.files : [];
    if (files.length === 0) break;
    allFiles.push(
      ...files.map((f: { filename: string; additions: number; deletions: number; status: string }) => ({
        filename: f.filename,
        additions: f.additions,
        deletions: f.deletions,
        status: f.status,
      }))
    );
    if (files.length < perPage) break;
    page += 1;
  }

  // Group by top-level feature folder
  const groupMap = new Map<string, ComponentGroup>();
  for (const file of allFiles) {
    const parts = file.filename.split('/');
    const folder = parts.length > 1 ? parts.slice(0, 2).join('/') : parts[0];
    const label = cleanFolderLabel(folder);
    if (!groupMap.has(folder)) {
      groupMap.set(folder, { label, folder, additions: 0, deletions: 0, files: [] });
    }
    const g = groupMap.get(folder)!;
    g.additions += file.additions;
    g.deletions += file.deletions;
    g.files.push(file);
  }

  return { files: allFiles, groups: Array.from(groupMap.values()) };
}

export async function fetchMergedPRs(
  owner: string,
  repo: string,
  defaultBranch: string,
  token?: string
): Promise<MergedPR[]> {
  const headers = makeHeaders(token);
  const res = await fetch(
    `${GITHUB_API}/repos/${owner}/${repo}/pulls?state=closed&base=${defaultBranch}&per_page=100&sort=updated&direction=desc`,
    { headers }
  );
  if (!res.ok) return [];
  const prs = await res.json();
  if (!Array.isArray(prs)) return [];

  return prs
    .filter((pr: { merged_at: string | null }) => pr.merged_at !== null)
    .map((pr: {
      number: number;
      title: string;
      head: { ref: string; sha: string };
      user: { login: string; avatar_url: string };
      created_at: string;
      merged_at: string;
      commits: number;
    }) => ({
      number: pr.number,
      title: pr.title,
      branchName: pr.head.ref,
      authorLogin: pr.user.login,
      authorAvatar: pr.user.avatar_url,
      createdAt: pr.created_at,
      mergedAt: pr.merged_at,
      commitCount: pr.commits ?? 3,
    }));
}

function cleanFolderLabel(folder: string): string {
  const last = folder.split('/').pop() ?? folder;
  return last
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function fetchMainMergeNodes(
  owner: string,
  repo: string,
  defaultBranch: string,
  token?: string,
  page = 1,
  perPage = 100,
): Promise<{ nodes: MergeNode[]; hasMore: boolean }> {
  const headers = makeHeaders(token);
  const allCommits: Array<{ sha: string; commit: { message: string; author: { date: string } }; parents: { sha: string }[] }> = [];
  let currentPage = Math.max(1, page);
  let hasMore = false;

  while (true) {
    const res = await fetch(
      `${GITHUB_API}/repos/${owner}/${repo}/commits?sha=${defaultBranch}&per_page=${perPage}&page=${currentPage}`,
      { headers }
    );
    if (!res.ok) break;
    const commits = await res.json();
    if (!Array.isArray(commits) || commits.length === 0) {
      hasMore = false;
      break;
    }

    allCommits.push(...commits);
    hasMore = commits.length === perPage;
    if (!hasMore) break;
    currentPage += 1;
  }

  // Keep every commit on the default branch so the grid can infer the full
  // main-line history, including squash/rebase landing commits and the
  // repository's initial commit.
  const nodes = allCommits.map((c) => {
    const prMatch = c.commit.message.match(/#(\d+)/);
    const titleLine = c.commit.message.split('\n')[0];
    return {
      sha: c.sha.slice(0, 7),
      fullSha: c.sha,
      prNumber: prMatch ? parseInt(prMatch[1]) : null,
      prTitle: titleLine,
      date: c.commit.author.date,
      parentShas: c.parents.map((p) => p.sha),
      targetBranch: defaultBranch,
      targetCommitSha: c.sha,
    };
  });

  return { nodes, hasMore };
}
