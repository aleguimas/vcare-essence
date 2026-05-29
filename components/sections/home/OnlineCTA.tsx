'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { ROUTES } from '@/lib/routes';
import { fadeInUp, viewportConfig } from '@/lib/motion';

export function OnlineCTA() {
  return (
    <Section tone="sand" size="sm">
      <Container>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="text-center text-lead text-ink/80 font-sans max-w-prose-wide mx-auto"
        >
          Para quem mora longe ou prefere o conforto de casa, atendemos online com a mesma
          profundidade.{' '}
          <Link
            href={ROUTES.atendimentoOnline}
            className="text-bronze hover:text-bronze-400 transition-colors duration-300 group inline-flex items-center gap-1"
          >
            Saber mais
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
        </motion.p>
      </Container>
    </Section>
  );
}
