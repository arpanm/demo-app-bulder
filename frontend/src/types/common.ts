import { ReactNode, ComponentType } from 'react';

export interface BaseProps {
  children?: ReactNode;
  className?: string;
}

export interface ErrorResponse {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ErrorResponse;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface MetaData {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
}

export interface ErrorBoundaryProps extends BaseProps {
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: Record<string, unknown>) => void;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export interface LoadingProps extends BaseProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  message?: string;
  fullScreen?: boolean;
}

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  blurDataURL?: string;
}

export interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<ComponentType<Record<string, unknown>>>;
  exact?: boolean;
  protected?: boolean;
  roles?: string[];
}
