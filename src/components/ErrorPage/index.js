import React from 'react';
import { node } from 'prop-types';

import { Wrapper, Heading } from './styled';

const ErrorPage = ({ children }) => (
  <Wrapper>
    <Heading>
      Whoops! An unexpected error occurred...
      <span role="img" aria-label="poop">
        💩
      </span>
    </Heading>
    {children}
  </Wrapper>
);

ErrorPage.propTypes = {
  children: node.isRequired,
};

export default ErrorPage;
