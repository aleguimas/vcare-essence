'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';
import { fadeInUp, fadeIn, stagger, viewportConfig } from '@/lib/motion';

export function SensoryIntro() {
  return (
    <Section tone="cream">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <Eyebrow>Uma categoria nova em Recife</Eyebrow>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Heading as="h2" size="h1" className="mt-4">
                O ambiente é parte do tratamento.
              </Heading>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-6 text-lead text-ink/80 max-w-prose">
              Antes de qualquer palavra ser dita, o corpo já recebeu sinais de segurança. A luz
              baixa relaxa, o aroma ancora a memória, o som abafa a cidade, a textura convida ao
              toque. Cuidar começa no instante em que você atravessa a porta.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                href={ROUTES.experienciaSensorial}
                className="inline-flex items-center gap-2 text-bronze font-sans font-medium hover:text-bronze-400 transition-colors duration-300 group"
              >
                Sobre a experiência sensorial
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeIn}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-sand order-first lg:order-last"
          >
            <Image
              src="/images/ambiente/detalhes-tateis-01.webp"
              alt="Detalhes sensoriais da VCare Essence — planta, esfera de fibra óptica e materiais naturais"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
