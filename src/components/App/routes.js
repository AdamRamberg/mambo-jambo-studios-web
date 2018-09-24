import React from 'react';
import { Router } from '@reach/router';

import FourOFourPage from '../404Page';
import LoadableHomePage from '../HomePage/loadable';
import LoadableAboutPage from '../AboutPage/loadable';
import LoadablePortfolioPage from '../PortfolioPage/loadable';
import LoadableBlogPage from '../BlogPage/loadable';

export const Routes = () => (
  <Router>
    <LoadableHomePage path="/" />
    <LoadableAboutPage path="about" />
    <LoadablePortfolioPage path="portfolio" />
    <LoadableBlogPage path="blog" />
    <FourOFourPage default />
  </Router>
);