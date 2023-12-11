import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import { CustomThemeProvider } from '@/contexts/CustomThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
  </StrictMode>,
);
