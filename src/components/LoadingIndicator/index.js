import React from 'react';
import PropTypes from 'prop-types';

const LoadingIndicator = ({ error, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        Error!
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
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
