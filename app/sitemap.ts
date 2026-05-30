import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/routes';
import { BAIRRO_SLUGS } from '@/lib/bairros';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes = [
    '',
    '/a-casa',
    '/a-casa/experiencia-sensorial',
    '/a-casa/endereco',
    '/a-casa/tour',
    '/a-casa/curadoria',
    '/metodo-v',
    '/metodo-c',
    '/cuidados',
    '/cuidados/psicoterapia',
    '/cuidados/hipnoterapia',
    '/cuidados/teste-vocacional',
    '/cuidados/orientacao-familiar',
    '/cuidados/atendimento-online',
    '/profissionais',
    '/profissionais/vanessa-albuquerque',
    '/profissionais/camila-clemente',
    '/profissionais/convidados',
    '/diario',
    '/sou-profissional',
    '/sou-profissional/consultorio-residente',
    '/sou-profissional/sala-gravacoes',
    '/agendar',
    '/politica-de-privacidade',
    '/termos-de-uso',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1.0 : path.startsWith('/metodo') ? 0.9 : 0.7,
  }));

  const bairroRoutes = BAIRRO_SLUGS.map((slug) => ({
    url: `${base}/cuidados/em/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...bairroRoutes];
}
