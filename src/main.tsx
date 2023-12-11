import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { ThemeProvider } from '@/contexts/ThemeContextProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
);
