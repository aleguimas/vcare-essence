'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface VideoEmbedProps {
  /** ID do vídeo do YouTube (ex.: 'S9EHySBbY0s') */
  videoId: string;
  /** Imagem local de capa (poster), exibida antes do play */
  poster: string;
  /** Texto alternativo do poster e título do iframe */
  title: string;
  /** Proporção do player (default 16/9) */
  aspect?: string;
  className?: string;
}

/**
 * Facade do YouTube: mostra um poster local + botão de play e só carrega o
 * iframe (e os scripts do YouTube) após o clique. Mantém o LCP leve e evita
 * cookies de terceiros antes da interação do usuário.
 */
export function VideoEmbed({
  videoId,
  poster,
  title,
  aspect = 'aspect-video',
  className = '',
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl bg-moss border border-line ${className}`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
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
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover object-center transition-transform duration-600 ease-soft group-hover:scale-[1.02]"
            priority={false}
          />
          <span className="absolute inset-0 bg-moss/20 transition-colors duration-300 group-hover:bg-moss/30" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-moss shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
            <Play size={28} strokeWidth={1.5} className="ml-1 fill-moss" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}
