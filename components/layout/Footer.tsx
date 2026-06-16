import Link from 'next/link';
import Image from 'next/image';
import { ROUTES, SITE } from '@/lib/routes';

const FOOTER_COLS = [
  {
    title: 'A Clínica',
    links: [
      { label: 'A Clínica', href: ROUTES.aCasa },
      { label: 'Experiência Sensorial', href: ROUTES.experienciaSensorial },
      { label: 'Endereço', href: ROUTES.endereco },
      { label: 'Tour', href: ROUTES.tour },
      { label: 'Curadoria', href: ROUTES.curadoria },
    ],
  },
  {
    title: 'Cuidados',
    links: [
      { label: 'Psicoterapia', href: ROUTES.psicoterapia },
      { label: 'Hipnoterapia', href: ROUTES.hipnoterapia },
      { label: 'Teste Vocacional', href: ROUTES.testeVocacional },
      { label: 'Orientação Familiar', href: ROUTES.orientacaoFamiliar },
      { label: 'Online', href: ROUTES.atendimentoOnline },
    ],
  },
  {
    title: 'Sou Profissional',
    links: [
      { label: 'Consultório Residente', href: ROUTES.consultorioResidente },
      { label: 'Sala para Gravações', href: ROUTES.salaGravacoes },
    ],
  },
] as const;

const FOOTER_EXTRA = [
  {
    title: 'Métodos',
    links: [
      { label: 'MEP', href: ROUTES.metodoV }, // TODO: nome final das sócias
      { label: 'Método C', href: ROUTES.metodoC }, // TODO: nome final das sócias
    ],
  },
  {
    title: 'Profissionais',
    links: [
      { label: 'Vanessa Albuquerque', href: ROUTES.vanessa },
      { label: 'Camila Clemente', href: ROUTES.camila },
      { label: 'Convidados', href: ROUTES.convidados },
    ],
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-moss text-cream/80">
      <div className="mx-auto max-w-container px-6 md:px-10 py-16 md:py-20">
        {/* Grid principal */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {/* Logo + tagline (coluna completa no mobile) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link
              href={ROUTES.home}
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-moss rounded-sm"
              aria-label="VCare Essence, página inicial"
            >
              <Image
                src="/images/logo/logo-horizontal.webp"
                alt="VCare Essence"
                width={499}
                height={160}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-3 text-small text-cream/60 max-w-xs leading-relaxed">
              {SITE.tagline}
            </p>
            <p className="mt-4 text-small text-cream/60 leading-relaxed">
              {SITE.address.street}
              <br />
              {SITE.address.complement}
              <br />
              {SITE.address.neighborhood}, {SITE.address.city}, {SITE.address.state}
            </p>
          </div>

          {/* Colunas de links */}
          {FOOTER_COLS.map((col) => (
            <FooterCol key={col.title} title={col.title} links={col.links} />
          ))}
        </div>

        {/* Segunda linha: Métodos + Profissionais + Agendar */}
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-5 border-t border-cream/10 pt-10">
          {FOOTER_EXTRA.map((col) => (
            <FooterCol key={col.title} title={col.title} links={col.links} />
          ))}

          <div>
            <p className="text-small font-semibold text-cream/40 uppercase tracking-wider mb-4">
              Diário
            </p>
            <Link
              href={ROUTES.diario}
              className="block text-small text-cream/70 hover:text-bronze-100 transition-colors"
            >
              Diário VCare
            </Link>
          </div>

          <div>
            <p className="text-small font-semibold text-cream/40 uppercase tracking-wider mb-4">
              Agendamento
            </p>
            <Link
              href={ROUTES.agendar}
              className="block text-small text-cream/70 hover:text-bronze-100 transition-colors"
            >
              Agendar consulta
            </Link>
            {SITE.whatsapp && (
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                className="block mt-2 text-small text-cream/70 hover:text-bronze-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>

        {/* Rodapé legal */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-small text-cream/40">
            {/* TODO: CRPs e CNPJ a confirmar com as sócias */}
            <span>CRP 02/15875, Vanessa Albuquerque</span>
            <span>CRP 02/19121, Camila Clemente</span>
            <span>CNPJ XX.XXX.XXX/0001-XX</span>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-small text-cream/40">
            <span>&copy; {currentYear} {SITE.name}</span>
            <Link href={ROUTES.politicaPrivacidade} className="hover:text-bronze-100 transition-colors">
              Política de privacidade
            </Link>
            <Link href={ROUTES.termosDeUso} className="hover:text-bronze-100 transition-colors">
              Termos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="text-small font-semibold text-cream/40 uppercase tracking-wider mb-4">
        {title}
      </p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-small text-cream/70 hover:text-bronze-100 transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
