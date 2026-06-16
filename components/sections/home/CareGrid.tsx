'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Compass, Users } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';
import type { LucideIcon } from 'lucide-react';

const CARE_ITEMS: Array<{
  icon: LucideIcon;
  label: string;
  description: string;
  href: string;
}> = [
  {
    icon: Brain,
    label: 'Psicoterapia',
    description: 'Atendimento clínico para adolescentes e adultos, com abordagem científica.',
    href: ROUTES.psicoterapia,
  },
  {
    icon: Sparkles,
    label: 'Hipnoterapia',
    description: 'Hipnoterapia clínica para questões emocionais profundas, atuando diretamente no inconsciente para promover mudanças consistentes e eficazes.',
    href: ROUTES.hipnoterapia,
  },
  {
    icon: Compass,
    label: 'Teste Vocacional',
    description: 'Para adolescentes em pré-vestibular e adultos em reposicionamento de carreira.',
    href: ROUTES.testeVocacional,
  },
  {
    icon: Users,
    label: 'Orientação Familiar',
    description: 'Suporte para famílias, base em Terapêutica Sistêmica.',
    href: ROUTES.orientacaoFamiliar,
  },
];

export function CareGrid() {
  return (
    <Section tone="sand">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow>Outros cuidados</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="h2" className="mt-4">
              Outras frentes de cuidado disponíveis na clínica.
            </Heading>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CARE_ITEMS.map((item, i) => (
            <motion.div
              key={item.href}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              custom={i}
            >
              <Link
                href={item.href}
                className="group flex gap-5 p-6 md:p-8 bg-cream rounded-2xl border border-line hover:border-bronze/30 transition-all duration-400 ease-soft hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="shrink-0 mt-0.5">
                  <item.icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-bronze group-hover:text-bronze-400 transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-sans font-medium text-moss">{item.label}</p>
                  <p className="mt-1 text-small text-muted leading-relaxed">{item.description}</p>
                  <span className="inline-block mt-3 text-small text-bronze group-hover:text-bronze-400 transition-colors">
                    Saber mais →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
