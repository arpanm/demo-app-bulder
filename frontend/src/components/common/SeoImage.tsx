import React from 'react';

interface SeoImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const SeoImage: React.FC<SeoImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      decoding="async"
    />
  );
};

export default SeoImage;
