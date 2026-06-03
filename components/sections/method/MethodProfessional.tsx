'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { fadeInUp, fadeIn, stagger, viewportConfig } from '@/lib/motion';

interface MethodProfessionalProps {
  name: string;
  role: string;
  crp: string; // ex: "CRP XX/XXXXX" — TODO: aguardar dados das sócias
  bio: string[];
  signature: string;
  profileHref: string;
  imgSrc?: string;
  imgAlt: string;
}

export function MethodProfessional({
  name,
  role,
  crp,
  bio,
  signature,
  profileHref,
  imgSrc,
  imgAlt,
}: MethodProfessionalProps) {
  return (
    <Section tone="sand">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Foto editorial */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeIn}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream-200 lg:sticky lg:top-28"
          >
            {imgSrc ? (
              <Image
                src={imgSrc}
                alt={imgAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            ) : (
              <div className="absolute inset-0 flex items-end p-6">
                <p className="text-small text-muted/50 font-sans italic">
                  Ensaio editorial — em produção
                </p>
              </div>
            )}
          </motion.div>

          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <Eyebrow>Quem conduz</Eyebrow>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Heading as="h2" size="h1" className="mt-4">
                {name}
              </Heading>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-2 text-small text-muted font-sans">
              {role} · {crp}
            </motion.p>

            <div className="mt-8 space-y-5">
              {bio.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={fadeInUp}
                  className="text-body text-ink/80 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.blockquote
              variants={fadeInUp}
              className="mt-8 font-serif italic text-h3 text-moss border-l-2 border-bronze pl-5"
            >
              &ldquo;{signature}&rdquo;
            </motion.blockquote>

            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                href={profileHref}
                className="inline-flex items-center gap-2 text-bronze font-sans font-medium hover:text-bronze-400 transition-colors duration-300 group"
              >
                Perfil completo
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
