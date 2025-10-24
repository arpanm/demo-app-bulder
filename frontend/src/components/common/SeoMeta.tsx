import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoMetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

const SeoMeta: React.FC<SeoMetaProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  twitterCard = 'summary',
}) => {
  const siteTitle = 'Rupantar';
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultImage = '/rupantar-high-resolution-logo-transparent.png';
  const defaultUrl = window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:url" content={ogUrl || defaultUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="canonical" href={ogUrl || defaultUrl} />
    </Helmet>
  );
};

export default SeoMeta;
