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
  title: 'Teste Vocacional · VCare Essence',
  description:
    'Teste vocacional em Recife para adolescentes no pré-vestibular e adultos em reposicionamento de carreira. Abordagem clínica, não coaching. Camila Clemente, psicóloga.',
  alternates: { canonical: ROUTES.testeVocacional },
};

const PROFESSIONALS = [
  {
    name: 'Camila Clemente',
    role: 'Psicóloga',
    crp: 'CRP XX/XXXXX', // TODO: aguardar dados das sócias
    href: ROUTES.camila,
  },
];

const FAQ = [
  {
    question: 'O que é testagem vocacional?',
    answer:
      'É um processo estruturado que combina instrumentos psicológicos (testes de personalidade, aptidões e interesses) com sessões de autoconhecimento e devolutiva clínica. O objetivo não é "descobrir a profissão certa" — é ampliar a clareza sobre quem você é, como você funciona e quais caminhos fazem sentido para o momento atual.',
  },
  {
    question: 'É para adolescentes ou adultos?',
    answer:
      'Para os dois públicos, com processos diferentes. Para adolescentes: foco em ENEM/vestibular, com devolutiva que inclui a família. Para adultos: foco em reposicionamento de carreira, integrado com psicoterapia quando necessário.',
  },
  {
    question: 'Qual a diferença entre teste vocacional e coaching de carreira?',
    answer:
      'O teste vocacional na VCare Essence é conduzido por psicóloga com base em instrumentos clínicos validados. O processo investiga aspectos emocionais, comportamentais e de história de vida que influenciam a escolha — não apenas metas e planejamento. Coaching é uma prática de desenvolvimento sem regulamentação clínica e sem esse lastro de profundidade.',
  },
  {
    question: 'Quantas sessões são necessárias?',
    answer:
      'O processo tem duração estimada de 4 a 8 sessões, variando conforme o caso. Inclui aplicação dos instrumentos, sessões de aprofundamento e devolutiva final — com relatório escrito quando aplicável.',
  },
  {
    question: 'A família participa no caso de adolescentes?',
    answer:
      'Sim, a devolutiva para adolescentes é realizada com os pais presentes (e com o adolescente). O alinhamento familiar é parte do processo — especialmente quando há pressão ou expectativas contrastantes entre pais e filho.',
  },
  {
    question: 'E se a questão for uma trava emocional profunda?',
    answer:
      'Quando o que impede a decisão de carreira não é falta de clareza vocacional, mas sim um bloqueio emocional mais profundo, pode haver uma indicação ao Método V (quando o perfil é de empresário ou executivo). Isso é avaliado ao longo do processo.',
  },
];

export default function TesteVocacionalPage() {
  return (
    <>
      <VerticalHero
        eyebrow="Cuidados · Teste Vocacional"
        headline="Escolher caminho não precisa ser sozinho."
        subtitle="Processo estruturado com base clínica — para adolescentes em pré-vestibular e adultos em reposicionamento de carreira."
      />

      <VerticalDefinition eyebrow="O que é" headline="Não é sobre descobrir 'a profissão certa'. É sobre se conhecer.">
        <p>
          Teste vocacional é o nome que ficou — mas o processo é mais amplo do que o nome sugere.
          Envolve instrumentos psicológicos validados, sessões de autoconhecimento e uma devolutiva
          clínica estruturada. O objetivo é ampliar a clareza: sobre personalidade, aptidões,
          interesses e padrões de comportamento que influenciam escolhas de carreira.
        </p>
        <p>
          É um processo conduzido por psicóloga — não por coach. Isso significa que os
          instrumentos utilizados são regulamentados pelo CFP, a análise tem lastro clínico, e o
          processo pode integrar aspectos emocionais que um simples questionário não alcança.
        </p>
      </VerticalDefinition>

      {/* Duas frentes */}
      <Section tone="sand">
        <Container>
          <Eyebrow>Duas frentes</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4 mb-12 max-w-prose">
            O processo é diferente conforme o momento de vida.
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-2xl p-8 md:p-10 border border-line">
              <Eyebrow tone="muted">Para adolescentes</Eyebrow>
              <Heading as="h3" size="h2" className="mt-3">
                16 a 19 anos — ENEM e vestibular
              </Heading>
              <div className="mt-5 space-y-3 text-body text-ink/80">
                <p>
                  Para quem está diante da primeira grande escolha — e sente o peso da decisão
                  sem clareza suficiente sobre si mesmo para tomá-la.
                </p>
                <p>
                  O processo inclui testagem, sessões individuais com o adolescente e devolutiva
                  com a família. A presença dos pais na devolutiva é parte do método — não é
                  opcional.
                </p>
              </div>
              <div className="mt-6 space-y-2">
                {['Testagem com instrumentos validados', 'Sessões de aprofundamento individual', 'Devolutiva com os pais', 'Relatório escrito'].map((i) => (
                  <div key={i} className="flex items-center gap-3 text-small text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze shrink-0" aria-hidden="true" />
                    {i}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8 md:p-10 border border-line">
              <Eyebrow tone="muted">Para adultos</Eyebrow>
              <Heading as="h3" size="h2" className="mt-3">
                30 a 50 anos — reposicionamento de carreira
              </Heading>
              <div className="mt-5 space-y-3 text-body text-ink/80">
                <p>
                  Para quem chegou a um ponto em que o que fazia sentido antes já não faz mais —
                  e precisa de clareza clínica sobre o que está por trás disso.
                </p>
                <p>
                  Quando a questão não é falta de clareza vocacional, mas sim um bloqueio
                  emocional mais profundo, o processo pode incluir referência ao Método V para
                  aprofundamento.
                </p>
              </div>
              <div className="mt-6 space-y-2">
                {['Testagem com instrumentos validados', 'Plano comportamental de reposicionamento', 'Integração com psicoterapia quando indicado', 'Sem coaching — base clínica'].map((i) => (
                  <div key={i} className="flex items-center gap-3 text-small text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze shrink-0" aria-hidden="true" />
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <VerticalHowItWorks
        items={[
          { label: 'Duração estimada', value: '4 a 8 sessões' },
          { label: 'Formato', value: 'Presencial ou online' },
          { label: 'Devolutiva', value: 'Sessão + relatório escrito' },
          { label: 'Família (adolescentes)', value: 'Presente na devolutiva' },
        ]}
        tone="cream"
      />

      <VerticalProfessionals professionals={PROFESSIONALS} tone="sand" />

      <MethodFAQ questions={FAQ} tone="cream" />

      <VerticalCTA
        headline="Clareza não é luxo. É o começo de qualquer escolha real."
        subtext="Presencial em Recife ou online."
        agendaLabel="Agendar avaliação inicial"
      />
    </>
  );
}
