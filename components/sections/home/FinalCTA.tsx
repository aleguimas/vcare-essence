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

export function FinalCTA() {
  const whatsapp = whatsappNumberForPath(usePathname());
  return (
    <Section
      tone="moss"
      className="min-h-[50vh] flex items-center"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
          className="text-center max-w-prose-wide mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow tone="muted">Comece quando quiser</Eyebrow>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="display-md" className="mt-5 text-cream">
              Uma primeira conversa nem sempre tem palavras. Comece pelo silêncio.
            </Heading>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" variant="secondary">
              <Link href={ROUTES.agendar}>Agendar</Link>
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
