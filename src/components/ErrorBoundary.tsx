import React, { Component, ErrorInfo } from 'react';
import { Link } from 'react-router';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  state: Readonly<State>;
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex flex-col items-center justify-center h-screen'>
          <h1>{this.state.error?.message}</h1>
          <Link to='/'> Go to Home Page</Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
