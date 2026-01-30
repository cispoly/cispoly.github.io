import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = [], 
  image = '/favicon/android-chrome-512x512.png', 
  url,
  type = 'website',
  schema
}) => {
  const { language } = useLanguage();
  
  // Use environment variable for base URL or default to the Netlify domain
  const baseUrl = import.meta.env.VITE_APP_URL || 'https://cispoly.netlify.app';
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentUrl = url ? (url.startsWith('http') ? url : `${baseUrl}${url}`) : `${baseUrl}${path}`;

  const siteName = language === 'en' ? 'CISPOLY' : '起源聚禾';
  const defaultTitle = language === 'en' 
    ? 'CISPOLY - Beijing OriginPoly Bio-Tec Co.,Ltd.' 
    : '北京起源聚禾生物科技有限公司 - 专注于女性健康与癌症筛查';
  
  const defaultDescription = language === 'en'
    ? 'CISPOLY focuses on methylation-based cancer triage and women\'s health, providing advanced solutions like CISCER, CISENDO, and CISOVA for cervical, endometrial, and ovarian cancer detection.'
    : '北京起源聚禾生物科技有限公司（CISPOLY）致力于甲基化癌症分流技术，提供禾蔻安（CISENDO）、禾宫康（CISCER）、禾薇益（CISOVA）等女性健康筛查产品，覆盖宫颈癌、子宫内膜癌和卵巢癌。';

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  
  // Core keywords that should always be present
  const baseKeywords = [
    'CISPOLY', 'OriginPoly', 'Methylation', 'Cancer Triage', 'Women\'s Health',
    '北京起源聚禾', '聚禾生物', '甲基化', '癌症分流', '女性健康',
    'Cervical Cancer', 'Endometrial Cancer', 'Ovarian Cancer',
    '宫颈癌', '子宫内膜癌', '卵巢癌',
    'CISCER', 'CISENDO', 'CISOVA',
    '禾宫康', '禾蔻安', '禾薇益'
  ];
  
  const allKeywords = Array.from(new Set([...baseKeywords, ...keywords])).join(', ');
  // Removed duplicate currentUrl declaration

  return (
    <Helmet>
      {/* Standard Metadata */}
      <html lang={language === 'en' ? 'en' : 'zh-CN'} />
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="Beijing OriginPoly Bio-Tec Co.,Ltd." />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : 'zh_CN'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
