import ReactDOM from 'react-dom/client';
import App from './App';
import RootLayout from './RootLayout';
import { installReloadIntercept } from './reloadIntercept';
import './index.css';

installReloadIntercept();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RootLayout>
    <App />
  </RootLayout>
);
