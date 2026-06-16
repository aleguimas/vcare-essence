import type { Metadata } from 'next';
import Link from 'next/link';
import { Brain, Sparkles, Compass, Users, Monitor } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Cuidados · VCare Essence',
  description:
    'Psicoterapia, hipnoterapia clínica, teste vocacional e orientação familiar. Atendimento presencial em Recife e online. Conheça as verticais clínicas da VCare Essence.',
  alternates: { canonical: ROUTES.cuidados },
};

const VERTICALS = [
  {
    icon: Brain,
    label: 'Psicoterapia',
    description: 'Atendimento clínico individual para adolescentes e adultos.',
    href: ROUTES.psicoterapia,
  },
  {
    icon: Sparkles,
    label: 'Hipnoterapia Clínica',
    description: 'Para questões pontuais, com ciência, resultado rápido e eficaz.',
    href: ROUTES.hipnoterapia,
  },
  {
    icon: Compass,
    label: 'Teste Vocacional',
    description: 'Para adolescentes no pré-vestibular e adultos em reposicionamento.',
    href: ROUTES.testeVocacional,
  },
  {
    icon: Users,
    label: 'Orientação Familiar',
    description: 'Suporte estruturado para famílias em diferentes fases.',
    href: ROUTES.orientacaoFamiliar,
  },
  {
    icon: Monitor,
    label: 'Atendimento Online',
    description: 'Todas as verticais clínicas disponíveis online.',
    href: ROUTES.atendimentoOnline,
  },
] as const;

export default function CuidadosPage() {
  return (
    <>
      <Section tone="cream" size="md" className="border-b border-line">
        <Container>
          <Eyebrow>Cuidados</Eyebrow>
          <Heading as="h1" size="display-md" className="mt-5 max-w-prose-wide">
            Outros caminhos de cuidado.
          </Heading>
          <p className="mt-6 text-lead text-ink/70 max-w-prose">
            Além dos métodos autorais, a VCare Essence oferece quatro verticais clínicas. Cada uma
            com profissional responsável, abordagem definida e processo estruturado.
          </p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VERTICALS.map(({ icon: Icon, label, description, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col gap-4 p-7 bg-cream rounded-2xl border border-line hover:border-bronze/30 hover:shadow-md transition-all duration-400 ease-soft"
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-bronze group-hover:text-bronze-400 transition-colors"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-sans font-medium text-moss text-body">{label}</p>
                  <p className="mt-1.5 text-small text-muted leading-relaxed">{description}</p>
                </div>
                <span className="mt-auto text-small text-bronze font-sans group-hover:text-bronze-400 transition-colors">
                  Saber mais →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
