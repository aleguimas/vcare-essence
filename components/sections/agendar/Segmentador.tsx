'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, CalendarDays, Mail, Check } from 'lucide-react';
import { Heading } from '@/components/editorial/Heading';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { buildWhatsAppLink, buildEmailLink } from '@/lib/whatsapp';
import { buildCalLink, CAL_LINKS, ROUTES } from '@/lib/routes';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

// Cal.com é pesado, só carrega quando o usuário pede para agendar.
const CalendarEmbed = dynamic(
  () => import('./CalendarEmbed').then((m) => m.CalendarEmbed),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-[600px] rounded-2xl border border-line bg-sand/40 animate-pulse"
        aria-label="Carregando agenda"
      />
    ),
  },
);

type Journey = 'A' | 'B';

interface Vertical {
  id: string;
  label: string;
  hint: string;
  journey: Journey;
  calSlug: string;
  /** Rótulo do CTA de agendamento, varia por jornada */
  bookLabel: string;
}

// Jornada A = métodos autorais (qualificação, Cal.com como CTA principal)
// Jornada B = verticais clínicas (intenção direta, WhatsApp como CTA principal)
const VERTICALS: Vertical[] = [
  {
    id: 'metodo-elo',
    label: 'Método ELO, programa para adolescentes',
    hint: 'Com Camila Clemente',
    journey: 'A',
    calSlug: CAL_LINKS.metodoElo,
    bookLabel: 'Agendar conversa inicial',
  },
  {
    id: 'psicoterapia',
    label: 'Psicoterapia',
    hint: 'Adolescentes e adultos',
    journey: 'B',
    calSlug: CAL_LINKS.psicoterapia,
    bookLabel: 'Agendar sessão',
  },
  {
    id: 'hipnoterapia',
    label: 'Hipnoterapia Clínica (tratamento emocional profundo)',
    hint: 'Com Vanessa Albuquerque',
    journey: 'B',
    calSlug: CAL_LINKS.hipnoterapia,
    bookLabel: 'Agendar sessão',
  },
  {
    id: 'teste-vocacional',
    label: 'Teste vocacional',
    hint: 'Adolescentes e adultos',
    journey: 'B',
    calSlug: CAL_LINKS.testeVocacional,
    bookLabel: 'Agendar avaliação',
  },
  {
    id: 'orientacao-familiar',
    label: 'Orientação familiar',
    hint: 'Base em Terapêutica Sistêmica',
    journey: 'B',
    calSlug: CAL_LINKS.orientacaoFamiliar,
    bookLabel: 'Agendar conversa',
  },
  {
    id: 'sublocacao',
    label: 'Sublocação de salas',
    hint: 'Valores e condições',
    journey: 'B',
    calSlug: '',
    bookLabel: 'Falar com a gente',
  },
  {
    id: 'outro',
    label: 'Outro / Não sei ainda',
    hint: 'A gente ajuda você a entender',
    journey: 'B',
    calSlug: '',
    bookLabel: 'Falar com a gente',
  },
];

export function Segmentador() {
  const [selected, setSelected] = useState<Vertical | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSelect = (vertical: Vertical) => {
    setSelected(vertical);
    setShowCalendar(false);
    trackEvent('segmentador_select', { vertical: vertical.id });
  };

  // Verticais conduzidas pela Vanessa usam o WhatsApp dela; demais, o da Camila.
  const isVanessaVertical = selected?.id === 'hipnoterapia';
  const whatsappLink = selected
    ? buildWhatsAppLink(selected.id, isVanessaVertical ? ROUTES.vanessa : undefined)
    : null;
  const emailLink = selected
    ? buildEmailLink(`Agendamento, ${selected.label}`)
    : null;
  const calLink = selected?.calSlug ? buildCalLink(selected.calSlug) : null;

  const handleWhatsApp = () => {
    if (!selected) return;
    trackEvent('whatsapp_open', { vertical: selected.id, source_page: '/agendar' });
  };

  const handleBook = () => {
    if (!selected) return;
    trackEvent('cta_click', { cta_name: `agendar_${selected.id}`, page_path: '/agendar' });
    setShowCalendar(true);
  };

  return (
    <div>
      {/* Passo 1, segmentação */}
      <Eyebrow>O que você procura?</Eyebrow>
      <Heading as="h2" size="h2" className="mt-3 mb-8">
        Escolha o caminho e a gente mostra a melhor forma de começar.
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

      {/* Passo 2, caminhos de contato */}
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
            <Eyebrow tone="muted">
              {selected.journey === 'A' ? 'Como começar' : 'Fale com a gente'}
            </Eyebrow>
            <p className="mt-3 text-body text-ink/70 max-w-prose">
              {selected.journey === 'A'
                ? 'O primeiro encontro é uma conversa de diagnóstico, não compromisso. Agende abaixo, ou fale com a gente se preferir.'
                : 'O caminho mais rápido é o WhatsApp. Se preferir, agende online ou escreva um email.'}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3">
              <ContactPaths
                journey={selected.journey}
                bookLabel={selected.bookLabel}
                whatsappLink={whatsappLink}
                emailLink={emailLink}
                calLink={calLink}
                onWhatsApp={handleWhatsApp}
                onBook={handleBook}
              />
            </div>

            {/* Embed do calendário */}
            <AnimatePresence>
              {showCalendar && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 overflow-hidden"
                >
                  {calLink ? (
                    <CalendarEmbed calLink={calLink} calendarType={selected.id} />
                  ) : (
                    <div className="rounded-2xl border border-dashed border-bronze/30 bg-cream-50 p-8 text-center">
                      <p className="font-serif italic text-h3 text-moss/70">
                        O agendamento online está sendo configurado.
                      </p>
                      <p className="mt-3 text-body text-muted">
                        Por enquanto, fale com a gente pelo WhatsApp ou email, respondemos rápido.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Caminhos de contato, ordenados por jornada ─────────────────────────── */

interface ContactPathsProps {
  journey: Journey;
  bookLabel: string;
  whatsappLink: string | null;
  emailLink: string | null;
  calLink: string | null;
  onWhatsApp: () => void;
  onBook: () => void;
}

function ContactPaths({
  journey,
  bookLabel,
  whatsappLink,
  emailLink,
  onWhatsApp,
  onBook,
}: ContactPathsProps) {
  const bookCard = (
    <button
      key="book"
      onClick={onBook}
      className="group flex items-center gap-4 w-full text-left p-5 rounded-xl border border-moss bg-moss text-cream transition-all duration-300 ease-soft hover:bg-moss-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
    >
      <CalendarDays size={22} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />
      <span className="font-sans font-medium">{bookLabel} online</span>
      <span className="ml-auto transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
    </button>
  );

  const whatsappCard = whatsappLink ? (
    <a
      key="whatsapp"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onWhatsApp}
      className="group flex items-center gap-4 w-full p-5 rounded-xl border border-bronze text-bronze-400 transition-all duration-300 ease-soft hover:bg-bronze hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
    >
      <MessageCircle size={22} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />
      <span className="font-sans font-medium">Falar pelo WhatsApp</span>
      <span className="ml-auto transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
    </a>
  ) : (
    <div
      key="whatsapp-disabled"
      className="flex items-center gap-4 w-full p-5 rounded-xl border border-line text-muted/60"
      aria-label="WhatsApp, em breve"
    >
      <MessageCircle size={22} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />
      <span className="font-sans font-medium">WhatsApp</span>
      <span className="ml-auto text-small italic">em breve</span>
    </div>
  );

  const emailCard = emailLink ? (
    <a
      key="email"
      href={emailLink}
      className="group flex items-center gap-4 w-full p-5 rounded-xl border border-line text-moss transition-all duration-300 ease-soft hover:border-bronze/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
    >
      <Mail size={22} strokeWidth={1.5} className="shrink-0 text-bronze" aria-hidden="true" />
      <span className="font-sans font-medium">Escrever um email</span>
      <span className="ml-auto transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
    </a>
  ) : null;

  // Jornada A: agendar primeiro. Jornada B: WhatsApp primeiro.
  const ordered =
    journey === 'A' ? [bookCard, whatsappCard, emailCard] : [whatsappCard, bookCard, emailCard];

  return <>{ordered.filter(Boolean)}</>;
}
