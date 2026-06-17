'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

export function WhatsAppFloat() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  // WhatsApp é o único canal de contato do site, com o número correto por
  // caminho (Vanessa nas páginas dela, Camila no restante).
  const link = buildWhatsAppLink(undefined, pathname);

  useEffect(() => {
    if (!link) return;

    const timer = setTimeout(() => setVisible(true), 10_000);

    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.3) setVisible(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [link]);

  // Sem número configurado: não renderiza nada
  if (!link) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_open', { vertical: 'float', source_page: pathname })}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-bronze px-5 py-3.5 text-cream shadow-lg transition-colors duration-300 hover:bg-bronze-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          aria-label="Falar pelo WhatsApp"
        >
          <MessageCircle size={20} strokeWidth={1.5} aria-hidden="true" />
          <span className="hidden sm:inline text-small font-sans font-medium">
            Falar pelo WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
