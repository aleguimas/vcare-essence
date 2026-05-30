import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

// Skeleton sutil em sand — exibido durante navegação entre páginas do site.
export default function Loading() {
  return (
    <Section tone="cream" size="lg" aria-busy="true" aria-label="Carregando">
      <Container>
        <div className="animate-pulse space-y-6">
          <div className="h-3 w-32 rounded-full bg-sand" />
          <div className="h-12 w-3/4 rounded-2xl bg-sand" />
          <div className="h-5 w-2/3 rounded-full bg-sand/70" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="h-40 rounded-2xl bg-sand/60" />
            <div className="h-40 rounded-2xl bg-sand/60" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
