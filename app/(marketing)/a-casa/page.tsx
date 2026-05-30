import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'A Casa · VCare Essence',
  description:
    'Conheça a VCare Essence — a primeira clínica sensorial de Recife. Ambiente projetado para os cinco sentidos, no RioMar Trade Center, Torre 4, Pina.',
  alternates: { canonical: ROUTES.aCasa },
};

const CARDS = [
  {
    title: 'Experiência Sensorial',
    description: 'Como o ambiente é projetado para os cinco sentidos — e por que isso é parte do cuidado.',
    href: ROUTES.experienciaSensorial,
    imageSrc: '/images/ambiente/sala-01-teto-led-sensorial.webp',
    imageAlt: 'Sala de atendimento sob o céu estrelado em fibra óptica, com luz quente',
    featured: true,
  },
  {
    title: 'Endereço',
    description: 'RioMar Trade Center, Torre 4. Pina, Recife. Como chegar.',
    href: ROUTES.endereco,
    imageSrc: '/images/ambiente/entrada-vcare-essence.webp',
    imageAlt: 'Entrada da VCare Essence com logo retroiluminado e corredor',
    featured: false,
  },
  {
    title: 'Tour pela Casa',
    description: 'Galeria editorial do espaço — salas, recepção, detalhes.',
    href: ROUTES.tour,
    imageSrc: '/images/ambiente/sala-02-iluminacao-dia-vista.webp',
    imageAlt: 'Sala de atendimento com janela ampla e vista da cidade',
    featured: false,
  },
] as const;

export default function ACasaPage() {
  return (
    <>
      <Section tone="cream" size="md" className="border-b border-line">
        <Container>
          <Eyebrow>A Casa</Eyebrow>
          <Heading as="h1" size="display-md" className="mt-5 max-w-prose-wide">
            A casa boutique da mente.
          </Heading>
          <p className="mt-6 text-lead text-ink/70 max-w-prose">
            A VCare Essence não é uma clínica como as outras. O ambiente é parte do tratamento —
            não cenário. Cada detalhe foi projetado para que o cuidado comece antes da primeira
            palavra ser dita.
          </p>
        </Container>
      </Section>

      {/* Cards das subpáginas */}
      <Section tone="sand">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`group block rounded-2xl overflow-hidden border border-line bg-cream hover:border-bronze/30 hover:shadow-lg transition-all duration-400 ease-soft ${card.featured ? 'md:col-span-2' : ''}`}
              >
                <div className={`relative bg-sand ${card.featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes={card.featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-sans font-medium text-moss group-hover:text-bronze-400 transition-colors duration-300">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-small text-muted leading-relaxed">{card.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-small text-bronze group-hover:text-bronze-400 transition-colors font-sans">
                    Explorar →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* O conceito */}
          <div className="max-w-prose-wide border-t border-line pt-14">
            <Eyebrow>Uma categoria nova</Eyebrow>
            <Heading as="h2" size="h1" className="mt-4">
              Por que chamamos de clínica boutique sensorial.
            </Heading>
            <div className="mt-8 space-y-5 text-body text-ink/80 leading-relaxed">
              <p>
                Uma clínica boutique não tem esse nome por ser pequena. Tem esse nome porque
                cada escolha foi curada — o espaço, os profissionais, os métodos, os materiais,
                a luz, o aroma.
              </p>
              <p>
                Sensorial porque o ambiente não é neutro. Ele foi projetado para os cinco sentidos
                com intenção clínica: para que o corpo comece a relaxar antes da primeira palavra,
                para que a mente entre em estado de cuidado desde o momento da chegada.
              </p>
              <p>
                Essa combinação — cuidado boutique com projeto sensorial — não existe em outra
                clínica de saúde mental em Recife. É o que nos permite afirmar: a primeira clínica
                sensorial da cidade.
              </p>
            </div>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href={ROUTES.agendar}>Agendar uma visita</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
