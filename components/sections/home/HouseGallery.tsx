'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { ROUTES } from '@/lib/routes';
import { scaleIn, fadeInUp, stagger, viewportConfig } from '@/lib/motion';

// Fotos reais do espaço da VCare Essence
const GALLERY_ITEMS = [
  {
    src: '/images/ambiente/sala-01-teto-led-sensorial.webp',
    alt: 'Sala de atendimento sob o céu estrelado em fibra óptica, com luz quente e poltronas claras',
    aspect: 'row-span-2',
    sizes: '(max-width: 768px) 100vw, 40vw',
  },
  {
    src: '/images/ambiente/entrada-vcare-essence.webp',
    alt: 'Entrada da VCare Essence com logo retroiluminado em parede de madeira',
    aspect: '',
    sizes: '(max-width: 768px) 100vw, 30vw',
  },
  {
    src: '/images/ambiente/sala-02-iluminacao-dia-vista.webp',
    alt: 'Sala de atendimento com janela ampla e vista da cidade ao entardecer',
    aspect: '',
    sizes: '(max-width: 768px) 100vw, 30vw',
  },
  {
    src: '/images/ambiente/sala-01-iluminacao-dia.webp',
    alt: 'Sala de atendimento à luz do dia, com madeira, mármore e materiais naturais',
    aspect: '',
    sizes: '(max-width: 768px) 100vw, 30vw',
  },
  {
    src: '/images/ambiente/sala-02-teto-led-sensorial.webp',
    alt: 'Detalhe do teto com efeito de céu estrelado em fibra óptica',
    aspect: '',
    sizes: '(max-width: 768px) 100vw, 30vw',
  },
] as const;

export function HouseGallery() {
  return (
    <Section tone="sand">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
          className="mb-10"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow>O espaço</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-serif text-h1 text-moss text-balance max-w-prose"
          >
            Luz, silêncio e detalhe — projetados para o cuidado.
          </motion.h2>
        </motion.div>

        {/* Grid desktop assimétrico */}
        <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-3 h-[600px]">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={scaleIn}
              className={`relative rounded-xl overflow-hidden bg-sand-100 ${item.aspect}`}
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={item.sizes}
                  className="object-cover object-center"
                />
              ) : (
                <div className="absolute inset-0 flex items-end p-4">
                  <p className="text-small text-muted/50 italic font-sans">
                    Foto — Sprint 06
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Carrossel mobile */}
        <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-none">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="shrink-0 w-72 aspect-[4/3] relative rounded-xl overflow-hidden bg-sand-100 snap-start"
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="288px"
                  className="object-cover object-center"
                />
              ) : (
                <div className="absolute inset-0 flex items-end p-4">
                  <p className="text-small text-muted/50 italic font-sans">Foto — Sprint 06</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <p className="text-small text-muted font-sans">
            RioMar Trade Center, Torre 4 — Pina, Recife. Estacionamento e acessibilidade.
          </p>
          <Link
            href={ROUTES.tour}
            className="inline-flex items-center gap-2 text-bronze font-sans font-medium hover:text-bronze-400 transition-colors duration-300 group shrink-0"
          >
            Ver tour completo
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
