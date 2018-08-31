import { Component } from 'react';
import { node, func } from 'prop-types';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { children, error } = this.props;
    const { hasError } = this.state;
    return hasError ? error() : children;
  }
}

ErrorBoundary.propTypes = {
  children: node.isRequired,
  error: func.isRequired,
};

export default ErrorBoundary;
