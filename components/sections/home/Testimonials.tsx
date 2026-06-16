'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

// Depoimentos anonimizados, conforme 04_content_inventory.md
// Sem fotos, sem nomes completos, tom de carta literária
const TESTIMONIALS = [
  {
    text: 'Eu não voltei à terapia depois da última. Aqui foi diferente desde o cheiro da recepção. Demorei a entender que isso fazia parte. Demorei a entender que cuidar começa antes da consulta.',
    author: 'Empresária, 42 anos · Boa Viagem',
  },
  {
    text: 'Cheguei achando que sabia o que estava me prendendo. Descobri que estava olhando para a sombra do problema, não para a raiz. Isso mudou tudo que veio depois.',
    author: 'Empresário, 48 anos · Recife',
  },
  {
    text: 'Meu filho voltou a estudar sem eu precisar cobrar. Parece simples assim. Mas foi meses de processo, de escuta, de método. Não foi mágica, foi trabalho de verdade.',
    author: 'Mãe, 44 anos · Casa Forte',
  },
] as const;

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent(index);
    startInterval();
  };

  return (
    <Section tone="sand">
      <Container narrow>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow>Quem já atravessou a porta</Eyebrow>
          </motion.div>
        </motion.div>

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.figure
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center max-w-prose-wide mx-auto"
            >
              <blockquote className="font-serif italic text-h3 text-moss leading-relaxed text-balance">
                &ldquo;{TESTIMONIALS[current]?.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-small text-muted font-sans not-italic">
                &mdash; {TESTIMONIALS[current]?.author}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-10" role="tablist" aria-label="Depoimentos">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={current === i}
              aria-label={`Depoimento ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-400 ease-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze ${
                current === i ? 'w-6 bg-bronze' : 'w-1.5 bg-sand-300 hover:bg-bronze/40'
              }`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
