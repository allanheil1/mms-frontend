import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from '@/routes/Routing';
import UserProvider from './contexts/User/UserProvider';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <CssBaseline />
        <Routing />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
