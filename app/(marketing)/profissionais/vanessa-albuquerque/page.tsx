import type { Metadata } from 'next';
import { ProfessionalHero } from '@/components/sections/professional/ProfessionalHero';
import { ProfessionalBio } from '@/components/sections/professional/ProfessionalBio';
import { ProfessionalFormation } from '@/components/sections/professional/ProfessionalFormation';
import { ProfessionalVerticals } from '@/components/sections/professional/ProfessionalVerticals';
import { ProfessionalCTA } from '@/components/sections/professional/ProfessionalCTA';
import { Quote } from '@/components/editorial/Quote';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { ROUTES, SITE } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Vanessa Albuquerque — Hipnoterapeuta · VCare Essence',
  description:
    'Hipnoterapeuta com 14 anos de prática. Conduz o Método V para destravar empresários emocionalmente, na VCare Essence (RioMar Trade Center, Recife) e online.',
  alternates: { canonical: ROUTES.vanessa },
};

// TODO: formação a confirmar com Vanessa Albuquerque
const FORMATION = [
  { year: '20XX', degree: 'Graduação em Psicologia', institution: 'Instituição a confirmar' },
  { year: '20XX', degree: 'Especialização em Hipnoterapia Clínica', institution: 'Instituição a confirmar' },
  { year: '20XX', degree: '14 anos de prática clínica contínua em hipnoterapia', institution: '' },
];

const VERTICALS = [
  {
    name: 'Método V',
    href: ROUTES.metodoV,
    description: 'Programa autoral para empresários com trava emocional. Encontros estruturados, hipnoterapia clínica como método central.',
  },
  {
    name: 'Hipnoterapia Clínica',
    href: ROUTES.hipnoterapia,
    description: 'Hipnoterapia avulsa para questões pontuais — ansiedade, fobias, hábitos, bloqueios emocionais específicos.',
  },
];

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vanessa Albuquerque',
  jobTitle: 'Hipnoterapeuta',
  worksFor: {
    '@type': 'MedicalClinic',
    name: SITE.name,
    url: SITE.url,
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Conselho Regional de Psicologia',
    identifier: 'CRP XX/XXXXX', // TODO: aguardar dados das sócias
  },
  url: `${SITE.url}${ROUTES.vanessa}`,
};

export default function VanessaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <ProfessionalHero
        name="Vanessa Albuquerque"
        title="Hipnoterapeuta"
        subtitle="14 anos de prática"
        crp="CRP XX/XXXXX" // TODO: aguardar dados das sócias
        imageSrc="/images/profissionais/vanessa-editorial-01.webp"
        imageAlt="Vanessa Albuquerque, hipnoterapeuta da VCare Essence — ensaio editorial"
      />

      {/* Bio — rascunho a confirmar com Vanessa */}
      <ProfessionalBio headline="Hipnoterapeuta. Por escolha, não por acidente.">
        <p>
          Comecei minha prática clínica há 14 anos. Por muito tempo me apresentei como
          psicóloga que também usava hipnoterapia. Hoje me apresento de outro lugar: sou
          hipnoterapeuta — e a hipnoterapia clínica não é uma técnica entre outras no meu
          trabalho, é o método pelo qual escolho operar.
        </p>
        <p>
          Trabalho com um público específico: empresários e empresárias que já conquistaram muito
          e sentem algo invisível impedindo o próximo passo. Chamo isso de trava emocional. Não
          é fraqueza. Não é falta de informação. É um padrão inconsciente que o pensamento
          consciente não alcança — e que a hipnoterapia clínica foi feita para acessar.
        </p>
        <p>
          O trabalho que faço é em encontros estruturados, não em anos de sessões abertas. Cada
          processo começa com um diagnóstico profundo. O que aparece nesse diagnóstico determina
          o plano — e o plano é exclusivo para cada pessoa. Não existe uma fórmula, existe um
          método.
        </p>
        <p>
          Atendo presencialmente na VCare Essence, no RioMar Trade Center, em Recife, e online
          com a mesma profundidade clínica.
        </p>
      </ProfessionalBio>

      <ProfessionalFormation
        items={FORMATION}
        approach="Hipnoterapia clínica como método central. Diagnóstico profundo, acesso ao inconsciente, plano exclusivo por caso. Não trabalho com técnica única — trabalho com o que cada caso pede, tendo a hipnoterapia como ferramenta principal de acesso."
        tone="sand"
      />

      <ProfessionalVerticals items={VERTICALS} tone="cream" />

      <Section tone="sand" size="sm">
        <Container narrow>
          <Quote author="Vanessa Albuquerque">
            Não trato sintomas. Vou à raiz.
          </Quote>
        </Container>
      </Section>

      <ProfessionalCTA
        headline="Um primeiro encontro é uma conversa de diagnóstico — não compromisso."
        subtext="A partir dele, decidimos juntos se há fit para um plano."
        ctaLabel="Agendar primeiro encontro"
      />
    </>
  );
}
