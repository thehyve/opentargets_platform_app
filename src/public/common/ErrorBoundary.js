import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? (
      <Typography align="center" color="secondary">
        Something went wrong
      </Typography>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
