import { SITE, ROUTES } from './routes';

const BASE_MESSAGE = 'Olá! Cheguei pelo site da VCare Essence.';

const VERTICAL_MESSAGES: Record<string, string> = {
  'metodo-v': `${BASE_MESSAGE} Tenho interesse em conhecer o MEP (Vanessa).`,
  'metodo-elo': `${BASE_MESSAGE} Tenho interesse no Método ELO (Camila) para um adolescente da família.`,
  psicoterapia: `${BASE_MESSAGE} Gostaria de informações sobre psicoterapia.`,
  hipnoterapia: `${BASE_MESSAGE} Gostaria de informações sobre hipnoterapia clínica.`,
  'teste-vocacional': `${BASE_MESSAGE} Tenho interesse em teste vocacional.`,
  'orientacao-familiar': `${BASE_MESSAGE} Tenho interesse em orientação familiar.`,
  sublocacao: `${BASE_MESSAGE} Gostaria de saber valores e condições da sublocação de salas.`,
};

/**
 * Páginas conduzidas pela Vanessa usam o WhatsApp dela; o restante do site
 * (home, páginas da Camila e verticais clínicas dela) usa o número padrão (Camila).
 * Sublocação de salas (sou-profissional) também é tratada pela Vanessa.
 */
const VANESSA_PATHS: readonly string[] = [
  ROUTES.vanessa,
  ROUTES.metodoV, // /mep
  ROUTES.hipnoterapia,
  ROUTES.souProfissional, // sublocação de salas (e subpáginas)
];

/** Número de WhatsApp adequado ao caminho atual. Vazio se não configurado. */
export function whatsappNumberForPath(pathname?: string | null): string {
  if (pathname && VANESSA_PATHS.some((p) => pathname.startsWith(p))) {
    return SITE.whatsappVanessa;
  }
  return SITE.whatsapp;
}

/**
 * Monta o link wa.me com mensagem pré-preenchida por vertical, usando o número
 * correspondente ao caminho (Vanessa nas páginas dela, Camila no restante).
 * Retorna null enquanto o número não estiver configurado, os componentes
 * degradam graciosamente.
 */
export function buildWhatsAppLink(vertical?: string, pathname?: string | null): string | null {
  const number = whatsappNumberForPath(pathname);
  if (!number) return null;
  const message = (vertical && VERTICAL_MESSAGES[vertical]) || BASE_MESSAGE;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Email com assunto pré-preenchido. Null se não configurado. */
export function buildEmailLink(subject = 'Contato pelo site'): string | null {
  if (!SITE.email) return null;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}
