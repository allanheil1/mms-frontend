import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const App = () => {

  const { i18n } = useTranslation();
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  return (
    <BrowserRouter>
      <CssBaseline />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
