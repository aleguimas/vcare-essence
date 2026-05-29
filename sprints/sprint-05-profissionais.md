# Sprint 05 — Profissionais

**Duração estimada:** 1 dia
**Objetivo:** páginas individuais de Vanessa e Camila + hub e página de convidados.

**Pré-leitura:** `04_content_inventory.md` (seções PROFISSIONAIS), `CLAUDE.md`

---

## Páginas

### 1. `/profissionais` — hub
Curta. 3 cards principais (Vanessa, Camila, Convidados) + texto sobre filosofia de curadoria.

### 2. `/profissionais/vanessa-albuquerque`
### 3. `/profissionais/camila-clemente`
### 4. `/profissionais/convidados`

---

## Estrutura padrão de página individual

```tsx
// app/(marketing)/profissionais/vanessa-albuquerque/page.tsx
export default function VanessaPage() {
  return (
    <>
      {/* 01 · Hero editorial — foto grande + nome */}
      <ProfessionalHero
        name="Vanessa Albuquerque"
        title="Hipnoterapeuta"
        subtitle="14 anos de prática"
        imageSrc="/images/profissionais/vanessa-editorial-01.webp"
        crp="CRP XX/XXXXX"  // TODO: confirmar com a sócia
      />

      {/* 02 · Bio em primeira pessoa OU terceira (decidir com cada uma) */}
      <ProfessionalBio>
        {/* texto longo, editorial, autoral */}
      </ProfessionalBio>

      {/* 03 · Formação e abordagem */}
      <ProfessionalFormation
        formation={[
          { year: '20XX', degree: 'Graduação em Psicologia · Universidade XX' },
          { year: '20XX', degree: 'Especialização em Hipnoterapia Clínica' },
          // TODO: confirmar com a Vanessa
        ]}
        approach="..."
      />

      {/* 04 · Em que trabalha (cards das verticais que conduz) */}
      <ProfessionalVerticals
        items={[
          { name: 'Método V', href: ROUTES.metodoV, description: '...' },
          { name: 'Hipnoterapia clínica', href: ROUTES.hipnoterapia, description: '...' },
        ]}
      />

      {/* 05 · Citação-marca */}
      <Quote author="Vanessa Albuquerque">
        Não trato sintomas. Vou à raiz.
      </Quote>

      {/* 06 · CTA */}
      <ProfessionalCTA professional="vanessa" />
    </>
  );
}
```

---

## Componentes a criar

`components/sections/professional/`:
- `ProfessionalHero.tsx` — foto grande em layout editorial (lado a lado com texto principal)
- `ProfessionalBio.tsx` — texto longo formatado em prose
- `ProfessionalFormation.tsx` — timeline ou lista clean
- `ProfessionalVerticals.tsx` — cards que linkam para as verticais que ela conduz
- `ProfessionalCTA.tsx` — CTA contextualizado

---

## Hero editorial — referências visuais

A foto da profissional não é foto de currículo. É editorial:
- Lateral, contemplativa, possivelmente em ambiente da clínica
- Olhar fora de câmera é aceitável
- Iluminação natural quente
- Composição com espaço em branco
- **Jamais foto de jaleco sorrindo para a câmera**

Como ainda não há ensaio profissional, **usar placeholder em `sand`** com texto "Ensaio editorial — em produção" até a sessão de fotos acontecer.

---

## Conteúdo específico Vanessa

### Bio (rascunho — confirmar com ela)

**14 anos. Hipnoterapeuta.**

> "Comecei minha prática clínica em [ANO]. Por muito tempo me identifiquei como psicóloga que também usava hipnoterapia. Hoje me apresento de outro lugar: sou hipnoterapeuta — e a hipnoterapia clínica não é uma técnica entre outras no meu trabalho, é o método pelo qual escolho operar.
>
> Trabalho com um público específico: empresários e empresárias que já conquistaram muito e sentem algo invisível impedindo o próximo passo. Chamo isso de trava emocional. E o trabalho que faço, em encontros estruturados, é justamente isso: encontrar a trava, ir até a raiz, elaborar um plano exclusivo, e acompanhar de forma integral — não em anos de terapia, mas em encontros.
>
> Atendo presencialmente na VCare Essence, no RioMar Trade Center, e online com a mesma profundidade clínica."

### Verticais que conduz
- Método V (link)
- Hipnoterapia clínica avulsa (link)

### Frase-marca destacada
"Não trato sintomas. Vou à raiz."

---

## Conteúdo específico Camila

### Bio (rascunho — confirmar com ela)

**10 anos. Psicóloga.**

> "Minha prática se construiu na interseção entre ciência e cuidado. Sou especialista em Análise do Comportamento, Psicomotricidade Relacional, Reabilitação Neuropsicológica, TDAH e Terapêutica Sistêmica — formações que, juntas, me dão um vocabulário amplo para entender cada paciente de um lugar diferente.
>
> Atendo adolescentes e adultos. Com adolescentes, conduzo um programa estruturado próprio — o Método [a definir] — voltado a quem precisa melhorar rendimento escolar, se preparar para o vestibular e organizar o emocional, com acompanhamento familiar. Com adultos, faço psicoterapia tradicional, teste vocacional para reposicionamento de carreira, e orientação familiar.
>
> Também sou mentora e docente.
>
> Atendo presencialmente na VCare Essence, no RioMar Trade Center, e online."

### Verticais que conduz
- Método C (link)
- Psicoterapia tradicional (link)
- Teste vocacional (link)
- Orientação familiar (link)

### Frase-marca destacada
"Trato a falta de resultado como falta de motivação — não como preguiça."

---

## `/profissionais/convidados`

Por ora, página simples:
- Hero: "Profissionais em residência da casa"
- Texto explicando o conceito de curadoria (não é locação, é convite)
- Lista vazia/placeholder: "Em breve: novos profissionais convidados para integrar a casa. Aguarde."
- Link cruzado: "Você é profissional e quer ser convidado(a)? Conheça nosso programa de residência →" (linka para `/sou-profissional/consultorio-residente`)

---

## SEO

### Metadata Vanessa
```ts
export const metadata: Metadata = {
  title: 'Vanessa Albuquerque — Hipnoterapeuta',
  description: 'Hipnoterapeuta com 14 anos de prática. Conduz o Método V para destravar empresários, na VCare Essence (RioMar Trade Center, Recife) e online.',
  alternates: { canonical: '/profissionais/vanessa-albuquerque' },
};
```

### Schema `Person`
```ts
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vanessa Albuquerque',
  jobTitle: 'Hipnoterapeuta',
  // honorificPrefix: ... se aplicável
  worksFor: {
    '@type': 'MedicalClinic',
    name: 'VCare Essence',
    url: 'https://vcareessence.com.br',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Conselho Regional de Psicologia',
    identifier: 'CRP XX/XXXXX',  // TODO
  },
  url: 'https://vcareessence.com.br/profissionais/vanessa-albuquerque',
  // sameAs: [instagram, etc.]
};
```

---

## Critérios de aceitação

- [ ] `/profissionais` hub funcionando com 3 cards
- [ ] `/profissionais/vanessa-albuquerque` completa
- [ ] `/profissionais/camila-clemente` completa
- [ ] `/profissionais/convidados` placeholder
- [ ] Componentes reutilizáveis em `components/sections/professional/`
- [ ] Schema `Person` JSON-LD em cada página individual
- [ ] CRPs visíveis (placeholder marcado como TODO)
- [ ] Imagens em placeholder até ensaio editorial ficar pronto
- [ ] Mobile responsivo
- [ ] Lighthouse ≥ 90

---

## Próximo passo
Sprint 06 — A Casa (conceito, sensorial, endereço, tour).
