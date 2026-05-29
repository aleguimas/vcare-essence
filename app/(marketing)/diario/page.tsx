import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Diário VCare · Em breve',
  description:
    'Conversas que ajudam a entender o que se passa por dentro. O Diário VCare estará disponível em breve.',
  alternates: { canonical: ROUTES.diario },
  robots: { index: false, follow: false },
};

// Sprint 08 — CMS desabilitado por decisão do cliente.
// O Diário será implementado (Sanity ou MDX) em momento posterior.

const CATEGORIES = [
  'Trava & Empresariedade',
  'Direção & Carreira',
  'Adolescência & Estudos',
  'Mente em Transição',
  'Saúde Mental Sem Mistério',
];

export default function DiarioPage() {
  return (
    <Section tone="cream" size="lg">
      <Container narrow>
        <Eyebrow>Diário VCare</Eyebrow>
        <Heading as="h1" size="display-md" className="mt-5">
          Conversas que ajudam a entender o que se passa por dentro.
        </Heading>

        <p className="mt-8 text-lead text-ink/70 leading-relaxed">
          O Diário VCare está sendo preparado com cuidado — e em breve você encontrará aqui
          textos autorais de Vanessa Albuquerque e Camila Clemente sobre saúde mental, trava
          emocional, adolescência e escolhas de vida.
        </p>

        <div className="mt-12 border-t border-line pt-10">
          <p className="text-small font-semibold uppercase tracking-[0.15em] text-bronze mb-6">
            Pilares editoriais
          </p>
          <ul className="space-y-3">
            {CATEGORIES.map((cat) => (
              <li key={cat} className="flex items-center gap-3 text-body text-ink/70 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze/40 shrink-0" aria-hidden="true" />
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-small text-muted font-sans italic">
          Não perca — acompanhe pelo Instagram quando os primeiros textos forem publicados.
        </p>
      </Container>
    </Section>
  );
}
