'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface MapEmbedProps {
  address: string;
  label?: string;
}

// Embed sem API key via query de busca no Google Maps
const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=RioMar+Trade+Center+Recife+PE+Brasil&t=&z=16&ie=UTF8&iwloc=B&output=embed';

export function MapEmbed({ address, label = 'Ver no Google Maps' }: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] md:aspect-[16/7] rounded-2xl overflow-hidden bg-sand border border-line">
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <MapPin size={32} strokeWidth={1.5} className="text-bronze/40" />
            <p className="text-small text-muted font-sans">Carregando mapa…</p>
          </div>
        )}
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0, opacity: loaded ? 1 : 0, transition: 'opacity 0.4s' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa: ${address}`}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <a
        href={`https://maps.google.com/maps?q=${encodeURIComponent(address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-small text-bronze font-sans hover:text-bronze-400 transition-colors duration-300 group"
      >
        <MapPin size={14} strokeWidth={1.5} aria-hidden="true" />
        {label}
        <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
      </a>
    </div>
  );
}
