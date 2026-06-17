'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Check } from 'lucide-react';
import { Heading } from '@/components/editorial/Heading';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { ROUTES } from '@/lib/routes';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface Vertical {
  id: string;
  label: string;
  hint: string;
  /** Verticais conduzidas pela Vanessa usam o WhatsApp dela. */
  vanessa?: boolean;
}

// O contato é sempre por WhatsApp, com o número correto por profissional
// (Vanessa nas verticais dela, Camila no restante).
const VERTICALS: Vertical[] = [
  {
    id: 'metodo-v',
    label: 'MEP, Mapeamento Emocional Profundo',
    hint: 'Com Vanessa Albuquerque',
    vanessa: true,
  },
  {
    id: 'metodo-elo',
    label: 'Método ELO, programa para adolescentes',
    hint: 'Com Camila Clemente',
  },
  {
    id: 'psicoterapia',
    label: 'Psicoterapia',
    hint: 'Adolescentes e adultos',
  },
  {
    id: 'hipnoterapia',
    label: 'Hipnoterapia Clínica (tratamento emocional profundo)',
    hint: 'Com Vanessa Albuquerque',
    vanessa: true,
  },
  {
    id: 'teste-vocacional',
    label: 'Teste vocacional',
    hint: 'Adolescentes e adultos',
  },
  {
    id: 'orientacao-familiar',
    label: 'Orientação familiar',
    hint: 'Base em Terapêutica Sistêmica',
  },
  {
    id: 'sublocacao',
    label: 'Sublocação de salas',
    hint: 'Valores e condições',
    vanessa: true,
  },
  {
    id: 'outro',
    label: 'Outro / Não sei ainda',
    hint: 'A gente ajuda você a entender',
  },
];

export function Segmentador() {
  const [selected, setSelected] = useState<Vertical | null>(null);

  const handleSelect = (vertical: Vertical) => {
    setSelected(vertical);
    trackEvent('segmentador_select', { vertical: vertical.id });
  };

  // Verticais conduzidas pela Vanessa usam o WhatsApp dela; demais, o da Camila.
  const whatsappLink = selected
    ? buildWhatsAppLink(selected.id, selected.vanessa ? ROUTES.vanessa : undefined)
    : null;

  const handleWhatsApp = () => {
    if (!selected) return;
    trackEvent('whatsapp_open', { vertical: selected.id, source_page: '/agendar' });
  };

  return (
    <div>
      {/* Passo 1, segmentação */}
      <Eyebrow>O que você procura?</Eyebrow>
      <Heading as="h2" size="h2" className="mt-3 mb-8">
        Escolha o caminho e a gente fala com você pelo WhatsApp.
      </Heading>

      <div
        role="radiogroup"
        aria-label="O que você procura"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {VERTICALS.map((v) => {
          const isSelected = selected?.id === v.id;
          return (
            <button
              key={v.id}
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleSelect(v)}
              className={cn(
                'group flex items-start gap-4 text-left p-5 rounded-xl border transition-all duration-300 ease-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2',
                isSelected
                  ? 'border-bronze bg-bronze/5'
                  : 'border-line bg-cream-50 hover:border-bronze/40',
              )}
            >
              <span
                className={cn(
                  'shrink-0 mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center transition-colors',
                  isSelected ? 'border-bronze bg-bronze' : 'border-sand-300',
                )}
                aria-hidden="true"
              >
                {isSelected && <Check size={12} strokeWidth={3} className="text-cream" />}
              </span>
              <span>
                <span className="block font-sans font-medium text-moss text-body leading-snug">
                  {v.label}
                </span>
                <span className="block mt-1 text-small text-muted">{v.hint}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Passo 2, contato por WhatsApp */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 pt-10 border-t border-line"
          >
            <Eyebrow tone="muted">Fale com a gente</Eyebrow>
            <p className="mt-3 text-body text-ink/70 max-w-prose">
              O caminho mais rápido é o WhatsApp. A gente responde e combina o melhor horário com
              você.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3">
              {whatsappLink ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsApp}
                  className="group flex items-center gap-4 w-full p-5 rounded-xl border border-moss bg-moss text-cream transition-all duration-300 ease-soft hover:bg-moss-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
                >
                  <MessageCircle size={22} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />
                  <span className="font-sans font-medium">Falar pelo WhatsApp</span>
                  <span className="ml-auto transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </a>
              ) : (
                <div
                  className="flex items-center gap-4 w-full p-5 rounded-xl border border-line text-muted/60"
                  aria-label="WhatsApp, em breve"
                >
                  <MessageCircle size={22} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />
                  <span className="font-sans font-medium">WhatsApp</span>
                  <span className="ml-auto text-small italic">em breve</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
