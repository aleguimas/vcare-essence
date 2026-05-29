type GtagParams = Record<string, string | number | boolean | undefined>;

type WindowWithGtag = Window & {
  gtag?: (command: string, eventName: string, params?: GtagParams) => void;
};

/**
 * Dispara um evento GA4 de forma segura. No-op quando gtag não está
 * presente (SSR, GA não configurado, ou bloqueado pelo usuário).
 */
export function trackEvent(name: string, params?: GtagParams): void {
  if (typeof window === 'undefined') return;
  const w = window as WindowWithGtag;
  if (typeof w.gtag !== 'function') return;
  w.gtag('event', name, params ?? {});
}
