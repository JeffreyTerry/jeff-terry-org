import React, { useMemo } from 'react';
import Home from '../components/Home';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { useColorMode } from 'react-use-color-mode';
import { DARK_THEME, LIGHT_THEME } from '../utils/constants';
import './index.css';

function IndexPage() {
  const colorMode = useColorMode();

  const theme = useMemo(() => {
    return colorMode === 'light' ? LIGHT_THEME : DARK_THEME;
  }, [colorMode]);

  return (
    <main>
      <Helmet>
        <title>Jeff Terry</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </main>
  );
}

export default IndexPage;
