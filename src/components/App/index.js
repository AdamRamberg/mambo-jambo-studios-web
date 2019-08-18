import React from 'react';
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
import LocaleProvider from '../../i18n/localeProvider';

const AppContent = () => (
  <>
    <Header />
    <Routes />
  </>
);

const App = () => (
  <LocaleProvider>
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
  </LocaleProvider>
);

export default App;
