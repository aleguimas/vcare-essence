# Sprint 03 — Páginas dos Métodos Autorais

**Duração estimada:** 2 dias
**Objetivo:** páginas `/metodo-v` e `/metodo-c` — as duas páginas comercialmente mais importantes do site, com tratamento editorial superior.

**Pré-leitura obrigatória:** `04_content_inventory.md` (seções MÉTODO V e MÉTODO C), `CLAUDE.md` (seção "Duas jornadas digitais distintas")

---

## Princípio crítico — não esquecer

> **A página do Método V não pode ter copy de venda. Tem que ter copy de qualificação.**

Função do site para essas verticais é **qualificar e aquecer**, não vender. A conversão acontece presencialmente, na primeira sessão. WhatsApp sozinho NÃO converte. CTAs devem conduzir suavemente para o agendamento do primeiro encontro — e parar aí.

---

## Página `/metodo-v` — Método Vanessa Albuquerque

### Estrutura (10 blocos)

Implementar conforme `04_content_inventory.md` seção MÉTODO V. Resumo:

| # | Bloco | Componente sugerido |
|---|---|---|
| 01 | Hero editorial (sem CTA) | `MethodHero` |
| 02 | A trava — sintomas reconhecíveis | `MethodProblem` |
| 03 | Por que terapia comum não funcionou | `MethodWhyNot` |
| 04 | Método em 4 movimentos | `MethodSteps` |
| 05 | Para quem é | `MethodForWho` |
| 06 | Para quem NÃO é (anti-positioning) | `MethodNotForWho` |
| 07 | Casos editoriais anônimos | `MethodCases` |
| 08 | Vanessa Albuquerque | `MethodProfessional` |
| 09 | FAQ | `MethodFAQ` |
| 10 | CTA final (único) | `MethodFinalCTA` |

### Componente-chave: MethodSteps

```tsx
// components/sections/method/MethodSteps.tsx
interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  { number: 1, title: 'Encontrar a trava no inconsciente', description: 'Diagnóstico profundo...' },
  { number: 2, title: 'Ir até a raiz', description: '...' },
  { number: 3, title: 'Elaborar um plano exclusivo', description: '...' },
  { number: 4, title: 'Acompanhar de forma integral, em encontros', description: '...' },
];
```

**Visual:** sequência vertical com número grande em serif (bronze), título em h3, parágrafo curto. Linha vertical fina conectando os passos. Em desktop, pode ser layout em 4 colunas com linha horizontal conectora.

### Componente-chave: MethodCases (casos editoriais)

Cada caso é uma narrativa curta (200-300 palavras) em texto corrido editorial. Não checkbox, não bullet. Tom de carta literária.

```tsx
// Estrutura de cada caso
<article className="my-section-sm">
  <Eyebrow>CASO {n} · ANÔNIMO COM CONSENTIMENTO</Eyebrow>
  <Heading as="h3" size="h2" className="mt-3 mb-6">
    {title} {/* Ex: "A sócia que não conseguia vender o negócio" */}
  </Heading>
  <div className="prose prose-lg max-w-prose font-serif italic text-moss">
    {/* parágrafo 1: contexto */}
    {/* parágrafo 2: o que apareceu na hipnoterapia */}
    {/* parágrafo 3: o desfecho */}
  </div>
</article>
```

**Imagem por caso:** opcional, sempre detalhe abstrato (luz, textura), nunca pessoa. Tom contemplativo.

### Componente-chave: MethodFAQ

Implementar com `@radix-ui/react-accordion`. Schema FAQPage obrigatório no Sprint 10.

Perguntas mínimas:
- Como funciona a hipnoterapia clínica? Eu fico inconsciente?
- Em que difere de terapia tradicional?
- Quantos encontros costuma durar?
- Atende online com a mesma profundidade?
- Quanto custa? (resposta honesta sobre não publicar preço)
- Qual é o próximo passo se eu quiser conhecer mais?

### Componente-chave: MethodFinalCTA

**Apenas um CTA primário.** Não polui com várias opções.

```tsx
<Section size="lg" tone="moss">
  <Container className="text-center">
    <Eyebrow tone="bronze">O ENCONTRO COMEÇA AQUI</Eyebrow>
    <Heading as="h2" size="display-md" className="mt-6 text-cream">
      Um primeiro encontro é uma conversa de diagnóstico.<br/>
      Não compromisso.
    </Heading>
    <p className="mt-6 text-lead text-cream/80 max-w-prose-wide mx-auto">
      A partir dele, decidimos juntos se há fit para um plano.
    </p>
    <div className="mt-10">
      <Button size="lg" variant="primary" asChild>
        <Link href={ROUTES.agendar}>Agendar primeiro encontro</Link>
      </Button>
    </div>
    <p className="mt-6 text-small text-cream/60">
      Ou <a href="https://wa.me/..." className="underline">fale pelo WhatsApp →</a>
    </p>
  </Container>
</Section>
```

---

## Página `/metodo-c` — Método Camila Clemente

### Estrutura (7 blocos)

Conforme `04_content_inventory.md` seção MÉTODO C. Resumo:

| # | Bloco | Observação |
|---|---|---|
| 01 | Hero | Headline forte falando com pais/mães |
| 02 | O que pode estar acontecendo | Lista editorial de sintomas (não checklist asséptico) |
| 03 | Programa em 4 pilares | Suporte psicológico / Organização / Preparação emocional / Acompanhamento familiar |
| 04 | Como funciona | Formato, periodicidade, papel da família |
| 05 | Camila Clemente | Foto editorial + bio |
| 06 | FAQ | Específico para pais |
| 07 | CTA final | "Agendar conversa inicial" |

### Componente-chave: ProgramPillars

Diferente do `MethodSteps` da Vanessa (que é sequencial). Aqui são 4 pilares simultâneos. Visual: grid 2×2 (desktop), 1×4 (mobile). Cada pilar em card com ícone Lucide discreto.

### Diferença de tom em relação ao Método V

| | Método V | Método C |
|---|---|---|
| Público da copy | Empresário(a) (1ª pessoa) | Pai/mãe (3ª pessoa sobre o filho) |
| Tom | Provocativo, anti-positioning forte | Empático, desculpabilizante |
| Frase âncora | "Não trato sintomas. Vou à raiz." | "Seu filho não é preguiçoso." |
| CTA | "Agendar primeiro encontro" | "Agendar conversa inicial" |

---

## Componentes reutilizáveis criados neste sprint

Criar em `components/sections/method/`:
- `MethodHero.tsx` (genérico, recebe props)
- `MethodSteps.tsx`
- `ProgramPillars.tsx`
- `MethodCases.tsx`
- `MethodProfessional.tsx`
- `MethodFAQ.tsx` (recebe perguntas via props, gera schema automaticamente)
- `MethodFinalCTA.tsx`

---

## SEO específico

### Metadata da `/metodo-v`
```ts
export const metadata: Metadata = {
  title: 'Método V — Para destravar emocionalmente',  // TODO: trocar pelo nome final
  description: 'Trava emocional não é fraqueza, é informação. Vanessa Albuquerque, hipnoterapeuta com 14 anos de prática, conduz um método autoral em encontros estruturados — não em anos de terapia.',
  alternates: { canonical: '/metodo-v' },
  openGraph: {
    images: ['/og/metodo-v.jpg'],
  },
};
```

### Schema markup
- `MedicalTherapy` para o método em si
- `Person` para Vanessa
- `FAQPage` para o FAQ
- Ver Sprint 10 para implementação completa

---

## Critérios de aceitação

- [ ] `/metodo-v` com todos os 10 blocos
- [ ] `/metodo-c` com todos os 7 blocos
- [ ] Componentes reutilizáveis criados em `components/sections/method/`
- [ ] FAQs com schema FAQPage
- [ ] CTAs apontando para `/agendar` (NÃO para WhatsApp direto na vertical do método)
- [ ] Imagens placeholder marcadas (foto da Vanessa/Camila virá no Sprint 05)
- [ ] Mobile responsivo
- [ ] Lighthouse mobile ≥ 90 em todas as categorias
- [ ] Zero violações `axe DevTools`

---

## Próximo passo
Sprint 04 — Páginas das 4 verticais clínicas + atendimento online.
