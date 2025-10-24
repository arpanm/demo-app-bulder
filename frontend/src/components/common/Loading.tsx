import React from 'react';
import { LoadingProps } from '../../types/common';
import './Loading.css';

/**
 * Loading component that displays a loading spinner with customizable size and full-screen option
 * @component
 */
const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  fullScreen = false,
  className = '',
}) => {
  const containerClass = fullScreen ? 'loading-container-fullscreen' : 'loading-container';
  const spinnerClass = `loading-spinner loading-spinner-${size} ${className}`;

  return (
    <div className={containerClass}>
      <div className={spinnerClass} role="status" aria-label="Loading">
        <div className="loading-spinner-inner"></div>
      </div>
    </div>
  );
};

export default Loading;
