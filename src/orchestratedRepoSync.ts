/**
 * Single peek → one sync action. Avoids duplicate fetchRepoSyncPeek / overlapping reload + refresh.
 */

export type RepoSyncPeekLike = {
  signature: string;
};

export type OrchestratedSyncContext = {
  peek: RepoSyncPeekLike | null;
  gitActivityPending: boolean;
  isBehindPeek: boolean;
};

export type OrchestratedSyncMode = 'catchUp' | 'peekLane';

export type OrchestratedSyncPlan = 'reload' | 'fullRefresh' | 'none';

export function planOrchestratedSync(
  ctx: OrchestratedSyncContext,
  mode: OrchestratedSyncMode,
): OrchestratedSyncPlan {
  if (ctx.peek && (ctx.gitActivityPending || ctx.isBehindPeek)) {
    return 'reload';
  }
  if (mode === 'peekLane') {
    return 'none';
  }
  return 'fullRefresh';
}

export type OrchestratedSyncActions = {
  reloadFromGit: () => void | Promise<void>;
  runFullRefresh: () => void | Promise<void>;
};

export async function runOrchestratedRepoSync(
  ctx: OrchestratedSyncContext,
  mode: OrchestratedSyncMode,
  actions: OrchestratedSyncActions,
): Promise<OrchestratedSyncPlan> {
  const plan = planOrchestratedSync(ctx, mode);
  if (plan === 'reload') {
    await actions.reloadFromGit();
  } else if (plan === 'fullRefresh') {
    await actions.runFullRefresh();
  }
  return plan;
}
