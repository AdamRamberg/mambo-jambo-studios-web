import React from 'react';

import { Wrapper, Heading } from './styled';
import Button from '../Button';

const FourOFourPage = () => (
  <Wrapper>
    <Heading>
      <span role="img" aria-label="no">
        🙈
      </span>
      &nbsp; The page your tried to reach does not exist.
    </Heading>
    <Button reachRouterLink to="/">
      Home Page
    </Button>
  </Wrapper>
);

export default FourOFourPage;
