'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

export interface ProfessionalRef {
  name: string;
  role: string;
  crp: string;
  href: string;
  imgSrc?: string;
}

interface VerticalProfessionalsProps {
  professionals: ProfessionalRef[];
  note?: string;
  tone?: 'cream' | 'sand';
}

export function VerticalProfessionals({
  professionals,
  note,
  tone = 'cream',
}: VerticalProfessionalsProps) {
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
            <Eyebrow>Quem cuida</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="h2" className="mt-4">
              Profissionais desta vertical
            </Heading>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {professionals.map((p, i) => (
            <motion.div
              key={p.href}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              custom={i}
            >
              <Link
                href={p.href}
                className="group block p-6 rounded-2xl border border-line bg-cream-50 hover:border-bronze/30 hover:shadow-md transition-all duration-400 ease-soft"
              >
                {/* Foto da profissional */}
                {p.imgSrc ? (
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mb-4 bg-sand">
                    <Image
                      src={p.imgSrc}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-sand mb-4" aria-hidden="true" />
                )}
                <p className="font-sans font-medium text-moss group-hover:text-bronze-400 transition-colors duration-300">
                  {p.name}
                </p>
                <p className="mt-1 text-small text-muted">{p.role}</p>
                <p className="mt-0.5 text-small text-muted/60">{p.crp}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-small text-bronze font-sans group-hover:text-bronze-400 transition-colors">
                  Ver perfil →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {note && (
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mt-8 text-small text-muted font-sans italic"
          >
            {note}
          </motion.p>
        )}
      </Container>
    </Section>
  );
}
