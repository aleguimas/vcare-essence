# Sprint 10 — SEO Técnico

**Duração estimada:** 1 dia
**Objetivo:** schemas estruturados em todas as páginas, sitemap dinâmico, OG images, robots.txt, páginas-spoke por bairro.

**Pré-leitura:** `03_sitemap_routes.md`, `CLAUDE.md`, dossiê v3.2 (capítulo 9)

---

## 1. JSON-LD Schema Markup

Criar `lib/schemas.ts` com builders tipados para todos os schemas. Cada página injeta o(s) schema(s) relevante(s).

### Schema raiz (MedicalClinic) — em todas as páginas

```ts
// lib/schemas.ts
export const medicalClinicSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalClinic', 'MentalHealthCenter'],
  '@id': 'https://vcareessence.com.br/#clinic',
  name: 'VCare Essence',
  alternateName: 'VCare Essence — Casa Boutique de Saúde Mental',
  description: 'Clínica boutique de saúde mental no RioMar Trade Center, Recife. A primeira clínica sensorial da cidade.',
  url: 'https://vcareessence.com.br',
  logo: 'https://vcareessence.com.br/images/logo/vcare-essence-full.png',
  image: 'https://vcareessence.com.br/og/home.jpg',
  telephone: '+55-81-XXXXXXXXX',  // TODO: confirmar
  email: 'contato@vcareessence.com.br',  // TODO: confirmar
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. República do Líbano, 251 — RioMar Trade Center, Torre 4',
    addressLocality: 'Recife',
    addressRegion: 'PE',
    postalCode: '51110-160',  // TODO: confirmar CEP
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -8.1237,   // TODO: coordenadas exatas
    longitude: -34.9013,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  priceRange: '$$$',
  medicalSpecialty: ['Psychiatric', 'Psychology', 'Hypnotherapy'],
  paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
  hasMap: 'https://maps.google.com/?q=RioMar+Trade+Center+Recife',
  // sameAs: redes sociais quando confirmadas
};
```

### Schema Person (para Vanessa e Camila)
```ts
export const vanessaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://vcareessence.com.br/profissionais/vanessa-albuquerque#person',
  name: 'Vanessa Albuquerque',
  jobTitle: 'Hipnoterapeuta',
  description: 'Hipnoterapeuta com 14 anos de prática, especializada em destravar empresários(as) através de método autoral.',
  worksFor: { '@id': 'https://vcareessence.com.br/#clinic' },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Conselho Regional de Psicologia',
    identifier: 'CRP XX/XXXXX',  // TODO
  },
  url: 'https://vcareessence.com.br/profissionais/vanessa-albuquerque',
  image: 'https://vcareessence.com.br/images/profissionais/vanessa-editorial-01.webp',
  // sameAs: [Instagram URL quando confirmado]
};

export const camilaSchema = { /* análogo */ };
```

### Schema MedicalTherapy (para cada vertical)
```ts
export const hipnoterapiaSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalTherapy',
  name: 'Hipnoterapia Clínica',
  description: 'Hipnoterapia clínica regulamentada pelo Conselho Federal de Psicologia, indicada para ansiedade, fobias, hábitos automáticos e trauma.',
  provider: { '@id': 'https://vcareessence.com.br/#clinic' },
  serviceType: 'MedicalTherapy',
  areaServed: { '@type': 'City', name: 'Recife' },
  url: 'https://vcareessence.com.br/cuidados/hipnoterapia',
};

// análogos para psicoterapia, teste vocacional, orientação familiar
```

### Schema FAQPage (em todas as páginas com FAQ)
```ts
export function buildFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
```

### Schema Article (em cada post do blog)
```ts
export function buildArticleSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    author: { '@type': 'Person', name: post.author.name, url: `...` },
    publisher: { '@id': 'https://vcareessence.com.br/#clinic' },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://vcareessence.com.br/diario/${post.slug}` },
  };
}
```

### Schema BreadcrumbList (em todas as páginas internas)
```ts
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
```

### Componente JsonLd
```tsx
// components/seo/JsonLd.tsx
export function JsonLd({ data }: { data: object | object[] }) {
  const arr = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(arr) }}
    />
  );
}
```

Uso:
```tsx
<JsonLd data={[medicalClinicSchema, hipnoterapiaSchema, faqSchema, breadcrumbSchema]} />
```

---

## 2. Sitemap dinâmico

`app/sitemap.ts`:

```ts
import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';  // ou Sanity

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://vcareessence.com.br';

  const staticRoutes = [
    '', '/a-casa', '/a-casa/experiencia-sensorial', '/a-casa/endereco', '/a-casa/tour', '/a-casa/curadoria',
    '/metodo-v', '/metodo-c',
    '/cuidados', '/cuidados/psicoterapia', '/cuidados/hipnoterapia', '/cuidados/teste-vocacional',
    '/cuidados/orientacao-familiar', '/cuidados/atendimento-online',
    '/profissionais', '/profissionais/vanessa-albuquerque', '/profissionais/camila-clemente', '/profissionais/convidados',
    '/diario',
    '/sou-profissional', '/sou-profissional/consultorio-residente', '/sou-profissional/sala-gravacoes',
    '/agendar',
  ].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1.0 : path.startsWith('/metodo') ? 0.9 : 0.7,
  }));

  // Páginas por bairro
  const bairros = ['boa-viagem', 'pina', 'setubal', 'casa-forte', 'espinheiro', 'gracas'];
  const bairroRoutes = bairros.map(bairro => ({
    url: `${base}/cuidados/em/${bairro}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Posts do blog
  const posts = await getAllPosts();
  const postRoutes = posts.map(post => ({
    url: `${base}/diario/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...bairroRoutes, ...postRoutes];
}
```

---

## 3. robots.txt

`app/robots.ts`:

```ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/studio/', '/dev/', '/agendado'],
      },
    ],
    sitemap: 'https://vcareessence.com.br/sitemap.xml',
  };
}
```

---

## 4. OG Images (geração dinâmica)

`app/opengraph-image.tsx` (OG padrão da home):

```tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div style={{
        background: '#F5F1EA',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}>
        {/* Logo simplificado em SVG inline */}
        <div style={{ fontSize: 88, color: '#3A4A3F', fontFamily: 'serif', textAlign: 'center', lineHeight: 1.1 }}>
          VCare Essence
        </div>
        <div style={{ fontSize: 32, color: '#8C7853', marginTop: 24, letterSpacing: 4 }}>
          A PRIMEIRA CLÍNICA SENSORIAL DE RECIFE
        </div>
      </div>
    ),
    { ...size }
  );
}
```

Versões customizadas por seção:
- `app/(marketing)/metodo-v/opengraph-image.tsx`
- `app/(marketing)/metodo-c/opengraph-image.tsx`
- `app/(marketing)/diario/[slug]/opengraph-image.tsx` (dinâmica com título do post)

---

## 5. Páginas-spoke por bairro

Cada página com mínimo **800 palavras únicas**. Conteúdo que não seja apenas "psicóloga em [bairro]" repetitivo — precisa ter substância editorial.

### Estrutura template

`app/(marketing)/cuidados/em/[bairro]/page.tsx`:

```tsx
import { notFound } from 'next/navigation';
import { BAIRROS, getBairro } from '@/lib/bairros';

export async function generateStaticParams() {
  return BAIRROS.map(b => ({ bairro: b.slug }));
}

export default async function BairroPage({ params }: { params: { bairro: string } }) {
  const bairro = getBairro(params.bairro);
  if (!bairro) notFound();
  return <BairroContent bairro={bairro} />;
}
```

### Dados por bairro (`lib/bairros.ts`)

```ts
export const BAIRROS = [
  {
    slug: 'boa-viagem',
    name: 'Boa Viagem',
    distance: '5 minutos do RioMar Trade Center',
    description: '...',  // texto editorial sobre o bairro
    populationNote: 'cerca de 122 mil habitantes, um dos rendimentos médios domiciliares mais altos do Nordeste',
    landmarks: ['Av. Conselheiro Aguiar', 'Domingos Ferreira', 'Praia de Boa Viagem'],
    primaryRoute: 'Via Mangue / Av. Conselheiro Aguiar',
    // ...
  },
  // ... outros bairros
];
```

### Estrutura de conteúdo de cada página por bairro

1. **Hero:** `Psicóloga em [Bairro] — VCare Essence`
2. **Texto editorial sobre o atendimento a moradores desse bairro** (não conteúdo automático/copiado)
3. **Como chegar à clínica desse bairro específico** (rota, tempo, transporte)
4. **Verticais oferecidas** (todas, mas reforçar relevância local)
5. **Link cruzado para verticais principais**
6. **CTA**

### Conteúdo precisa ser ÚNICO por bairro
Não copy-paste. Cada página fala sobre:
- Perfil demográfico do bairro (sem ofender)
- Demandas comuns desse perfil (ex: Boa Viagem tem muitos executivos → reforçar Método V; Casa Forte tem famílias estabelecidas → reforçar teste vocacional)
- Logística específica de acesso

---

## 6. Páginas técnicas faltantes

### `/politica-de-privacidade`
Conteúdo padrão LGPD + cláusulas específicas para dados sensíveis de saúde mental:
- Tipos de dados coletados
- Finalidade
- Compartilhamento (não compartilhamos com terceiros)
- Direitos do titular
- Tempo de retenção
- Contato do DPO (responsável pela proteção de dados)
- Cookies

### `/termos-de-uso`
Padrão + cláusulas específicas:
- Não substituição de atendimento clínico
- Marcação online é sujeita a confirmação
- Política de cancelamento
- Direitos autorais do conteúdo

### `/404` custom
`app/not-found.tsx`:
```tsx
export default function NotFound() {
  return (
    <Section size="lg">
      <Container narrow className="text-center">
        <Eyebrow>404</Eyebrow>
        <Heading as="h1" size="display-md" className="mt-6">
          Algumas portas se abrem mais devagar.
        </Heading>
        <p className="mt-4 text-lead text-muted">
          Esta, infelizmente, não levou a lugar nenhum.
        </p>
        <Button asChild className="mt-10">
          <Link href="/">Voltar à casa</Link>
        </Button>
      </Container>
    </Section>
  );
}
```

---

## 7. Validação SEO

Antes de fechar o sprint:

- [ ] **Google Rich Results Test** em todas as páginas principais — zero erros
- [ ] **Schema.org Validator** em cada schema
- [ ] **Mobile-Friendly Test** do Google — todas passando
- [ ] **OG Debugger do Facebook** — imagens renderizando corretamente
- [ ] **Twitter Card Validator** — preview correto
- [ ] **sitemap.xml** acessível em produção (após deploy)
- [ ] **robots.txt** correto
- [ ] **Search Console** configurado (após deploy) — propriedade verificada via DNS

---

## Critérios de aceitação

- [ ] Todos os schemas JSON-LD implementados via `lib/schemas.ts`
- [ ] Componente `<JsonLd />` em todas as páginas relevantes
- [ ] `sitemap.xml` dinâmico funcionando
- [ ] `robots.txt` configurado
- [ ] OG images dinâmicas funcionando (testar em FB Debugger)
- [ ] 6 páginas-spoke por bairro com conteúdo único (800+ palavras cada)
- [ ] `/politica-de-privacidade` e `/termos-de-uso` publicados
- [ ] `/404` custom com tom da marca
- [ ] Google Rich Results Test passando em /, /metodo-v, /metodo-c, /diario/[slug]
- [ ] Lighthouse SEO = 100 em todas as páginas

---

## Próximo passo
Sprint 11 — Performance e Acessibilidade.
