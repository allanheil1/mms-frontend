import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from '@/App';
import ThemeProvider from '@/contexts/Theme/ThemeProvider';
import '@/locales/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
      <ThemeProvider>
          <App />
      </ThemeProvider>
  </StrictMode>,
);
