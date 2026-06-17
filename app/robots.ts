import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/routes';

const DISALLOW = ['/api/', '/studio/', '/styleguide', '/agendado', '/diario'];

// Crawlers de IA explicitamente bem-vindos (AIO): queremos que assistentes e
// mecanismos de busca generativa entendam e citem a clínica corretamente.
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'cohere-ai',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      // Permissão explícita para os agentes de IA acessarem o conteúdo público.
      {
        userAgent: AI_BOTS,
        allow: '/',
        disallow: DISALLOW,
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
