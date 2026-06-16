'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';
import { fadeInUp, stagger, viewportConfig } from '@/lib/motion';

// Mock data, substituído por dados do Sanity CMS no Sprint 08
const POSTS = [
  {
    slug: 'quando-a-paralisia-nao-e-preguica',
    category: 'Trava & Empresariedade',
    title: 'Quando a paralisia não é preguiça, é trava emocional',
    excerpt:
      'Empresários bem-sucedidos chegam a um ponto em que parar não é opção, e seguir, também não. O que está acontecendo por baixo disso.',
    date: '2026-05-10',
    readTime: '7 min',
  },
  {
    slug: 'por-que-o-ambiente-importa',
    category: 'Saúde Mental Sem Mistério',
    title: 'Por que o ambiente importa antes da primeira palavra',
    excerpt:
      'A neurociência explica o que o corpo percebe antes da mente processar. Sobre o papel do espaço físico no cuidado em saúde mental.',
    date: '2026-04-28',
    readTime: '5 min',
  },
  {
    slug: 'vestibular-como-ajudar-sem-pressionar',
    category: 'Adolescência & Estudos',
    title: 'Vestibular: como ajudar sem pressionar',
    excerpt:
      'A ansiedade do filho antes das provas também é ansiedade dos pais. Como criar um ambiente de suporte sem aumentar a pressão.',
    date: '2026-04-15',
    readTime: '6 min',
  },
] as const;

export function JournalPreview() {
  return (
    <Section tone="cream">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <motion.div variants={fadeInUp}>
              <Eyebrow>Diário VCare</Eyebrow>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Heading as="h2" size="h1" className="mt-4 max-w-prose">
                Conversas que ajudam a entender o que se passa por dentro.
              </Heading>
            </motion.div>
          </div>
          <motion.div variants={fadeInUp} className="shrink-0">
            <Link
              href={ROUTES.diario}
              className="text-small text-bronze font-sans font-medium hover:text-bronze-400 transition-colors duration-300 group inline-flex items-center gap-1.5"
            >
              Todos os textos
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              custom={i}
            >
              <Link
                href={`${ROUTES.diario}/${post.slug}`}
                className="group block h-full rounded-2xl border border-line bg-cream-50 overflow-hidden hover:border-bronze/30 hover:shadow-md transition-all duration-400 ease-soft"
              >
                {/* Thumbnail placeholder, substituído por imagem real no Sprint 08 */}
                <div className="aspect-video bg-sand w-full" />

                <div className="p-6">
                  <Eyebrow tone="muted" className="text-[0.65rem]">
                    {post.category}
                  </Eyebrow>
                  <h3 className="mt-3 font-serif text-h3 text-moss text-balance leading-snug group-hover:text-bronze-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-small text-muted leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-3 text-small text-muted/60 font-sans">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('pt-BR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime} de leitura</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
