import React from 'react';
import fbt from 'fbt';
import PropTypes from 'prop-types';

import ErrorPage from '../ErrorPage';
import Button from '../Button';

const LoadingIndicator = ({ error, pastDelay, retry }) => {
  if (error) {
    return (
      <ErrorPage>
        <Button onClick={retry}>
          <fbt desc="loading indicator retry">Retry</fbt>
        </Button>
      </ErrorPage>
    );
  }
  if (pastDelay) {
    return (
      <div>
        <fbt desc="loading indicator loading text">Loading...</fbt>
      </div>
    );
  }

  return null;
};

LoadingIndicator.propTypes = {
  pastDelay: PropTypes.bool,
  retry: PropTypes.func,
  error: PropTypes.instanceOf(Error),
};

export default LoadingIndicator;
