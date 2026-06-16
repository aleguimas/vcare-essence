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
  title: 'Camila Clemente, Psicóloga · VCare Essence',
  description:
    'Psicóloga com 10 anos de prática, especialista em Análise do Comportamento, TDAH e Terapêutica Sistêmica. Conduz o Método Elo para adolescentes na VCare Essence, Recife.',
  alternates: { canonical: ROUTES.camila },
};

const FORMATION = [
  { year: '2016', degree: 'Graduação em Psicologia', institution: 'Universidade Federal de Pernambuco' },
  { year: '2016', degree: 'Início da prática clínica', institution: '' },
  { year: '2018', degree: 'Especialização em Psicomotricidade', institution: 'Ícone Desenvolvimento Humano' },
  { year: '2019', degree: 'Reabilitação Neuropsicológica', institution: 'Instituto de Neuropsicologia Aplicada' },
  { year: '2023', degree: 'Terapia Sistêmica', institution: 'Instituto Constelar' },
  { year: '2025', degree: 'Especialização em Análise do Comportamento', institution: 'Unyleya' },
];

const VERTICALS = [
  {
    name: 'Método Elo',
    href: ROUTES.metodoElo,
    description: 'Programa estruturado para adolescentes em pré-vestibular, rendimento, organização emocional e acompanhamento familiar.',
  },
  {
    name: 'Psicoterapia',
    href: ROUTES.psicoterapia,
    description: 'Atendimento clínico individual para adolescentes e adultos com base em Análise do Comportamento.',
  },
  {
    name: 'Teste Vocacional',
    href: ROUTES.testeVocacional,
    description: 'Para adolescentes em ENEM/vestibular e adultos em reposicionamento de carreira.',
  },
  {
    name: 'Orientação Familiar',
    href: ROUTES.orientacaoFamiliar,
    description: 'Suporte para famílias com base em Terapêutica Sistêmica, conflitos, pós-diagnóstico, dinâmica de cuidado.',
  },
];

const schema = [
  buildPersonSchema({
    name: 'Camila Clemente',
    jobTitle: 'Psicóloga',
    description:
      'Psicóloga com 10 anos de prática, especialista em Análise do Comportamento, Psicomotricidade Relacional, TDAH e Terapêutica Sistêmica.',
    path: ROUTES.camila,
    image: '/images/profissionais/camila-clemente-vcare-essence-02.webp',
    crp: 'CRP 02/19121',
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
        crp="CRP 02/19121"
        imageSrc="/images/profissionais/camila-clemente-vcare-essence-02.webp"
        imageAlt="Camila Clemente, psicóloga da VCare Essence, ensaio editorial"
      />

      {/* Bio, rascunho a confirmar com Camila */}
      <ProfessionalBio headline="Dez anos construindo um vocabulário para o que não se vê.">
        <p>
          Minha prática se construiu na interseção entre ciência e cuidado. Sou especialista em
          Análise do Comportamento, Psicomotricidade Relacional, Reabilitação Neuropsicológica,
          TDAH e Terapêutica Sistêmica, formações que, juntas, me dão um vocabulário amplo para
          entender cada paciente de um lugar diferente.
        </p>
        <p>
          Atendo adolescentes e adultos. Com adolescentes, conduzo um programa estruturado próprio,
          voltado a quem precisa melhorar rendimento escolar, se preparar para o vestibular e
          organizar o emocional, com acompanhamento familiar. É um trabalho que vai além da
          psicoterapia individual: envolve a família, a rotina, o comportamento de estudo e o
          emocional em conjunto.
        </p>
        <p>
          Com adultos, faço psicoterapia tradicional com base em Análise do Comportamento, teste
          vocacional para reposicionamento de carreira e orientação familiar com base na
          Terapêutica Sistêmica.
        </p>
        <p>
          Também sou mentora e docente, porque acredito que compartilhar método é tão
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
            Trato a falta de resultado como falta de motivação, não como preguiça.
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
