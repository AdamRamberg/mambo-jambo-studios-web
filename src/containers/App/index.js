import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import '../../theme/globalStyles';
import theme from '../../theme';
import { AppWrapper } from './styles';
import { Helmet } from './helmet';
import { Routes } from './routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppWrapper>
        <Helmet />
        <Routes />
      </AppWrapper>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
