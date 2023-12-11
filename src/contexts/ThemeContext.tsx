import { Dispatch, createContext, SetStateAction } from "react";

export type Severity = 'error' | 'warning' | 'info' | 'success';

interface ThemeContextProps {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  snackbarOpen: boolean;
  setSnackbarOpen: Dispatch<SetStateAction<boolean>>;
  snackbarSeverity: Severity;
  setSnackbarSeverity: Dispatch<SetStateAction<Severity>>;
  snackbarMessage: string;
  setSnackbarMessage: Dispatch<SetStateAction<string>>;
  openSnackbar: (severity: Severity, message: string) => void;
  closeSnackbar: () => void;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

