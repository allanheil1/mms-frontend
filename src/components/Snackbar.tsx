import { FC } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { Severity } from '@/contexts/ThemeContext';

interface CustomSnackbarProps {
  open: boolean;
  onClose: () => void;
  severity: Severity;
  message: string;
  autoHideDuration: number;
}

const CustomSnackbar: FC<CustomSnackbarProps> = ({ open, onClose, severity, message, autoHideDuration }) => {
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} onClose={onClose}>
      <Alert severity={severity} onClose={onClose} variant={'filled'}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;