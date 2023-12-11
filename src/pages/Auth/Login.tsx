import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

const Login = () => {
  const themeContext = useContext(ThemeContext);
  const { isDarkMode } = themeContext;
  return (String(isDarkMode));
};

export default Login;
