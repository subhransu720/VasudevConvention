import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://rajpalaceandconvention.com/sitemap.xml',
    host: 'https://rajpalaceandconvention.com'
  };
} 