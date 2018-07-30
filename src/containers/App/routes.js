import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoadableHomePage from '../HomePage/loadable';

export const Routes = () => (
  <Switch>
    <Route path="/test" component={() => <div>Test</div>} />
    <Route path="/" component={LoadableHomePage} />
  </Switch>
);
