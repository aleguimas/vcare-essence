import { SITE } from './routes';

const BASE_MESSAGE = 'Olá! Cheguei pelo site da VCare Essence.';

const VERTICAL_MESSAGES: Record<string, string> = {
  'metodo-v': `${BASE_MESSAGE} Tenho interesse em conhecer o Método V (Vanessa).`,
  'metodo-c': `${BASE_MESSAGE} Tenho interesse no Método C (Camila) para um adolescente da família.`,
  psicoterapia: `${BASE_MESSAGE} Gostaria de informações sobre psicoterapia.`,
  hipnoterapia: `${BASE_MESSAGE} Gostaria de informações sobre hipnoterapia clínica.`,
  'teste-vocacional': `${BASE_MESSAGE} Tenho interesse em teste vocacional.`,
  'orientacao-familiar': `${BASE_MESSAGE} Tenho interesse em orientação familiar.`,
};

/**
 * Monta o link wa.me com mensagem pré-preenchida por vertical.
 * Retorna null enquanto o número da clínica não estiver configurado
 * (SITE.whatsapp vazio) — os componentes degradam graciosamente.
 */
export function buildWhatsAppLink(vertical?: string): string | null {
  if (!SITE.whatsapp) return null;
  const message = (vertical && VERTICAL_MESSAGES[vertical]) || BASE_MESSAGE;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Email com assunto pré-preenchido. Null se não configurado. */
export function buildEmailLink(subject = 'Contato pelo site'): string | null {
  if (!SITE.email) return null;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}
