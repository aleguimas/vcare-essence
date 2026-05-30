import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/routes';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/studio/', '/styleguide', '/agendado', '/diario'],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
