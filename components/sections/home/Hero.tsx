'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';
import { fadeInUp, stagger } from '@/lib/motion';

export function Hero() {
  return (
    <section
      aria-label="Apresentação da VCare Essence"
      className="relative min-h-[85vh] flex items-center bg-navy overflow-hidden"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/images/ambiente/sala-02-iluminacao-dia-vista.webp"
          alt="Sala de atendimento da VCare Essence com janela ampla e vista da cidade ao entardecer, poltrona reclinável e luz quente"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Véu cream em duas camadas para legibilidade, sem overlay escuro.
            Esquerda cobre o título; base cobre subtítulo e botões; a vista da
            cidade permanece visível no canto superior direito. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(245,241,234,0.92) 0%, rgba(245,241,234,0.6) 42%, rgba(245,241,234,0.15) 72%, transparent 100%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(245,241,234,0.95) 0%, rgba(245,241,234,0.45) 38%, rgba(245,241,234,0) 70%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-container px-6 md:px-10 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-prose-wide"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow>VCare Essence · Recife</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-5 font-serif text-display-xl text-moss text-balance"
          >
            Por dentro é onde tudo começa.{' '}
            <em className="italic text-bronze not-italic font-serif">E onde tudo trava.</em>
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-6 text-lead text-moss/80 max-w-prose">
            Clínica boutique de saúde mental no RioMar Trade Center. A primeira clínica sensorial de
            Recife.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={ROUTES.aCasa}>Conhecer a clínica</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={ROUTES.agendar}>Agendar uma conversa</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
