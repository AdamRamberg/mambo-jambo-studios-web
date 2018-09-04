import React from 'react';
import { ThemeProvider } from 'styled-components';

import '../../theme/globalStyles';
import theme from '../../theme';
import { AppWrapper } from './styled';
import { Helmet } from './helmet';
import { Routes } from './routes';
import Header from '../Header';

const App = () => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <Header />
      <Helmet />
      <Routes />
    </AppWrapper>
  </ThemeProvider>
);

export default App;
