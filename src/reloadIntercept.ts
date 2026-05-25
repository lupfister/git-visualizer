const HARD_RELOAD_GUARD_KEY = 'git-visualizer:hard-reload';
const ACTIVE_PROJECT_STORAGE_KEY = 'git-visualizer:active-project';
const RELOAD_EVENT = 'git-visualizer:reload';

const hasActiveProject = (): boolean => {
  try {
    return Boolean(window.localStorage.getItem(ACTIVE_PROJECT_STORAGE_KEY));
  } catch {
    return false;
  }
};

const dispatchSoftReload = (bustLayout = false) => {
  window.dispatchEvent(
    new CustomEvent(RELOAD_EVENT, { detail: bustLayout ? { bustLayout: true } : undefined }),
  );
};

/** Route reload keyboard shortcuts to incremental refresh instead of full webview reload. */
export const installReloadIntercept = () => {
  document.addEventListener(
    'keydown',
    (event) => {
      const key = event.key.toLowerCase();
      const isReloadKey = key === 'f5' || ((event.metaKey || event.ctrlKey) && key === 'r');
      if (!isReloadKey) return;
      event.preventDefault();

      if (key === 'f5') {
        dispatchSoftReload(false);
        return;
      }

      if (event.shiftKey) {
        if (hasActiveProject()) {
          dispatchSoftReload(true);
          return;
        }
        if (sessionStorage.getItem(HARD_RELOAD_GUARD_KEY) === '1') return;
        sessionStorage.setItem(HARD_RELOAD_GUARD_KEY, '1');
        window.location.reload();
        return;
      }

      dispatchSoftReload(false);
    },
    true,
  );
};
