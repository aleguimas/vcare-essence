import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Profissionais Convidados · VCare Essence',
  description:
    'A VCare Essence recebe profissionais de saúde mental sob curadoria. Não é locação, é convite. Saiba mais sobre o programa de residência clínica.',
  alternates: { canonical: ROUTES.convidados },
};

export default function ConvidadosPage() {
  return (
    <>
      <Section tone="cream" size="md" className="border-b border-line">
        <Container>
          <Eyebrow>Profissionais · Convidados</Eyebrow>
          <Heading as="h1" size="display-md" className="mt-5 max-w-prose-wide">
            Profissionais em residência da clínica.
          </Heading>
          <p className="mt-6 text-lead text-ink/70 max-w-prose">
            A clínica recebe clínicos selecionados, não por disponibilidade de sala, mas por
            alinhamento com o que a VCare Essence representa.
          </p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container narrow>
          <Eyebrow>O conceito</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4">
            Curadoria, não locação.
          </Heading>
          <div className="mt-8 space-y-5 text-body text-ink/80 leading-relaxed">
            <p>
              Qualquer espaço pode ser alugado. A VCare Essence escolheu um caminho diferente:
              os profissionais que atendem aqui são convidados, avaliados pela formação, pela
              abordagem clínica e pelo alinhamento com os princípios da clínica.
            </p>
            <p>
              Isso significa que um paciente que chega à VCare Essence, seja para psicoterapia,
              hipnoterapia ou qualquer outra vertical, encontra um padrão de cuidado consistente,
              independentemente de qual profissional o atende. A clínica é uma curadoria viva.
            </p>
            <p>
              Atualmente, os atendimentos são conduzidos pelas fundadoras Vanessa Albuquerque e
              Camila Clemente. Novos profissionais convidados estão sendo integrados conforme a
              clínica cresce.
            </p>
          </div>

          {/* Placeholder, em breve */}
          <div className="mt-14 p-8 rounded-2xl border border-dashed border-bronze/30 bg-cream text-center">
            <p className="font-serif italic text-h3 text-moss/60">
              Em breve: novos profissionais sendo convidados para integrar a clínica.
            </p>
          </div>

          {/* Link para sou-profissional */}
          <div className="mt-14 pt-10 border-t border-line">
            <p className="text-body text-ink/70">
              Você é profissional de saúde mental e gostaria de fazer parte da clínica?
            </p>
            <Link
              href={ROUTES.consultorioResidente}
              className="inline-flex items-center gap-2 mt-4 text-bronze font-sans font-medium hover:text-bronze-400 transition-colors duration-300 group"
            >
              Conheça o programa de residência
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
