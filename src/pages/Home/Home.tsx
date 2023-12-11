import { useState, useEffect, useContext } from 'react';
import { Typography, Stack, Container } from '@mui/material';
import useBoolean from '@/hooks/useBoolean';
import useDebounce from '@/hooks/useDebounce';
import TemplateTester from '@/components/TemplateTester';

function Teste() {
  const { value: isVisibleButton, setTrue: showButton, setFalse: hideButton, toggle: toggleButton } = useBoolean(false);
  const { value: isVisibleImage, setTrue: showImage, setFalse: hideImage, toggle: toggleImage } = useBoolean(false);
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

      <p>A imagem está visível: {isVisibleImage.toString()}</p>
      {isVisibleImage && <img src="sua-imagem.jpg" alt="Minha Imagem" />}
      <button onClick={showImage}>Mostrar Imagem</button>
      <button onClick={hideImage}>Ocultar Imagem</button>
      <button onClick={toggleImage}>Alternar Visibilidade da Imagem</button>

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
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          Vite-MUI-TS MMS - by OKEA
        </Typography>
        <Teste/>
        <TemplateTester/>
      </Stack>
    </Container>
  );
};

export default Home;
