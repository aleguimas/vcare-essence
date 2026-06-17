'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { fadeInUp, stagger } from '@/lib/motion';

interface MethodHeroProps {
  eyebrow: string;
  headline: React.ReactNode;
  subheadline?: string;
  professionalPhoto?: React.ReactNode;
  /** Vertical para a mensagem pré-preenchida do WhatsApp (ex.: 'metodo-v'). */
  whatsappVertical?: string;
  /** Rótulo do botão de WhatsApp logo após a mensagem principal. */
  whatsappLabel?: string;
}

export function MethodHero({
  eyebrow,
  headline,
  subheadline,
  professionalPhoto,
  whatsappVertical,
  whatsappLabel = 'Falar pelo WhatsApp',
}: MethodHeroProps) {
  const whatsappLink = buildWhatsAppLink(whatsappVertical, usePathname());
  return (
    <Section tone="cream" size="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-prose-wide"
          >
            <motion.div variants={fadeInUp}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-5 font-serif text-display-lg text-moss text-balance leading-tight"
            >
              {headline}
            </motion.h1>

            {subheadline && (
              <motion.p variants={fadeInUp} className="mt-6 text-lead text-ink/70 max-w-prose">
                {subheadline}
              </motion.p>
            )}

            {whatsappLink && (
              <motion.div variants={fadeInUp} className="mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-moss px-6 py-3.5 text-cream font-sans font-medium transition-colors duration-300 hover:bg-moss-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
                >
                  <MessageCircle size={18} strokeWidth={1.5} aria-hidden="true" />
                  {whatsappLabel}
                </a>
              </motion.div>
            )}
          </motion.div>

          {professionalPhoto && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="hidden lg:block"
            >
              {professionalPhoto}
            </motion.div>
          )}
        </div>
      </Container>
    </Section>
  );
}
