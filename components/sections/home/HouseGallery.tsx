'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { VideoEmbed } from '@/components/media/VideoEmbed';
import { ROUTES, TOUR_VIDEO } from '@/lib/routes';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

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
            Experiência Sensorial, Alto Padrão e Exclusividade.
          </motion.h2>
        </motion.div>

        {/* Vídeo do tour */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <VideoEmbed videoId={TOUR_VIDEO.videoId} title={TOUR_VIDEO.title} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <p className="text-small text-muted font-sans">
            RioMar Trade Center, Torre 4, Pina, Recife. Estacionamento e acessibilidade.
          </p>
          <Link
            href={ROUTES.tour}
            className="inline-flex items-center gap-2 text-bronze font-sans font-medium hover:text-bronze-400 transition-colors duration-300 group shrink-0"
          >
            Ver fotos e tour completo
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
