'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { Button } from '@/components/ui/button';
import { ROUTES, SITE } from '@/lib/routes';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

interface ProfessionalCTAProps {
  headline: string;
  subtext?: string;
  ctaLabel?: string;
}

export function ProfessionalCTA({
  headline,
  subtext,
  ctaLabel = 'Agendar',
}: ProfessionalCTAProps) {
  return (
    <Section tone="moss" size="md" className="min-h-[40vh] flex items-center">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
          className="max-w-prose-wide"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow tone="muted">Agendar atendimento</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="h1" className="mt-5 text-cream">
              {headline}
            </Heading>
          </motion.div>
          {subtext && (
            <motion.p variants={fadeInUp} className="mt-4 text-lead text-cream/70">
              {subtext}
            </motion.p>
          )}
          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href={ROUTES.agendar}>{ctaLabel}</Link>
            </Button>
            {SITE.whatsapp ? (
              <Button asChild size="lg" variant="ghost">
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar pelo WhatsApp
                </a>
              </Button>
            ) : (
              <Button size="lg" variant="ghost" disabled aria-label="WhatsApp — número a confirmar">
                Falar pelo WhatsApp
              </Button>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
