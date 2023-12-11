import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Routing from './routes/Routing';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContextProvider';
import { CustomTheme } from '@/themes/Theme';

const App = () => {
  useContext(ThemeContext);
  const isDarkMode = localStorage.getItem('mode') !== null ? localStorage.getItem('mode') === 'dark' ? true : false : false;
  const theme = CustomTheme({isDarkMode});
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routing />
      </BrowserRouter>
    </ThemeProvider>

  );
};

export default App;
