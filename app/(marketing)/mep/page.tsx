import type { Metadata } from 'next';
import { MethodHero } from '@/components/sections/method/MethodHero';
import { MethodSteps } from '@/components/sections/method/MethodSteps';
import { MethodCases } from '@/components/sections/method/MethodCases';
import { MethodProfessional } from '@/components/sections/method/MethodProfessional';
import { MethodFAQ } from '@/components/sections/method/MethodFAQ';
import { MethodFinalCTA } from '@/components/sections/method/MethodFinalCTA';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/schemas';
import { ROUTES } from '@/lib/routes';

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Início', path: ROUTES.home },
  { name: 'MEP', path: ROUTES.metodoV },
]);

// TODO: substituir pelo nome final do método, aguardar decisão das sócias
export const metadata: Metadata = {
  title: 'MEP · Para destravar emocionalmente',
  description:
    'Trava emocional não é fraqueza, é informação. Vanessa Albuquerque, hipnoterapeuta com 14 anos de prática, conduz um método autoral em encontros estruturados, não em anos de terapia. Para empresários prontos para o próximo nível.',
  alternates: { canonical: ROUTES.metodoV },
  openGraph: {
    title: 'MEP · Para destravar emocionalmente · VCare Essence',
    description:
      'Trava emocional não é fraqueza, é informação. Hipnoterapia clínica para empresários.',
    // OG image gerada dinamicamente por opengraph-image.tsx
  },
};

// ─── Dados do método ──────────────────────────────────────────────────────────

const STEPS = [
  {
    number: 1,
    title: 'Encontrar a trava no inconsciente',
    description:
      'Diagnóstico profundo, não superficial. A hipnoterapia clínica é a ferramenta para acessar onde o pensamento consciente não chega.',
  },
  {
    number: 2,
    title: 'Ir até a raiz',
    description:
      'Investigação da origem, não do sintoma. O que se manifesta como paralisia hoje frequentemente tem origem em um padrão antigo.',
  },
  {
    number: 3,
    title: 'Elaborar um plano exclusivo',
    description:
      'Não é pacote. Cada plano é desenhado a partir do seu caso, do seu momento, da sua trava específica.',
  },
  {
    number: 4,
    title: 'Acompanhar de forma integral, em encontros',
    description:
      'Não em anos de terapia sem fim. O acompanhamento é proporcional ao que precisa ser movido.',
  },
];

// TODO: substituir por casos reais fornecidos pelas sócias
const CASES = [
  {
    number: 1,
    title: 'A decisão que nunca saía do papel',
    paragraphs: [
      'Chegou com uma planilha. Tinha mapeado cada variável do negócio que precisava vender. Os números faziam sentido. A saída também. Mas cada vez que marcava uma reunião com possíveis compradores, algo o impedia de ir. Cancelava. Reagendava. Esperava.',
      'Na hipnoterapia, o que apareceu não foi medo de errar o preço. Foi a certeza, enterrada em uma memória de infância, de que vender o que se constrói com as próprias mãos é o mesmo que abandonar. O negócio não era só um ativo, era uma identidade que ele não sabia ainda como trocar.',
      'Três encontros depois, ele fechou a negociação. Não porque resolveu a planilha. Porque entendeu o que estava travando antes de ela existir.',
    ],
  },
  {
    number: 2,
    title: 'O teto que ela mesma construiu',
    paragraphs: [
      'Faturamento crescendo. Equipe funcionando. Produto no mercado há quatro anos. E mesmo assim, toda vez que chegava a hora de apresentar a empresa para investidores, a voz saía diferente. Mais baixa. Mais hesitante. Como se algo dentro dela não acreditasse no que os números estavam dizendo.',
      'O que apareceu foi uma crença antiga, formada muito antes de qualquer negócio existir: a de que quem ocupa espaço demais perde o que tem. A autossabotagem não era falta de preparo, era proteção de uma versão mais velha de si mesma.',
      'O trabalho não foi de convencimento racional. Foi de atualização. A versão dela que existe hoje, com o que construiu, não precisa mais dessa proteção. E quando isso ficou claro por dentro, ficou claro por fora também.',
    ],
  },
];

const VANESSA_BIO = [
  'Hipnoterapeuta clínica com 14 anos de prática, formada e com atuação contínua nas bases da hipnoterapia clínica e do acesso ao inconsciente como ferramenta de transformação.',
  'Ao longo de mais de uma década, desenvolveu um método autoral que combina diagnóstico aprofundado, hipnoterapia clínica e acompanhamento estruturado, voltado especificamente para empresários e líderes que chegam a um ponto de paralisia sem explicação racional aparente.',
  'Co-fundadora da VCare Essence, acredita que o ambiente é parte do processo terapêutico, não cenário. É nesse princípio que a clínica foi construída.',
];

const FAQ_V = [
  {
    question: 'Como funciona a hipnoterapia clínica? Eu fico inconsciente?',
    answer:
      'Não. A hipnoterapia clínica é um estado de atenção focada, você permanece consciente e com memória do que acontece. O que muda é o acesso: em estado hipnótico, o pensamento analítico recua e o inconsciente fica mais disponível. Não há perda de controle nem espetáculo. É uma ferramenta clínica regulamentada.',
  },
  {
    question: 'Em que difere de terapia tradicional?',
    answer:
      'A terapia tradicional semanal trabalha principalmente com o conteúdo consciente, o que você já sabe sobre si mesmo, relatado em palavras. A hipnoterapia clínica acessa camadas mais profundas, onde padrões se formaram antes de se tornarem pensamentos articulados. Para o perfil de quem atendo, empresários com um bloqueio específico,  isso encurta o caminho significativamente.',
  },
  {
    question: 'Quantos encontros costuma durar?',
    answer:
      'Depende do caso e da trava. Alguns processos se resolvem em 4 a 6 encontros intensivos. Outros pedem mais tempo. O que não existe aqui é terapia por tempo indeterminado como modelo padrão. O primeiro encontro é de diagnóstico, a partir dele, construímos juntos uma estimativa realista.',
  },
  {
    question: 'Atende online com a mesma profundidade?',
    answer:
      'Sim. A hipnoterapia clínica funciona bem no formato online desde que haja um espaço adequado, sem interrupções e com áudio de qualidade. Alguns casos pedem presencial, isso fica claro no primeiro encontro de diagnóstico.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'O investimento não está publicado aqui, não porque seja um segredo, mas porque o método não opera em consulta avulsa. O valor é composto a partir do plano desenhado para cada caso. No primeiro encontro de diagnóstico, isso fica claro. Se não houver fit, não há compromisso.',
  },
  {
    question: 'Qual é o próximo passo se eu quiser conhecer mais?',
    answer:
      'Agendar o primeiro encontro, que é uma conversa de diagnóstico, não uma sessão de hipnoterapia. Dura cerca de 60 minutos. Você sai com mais clareza sobre o que está acontecendo e, se fizer sentido, com uma proposta de como trabalhar juntos.',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MetodoVPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {/* 01 · Hero editorial, sem CTA imediato */}
      <MethodHero
        eyebrow="MEP · Mapeamento Emocional Profundo"
        headline={
          <>
            Você não está cansado.{' '}
            <em className="italic text-bronze">Você está travado.</em>
          </>
        }
        subheadline="Para empresários e empresárias que já conquistaram muito e sentem algo invisível impedindo o próximo passo."
      />

      {/* 02 · A trava, sintomas reconhecíveis */}
      <Section tone="cream">
        <Container narrow>
          <Eyebrow>A trava</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4 max-w-prose">
            A maioria dos sucessos chega em um ponto em que parar não é opção, e seguir, também
            não.
          </Heading>

          <div className="mt-10 space-y-4">
            <p className="text-lead text-ink/80">
              Não é cansaço. Não é depressão. Não é falta de competência, você tem prova de sobra
              disso. É algo mais sutil e mais profundo: uma trava que o pensamento consciente não
              consegue alcançar, e muito menos resolver.
            </p>
            <p className="text-body text-ink/70">
              Ela se manifesta de formas diferentes em cada pessoa. Em algumas, como paralisia
              diante de uma decisão estratégica que deveria ser simples. Em outras, como
              autossabotagem nos momentos mais importantes, quando tudo está em jogo e algo,
              inexplicavelmente, vai errado por dentro. Para muitas, como uma sensação crescente de
              ter chegado no próprio teto, sem entender por quê.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {[
              'Paralisia diante de uma próxima decisão estratégica',
              'Autossabotagem em momentos-chave',
              'Sensação de "chegou no meu teto" sem explicação racional',
              'Insatisfação com o platô, mesmo com tudo aparentemente em ordem',
              'Já tentou terapia, não voltou, ou não viu resultado para esse ponto específico',
            ].map((symptom) => (
              <div key={symptom} className="flex items-start gap-4">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-bronze" aria-hidden="true" />
                <p className="text-body text-ink/80">{symptom}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-body text-ink/70 font-sans">
            Se você se reconhece em algum desses pontos, e se já descartou as explicações
            racionais, provavelmente não é o que você está pensando. É uma trava. E trava tem raiz.
          </p>
        </Container>
      </Section>

      {/* 03 · Por que terapia comum não funcionou */}
      <Section tone="sand">
        <Container narrow>
          <Eyebrow>Por que terapia comum não funcionou, e isso não é culpa sua</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4 max-w-prose">
            O problema não é falta de informação sobre você. É acesso ao que está abaixo da
            informação.
          </Heading>

          <div className="mt-8 space-y-5">
            <p className="text-lead text-ink/80">
              A terapia tradicional semanal é uma ferramenta valiosa, para muitas pessoas e
              muitos contextos. Mas ela opera principalmente com o que você já sabe sobre si
              mesmo: o que você verbaliza, o que você analisa, o que você traz conscientemente
              para a sessão.
            </p>
            <p className="text-body text-ink/70">
              Para o tipo de bloqueio que afeta empresários no nível que estou descrevendo, isso
              não é suficiente. A trava não está no que você pensa sobre si mesmo. Está no que
              ficou gravado antes de você ter palavras para descrever, em padrões antigos que o
              inconsciente ainda opera como proteção, mesmo quando eles já não fazem sentido para
              quem você se tornou.
            </p>
            <p className="text-body text-ink/70">
              A hipnoterapia clínica não substitui a terapia. Para determinados casos, acessa
              onde ela não chega, e faz isso de forma estruturada, segura e com método.
            </p>
          </div>
        </Container>
      </Section>

      {/* 04 · O método em 4 movimentos */}
      <MethodSteps steps={STEPS} tone="cream" />

      {/* 05 · Para quem é */}
      <Section tone="sand">
        <Container narrow>
          <Eyebrow>Para quem é</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4">
            Para quem chegou longe, e sente que algo específico está travando o próximo passo.
          </Heading>
          <div className="mt-8 space-y-4">
            <p className="text-lead text-ink/80">
              Trabalho com empresários e empresárias que já têm trajetória construída, que sabem
              o que querem e que identificam, com clareza, que o obstáculo não é externo, é
              interno.
            </p>
            <p className="text-body text-ink/70">
              Pessoas que já tentaram outras abordagens e não encontraram resultado para esse
              ponto específico. Que têm disponibilidade real, de tempo, atenção e intenção, para
              um processo que exige presença. Que preferem encontros focados a anos de sessões
              abertas.
            </p>
          </div>
        </Container>
      </Section>

      {/* 06 · Para quem NÃO é, anti-positioning */}
      <Section tone="cream">
        <Container narrow>
          <Eyebrow>Para quem não é</Eyebrow>
          <Heading as="h2" size="h2" className="mt-4">
            A honestidade sobre fit é parte do método.
          </Heading>
          <div className="mt-8 space-y-3">
            {[
              {
                text: 'Não é para quem busca terapia semanal de longo prazo, para isso, recomendamos a Camila ou um dos profissionais convidados da clínica.',
              },
              {
                text: 'Não é para quem busca medicação, não fazemos psiquiatria nesta vertical.',
              },
              {
                text: 'Não é para adolescentes, para essa fase, o Método C é mais adequado.',
              },
              {
                text: 'Não é para quem busca o menor preço de consulta, o método opera em outra lógica.',
              },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-4 py-4 border-b border-line last:border-0">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-line" aria-hidden="true" />
                <p className="text-body text-ink/70">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 07 · Casos editoriais */}
      <MethodCases cases={CASES} />

      {/* 08 · Vanessa Albuquerque */}
      <MethodProfessional
        name="Vanessa Albuquerque"
        role="Hipnoterapeuta Clínica"
        crp="CRP 02/15875"
        bio={VANESSA_BIO}
        signature="Acesso a raiz e destravo o que te impede de avançar com Método Exclusivo e resultado imediato."
        profileHref={ROUTES.vanessa}
        imgSrc="/images/profissionais/vanessa-albuquerque-vcare-essence-01.webp"
        imgAlt="Vanessa Albuquerque, hipnoterapeuta da VCare Essence"
      />

      {/* 09 · FAQ */}
      <MethodFAQ questions={FAQ_V} tone="sand" />

      {/* 10 · CTA final */}
      <MethodFinalCTA
        eyebrow="O encontro começa aqui"
        headline="Um primeiro encontro é uma conversa de diagnóstico. Não compromisso."
        subtext="A partir dele, decidimos juntos se há fit para um plano."
        ctaLabel="Agendar primeiro encontro"
      />
    </>
  );
}
