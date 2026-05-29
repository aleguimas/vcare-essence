'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  span?: 'normal' | 'wide' | 'tall'; // controla o tamanho no grid
}

interface EditorialGalleryProps {
  items: GalleryItem[];
}

export function EditorialGallery({ items }: EditorialGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null || i === 0 ? items.length - 1 : i - 1));
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % items.length));

  return (
    <>
      {/* Grid editorial assimétrico */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[240px]">
        {items.map((item, i) => {
          const spanClass =
            item.span === 'wide'
              ? 'col-span-2'
              : item.span === 'tall'
                ? 'row-span-2'
                : '';

          return (
            <button
              key={i}
              onClick={() => open(i)}
              className={`group relative rounded-xl overflow-hidden bg-sand cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 ${spanClass}`}
              aria-label={`Ver foto: ${item.alt}`}
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-600 ease-soft group-hover:scale-[1.03]"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 flex items-end p-4 bg-sand">
                  <p className="text-small text-muted/40 italic font-sans">{item.alt}</p>
                </div>
              )}
              {item.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-soft">
                  <p className="text-small text-cream/90 font-sans">{item.caption}</p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      <Dialog.Root open={lightboxIndex !== null} onOpenChange={(open) => !open && close()}>
        <AnimatePresence>
          {lightboxIndex !== null && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Dialog.Overlay>

              <Dialog.Content asChild aria-label="Visualização da foto">
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Fechar */}
                  <Dialog.Close asChild>
                    <button
                      className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 text-cream hover:bg-black/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label="Fechar"
                    >
                      <X size={20} strokeWidth={1.5} />
                    </button>
                  </Dialog.Close>

                  {/* Navegação */}
                  <button
                    onClick={prev}
                    className="absolute left-4 z-10 p-2 rounded-full bg-black/30 text-cream hover:bg-black/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft size={24} strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-4 z-10 p-2 rounded-full bg-black/30 text-cream hover:bg-black/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight size={24} strokeWidth={1.5} />
                  </button>

                  {/* Imagem */}
                  <div className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3]">
                    {items[lightboxIndex]?.src ? (
                      <Image
                        src={items[lightboxIndex]!.src}
                        alt={items[lightboxIndex]!.alt}
                        fill
                        sizes="100vw"
                        className="object-contain"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full bg-sand/20 rounded-lg flex items-center justify-center">
                        <p className="text-cream/40 font-sans text-small italic">
                          {items[lightboxIndex]?.alt}
                        </p>
                      </div>
                    )}
                    {items[lightboxIndex]?.caption && (
                      <p className="absolute -bottom-8 left-0 right-0 text-center text-small text-cream/60 font-sans">
                        {items[lightboxIndex]?.caption}
                      </p>
                    )}
                  </div>

                  {/* Contador */}
                  <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-small text-cream/40 font-sans">
                    {lightboxIndex + 1} / {items.length}
                  </p>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
