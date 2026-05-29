'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

interface ProfessionalBioProps {
  headline?: string;
  children: React.ReactNode;
  tone?: 'cream' | 'sand';
}

export function ProfessionalBio({ headline, children, tone = 'cream' }: ProfessionalBioProps) {
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
            <Eyebrow>Quem sou</Eyebrow>
          </motion.div>
          {headline && (
            <motion.div variants={fadeInUp}>
              <Heading as="h2" size="h1" className="mt-4">
                {headline}
              </Heading>
            </motion.div>
          )}
          <motion.div
            variants={fadeInUp}
            className="mt-8 space-y-5 text-body text-ink/80 leading-relaxed font-sans"
          >
            {children}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
