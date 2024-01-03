import { ReactNode, useState } from 'react';
import CustomSnackBar from '@/components/Snackbar';
import { ThemeContext, Severity } from '@/contexts/Theme/ThemeContext';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { CustomTheme } from '@/themes/Theme';

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
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
        openSnackbar('warning', 'Invertendo Tema!')
    }

    function openSnackbar(severity: Severity, message: string) {
        setSnackbarSeverity(severity);
        setSnackbarMessage(message);
        setSnackbarOpen(true);
    }

    function closeSnackbar() {
        setSnackbarOpen(false);
    }

    const theme = CustomTheme({isDarkMode});

    return (
        <MuiThemeProvider theme={theme}>
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
                        autoHideDuration={3000}
                    />
                )}
            </ThemeContext.Provider>
        </MuiThemeProvider>
    );
}