import { Typography, Link } from '@mui/material';

export function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://okea.com.br/">
          ŌKEA
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }