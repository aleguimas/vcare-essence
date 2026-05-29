'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

const FOUNDERS = [
  {
    name: 'Vanessa Albuquerque',
    role: 'Hipnoterapeuta',
    experience: '14 anos de prática',
    quote: 'Não trato sintomas. Vou à raiz.',
    cta: 'Conhecer Vanessa',
    href: ROUTES.vanessa,
    imgSrc: '/images/profissionais/vanessa-editorial-01.webp',
    imgAlt:
      'Vanessa Albuquerque, hipnoterapeuta da VCare Essence — foto editorial em ambiente da clínica',
    // TODO: ensaio editorial Sprint 05
  },
  {
    name: 'Camila Clemente',
    role: 'Psicóloga',
    experience: '10 anos de prática',
    quote: 'Trato a falta de resultado como falta de motivação — não como preguiça.',
    cta: 'Conhecer Camila',
    href: ROUTES.camila,
    imgSrc: '/images/profissionais/camila-editorial-01.webp',
    imgAlt:
      'Camila Clemente, psicóloga da VCare Essence — foto editorial em ambiente da clínica',
    // TODO: ensaio editorial Sprint 05
  },
] as const;

export function Founders() {
  return (
    <Section tone="cream">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow>Quem recebe você aqui</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="h1" className="mt-4">
              As fundadoras
            </Heading>
          </motion.div>
        </motion.div>

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
            className="text-small text-muted hover:text-bronze transition-colors duration-300"
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
      {/* Imagem editorial — placeholder até Sprint 05 */}
      <div className="relative aspect-[4/3] bg-sand overflow-hidden">
        {/* Placeholder com texto até chegarem os ensaios */}
        <div className="absolute inset-0 flex items-end p-6">
          <p className="text-small text-muted/60 font-sans italic">
            Ensaio editorial — Sprint 05
          </p>
        </div>
        {/* A imagem cobre o placeholder quando disponível */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={founder.imgSrc}
          alt={founder.imgAlt}
          className="absolute inset-0 w-full h-full object-cover object-top opacity-0 [&[src]]:opacity-100 transition-opacity duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
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
