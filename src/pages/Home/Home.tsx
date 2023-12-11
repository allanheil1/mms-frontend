import React from 'react';
import { Typography, Stack, Container, useTheme } from '@mui/material';
import { ThemeContext } from '@/contexts/ThemeContextProvider';
import useBoolean from '@/hooks/useBoolean'; // Importe o hook
import useDebounce from '@/hooks/useDebounce'; // Importe o hook
import TemplateTester from '@/components/TemplateTester';

function SeuComponente() {
  const { value: isVisibleButton, setTrue: showButton, setFalse: hideButton, toggle: toggleButton } = useBoolean(false);
  const { value: isVisibleImage, setTrue: showImage, setFalse: hideImage, toggle: toggleImage } = useBoolean(false);

  // Use o hook useDebounce para atrasar a atualização do termo de pesquisa
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1500);

  // Exemplo de uso do termo de pesquisa debounced para uma operação (poderia ser uma chamada à API, por exemplo)
  React.useEffect(() => {
    // Realize alguma ação usando debouncedSearchTerm
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

      {/* Input para o termo de pesquisa */}
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
  const themeContext = React.useContext(ThemeContext);
  if (!themeContext) {
    console.error("Theme context is undefined");
    return null;
  }
  const { toggleMode } = themeContext;
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          Vite-MUI-TS MMS - by OKEA
        </Typography>
        <button onClick={toggleMode}>Toggle Theme</button>
        <SeuComponente/>
        <TemplateTester/>
      </Stack>
    </Container>
  );
};

export default Home;
