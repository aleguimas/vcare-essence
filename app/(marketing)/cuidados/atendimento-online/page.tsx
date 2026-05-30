import type { Metadata } from 'next';
import Link from 'next/link';
import { VerticalHero } from '@/components/sections/vertical/VerticalHero';
import { VerticalCTA } from '@/components/sections/vertical/VerticalCTA';
import { MethodFAQ } from '@/components/sections/method/MethodFAQ';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Atendimento Online · VCare Essence',
  description:
    'Psicoterapia, hipnoterapia, teste vocacional e orientação familiar online. Mesma profundidade do atendimento presencial. Plataforma segura e LGPD-compliant.',
  alternates: { canonical: ROUTES.atendimentoOnline },
};

const VERTICALS_ONLINE = [
  { label: 'Psicoterapia', href: ROUTES.psicoterapia },
  { label: 'Hipnoterapia Clínica', href: ROUTES.hipnoterapia },
  { label: 'Teste Vocacional', href: ROUTES.testeVocacional },
  { label: 'Orientação Familiar', href: ROUTES.orientacaoFamiliar },
];

const FAQ = [
  {
    question: 'A qualidade é a mesma do atendimento presencial?',
    answer:
      'Para a maioria dos casos, sim. O vínculo terapêutico se estabelece independentemente do formato quando há espaço adequado e boa conexão. Alguns casos clínicos específicos — como trabalhos corporais ou de psicomotricidade relacional — pedem presencial. Isso é avaliado individualmente na primeira sessão.',
  },
  {
    question: 'Qual plataforma é utilizada?',
    answer:
      'Utilizamos plataformas seguras de videochamada com criptografia de ponta a ponta. Os dados da sessão não são armazenados. O processo segue integralmente as diretrizes da LGPD e do CFP para atendimento psicológico online.',
  },
  {
    question: 'É indicado para quem nunca fez terapia?',
    answer:
      'Sim — e pode ser especialmente útil. Para quem nunca fez terapia e sente algum desconforto com o formato presencial, o online oferece uma entrada mais gradual. Você está em um ambiente familiar, o que pode reduzir a ansiedade inicial. Se em algum momento o presencial fizer mais sentido, a transição é natural.',
  },
  {
    question: 'O que preciso ter para o atendimento online?',
    answer:
      'Conexão estável de internet, câmera e microfone (computador, tablet ou celular funcionam), e um espaço privado sem interrupções. Fones de ouvido ajudam bastante para a privacidade. Evite espaços com ruído ou onde outra pessoa possa ouvir a sessão.',
  },
  {
    question: 'Atende de fora de Recife?',
    answer:
      'Sim. O atendimento online está disponível para qualquer cidade do Brasil — e, em alguns casos, para brasileiros no exterior (consultar conforme origem da demanda).',
  },
];

export default function AtendimentoOnlinePage() {
  return (
    <>
      <VerticalHero
        eyebrow="Atendimento Online"
        headline="Online não é menos. É outro contexto."
        subtitle="Todas as vertcais clínicas da VCare Essence estão disponíveis online — com a mesma profundidade e o mesmo cuidado do atendimento presencial."
      />

      {/* Para quem é */}
      <Section tone="cream">
        <Container narrow>
          <Eyebrow>Para quem é</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4 max-w-prose">
            Para quem mora longe, tem agenda intensa, ou prefere o conforto de casa.
          </Heading>
          <div className="mt-8 space-y-4 text-body text-ink/80 leading-relaxed">
            <p>
              O atendimento online não é uma versão reduzida do presencial — é um formato
              diferente, com suas próprias vantagens. Para muitas pessoas, a familiaridade do
              próprio espaço facilita a abertura. Para quem tem agenda intensa, elimina o tempo
              de deslocamento sem sacrificar a qualidade.
            </p>
            <p>
              Para quem nunca fez terapia e sente algum desconforto com a ideia do presencial, o
              online oferece uma entrada mais gradual — você está em casa, em um ambiente que
              conhece, com a liberdade de ajustar o formato depois.
            </p>
            <p>
              O que não muda é o método, a profissional e a estrutura do processo. O que muda é
              onde você está quando acontece.
            </p>
          </div>
        </Container>
      </Section>

      {/* Como funciona tecnicamente */}
      <Section tone="sand">
        <Container narrow>
          <Eyebrow>Como funciona</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4">
            Seguro, privado, LGPD-compliant.
          </Heading>
          <div className="mt-8 space-y-6">
            {[
              {
                title: 'Plataforma segura',
                body: 'As sessões acontecem em plataformas com criptografia de ponta a ponta. Os dados não são gravados nem armazenados. O link é gerado para cada sessão e expira após o uso.',
              },
              {
                title: 'LGPD e CFP',
                body: 'O atendimento psicológico online no Brasil segue as diretrizes do Conselho Federal de Psicologia (Resolução CFP nº 11/2018) e a Lei Geral de Proteção de Dados. A coleta e o tratamento de dados seguem política de privacidade disponível no site.',
              },
              {
                title: 'O que você precisa',
                body: 'Conexão estável, câmera e microfone, e um espaço privado sem interrupções. Fones de ouvido são recomendados. Celular, tablet ou computador funcionam.',
              },
            ].map((item) => (
              <div key={item.title} className="border-b border-line pb-6 last:border-0">
                <p className="font-sans font-medium text-moss">{item.title}</p>
                <p className="mt-2 text-body text-ink/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quais verticais */}
      <Section tone="cream">
        <Container narrow>
          <Eyebrow>Disponível para</Eyebrow>
          <Heading as="h2" size="h2" className="mt-4">
            Todas as verticais clínicas da casa.
          </Heading>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {VERTICALS_ONLINE.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="p-4 rounded-xl border border-line bg-cream-50 hover:border-bronze/30 hover:text-bronze-400 transition-all duration-300 text-body font-sans font-medium text-moss"
              >
                {v.label} →
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <MethodFAQ questions={FAQ} tone="sand" />

      <VerticalCTA
        headline="Começa de onde você estiver."
        subtext="Atendimento online disponível para todo o Brasil."
        agendaLabel="Agendar online"
      />
    </>
  );
}
