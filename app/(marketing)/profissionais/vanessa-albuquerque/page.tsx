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
  title: 'Vanessa Albuquerque, Hipnoterapeuta · VCare Essence',
  description:
    'Hipnoterapeuta com 15 anos de prática. Conduz o MEP para destravar empresários emocionalmente, na VCare Essence (RioMar Trade Center, Recife) e online.',
  alternates: { canonical: ROUTES.vanessa },
};

const FORMATION = [
  { year: '2011', degree: 'Graduação em Psicologia', institution: 'FAFIRE / Recife' },
  { year: '2015', degree: 'Pós-Graduação em Psicologia e Antropologia', institution: 'UFPE / Recife' },
  { year: '2021', degree: 'Formação em Hipnose Profissional', institution: 'IACHC / Recife' },
  { year: '2022', degree: 'Formação em Hipnose Clássica', institution: 'Omni Hypnosis Training Center / São Paulo' },
  { year: '2023', degree: 'Formação Internacional em Hipnose Avançada', institution: 'Omni Hypnosis Training Center / São Paulo' },
  { year: '2023', degree: 'Formação em OMNI Legacy: Desenvolvimento de Excelência, Liderança e Legado na Hipnoterapia individual e em grupo', institution: 'Omni Hypnosis Training Center / São Paulo' },
  { year: '2023', degree: 'Formação em Realidade Virtual aplicada à Hipnoterapia', institution: 'Cortex Academy / Barueri' },
  { year: '2024', degree: '2ª Formação em OMNI Legacy: Desenvolvimento de Excelência, Liderança e Legado na Hipnoterapia individual e em grupo', institution: 'Omni Hypnosis Training Center / São Paulo' },
  { year: '2024', degree: 'Formação em Intervenção Hipnótica para Casos de Abuso e Trauma', institution: 'Omni Hypnosis Training Center / São Paulo' },
  { year: '2024', degree: 'Treinamento Avançado de Excelência e Aprimoramento em Hipnoterapia', institution: 'Omni Hypnosis Training Center / São Paulo' },
  { year: '2025', degree: 'Formação em HypnoBusiness para Empresas e Equipes', institution: 'Omni Hypnosis Training Center / São Paulo' },
];

const VERTICALS = [
  {
    name: '1º PASSO, MEP (Mapeamento Emocional Profundo)',
    description:
      'O MEP é uma investigação estratégica que identifica a raiz emocional dos sintomas, dos padrões repetitivos e dos bloqueios inconscientes que mantêm o problema ativo. Objetivo: gerar clareza, revelar a causa raiz e construir um direcionamento assertivo para o tratamento.',
  },
  {
    name: '2º PASSO, Plano de tratamento exclusivo e personalizado',
    description:
      'Cada pessoa carrega uma história única. Por isso, cada tratamento também deve ser único. Após o MEP, é desenvolvido um plano terapêutico exclusivo, construído com base na sua história de vida, nos seus objetivos e nas necessidades identificadas durante a investigação. Esse plano integra Hipnoterapia, Psicologia, Neurociência e Reprogramação Mental para definir os objetivos terapêuticos, a quantidade de encontros necessários e a estratégia mais adequada. Objetivo: garantir que o tratamento atue diretamente na causa raiz do problema, promovendo mudanças profundas, resultados mais eficazes e uma transformação sólida.',
  },
];

const schema = [
  buildPersonSchema({
    name: 'Vanessa Albuquerque',
    jobTitle: 'Hipnoterapeuta',
    description:
      'Hipnoterapeuta com 15 anos de prática, especializada em destravar empresários(as) através de método autoral.',
    path: ROUTES.vanessa,
    image: '/images/profissionais/vanessa-albuquerque-vcare-essence-02.webp',
    crp: 'CRP 02/15875',
  }),
  buildBreadcrumbSchema([
    { name: 'Início', path: ROUTES.home },
    { name: 'Profissionais', path: ROUTES.profissionais },
    { name: 'Vanessa Albuquerque', path: ROUTES.vanessa },
  ]),
];

export default function VanessaPage() {
  return (
    <>
      <JsonLd data={schema} />

      <ProfessionalHero
        name="Vanessa Albuquerque"
        title="Hipnoterapeuta"
        subtitle="15 anos de prática clínica"
        crp="CRP 02/15875"
        cfp="CFP 013/2000"
        imageSrc="/images/profissionais/vanessa-albuquerque-vcare-essence-02.webp"
        imageAlt="Vanessa Albuquerque, hipnoterapeuta da VCare Essence, ensaio editorial"
      />

      <ProfessionalBio headline="Hipnoterapeuta por propósito. Psicóloga por paixão.">
        <p>
          Hipnoterapeuta clínica e Psicóloga há 15 anos. Durante muito tempo, utilizei a
          hipnoterapia como uma ferramenta complementar. Hoje, ela é o centro da minha atuação.
        </p>
        <p>
          Foi na hipnoterapia que encontrei a forma mais direta e eficiente de acessar a origem
          emocional de sintomas, bloqueios e padrões repetitivos. Por isso, não trabalho apenas
          com o que a pessoa sente. Trabalho com o que sustenta o que ela sente.
        </p>
        <p>
          Atendo principalmente empresários e empresárias que já conquistaram muito, mas percebem
          algo invisível impedindo o próximo passo. Chamo isso de trava emocional. Não é falta de
          capacidade ou informação. É um padrão inconsciente que precisa ser identificado e
          transformado.
        </p>
        <p>
          Meu trabalho acontece em encontros estruturados, não em processos indefinidos. Cada caso
          começa com uma investigação aprofundada que direciona um plano terapêutico exclusivo. Não
          existe fórmula pronta. Existe método.
        </p>
        <p>
          Atendo presencialmente na VCare Essence, no RioMar Trade Center, em Recife, e também
          online, com a mesma eficácia do presencial.
        </p>
      </ProfessionalBio>

      <ProfessionalFormation
        items={FORMATION}
        approach="Trabalho com investigação, estratégia e personalização. Cada caso começa com uma análise aprofundada para identificar a origem emocional do problema. A partir dessa compreensão, construo um plano terapêutico exclusivo, utilizando a hipnoterapia clínica como principal ferramenta de acesso ao inconsciente e de transformação dos padrões que sustentam sintomas, bloqueios e limitações."
        tone="sand"
      />

      <ProfessionalVerticals
        items={VERTICALS}
        tone="cream"
        heading="Atuação eficaz e focada na raiz do problema em dois passos estratégicos:"
      />

      <Section tone="sand" size="sm">
        <Container narrow>
          <Quote author="Vanessa Albuquerque">
            Acesso a raiz e destravo o que te impede de avançar com Método Exclusivo e resultado imediato.
          </Quote>
        </Container>
      </Section>

      <ProfessionalCTA
        headline="O primeiro encontro já é uma consulta de diagnóstico clínico, dedicada a compreender seu caso em profundidade e orientar com precisão o próximo passo terapêutico."
        ctaLabel="Agendar atendimento"
      />
    </>
  );
}
