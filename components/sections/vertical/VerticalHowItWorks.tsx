'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

interface HowItWorksItem {
  label: string;
  value: string;
}

interface VerticalHowItWorksProps {
  items: HowItWorksItem[];
  children?: React.ReactNode;
  tone?: 'cream' | 'sand';
}

export function VerticalHowItWorks({ items, children, tone = 'sand' }: VerticalHowItWorksProps) {
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
            <Eyebrow>Como funciona</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="h1" className="mt-4">
              Processo, frequência e formato.
            </Heading>
          </motion.div>

          {children && (
            <motion.div variants={fadeInUp} className="mt-8 space-y-4 text-body text-ink/80 leading-relaxed">
              {children}
            </motion.div>
          )}

          <motion.dl variants={fadeInUp} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => (
              <div key={item.label} className="bg-cream rounded-xl p-6 border border-line">
                <dt className="text-eyebrow font-semibold uppercase tracking-[0.15em] text-bronze-400">
                  {item.label}
                </dt>
                <dd className="mt-2 text-body font-sans font-medium text-moss">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </Container>
    </Section>
  );
}
