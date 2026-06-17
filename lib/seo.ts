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
      'clínica boutique de saúde mental Recife',
      'clínica sensorial Recife',
      'psicóloga Recife',
      'hipnoterapia clínica Recife',
      'MEP Mapeamento Emocional Profundo',
      'Método ELO adolescentes',
      'trava emocional empresários',
      'teste vocacional Recife',
      'orientação familiar Recife',
      'psicóloga adolescentes Recife',
      'saúde mental Recife',
      'VCare Essence',
    ],
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    publisher: SITE.name,
    category: 'Saúde Mental',
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: SITE.url,
      siteName: SITE.name,
      // OG image gerada dinamicamente por app/opengraph-image.tsx (herdada por todas as rotas).
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
