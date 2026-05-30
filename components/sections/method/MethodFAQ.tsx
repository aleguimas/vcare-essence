'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';
import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface MethodFAQProps {
  questions: FAQItem[];
  tone?: 'cream' | 'sand';
}

export function MethodFAQ({ questions, tone = 'cream' }: MethodFAQProps) {
  const [openItem, setOpenItem] = useState<string>('');

  // JSON-LD FAQPage — Sprint 10 completa; aqui já entregamos a estrutura
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };

  return (
    <Section tone={tone}>
      <Container narrow>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
          className="mb-12"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow>Perguntas frequentes</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="h1" className="mt-4">
              Perguntas reais. Respostas honestas.
            </Heading>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <Accordion.Root
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            className="space-y-0 divide-y divide-line"
          >
            {questions.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Accordion.Item value={`item-${i}`}>
                  <Accordion.Trigger className="group flex w-full items-start justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm">
                    <span className="font-sans font-medium text-body text-moss group-hover:text-bronze-400 transition-colors duration-300">
                      {item.question}
                    </span>
                    <span className="shrink-0 mt-0.5 text-bronze" aria-hidden="true">
                      {openItem === `item-${i}` ? (
                        <Minus size={18} strokeWidth={1.5} />
                      ) : (
                        <Plus size={18} strokeWidth={1.5} />
                      )}
                    </span>
                  </Accordion.Trigger>

                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-none data-[state=closed]:animate-none">
                    <p className="pb-6 text-body text-ink/70 leading-relaxed max-w-prose">
                      {item.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </motion.div>
      </Container>
    </Section>
  );
}
