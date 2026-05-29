# Sprint 02 — Home

**Duração estimada:** 2 dias
**Objetivo:** home completa com todos os 11 blocos, conteúdo real, animações sutis, otimizada. É a página mais importante do site — primeira impressão da marca.

**Pré-leitura obrigatória:** `04_content_inventory.md` (seção HOME), `05_assets_guide.md`, `02_design_system.md` (Movimento e animação)

---

## Blocos da home (sequência)

Implementar **na ordem listada**, um por commit. Validar visualmente cada bloco antes de seguir para o próximo.

### 01 · Hero
- **Componente:** `components/sections/home/Hero.tsx`
- **Layout:** altura `min-h-[85vh]`, conteúdo centralizado verticalmente
- **Background:** vídeo loop muted do céu estrelado (`/videos/ceu-estrelado-loop.mp4`) ou imagem `/images/ambiente/ceu-estrelado-hero.webp` com `priority`
  - Vídeo: 8s, autoplay, loop, muted, playsinline, poster=imagem do céu estrelado
  - **Sem overlay escuro.** Usar gradiente sutil do `cream/0` ao `cream/40` apenas se necessário pra legibilidade
- **Conteúdo:**
  - Eyebrow `VCARE ESSENCE · RECIFE`
  - Display em serif: `Por dentro é onde tudo começa.` + linha em itálico: `E onde tudo trava.`
  - Subtítulo: `Casa boutique de saúde mental no RioMar Trade Center. A primeira clínica sensorial de Recife.`
  - 2 CTAs: `Conhecer a casa` (primary) + `Agendar uma conversa` (ghost)
- **Animação:** fade-in stagger entre eyebrow / display / subtítulo / CTAs (delay 100ms cada)

### 02 · A primeira clínica sensorial
- **Componente:** `components/sections/home/SensoryIntro.tsx`
- **Layout:** 2 colunas (texto à esquerda, imagem à direita) com inversão no mobile
- **Tone:** `cream`
- **Conteúdo:** conforme `04_content_inventory.md` bloco 02
- **Imagem:** detalhe sensorial (planta + materiais naturais, da pasta Drive)
- **CTA:** link textual com seta `Sobre a experiência sensorial →`

### 03 · O que cuidamos aqui (dois métodos)
- **Componente:** `components/sections/home/MethodsIntro.tsx`
- **Layout:** 2 cards grandes lado a lado (mobile: empilhados)
- **Cada card:**
  - Tone alternado: `sand` e `cream` (com borda)
  - Eyebrow indicando o método
  - Heading h3 em serif
  - Texto curto (3-4 linhas)
  - CTA ghost: `Conhecer o Método →`
  - Hover: leve elevação + cor de borda se aplicável
- **Conteúdo:** ver `04_content_inventory.md` bloco 03

### 04 · As demais frentes de cuidado
- **Componente:** `components/sections/home/CareGrid.tsx`
- **Layout:** Grid 2×2 desktop, 1×4 mobile
- **Cada card:**
  - Ícone discreto Lucide (`Brain`, `Sparkles`, `Compass`, `Users`)
  - Nome da vertical
  - 1 linha de descrição
  - Link "saber mais"
- **Tone:** `cream` com bordas `line`

### 05 · As fundadoras
- **Componente:** `components/sections/home/Founders.tsx`
- **Layout:** 2 cards grandes lado a lado
- **Cada card:**
  - Imagem editorial (placeholder até ensaios prontos — usar placeholder em `sand` com texto "Ensaio editorial — Sprint 05")
  - Nome em serif grande
  - Subline (Hipnoterapeuta · 14 anos / Psicóloga · 10 anos)
  - Citação em itálico (frase-marca de cada uma)
  - CTA: `Conhecer →`
- **Abaixo:** linha discreta com link para `/profissionais/convidados`

### 06 · A casa por dentro (galeria)
- **Componente:** `components/sections/home/HouseGallery.tsx`
- **Layout:** Grid editorial assimétrico de 6-8 imagens
  - Padrão recomendado: 1 grande à esquerda + 4 médias à direita em grid 2×2 (desktop)
  - Mobile: carrossel horizontal com snap
- **Texto final:** RioMar Trade Center info + CTA "Ver tour completo →"
- **Animação:** imagens fazem fade-in com leve scale (0.98 → 1) quando entram na viewport

### 07 · Diário VCare
- **Componente:** `components/sections/home/JournalPreview.tsx`
- **Layout:** 3 cards horizontais (mobile: vertical stack)
- **Cada card:**
  - Imagem do post (16:9)
  - Categoria (eyebrow)
  - Título do post (h3 serif)
  - Excerpt curto
  - Data + tempo de leitura
- **Por enquanto:** mock data — substituído por dados do CMS no Sprint 08
- **CTA:** `Todos os textos →`

### 08 · Quem confia (depoimentos editoriais)
- **Componente:** `components/sections/home/Testimonials.tsx`
- **Layout:** carrossel/slider sutil OU 3 depoimentos lado a lado
- **Cada depoimento:**
  - Texto em itálico, font serif
  - Identificação anonimizada: "Empresária, 42 anos · Boa Viagem"
  - **SEM foto, SEM nome completo**
- **Animação:** se for carrossel, intervalo ≥ 6s, transição lenta

### 09 · Atendimento online disponível
- **Componente:** dentro de `HomePage` direto, ou `components/sections/home/OnlineCTA.tsx`
- **Layout:** uma linha simples, centralizada
- **Tone:** `sand`
- **Conteúdo:** `Para quem mora longe ou prefere o conforto de casa, atendemos online com a mesma profundidade. →`

### 10 · CTA final
- **Componente:** `components/sections/home/FinalCTA.tsx`
- **Layout:** centralizado, `min-h-[50vh]`, tone `moss` ou `cream`
- **Conteúdo:**
  - Eyebrow: `COMECE QUANDO QUISER`
  - Headline grande em serif: `Uma primeira conversa nem sempre tem palavras. Comece pelo silêncio.`
  - 2 CTAs: `Agendar` (primary lg) + `Falar pelo WhatsApp` (secondary lg)

### 11 · Footer
Já implementado no Sprint 01.

---

## Animações — padrão para a home

Criar `lib/motion.ts` com as variants reutilizáveis:

```ts
import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};
```

Aplicação típica:
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
  variants={stagger}
>
  <motion.h2 variants={fadeInUp}>...</motion.h2>
  <motion.p variants={fadeInUp}>...</motion.p>
</motion.div>
```

---

## Otimizações específicas da home

### Imagens
- **Hero:** `priority={true}`, `sizes="100vw"`, formato AVIF/WebP, ≤ 200KB para a versão usada
- **Demais imagens:** `loading="lazy"` (padrão), `sizes` adequado para cada layout
- **Fotos editoriais das profissionais:** placeholder em `sand` até Sprint 05

### Performance
- **LCP target:** < 2.0s no mobile 4G
- **Vídeo do hero (se usar):** poster image obrigatório, preload="metadata"
- **Fonts:** já self-hosted no Sprint 01
- **JS bundle:** análise com `pnpm build && open .next/analyze` (configurar `@next/bundle-analyzer` se necessário)

### SEO básico da home

```tsx
export const metadata: Metadata = {
  title: 'VCare Essence — A primeira clínica sensorial de Recife',
  description: 'Casa boutique de saúde mental no RioMar Trade Center. Cuidamos do que ninguém vê: a mente, o emocional, a essência. Atendimento presencial em Recife e online.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'VCare Essence — A primeira clínica sensorial de Recife',
    description: 'Casa boutique de saúde mental no RioMar Trade Center.',
    images: ['/og/home.jpg'],
  },
};
```

JSON-LD básico de organização (detalhes no Sprint 10):
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'VCare Essence',
    url: 'https://vcareessence.com.br',
    // ... ver Sprint 10 para schema completo
  }) }}
/>
```

---

## Critérios de aceitação

- [ ] Todos os 11 blocos da home implementados conforme conteúdo
- [ ] Animações fade-in funcionam (e respeitam `prefers-reduced-motion`)
- [ ] Header e Footer integrados, sticky funciona
- [ ] Mobile responsivo em todos os blocos (testar em 375px, 768px, 1024px, 1440px)
- [ ] LCP mobile < 2.5s (Lighthouse)
- [ ] CLS < 0.1
- [ ] Imagens otimizadas (formatos modernos, sizes corretos)
- [ ] Acessibilidade: navegação por teclado, foco visível, alt em todas as imagens
- [ ] Zero violações `axe DevTools`
- [ ] Lighthouse mobile: P ≥ 90, A ≥ 95, BP ≥ 95, SEO ≥ 95

---

## Próximo passo
Sprint 03 — Páginas dos dois métodos autorais (mais densas do site).
