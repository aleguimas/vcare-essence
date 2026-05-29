import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      // Adicionar CDN do Sanity quando configurado no Sprint 08
      // { protocol: 'https', hostname: 'cdn.sanity.io' }
    ],
  },

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  async redirects() {
    return [
      // TODO: ativar após decisão das sócias sobre Ansiedade Zero (ver 03_sitemap_routes.md)
      // {
      //   source: '/ansiedade-zero',
      //   destination: '/metodo-v',
      //   permanent: true,
      // },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default config;
