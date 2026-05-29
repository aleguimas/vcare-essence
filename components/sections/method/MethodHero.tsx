'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { fadeInUp, stagger } from '@/lib/motion';

interface MethodHeroProps {
  eyebrow: string;
  headline: React.ReactNode;
  subheadline?: string;
  /** Sem CTA — esta seção qualifica, não vende */
  professionalPhoto?: React.ReactNode;
}

export function MethodHero({ eyebrow, headline, subheadline, professionalPhoto }: MethodHeroProps) {
  return (
    <Section tone="cream" size="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-prose-wide"
          >
            <motion.div variants={fadeInUp}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-5 font-serif text-display-lg text-moss text-balance leading-tight"
            >
              {headline}
            </motion.h1>

            {subheadline && (
              <motion.p variants={fadeInUp} className="mt-6 text-lead text-ink/70 max-w-prose">
                {subheadline}
              </motion.p>
            )}
          </motion.div>

          {professionalPhoto && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="hidden lg:block"
            >
              {professionalPhoto}
            </motion.div>
          )}
        </div>
      </Container>
    </Section>
  );
}
