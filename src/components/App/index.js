import React from 'react';
import { ThemeProvider } from 'styled-components';

import '../../theme/globalStyles';
import theme from '../../theme';
import { AppWrapper } from './styled';
import { Helmet } from './helmet';
import { Routes } from './routes';
import Header from '../../containers/Header';
import ErrorBoundary from '../../containers/ErrorBoundary';
import ErrorPage from '../ErrorPage';

const App = () => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <Helmet />
      <Header />
      <ErrorBoundary error={() => <ErrorPage />}>
        <Routes />
      </ErrorBoundary>
    </AppWrapper>
  </ThemeProvider>
);

export default App;
