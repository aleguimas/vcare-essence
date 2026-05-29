# Sprint 08 — Diário VCare (Blog)

**Duração estimada:** 1-2 dias
**Objetivo:** sistema de blog autoral com CMS, listagem, post individual, categorias. Motor orgânico de longo prazo.

**Pré-leitura:** `04_content_inventory.md` (DIÁRIO), `CLAUDE.md`, `01_tech_stack.md`

---

## Decisão crítica do sprint: Sanity vs MDX

Discutir e decidir antes de implementar. Recomendação: **Sanity**, pelos motivos:

| Critério | Sanity (recomendado) | MDX |
|---|---|---|
| Edição pelas sócias | Studio web amigável | Editar arquivos `.mdx` no GitHub |
| Imagens | CDN otimizado nativo | Manual via `public/` |
| Categorias, tags, autores | Tipos nativos | Frontmatter manual |
| Custo | Grátis até 3 usuários, 10k docs | Zero |
| Tempo de setup | 2-3h | 30min |
| Curva de aprendizado | Studio é intuitivo | Requer Git |
| Escalabilidade | Sem limite prático | Performance degrada com muitos posts |

**Se as sócias forem editar diretamente, Sanity ganha.**
**Se o desenvolvedor/agência for editar e elas apenas aprovarem, MDX serve.**

---

## Caminho A — Sanity (recomendado)

### 1. Criar projeto Sanity
```bash
pnpm create sanity@latest -- \
  --project-name "VCare Essence" \
  --dataset production \
  --template clean \
  --output-path ./sanity
```

Pegar o `projectId` gerado e adicionar em `.env.local`:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=xxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=xxx  # gerar no Sanity Studio
```

### 2. Schemas do conteúdo

`sanity/schemas/post.ts`:
```ts
export default {
  name: 'post',
  title: 'Post do Diário',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título', type: 'string', validation: r => r.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() },
    { name: 'category', title: 'Categoria', type: 'reference', to: [{ type: 'category' }], validation: r => r.required() },
    { name: 'author', title: 'Autor', type: 'reference', to: [{ type: 'author' }], validation: r => r.required() },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, validation: r => r.required().max(200) },
    { name: 'coverImage', title: 'Imagem de capa', type: 'image', options: { hotspot: true } },
    { name: 'body', title: 'Corpo do texto', type: 'array', of: [
      { type: 'block' },
      { type: 'image', options: { hotspot: true } },
      { type: 'object', name: 'quote', fields: [
        { name: 'text', type: 'text' },
        { name: 'author', type: 'string' },
      ]},
    ]},
    { name: 'publishedAt', title: 'Publicado em', type: 'datetime', validation: r => r.required() },
    { name: 'readingTime', title: 'Tempo de leitura (min)', type: 'number' },
    { name: 'seo', title: 'SEO', type: 'object', fields: [
      { name: 'metaTitle', type: 'string' },
      { name: 'metaDescription', type: 'text', rows: 2 },
    ]},
  ],
};
```

`sanity/schemas/category.ts`:
```ts
export default {
  name: 'category',
  title: 'Categoria',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: r => r.required() },
    { name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() },
    { name: 'description', type: 'text', rows: 2 },
  ],
};
```

`sanity/schemas/author.ts`:
```ts
export default {
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', validation: r => r.required() },
    { name: 'role', type: 'string' },  // "Hipnoterapeuta", "Psicóloga"
    { name: 'bio', type: 'text', rows: 3 },
    { name: 'photo', type: 'image' },
    { name: 'crp', type: 'string' },
    { name: 'profileSlug', type: 'slug', options: { source: 'name' } },
  ],
};
```

### 3. Studio embedado (rota `/studio`)

`app/studio/[[...index]]/page.tsx`:
```tsx
'use client';
import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
```

Acesso: `vcareessence.com.br/studio` (proteger com auth Sanity).

### 4. Categorias iniciais

Criar manualmente no Studio (Sprint 08 task):
1. **Trava & Empresariedade** — pilar editorial Vanessa
2. **Direção & Carreira** — pilar Camila (adolescente + adulto)
3. **Adolescência & Estudos** — pilar Método C
4. **Mente em Transição** — pilar conjunto (maternidade, menopausa, luto)
5. **Saúde Mental Sem Mistério** — métodos explicados, hipnoterapia clínica desmistificada

### 5. Autores iniciais
- Vanessa Albuquerque
- Camila Clemente
- (Espaço para convidados futuros)

---

## Caminho B — MDX (fallback simples)

Se decidirem ir de MDX:

```bash
pnpm add @next/mdx @mdx-js/loader @mdx-js/react gray-matter
pnpm add remark-gfm rehype-pretty-code reading-time
```

Estrutura:
```
content/
└── diario/
    ├── trava-empresarial-sinais.mdx
    ├── como-saber-se-tenho-tdah-adulto.mdx
    └── ...
```

Frontmatter padrão:
```mdx
---
title: "Sinais de uma trava emocional em empresários"
slug: trava-empresarial-sinais
category: trava-empresariedade
author: vanessa
publishedAt: 2026-08-15
excerpt: "Quando produtividade já não preenche a sensação de teto, algo mais profundo pode estar pedindo atenção."
coverImage: /images/blog/trava-empresarial-sinais.webp
---

Texto do post em MDX, com possibilidade de componentes React inline...
```

Helpers em `lib/blog.ts` para listar e carregar posts.

---

## Páginas a implementar (vale para os dois caminhos)

### 1. `/diario` — listagem
- Hero curto
- Filtro por categoria (5 pillars)
- Grid de posts (3 colunas desktop, 1 mobile)
- Paginação ou "Load more"
- Sidebar opcional com posts em destaque (pode pular)

### 2. `/diario/[slug]` — post individual
- Header: categoria (eyebrow) + título (serif grande) + meta (autor, data, tempo de leitura)
- Cover image grande
- Corpo do post em prose Tailwind (max-w-prose)
- Final do post: autor (card com foto + bio curta + link para perfil)
- 3 posts relacionados (mesma categoria)
- CTA contextual (ex: post sobre trava → CTA "Conhecer Método V")

### 3. `/diario/categoria/[categoria]` — listagem filtrada
- Mesma estrutura de listagem, pré-filtrada

---

## Tipografia do post (prose Tailwind)

Configurar `@tailwindcss/typography` com tema customizado:
```ts
// tailwind.config.ts — extend
typography: ({ theme }) => ({
  DEFAULT: {
    css: {
      '--tw-prose-body': theme('colors.ink'),
      '--tw-prose-headings': theme('colors.moss.DEFAULT'),
      '--tw-prose-links': theme('colors.bronze.DEFAULT'),
      '--tw-prose-bold': theme('colors.moss.DEFAULT'),
      '--tw-prose-quotes': theme('colors.moss.DEFAULT'),
      '--tw-prose-quote-borders': theme('colors.bronze.DEFAULT'),
      fontFamily: theme('fontFamily.sans').join(','),
      h1: { fontFamily: theme('fontFamily.serif').join(',') },
      h2: { fontFamily: theme('fontFamily.serif').join(',') },
      h3: { fontFamily: theme('fontFamily.serif').join(',') },
    },
  },
}),
```

Uso no post:
```tsx
<article className="prose prose-lg max-w-prose mx-auto">
  <PortableText value={post.body} components={portableTextComponents} />
</article>
```

---

## SEO do blog

### Metadata por post (dinâmica)
```ts
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
      type: 'article',
      authors: [post.author.name],
      publishedTime: post.publishedAt,
    },
  };
}
```

### Schema Article
```ts
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  image: post.coverImage,
  author: {
    '@type': 'Person',
    name: post.author.name,
    url: `https://vcareessence.com.br/profissionais/${post.author.profileSlug}`,
  },
  publisher: {
    '@type': 'MedicalClinic',
    name: 'VCare Essence',
    logo: { '@type': 'ImageObject', url: 'https://vcareessence.com.br/logo.png' },
  },
  datePublished: post.publishedAt,
  dateModified: post.updatedAt || post.publishedAt,
};
```

---

## Conteúdo inicial — 6 posts seed

Recomendação: **antes do launch, ter 6 posts publicados**, 1-2 por categoria, para que o blog não pareça vazio. Sugestões de pautas:

| # | Categoria | Título sugerido | Autor |
|---|---|---|---|
| 1 | Trava & Empresariedade | "Sinais de uma trava emocional em empresários — e por que produtividade não resolve" | Vanessa |
| 2 | Trava & Empresariedade | "Por que ansiedade no topo da carreira é diferente da ansiedade comum" | Vanessa |
| 3 | Saúde Mental Sem Mistério | "Hipnoterapia clínica: o que é, o que não é, o que ela pode (e não pode) fazer" | Vanessa |
| 4 | Adolescência & Estudos | "Seu filho não é preguiçoso — e por que esse diagnóstico moral atrapalha tudo" | Camila |
| 5 | Direção & Carreira | "TDAH adulto descoberto tarde: o que muda quando se nomeia" | Camila |
| 6 | Mente em Transição | "Quando cuidar começa pela rotina — e não pelo problema" | Camila |

**Escrita destes posts não é responsabilidade do dev/Claude Code.** É copywriting que envolve as sócias. Estrutura técnica do blog deve estar pronta para receber os textos quando ficarem prontos.

---

## Critérios de aceitação

- [ ] CMS escolhido e configurado (Sanity ou MDX)
- [ ] 5 categorias criadas
- [ ] 2 autores criados (Vanessa, Camila)
- [ ] Pelo menos 2 posts de exemplo (lorem ipsum aceitável para teste)
- [ ] `/diario` listagem funcionando com filtro por categoria
- [ ] `/diario/[slug]` posts renderizando corretamente
- [ ] `/diario/categoria/[categoria]` funcionando
- [ ] Schema Article JSON-LD em cada post
- [ ] Cover image otimizada com `next/image`
- [ ] OG image gerada automaticamente ou definida no CMS
- [ ] Mobile responsivo
- [ ] Lighthouse ≥ 90

---

## Próximo passo
Sprint 09 — Página Agendar + integrações WhatsApp/calendar.
