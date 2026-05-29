# 01 — Tech Stack e Arquitetura

## Stack definitiva

### Core
- **Node.js**: 20 LTS ou superior
- **Package manager**: pnpm (recomendado) ou npm
- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript com `strict: true`

### Estilo e UI
- **Tailwind CSS v4** — com configuração de tokens customizados
- **shadcn/ui** — base de componentes acessíveis (Radix UI por baixo)
- **Framer Motion** — animações declarativas
- **lucide-react** — ícones (linha fina, combina com a marca)
- **Sonner** — toasts

### CMS e conteúdo
- **Recomendado: Sanity** — `next-sanity` + Sanity Studio integrado
- **Alternativa simples: MDX** — `@next/mdx` + `gray-matter`
  - Decisão final no Sprint 08, mas planejar Sanity desde o início

### Performance e imagens
- `next/image` (otimização nativa) com `sharp` instalado
- `next/font/local` para Fraunces + Inter (self-hosted, zero requisição externa)
- `dynamic` imports para componentes pesados (mapas, players de vídeo)

### Analytics e tracking
- **GA4** via `@next/third-parties/google`
- **Google Tag Manager** (para flexibilidade futura)
- **Microsoft Clarity** (heatmaps, gratuito)
- **Vercel Analytics** (Core Web Vitals em produção)

### Forms e integrações
- **react-hook-form** + **zod** (validação)
- **Resend** ou **Mailgun** para emails transacionais
- **WhatsApp Business Cloud API** (via webhook simples)
- **Cal.com** embedado para agendamento

### Qualidade
- **ESLint** (config Next.js + import order)
- **Prettier** com plugin Tailwind para ordenação de classes
- **TypeScript** strict mode
- **Husky** + **lint-staged** para git hooks
- **Vitest** + **React Testing Library** para componentes críticos
- **Playwright** para smoke tests (login, agendamento, contato)

### Deploy
- **Vercel** (recomendado, alinhamento natural com Next.js)
- Domínios: `vcareessence.com.br` (principal), redirect de `.com` e `ansiedadezero.com.br`
- Preview deploys automáticos em PRs

---

## Arquitetura de pastas

```
vcare-essence-site/
├── app/                          # App Router
│   ├── (marketing)/              # Group route — todas as páginas públicas
│   │   ├── layout.tsx            # Layout com header/footer da marca
│   │   ├── page.tsx              # Home
│   │   ├── a-casa/
│   │   │   ├── page.tsx
│   │   │   ├── experiencia-sensorial/page.tsx
│   │   │   ├── endereco/page.tsx
│   │   │   └── tour/page.tsx
│   │   ├── metodo-v/             # Método Vanessa (slug TBD)
│   │   │   └── page.tsx
│   │   ├── metodo-c/             # Método Camila (slug TBD)
│   │   │   └── page.tsx
│   │   ├── cuidados/
│   │   │   ├── page.tsx                          # visão geral
│   │   │   ├── psicoterapia/page.tsx
│   │   │   ├── hipnoterapia/page.tsx
│   │   │   ├── teste-vocacional/page.tsx
│   │   │   ├── orientacao-familiar/page.tsx
│   │   │   └── atendimento-online/page.tsx
│   │   ├── profissionais/
│   │   │   ├── page.tsx
│   │   │   ├── vanessa-albuquerque/page.tsx
│   │   │   ├── camila-clemente/page.tsx
│   │   │   └── convidados/page.tsx
│   │   ├── diario/                               # Blog
│   │   │   ├── page.tsx
│   │   │   ├── [slug]/page.tsx
│   │   │   └── categoria/[categoria]/page.tsx
│   │   ├── sou-profissional/
│   │   │   ├── page.tsx
│   │   │   ├── consultorio-residente/page.tsx
│   │   │   └── sala-gravacoes/page.tsx
│   │   └── agendar/page.tsx
│   ├── api/
│   │   ├── contact/route.ts
│   │   ├── candidatura/route.ts
│   │   └── reserva-sala/route.ts
│   ├── sitemap.ts                # Sitemap dinâmico
│   ├── robots.ts
│   ├── opengraph-image.tsx       # OG default
│   ├── icon.tsx                  # Favicon dinâmico
│   ├── layout.tsx                # Root layout (fontes, metadata)
│   └── globals.css               # Tailwind + tokens
│
├── components/
│   ├── ui/                       # shadcn primitives
│   ├── layout/                   # Header, Footer, Container
│   ├── sections/                 # Hero, blocos de página
│   ├── editorial/                # Quote, Manifesto, Callout, EditorialImage
│   ├── forms/
│   └── seo/                      # JsonLd, Schemas
│
├── content/                      # Conteúdo MDX (se for usar) ou tipos Sanity
│   └── ...
│
├── lib/
│   ├── seo.ts                    # Helpers de metadata
│   ├── schemas.ts                # JSON-LD builders
│   ├── analytics.ts
│   └── utils.ts                  # cn, formatters
│
├── public/
│   ├── fonts/                    # Fraunces + Inter self-hosted
│   ├── images/                   # Otimizadas, em WebP/AVIF
│   │   ├── ambiente/
│   │   ├── profissionais/
│   │   ├── logo/
│   │   └── og/
│   └── ...
│
├── styles/                       # CSS modules (se necessário)
│
├── CLAUDE.md                     # Contexto permanente
├── 01_tech_stack.md ... 05_assets_guide.md
├── sprints/
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## next.config.mjs — configuração base

```js
import { withSentryConfig } from '@sentry/nextjs'; // opcional, sprint 11

const config = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      // Adicionar CDN do Sanity quando configurado
      // { protocol: 'https', hostname: 'cdn.sanity.io' }
    ],
  },

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  async redirects() {
    return [
      // Aguardar decisão sobre Ansiedade Zero (capítulo 14 do dossiê)
      // {
      //   source: '/ansiedade-zero',
      //   destination: '/metodo-v',
      //   permanent: true,
      // },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default config;
```

---

## tsconfig.json — recomendações

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## package.json — dependências mínimas

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "react-hook-form": "^7.50.0",
    "zod": "^3.23.0",
    "@hookform/resolvers": "^3.5.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.4.0",
    "class-variance-authority": "^0.7.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "sonner": "^1.5.0",
    "next-sanity": "^9.0.0",
    "@portabletext/react": "^3.0.0",
    "@sanity/image-url": "^1.0.0",
    "@next/third-parties": "^15.0.0"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@tailwindcss/typography": "^0.5.0",
    "@tailwindcss/forms": "^0.5.0",
    "prettier": "^3.3.0",
    "prettier-plugin-tailwindcss": "^0.6.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.0.0",
    "husky": "^9.1.0",
    "lint-staged": "^15.2.0",
    "vitest": "^2.0.0",
    "@playwright/test": "^1.46.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/jest-dom": "^6.5.0"
  }
}
```

---

## Variáveis de ambiente

`.env.local` (não commitar):

```bash
# Sanity (preencher quando configurado)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=

# Resend / Email
RESEND_API_KEY=

# WhatsApp Business
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_ACCESS_TOKEN=

# GA4
NEXT_PUBLIC_GA_ID=

# Site
NEXT_PUBLIC_SITE_URL=https://vcareessence.com.br

# Cal.com (se for usar)
NEXT_PUBLIC_CALCOM_URL=https://cal.com/vcareessence
```

---

## Critérios de aceitação — toda PR/sprint

Antes de marcar um sprint como concluído, validar:

1. **Lighthouse mobile** ≥ 90 em todas as quatro categorias (Performance, Acessibilidade, Best Practices, SEO)
2. **TypeScript** sem erros: `pnpm tsc --noEmit`
3. **Lint** sem warnings: `pnpm lint`
4. **Build** completa: `pnpm build`
5. **Sem console.logs** no código de produção
6. **Sem imagens** maiores que 200KB
7. **Sem fontes** carregadas externamente (tudo self-hosted)
8. **Acessibilidade** verificada com `axe DevTools` — zero violações sérias
