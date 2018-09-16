import React from 'react';
import { node } from 'prop-types';

import { Wrapper, Heading } from './styled';

const ErrorPage = ({ children }) => (
  <Wrapper>
    <Heading>
      <span role="img" aria-label="poop">
        💩
      </span>
      &nbsp; Whoops! An unexpected error occurred...
    </Heading>
    {children}
  </Wrapper>
);

ErrorPage.propTypes = {
  children: node,
};

export default ErrorPage;
