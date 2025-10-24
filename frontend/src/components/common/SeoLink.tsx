import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface SeoLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const SeoLink: React.FC<SeoLinkProps> = ({
  to,
  children,
  className,
  title,
  description,
  ...props
}) => {
  return (
    <Link to={to} className={className} title={title} aria-label={description} {...props}>
      {children}
    </Link>
  );
};

export default SeoLink;
