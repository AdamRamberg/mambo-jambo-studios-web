import React from 'react';
import fbt from 'fbt';
import { node } from 'prop-types';

import { Wrapper, Heading } from './styled';

const ErrorPage = ({ children }) => (
  <Wrapper>
    <Heading>
      <span role="img" aria-label="poop">
        💩
      </span>
      &nbsp;
      <fbt desc="error page body text">
        Whoops! An unexpected error occurred...
      </fbt>
    </Heading>
    {children}
  </Wrapper>
);

ErrorPage.propTypes = {
  children: node,
};

export default ErrorPage;
