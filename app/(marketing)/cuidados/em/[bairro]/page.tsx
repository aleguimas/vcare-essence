import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { Button } from '@/components/ui/button';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/schemas';
import { BAIRROS, getBairro } from '@/lib/bairros';
import { ROUTES } from '@/lib/routes';

interface PageProps {
  params: Promise<{ bairro: string }>;
}

export function generateStaticParams() {
  return BAIRROS.map((b) => ({ bairro: b.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { bairro: slug } = await params;
  const bairro = getBairro(slug);
  if (!bairro) return {};

  return {
    title: `Psicóloga em ${bairro.name} · VCare Essence`,
    description: bairro.intro,
    alternates: { canonical: `${ROUTES.cuidados}/em/${bairro.slug}` },
  };
}

export default async function BairroPage({ params }: PageProps) {
  const { bairro: slug } = await params;
  const bairro = getBairro(slug);
  if (!bairro) notFound();

  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Início', path: ROUTES.home },
    { name: 'Cuidados', path: ROUTES.cuidados },
    { name: bairro.name, path: `${ROUTES.cuidados}/em/${bairro.slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* Hero */}
      <Section tone="cream" size="md" className="border-b border-line">
        <Container>
          <Eyebrow>
            Atendimento em {bairro.name} · {bairro.zona}
          </Eyebrow>
          <Heading as="h1" size="display-md" className="mt-5 max-w-prose-wide">
            Psicóloga e hipnoterapia em {bairro.name}.
          </Heading>
          <p className="mt-6 text-lead text-ink/70 max-w-prose">{bairro.intro}</p>
          <p className="mt-3 text-small text-muted font-sans">
            VCare Essence — {bairro.distance}.
          </p>
        </Container>
      </Section>

      {/* Sobre o atendimento no bairro */}
      <Section tone="sand">
        <Container narrow>
          <Eyebrow>Atendimento para moradores de {bairro.name}</Eyebrow>
          <div className="mt-8 space-y-5 text-body text-ink/80 leading-relaxed">
            {bairro.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Verticais reforçadas para o perfil */}
      <Section tone="cream">
        <Container>
          <Eyebrow>Mais procurado por quem vive em {bairro.name}</Eyebrow>
          <Heading as="h2" size="h2" className="mt-4 mb-10 max-w-prose">
            O que costuma fazer mais sentido para o perfil do bairro.
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {bairro.emphasis.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col p-7 rounded-2xl border border-line bg-cream-50 hover:border-bronze/30 hover:shadow-md transition-all duration-400 ease-soft"
              >
                <p className="font-sans font-medium text-moss group-hover:text-bronze transition-colors duration-300">
                  {item.title}
                </p>
                <p className="mt-2 text-small text-muted leading-relaxed flex-1">{item.reason}</p>
                <span className="mt-4 text-small text-bronze group-hover:text-bronze-400 transition-colors">
                  Conhecer →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Como chegar */}
      <Section tone="sand">
        <Container narrow>
          <Eyebrow>Como chegar</Eyebrow>
          <Heading as="h2" size="h2" className="mt-4">
            De {bairro.name} até a casa.
          </Heading>
          <div className="mt-6 space-y-4 text-body text-ink/80 leading-relaxed">
            {bairro.howToArrive.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <address className="mt-8 not-italic text-body text-muted font-sans">
            Av. República do Líbano, 251 — RioMar Trade Center, Torre 4. Pina, Recife — PE.
          </address>
          <p className="mt-2">
            <Link
              href={ROUTES.endereco}
              className="text-small text-bronze hover:text-bronze-400 transition-colors"
            >
              Ver mapa e rotas completas →
            </Link>
          </p>
        </Container>
      </Section>

      {/* Todas as verticais */}
      <Section tone="cream">
        <Container>
          <Eyebrow>Todas as frentes de cuidado</Eyebrow>
          <Heading as="h2" size="h2" className="mt-4 mb-8 max-w-prose">
            Atendemos presencialmente em {bairro.name} (no Pina) e online.
          </Heading>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Psicoterapia', href: ROUTES.psicoterapia },
              { label: 'Hipnoterapia clínica', href: ROUTES.hipnoterapia },
              { label: 'Teste vocacional', href: ROUTES.testeVocacional },
              { label: 'Orientação familiar', href: ROUTES.orientacaoFamiliar },
              { label: 'Método V', href: ROUTES.metodoV },
              { label: 'Método C', href: ROUTES.metodoC },
              { label: 'Atendimento online', href: ROUTES.atendimentoOnline },
            ].map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="px-4 py-2 rounded-full border border-line bg-cream-50 text-small font-sans text-moss hover:border-bronze/40 hover:text-bronze transition-colors duration-300"
              >
                {v.label}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="moss" size="md">
        <Container>
          <div className="max-w-prose-wide">
            <Eyebrow tone="muted">Comece quando quiser</Eyebrow>
            <Heading as="h2" size="h1" className="mt-5 text-cream">
              Pronto para a primeira conversa?
            </Heading>
            <p className="mt-4 text-lead text-cream/70">
              Atendemos quem vive em {bairro.name} presencialmente no Pina ou online.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary">
                <Link href={ROUTES.agendar}>Agendar</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
