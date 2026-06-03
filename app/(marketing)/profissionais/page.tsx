import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Profissionais · VCare Essence',
  description:
    'Conheça Vanessa Albuquerque e Camila Clemente, as fundadoras da VCare Essence. Hipnoterapeuta e psicóloga com abordagens autorais em saúde mental no RioMar Trade Center, Recife.',
  alternates: { canonical: ROUTES.profissionais },
};

const PROFESSIONALS = [
  {
    name: 'Vanessa Albuquerque',
    title: 'Hipnoterapeuta',
    experience: '14 anos de prática',
    crp: 'CRP XX/XXXXX', // TODO: aguardar dados das sócias
    signature: 'Não trato sintomas. Vou à raiz.',
    href: ROUTES.vanessa,
    imgSrc: '/images/profissionais/vanessa-albuquerque-vcare-essence-01.webp',
    imgAlt: 'Vanessa Albuquerque, hipnoterapeuta da VCare Essence — ensaio editorial',
  },
  {
    name: 'Camila Clemente',
    title: 'Psicóloga',
    experience: '10 anos de prática',
    crp: 'CRP XX/XXXXX', // TODO: aguardar dados das sócias
    signature: 'Trato a falta de resultado como falta de motivação — não como preguiça.',
    href: ROUTES.camila,
    imgSrc: '/images/profissionais/camila-clemente-vcare-essence-01.webp',
    imgAlt: 'Camila Clemente, psicóloga da VCare Essence — ensaio editorial',
  },
] as const;

export default function ProfissionaisPage() {
  return (
    <>
      <Section tone="cream" size="md" className="border-b border-line">
        <Container>
          <Eyebrow>Profissionais</Eyebrow>
          <Heading as="h1" size="display-md" className="mt-5 max-w-prose-wide">
            Quem recebe você aqui.
          </Heading>
          <p className="mt-6 text-lead text-ink/70 max-w-prose">
            A VCare Essence não é uma clínica de passagem. Cada profissional foi escolhido pelo
            que faz, por como faz, e pelo alinhamento com o que a casa representa.
          </p>
        </Container>
      </Section>

      {/* Cards das fundadoras */}
      <Section tone="sand">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {PROFESSIONALS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group block rounded-2xl overflow-hidden border border-line bg-cream hover:border-bronze/30 hover:shadow-lg transition-all duration-400 ease-soft"
              >
                {/* Foto editorial */}
                <div className="relative aspect-[4/3] bg-sand-100 overflow-hidden">
                  <Image
                    src={p.imgSrc}
                    alt={p.imgAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 ease-soft group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-7">
                  <h2 className="font-serif text-h2 text-moss group-hover:text-bronze-400 transition-colors duration-300">
                    {p.name}
                  </h2>
                  <p className="mt-1.5 text-small text-muted font-sans">
                    {p.title} · {p.experience} · {p.crp}
                  </p>
                  <blockquote className="mt-4 font-serif italic text-body text-moss/70 border-l-2 border-bronze/40 pl-4">
                    &ldquo;{p.signature}&rdquo;
                  </blockquote>
                  <span className="inline-flex items-center gap-1.5 mt-5 text-small text-bronze font-sans font-medium group-hover:text-bronze-400 transition-colors">
                    Ver perfil completo →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Curadoria / convidados */}
          <div className="border-t border-line pt-12">
            <div className="max-w-prose-wide">
              <Eyebrow>Curadoria</Eyebrow>
              <Heading as="h2" size="h2" className="mt-4">
                Profissionais convidados em residência.
              </Heading>
              <p className="mt-5 text-body text-ink/70 leading-relaxed">
                A casa recebe profissionais de saúde mental sob curadoria — não por locação. Cada
                convidado(a) é escolhido(a) pela abordagem, pela ética e pelo alinhamento com o
                que a VCare Essence representa. Não é qualquer profissional que ocupa esse espaço.
              </p>
              <Link
                href={ROUTES.convidados}
                className="inline-flex items-center gap-2 mt-6 text-bronze font-sans font-medium hover:text-bronze-400 transition-colors duration-300 group"
              >
                Conhecer os convidados
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
