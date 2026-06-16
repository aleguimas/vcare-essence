import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES, SITE } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Política de Privacidade · VCare Essence',
  description:
    'Como a VCare Essence coleta, usa e protege seus dados pessoais, incluindo dados sensíveis de saúde, conforme a LGPD.',
  alternates: { canonical: ROUTES.politicaPrivacidade },
};

// NOTA: minuta sujeita a revisão jurídica antes do go-live (responsabilidade das sócias).
const SECTIONS = [
  {
    title: '1. Quem somos',
    body: [
      `A ${SITE.name} é uma clínica de saúde mental localizada no RioMar Trade Center, Torre 4, Av. República do Líbano, 251, Pina, Recife, PE. Esta política descreve como tratamos os dados pessoais coletados por meio deste site e dos nossos canais de atendimento.`,
      'Para questões sobre proteção de dados, entre em contato pelo email indicado ao final desta política.', // TODO: definir email/DPO com as sócias
    ],
  },
  {
    title: '2. Quais dados coletamos',
    body: [
      'Coletamos apenas os dados necessários para o atendimento e a comunicação: nome, email, telefone/WhatsApp e as informações que você nos envia espontaneamente por formulários (por exemplo, ao se candidatar a uma residência clínica ou solicitar reserva de sala).',
      'Dados de saúde mental são dados pessoais sensíveis, nos termos da Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018). Tratamos esses dados com sigilo profissional e segurança reforçada, e nunca os solicitamos por meio deste site.',
    ],
  },
  {
    title: '3. Para que usamos os dados',
    body: [
      'Utilizamos seus dados para responder ao seu contato, agendar atendimentos, avaliar candidaturas profissionais e melhorar a experiência do site. Não usamos seus dados para finalidades incompatíveis com aquelas para as quais foram coletados.',
    ],
  },
  {
    title: '4. Compartilhamento',
    body: [
      'Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais. Eventuais operadores (como serviços de email transacional e agendamento) tratam dados estritamente para viabilizar o serviço, sob obrigação de confidencialidade.',
    ],
  },
  {
    title: '5. Seus direitos',
    body: [
      'Você pode, a qualquer momento, solicitar acesso, correção, portabilidade ou exclusão dos seus dados, bem como revogar consentimentos. Para exercer esses direitos, entre em contato pelos canais informados ao final desta política.',
    ],
  },
  {
    title: '6. Retenção e segurança',
    body: [
      'Mantemos seus dados apenas pelo tempo necessário às finalidades descritas ou conforme exigências legais. Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração.',
    ],
  },
  {
    title: '7. Cookies',
    body: [
      'Este site pode utilizar cookies e ferramentas de análise (como Google Analytics) para entender o uso das páginas e melhorar a navegação. Você pode gerenciar cookies nas configurações do seu navegador.',
    ],
  },
];

export default function PoliticaPrivacidadePage() {
  return (
    <Section tone="cream" size="lg">
      <Container narrow>
        <Eyebrow>Privacidade</Eyebrow>
        <Heading as="h1" size="display-md" className="mt-5">
          Política de Privacidade
        </Heading>
        <p className="mt-4 text-small text-muted font-sans">
          {/* TODO: confirmar data de vigência no go-live */}
          Última atualização: a definir.
        </p>

        <div className="mt-12 space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <Heading as="h2" size="h3" serif={false} className="text-moss">
                {section.title}
              </Heading>
              <div className="mt-3 space-y-4 text-body text-ink/80 leading-relaxed">
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          <div>
            <Heading as="h2" size="h3" serif={false} className="text-moss">
              8. Contato
            </Heading>
            <p className="mt-3 text-body text-ink/80 leading-relaxed">
              {/* TODO: inserir email do encarregado (DPO) e CNPJ quando confirmados */}
              Para questões sobre seus dados, fale com a gente pelo{' '}
              <Link href={ROUTES.agendar} className="text-bronze underline underline-offset-4 hover:text-bronze-400">
                canal de contato
              </Link>
              . Email do encarregado de dados a ser informado.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
