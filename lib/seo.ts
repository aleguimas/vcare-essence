import type { Metadata } from 'next';
import { SITE } from './routes';

export function buildMetadata(
  override: Partial<Metadata> & { canonical?: string } = {},
): Metadata {
  const { canonical, ...rest } = override;

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE.name}, ${SITE.tagline}`,
      template: `%s · ${SITE.name}`,
    },
    description: SITE.description,
    keywords: [
      'psicóloga Recife',
      'hipnoterapia Recife',
      'clínica sensorial',
      'trava emocional',
      'psicóloga Boa Viagem',
      'teste vocacional Recife',
      'saúde mental Recife',
    ],
    authors: [{ name: SITE.name }],
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: SITE.url,
      siteName: SITE.name,
      images: [{ url: '/images/og/og-default.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: canonical ? { canonical } : undefined,
    ...rest,
  };
}
