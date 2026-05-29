'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

interface VerticalNotForWhoProps {
  items: string[];
  tone?: 'cream' | 'sand';
}

export function VerticalNotForWho({ items, tone = 'cream' }: VerticalNotForWhoProps) {
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
            <Eyebrow>Quando não é indicado</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="h2" className="mt-4">
              A honestidade sobre os limites faz parte do cuidado.
            </Heading>
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-8 space-y-3">
            {items.map((item) => (
              <div key={item} className="flex items-start gap-4 py-3 border-b border-line last:border-0">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-line" aria-hidden="true" />
                <p className="text-body text-ink/70">{item}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
