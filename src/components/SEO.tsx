import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export default function SEO({ title, description, keywords, image }: SEOProps) {
  const siteTitle = 'DVN POS';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  const defaultDesc = 'DVN POS - Hệ thống quản lý bán hàng đa gian hàng SaaS toàn diện, dễ sử dụng.';
  const finalDesc = description || defaultDesc;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDesc} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph (Dành cho Facebook, Zalo, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDesc} />
      {image && <meta property="og:image" content={image} />}

      <meta name="x:card" content="summary_large_image" />
      <meta name="x:title" content={fullTitle} />
      <meta name="x:description" content={finalDesc} />
      {image && <meta name="x:image" content={image} />}
    </Helmet>
  );
}
