import type { Metadata } from 'next';
import Link from 'next/link';
import { EditorialGallery } from '@/components/sections/casa/EditorialGallery';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Tour pela Casa · A Casa · VCare Essence',
  description:
    'Galeria visual do espaço da VCare Essence — recepção, salas de atendimento e detalhes sensoriais. A primeira clínica sensorial de Recife.',
  alternates: { canonical: ROUTES.tour },
};

// Fotos reais do espaço da VCare Essence
const RECEPCAO_E_SENSORIAL = [
  {
    src: '/images/ambiente/entrada-vcare-essence.webp',
    alt: 'Entrada da VCare Essence com logo retroiluminado em parede de madeira e corredor',
    caption: 'A chegada',
    span: 'normal' as const,
  },
  {
    src: '/images/ambiente/sala-01-teto-led-sensorial.webp',
    alt: 'Sala de atendimento sob o céu estrelado em fibra óptica, com luz quente',
    caption: 'Céu estrelado em fibra óptica',
    span: 'wide' as const,
  },
  {
    src: '/images/ambiente/sala-02-teto-led-sensorial.webp',
    alt: 'Detalhe do teto com efeito de céu estrelado em fibra óptica',
    caption: 'O teto sensorial',
    span: 'normal' as const,
  },
];

const SALAS = [
  {
    src: '/images/ambiente/sala-02-iluminacao-dia-vista.webp',
    alt: 'Sala de atendimento com janela ampla e vista da cidade ao entardecer',
    caption: 'Sala com vista',
    span: 'wide' as const,
  },
  {
    src: '/images/ambiente/sala-01-iluminacao-dia.webp',
    alt: 'Sala de atendimento à luz do dia, com madeira, mármore e materiais naturais',
    caption: 'Materiais naturais',
    span: 'normal' as const,
  },
  {
    src: '/images/ambiente/sala-01-angulo-2-iluminacao-dia.webp',
    alt: 'Sala de atendimento da VCare Essence em outro ângulo, com mesa e poltronas',
    caption: 'Outro ângulo',
    span: 'normal' as const,
  },
];

export default function TourPage() {
  return (
    <>
      <Section tone="cream" size="md" className="border-b border-line">
        <Container>
          <Eyebrow>A Casa · Tour</Eyebrow>
          <Heading as="h1" size="display-md" className="mt-5 max-w-prose-wide">
            A casa em detalhes.
          </Heading>
          <p className="mt-6 text-lead text-ink/70 max-w-prose">
            Cada detalhe foi escolhido com intenção. A galeria abaixo mostra o que as palavras
            só conseguem aproximar.
          </p>
        </Container>
      </Section>

      {/* A chegada e o sensorial */}
      <Section tone="cream" size="sm">
        <Container>
          <Eyebrow className="mb-6">A chegada e o sensorial</Eyebrow>
          <EditorialGallery items={RECEPCAO_E_SENSORIAL} />
        </Container>
      </Section>

      {/* As salas */}
      <Section tone="sand" size="sm">
        <Container>
          <Eyebrow className="mb-6">As salas</Eyebrow>
          <EditorialGallery items={SALAS} />
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="moss" size="md">
        <Container>
          <div className="max-w-prose-wide">
            <Eyebrow tone="muted">Quer vir ao vivo?</Eyebrow>
            <Heading as="h2" size="h1" className="mt-4 text-cream">
              A melhor forma de conhecer a VCare Essence é estar aqui.
            </Heading>
            <p className="mt-4 text-lead text-cream/70">
              O espaço não se descreve em fotos — se experimenta. Agende uma visita ou uma
              primeira conversa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={ROUTES.agendar}>Agendar</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href={ROUTES.endereco}>Como chegar →</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
