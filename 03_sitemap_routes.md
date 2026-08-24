# 03 — Sitemap e Rotas

## Sitemap completo (4 níveis)

```
/ (Home)
│
├── /a-casa
│   ├── /a-casa/experiencia-sensorial    ← reivindica a categoria "1ª clínica sensorial"
│   ├── /a-casa/endereco                 ← RioMar Trade Center + mapa
│   ├── /a-casa/tour                     ← galeria visual rica
│   ├── /a-casa/curadoria                ← filosofia de seleção de profissionais
│   └── /a-casa/imprensa                 ← clipping e publicações
│
├── /metodo-v                             ← Método Vanessa Albuquerque (slug provisório)
│
├── /metodo-elo                           ← Método Elo, Camila Clemente
│
├── /cuidados                             ← visão geral das 4 verticais clínicas
│   ├── /cuidados/psicoterapia
│   ├── /cuidados/hipnoterapia
│   ├── /cuidados/teste-vocacional
│   ├── /cuidados/orientacao-familiar
│   └── /cuidados/atendimento-online
│
├── /profissionais
│   ├── /profissionais/vanessa-albuquerque
│   ├── /profissionais/camila-clemente
│   └── /profissionais/convidados
│
├── /diario                               ← Blog
│   ├── /diario/[slug]                    ← post individual
│   └── /diario/categoria/[categoria]     ← 5 categorias do dossiê
│
├── /sou-profissional
│   ├── /sou-profissional/consultorio-residente
│   └── /sou-profissional/sala-gravacoes
│
├── /agendar
│
└── Páginas técnicas (footer):
    ├── /politica-de-privacidade
    ├── /termos-de-uso
    └── /404 (custom)
```

---

## Páginas-spoke por bairro (SEO local)

Criar como rotas dinâmicas em `app/(marketing)/cuidados/em/[bairro]/page.tsx` ou como rotas estáticas no Sprint 10. **Não no menu principal** — só visíveis via SEO.

```
/cuidados/em/boa-viagem
/cuidados/em/pina
/cuidados/em/setubal
/cuidados/em/casa-forte
/cuidados/em/espinheiro
/cuidados/em/gracas
/cuidados/em/recife                  ← genérico, SEO de cidade
/cuidados/saude-mental-corporativa   ← Porto Digital
```

**Conteúdo:** cada página com mínimo 800 palavras únicas, referências locais ao bairro, rota até a clínica, depoimentos anonimizados (quando houver). Detalhes no Sprint 10.

---

## Convenções de URL

- **Tudo minúsculo, sem acentos, hífen como separador.**
- **Sem `.html`, sem trailing slash, sem maiúsculas.**
- **URLs descritivas e curtas** — pensar em alguém compartilhando por WhatsApp.
- **Slugs em PT-BR** — `metodo-v`, não `method-v`.

### Slugs provisórios (aguardando decisão das sócias)

| Provisório | Substitutos possíveis | Decisão até |
|---|---|---|
| `/metodo-v` | `/metodo-raiz`, `/metodo-trava-zero` | Sprint 03 |
| `/metodo-c` | `/metodo-rota`, `/metodo-norte`, `/metodo-trilha` | Sprint 03 |

**Importante:** desenhar todas as referências internas usando uma constante `METHOD_V_SLUG` e `METHOD_C_SLUG` em `lib/routes.ts`. Quando os nomes saírem, troca em um lugar só.

```ts
// lib/routes.ts
export const ROUTES = {
  home: '/',
  aCasa: '/a-casa',
  experienciaSensorial: '/a-casa/experiencia-sensorial',
  metodoV: '/metodo-v',          // TODO: aguardar decisão
  metodoElo: '/metodo-elo',      // Método Elo
  cuidados: '/cuidados',
  psicoterapia: '/cuidados/psicoterapia',
  hipnoterapia: '/cuidados/hipnoterapia',
  testeVocacional: '/cuidados/teste-vocacional',
  orientacaoFamiliar: '/cuidados/orientacao-familiar',
  atendimentoOnline: '/cuidados/atendimento-online',
  profissionais: '/profissionais',
  vanessa: '/profissionais/vanessa-albuquerque',
  camila: '/profissionais/camila-clemente',
  convidados: '/profissionais/convidados',
  diario: '/diario',
  souProfissional: '/sou-profissional',
  consultorioResidente: '/sou-profissional/consultorio-residente',
  salaGravacoes: '/sou-profissional/sala-gravacoes',
  agendar: '/agendar',
} as const;
```

---

## Header (menu principal) — 6 itens visíveis

| Item | Aponta para | Comportamento mobile |
|---|---|---|
| **A Casa** | `/a-casa` | Drawer expandível com 5 subpáginas |
| **Métodos** | `/metodo-v` (dropdown) | Drawer com 2 itens (Método V + Método Elo) |
| **Cuidados** | `/cuidados` | Drawer com 5 verticais clínicas |
| **Profissionais** | `/profissionais` | Drawer com 3 itens |
| **Diário** | `/diario` | Link direto |
| **Sou profissional** | `/sou-profissional` | Link direto |

**CTA fixo no header**: botão "Agendar" que abre página `/agendar`. Permanente.

**Comportamento do header:**
- Sticky com fundo `cream` semitransparente + blur leve
- Encolhe levemente após 100px de scroll
- Logo à esquerda, menu ao centro/direita, CTA à direita
- Mobile: hamburger drawer da direita para esquerda, fundo `cream`, sem cobertura preta

---

## Footer — estrutura

```
┌─────────────────────────────────────────────────────────────┐
│  Logo + tagline                                              │
│                                                              │
│  Coluna 1            Coluna 2          Coluna 3              │
│  A Casa              Cuidados          Sou profissional      │
│  - Experiência       - Psicoterapia    - Consultório         │
│  - Endereço          - Hipnoterapia    - Sala gravações      │
│  - Tour              - Vocacional                            │
│  - Curadoria         - Familiar        Diário VCare          │
│                      - Online                                │
│  Métodos                                Agendar              │
│  - Método V          Profissionais                           │
│  - Método Elo          - Vanessa                               │
│                      - Camila                                │
│                      - Convidados                            │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Av. República do Líbano, 251 — Torre 4                     │
│  Pina, Recife — PE                                           │
│  WhatsApp · Instagram · Email                                │
│                                                              │
│  CRP XX/XXXXX · CRP XX/XXXXX                                │
│                                                              │
│  © 2026 VCare Essence · Política de privacidade · Termos    │
└─────────────────────────────────────────────────────────────┘
```

---

## Metadata global

`app/layout.tsx`:

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://vcareessence.com.br'),
  title: {
    default: 'VCare Essence — A primeira clínica sensorial de Recife',
    template: '%s · VCare Essence',
  },
  description: 'Casa boutique de saúde mental no RioMar Trade Center. Hipnoterapia clínica para destravar empresários, programa estruturado para adolescentes, psicoterapia tradicional, teste vocacional e orientação familiar. Atendimento presencial e online.',
  keywords: ['psicóloga Recife', 'hipnoterapia Recife', 'clínica sensorial', 'trava emocional', 'psicóloga Boa Viagem', 'teste vocacional Recife'],
  authors: [{ name: 'VCare Essence' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vcareessence.com.br',
    siteName: 'VCare Essence',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
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
};
```

Cada página sobrescreve `title` e `description` próprios via `export const metadata` ou `generateMetadata()`.

---

## Padrão de metadata por página

Toda página deve definir:

```ts
export const metadata: Metadata = {
  title: 'Título único da página',                    // 50-60 chars
  description: 'Descrição única de 150-160 chars que vende a página sem ser comercial.',
  openGraph: {
    title: 'Título OG (pode ser ligeiramente diferente)',
    description: 'Descrição OG',
    images: [{ url: '/og/[pagina].jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: '/caminho-da-pagina',
  },
};
```

Detalhes por página em `04_content_inventory.md`.

---

## Estratégia de redirecionamentos

`next.config.mjs`:

```js
async redirects() {
  return [
    // Domínio antigo da Vanessa — proteção do legado
    // Ativar após decisão sobre Ansiedade Zero (capítulo 14 do dossiê)
    // {
    //   source: '/ansiedade-zero',
    //   destination: '/metodo-v',
    //   permanent: true,
    // },
    // {
    //   source: '/metodo-ansiedade-zero',
    //   destination: '/metodo-v',
    //   permanent: true,
    // },

    // Slugs antigos (se houver migração futura)
    // adicionar conforme necessário
  ];
}
```

Domínio `ansiedadezero.com.br` → redirect 301 para `vcareessence.com.br/metodo-v` (configurar no nível DNS/Vercel).
