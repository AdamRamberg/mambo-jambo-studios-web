import React from 'react';
import fbt from 'fbt';

import { Wrapper, Heading } from './styled';
import Button from '../Button';

const FourOFourPage = () => (
  <Wrapper>
    <Heading>
      <span role="img" aria-label="no">
        🙈
      </span>
      &nbsp;
      <fbt desc="404 body text">
        The page your tried to reach does not exist.
      </fbt>
    </Heading>
    <Button reachRouterLink to="/">
      <fbt desc="404 home button">Home Page</fbt>
    </Button>
  </Wrapper>
);

export default FourOFourPage;
