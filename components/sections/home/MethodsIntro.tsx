'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';
import { cn } from '@/lib/utils';

const METHODS = [
  {
    eyebrow: 'Para destravar',
    title: 'MEP, para empresários com uma trava emocional.',
    description:
      'Encontros estruturados. Hipnoterapia clínica como ferramenta para acessar o inconsciente e ir à raiz do que está travando o próximo passo.',
    cta: 'Conhecer o Método',
    href: ROUTES.metodoV, // TODO: slug final das sócias
    tone: 'sand' as const,
  },
  {
    eyebrow: 'Para estruturar e acompanhar',
    title: 'Método C, para adolescentes em fase decisiva.',
    description:
      'Programa estruturado para melhorar o rendimento escolar, preparar para o vestibular e organizar o emocional, com acompanhamento familiar.',
    cta: 'Conhecer o Método',
    href: ROUTES.metodoC, // TODO: slug final das sócias
    tone: 'cream' as const,
  },
] as const;

export function MethodsIntro() {
  return (
    <Section tone="cream">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow>Duas frentes, uma clínica</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="h1" className="mt-4 max-w-prose-wide mx-auto">
              Cada pessoa que chega aqui é recebida por um cuidado diferente, porque cada
              essência pede um cuidado diferente.
            </Heading>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {METHODS.map((method, i) => (
            <motion.div
              key={method.href}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              custom={i}
            >
              <MethodCard method={method} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function MethodCard({
  method,
}: {
  method: (typeof METHODS)[number];
}) {
  return (
    <Link
      href={method.href}
      className={cn(
        'group block p-8 md:p-10 rounded-2xl border transition-all duration-400 ease-soft',
        'hover:-translate-y-1 hover:shadow-lg',
        method.tone === 'sand'
          ? 'bg-sand border-sand-300 hover:border-bronze/40'
          : 'bg-cream-50 border-line hover:border-bronze/40',
      )}
    >
      <Eyebrow tone="muted">{method.eyebrow}</Eyebrow>
      <Heading as="h3" size="h2" className="mt-3">
        {method.title}
      </Heading>
      <p className="mt-4 text-body text-ink/70 leading-relaxed">{method.description}</p>
      <span className="inline-flex items-center gap-2 mt-6 text-bronze font-sans font-medium group-hover:text-bronze-400 transition-colors duration-300">
        {method.cta}
        <span
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      </span>
    </Link>
  );
}
