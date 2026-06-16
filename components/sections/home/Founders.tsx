'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';
import { fadeInUp, fadeIn, stagger, viewportConfig } from '@/lib/motion';

const FOUNDERS = [
  {
    name: 'Vanessa Albuquerque',
    role: 'Hipnoterapeuta',
    experience: '14 anos de prática',
    quote: 'Acesso a raiz e destravo o que te impede de avançar com Método Exclusivo e resultado imediato.',
    cta: 'Conhecer Vanessa',
    href: ROUTES.vanessa,
    imgSrc: '/images/profissionais/vanessa-albuquerque-vcare-essence-01.webp',
    imgAlt:
      'Vanessa Albuquerque, hipnoterapeuta da VCare Essence, foto editorial em ambiente da clínica',
  },
  {
    name: 'Camila Clemente',
    role: 'Psicóloga',
    experience: '10 anos de prática',
    quote: 'Trato a falta de resultado como falta de motivação, não como preguiça.',
    cta: 'Conhecer Camila',
    href: ROUTES.camila,
    imgSrc: '/images/profissionais/camila-clemente-vcare-essence-01.webp',
    imgAlt:
      'Camila Clemente, psicóloga da VCare Essence, foto editorial em ambiente da clínica',
  },
] as const;

export function Founders() {
  return (
    <Section tone="cream">
      <Container>
        {/* Intro, foto das duas juntas + apresentação */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeIn}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-sand"
          >
            <Image
              src="/images/profissionais/camila-e-vanessa-01.webp"
              alt="Vanessa Albuquerque e Camila Clemente, fundadoras da VCare Essence, na entrada da clínica"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <Eyebrow>Quem recebe você aqui</Eyebrow>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Heading as="h2" size="h1" className="mt-4">
                As fundadoras
              </Heading>
            </motion.div>
            {/* rascunho, aguardar validação das sócias */}
            <motion.p variants={fadeInUp} className="mt-6 text-lead text-ink/80 max-w-prose">
              Duas práticas que não se confundem, sob o mesmo teto. Cada uma conduz um caminho,
              e foi essa diferença, não o acaso, que deu forma à clínica.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {FOUNDERS.map((founder, i) => (
            <motion.div
              key={founder.href}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              custom={i}
            >
              <FounderCard founder={founder} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mt-10 text-center"
        >
          <Link
            href={ROUTES.convidados}
            className="text-small text-muted hover:text-bronze-400 transition-colors duration-300"
          >
            Também recebemos profissionais convidados, sob curadoria. →
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}

function FounderCard({ founder }: { founder: (typeof FOUNDERS)[number] }) {
  return (
    <Link
      href={founder.href}
      className="group block rounded-2xl overflow-hidden border border-line hover:border-bronze/30 transition-all duration-400 ease-soft"
    >
      {/* Imagem editorial */}
      <div className="relative aspect-[4/5] bg-sand overflow-hidden">
        <Image
          src={founder.imgSrc}
          alt={founder.imgAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 ease-soft group-hover:scale-[1.03]"
        />
      </div>

      {/* Texto */}
      <div className="p-7 bg-cream">
        <Heading as="h3" size="h2">
          {founder.name}
        </Heading>
        <p className="mt-1.5 text-small text-muted font-sans">
          {founder.role} · {founder.experience}
        </p>
        <blockquote className="mt-4 font-serif italic text-body text-moss/80 leading-relaxed border-l-2 border-bronze pl-4">
          &ldquo;{founder.quote}&rdquo;
        </blockquote>
        <span className="inline-flex items-center gap-1.5 mt-5 text-small text-bronze font-sans font-medium group-hover:text-bronze-400 transition-colors duration-300">
          {founder.cta}
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
