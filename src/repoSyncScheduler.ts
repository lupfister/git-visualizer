/**
 * Staggered repo sync timers with Page Visibility API catch-up.
 *
 * Design (aligned with MDN visibility guidance + event-driven git watching):
 * - Primary path: `.git` + working-tree file watcher (debounced) → immediate handling in App.
 * - Visible tab: fast dirty lane (quick state), medium peek lane (lite probe), slower full reconcile (may fetch remote).
 * - Hidden tab: keep the same cadence; desktop windows should stay current while unfocused.
 * - Tab becomes visible: reschedule timers and run catch-up immediately.
 */

export type RepoSyncLane = 'dirty' | 'peek' | 'full';

export type RepoSyncSchedulerIntervals = {
  dirtyMs: number;
  peekMs: number;
  fullMs: number;
};

export const REPO_SYNC_INTERVALS_VISIBLE: RepoSyncSchedulerIntervals = {
  dirtyMs: 400,
  peekMs: 5_000,
  fullMs: 30_000,
};

export const REPO_SYNC_INTERVALS_HIDDEN: RepoSyncSchedulerIntervals = REPO_SYNC_INTERVALS_VISIBLE;

/** Stagger lane starts so dirty / peek / full rarely fire in the same tick. */
export const REPO_SYNC_LANE_STAGGER_MS: Record<RepoSyncLane, number> = {
  dirty: 0,
  peek: 2_000,
  full: 4_000,
};

export type RepoSyncSchedulerHandlers = {
  onDirtyLane: () => void;
  onPeekLane: () => void;
  onFullLane: () => void;
  /** Runs immediately when the document becomes visible (user returned to the tab). */
  onVisibilityCatchUp: () => void;
  isDisposed?: () => boolean;
};

export type RepoSyncScheduler = {
  start: () => void;
  dispose: () => void;
  /** Force visible-interval timers and run catch-up (e.g. after repo switch). */
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
  const timeoutIds: Partial<Record<RepoSyncLane, number>> = {};
  let visibilityListener: (() => void) | null = null;
  let started = false;

  const clearLane = (lane: RepoSyncLane) => {
    const id = timeoutIds[lane];
    if (id != null) {
      window.clearTimeout(id);
      delete timeoutIds[lane];
    }
  };

  const clearAllLanes = () => {
    for (const lane of ['dirty', 'peek', 'full'] as const) {
      clearLane(lane);
    }
  };

  const scheduleLane = (lane: RepoSyncLane) => {
    if (handlers.isDisposed?.()) return;
    clearLane(lane);
    const intervals = resolveRepoSyncIntervals();
    const delayMs =
      lane === 'dirty' ? intervals.dirtyMs : lane === 'peek' ? intervals.peekMs : intervals.fullMs;

    timeoutIds[lane] = window.setTimeout(() => {
      delete timeoutIds[lane];
      if (handlers.isDisposed?.()) return;

      if (lane === 'dirty') handlers.onDirtyLane();
      else if (lane === 'peek') handlers.onPeekLane();
      else handlers.onFullLane();

      scheduleLane(lane);
    }, delayMs);
  };

  const scheduleAllLanes = () => {
    clearAllLanes();
    if (handlers.isDisposed?.()) return;
    const intervals = resolveRepoSyncIntervals();
    const hidden = isDocumentHidden();

    for (const lane of ['dirty', 'peek', 'full'] as const) {
      const delayMs =
        (lane === 'dirty' ? intervals.dirtyMs : lane === 'peek' ? intervals.peekMs : intervals.fullMs)
        + (hidden ? 0 : REPO_SYNC_LANE_STAGGER_MS[lane]);
      timeoutIds[lane] = window.setTimeout(() => {
        delete timeoutIds[lane];
        if (handlers.isDisposed?.()) return;
        if (lane === 'dirty') handlers.onDirtyLane();
        else if (lane === 'peek') handlers.onPeekLane();
        else handlers.onFullLane();
        scheduleLane(lane);
      }, delayMs);
    }
  };

  const runVisibilityCatchUp = () => {
    if (handlers.isDisposed?.()) return;
    handlers.onVisibilityCatchUp();
  };

  const onVisibilityChange = () => {
    if (handlers.isDisposed?.()) return;
    if (document.visibilityState === 'visible') {
      scheduleAllLanes();
      runVisibilityCatchUp();
    } else {
      scheduleAllLanes();
    }
  };

  const start = () => {
    if (started) return;
    started = true;
    scheduleAllLanes();
    if (typeof document !== 'undefined') {
      visibilityListener = onVisibilityChange;
      document.addEventListener('visibilitychange', visibilityListener);
    }
  };

  const dispose = () => {
    started = false;
    clearAllLanes();
    if (visibilityListener && typeof document !== 'undefined') {
      document.removeEventListener('visibilitychange', visibilityListener);
      visibilityListener = null;
    }
  };

  const kickVisibleCatchUp = () => {
    scheduleAllLanes();
    if (!isDocumentHidden()) {
      runVisibilityCatchUp();
    }
  };

  return { start, dispose, kickVisibleCatchUp };
}
