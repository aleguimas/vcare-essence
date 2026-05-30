import type { Metadata } from 'next';
import Link from 'next/link';
import { SensoryGrid } from '@/components/sections/casa/SensoryGrid';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { Button } from '@/components/ui/button';
import { Quote } from '@/components/editorial/Quote';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'A Experiência Sensorial · A Casa · VCare Essence',
  description:
    'A VCare Essence é a primeira clínica sensorial de Recife. O ambiente é projetado para os cinco sentidos — e o ambiente é parte do tratamento.',
  alternates: { canonical: ROUTES.experienciaSensorial },
};

const SENSES = [
  {
    sense: 'Olfato',
    headline: 'Aroma como assinatura de marca.',
    body: 'Cada espaço da casa recebe um aroma cuidadosamente escolhido. O olfato é o sentido mais ligado à memória e à emoção — e o mais negligenciado pelas clínicas comuns. Aqui, o cheiro da recepção já começa o cuidado.',
    imageSrc: '/images/ambiente/entrada-vcare-essence.webp',
    imageAlt: 'Entrada da VCare Essence — recepção com logo retroiluminado e luz quente',
  },
  {
    sense: 'Audição',
    headline: 'A cidade fica do lado de fora.',
    body: 'Isolamento acústico real protege as conversas e bloqueia o ruído urbano. Entre as paredes, ou silêncio projetado ou trilha discreta — nunca rádio, nunca a conversa de outro consultório infiltrando.',
    imageSrc: '/images/ambiente/sala-02-iluminacao-dia-vista.webp',
    imageAlt: 'Sala de atendimento com janela ampla — a cidade vista de dentro do silêncio',
  },
  {
    sense: 'Visão',
    headline: 'Luz quente. Céu estrelado. Nenhuma luz fria.',
    body: 'Não há iluminação hospitalar aqui. A luz é quente, calibrada, suave. E olhe para cima na recepção: o céu estrelado em fibra óptica não é decoração — é a primeira pausa que a gente oferece.',
    imageSrc: '/images/ambiente/sala-02-teto-led-sensorial.webp',
    imageAlt: 'Teto da VCare Essence com efeito de céu estrelado em fibra óptica',
  },
  {
    sense: 'Tato',
    headline: 'Materiais que convidam ao toque.',
    body: 'Madeira, tecidos naturais, cerâmica, mantas. Temperatura constante. O corpo precisa se sentir abraçado antes de a mente conseguir falar — e os materiais da casa foram escolhidos com esse princípio.',
    imageSrc: '/images/ambiente/sala-01-iluminacao-dia.webp',
    imageAlt: 'Sala à luz do dia com madeira, mármore e tecidos naturais',
  },
  {
    sense: 'Paladar',
    headline: 'O ritual da chegada.',
    body: 'Água aromatizada, chá, café especial. Não é cortesia institucional. É o gesto que marca a transição entre o estado de pressa e o estado de cuidado — a pausa antes do começo.',
    imageSrc: '/images/ambiente/sala-01-angulo-2-iluminacao-dia.webp',
    imageAlt: 'Sala de atendimento da VCare Essence em outro ângulo, com mesa e poltronas',
  },
];

export default function ExperienciaSensorialPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="cream" size="lg" className="border-b border-line">
        <Container>
          <div className="max-w-prose-wide">
            <Eyebrow>A Casa · Experiência Sensorial</Eyebrow>
            <Heading as="h1" size="display-lg" className="mt-5">
              Cuidar começa antes da primeira palavra.
            </Heading>
            <p className="mt-6 text-lead text-ink/70 max-w-prose">
              O ambiente da VCare é projetado para os cinco sentidos. Porque cuidar do que está
              por dentro começa pelo que o corpo sente do lado de fora.
            </p>
          </div>
        </Container>
      </Section>

      {/* Por que o ambiente importa */}
      <Section tone="sand">
        <Container narrow>
          <Eyebrow>A tese clínica</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4">
            O estado mental se constrói pelos sentidos.
          </Heading>
          <div className="mt-8 space-y-5 text-body text-ink/80 leading-relaxed">
            <p>
              Antes de qualquer técnica terapêutica, existe uma condição prévia: o estado mental
              do paciente. Para que a hipnoterapia funcione, para que a psicoterapia produza
              insight, para que a orientação familiar gere escuta real — o corpo precisa primeiro
              sair do estado de alerta.
            </p>
            <p>
              E corpos em estado de alerta não mudam de estado porque alguém mandou. Mudam
              quando os sentidos recebem sinais de segurança. Luz quente. Silêncio. Cheiro
              familiar. Temperatura confortável. Algo gostoso para tomar.
            </p>
            <p>
              Para um público que vive em estado de alerta crônico — empresários sob pressão,
              adolescentes ansiosos, famílias em conflito — o desarme sensorial não é detalhe de
              experiência. É o início do processo terapêutico.
            </p>
          </div>

          <div className="mt-10">
            <Quote>
              Para um público que vive em estado de alerta — empresários sob pressão, adolescentes
              ansiosos, mulheres em sobrecarga — o desarme sensorial é, em si, terapêutico.
            </Quote>
          </div>
        </Container>
      </Section>

      {/* Os 5 sentidos */}
      <SensoryGrid senses={SENSES} />

      {/* Vantagem competitiva */}
      <Section tone="moss">
        <Container narrow>
          <Eyebrow tone="muted">Por que isso importa para você</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4 text-cream">
            Uma experiência sensorial não se replica em uma tarde.
          </Heading>
          <div className="mt-8 space-y-5 text-body text-cream/70 leading-relaxed">
            <p>
              Pode-se copiar uma palavra-chave, uma tagline, um post. Não se copia a sensação de
              entrar aqui sem refazer o próprio espaço do zero — o projeto acústico, a curadoria
              de aromas, o céu estrelado em fibra óptica, a escolha de cada material.
            </p>
            <p>
              Isso é vantagem competitiva difícil de replicar. E é a razão pela qual afirmamos,
              com convicção: a VCare Essence é a primeira clínica sensorial de Recife.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href={ROUTES.tour}>Ver o espaço</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href={ROUTES.agendar}>Agendar uma visita</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
