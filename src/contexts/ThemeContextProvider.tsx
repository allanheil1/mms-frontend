import React, { createContext, ReactNode, useState } from "react";
import CustomSnackBar from '../components/Snackbar';

type Severity = 'error' | 'warning' | 'info' | 'success';

interface ThemeContextProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarOpen: boolean;
  setSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarSeverity: Severity;
  setSnackbarSeverity: React.Dispatch<React.SetStateAction<Severity>>;
  snackbarMessage: string;
  setSnackbarMessage: React.Dispatch<React.SetStateAction<string>>;
  openSnackbar: (severity: Severity, message: string) => void;
  closeSnackbar: () => void;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedMode = localStorage.getItem('mode');
    return storedMode === 'dark';
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<Severity>("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  function toggleMode() {
    setIsDarkMode((prevIsDarkMode) => {
      const newMode = !prevIsDarkMode;
      localStorage.setItem('mode', newMode ? 'dark' : 'light');
      return newMode;
    });
    setSnackbarOpen(!snackbarOpen);
    setSnackbarSeverity('warning');
    setSnackbarMessage("Invertendo Tema!")
  }

  function openSnackbar(severity: Severity, message: string) {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  }

  function closeSnackbar() {
    setSnackbarOpen(false);
  }

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        snackbarOpen,
        setSnackbarOpen,
        snackbarSeverity,
        setSnackbarSeverity,
        snackbarMessage,
        setSnackbarMessage,
        openSnackbar,
        closeSnackbar,
        toggleMode
      }}
    >
      {children}
      {snackbarOpen && (
        <CustomSnackBar
          open={snackbarOpen}
          severity={snackbarSeverity}
          message={snackbarMessage}
          onClose={closeSnackbar}
          autoHideDuration={2000}
        />
      )}
    </ThemeContext.Provider>
  );
}
