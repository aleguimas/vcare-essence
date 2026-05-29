'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

export interface Step {
  number: number;
  title: string;
  description: string;
}

interface MethodStepsProps {
  eyebrow?: string;
  headline?: string;
  steps: Step[];
  tone?: 'cream' | 'sand';
}

export function MethodSteps({
  eyebrow = 'O método em quatro movimentos',
  headline,
  steps,
  tone = 'sand',
}: MethodStepsProps) {
  return (
    <Section tone={tone}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
          className="mb-14"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </motion.div>
          {headline && (
            <motion.div variants={fadeInUp}>
              <Heading as="h2" size="h1" className="mt-4 max-w-prose">
                {headline}
              </Heading>
            </motion.div>
          )}
        </motion.div>

        {/* Desktop: 4 colunas com linha conectora */}
        <div className="hidden md:grid grid-cols-4 gap-8 relative">
          {/* Linha horizontal conectora */}
          <div
            className="absolute top-7 left-[12.5%] right-[12.5%] h-px bg-bronze/30"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              custom={i}
              className="relative"
            >
              {/* Número */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-cream border-2 border-bronze/30 flex items-center justify-center mb-6">
                <span className="font-serif text-display-md text-bronze leading-none">
                  {step.number}
                </span>
              </div>

              <h3 className="font-sans font-medium text-moss text-body leading-snug">
                {step.title}
              </h3>
              <p className="mt-3 text-small text-ink/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: sequência vertical com linha */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              className="flex gap-6 relative pb-10 last:pb-0"
            >
              {/* Linha vertical e número */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-12 h-12 rounded-full bg-cream border-2 border-bronze/30 flex items-center justify-center z-10">
                  <span className="font-serif text-h2 text-bronze leading-none">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 w-px bg-bronze/20 mt-3" aria-hidden="true" />
                )}
              </div>

              <div className="pt-2.5 pb-6">
                <h3 className="font-sans font-medium text-moss text-body leading-snug">
                  {step.title}
                </h3>
                <p className="mt-3 text-small text-ink/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
