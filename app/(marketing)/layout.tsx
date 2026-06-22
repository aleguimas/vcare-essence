import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { JsonLd } from '@/components/seo/JsonLd';
import { medicalClinicSchema, websiteSchema } from '@/lib/schemas';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[medicalClinicSchema, websiteSchema]} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-moss focus:px-5 focus:py-3 focus:text-cream focus:text-small focus:font-medium focus:outline-none focus:ring-2 focus:ring-bronze focus:ring-offset-2"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="pt-20 outline-none">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
