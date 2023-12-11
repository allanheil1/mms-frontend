import { useContext } from 'react';
import { ThemeContext } from '@/contexts/Theme&SnackBar/ThemeContext';

const Login = () => {
  const themeContext = useContext(ThemeContext);
  const { isDarkMode } = themeContext;
  return (String(isDarkMode));
};

export default Login;
