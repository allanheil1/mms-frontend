import { Snackbar, Alert } from '@mui/material';
import { Severity } from '@/contexts/Theme/ThemeContext';
interface CustomSnackbarProps {
  open: boolean;
  onClose: () => void;
  severity: Severity;
  message: string;
  autoHideDuration: number;
}

function CustomSnackbar({ open, onClose, severity, message, autoHideDuration }: CustomSnackbarProps) {
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} onClose={onClose}>
      <Alert severity={severity} onClose={onClose} variant={'filled'}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;