import ReactDOM from 'react-dom/client';
import App from './App';
import RootLayout from './RootLayout';
import './index.css';

// Cmd+R / Ctrl+R → reload (Tauri doesn't wire this up automatically)
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'r') {
    e.preventDefault();
    location.reload();
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RootLayout>
    <App />
  </RootLayout>
);
