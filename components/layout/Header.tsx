'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  {
    label: 'A Casa',
    href: ROUTES.aCasa,
    children: [
      { label: 'A Casa', href: ROUTES.aCasa },
      { label: 'Experiência Sensorial', href: ROUTES.experienciaSensorial },
      { label: 'Endereço', href: ROUTES.endereco },
      { label: 'Tour', href: ROUTES.tour },
    ],
  },
  {
    label: 'Métodos',
    href: ROUTES.metodoV,
    children: [
      { label: 'Método V', href: ROUTES.metodoV }, // TODO: nome final das sócias
      { label: 'Método C', href: ROUTES.metodoC }, // TODO: nome final das sócias
    ],
  },
  {
    label: 'Cuidados',
    href: ROUTES.cuidados,
    children: [
      { label: 'Psicoterapia', href: ROUTES.psicoterapia },
      { label: 'Hipnoterapia', href: ROUTES.hipnoterapia },
      { label: 'Teste Vocacional', href: ROUTES.testeVocacional },
      { label: 'Orientação Familiar', href: ROUTES.orientacaoFamiliar },
      { label: 'Online', href: ROUTES.atendimentoOnline },
    ],
  },
  {
    label: 'Profissionais',
    href: ROUTES.profissionais,
    children: [
      { label: 'Vanessa Albuquerque', href: ROUTES.vanessa },
      { label: 'Camila Clemente', href: ROUTES.camila },
      { label: 'Convidados', href: ROUTES.convidados },
    ],
  },
  { label: 'Diário', href: ROUTES.diario },
  { label: 'Sou profissional', href: ROUTES.souProfissional },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-400 ease-soft',
        scrolled
          ? 'bg-cream/90 backdrop-blur-sm shadow-[0_1px_0_0_var(--color-line)] py-3'
          : 'bg-cream/80 backdrop-blur-sm py-5',
      )}
    >
      <div className="mx-auto max-w-container px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={ROUTES.home}
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
          aria-label="VCare Essence — página inicial"
        >
          {/* TODO: substituir por <Image> com SVG do logo quando disponível */}
          <span className="font-serif text-moss tracking-tight text-[1.1rem] leading-none">
            VCare<span className="text-bronze"> Essence</span>
          </span>
        </Link>

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) =>
            'children' in item ? (
              <DesktopDropdown key={item.href} item={item} currentPath={pathname} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-small font-sans font-medium rounded-full transition-colors duration-300 ease-soft',
                  pathname === item.href
                    ? 'text-moss'
                    : 'text-ink hover:text-moss',
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href={ROUTES.agendar}>Agendar</Link>
          </Button>

          {/* Hamburger — apenas mobile */}
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <button
                className="lg:hidden p-2 -mr-2 text-moss rounded-full transition-colors hover:bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </Dialog.Trigger>

            <AnimatePresence>
              {mobileOpen && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild>
                    <motion.div
                      className="fixed inset-0 z-40 bg-black/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Dialog.Overlay>

                  <Dialog.Content asChild aria-label="Menu de navegação">
                    <motion.div
                      className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-cream shadow-xl flex flex-col"
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="flex items-center justify-between px-6 py-5 border-b border-line">
                        <span className="font-serif text-moss text-[1.1rem]">
                          VCare<span className="text-bronze"> Essence</span>
                        </span>
                        <Dialog.Close asChild>
                          <button
                            className="p-2 -mr-2 text-moss rounded-full transition-colors hover:bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                            aria-label="Fechar menu"
                          >
                            <X size={20} strokeWidth={1.5} />
                          </button>
                        </Dialog.Close>
                      </div>

                      <nav
                        className="flex-1 overflow-y-auto px-6 py-8 space-y-1"
                        aria-label="Navegação mobile"
                      >
                        {NAV_ITEMS.map((item) => (
                          <MobileNavItem
                            key={item.href}
                            item={item}
                            onClose={() => setMobileOpen(false)}
                          />
                        ))}
                      </nav>

                      <div className="px-6 pb-8 pt-4 border-t border-line">
                        <Button asChild size="lg" className="w-full">
                          <Link href={ROUTES.agendar}>Agendar</Link>
                        </Button>
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}

/* ─── Desktop dropdown ───────────────────────────────────────────────────── */

interface NavItem {
  label: string;
  href: string;
  children?: ReadonlyArray<{ label: string; href: string }>;
}

function DesktopDropdown({
  item,
  currentPath,
}: {
  item: NavItem & { children: ReadonlyArray<{ label: string; href: string }> };
  currentPath: string;
}) {
  const isActive = currentPath.startsWith(item.href);

  return (
    <div className="relative group">
      <Link
        href={item.href}
        className={cn(
          'flex items-center gap-1 px-3 py-2 text-small font-sans font-medium rounded-full transition-colors duration-300 ease-soft',
          isActive ? 'text-moss' : 'text-ink hover:text-moss',
        )}
      >
        {item.label}
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:rotate-180"
        />
      </Link>

      {/* Dropdown panel */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-soft">
        <div className="bg-cream border border-line rounded-xl shadow-lg py-2 min-w-48">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                'block px-4 py-2.5 text-small font-sans transition-colors duration-200',
                currentPath === child.href
                  ? 'text-bronze-400 font-medium'
                  : 'text-ink hover:text-moss hover:bg-cream-200',
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile nav item ────────────────────────────────────────────────────── */

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!('children' in item) || !item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block py-3 px-2 text-body font-sans font-medium text-ink border-b border-line hover:text-moss transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full py-3 px-2 text-body font-sans font-medium text-ink hover:text-moss transition-colors"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={cn('transition-transform duration-300', open && 'rotate-180')}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-4 space-y-1">
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="block py-2 px-2 text-small font-sans text-muted hover:text-moss transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
