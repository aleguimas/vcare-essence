'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

export interface EditorialCase {
  number: number;
  title: string;
  paragraphs: string[];
}

interface MethodCasesProps {
  cases: EditorialCase[];
}

export function MethodCases({ cases }: MethodCasesProps) {
  return (
    <Section tone="cream">
      <Container narrow>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
          className="mb-14"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow>Casos editoriais</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="h1" className="mt-4">
              Histórias reais, anonimizadas com consentimento.
            </Heading>
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-4 text-body text-muted">
            Nomes, profissões e detalhes identificáveis foram alterados. O essencial — o que
            estava prendendo e o que se moveu — permanece intacto.
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {cases.map((c) => (
            <motion.article
              key={c.number}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={stagger}
              className="border-t border-line pt-12"
            >
              <motion.div variants={fadeInUp}>
                <Eyebrow tone="muted">Caso {c.number} · Anônimo com consentimento</Eyebrow>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Heading as="h3" size="h2" className="mt-3 mb-8">
                  {c.title}
                </Heading>
              </motion.div>

              <div className="space-y-5">
                {c.paragraphs.map((p, idx) => (
                  <motion.p
                    key={idx}
                    variants={fadeInUp}
                    className="font-serif italic text-body text-moss leading-relaxed"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
