'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { fadeInUp, fadeIn, stagger } from '@/lib/motion';

interface ProfessionalHeroProps {
  name: string;
  title: string;
  subtitle: string;
  crp: string;
  cfp?: string;
  imageSrc?: string;
  imageAlt: string;
}

export function ProfessionalHero({
  name,
  title,
  subtitle,
  crp,
  cfp,
  imageSrc,
  imageAlt,
}: ProfessionalHeroProps) {
  return (
    <Section tone="cream" size="lg" className="border-b border-line overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          {/* Foto editorial */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative order-last lg:order-first"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-sand">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              ) : (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-end p-8"
                  aria-label={imageAlt}
                >
                  <p className="text-small text-muted/50 font-sans italic text-center">
                    Ensaio editorial, em produção
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Texto principal */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="pb-8"
          >
            <motion.p
              variants={fadeInUp}
              className="text-eyebrow font-semibold uppercase tracking-[0.15em] text-bronze-400"
            >
              Profissional · VCare Essence
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="mt-5 font-serif text-display-lg text-moss text-balance"
            >
              {name}
            </motion.h1>

            <motion.div variants={fadeInUp} className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
              <span className="text-lead text-ink/70 font-sans">{title}</span>
              <span className="text-lead text-muted font-sans" aria-hidden="true">·</span>
              <span className="text-lead text-ink/70 font-sans">{subtitle}</span>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-3 text-small text-muted font-sans">
              {crp}
            </motion.p>
            {cfp && (
              <motion.p variants={fadeInUp} className="mt-1 text-small text-muted font-sans">
                {cfp}
              </motion.p>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
