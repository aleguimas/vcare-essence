'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

export interface VerticalLink {
  name: string;
  href?: string;
  description: string;
}

interface ProfessionalVerticalsProps {
  items: VerticalLink[];
  tone?: 'cream' | 'sand';
  heading?: string;
}

export function ProfessionalVerticals({
  items,
  tone = 'cream',
  heading = 'Verticais e métodos que conduzo na VCare Essence.',
}: ProfessionalVerticalsProps) {
  return (
    <Section tone={tone}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
          className="mb-10"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow>Em que trabalho</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="h2" className="mt-4">
              {heading}
            </Heading>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, i) => {
            const cardClass =
              'group block p-7 rounded-2xl border border-line bg-cream-50 transition-all duration-400 ease-soft';
            const content = (
              <>
                <p className="font-sans font-medium text-moss group-hover:text-bronze-400 transition-colors duration-300">
                  {item.name}
                </p>
                <p className="mt-2 text-small text-muted leading-relaxed">{item.description}</p>
                {item.href && (
                  <span className="inline-flex items-center gap-1 mt-4 text-small text-bronze font-sans group-hover:text-bronze-400 transition-colors">
                    Conhecer →
                  </span>
                )}
              </>
            );
            return (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                custom={i}
              >
                {item.href ? (
                  <Link href={item.href} className={`${cardClass} hover:border-bronze/30 hover:shadow-md`}>
                    {content}
                  </Link>
                ) : (
                  <div className={cardClass}>{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
