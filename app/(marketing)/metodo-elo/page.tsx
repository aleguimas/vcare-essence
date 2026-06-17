import type { Metadata } from 'next';
import { MethodHero } from '@/components/sections/method/MethodHero';
import { ProgramPillars } from '@/components/sections/method/ProgramPillars';
import { MethodProfessional } from '@/components/sections/method/MethodProfessional';
import { MethodFAQ } from '@/components/sections/method/MethodFAQ';
import { MethodFinalCTA } from '@/components/sections/method/MethodFinalCTA';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/schemas';
import { ROUTES } from '@/lib/routes';

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Início', path: ROUTES.home },
  { name: 'Método ELO', path: ROUTES.metodoElo },
]);

export const metadata: Metadata = {
  title: 'Método ELO · Para adolescentes em fase de escolha',
  description:
    'Seu filho não é preguiçoso. Pode estar desorganizado emocionalmente. Camila Clemente conduz o Método ELO, programa estruturado para adolescentes em pré-vestibular, com suporte psicológico, organização e acompanhamento familiar.',
  alternates: { canonical: ROUTES.metodoElo },
  openGraph: {
    title: 'Método ELO · Para adolescentes em fase de escolha · VCare Essence',
    description:
      'Método ELO: programa estruturado para adolescentes, rendimento escolar, vestibular, suporte emocional e acompanhamento familiar.',
    // OG image gerada dinamicamente por opengraph-image.tsx
  },
};

// ─── Dados do método ──────────────────────────────────────────────────────────

const PILLARS = [
  {
    iconName: 'Brain' as const,
    label: 'E',
    title: 'Entender',
    description:
      'Avaliação inicial para compreender o ponto de partida: perfil emocional, hábitos de estudo, fatores que interferem no rendimento, ansiedade, dificuldades comportamentais e interesses profissionais.',
  },
  {
    iconName: 'Target' as const,
    label: 'L',
    title: 'Lapidar',
    description:
      'Desenvolvimento das competências que sustentam o resultado: organização, gestão do tempo, autorregulação emocional, habilidades sociais e estratégias de aprendizagem.',
  },
  {
    iconName: 'BookOpen' as const,
    label: 'O',
    title: 'Orientar',
    description:
      'Construção de um plano individualizado: projeto de vida, escolha profissional, metas acadêmicas e preparação para vestibulares e concursos.',
  },
  {
    iconName: 'Users' as const,
    label: '+',
    title: 'Conexão',
    description:
      'Envolvimento da família para fortalecer o suporte ao adolescente, porque o processo de um não acontece sem o outro.',
  },
];

const CAMILA_BIO = [
  'Psicóloga com 10 anos de prática clínica, especialista em Análise do Comportamento, Psicomotricidade Relacional, Reabilitação Neuropsicológica e Terapêutica Sistêmica. Mentora e docente na área de saúde mental e desenvolvimento humano.',
  'Desenvolveu um método autoral voltado para adolescentes em fases de transição, especialmente o período de pré-vestibular, quando a pressão acadêmica e o processo de escolha de carreira se somam às travessias normais da adolescência.',
  'O programa que conduz não é tutoria nem coaching. É um acompanhamento psicológico estruturado que envolve o adolescente e a família, porque o processo de um não acontece sem o outro.',
  'Co-fundadora da VCare Essence, acredita que o método começa com a recusa ao senso comum: "trato a falta de resultado como falta de motivação, não como preguiça."',
];

const FAQ_C = [
  {
    question: 'O programa é para todos os adolescentes?',
    answer:
      'Não. O programa é desenhado para adolescentes que estão em fase de pré-vestibular ou que apresentam queda de rendimento escolar sem causa orgânica identificada, e cujos pais identificam que o suporte psicológico estruturado faz sentido. A primeira conversa (com os pais) é justamente para avaliar se há fit.',
  },
  {
    question: 'Pode ajudar com TDAH?',
    answer:
      'Sim. Camila tem formação específica em reabilitação neuropsicológica e atendimento de TDAH. O programa pode ser adaptado para adolescentes com diagnóstico, mas exige alinhamento com o acompanhamento médico já em curso, quando houver.',
  },
  {
    question: 'Quantos meses dura?',
    answer:
      'O programa mínimo tem duração de um semestre (6 meses), com possibilidade de extensão. O acompanhamento de pré-vestibular costuma durar entre 8 e 12 meses. A periodicidade e o formato (sessões individuais + sessões familiares) são definidos na conversa inicial com os pais.',
  },
  {
    question: 'Atende online também?',
    answer:
      'Sim, com adaptações. O atendimento online funciona bem para adolescentes que já têm maturidade para o formato, o que é avaliado na conversa inicial. As sessões familiares tendem a funcionar melhor presencialmente, mas há flexibilidade.',
  },
  {
    question: 'Como funciona a conversa inicial?',
    answer:
      'A primeira conversa é com os pais, sem o adolescente presente. É uma escuta do contexto, do que está acontecendo e do que a família espera do processo. Se houver fit, agendamos uma sessão de diagnóstico com o adolescente. Só depois disso construímos o plano.',
  },
  {
    question: 'Qual é o investimento?',
    answer:
      'O valor não está publicado porque o programa é montado caso a caso, com periodicidade e duração variáveis. Na conversa inicial, apresentamos uma proposta clara antes de qualquer compromisso.',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MetodoEloPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {/* 01 · Hero, fala com pais/mães */}
      <MethodHero
        eyebrow="Método ELO, com Camila Clemente"
        headline={
          <>
            Seu filho não é preguiçoso.{' '}
            <em className="italic text-bronze">
              Ele está desorganizado emocionalmente, e isso tem método.
            </em>
          </>
        }
        subheadline="Programa estruturado para adolescentes em fase de vestibular, rendimento escolar e travessias de identidade."
        whatsappVertical="metodo-elo"
        whatsappLabel="Falar com a Camila no WhatsApp"
      />

      {/* 02 · O que pode estar acontecendo */}
      <Section tone="cream">
        <Container narrow>
          <Eyebrow>O que pode estar acontecendo</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4 max-w-prose">
            Antes de concluir que é falta de esforço, vale entender o que está embaixo.
          </Heading>

          <div className="mt-10 space-y-3">
            {[
              'Seu filho era bom aluno, e agora não consegue mais estudar',
              'A ansiedade pré-prova vira paralisia na hora de abrir o material',
              'Mudou de carreira três vezes e ainda não sabe o que quer',
              'Está sempre cansado, sem motivação aparente',
              'Você não sabe se cobra, se acolhe, ou se está piorando as coisas',
              'A relação em casa ficou tensa, e cada conversa sobre escola vira conflito',
            ].map((symptom) => (
              <div key={symptom} className="flex items-start gap-4 py-4 border-b border-line last:border-0">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-bronze" aria-hidden="true" />
                <p className="text-body text-ink/80">{symptom}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-body text-ink/70">
            Nenhum desses pontos é sinal de fracasso, nem do adolescente, nem dos pais. É sinal
            de que o emocional precisa de estrutura. E estrutura tem método.
          </p>
        </Container>
      </Section>

      {/* 03 · Os quatro pilares do Método ELO (E·L·O·+) */}
      <ProgramPillars
        pillars={PILLARS}
        eyebrow="Os quatro pilares do Método ELO"
        headline="E, L, O e a conexão que sustenta tudo: Entender, Lapidar, Orientar."
        tone="sand"
      />

      {/* 04 · Como funciona */}
      <Section tone="cream">
        <Container narrow>
          <Eyebrow>Como funciona</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4">
            Um processo que envolve o adolescente e a família.
          </Heading>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="font-sans font-medium text-moss text-body">Sessões individuais</h3>
              <p className="mt-2 text-body text-ink/70 leading-relaxed">
                Atendimento semanal com o adolescente. As primeiras sessões são de diagnóstico,
                entender o funcionamento, os padrões, o que está travando. A partir daí, o
                trabalho segue o plano desenhado para aquele caso específico.
              </p>
            </div>
            <div>
              <h3 className="font-sans font-medium text-moss text-body">Sessões familiares</h3>
              <p className="mt-2 text-body text-ink/70 leading-relaxed">
                A cada três a quatro semanas, sessão com os pais, às vezes com o adolescente
                presente, às vezes não. O objetivo é alinhar expectativas, ajustar a comunicação
                em casa e garantir que o processo em sessão tenha suporte fora dela.
              </p>
            </div>
            <div>
              <h3 className="font-sans font-medium text-moss text-body">Duração e periodicidade</h3>
              <p className="mt-2 text-body text-ink/70 leading-relaxed">
                O programa mínimo tem duração de um semestre. Casos de pré-vestibular costumam
                exigir entre 8 e 12 meses. O plano é apresentado na conversa inicial com os pais,
                com estimativa honesta de tempo e investimento.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 05 · Camila Clemente */}
      <MethodProfessional
        name="Camila Clemente"
        role="Psicóloga"
        crp="CRP 02/19121"
        bio={CAMILA_BIO}
        signature="Trato a falta de resultado como falta de motivação, não como preguiça."
        profileHref={ROUTES.camila}
        imgSrc="/images/profissionais/camila-clemente-vcare-essence-01.webp"
        imgAlt="Camila Clemente, psicóloga da VCare Essence"
        whatsappVertical="metodo-elo"
      />

      {/* 06 · FAQ, específico para pais */}
      <MethodFAQ questions={FAQ_C} tone="sand" />

      {/* 07 · CTA final */}
      <MethodFinalCTA
        eyebrow="O primeiro passo é uma conversa"
        headline="A conversa inicial é com os pais. Sem compromisso, sem o adolescente presente."
        subtext="Para entender o contexto, ouvir o que está acontecendo e avaliar juntos se há fit com o programa. Fale com a Camila pelo WhatsApp."
        ctaLabel="Falar com a Camila no WhatsApp"
        vertical="metodo-elo"
      />
    </>
  );
}
