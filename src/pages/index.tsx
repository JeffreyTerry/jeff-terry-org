import React from 'react';
import Home from '../components/Home';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  bgColor: '#fff',
  bgColorSecondary: '#F7F2ED',
  // bgColorSecondary: '#EFFAFD', // Light blue, looks a little too flowery
  darkColor: '#111', // TODO
  primaryColor: '#2d728f', // contrast ratio 5.36
  secondaryColor: '#f49e4c', // low contrast 2.13
  terciaryColor: '#ab3428', // contrast ratio 3.75
  quaternaryColor: '#3b8ea5', // contrast ratio 3.75
  quinaryColor: '#f5ee9e',
};

function IndexPage() {
  return (
    <main>
      <title>Jeff Terry</title>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </main>
  );
}

export default IndexPage;
