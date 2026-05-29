'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

interface VerticalForWhoProps {
  headline?: string;
  indications: string[];
  intro?: string;
  tone?: 'cream' | 'sand';
  label?: string;
}

export function VerticalForWho({
  headline = 'Para quem é',
  indications,
  intro,
  tone = 'sand',
  label = 'Indicações',
}: VerticalForWhoProps) {
  return (
    <Section tone={tone}>
      <Container narrow>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow>{label}</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="h1" className="mt-4">
              {headline}
            </Heading>
          </motion.div>
          {intro && (
            <motion.p variants={fadeInUp} className="mt-6 text-lead text-ink/70">
              {intro}
            </motion.p>
          )}
          <motion.div variants={fadeInUp} className="mt-8 space-y-3">
            {indications.map((item) => (
              <div key={item} className="flex items-start gap-4 py-4 border-b border-line last:border-0">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-bronze" aria-hidden="true" />
                <p className="text-body text-ink/80">{item}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
