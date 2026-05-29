import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { Quote } from '@/components/editorial/Quote';
import { Callout } from '@/components/editorial/Callout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = { title: 'Styleguide · VCare Essence (dev)' };

export default function StyleguidePage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-moss/10 border-b border-line px-6 py-3">
        <p className="text-small text-muted font-sans">
          <strong className="text-moss">Dev:</strong> esta página não é indexada e não aparece no
          sitemap. Use para revisar a identidade visual.
        </p>
      </div>

      {/* ── Paleta ────────────────────────────────────────────────────── */}
      <Section tone="cream" size="sm">
        <Container>
          <Eyebrow>Design System</Eyebrow>
          <Heading as="h1" size="h1" className="mt-3 mb-8">
            Paleta
          </Heading>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: 'cream', hex: '#F5F1EA', class: 'bg-cream border border-line' },
              { name: 'sand', hex: '#D9CFBE', class: 'bg-sand' },
              { name: 'bronze', hex: '#8C7853', class: 'bg-bronze' },
              { name: 'moss', hex: '#3A4A3F', class: 'bg-moss' },
              { name: 'navy', hex: '#1F2A44', class: 'bg-navy' },
              { name: 'ink', hex: '#1A1A1A', class: 'bg-ink' },
              { name: 'muted', hex: '#6B6B6B', class: 'bg-muted' },
              { name: 'line', hex: '#E5E0D6', class: 'bg-line border border-sand' },
            ].map((c) => (
              <div key={c.name}>
                <div className={`h-16 rounded-lg ${c.class}`} />
                <p className="mt-2 text-small font-sans font-medium text-ink">{c.name}</p>
                <p className="text-small text-muted font-sans">{c.hex}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Tipografia ───────────────────────────────────────────────── */}
      <Section tone="sand" size="sm">
        <Container>
          <Heading as="h2" size="h2" className="mb-8">
            Tipografia
          </Heading>
          <div className="space-y-6">
            <div>
              <Eyebrow className="mb-2">display-xl · Fraunces serif</Eyebrow>
              <p className="text-display-xl font-serif text-moss leading-none">Por dentro.</p>
            </div>
            <div>
              <Eyebrow className="mb-2">display-lg</Eyebrow>
              <p className="text-display-lg font-serif text-moss">Por dentro é onde tudo começa.</p>
            </div>
            <div>
              <Eyebrow className="mb-2">display-md</Eyebrow>
              <p className="text-display-md font-serif text-moss">
                A primeira clínica sensorial de Recife.
              </p>
            </div>
            <div>
              <Eyebrow className="mb-2">h1</Eyebrow>
              <Heading as="h1" size="h1">
                O ambiente é parte do tratamento.
              </Heading>
            </div>
            <div>
              <Eyebrow className="mb-2">h2</Eyebrow>
              <Heading as="h2" size="h2">
                Cada essência pede um cuidado diferente.
              </Heading>
            </div>
            <div>
              <Eyebrow className="mb-2">h3</Eyebrow>
              <Heading as="h3" size="h3" serif={false}>
                Método V — para empresários com uma trava emocional.
              </Heading>
            </div>
            <div>
              <Eyebrow className="mb-2">lead · Inter sans</Eyebrow>
              <p className="text-lead text-ink">
                Casa boutique de saúde mental no RioMar Trade Center. A primeira clínica sensorial
                de Recife.
              </p>
            </div>
            <div>
              <Eyebrow className="mb-2">body</Eyebrow>
              <p className="text-body text-ink max-w-prose">
                Antes de qualquer palavra ser dita, o corpo já recebeu sinais de segurança. A luz
                baixa relaxa, o aroma ancora a memória, o som abafa a cidade, a textura convida ao
                toque.
              </p>
            </div>
            <div>
              <Eyebrow className="mb-2">small · muted</Eyebrow>
              <p className="text-small text-muted">
                Recife, PE · RioMar Trade Center, Torre 4
              </p>
            </div>
            <div>
              <Eyebrow className="mb-2">eyebrow</Eyebrow>
              <Eyebrow>Uma categoria nova em Recife</Eyebrow>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Botões ───────────────────────────────────────────────────── */}
      <Section tone="cream" size="sm">
        <Container>
          <Heading as="h2" size="h2" className="mb-8">
            Botões
          </Heading>
          <div className="space-y-6">
            <div>
              <Eyebrow className="mb-4">Variantes</Eyebrow>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
            <div>
              <Eyebrow className="mb-4">Tamanhos</Eyebrow>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="sm">Pequeno</Button>
                <Button size="md">Médio</Button>
                <Button size="lg">Grande</Button>
              </div>
            </div>
            <div>
              <Eyebrow className="mb-4">Com asChild (Link)</Eyebrow>
              <div className="flex flex-wrap gap-4 items-center">
                <Button asChild size="lg">
                  <Link href="/">Conhecer a casa</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/">Agendar uma conversa</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Componentes editoriais ───────────────────────────────────── */}
      <Section tone="sand" size="sm">
        <Container narrow>
          <Heading as="h2" size="h2" className="mb-8">
            Componentes Editoriais
          </Heading>

          <Eyebrow className="mb-4">Quote</Eyebrow>
          <Quote author="Empresária, 42 anos · Boa Viagem">
            Eu não voltei à terapia depois da última. Aqui foi diferente desde o cheiro da
            recepção. Demorei a entender que isso fazia parte.
          </Quote>

          <Eyebrow className="mt-8 mb-4">Callout</Eyebrow>
          <Callout title="Importante">
            A hipnoterapia clínica é uma abordagem regulamentada e baseada em evidências. Não é
            espetáculo, não é misticismo — é acesso ao inconsciente com método.
          </Callout>
        </Container>
      </Section>

      {/* ── Sections ────────────────────────────────────────────────── */}
      <Section tone="moss" size="sm">
        <Container>
          <Heading as="h2" size="h2" className="mb-2 text-cream">
            Section — tone moss
          </Heading>
          <p className="text-lead text-cream/70">
            Usado para seções de alto contraste e CTAs finais de página.
          </p>
        </Container>
      </Section>
    </div>
  );
}
