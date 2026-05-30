'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, stagger, viewportConfig } from '@/lib/motion';

export interface SenseData {
  sense: string;          // Nome do sentido em maiúsculas
  headline: string;       // Frase curta do conceito
  body: string;           // 2-3 frases descritivas
  imageSrc: string;       // Caminho da imagem
  imageAlt: string;
  reverse?: boolean;      // Inverte a ordem texto/imagem
}

export function FiveSensesBlock({ sense, headline, body, imageSrc, imageAlt, reverse }: SenseData) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={stagger}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center py-section-sm border-b border-line last:border-0`}
    >
      {/* Imagem */}
      <motion.div
        variants={fadeIn}
        className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand ${reverse ? 'lg:order-last' : ''}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Texto */}
      <div className={reverse ? 'lg:order-first' : ''}>
        <motion.p variants={fadeInUp} className="text-eyebrow font-semibold uppercase tracking-[0.15em] text-bronze-400">
          {sense}
        </motion.p>
        <motion.h3 variants={fadeInUp} className="mt-4 font-serif text-h2 text-moss text-balance">
          {headline}
        </motion.h3>
        <motion.p variants={fadeInUp} className="mt-5 text-body text-ink/75 leading-relaxed">
          {body}
        </motion.p>
      </div>
    </motion.div>
  );
}
