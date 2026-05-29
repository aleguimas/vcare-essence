import type { Metadata } from 'next';
import { VerticalHero } from '@/components/sections/vertical/VerticalHero';
import { VerticalDefinition } from '@/components/sections/vertical/VerticalDefinition';
import { VerticalHowItWorks } from '@/components/sections/vertical/VerticalHowItWorks';
import { VerticalProfessionals } from '@/components/sections/vertical/VerticalProfessionals';
import { VerticalCTA } from '@/components/sections/vertical/VerticalCTA';
import { MethodFAQ } from '@/components/sections/method/MethodFAQ';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Orientação Familiar · VCare Essence',
  description:
    'Orientação familiar em Recife baseada em Terapêutica Sistêmica. Para famílias com adolescente em conflito, pós-diagnóstico de TDAH e cuidadores. Camila Clemente, psicóloga.',
  alternates: { canonical: ROUTES.orientacaoFamiliar },
};

const PROFESSIONALS = [
  {
    name: 'Camila Clemente',
    role: 'Psicóloga',
    crp: 'CRP XX/XXXXX', // TODO: aguardar dados das sócias
    href: ROUTES.camila,
  },
];

const SCENARIOS = [
  {
    title: 'Famílias com adolescente em conflito',
    description:
      'Quando a comunicação entre pais e filho está quebrada — e cada conversa sobre escola, comportamento ou futuro vira confronto. O trabalho sistêmico ajuda a identificar os padrões de relação que estão alimentando o conflito e a reconstruir a comunicação de forma que cada parte se sinta ouvida.',
    context: 'Conflito de comunicação · Comportamento · Adolescência',
  },
  {
    title: 'Pós-diagnóstico de TDAH ou outra condição',
    description:
      'Quando um diagnóstico chega — de TDAH, TEA, ansiedade severa ou outra condição — a família precisa de suporte para entender o que isso significa na prática: como adaptar expectativas, como comunicar para a escola, como a dinâmica em casa precisa mudar. Camila tem formação específica em TDAH e reabilitação neuropsicológica.',
    context: 'TDAH · TEA · Diagnóstico recente · Expectativas',
  },
  {
    title: 'Cuidadores de familiares em adoecimento',
    description:
      'Cuidar de alguém que adoece — seja por saúde mental, demência, dependência ou condição crônica — é exaustivo de formas que raramente são reconhecidas. A orientação familiar aqui oferece suporte ao cuidador, ferramentas para lidar com a dinâmica familiar que se reorganiza em torno do adoecimento, e espaço para o que não se consegue dizer em nenhum outro lugar.',
    context: 'Cuidador · Adoecimento crônico · Suporte emocional',
  },
] as const;

const FAQ = [
  {
    question: 'O que é Terapêutica Sistêmica?',
    answer:
      'Terapêutica Sistêmica é uma abordagem clínica que entende o indivíduo como parte de um sistema — família, escola, trabalho. Em vez de tratar apenas o "problema" de uma pessoa isolada, trabalha com as relações e padrões que o sustentam. É especialmente eficaz para conflitos familiares, comunicação entre gerações e dinâmicas relacionais.',
  },
  {
    question: 'Todos da família precisam comparecer?',
    answer:
      'Não necessariamente. O processo é adaptado conforme o caso. Em alguns contextos, começa com os pais e evolui para sessões que incluem o filho. Em outros, o trabalho é exclusivamente com os cuidadores. Isso é definido na avaliação inicial.',
  },
  {
    question: 'Pode ajudar com adolescentes com TDAH?',
    answer:
      'Sim. Camila tem formação em reabilitação neuropsicológica e TDAH. O trabalho familiar para pós-diagnóstico de TDAH inclui orientação sobre a condição, adaptações práticas e suporte emocional para toda a família — em parceria com o acompanhamento médico já existente.',
  },
  {
    question: 'Como funciona o suporte ao cuidador?',
    answer:
      'O cuidador de um familiar em adoecimento frequentemente vivencia exaustão, culpa, isolamento e luto antecipado — sem ter espaço para processar isso. O atendimento oferece um espaço exclusivo para o cuidador, além de ferramentas para gerenciar a dinâmica familiar em torno do adoecimento.',
  },
  {
    question: 'Tem diferença em relação à terapia familiar tradicional?',
    answer:
      'A orientação familiar na VCare Essence tem foco mais estruturado em objetivos específicos (conflito, diagnóstico, dinâmica de cuidado) do que a terapia familiar de longo prazo. O tempo de processo costuma ser mais definido, com metas claras. A terapia familiar de longo prazo pode ser encaminhada quando necessário.',
  },
];

export default function OrientacaoFamiliarPage() {
  return (
    <>
      <VerticalHero
        eyebrow="Cuidados · Orientação Familiar"
        headline="Cuidar de quem cuida."
        subtitle="Suporte estruturado para famílias em diferentes fases — com base em Terapêutica Sistêmica."
      />

      <VerticalDefinition eyebrow="O que é" headline="A família como sistema — não como soma de problemas individuais.">
        <p>
          Orientação familiar é um trabalho clínico que olha para as relações, não apenas para
          os indivíduos. Em vez de perguntar "o que está errado com essa pessoa", pergunta "o que
          está acontecendo nesse sistema" — e como cada parte está contribuindo, de formas que
          muitas vezes não percebe, para o padrão que causa sofrimento.
        </p>
        <p>
          A base é a Terapêutica Sistêmica: uma abordagem que entende que o comportamento de
          uma pessoa faz sentido dentro do contexto das relações em que ela está inserida. Mudar
          o contexto relacional muda o comportamento — de todos os envolvidos.
        </p>
        <p>
          O processo é conduzido por Camila Clemente, psicóloga com especialização em
          Terapêutica Sistêmica e 10 anos de prática clínica.
        </p>
      </VerticalDefinition>

      {/* Três cenários */}
      <Section tone="sand">
        <Container>
          <Eyebrow>Três cenários de atendimento</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4 mb-12 max-w-prose">
            Para qual situação a sua família está chegando?
          </Heading>

          <div className="grid grid-cols-1 gap-6">
            {SCENARIOS.map((scenario, i) => (
              <div
                key={i}
                className="bg-cream rounded-2xl p-8 md:p-10 border border-line"
              >
                <p className="text-eyebrow font-semibold uppercase tracking-[0.15em] text-muted/60 mb-3">
                  {scenario.context}
                </p>
                <Heading as="h3" size="h2">
                  {scenario.title}
                </Heading>
                <p className="mt-4 text-body text-ink/80 leading-relaxed max-w-prose">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <VerticalHowItWorks
        items={[
          { label: 'Base teórica', value: 'Terapêutica Sistêmica' },
          { label: 'Formato', value: 'Presencial ou online' },
          { label: 'Participantes', value: 'Adaptado ao caso' },
          { label: 'Frequência', value: 'Quinzenal ou mensal' },
        ]}
        tone="cream"
      >
        <p>
          O processo começa com uma avaliação com os adultos responsáveis — para entender o
          contexto, o que está acontecendo e o que se espera do atendimento. A partir daí, o
          formato (quem participa, com que frequência) é definido conforme o caso.
        </p>
      </VerticalHowItWorks>

      <VerticalProfessionals professionals={PROFESSIONALS} tone="sand" />

      <MethodFAQ questions={FAQ} tone="cream" />

      <VerticalCTA
        headline="A família não precisa ter tudo resolvido para chegar. Pode chegar com as perguntas."
        subtext="Presencial em Recife ou online."
        agendaLabel="Agendar conversa inicial"
      />
    </>
  );
}
