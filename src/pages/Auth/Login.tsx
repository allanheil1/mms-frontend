import { useContext } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography, Box, Container, TextField, Button, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AxiosResponse } from 'axios';
import { ReqLogin, LoginBody, LoginResponse } from '@/services/AuthRequests';
import { ThemeContext } from '@/contexts/Theme&SnackBar/ThemeContext';
import { Copyright } from '@/components/Copyright';

export default function SignIn() {

  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  
    const body: LoginBody = {
      Login: formData.get('login') as string,
      Senha: formData.get('password') as string,
      Idioma: 'pt-BR',
    };
  
    ReqLogin(body)
      .then((response: AxiosResponse | null) => {
        console.log(response);
        const responseData: LoginResponse = response?.data;
        console.log('Token:', responseData.resultado.token);
      })
      .catch((error) => {
        console.error('Erro na chamada da API de login:', error);
      });
  };

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h2">
            MMS
          </Typography>
          <Avatar sx={{ mt: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Login"
              name="login"
              autoComplete="login"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ height: 50, mt: 2, mb: 2, fontWeight: 'bold'}}
            >
              {t('Entrar')}
            </Button>
          </Box>
        </Box>
        <Copyright />
      </Container>
  );
}

