'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

export interface FormationItem {
  year: string;
  degree: string;
  institution?: string;
}

interface ProfessionalFormationProps {
  items: FormationItem[];
  approach?: string;
  tone?: 'cream' | 'sand';
}

export function ProfessionalFormation({
  items,
  approach,
  tone = 'sand',
}: ProfessionalFormationProps) {
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
            <Eyebrow>Formação e abordagem</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="h2" className="mt-4">
              Formação
            </Heading>
          </motion.div>

          <motion.ol variants={fadeInUp} className="mt-8 space-y-0 relative">
            {/* Linha vertical */}
            <div
              className="absolute left-[3.5rem] top-3 bottom-3 w-px bg-line"
              aria-hidden="true"
            />
            {items.map((item, i) => (
              <li key={i} className="flex gap-6 pb-8 last:pb-0 relative">
                <span className="shrink-0 w-14 text-right font-sans text-small text-muted pt-0.5">
                  {item.year}
                </span>
                <div className="relative z-10 shrink-0 mt-1.5 w-3 h-3 rounded-full bg-bronze border-2 border-cream" />
                <div className="pt-0">
                  <p className="font-sans font-medium text-moss text-body">{item.degree}</p>
                  {item.institution && (
                    <p className="mt-0.5 text-small text-muted">{item.institution}</p>
                  )}
                </div>
              </li>
            ))}
          </motion.ol>

          {approach && (
            <>
              <motion.div variants={fadeInUp}>
                <Heading as="h2" size="h2" className="mt-14">
                  Abordagem
                </Heading>
              </motion.div>
              <motion.p variants={fadeInUp} className="mt-4 text-body text-ink/80 leading-relaxed">
                {approach}
              </motion.p>
            </>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
