'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';
import { whatsappNumberForPath } from '@/lib/whatsapp';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

interface VerticalCTAProps {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  agendaLabel?: string;
}

export function VerticalCTA({
  eyebrow = 'Agende seu atendimento',
  headline,
  subtext,
  agendaLabel = 'Agendar',
}: VerticalCTAProps) {
  const whatsapp = whatsappNumberForPath(usePathname());
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
            <Eyebrow tone="muted">{eyebrow}</Eyebrow>
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
              <Link href={ROUTES.agendar}>{agendaLabel}</Link>
            </Button>

            {whatsapp ? (
              <Button asChild size="lg" variant="ghost">
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar pelo WhatsApp
                </a>
              </Button>
            ) : (
              // TODO: substituir pelo número real, aguardar decisão das sócias
              <Button size="lg" variant="ghost" disabled aria-label="WhatsApp, número a confirmar">
                Falar pelo WhatsApp
              </Button>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
