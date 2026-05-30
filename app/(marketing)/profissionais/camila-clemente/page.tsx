import type { Metadata } from 'next';
import { ProfessionalHero } from '@/components/sections/professional/ProfessionalHero';
import { ProfessionalBio } from '@/components/sections/professional/ProfessionalBio';
import { ProfessionalFormation } from '@/components/sections/professional/ProfessionalFormation';
import { ProfessionalVerticals } from '@/components/sections/professional/ProfessionalVerticals';
import { ProfessionalCTA } from '@/components/sections/professional/ProfessionalCTA';
import { Quote } from '@/components/editorial/Quote';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildPersonSchema, buildBreadcrumbSchema } from '@/lib/schemas';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Camila Clemente — Psicóloga · VCare Essence',
  description:
    'Psicóloga com 10 anos de prática, especialista em Análise do Comportamento, TDAH e Terapêutica Sistêmica. Conduz o Método C para adolescentes na VCare Essence, Recife.',
  alternates: { canonical: ROUTES.camila },
};

// TODO: formação a confirmar com Camila Clemente
const FORMATION = [
  { year: '20XX', degree: 'Graduação em Psicologia', institution: 'Instituição a confirmar' },
  { year: '20XX', degree: 'Especialização em Análise do Comportamento', institution: 'Instituição a confirmar' },
  { year: '20XX', degree: 'Especialização em Psicomotricidade Relacional', institution: 'Instituição a confirmar' },
  { year: '20XX', degree: 'Formação em Reabilitação Neuropsicológica', institution: 'Instituição a confirmar' },
  { year: '20XX', degree: 'Especialização em Terapêutica Sistêmica', institution: 'Instituição a confirmar' },
  { year: '20XX', degree: '10 anos de prática clínica e docência', institution: '' },
];

const VERTICALS = [
  {
    name: 'Método C',
    href: ROUTES.metodoC,
    description: 'Programa estruturado para adolescentes em pré-vestibular — rendimento, organização emocional e acompanhamento familiar.',
  },
  {
    name: 'Psicoterapia',
    href: ROUTES.psicoterapia,
    description: 'Atendimento clínico individual para adolescentes e adultos com base em AC e TCC.',
  },
  {
    name: 'Teste Vocacional',
    href: ROUTES.testeVocacional,
    description: 'Para adolescentes em ENEM/vestibular e adultos em reposicionamento de carreira.',
  },
  {
    name: 'Orientação Familiar',
    href: ROUTES.orientacaoFamiliar,
    description: 'Suporte para famílias com base em Terapêutica Sistêmica — conflitos, pós-diagnóstico, dinâmica de cuidado.',
  },
];

const schema = [
  buildPersonSchema({
    name: 'Camila Clemente',
    jobTitle: 'Psicóloga',
    description:
      'Psicóloga com 10 anos de prática, especialista em Análise do Comportamento, Psicomotricidade Relacional, TDAH e Terapêutica Sistêmica.',
    path: ROUTES.camila,
    image: '/images/profissionais/camila-editorial-01.webp',
    crp: 'CRP XX/XXXXX', // TODO: aguardar dados das sócias
  }),
  buildBreadcrumbSchema([
    { name: 'Início', path: ROUTES.home },
    { name: 'Profissionais', path: ROUTES.profissionais },
    { name: 'Camila Clemente', path: ROUTES.camila },
  ]),
];

export default function CamilaPage() {
  return (
    <>
      <JsonLd data={schema} />

      <ProfessionalHero
        name="Camila Clemente"
        title="Psicóloga"
        subtitle="10 anos de prática"
        crp="CRP XX/XXXXX" // TODO: aguardar dados das sócias
        imageSrc="/images/profissionais/camila-editorial-01.webp"
        imageAlt="Camila Clemente, psicóloga da VCare Essence — ensaio editorial"
      />

      {/* Bio — rascunho a confirmar com Camila */}
      <ProfessionalBio headline="Dez anos construindo um vocabulário para o que não se vê.">
        <p>
          Minha prática se construiu na interseção entre ciência e cuidado. Sou especialista em
          Análise do Comportamento, Psicomotricidade Relacional, Reabilitação Neuropsicológica,
          TDAH e Terapêutica Sistêmica — formações que, juntas, me dão um vocabulário amplo para
          entender cada paciente de um lugar diferente.
        </p>
        <p>
          Atendo adolescentes e adultos. Com adolescentes, conduzo um programa estruturado próprio
          — voltado a quem precisa melhorar rendimento escolar, se preparar para o vestibular e
          organizar o emocional, com acompanhamento familiar. É um trabalho que vai além da
          psicoterapia individual: envolve a família, a rotina, o comportamento de estudo e o
          emocional em conjunto.
        </p>
        <p>
          Com adultos, faço psicoterapia tradicional com base em Análise do Comportamento e
          Terapia Cognitivo-Comportamental, teste vocacional para reposicionamento de carreira e
          orientação familiar com base na Terapêutica Sistêmica.
        </p>
        <p>
          Também sou mentora e docente — porque acredito que compartilhar método é tão
          importante quanto praticá-lo.
        </p>
        <p>
          Atendo presencialmente na VCare Essence, no RioMar Trade Center, em Recife, e online.
        </p>
      </ProfessionalBio>

      <ProfessionalFormation
        items={FORMATION}
        approach="Análise do Comportamento como base científica. Terapêutica Sistêmica para trabalhos relacionais e familiares. Psicomotricidade Relacional e Reabilitação Neuropsicológica como ferramentas complementares, especialmente para adolescentes com TDAH e dificuldades de aprendizagem."
        tone="sand"
      />

      <ProfessionalVerticals items={VERTICALS} tone="cream" />

      <Section tone="sand" size="sm">
        <Container narrow>
          <Quote author="Camila Clemente">
            Trato a falta de resultado como falta de motivação — não como preguiça.
          </Quote>
        </Container>
      </Section>

      <ProfessionalCTA
        headline="O primeiro passo é uma conversa. Sem pressão, sem compromisso."
        subtext="Presencial em Recife ou online."
        ctaLabel="Agendar"
      />
    </>
  );
}
