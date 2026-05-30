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
          src="/images/ambiente/sala-01-teto-led-sensorial.webp"
          alt="Sala de atendimento da VCare Essence sob o céu estrelado em fibra óptica, com luz quente e poltronas claras"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradiente sutil para legibilidade do texto — sem overlay escuro */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(245,241,234,0.55) 0%, rgba(245,241,234,0.15) 60%, transparent 100%)',
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
            Casa boutique de saúde mental no RioMar Trade Center. A primeira clínica sensorial de
            Recife.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={ROUTES.aCasa}>Conhecer a casa</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href={ROUTES.agendar}>Agendar uma conversa</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
