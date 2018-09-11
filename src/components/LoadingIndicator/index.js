import React from 'react';
import PropTypes from 'prop-types';

import ErrorPage from '../ErrorPage';
import Button from '../Button';

const LoadingIndicator = ({ error, pastDelay, retry }) => {
  if (error) {
    return (
      <ErrorPage>
        <Button onClick={retry}>Retry</Button>
      </ErrorPage>
    );
  }
  if (pastDelay) {
    return <div>Loading...</div>;
  }

  return null;
};

LoadingIndicator.propTypes = {
  pastDelay: PropTypes.bool,
  retry: PropTypes.func,
  error: PropTypes.instanceOf(Error),
};

export default LoadingIndicator;
