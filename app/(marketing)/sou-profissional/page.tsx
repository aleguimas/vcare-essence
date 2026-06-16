import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Sou Profissional · VCare Essence',
  description:
    'Programa de residência para profissionais de saúde mental e sala premium para criadores de conteúdo. RioMar Trade Center, Recife.',
  alternates: { canonical: ROUTES.souProfissional },
};

export default function SouProfissionalPage() {
  return (
    <>
      <Section tone="cream" size="md" className="border-b border-line">
        <Container>
          <Eyebrow>Sou Profissional</Eyebrow>
          <Heading as="h1" size="display-md" className="mt-5 max-w-prose-wide">
            Uma clínica para quem busca se diferenciar.
          </Heading>
          <p className="mt-6 text-lead text-ink/70 max-w-prose">
            A VCare Essence oferece duas salas para sublocação, ideais para profissionais da saúde.
            Os espaços podem ser usados para atendimentos, reuniões e também para gravação de
            conteúdos, com um ambiente estruturado, estético e com identidade profissional.
          </p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Consultório residente */}
            <Link
              href={ROUTES.consultorioResidente}
              className="group block rounded-2xl overflow-hidden border border-line bg-cream hover:border-bronze/30 hover:shadow-lg transition-all duration-400 ease-soft"
            >
              <div className="aspect-[4/3] bg-sand-100 relative">
                <div className="absolute inset-0 flex items-end p-5">
                  <p className="text-small text-muted/40 font-sans italic">Foto da sala, Sprint 06</p>
                </div>
              </div>
              <div className="p-8">
                <Eyebrow>Para clínicos</Eyebrow>
                <Heading as="h2" size="h2" className="mt-3">
                  Consultório Residente
                </Heading>
                <p className="mt-4 text-body text-ink/70 leading-relaxed">
                  Não é locação de sala. É curadoria, você entra numa clínica que tem marca,
                  narrativa e cuidado. Psicólogos, psiquiatras, terapeutas e afins com formação
                  consolidada.
                </p>
                <span className="inline-flex items-center gap-2 mt-6 text-bronze font-sans font-medium group-hover:text-bronze-400 transition-colors">
                  Saber mais e candidatar-se →
                </span>
              </div>
            </Link>

            {/* Sala de gravações */}
            <Link
              href={ROUTES.salaGravacoes}
              className="group block rounded-2xl overflow-hidden border border-line bg-cream hover:border-bronze/30 hover:shadow-lg transition-all duration-400 ease-soft"
            >
              <div className="aspect-[4/3] bg-sand-100 relative">
                <div className="absolute inset-0 flex items-end p-5">
                  <p className="text-small text-muted/40 font-sans italic">Foto da sala, Sprint 06</p>
                </div>
              </div>
              <div className="p-8">
                <Eyebrow>Para criadores</Eyebrow>
                <Heading as="h2" size="h2" className="mt-3">
                  Sala para Gravações
                </Heading>
                <p className="mt-4 text-body text-ink/70 leading-relaxed">
                  Cenário com atmosfera e endereço premium. Para vídeos, podcasts, mentorias e
                  reuniões estratégicas. Você traz seu equipamento, a gente oferece o espaço.
                </p>
                <span className="inline-flex items-center gap-2 mt-6 text-bronze font-sans font-medium group-hover:text-bronze-400 transition-colors">
                  Saber mais e reservar →
                </span>
              </div>
            </Link>
          </div>

          {/* Curadoria */}
          <div className="mt-16 max-w-prose-wide border-t border-line pt-12">
            <Eyebrow>Nosso critério</Eyebrow>
            <Heading as="h2" size="h2" className="mt-4">
              Curadoria, não locação.
            </Heading>
            <p className="mt-5 text-body text-ink/70 leading-relaxed">
              Qualquer espaço pode ser alugado. A VCare Essence faz seleção ativa, cada
              profissional que entra aqui passa por uma conversa de alinhamento de valores e
              abordagem. Não basta ter cadastro, não basta pagar. É necessário fit com o que a
              clínica representa.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
