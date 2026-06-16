import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'A Curadoria · A Clínica · VCare Essence',
  description:
    'A filosofia de curadoria da VCare Essence, como escolhemos cada profissional, método e detalhe do espaço.',
  alternates: { canonical: ROUTES.curadoria },
};

export default function CuradoriaPage() {
  return (
    <Section tone="cream" size="lg">
      <Container narrow>
        <Eyebrow>A Clínica · Curadoria</Eyebrow>
        <Heading as="h1" size="display-md" className="mt-5">
          Cada escolha foi pensada.
        </Heading>
        <div className="mt-8 space-y-5 text-body text-ink/80 leading-relaxed">
          <p>
            Curadoria não é uma palavra de marketing. Na VCare Essence, é um princípio
            operacional: cada profissional, cada método, cada material, cada aroma, cada detalhe
            do espaço foi escolhido com intenção e critério.
          </p>
          <p>
            Não trabalhamos com o que está disponível. Trabalhamos com o que é coerente com o
            que a clínica representa: cuidado boutique, profundidade clínica, discrição e
            experiência sensorial.
          </p>
          <p>
            Para os profissionais: avaliação de formação, abordagem e alinhamento com os
            princípios da clínica antes de qualquer convite. Para o espaço: projeto intencional de
            cada sentido. Para os métodos: seleção com base em evidência clínica e adequação ao
            público que a clínica atende.
          </p>
        </div>
      </Container>
    </Section>
  );
}
