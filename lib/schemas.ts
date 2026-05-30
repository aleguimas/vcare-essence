import { SITE, ROUTES } from './routes';

const CLINIC_ID = `${SITE.url}/#clinic`;

// Coordenadas aproximadas do RioMar Trade Center — TODO: confirmar exatas
export const CLINIC_GEO = { latitude: -8.1237, longitude: -34.9013 } as const;

/** Schema raiz da clínica — injetado globalmente no layout. */
export const medicalClinicSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalClinic', 'MentalHealthCenter'],
  '@id': CLINIC_ID,
  name: SITE.name,
  alternateName: 'VCare Essence — Casa Boutique de Saúde Mental',
  description:
    'Clínica boutique de saúde mental no RioMar Trade Center, Recife. A primeira clínica sensorial da cidade.',
  url: SITE.url,
  logo: `${SITE.url}/images/logo/logo-vcare-essence.png`,
  image: `${SITE.url}/images/og/og-home.jpg`,
  ...(SITE.phone ? { telephone: SITE.phone } : {}),
  ...(SITE.email ? { email: SITE.email } : {}),
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${SITE.address.street} — ${SITE.address.complement}`,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CLINIC_GEO.latitude,
    longitude: CLINIC_GEO.longitude,
  },
  // TODO: confirmar horários com as sócias
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  priceRange: '$$$',
  medicalSpecialty: ['Psychiatric', 'Psychology'],
  hasMap: 'https://maps.google.com/?q=RioMar+Trade+Center+Recife',
};

/** Schema da organização/website para sitelinks. */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  inLanguage: 'pt-BR',
  publisher: { '@id': CLINIC_ID },
};

interface PersonInput {
  name: string;
  jobTitle: string;
  description: string;
  path: string;
  image?: string;
  crp?: string;
}

export function buildPersonSchema({
  name,
  jobTitle,
  description,
  path,
  image,
  crp,
}: PersonInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}${path}#person`,
    name,
    jobTitle,
    description,
    worksFor: { '@id': CLINIC_ID },
    url: `${SITE.url}${path}`,
    ...(image ? { image: `${SITE.url}${image}` } : {}),
    ...(crp
      ? {
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Conselho Regional de Psicologia',
            identifier: crp,
          },
        }
      : {}),
  };
}

interface TherapyInput {
  name: string;
  description: string;
  path: string;
}

export function buildMedicalTherapySchema({ name, description, path }: TherapyInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name,
    description,
    provider: { '@id': CLINIC_ID },
    serviceType: 'MedicalTherapy',
    areaServed: { '@type': 'City', name: 'Recife' },
    url: `${SITE.url}${path}`,
  };
}

export function buildFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

interface ArticleInput {
  title: string;
  excerpt: string;
  coverImage: string;
  authorName: string;
  authorPath: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
}

export function buildArticleSchema(post: ArticleInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    author: {
      '@type': 'Person',
      name: post.authorName,
      url: `${SITE.url}${post.authorPath}`,
    },
    publisher: { '@id': CLINIC_ID },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}${ROUTES.diario}/${post.slug}`,
    },
  };
}
