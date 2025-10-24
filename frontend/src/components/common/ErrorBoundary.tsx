import React, { Component, ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../types/common';

/**
 * ErrorBoundary component that catches JavaScript errors anywhere in their child component tree
 * and displays a fallback UI instead of crashing the whole app.
 * @component
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  /**
   * Updates state so the next render will show the fallback UI
   * @param error - The error that was caught
   * @returns {ErrorBoundaryState} The new state
   */
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  /**
   * Logs the error to an error reporting service
   * @param error - The error that was caught
   * @param errorInfo - Component stack trace
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  /**
   * Renders either the children or the fallback UI if there's an error
   */
  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="error-boundary">
            <h2>Something went wrong</h2>
            <p>{this.state.error?.message}</p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="retry-button"
            >
              Try again
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
