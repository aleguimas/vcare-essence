# Sprint 00 — Foundation

**Duração estimada:** 0.5 dia
**Objetivo:** repositório limpo, Next.js 15 + TypeScript + Tailwind v4 configurados, ferramentas de qualidade prontas. Nada de conteúdo ainda — só fundação.

---

## Pré-requisitos
- Node.js 20+ instalado
- pnpm instalado (`npm install -g pnpm`)
- Git configurado
- Conta no GitHub (para criar o repositório)

---

## Tarefas

### 1. Criar projeto Next.js

```bash
pnpm create next-app@latest vcare-essence-site \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd vcare-essence-site
```

Confirmações esperadas:
- ✅ TypeScript: yes
- ✅ ESLint: yes
- ✅ Tailwind CSS: yes
- ✅ `src/` directory: **no** (mantemos tudo na raiz)
- ✅ App Router: yes
- ✅ Turbopack: yes

### 2. Configurar Git e estrutura

```bash
git init
git branch -m main
```

Criar `.gitignore` adicionais:

```gitignore
# já vem do template:
# /node_modules, .next, .env*.local, etc.

# Adicionar:
.vscode/
.idea/
*.swp
*.swo
.DS_Store
public/_raw/        # assets brutos não otimizados
*.heic              # nunca commitar HEIC
.env.local
.env.production.local
```

### 3. Mover arquivos do pacote para o repo

Copie estes arquivos para a raiz do repositório:
- `CLAUDE.md`
- `01_tech_stack.md`
- `02_design_system.md`
- `03_sitemap_routes.md`
- `04_content_inventory.md`
- `05_assets_guide.md`
- Pasta `sprints/`

```
vcare-essence-site/
├── CLAUDE.md
├── 01_tech_stack.md
├── 02_design_system.md
├── 03_sitemap_routes.md
├── 04_content_inventory.md
├── 05_assets_guide.md
├── sprints/
│   ├── sprint-00-foundation.md
│   └── ... (todos os outros)
├── app/
├── public/
└── ...
```

### 4. Instalar dependências core

```bash
pnpm add framer-motion lucide-react clsx tailwind-merge class-variance-authority
pnpm add react-hook-form zod @hookform/resolvers
pnpm add @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-accordion sonner
pnpm add @next/third-parties
pnpm add -D @tailwindcss/typography @tailwindcss/forms
pnpm add -D prettier prettier-plugin-tailwindcss
pnpm add -D @types/node
```

### 5. Configurar Prettier

`.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

`.prettierignore`:
```
.next
node_modules
public
*.md
```

### 6. Configurar ESLint complementar

Editar `eslint.config.mjs` (Next 15 usa flat config):

```js
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];

export default eslintConfig;
```

### 7. Configurar TypeScript estrito

Editar `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 8. Criar estrutura de pastas vazia

```bash
mkdir -p app/\(marketing\)
mkdir -p components/{ui,layout,sections,editorial,forms,seo}
mkdir -p lib
mkdir -p public/{images,fonts,og}
mkdir -p public/images/{ambiente,profissionais,logo}
```

### 9. Configurar `next.config.mjs`

Substituir o `next.config.ts` (ou `.mjs`) pelo conteúdo recomendado em `01_tech_stack.md`.

### 10. Criar arquivos de constantes essenciais

`lib/routes.ts`:
```ts
export const ROUTES = {
  home: '/',
  aCasa: '/a-casa',
  experienciaSensorial: '/a-casa/experiencia-sensorial',
  metodoV: '/metodo-v',          // TODO: aguardar decisão das sócias
  metodoC: '/metodo-c',          // TODO: aguardar decisão das sócias
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

export const SITE = {
  name: 'VCare Essence',
  url: 'https://vcareessence.com.br',
  description: 'A primeira clínica sensorial de Recife.',
  address: {
    street: 'Av. República do Líbano, 251',
    complement: 'RioMar Trade Center, Torre 4',
    neighborhood: 'Pina',
    city: 'Recife',
    state: 'PE',
    country: 'BR',
    zip: '51110-160',  // CEP do RioMar — verificar
  },
  // CRPs e telefones a confirmar com as sócias
} as const;
```

`lib/utils.ts`:
```ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 11. Verificar build

```bash
pnpm dev    # confirmar que o servidor sobe sem erros em http://localhost:3000
pnpm build  # confirmar que o build passa
pnpm lint   # confirmar zero erros de lint
```

### 12. Primeiro commit

```bash
git add .
git commit -m "chore(sprint-00): foundation — next.js 15 + ts + tailwind v4 configurados"
```

(Opcional) Criar repositório remoto no GitHub e fazer push.

---

## Critérios de aceitação

- [ ] `pnpm dev` roda sem erros, página default abre em `localhost:3000`
- [ ] `pnpm build` completa sem erros
- [ ] `pnpm lint` sem warnings nem erros
- [ ] `pnpm tsc --noEmit` sem erros
- [ ] Estrutura de pastas criada conforme `01_tech_stack.md`
- [ ] Todos os arquivos `.md` do pacote estão na raiz do repositório
- [ ] `lib/routes.ts` e `lib/utils.ts` criados
- [ ] Commit inicial feito

---

## Próximo passo
Quando este sprint estiver validado, autorizar o início do **Sprint 01 — Design System**.
