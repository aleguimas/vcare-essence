# 02 — Design System

## Filosofia

O design da VCare Essence opera dois princípios em tensão produtiva:

1. **Premium discreto** — público A/B valoriza discrição mais que ostentação. Espaço em branco, tipografia editorial, cor com parcimônia.
2. **Sensorial digital** — o site é a única chance de transmitir, pelo digital, a experiência sensorial da casa. Fotografia em destaque, movimento sutil, ritmo de leitura calmo.

**Regra-mãe:** se ficar em dúvida entre "mais" ou "menos", a resposta é sempre "menos, mas com mais cuidado".

---

## Tokens — Tailwind config

`tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta principal
        cream: {
          DEFAULT: '#F5F1EA',
          50: '#FAF7F2',
          100: '#F5F1EA',
          200: '#EDE6D9',
        },
        sand: {
          DEFAULT: '#D9CFBE',
          100: '#E8E0D1',
          200: '#D9CFBE',
          300: '#C7B89E',
        },
        bronze: {
          DEFAULT: '#8C7853',
          100: '#B5A47F',
          200: '#A18E68',
          300: '#8C7853',
          400: '#6E5E40',
          500: '#54472F',
        },
        moss: {
          DEFAULT: '#3A4A3F',
          100: '#647368',
          200: '#4D5D52',
          300: '#3A4A3F',
          400: '#2A3830',
          500: '#1D2823',
        },
        navy: {
          DEFAULT: '#1F2A44',
          100: '#3C4660',
          200: '#2D3852',
          300: '#1F2A44',
        },
        ink: '#1A1A1A',
        muted: '#6B6B6B',
        line: '#E5E0D6',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Escala tipográfica editorial
        'display-xl': ['clamp(3rem, 8vw, 6.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
        'lead': ['clamp(1.125rem, 1.5vw, 1.375rem)', { lineHeight: '1.5' }],
        'body': ['1.0625rem', { lineHeight: '1.65' }],
        'small': ['0.9375rem', { lineHeight: '1.5' }],
        'eyebrow': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.15em' }],
      },
      spacing: {
        'section-sm': 'clamp(3rem, 6vw, 5rem)',
        'section': 'clamp(4rem, 10vw, 8rem)',
        'section-lg': 'clamp(6rem, 14vw, 12rem)',
      },
      maxWidth: {
        'prose-narrow': '36rem',
        'prose': '44rem',
        'prose-wide': '52rem',
        'container': '76rem',
      },
      transitionTimingFunction: {
        'soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
```

---

## Paleta — uso

| Token | Hex | Quando usar |
|---|---|---|
| `cream` | `#F5F1EA` | Fundo principal de todas as páginas |
| `sand` | `#D9CFBE` | Fundo de blocos, cards, callouts |
| `bronze` | `#8C7853` | Links, botões secundários, detalhes, ícones, **cor do logo** |
| `moss` | `#3A4A3F` | Tipografia de títulos (alternativa ao navy), botões primários |
| `navy` | `#1F2A44` | Tipografia de títulos institucionais, cabeçalho |
| `ink` | `#1A1A1A` | Texto de corpo principal |
| `muted` | `#6B6B6B` | Texto secundário, captions |
| `line` | `#E5E0D6` | Bordas sutis, divisores |

**Nunca usar:** `#000000` puro, `#FFFFFF` puro, azul ciano hospitalar, rosa estético clichê, gradientes saturados.

---

## Tipografia

### Carregamento (next/font/local)

`app/layout.tsx`:

```ts
import { Fraunces, Inter } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
```

> **Nota:** preferir `next/font/local` em produção (zero requisição externa). Baixar os arquivos `.woff2` da Google Fonts e colocar em `public/fonts/`. Detalhes no Sprint 01.

### Escala e uso

| Token | Quando usar | Família |
|---|---|---|
| `display-xl` | Manifesto, hero principal | Serif |
| `display-lg` | Hero de páginas pilares | Serif |
| `display-md` | Hero de páginas secundárias | Serif |
| `h1` | Título de seção dentro de página | Serif |
| `h2` | Subseções | Serif |
| `h3` | Cards, blocos | Sans (peso 500) |
| `eyebrow` | Tag de seção (todo em maiúsculas) | Sans (peso 600, tracking generoso) |
| `lead` | Parágrafo de abertura | Sans |
| `body` | Texto corrido | Sans |
| `small` | Captions, metadados | Sans |

---

## Espaçamento e ritmo

### Seções
Sempre usar os tokens `spacing.section-sm | section | section-lg` para padding vertical:

```tsx
<section className="py-section"> {/* py-16 a py-32 responsivo */}
  <Container>...</Container>
</section>
```

### Container
Largura máxima do conteúdo principal: `max-w-container` (76rem ≈ 1216px).

```tsx
// components/layout/Container.tsx
export function Container({ children, narrow = false }) {
  return (
    <div className={cn(
      "mx-auto px-6 md:px-10",
      narrow ? "max-w-prose-wide" : "max-w-container"
    )}>
      {children}
    </div>
  );
}
```

### Vertical rhythm
- Entre parágrafos: `mt-6` (1.5rem)
- Entre h2 e parágrafo: `mt-4` (1rem)
- Entre h3 e parágrafo: `mt-2`
- Entre seções dentro de página: `mt-section-sm`

---

## Componentes base — biblioteca

Todos os componentes devem viver em `components/` com tipagem estrita.

### Button

```tsx
// components/ui/button.tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-400 ease-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-moss text-cream hover:bg-moss-400',
        secondary: 'bg-transparent border border-bronze text-bronze hover:bg-bronze hover:text-cream',
        ghost: 'text-bronze hover:text-bronze-400 underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-sm rounded-full',
        md: 'h-11 px-6 text-base rounded-full',
        lg: 'h-14 px-8 text-base rounded-full tracking-wide',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);
```

**Comportamento:**
- Botões primários (CTA principal) usam `moss` (sólido, presença) — usar com parcimônia (1-2 por página).
- Botões secundários usam contorno `bronze` — opção mais sutil.
- Botões ghost são links com estilo de botão — para CTAs terciários.
- **Sempre `rounded-full`** (forma orgânica, premium).

### Container, Section, Heading

Componentes de layout padronizados — ver implementação no Sprint 01.

### Editorial — componentes específicos da marca

- **Quote** — bloco de citação com barra lateral em bronze (ver dossiê v3.2)
- **Manifesto** — texto longo em serif, sem máximo de largura prosa estreito
- **Eyebrow** — tag de seção pequena, maiúsculas, tracking generoso, em bronze
- **Callout** — caixa destacada com fundo `sand` e barra lateral `bronze`
- **EditorialImage** — imagem + caption + crédito opcional
- **Pillars** — grid 5 colunas (desktop) / 1 coluna (mobile) para os pilares
- **MethodSteps** — sequência numerada dos 4 movimentos do método

---

## Movimento e animação

**Filosofia:** o movimento na VCare é como respiração — lento, ritmado, presente mas não intrusivo. **Nada de animações vistosas.** Nada de parallax exagerado. Nada de elementos pipocando.

### Padrões aceitos

- **Fade-in com leve translate** (`y: 20 → 0`) quando elementos entram na viewport. Duração 600-800ms. Easing `ease-soft` (cubic-bezier(0.22, 1, 0.36, 1)).
- **Hover suaves** em links e botões — duração 400ms.
- **Imagens com leve scale** (1.0 → 1.03) no hover de cards.
- **Cursor com efeito sutil** — opcional, só em desktop.

### Padrões proibidos

- Parallax pronunciado
- Carrosséis com auto-rotação rápida (use intervalo ≥ 6s se for inevitável)
- Animações com bounce/spring exagerado
- Texto animando letra por letra
- Gradientes animados
- Overlays escuros para chamar atenção

### Implementação (Framer Motion)

```tsx
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  variants={fadeIn}
>
  ...
</motion.div>
```

---

## Iconografia

**lucide-react** — linha fina (`strokeWidth={1.5}`), tamanho padrão `20`. Usar com parcimônia, nunca como decoração — só como apoio funcional.

**Não usar:** ícones gradientes, emojis em copy institucional, ícones de "categorias" coloridos tipo Material Design.

---

## Estados de UI

### Loading
- Skeletons em `sand` com pulse muito sutil
- Sem spinners coloridos

### Empty states
- Texto curto em `muted`
- Sem ilustrações vetoriais infantis

### Erro
- Tom respeitoso, sem catastrofismo
- "Algo não funcionou como esperado. Por favor, tente novamente — ou fale com a gente pelo WhatsApp."

### Success
- Toast em `moss` com texto em `cream`
- Duração 4s

---

## Acessibilidade — checklist por componente

Todo componente novo deve passar por:

- [ ] Contraste mínimo WCAG AA (4.5:1 para texto pequeno, 3:1 para texto grande)
- [ ] Focusable via teclado (tab)
- [ ] Estado de foco visível (não usar `outline: none`)
- [ ] Atributos ARIA quando necessário (`aria-label`, `aria-expanded`, `aria-hidden`)
- [ ] Estrutura semântica (`<button>` para ações, `<a>` para navegação)
- [ ] Imagens com `alt` descritivo (ou `alt=""` se for decorativa)
- [ ] Vídeos com legendas (ou aviso de "sem áudio" quando aplicável)
- [ ] Movimento respeita `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Cursor e seleção

```css
::selection {
  background: theme('colors.bronze.300');
  color: theme('colors.cream');
}
```

---

## Princípios de copy no design

- Frases curtas. Parágrafos curtos.
- Espaço em branco generoso.
- Uma ideia por seção.
- Verbos no presente.
- Pronome "a gente" ou "nós" para suavizar — nunca "eu" institucional.
- Sem ponto de exclamação. Nunca.
