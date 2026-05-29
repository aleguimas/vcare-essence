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

// Inventário visual da pasta Drive — as 16 fotos catalogadas
// TODO: após converter HEIC → WebP (ver 05_assets_guide.md), renomear descritivamente
// As 2 confirmadas usam src real; as demais têm src vazio (placeholder)
const GALLERY_ITEMS = [
  {
    src: '/images/ambiente/ceu-estrelado-hero.webp',
    alt: 'Teto da recepção com efeito de céu estrelado em fibra óptica',
    caption: 'Recepção — céu estrelado em fibra óptica',
    span: 'wide' as const,
  },
  {
    src: '/images/ambiente/detalhes-tateis-01.webp',
    alt: 'Detalhes táteis — planta, esfera de fibra óptica e elementos decorativos',
    caption: 'Detalhes sensoriais',
    span: 'normal' as const,
  },
  // TODO: adicionar fotos após conversão HEIC → WebP (Sprint 06 — tarefa manual)
  { src: '', alt: 'Sala de atendimento 1 — VCare Essence', caption: 'Sala de atendimento', span: 'normal' as const },
  { src: '', alt: 'Recepção da VCare Essence — vista geral', caption: 'Recepção', span: 'wide' as const },
  { src: '', alt: 'Detalhe de iluminação quente da clínica', caption: 'Iluminação', span: 'normal' as const },
  { src: '', alt: 'Sala de atendimento 2 — sofá e mobiliário', caption: 'Sala 2', span: 'tall' as const },
  { src: '', alt: 'Detalhe de materiais naturais — madeira e cerâmica', caption: 'Materiais', span: 'normal' as const },
  { src: '', alt: 'Corredor de acesso às salas', caption: 'Circulação interna', span: 'normal' as const },
  { src: '', alt: 'Vista do espaço de espera', caption: 'Espaço de espera', span: 'wide' as const },
  { src: '', alt: 'Planta e elementos naturais da decoração', caption: 'Natureza viva', span: 'normal' as const },
  { src: '', alt: 'Detalhe de textura — tecido e madeira', caption: 'Textura', span: 'normal' as const },
  { src: '', alt: 'Ritual de recepção — água e chá', caption: 'O ritual da chegada', span: 'normal' as const },
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

      {/* Recepção */}
      <Section tone="cream" size="sm">
        <Container>
          <Eyebrow className="mb-6">A recepção</Eyebrow>
          <EditorialGallery items={GALLERY_ITEMS.slice(0, 5)} />
        </Container>
      </Section>

      {/* As salas */}
      <Section tone="sand" size="sm">
        <Container>
          <Eyebrow className="mb-6">As salas</Eyebrow>
          <EditorialGallery items={GALLERY_ITEMS.slice(5, 9)} />
        </Container>
      </Section>

      {/* Os detalhes */}
      <Section tone="cream" size="sm">
        <Container>
          <Eyebrow className="mb-6">Os detalhes</Eyebrow>
          <EditorialGallery items={GALLERY_ITEMS.slice(9)} />
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
