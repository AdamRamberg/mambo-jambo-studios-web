import React from 'react';
import { Router } from '@reach/router';

import FourOFourPage from '../404Page';
import HomePage from '../HomePage/lazy';
import AboutPage from '../AboutPage/lazy';
import PortfolioPage from '../PortfolioPage/lazy';
import BlogPage from '../BlogPage/lazy';
import CVPage from '../CVPage/lazy';

export const Routes = () => (
  <Router>
    <HomePage path="/" />
    <AboutPage path="about" />
    <PortfolioPage path="portfolio" />
    <BlogPage path="blog" />
    <CVPage path="cv" />
    <FourOFourPage default />
  </Router>
);
