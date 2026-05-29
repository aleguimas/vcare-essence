# Sprint 11 — Performance e Acessibilidade

**Duração estimada:** 1 dia
**Objetivo:** garantir Core Web Vitals, WCAG 2.2 AA e conformidade LGPD em todo o site.

---

## 1. Core Web Vitals

Metas (mobile 4G, não negociáveis):
- **LCP** < 2.5s — idealmente < 2.0s
- **CLS** < 0.1
- **INP** < 200ms

Ações:
- Auditar todas as páginas com Lighthouse e PageSpeed Insights
- `priority` apenas no LCP de cada página (hero image)
- Definir `width`/`height` ou `aspect-ratio` em toda imagem (evita CLS)
- `font-display: swap` + fontes self-hosted (já feito no Sprint 01)
- Lazy load de Cal.com, mapa, vídeos, galeria do tour
- `next/dynamic` para componentes client pesados (lightbox, carrosséis)
- Analisar bundle: `@next/bundle-analyzer` — remover libs não usadas
- Converter todas as imagens restantes para AVIF/WebP, nenhuma > 200KB

## 2. Acessibilidade WCAG 2.2 AA

Checklist por página:
- Contraste AA (4.5:1 texto pequeno, 3:1 grande) — auditar a paleta bronze sobre cream
- Navegação completa por teclado, foco sempre visível
- Landmarks semânticos (`header`, `nav`, `main`, `footer`, `article`)
- Hierarquia de headings sem pular níveis
- `alt` descritivo em imagens informativas, `alt=""` nas decorativas
- Labels associados em todos os campos de formulário
- `aria-*` em accordions, modais, drawer mobile, dropdowns
- `prefers-reduced-motion` respeitado (já no Sprint 01)
- Skip-to-content link no topo
- Foco preso (focus trap) em modais
- Validar com **axe DevTools** — zero violações sérias em todas as páginas

## 3. LGPD

- Banner de cookies (aceitar/recusar/configurar) — bloquear GA4/Clarity até consentimento
- `/politica-de-privacidade` e `/termos-de-uso` linkados no footer (criados no Sprint 10)
- Consentimento explícito em todos os formulários (checkbox + link à política)
- Dados sensíveis de saúde: nunca em logs, nunca em analytics
- Implementar Google Consent Mode v2

## 4. Robustez

- `app/error.tsx` (boundary global) e `app/global-error.tsx`
- Estados de loading com skeletons em `sand`
- Estados de erro de formulário com tom da marca
- Testar offline / conexão lenta

## Critérios de aceitação
- [ ] Lighthouse mobile ≥ 90 em P/A/BP/SEO em **todas** as páginas
- [ ] LCP < 2.5s, CLS < 0.1, INP < 200ms (PageSpeed real)
- [ ] axe DevTools: zero violações sérias em todas as páginas
- [ ] Navegação 100% por teclado
- [ ] Banner de cookies + Consent Mode funcionando
- [ ] Error boundaries implementados
- [ ] Nenhuma imagem > 200KB, todas AVIF/WebP

## Próximo passo
Sprint 12 — Launch.
