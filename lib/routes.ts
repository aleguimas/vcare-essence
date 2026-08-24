export const ROUTES = {
  home: '/',
  aCasa: '/a-casa',
  experienciaSensorial: '/a-casa/experiencia-sensorial',
  endereco: '/a-casa/endereco',
  tour: '/a-casa/tour',
  curadoria: '/a-casa/curadoria',
  metodoV: '/mep', // MEP, Mapeamento Emocional Profundo (antes "Método V")
  metodoElo: '/metodo-elo', // Método Elo (antes "Método C"), Camila Clemente
  cuidados: '/cuidados',
  psicoterapia: '/cuidados/psicoterapia',
  hipnoterapia: '/cuidados/hipnoterapia',
  testeVocacional: '/cuidados/teste-vocacional',
  orientacaoFamiliar: '/cuidados/orientacao-familiar',
  atendimentoOnline: '/cuidados/atendimento-online',
  profissionais: '/profissionais',
  vanessa: '/profissionais/vanessa-albuquerque',
  camila: '/profissionais/camila-clemente',
  convidados: '/profissionais/convidados',
  diario: '/diario',
  souProfissional: '/sou-profissional',
  consultorioResidente: '/sou-profissional/consultorio-residente',
  salaGravacoes: '/sou-profissional/sala-gravacoes',
  agendar: '/agendar',
  politicaPrivacidade: '/politica-de-privacidade',
  termosDeUso: '/termos-de-uso',
} as const;

export const SITE = {
  name: 'VCare Essence',
  url: 'https://vcareessence.com.br',
  tagline: 'A primeira clínica sensorial de Recife.',
  description:
    'Clínica boutique de saúde mental no RioMar Trade Center. Cuidamos do que ninguém vê: a mente, o emocional, a essência. Atendimento presencial em Recife e online.',
  address: {
    street: 'Av. República do Líbano, 251',
    complement: 'RioMar Trade Center, Torre 4',
    neighborhood: 'Pina',
    city: 'Recife',
    state: 'PE',
    country: 'BR',
    zip: '51110-160', // TODO: verificar CEP exato com as sócias
  },
  phone: '', // TODO: aguardar decisão das sócias
  whatsapp: '5581997671049', // Camila Clemente, número padrão (home e geral)
  whatsappVanessa: '5581997865560', // Vanessa Albuquerque, páginas dela
  instagram: '', // TODO: aguardar decisão das sócias
  email: '', // TODO: aguardar decisão das sócias
} as const;

/**
 * Vídeo de tour da clínica no YouTube. Fonte única usada pelo player
 * (home e /a-casa/tour) e pelo JSON-LD VideoObject (SEO).
 */
export const TOUR_VIDEO = {
  videoId: 'S9EHySBbY0s',
  title: 'Sinta um pouco da Experiência VCare',
  description:
    'Um passeio pelo espaço da VCare Essence no RioMar Trade Center: recepção, salas de atendimento, céu estrelado em fibra óptica e os detalhes sensoriais que fazem parte do tratamento.',
  uploadDate: '2026-06-17', // data de publicação no YouTube, confirmada pelas sócias
} as const;

/**
 * Base do Cal.com (username). Definido via NEXT_PUBLIC_CALCOM_USERNAME.
 * Enquanto vazio, o segmentador degrada para WhatsApp/email.
 */
export const CALCOM_USERNAME = process.env.NEXT_PUBLIC_CALCOM_USERNAME ?? '';

/** calLinks por vertical, usados pelo embed do Cal.com. */
export const CAL_LINKS = {
  metodoV: 'primeiro-encontro-mep',
  metodoElo: 'conversa-inicial-metodo-elo',
  psicoterapia: 'psicoterapia-camila',
  hipnoterapia: 'hipnoterapia-vanessa',
  testeVocacional: 'teste-vocacional-camila',
  orientacaoFamiliar: 'orientacao-familiar-camila',
} as const;

export function buildCalLink(slug: string): string | null {
  if (!CALCOM_USERNAME) return null;
  return `${CALCOM_USERNAME}/${slug}`;
}
