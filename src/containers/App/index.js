import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppWrapper } from './styles';
import { Helmet } from './helmet';
import { Routes } from './routes';

const App = () => (
  <BrowserRouter>
    <AppWrapper>
      <Helmet />
      <Routes />
    </AppWrapper>
  </BrowserRouter>
);

export default App;
