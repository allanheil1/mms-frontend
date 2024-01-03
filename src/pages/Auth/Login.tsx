import { useContext, useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography, Box, Container, TextField, Button, Avatar, InputAdornment, IconButton, CircularProgress } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ReqLogin, LoginBody, LoginResponse } from '@/services/AuthRequests';
import { ThemeContext } from '@/contexts/Theme&SnackBar/ThemeContext';
import { Copyright } from '@/components/Copyright';
import { UserContext } from '@/contexts/User/UserContext';

export default function SignIn() {
  const { openSnackbar } = useContext(ThemeContext);
  const { setUserInfo } = useContext(UserContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const LoginBody: LoginBody = {
      Login: formData.get('login') as string,
      Senha: formData.get('password') as string,
      Idioma: navigator.language || 'pt-BR',
    };
    ReqLogin(LoginBody)
      .then((response: AxiosResponse | null) => {
        const responseData: LoginResponse = response?.data;
        if(responseData?.sucesso){
          openSnackbar('success', `${t('LoginSuccess')} - ${responseData.tempoResposta}ms`);
          //armazena token no localStorage do navegador
          localStorage.setItem('token', responseData.resultado.token)
          //decodifica o token para pegar as informações 'escondidas' nele
          const [, payload] = responseData.resultado.token.split('.');
          const decodedPayload = JSON.parse(atob(payload));
          console.log(decodedPayload);
          //atualiza o contexto de usuário com as informações provenientes do token
          setUserInfo({
            TenantId: decodedPayload.Tenant_Id,
            UsuarioId: decodedPayload.Usuario_Id,
            UsuarioEmail: decodedPayload.Usuario_Email,
            UsuarioNome: decodedPayload.Usuario_Nome,
            DataExpiracao: decodedPayload.Data_Expiracao,
            IdiomaPadrao: decodedPayload.IdiomaPadrao
          });
          setLoginSuccess(true);
          navigate('/');
        }else{
          setLoginSuccess(false);
          if(responseData){
            openSnackbar('error', `${responseData?.mensagem} - ${responseData?.tempoResposta}ms`);
          }else{
            openSnackbar('error', 'Serviço inacessível');
          }
        }
      })
      .catch((error: AxiosError) => {
        setLoginSuccess(false);
        console.error('Erro na chamada da API de login:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleClickShowPassword = (): void => {
    setShowPassword((show: boolean) => !show);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
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
              error={!loginSuccess}
              disabled={isLoading}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              error={!loginSuccess}
              disabled={isLoading}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              sx={{ height: 50, mt: 2, mb: 2, fontWeight: 'bold', color: 'white'}}
            >
              {isLoading ?
                <CircularProgress size={20} color={'primary'} />
                :
                <Typography>
                  {t('Entrar')}
                </Typography>
              }
            </Button>
          </Box>
        </Box>
        <Copyright />
      </Container>
  );
}

