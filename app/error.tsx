'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section tone="cream" size="lg" className="min-h-[70vh] flex items-center">
      <Container narrow className="text-center">
        <Eyebrow>Algo não saiu como esperado</Eyebrow>
        <Heading as="h1" size="display-md" className="mt-6">
          Tropeçamos em uma pedra no caminho.
        </Heading>
        <p className="mt-4 text-lead text-muted max-w-prose mx-auto">
          Algo não funcionou como deveria. Você pode tentar novamente — ou falar com a gente pelo
          WhatsApp se o problema continuar.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button onClick={reset} size="lg">
            Tentar novamente
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={ROUTES.home}>Voltar à casa</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
