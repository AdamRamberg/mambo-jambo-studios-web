import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoadableHomePage from '../HomePage/loadable';
import LoadableAboutPage from '../AboutPage/loadable';
import LoadablePortfolioPage from '../PortfolioPage/loadable';
import LoadableBlogPage from '../BlogPage/loadable';

export const Routes = () => (
  <Switch>
    <Route exact path="/about" component={LoadableAboutPage} />
    <Route exact path="/portfolio" component={LoadablePortfolioPage} />
    <Route exact path="/blog" component={LoadableBlogPage} />
    <Route path="/" component={LoadableHomePage} />
  </Switch>
);
