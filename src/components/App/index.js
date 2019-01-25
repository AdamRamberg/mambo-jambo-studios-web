import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from '@reach/router';

import '../../theme/globalStyles';
import theme from '../../theme';
import { AppWrapper } from './styled';
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
    <AppWrapper>
      <Helmet />
      <ErrorBoundary error={() => <ErrorPage />}>
        <Router>
          <VersionsPage path="versions" />
          <AppContent default />
        </Router>
      </ErrorBoundary>
    </AppWrapper>
  </ThemeProvider>
);

export default App;
