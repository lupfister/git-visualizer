import ReactDOM from 'react-dom/client';
import App from './App';
import RootLayout from './RootLayout';
import './index.css';

const HARD_RELOAD_GUARD_KEY = 'git-visualizer:hard-reload';

// Cmd+R / Ctrl+R → soft repo refresh (avoids full webview reload loops in Tauri).
// Shift+Cmd+R / Shift+Ctrl+R → hard reload with a one-shot guard.
document.addEventListener('keydown', (e) => {
  if (!(e.metaKey || e.ctrlKey) || e.key.toLowerCase() !== 'r') return;
  e.preventDefault();
  if (e.shiftKey) {
    if (sessionStorage.getItem(HARD_RELOAD_GUARD_KEY) === '1') return;
    sessionStorage.setItem(HARD_RELOAD_GUARD_KEY, '1');
    window.location.reload();
    return;
  }
  window.dispatchEvent(new CustomEvent('git-visualizer:reload'));
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RootLayout>
    <App />
  </RootLayout>
);
