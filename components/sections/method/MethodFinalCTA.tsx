'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { Button } from '@/components/ui/button';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

interface MethodFinalCTAProps {
  eyebrow?: string;
  headline: string;
  subtext: string;
  ctaLabel: string;
  /** Vertical para a mensagem pré-preenchida do WhatsApp (ex.: 'metodo-v'). */
  vertical?: string;
}

export function MethodFinalCTA({
  eyebrow = 'O encontro começa aqui',
  headline,
  subtext,
  ctaLabel,
  vertical,
}: MethodFinalCTAProps) {
  const whatsappLink = buildWhatsAppLink(vertical, usePathname());
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
            {whatsappLink ? (
              <Button asChild size="lg" variant="secondary">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  {ctaLabel}
                </a>
              </Button>
            ) : (
              // TODO: substituir pelo número real, aguardar decisão das sócias
              <Button size="lg" variant="secondary" disabled aria-label="WhatsApp, número a confirmar">
                {ctaLabel}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
