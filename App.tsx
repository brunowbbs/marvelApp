import React from 'react';

import { ThemeProvider } from 'styled-components';
import { HeroesProvider } from './src/hooks/useHeroes';


import theme from './src/global/styles/theme';

import Routes from "./src/routes";

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <HeroesProvider>
        <Routes />
      </HeroesProvider>
    </ThemeProvider>

  )
}