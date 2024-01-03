import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from '@/App';
import ThemeProvider from '@/contexts/Theme&SnackBar/ThemeProvider';
import '@/locales/i18n';
import UserProvider from './contexts/User/UserProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
      <ThemeProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ThemeProvider>
  </StrictMode>,
);
