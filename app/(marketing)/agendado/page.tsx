import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Agendamento confirmado · VCare Essence',
  description: 'Seu agendamento foi recebido. Em breve você receberá os detalhes por email.',
  alternates: { canonical: ROUTES.agendar },
  robots: { index: false, follow: false },
};

export default function AgendadoPage() {
  return (
    <Section tone="cream" size="lg" className="min-h-[60vh] flex items-center">
      <Container narrow>
        <Eyebrow>Tudo certo</Eyebrow>
        <Heading as="h1" size="display-md" className="mt-5">
          Recebemos seu agendamento.
        </Heading>
        <p className="mt-6 text-lead text-ink/70 max-w-prose">
          Em breve você receberá um email com os detalhes do encontro. Se precisar ajustar algo,
          é só responder esse email ou falar com a gente.
        </p>

        <div className="mt-12 border-t border-line pt-10">
          <p className="text-small font-semibold uppercase tracking-[0.15em] text-bronze-400 mb-4">
            O que esperar
          </p>
          <div className="space-y-5 text-body text-ink/80 leading-relaxed">
            <p>
              A primeira conversa é uma escuta. Você não precisa chegar com respostas prontas —
              chegar já é o primeiro passo.
            </p>
            <p>
              Se for presencial, chegue alguns minutos antes para sentir o espaço. Se for online,
              escolha um lugar tranquilo onde você possa falar sem interrupções.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href={ROUTES.aCasa}>Conhecer a casa enquanto isso</Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href={ROUTES.home}>Voltar à home</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
