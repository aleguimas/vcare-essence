import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES, SITE } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Termos de Uso · VCare Essence',
  description:
    'Termos de uso do site da VCare Essence, incluindo a natureza informativa do conteúdo e as regras de agendamento.',
  alternates: { canonical: ROUTES.termosDeUso },
};

// NOTA: minuta sujeita a revisão jurídica antes do go-live (responsabilidade das sócias).
const SECTIONS = [
  {
    title: '1. Aceitação',
    body: [
      `Ao acessar e utilizar o site da ${SITE.name}, você concorda com estes Termos de Uso. Se não concordar, recomendamos não utilizar o site.`,
    ],
  },
  {
    title: '2. Natureza do conteúdo',
    body: [
      'O conteúdo deste site tem caráter informativo e educacional. Ele não substitui consulta, diagnóstico ou tratamento realizado por profissional de saúde habilitado. Nenhuma informação aqui publicada deve ser interpretada como promessa de resultado ou cura.',
      'Em situações de urgência ou risco, procure atendimento médico imediato ou os serviços públicos de emergência.',
    ],
  },
  {
    title: '3. Agendamentos',
    body: [
      'Solicitações de agendamento feitas pelo site (formulários, WhatsApp ou agenda online) estão sujeitas a confirmação. O agendamento só é considerado efetivado após a confirmação pela clínica.',
      'A política de cancelamento e remarcação é informada no momento da confirmação do atendimento.', // TODO: confirmar política com as sócias
    ],
  },
  {
    title: '4. Conduta profissional',
    body: [
      'Os atendimentos seguem os códigos de ética das respectivas profissões, incluindo as normas do Conselho Federal de Psicologia. O sigilo profissional é resguardado em todos os contextos de atendimento.',
    ],
  },
  {
    title: '5. Propriedade intelectual',
    body: [
      `Todo o conteúdo deste site, textos, imagens, identidade visual e marca, pertence à ${SITE.name} ou é utilizado mediante autorização. A reprodução sem autorização é vedada.`,
    ],
  },
  {
    title: '6. Alterações',
    body: [
      'Estes termos podem ser atualizados a qualquer momento. A versão vigente é sempre a publicada nesta página.',
    ],
  },
];

export default function TermosDeUsoPage() {
  return (
    <Section tone="cream" size="lg">
      <Container narrow>
        <Eyebrow>Termos</Eyebrow>
        <Heading as="h1" size="display-md" className="mt-5">
          Termos de Uso
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
        </div>
      </Container>
    </Section>
  );
}
