'use client';

import { useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTES } from '@/lib/routes';

const STORAGE_KEY = 'vcare-consent';
const EVENT = 'vcare-consent-change';
type Consent = 'granted' | 'denied';

type GtagWindow = Window & {
  gtag?: (command: string, type: string, params: Record<string, string>) => void;
};

function applyConsent(value: Consent) {
  if (typeof window === 'undefined') return;
  const w = window as GtagWindow;
  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', {
      analytics_storage: value,
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
    });
  }
}

// ─── Store externo (localStorage) via useSyncExternalStore ───────────────────
function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

function getSnapshot(): Consent | null {
  return (localStorage.getItem(STORAGE_KEY) as Consent | null) ?? null;
}

function getServerSnapshot(): Consent | null {
  return null;
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Reaplica consentimento concedido em visitas seguintes (sincroniza com GA).
  useEffect(() => {
    if (consent === 'granted') applyConsent('granted');
  }, [consent]);

  const decide = (value: Consent) => {
    localStorage.setItem(STORAGE_KEY, value);
    applyConsent(value);
    window.dispatchEvent(new Event(EVENT));
  };

  const visible = consent === null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Consentimento de cookies"
          aria-live="polite"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border border-line bg-cream shadow-xl p-6 md:p-7"
        >
          <p className="text-body text-ink/80 font-sans leading-relaxed">
            Usamos cookies para entender como o site é usado e melhorar sua experiência. Você pode
            aceitar ou recusar, dados de saúde nunca são coletados por aqui. Saiba mais na{' '}
            <Link
              href={ROUTES.politicaPrivacidade}
              className="text-bronze-400 underline underline-offset-2 hover:text-bronze-500 transition-colors"
            >
              Política de Privacidade
            </Link>
            .
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => decide('granted')}
              className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-moss text-cream font-sans font-medium transition-colors duration-300 hover:bg-moss-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
            >
              Aceitar
            </button>
            <button
              onClick={() => decide('denied')}
              className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-bronze text-bronze-400 font-sans font-medium transition-colors duration-300 hover:bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
            >
              Recusar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
