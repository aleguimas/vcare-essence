'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface VideoEmbedProps {
  /** ID do vídeo do YouTube (ex.: 'S9EHySBbY0s') */
  videoId: string;
  /**
   * Poster local opcional (override). Quando omitido, usa a capa oficial do
   * YouTube (maxresdefault, com fallback para hqdefault).
   */
  poster?: string;
  /** Texto alternativo do poster, título do iframe e da barra de título */
  title: string;
  /** Proporção do player (default 16/9) */
  aspect?: string;
  className?: string;
}

/**
 * Facade do YouTube: mostra a capa do vídeo + barra de título (padrão YouTube)
 * e só carrega o iframe (e os scripts do YouTube) após o clique. Mantém o LCP
 * leve e evita cookies de terceiros antes da interação do usuário.
 */
export function VideoEmbed({
  videoId,
  poster,
  title,
  aspect = 'aspect-video',
  className = '',
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  // Capa oficial do YouTube; cai para hqdefault se o maxres não existir.
  const [ytThumb, setYtThumb] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
  );

  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl bg-moss border border-line ${className}`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerated-download; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
          aria-label={`Reproduzir vídeo: ${title}`}
        >
          {poster ? (
            <Image
              src={poster}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover object-center transition-transform duration-600 ease-soft group-hover:scale-[1.02]"
              priority={false}
            />
          ) : (
            // Capa do YouTube: img nativa para permitir fallback de resolução
            // sem configurar domínio remoto no next/image.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={ytThumb}
              alt={title}
              loading="lazy"
              decoding="async"
              onError={() =>
                setYtThumb(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)
              }
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-600 ease-soft group-hover:scale-[1.02]"
            />
          )}
          {/* Barra de título, padrão YouTube */}
          <span className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/65 via-black/30 to-transparent px-4 pb-10 pt-3 md:px-5 md:pt-4">
            <span className="line-clamp-2 text-left font-sans text-sm font-medium text-white/95 md:text-base">
              {title}
            </span>
          </span>
          <span className="absolute inset-0 bg-moss/10 transition-colors duration-300 group-hover:bg-moss/20" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-moss shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
            <Play size={28} strokeWidth={1.5} className="ml-1 fill-moss" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}
