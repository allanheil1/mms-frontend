//import { useState, useEffect } from 'react';
import { Typography, Stack, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ py: 2, position: 'relative'}}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          {t("titulo")} 
        </Typography>
      </Stack>
    </Container>
  );
};

export default Home;
