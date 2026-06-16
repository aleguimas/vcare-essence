import type { Metadata } from 'next';
import Script from 'next/script';
import { Toaster } from 'sonner';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import { buildMetadata } from '@/lib/seo';
import { CookieConsent } from '@/components/layout/CookieConsent';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Consent Mode v2, padrão negado até consentimento explícito (LGPD) */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: { background: '#3A4A3F', color: '#F5F1EA', border: 'none' },
          }}
        />
      </body>
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
