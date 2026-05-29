import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

export default function HomePage() {
  return (
    <>
      <Section size="lg" tone="cream">
        <Container>
          <Eyebrow>VCare Essence · Recife</Eyebrow>
          <Heading as="h1" size="display-xl" className="mt-4 max-w-prose-wide">
            Por dentro é onde tudo começa.{' '}
            <em className="not-italic text-bronze">E onde tudo trava.</em>
          </Heading>
          <p className="mt-6 text-lead text-muted max-w-prose">
            Casa boutique de saúde mental no RioMar Trade Center. A primeira clínica sensorial de
            Recife.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={ROUTES.aCasa}>Conhecer a casa</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={ROUTES.agendar}>Agendar uma conversa</Link>
            </Button>
          </div>
        </Container>
      </Section>
      {/* Sprint 02 — blocos da home completa */}
    </>
  );
}
