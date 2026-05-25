/** Wire Cmd+R / F5 to webview reload (Tauri/WKWebView has no default keyboard binding). */
export const installReloadIntercept = () => {
  document.addEventListener(
    'keydown',
    (event) => {
      if (event.shiftKey || event.altKey) return;

      const key = event.key.toLowerCase();
      const isReloadKey = key === 'f5' || ((event.metaKey || event.ctrlKey) && key === 'r');
      if (!isReloadKey) return;

      event.preventDefault();
      window.location.reload();
    },
    true,
  );
};
