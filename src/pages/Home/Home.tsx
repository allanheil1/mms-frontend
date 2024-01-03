//import { useState, useEffect } from 'react';
import { ThemeContext } from '@/contexts/Theme&SnackBar/ThemeContext';
import { UserContext } from '@/contexts/User/UserContext';
import { Typography, Stack, Container, Button } from '@mui/material';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);
  const { t } = useTranslation();
  console.log(userContext.userInfo);
  return (
    <Container sx={{ py: 2, position: 'relative'}}>
      <Stack gap={2} my={2}>
        <Typography textAlign="center" variant="h2">
          {t("titulo")} 
        </Typography>
        {"Usuário Logado: " + userContext.userInfo.UsuarioNome} <br />
        {"Email: " + userContext.userInfo.UsuarioEmail} <br />
        {"Id do Usuário: " + userContext.userInfo.UsuarioId} <br />
        {"Id do Tenant: " + userContext.userInfo.TenantId} <br />
        {"Data de Expiração: " + userContext.userInfo.DataExpiracao} <br />
        {"Idioma: " + userContext.userInfo.IdiomaPadrao} <br />
      </Stack>
      <Button onClick={() => themeContext.setIsDarkMode(!themeContext.isDarkMode)}>
        MUDAR TEMA
      </Button> <br />
      <Button onClick={() => userContext.logout()}>
        DESLOGAR
      </Button>
    </Container>
  );
};

export default Home;
