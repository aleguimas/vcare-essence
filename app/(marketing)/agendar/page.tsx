import type { Metadata } from 'next';
import Link from 'next/link';
import { Segmentador } from '@/components/sections/agendar/Segmentador';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES, SITE } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Agendar · VCare Essence',
  description:
    'Agende seu atendimento na VCare Essence, presencial no RioMar Trade Center ou online. A primeira conversa é uma escuta, não compromisso.',
  alternates: { canonical: ROUTES.agendar },
};

const FAQ = [
  {
    q: 'Quanto tempo dura a primeira sessão?',
    a: 'Varia conforme a vertical. A primeira conversa dos métodos autorais (V e C) dura cerca de 60 minutos. Sessões de psicoterapia, 50 minutos. Hipnoterapia, de 60 a 90 minutos.',
  },
  {
    q: 'Preciso de indicação médica?',
    a: 'Não. Você pode agendar diretamente, sem encaminhamento. Em alguns casos clínicos específicos, podemos sugerir acompanhamento médico em paralelo, mas isso é avaliado durante o processo.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'O atendimento é particular. As formas de pagamento aceitas são informadas no momento do agendamento. Não trabalhamos com convênios.', // TODO: confirmar formas de pagamento com as sócias
  },
  {
    q: 'Vocês emitem recibo para reembolso?',
    a: 'Sim. Emitimos recibo que pode ser usado para solicitar reembolso junto ao seu plano de saúde, conforme as regras da sua operadora.',
  },
  {
    q: 'Como é o atendimento online?',
    a: 'Acontece por videochamada em plataforma segura, com a mesma profundidade do presencial. Você precisa de conexão estável e um espaço privado. Saiba mais na página de atendimento online.',
  },
];

export default function AgendarPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="cream" size="md" className="border-b border-line">
        <Container>
          <Eyebrow>VCare Essence · Agendar</Eyebrow>
          <Heading as="h1" size="display-md" className="mt-5 max-w-prose-wide">
            Comece quando quiser.
          </Heading>
          <p className="mt-6 text-lead text-ink/70 max-w-prose">
            Atendemos presencialmente no RioMar Trade Center e online. A primeira conversa é uma
            escuta, não compromisso.
          </p>
        </Container>
      </Section>

      {/* Segmentador */}
      <Section tone="sand">
        <Container narrow>
          <Segmentador />
        </Container>
      </Section>

      {/* Informações práticas */}
      <Section tone="cream">
        <Container narrow>
          <Eyebrow>Informações práticas</Eyebrow>
          <Heading as="h2" size="h2" className="mt-4 mb-8">
            O que é bom saber antes.
          </Heading>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <dt className="text-eyebrow font-semibold uppercase tracking-[0.15em] text-bronze-400">
                Endereço
              </dt>
              <dd className="mt-2 text-body text-ink/80 font-sans leading-relaxed">
                {SITE.address.street}
                <br />
                {SITE.address.complement}
                <br />
                {SITE.address.neighborhood}, {SITE.address.city}, {SITE.address.state}
              </dd>
            </div>
            <div>
              <dt className="text-eyebrow font-semibold uppercase tracking-[0.15em] text-bronze-400">
                Horário
              </dt>
              {/* TODO: confirmar horários com as sócias */}
              <dd className="mt-2 text-body text-ink/80 font-sans leading-relaxed">
                Segunda a sexta, a confirmar
                <br />
                Atendimento por agendamento
              </dd>
            </div>
            <div>
              <dt className="text-eyebrow font-semibold uppercase tracking-[0.15em] text-bronze-400">
                Pagamento
              </dt>
              <dd className="mt-2 text-body text-ink/80 font-sans leading-relaxed">
                Particular. Emitimos recibo para reembolso.
              </dd>
            </div>
            <div>
              <dt className="text-eyebrow font-semibold uppercase tracking-[0.15em] text-bronze-400">
                Convênio
              </dt>
              <dd className="mt-2 text-body text-ink/80 font-sans leading-relaxed">
                Não atendemos por convênio, apenas particular.
              </dd>
            </div>
          </dl>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="sand">
        <Container narrow>
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <div className="mt-8 space-y-0">
            {FAQ.map((item) => (
              <div key={item.q} className="py-6 border-b border-line last:border-0">
                <p className="font-sans font-medium text-moss">{item.q}</p>
                <p className="mt-2 text-body text-ink/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA fallback */}
      <Section tone="cream" size="sm">
        <Container narrow>
          <p className="text-body text-muted font-sans">
            Quer conhecer melhor antes de marcar? Volte para a{' '}
            <Link href={ROUTES.home} className="text-bronze underline underline-offset-4 hover:text-bronze-400 transition-colors">
              home
            </Link>{' '}
            ou explore{' '}
            <Link href={ROUTES.aCasa} className="text-bronze underline underline-offset-4 hover:text-bronze-400 transition-colors">
              a clínica
            </Link>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
