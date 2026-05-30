import { invoke } from '@tauri-apps/api/core';

export type RemoteTipMetadata = {
  subject: string;
  author: string;
};

export type RemoteTipState = {
  tipSha: string | null;
  metadata: RemoteTipMetadata | null;
  parentSha: string | null;
  hydrated: boolean;
};

export type RemoteSyncResult = {
  fetched: boolean;
  pulled: boolean;
  changed: boolean;
  remoteHeadsDigest: string;
};

export type SyncRemoteRepoResult = {
  sync: RemoteSyncResult;
  tipState: RemoteTipState;
};

async function resolveRemoteTipParentSha(
  repoPath: string,
  defaultBranch: string,
  tipSha: string,
  checkedOutHeadSha: string | null | undefined,
): Promise<string | null> {
  const localDefaultHead = await invoke<string>('get_branch_head_sha', {
    repoPath,
    branch: defaultBranch,
  }).catch(() => null);
  const anchorHead =
    localDefaultHead
    ?? (checkedOutHeadSha && checkedOutHeadSha.length > 0 ? checkedOutHeadSha : null);

  if (anchorHead) {
    const mergeBase = await invoke<string | null>('get_merge_base', {
      repoPath,
      leftSha: tipSha,
      rightSha: anchorHead,
    }).catch(() => null);
    if (mergeBase) {
      return mergeBase;
    }
    if (anchorHead !== tipSha) {
      return anchorHead;
    }
  }

  return invoke<string | null>('get_commit_parent_sha', {
    repoPath,
    sha: tipSha,
  }).catch(() => null);
}

async function resolveRemoteTipState(
  repoPath: string,
  defaultBranch: string,
  checkedOutHeadSha: string | null | undefined,
): Promise<RemoteTipState> {
  const tipSha = await invoke<string | null>('get_remote_branch_head_sha', {
    repoPath,
    branch: defaultBranch,
  }).catch(() => null);

  if (tipSha == null) {
    return {
      tipSha: null,
      metadata: null,
      parentSha: null,
      hydrated: true,
    };
  }

  const localDefaultHead = await invoke<string>('get_branch_head_sha', {
    repoPath,
    branch: defaultBranch,
  }).catch(() => null);
  if (localDefaultHead && localDefaultHead === tipSha) {
    return {
      tipSha: null,
      metadata: null,
      parentSha: null,
      hydrated: true,
    };
  }

  const [metadata, parentSha] = await Promise.all([
    invoke<RemoteTipMetadata | null>('get_commit_metadata', {
      repoPath,
      sha: tipSha,
    }).catch(() => null),
    resolveRemoteTipParentSha(repoPath, defaultBranch, tipSha, checkedOutHeadSha),
  ]);

  return {
    tipSha,
    metadata: metadata && metadata.subject.trim().length > 0 ? metadata : null,
    parentSha,
    hydrated: true,
  };
}

export async function syncRemoteRepo(
  repoPath: string,
  defaultBranch: string,
  previousDigest: string | null,
  checkedOutHeadSha: string | null | undefined,
  options?: { pullFfOnly?: boolean },
): Promise<SyncRemoteRepoResult> {
  const sync = await invoke<RemoteSyncResult>('sync_remote_repository', {
    repoPath,
    pullFfOnly: options?.pullFfOnly ?? true,
  }).catch(() => ({
    fetched: false,
    pulled: false,
    changed: false,
    remoteHeadsDigest: previousDigest ?? '',
  }));

  const digestChanged = Boolean(
    sync.remoteHeadsDigest
    && previousDigest
    && sync.remoteHeadsDigest !== previousDigest,
  );
  const syncChanged = sync.changed || digestChanged || (!previousDigest && !!sync.remoteHeadsDigest);

  const tipState = await resolveRemoteTipState(repoPath, defaultBranch, checkedOutHeadSha);

  return {
    sync: {
      ...sync,
      changed: syncChanged,
    },
    tipState,
  };
}
