import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

export default function NotFound() {
  return (
    <Section tone="cream" size="lg" className="min-h-[70vh] flex items-center">
      <Container narrow className="text-center">
        <Eyebrow>404</Eyebrow>
        <Heading as="h1" size="display-md" className="mt-6">
          Algumas portas se abrem mais devagar.
        </Heading>
        <p className="mt-4 text-lead text-muted max-w-prose mx-auto">
          Esta, infelizmente, não levou a lugar nenhum.
        </p>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <Link href={ROUTES.home}>Voltar à clínica</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
