'use client';

import { motion } from 'framer-motion';
import { BookOpen, Brain, Users, Target, type LucideIcon } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

// Mapa interno — passa-se string serializable do Server Component
const ICON_MAP: Record<string, LucideIcon> = { BookOpen, Brain, Users, Target };

export interface Pillar {
  iconName: keyof typeof ICON_MAP;
  number: number;
  title: string;
  description: string;
}

interface ProgramPillarsProps {
  eyebrow?: string;
  headline?: string;
  pillars: Pillar[];
  tone?: 'cream' | 'sand';
}

export function ProgramPillars({
  eyebrow = 'O programa em quatro pilares',
  headline,
  pillars,
  tone = 'sand',
}: ProgramPillarsProps) {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              custom={i}
              className="bg-cream rounded-2xl p-8 border border-line"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-sand flex items-center justify-center">
                  {(() => {
                    const Icon = ICON_MAP[pillar.iconName];
                    return Icon ? (
                      <Icon size={20} strokeWidth={1.5} className="text-bronze" aria-hidden="true" />
                    ) : null;
                  })()}
                </div>
                <span className="font-serif text-display-md text-bronze/30 leading-none mt-0.5">
                  {pillar.number}
                </span>
              </div>

              <h3 className="mt-5 font-sans font-medium text-moss text-body leading-snug">
                {pillar.title}
              </h3>
              <p className="mt-3 text-small text-ink/70 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
