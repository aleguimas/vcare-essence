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

interface MethodFinalCTAProps {
  eyebrow?: string;
  headline: string;
  subtext: string;
  ctaLabel: string;
}

export function MethodFinalCTA({
  eyebrow = 'O encontro começa aqui',
  headline,
  subtext,
  ctaLabel,
}: MethodFinalCTAProps) {
  const whatsapp = whatsappNumberForPath(usePathname());
  return (
    <Section tone="moss" size="lg" className="min-h-[50vh] flex items-center">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
          className="text-center max-w-prose-wide mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow tone="muted">{eyebrow}</Eyebrow>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="display-md" className="mt-6 text-cream">
              {headline}
            </Heading>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-6 text-lead text-cream/70 max-w-prose mx-auto">
            {subtext}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href={ROUTES.agendar}>{ctaLabel}</Link>
            </Button>
          </motion.div>

          {whatsapp ? (
            <motion.p variants={fadeInUp} className="mt-6 text-small text-cream/50">
              Ou{' '}
              <a
                href={`https://wa.me/${whatsapp}`}
                className="underline underline-offset-4 hover:text-cream/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                fale pelo WhatsApp →
              </a>
            </motion.p>
          ) : null}
        </motion.div>
      </Container>
    </Section>
  );
}
