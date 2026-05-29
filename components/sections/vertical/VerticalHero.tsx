'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { fadeInUp, stagger } from '@/lib/motion';

interface VerticalHeroProps {
  eyebrow: string;
  headline: string;
  subtitle?: string;
}

export function VerticalHero({ eyebrow, headline, subtitle }: VerticalHeroProps) {
  return (
    <Section tone="cream" size="md" className="border-b border-line">
      <Container>
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
            className="mt-5 font-serif text-display-md text-moss text-balance"
          >
            {headline}
          </motion.h1>
          {subtitle && (
            <motion.p variants={fadeInUp} className="mt-6 text-lead text-ink/70 max-w-prose">
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
