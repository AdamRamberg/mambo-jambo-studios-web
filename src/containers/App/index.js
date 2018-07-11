import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppWrapper } from './styles';
import HomePage from '../HomePage/loadable';

const App = () => (
  <AppWrapper>
    <Switch>
      <Route path="" component={HomePage} />
    </Switch>
  </AppWrapper>
);

export default App;
