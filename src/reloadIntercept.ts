const RELOAD_SYNC_KEY = 'gitviz:request-reload-sync';

/** Wire Cmd+R / F5 to webview reload (Tauri/WKWebView has no default keyboard binding). */
export const installReloadIntercept = () => {
  document.addEventListener(
    'keydown',
    (event) => {
      if (event.shiftKey || event.altKey) return;

      const key = event.key.toLowerCase();
      const isReloadKey = key === 'f5' || ((event.metaKey || event.ctrlKey) && key === 'r');
      if (!isReloadKey) return;

      try {
        window.sessionStorage.setItem(RELOAD_SYNC_KEY, '1');
      } catch {
        // sessionStorage may be unavailable; reload still proceeds.
      }
      event.preventDefault();
      window.location.reload();
    },
    true,
  );
};

export const consumeReloadSyncRequest = (): boolean => {
  try {
    if (window.sessionStorage.getItem(RELOAD_SYNC_KEY) !== '1') return false;
    window.sessionStorage.removeItem(RELOAD_SYNC_KEY);
    return true;
  } catch {
    return false;
  }
};
