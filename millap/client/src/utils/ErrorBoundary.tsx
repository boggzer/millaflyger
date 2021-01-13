/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: string;
}

interface ErrorBoundaryProps {
  children?: React.ReactElement | React.ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
    };
  }

  static getDerivedStateFromError(error: React.ErrorInfo) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error'>Oops! Looks like something went wrong. :(</div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
