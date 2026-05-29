'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

interface VerticalDefinitionProps {
  eyebrow?: string;
  headline?: string;
  children: React.ReactNode;
  tone?: 'cream' | 'sand';
}

export function VerticalDefinition({
  eyebrow,
  headline,
  children,
  tone = 'cream',
}: VerticalDefinitionProps) {
  return (
    <Section tone={tone}>
      <Container narrow>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          {eyebrow && (
            <motion.div variants={fadeInUp}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </motion.div>
          )}
          {headline && (
            <motion.div variants={fadeInUp}>
              <Heading as="h2" size="h1" className="mt-4">
                {headline}
              </Heading>
            </motion.div>
          )}
          <motion.div variants={fadeInUp} className="mt-8 space-y-5 text-body text-ink/80 leading-relaxed">
            {children}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
