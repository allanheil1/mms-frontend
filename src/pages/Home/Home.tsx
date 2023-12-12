import { useState, useEffect } from 'react';
import { Typography, Stack, Container } from '@mui/material';
import useBoolean from '@/hooks/useBoolean';
import useDebounce from '@/hooks/useDebounce';
import TemplateTester from '@/components/TemplateTester';
import { useTranslation } from 'react-i18next';

function Teste() {
  const { value: isVisibleButton, setTrue: showButton, setFalse: hideButton, toggle: toggleButton } = useBoolean(false);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1500);

  useEffect(() => {
    console.log('Termo de pesquisa debounced:', debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div>
      <p>O botão está visível: {isVisibleButton.toString()}</p>
      {isVisibleButton && <button>Meu Botão</button>}
      <button onClick={showButton}>Mostrar Botão</button>
      <button onClick={hideButton}>Ocultar Botão</button>
      <button onClick={toggleButton}>Alternar Visibilidade do Botão</button>
      <input
        type="text"
        placeholder="Digite o termo de pesquisa"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          {t("titulo")} 
        </Typography>
        <Teste/>
        <TemplateTester/>
      </Stack>
    </Container>
  );
};

export default Home;
