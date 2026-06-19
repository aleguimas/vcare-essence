import { SITE, ROUTES } from './routes';

const CLINIC_ID = `${SITE.url}/#clinic`;

// Coordenadas aproximadas do RioMar Trade Center, TODO: confirmar exatas
export const CLINIC_GEO = { latitude: -8.1237, longitude: -34.9013 } as const;

/**
 * Catálogo de ofertas da clínica, base para o `hasOfferCatalog` do schema e
 * pista forte para mecanismos de IA entenderem o que a VCare Essence oferece.
 * Espelha as sete verticais descritas no CLAUDE.md.
 */
const SERVICE_OFFERS: { name: string; description: string; path: string }[] = [
  {
    name: 'MEP, Mapeamento Emocional Profundo',
    description:
      'Método autoral de Vanessa Albuquerque, hipnoterapia clínica para destravar empresários e líderes, em encontros estruturados.',
    path: ROUTES.metodoV,
  },
  {
    name: 'Método ELO',
    description:
      'Programa autoral de Camila Clemente para adolescentes: rendimento escolar, vestibular, suporte emocional e acompanhamento familiar (Entender, Lapidar, Orientar e Conexão).',
    path: ROUTES.metodoElo,
  },
  {
    name: 'Psicoterapia',
    description: 'Psicoterapia para adolescentes e adultos, presencial em Recife e online.',
    path: ROUTES.psicoterapia,
  },
  {
    name: 'Hipnoterapia Clínica',
    description:
      'Hipnoterapia clínica regulamentada para ansiedade, fobias, hábitos e trauma, com ciência e resultado rápido.',
    path: ROUTES.hipnoterapia,
  },
  {
    name: 'Teste Vocacional',
    description: 'Avaliação vocacional para adolescentes e adultos em reposicionamento de carreira.',
    path: ROUTES.testeVocacional,
  },
  {
    name: 'Orientação Familiar',
    description: 'Orientação familiar com base em Terapêutica Sistêmica.',
    path: ROUTES.orientacaoFamiliar,
  },
  {
    name: 'Sublocação de salas',
    description:
      'Sublocação de consultório para profissionais residentes e de sala para reuniões e gravações.',
    path: ROUTES.souProfissional,
  },
];

/** Schema raiz da clínica, injetado globalmente no layout. */
export const medicalClinicSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalClinic', 'MentalHealthCenter'],
  '@id': CLINIC_ID,
  name: SITE.name,
  alternateName: 'VCare Essence, Clínica Boutique de Saúde Mental',
  description:
    'Clínica boutique de saúde mental no RioMar Trade Center, Recife. A primeira clínica sensorial da cidade, onde o ambiente é parte do tratamento. Atende hipnoterapia clínica (método MEP), programa para adolescentes (Método ELO), psicoterapia, teste vocacional e orientação familiar, presencial em Recife e online.',
  slogan: SITE.tagline,
  url: SITE.url,
  logo: `${SITE.url}/images/logo/logo-vcare-essence.png`,
  image: `${SITE.url}/images/ambiente/sala-01-teto-led-sensorial.webp`,
  ...(SITE.phone ? { telephone: SITE.phone } : {}),
  ...(SITE.email ? { email: SITE.email } : {}),
  ...(SITE.instagram ? { sameAs: [SITE.instagram] } : {}),
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${SITE.address.street}, ${SITE.address.complement}`,
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
  paymentAccepted: 'Particular',
  isAcceptingNewPatients: true,
  medicalSpecialty: ['Psychiatric', 'Psychology'],
  areaServed: [
    { '@type': 'City', name: 'Recife' },
    { '@type': 'AdministrativeArea', name: 'Pernambuco' },
    { '@type': 'Country', name: 'Brasil' },
  ],
  knowsAbout: [
    'Hipnoterapia clínica',
    'Trava emocional',
    'Psicoterapia',
    'TDAH',
    'Teste vocacional',
    'Orientação familiar',
    'Reabilitação neuropsicológica',
    'Análise do comportamento',
    'Terapêutica sistêmica',
    'Psicomotricidade relacional',
    'Saúde mental',
    'MEP, Mapeamento Emocional Profundo',
    'Método ELO',
  ],
  founder: [
    { '@id': `${SITE.url}${ROUTES.vanessa}#person` },
    { '@id': `${SITE.url}${ROUTES.camila}#person` },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Atendimentos da VCare Essence',
    itemListElement: SERVICE_OFFERS.map((offer) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: offer.name,
        description: offer.description,
        url: `${SITE.url}${offer.path}`,
        provider: { '@id': CLINIC_ID },
      },
    })),
  },
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

interface VideoInput {
  videoId: string;
  name: string;
  description: string;
  uploadDate: string;
  /** Caminho da página que hospeda o vídeo (ex.: ROUTES.tour ou '/') */
  path: string;
}

/**
 * VideoObject para vídeos do YouTube embutidos no site. Usa a thumbnail e o
 * embed oficiais do YouTube. `uploadDate` é obrigatório para rich results.
 */
export function buildVideoSchema({ videoId, name, description, uploadDate, path }: VideoInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    // sddefault e hqdefault existem para todo vídeo público; maxresdefault não.
    thumbnailUrl: [
      `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
      `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    ],
    uploadDate,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
    publisher: { '@id': CLINIC_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}${path}` },
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
