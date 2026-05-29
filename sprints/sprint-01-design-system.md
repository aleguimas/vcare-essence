# Sprint 01 — Design System

**Duração estimada:** 1-2 dias
**Objetivo:** implementar tokens, fontes, componentes-base, layout shell (header/footer). Ao fim, a base visual da marca está pronta — qualquer página nova herda automaticamente a identidade.

**Pré-leitura obrigatória:** `02_design_system.md`, `CLAUDE.md`, `05_assets_guide.md`

---

## Tarefas

### 1. Configurar tokens no Tailwind

Substituir o `tailwind.config.ts` pelo conteúdo completo da seção "Tokens — Tailwind config" em `02_design_system.md`. Validar que `pnpm build` continua passando.

### 2. Configurar fontes (self-hosted)

**Por que self-hosted:** zero requisição externa, zero CLS de fonte, GDPR/LGPD friendly.

```bash
# Baixar Fraunces e Inter da Google Fonts
mkdir -p public/fonts
# Coloque os arquivos .woff2 em public/fonts/
# Sugestão:
#   - Fraunces-Variable.woff2 (variável, com opsz + SOFT axes)
#   - Inter-Variable.woff2
```

Configurar em `app/layout.tsx`:

```tsx
import localFont from 'next/font/local';

const fraunces = localFont({
  src: '../public/fonts/Fraunces-Variable.woff2',
  variable: '--font-fraunces',
  display: 'swap',
  weight: '100 900',
});

const inter = localFont({
  src: '../public/fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
```

### 3. Configurar globals.css

`app/globals.css`:

```css
@import 'tailwindcss';

@theme {
  /* aqui é onde Tailwind v4 lê tokens — duplica o que está no tailwind.config.ts */
  /* opção: usar APENAS @theme e remover tailwind.config.ts */
}

@layer base {
  :root {
    color-scheme: light;
  }

  ::selection {
    background: theme('colors.bronze.300');
    color: theme('colors.cream');
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-feature-settings: 'ss01', 'cv11';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}

@layer utilities {
  .text-balance { text-wrap: balance; }
  .text-pretty { text-wrap: pretty; }
}
```

### 4. Implementar componentes-base

#### `components/layout/Container.tsx`
```tsx
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  prose?: boolean;
}

export function Container({ children, className, narrow, prose }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-6 md:px-10',
        prose && 'max-w-prose',
        narrow && !prose && 'max-w-prose-wide',
        !narrow && !prose && 'max-w-container',
        className,
      )}
    >
      {children}
    </div>
  );
}
```

#### `components/layout/Section.tsx`
```tsx
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'cream' | 'sand' | 'moss';
  as?: 'section' | 'article' | 'div';
}

export function Section({
  children, className, size = 'md', tone = 'cream', as: As = 'section', ...rest
}: SectionProps) {
  return (
    <As
      className={cn(
        size === 'sm' && 'py-section-sm',
        size === 'md' && 'py-section',
        size === 'lg' && 'py-section-lg',
        tone === 'cream' && 'bg-cream text-ink',
        tone === 'sand' && 'bg-sand text-ink',
        tone === 'moss' && 'bg-moss text-cream',
        className,
      )}
      {...rest}
    >
      {children}
    </As>
  );
}
```

#### `components/ui/button.tsx`
Implementar com `cva` conforme o spec em `02_design_system.md`. Variantes: primary, secondary, ghost. Tamanhos: sm, md, lg. Suportar `asChild` com `Slot` do Radix.

#### `components/editorial/Eyebrow.tsx`
```tsx
export function Eyebrow({ children, tone = 'bronze' }: { children: React.ReactNode; tone?: 'bronze' | 'moss' }) {
  return (
    <p className={cn(
      'text-eyebrow font-semibold uppercase tracking-[0.15em]',
      tone === 'bronze' && 'text-bronze',
      tone === 'moss' && 'text-moss',
    )}>
      {children}
    </p>
  );
}
```

#### `components/editorial/Heading.tsx`
```tsx
interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'display-xl' | 'display-lg' | 'display-md' | 'h1' | 'h2' | 'h3';
  serif?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Heading({ as: As = 'h2', size = 'h2', serif = true, children, className }: HeadingProps) {
  const sizeMap = {
    'display-xl': 'text-display-xl',
    'display-lg': 'text-display-lg',
    'display-md': 'text-display-md',
    'h1': 'text-h1',
    'h2': 'text-h2',
    'h3': 'text-h3',
  } as const;

  return (
    <As className={cn(
      sizeMap[size],
      serif ? 'font-serif text-moss' : 'font-sans text-ink font-medium',
      'text-balance',
      className,
    )}>
      {children}
    </As>
  );
}
```

#### `components/editorial/Quote.tsx`
```tsx
interface QuoteProps {
  children: React.ReactNode;
  author?: string;
  className?: string;
}

export function Quote({ children, author, className }: QuoteProps) {
  return (
    <figure className={cn('border-l-2 border-bronze pl-6 my-section-sm', className)}>
      <blockquote className="font-serif italic text-h3 text-moss">
        "{children}"
      </blockquote>
      {author && (
        <figcaption className="mt-3 text-small text-muted not-italic">
          — {author}
        </figcaption>
      )}
    </figure>
  );
}
```

#### `components/editorial/Callout.tsx`
```tsx
interface CalloutProps {
  title?: string;
  children: React.ReactNode;
}

export function Callout({ title, children }: CalloutProps) {
  return (
    <aside className="bg-cream border-l-4 border-bronze border-y border-r border-line p-6 md:p-8 my-8">
      {title && <p className="font-medium text-navy mb-2">{title}</p>}
      <div className="text-ink leading-relaxed">{children}</div>
    </aside>
  );
}
```

### 5. Implementar Header e Footer

#### `components/layout/Header.tsx`
- Sticky com fundo `cream/80` + backdrop-blur leve
- Logo SVG à esquerda (importar de `public/images/logo/vcare-essence-full.svg`)
  - Se ainda não houver SVG, usar `next/image` com o PNG temporariamente
- Menu desktop: 6 itens (A Casa, Métodos, Cuidados, Profissionais, Diário, Sou profissional)
- CTA "Agendar" à direita (Button primary sm)
- Menu mobile: hamburger → drawer Radix Dialog cobrindo a tela em `cream`
- Dropdowns desktop para "A Casa", "Métodos", "Cuidados" e "Profissionais" — usar `@radix-ui/react-navigation-menu` ou hover simples
- **Reduzir levemente o tamanho do header após 80px de scroll** (motion suave)

#### `components/layout/Footer.tsx`
Conforme estrutura em `03_sitemap_routes.md`:
- 4 colunas (mobile: empilhadas)
- Endereço completo, CRPs (placeholder: `CRP XX/XXXXX`), telefone, email
- Links sociais (Instagram, WhatsApp)
- Linha de copyright + links legais
- Tom `moss` ou `cream` com texto `muted` (a definir visualmente)

### 6. Implementar layout do grupo `(marketing)`

`app/(marketing)/layout.tsx`:
```tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
```

### 7. Página inicial placeholder

Atualizar `app/(marketing)/page.tsx` para um placeholder simples que demonstre o sistema visual:

```tsx
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';

export default function HomePage() {
  return (
    <Section size="lg">
      <Container>
        <Eyebrow>VCare Essence · Recife</Eyebrow>
        <Heading as="h1" size="display-xl" className="mt-4">
          Por dentro é onde tudo começa.
        </Heading>
        <p className="mt-6 text-lead text-muted max-w-prose">
          Casa boutique de saúde mental no RioMar Trade Center.
          A primeira clínica sensorial de Recife.
        </p>
      </Container>
    </Section>
  );
}
```

### 8. Documentar componentes em uma "Storybook leve"

Criar `app/(dev)/styleguide/page.tsx` (ou `/dev/styleguide`) — uma página rota só de desenvolvimento, **excluída do sitemap**, mostrando:
- Todas as variações de Button
- Todos os Heading sizes
- Todos os tons de Section
- Quote, Callout, Eyebrow
- Paleta visual
- Tipografia em uso

Manter durante todo o desenvolvimento — facilita revisão.

---

## Critérios de aceitação

- [ ] Fontes self-hosted carregando sem CLS (verificar em DevTools → Network)
- [ ] Página inicial placeholder renderiza com identidade visual correta
- [ ] Header sticky funciona, menu mobile abre/fecha, dropdowns desktop funcionam
- [ ] Footer com toda informação institucional
- [ ] `/styleguide` mostra catálogo de componentes
- [ ] `pnpm build` continua passando
- [ ] Zero erros TypeScript, zero warnings ESLint
- [ ] Lighthouse mobile na home placeholder: Performance ≥ 95
- [ ] `prefers-reduced-motion` respeitado

---

## Próximo passo
Sprint 02 — Home completa.
