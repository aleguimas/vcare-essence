import type { Metadata } from 'next';
import { VerticalHero } from '@/components/sections/vertical/VerticalHero';
import { VerticalDefinition } from '@/components/sections/vertical/VerticalDefinition';
import { VerticalForWho } from '@/components/sections/vertical/VerticalForWho';
import { VerticalHowItWorks } from '@/components/sections/vertical/VerticalHowItWorks';
import { VerticalProfessionals } from '@/components/sections/vertical/VerticalProfessionals';
import { VerticalCTA } from '@/components/sections/vertical/VerticalCTA';
import { MethodFAQ } from '@/components/sections/method/MethodFAQ';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMedicalTherapySchema, buildBreadcrumbSchema } from '@/lib/schemas';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Psicoterapia · VCare Essence',
  description:
    'Psicoterapia clínica para adolescentes e adultos em Recife e online. Abordagens baseadas em evidências: TCC e Análise do Comportamento. Atendimento no RioMar Trade Center.',
  alternates: { canonical: ROUTES.psicoterapia },
};

const schema = [
  buildMedicalTherapySchema({
    name: 'Psicoterapia',
    description:
      'Psicoterapia clínica para adolescentes e adultos, com base em Análise do Comportamento e Terapia Cognitivo-Comportamental.',
    path: ROUTES.psicoterapia,
  }),
  buildBreadcrumbSchema([
    { name: 'Início', path: ROUTES.home },
    { name: 'Cuidados', path: ROUTES.cuidados },
    { name: 'Psicoterapia', path: ROUTES.psicoterapia },
  ]),
];

const PROFESSIONALS = [
  {
    name: 'Camila Clemente',
    role: 'Psicóloga',
    crp: 'CRP 02/19121',
    href: ROUTES.camila,
    imgSrc: '/images/profissionais/camila-clemente-vcare-essence-01.webp',
  },
];

const HOW_ITEMS = [
  { label: 'Frequência', value: 'Semanal ou quinzenal' },
  { label: 'Formato', value: 'Presencial (Recife) ou online' },
  { label: 'Duração da sessão', value: '50 minutos' },
  { label: 'Primeira sessão', value: 'Avaliação e alinhamento de objetivos' },
];

const FAQ = [
  {
    question: 'Qual a diferença entre psicoterapia e coaching?',
    answer:
      'Psicoterapia é realizada por psicólogo(a) com formação clínica regulamentada pelo CFP. Trabalha aspectos emocionais, comportamentais e relacionais com base em método científico. Coaching é uma prática de desenvolvimento pessoal sem regulamentação clínica. Para questões de saúde mental, ansiedade, comportamento, processo emocional, a psicoterapia é o caminho adequado.',
  },
  {
    question: 'Quais abordagens são utilizadas?',
    answer:
      'Camila Clemente trabalha com Análise do Comportamento (AC) e Terapia Cognitivo-Comportamental (TCC), com especialização em Psicomotricidade Relacional. Para adolescentes, o atendimento pode integrar elementos do Método Elo quando há necessidade de estruturação mais ampla. Profissionais convidados da clínica trazem outras abordagens, a definir conforme disponibilidade.',
  },
  {
    question: 'Atende adolescentes e adultos?',
    answer:
      'Sim. Camila atende adolescentes (especialmente em fases de transição, pré-vestibular, mudanças de comportamento) e adultos. Para adolescentes que precisam de suporte mais estruturado e acompanhamento familiar, o Método Elo pode ser mais indicado, o que é avaliado na primeira sessão.',
  },
  {
    question: 'Funciona online com a mesma qualidade?',
    answer:
      'Sim. A psicoterapia online funciona bem para a maioria dos casos quando há espaço adequado e boa conexão. Alguns casos clínicos pedem presencial, isso é avaliado individualmente. A plataforma utilizada segue protocolos de segurança e LGPD.',
  },
  {
    question: 'Como é a primeira sessão?',
    answer:
      'A primeira sessão é de escuta e avaliação. A partir do que for trazido, construímos um entendimento do contexto, dos objetivos e do formato mais adequado. Não há compromisso de continuidade antes desse alinhamento inicial.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'O valor das sessões não está publicado, varia conforme formato (individual, familiar) e periodicidade. Entre em contato para informações sobre investimento.',
  },
];

export default function PsicoterapiaPage() {
  return (
    <>
      <JsonLd data={schema} />
      <VerticalHero
        eyebrow="Cuidados · Psicoterapia"
        headline="Psicoterapia, no ritmo que seu processo precisa."
        subtitle="Atendimento clínico individual baseado em evidências. Para quem quer entender o que está acontecendo por dentro, e encontrar um caminho para atravessar."
      />

      <VerticalDefinition eyebrow="O que é" headline="Psicoterapia não é fraqueza. É método.">
        <p>
          Psicoterapia é o trabalho clínico com um(a) psicólogo(a) para entender e transformar
          padrões de comportamento, pensamento e emoção que estão causando sofrimento ou
          impedindo o desenvolvimento. É diferente de desabafar com um amigo, de autoajuda, de
          coaching, e de tomar medicação.
        </p>
        <p>
          É um processo estruturado, com método, baseado em abordagens reconhecidas pela
          literatura científica. A frequência, o formato e o tempo de duração dependem do que
          está sendo trabalhado e de como cada pessoa responde ao processo.
        </p>
        <p>
          Na VCare Essence, a psicoterapia acontece em um ambiente projetado para facilitar o
          trabalho interno: luz quente, silêncio, materiais naturais. O espaço prepara o corpo
          antes que qualquer palavra seja dita.
        </p>
      </VerticalDefinition>

      <VerticalForWho
        headline="Para quem a psicoterapia é indicada"
        intro="Não existe perfil único. Psicoterapia é para quem percebe que algo interno está travando, seja em relações, no trabalho, no corpo ou na forma como enfrenta decisões."
        indications={[
          'Ansiedade persistente que interfere no dia a dia',
          'Dificuldade para manter relações ou comunicar-se de forma saudável',
          'Sensação de estar preso em padrões que se repetem',
          'Processo de luto, separação ou transição de vida',
          'Baixo autoestima ou dificuldade de autoconhecimento',
          'Adolescentes com quedas de rendimento, mudanças de comportamento ou conflitos familiares',
          'Adultos que querem trabalhar comportamentos e crenças que limitam o desenvolvimento',
        ]}
        tone="sand"
      />

      {/* Abordagens */}
      <Section tone="cream">
        <Container narrow>
          <Eyebrow>Abordagens disponíveis</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4">
            Ciência como base. Processo como caminho.
          </Heading>
          <div className="mt-8 space-y-6">
            {[
              {
                name: 'Análise do Comportamento (AC)',
                desc: 'Abordagem científica que investiga a relação entre comportamento, ambiente e história de vida. Trabalha padrões comportamentais com base em dados, não em interpretações. Camila Clemente é especialista nessa abordagem.',
              },
              {
                name: 'Terapia Cognitivo-Comportamental (TCC)',
                desc: 'Uma das abordagens mais estudadas na literatura científica. Trabalha a relação entre pensamentos, emoções e comportamentos. Eficaz para ansiedade, depressão, fobias e outros quadros.',
              },
              {
                name: 'Profissionais convidados',
                desc: 'A clínica recebe psicólogos(as) com outras abordagens sob curadoria. A diversidade metodológica amplia as possibilidades de atendimento.',
              },
            ].map((a) => (
              <div key={a.name} className="border-b border-line pb-6 last:border-0">
                <p className="font-sans font-medium text-moss">{a.name}</p>
                <p className="mt-2 text-body text-ink/70 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <VerticalHowItWorks items={HOW_ITEMS} tone="sand">
        <p>
          A psicoterapia é um processo, não um evento. A frequência mais comum é semanal, o
          que dá continuidade ao trabalho entre as sessões. Para alguns casos, quinzenal é
          adequado. Isso é definido na primeira sessão.
        </p>
        <p>
          A primeira sessão é de avaliação e alinhamento: entender o contexto, o que está
          trazendo dificuldade e o que se espera do processo. Não há compromisso antes desse
          encontro inicial.
        </p>
      </VerticalHowItWorks>

      <VerticalProfessionals
        professionals={PROFESSIONALS}
        note="Profissionais convidados são incorporados à clínica sob curadoria. Consulte disponibilidade."
        tone="cream"
      />

      <MethodFAQ questions={FAQ} tone="sand" />

      <VerticalCTA
        headline="Dar o primeiro passo é o passo mais difícil. O resto acontece na sessão."
        subtext="Atendimento presencial em Recife ou online, com a mesma profundidade."
      />
    </>
  );
}
