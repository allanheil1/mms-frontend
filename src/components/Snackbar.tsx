import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { ThemeProvider } from '@/contexts/ThemeContextProvider';

type Severity = 'error' | 'warning' | 'info' | 'success';

interface CustomSnackbarProps {
  open: boolean;
  onClose: () => void;
  severity: Severity;
  message: string;
  autoHideDuration: number;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({ open, onClose, severity, message, autoHideDuration }) => {
  return (
    <ThemeProvider>
      <Snackbar open={open} autoHideDuration={autoHideDuration} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} onClose={onClose}>
        <Alert severity={severity} onClose={onClose} variant={'filled'}>
          {message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default CustomSnackbar;