import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from '@reach/router';

import GlobalStyle from '../../theme/globalStyles';
import theme from '../../theme';
import { Helmet } from '../Helmet';
import { Routes } from './routes';
import Header from '../../containers/Header';
import ErrorBoundary from '../../containers/ErrorBoundary';
import ErrorPage from '../ErrorPage';
import VersionsPage from '../VersionsPage';

const AppContent = () => (
  <Fragment>
    <Header />
    <Routes />
  </Fragment>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Helmet />
      <ErrorBoundary error={() => <ErrorPage />}>
        <Router>
          <VersionsPage path="versions" />
          <AppContent default />
        </Router>
      </ErrorBoundary>
    </>
  </ThemeProvider>
);

export default App;
