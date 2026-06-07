/**
 * One frequent local reconcile timer plus a slow repair/remote timer.
 * The reconcile handler owns change detection and must be cheap when unchanged.
 */

export type RepoSyncSchedulerIntervals = {
  reconcileMs: number;
  repairMs: number;
};

export const REPO_SYNC_INTERVALS_VISIBLE: RepoSyncSchedulerIntervals = {
  dirtyMs: 8_000,
  peekMs: 20_000,
  fullMs: 60_000,
};

export const REPO_SYNC_INTERVALS_HIDDEN: RepoSyncSchedulerIntervals = {
  dirtyMs: 30_000,
  peekMs: 60_000,
  fullMs: 180_000,
};

export type RepoSyncSchedulerHandlers = {
  onReconcile: () => void;
  onRepair: () => void;
  isDisposed?: () => boolean;
};

export type RepoSyncScheduler = {
  start: () => void;
  dispose: () => void;
  kickVisibleCatchUp: () => void;
};

function isDocumentHidden(): boolean {
  if (typeof document === 'undefined') return false;
  return document.visibilityState !== 'visible';
}

export function resolveRepoSyncIntervals(hidden = isDocumentHidden()): RepoSyncSchedulerIntervals {
  return hidden ? REPO_SYNC_INTERVALS_HIDDEN : REPO_SYNC_INTERVALS_VISIBLE;
}

export function createRepoSyncScheduler(handlers: RepoSyncSchedulerHandlers): RepoSyncScheduler {
  let reconcileId: number | null = null;
  let repairId: number | null = null;
  let visibilityListener: (() => void) | null = null;
  let started = false;

  const clearTimers = () => {
    if (reconcileId != null) window.clearTimeout(reconcileId);
    if (repairId != null) window.clearTimeout(repairId);
    reconcileId = null;
    repairId = null;
  };

  const scheduleReconcile = () => {
    if (handlers.isDisposed?.()) return;
    reconcileId = window.setTimeout(() => {
      reconcileId = null;
      if (handlers.isDisposed?.()) return;
      handlers.onReconcile();
      scheduleReconcile();
    }, resolveRepoSyncIntervals().reconcileMs);
  };

  const scheduleRepair = () => {
    if (handlers.isDisposed?.()) return;
    repairId = window.setTimeout(() => {
      repairId = null;
      if (handlers.isDisposed?.()) return;
      handlers.onRepair();
      scheduleRepair();
    }, resolveRepoSyncIntervals().repairMs);
  };

  const scheduleAll = () => {
    clearTimers();
    scheduleReconcile();
    scheduleRepair();
  };

  const onVisibilityChange = () => {
    scheduleAll();
    if (!isDocumentHidden() && !handlers.isDisposed?.()) handlers.onReconcile();
  };

  const start = () => {
    if (started) return;
    started = true;
    scheduleAll();
    if (typeof document !== 'undefined') {
      visibilityListener = onVisibilityChange;
      document.addEventListener('visibilitychange', visibilityListener);
    }
  };

  const dispose = () => {
    started = false;
    clearTimers();
    if (visibilityListener && typeof document !== 'undefined') {
      document.removeEventListener('visibilitychange', visibilityListener);
      visibilityListener = null;
    }
  };

  const kickVisibleCatchUp = () => {
    scheduleAll();
    if (!isDocumentHidden()) handlers.onReconcile();
  };

  return { start, dispose, kickVisibleCatchUp };
}
