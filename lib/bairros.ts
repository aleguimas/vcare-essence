import { ROUTES } from './routes';

export interface BairroEmphasis {
  title: string;
  href: string;
  reason: string;
}

export interface Bairro {
  slug: string;
  name: string;
  zona: string;
  /** Tempo/forma de chegar até a clínica */
  distance: string;
  /** Subtítulo do hero */
  intro: string;
  /** Parágrafos editoriais sobre o bairro e o atendimento, conteúdo único */
  about: string[];
  /** Verticais reforçadas para o perfil do bairro */
  emphasis: BairroEmphasis[];
  /** Logística específica de acesso */
  howToArrive: string[];
}

export const BAIRROS: Bairro[] = [
  {
    slug: 'boa-viagem',
    name: 'Boa Viagem',
    zona: 'Zona Sul',
    distance: 'cerca de 5 a 10 minutos do RioMar Trade Center',
    intro:
      'Atendimento psicológico e hipnoterapia clínica para quem vive e trabalha em Boa Viagem, a poucos minutos da orla.',
    about: [
      'Boa Viagem é o coração da Zona Sul do Recife: orla, avenidas movimentadas e uma concentração expressiva de executivos, empresários e profissionais liberais. É um bairro que vive em ritmo acelerado, e esse ritmo cobra um preço que nem sempre aparece de imediato.',
      'Para quem mora ou trabalha em Boa Viagem, a VCare Essence fica a poucos minutos: no RioMar Trade Center, no Pina, na divisa entre os dois bairros. A proximidade importa para um público que tem agenda cheia e pouca tolerância a deslocamento, chegar à clínica não deveria ser mais uma fonte de estresse.',
      'É também em Boa Viagem que encontramos muitos dos perfis para os quais o MEP foi desenhado: pessoas que já conquistaram muito e sentem algo invisível travando o próximo passo. Não é cansaço comum, é uma trava emocional que pede um trabalho diferente do que a terapia semanal genérica oferece.',
    ],
    emphasis: [
      {
        title: 'MEP, destravar empresários',
        href: ROUTES.metodoV,
        reason:
          'Para o perfil executivo de Boa Viagem que sente uma trava emocional impedindo o próximo passo.',
      },
      {
        title: 'Hipnoterapia clínica',
        href: ROUTES.hipnoterapia,
        reason: 'Para ansiedade, fobias e hábitos, questões pontuais que pedem método.',
      },
      {
        title: 'Psicoterapia',
        href: ROUTES.psicoterapia,
        reason: 'Acompanhamento clínico para adultos em ritmo de vida intenso.',
      },
    ],
    howToArrive: [
      'De carro, o acesso mais direto é pela Via Mangue ou pela Av. Conselheiro Aguiar até o complexo do RioMar, com estacionamento coberto na Torre 4.',
      'Para quem está na orla, o trajeto até o Pina leva poucos minutos pela Av. Boa Viagem.',
    ],
  },
  {
    slug: 'pina',
    name: 'Pina',
    zona: 'Zona Sul',
    distance: 'no próprio bairro, o RioMar Trade Center fica no Pina',
    intro:
      'A VCare Essence fica no Pina, no RioMar Trade Center. Atendimento de saúde mental no seu bairro, sem deslocamento.',
    about: [
      'O Pina vive um momento de transformação. Antiga vila de pescadores, hoje é um dos bairros que mais se valorizam no Recife, com o complexo RioMar, torres comerciais e residenciais, e uma mistura rara de vida de bairro com infraestrutura premium.',
      'Para quem mora no Pina, a VCare Essence é, literalmente, o atendimento de saúde mental do bairro. Estamos no RioMar Trade Center, Torre 4, o que significa que a primeira sessão pode acontecer sem deslocamento, sem trânsito, sem a fricção que muitas vezes adia o cuidado.',
      'Essa proximidade é parte do conceito da clínica. Acreditamos que o ambiente é parte do tratamento, e que cuidar começa antes da primeira palavra, desde a chegada tranquila ao espaço. Estar no seu bairro torna esse começo ainda mais leve.',
    ],
    emphasis: [
      {
        title: 'Psicoterapia',
        href: ROUTES.psicoterapia,
        reason: 'Acompanhamento clínico no seu bairro, para adolescentes e adultos.',
      },
      {
        title: 'Atendimento online',
        href: ROUTES.atendimentoOnline,
        reason: 'Mesmo perto, há quem prefira o conforto de casa, também oferecemos online.',
      },
      {
        title: 'Hipnoterapia clínica',
        href: ROUTES.hipnoterapia,
        reason: 'Para questões pontuais, com ciência, resultado rápido e eficaz.',
      },
    ],
    howToArrive: [
      'O RioMar Trade Center fica na Av. República do Líbano, 251. Moradores do Pina chegam a pé ou em poucos minutos de carro.',
      'O complexo é integrado ao RioMar Shopping, com estacionamento coberto e acessibilidade.',
    ],
  },
  {
    slug: 'setubal',
    name: 'Setúbal',
    zona: 'Zona Sul',
    distance: 'cerca de 10 minutos do RioMar Trade Center',
    intro:
      'Atendimento para famílias de Setúbal, teste vocacional, programa para adolescentes e orientação familiar.',
    about: [
      'Setúbal é uma das áreas mais residenciais e familiares da Zona Sul, na porção sul de Boa Viagem. É um bairro de famílias estabelecidas, com forte presença de adolescentes em fase escolar e pré-vestibular, exatamente o público para o qual o Método C foi construído.',
      'Para os pais de Setúbal que percebem que o filho era bom aluno e agora não consegue mais estudar, ou que a ansiedade pré-prova virou paralisia, a VCare Essence oferece um programa estruturado, não tutoria, não coaching, mas acompanhamento psicológico que envolve o adolescente e a família.',
      'A poucos minutos do bairro, no RioMar Trade Center, o atendimento combina proximidade com um ambiente projetado para acolher conversas difíceis, sobre escolhas, rendimento e o emocional de quem está crescendo.',
    ],
    emphasis: [
      {
        title: 'Método C, programa para adolescentes',
        href: ROUTES.metodoC,
        reason: 'Para famílias com adolescentes em pré-vestibular e queda de rendimento.',
      },
      {
        title: 'Teste vocacional',
        href: ROUTES.testeVocacional,
        reason: 'Apoio clínico na escolha de carreira, para ENEM e vestibular.',
      },
      {
        title: 'Orientação familiar',
        href: ROUTES.orientacaoFamiliar,
        reason: 'Quando a relação em casa fica tensa e a comunicação precisa de mediação.',
      },
    ],
    howToArrive: [
      'De Setúbal, o trajeto até o RioMar é direto pela Av. Boa Viagem ou pela Via Mangue, em torno de 10 minutos.',
      'Estacionamento coberto no complexo, com acesso à Torre 4.',
    ],
  },
  {
    slug: 'casa-forte',
    name: 'Casa Forte',
    zona: 'Zona Norte',
    distance: 'cerca de 20 a 25 minutos do RioMar Trade Center',
    intro:
      'Atendimento para famílias de Casa Forte, programa para adolescentes, teste vocacional e orientação familiar, presencial ou online.',
    about: [
      'Casa Forte é um dos bairros mais tradicionais da Zona Norte do Recife: arborizado, residencial, marcado por famílias estabelecidas e por uma vida de bairro que resistiu ao tempo. É um lugar de raízes, e de adolescentes que crescem sob expectativas que nem sempre conseguem nomear.',
      'Para as famílias de Casa Forte, a VCare Essence oferece tanto o atendimento presencial no Pina quanto a opção online, que elimina o deslocamento entre zonas da cidade sem perder profundidade clínica. Para muitos pais da Zona Norte, essa flexibilidade é o que torna o cuidado viável na rotina.',
      'O Método C, o teste vocacional e a orientação familiar são especialmente relevantes para o perfil do bairro: famílias que querem apoiar o filho na travessia da adolescência e da escolha de carreira, com lastro clínico e não com fórmulas prontas.',
    ],
    emphasis: [
      {
        title: 'Método C, programa para adolescentes',
        href: ROUTES.metodoC,
        reason: 'Para adolescentes de Casa Forte em fase de vestibular e organização emocional.',
      },
      {
        title: 'Orientação familiar',
        href: ROUTES.orientacaoFamiliar,
        reason: 'Para famílias tradicionais que buscam mediar conflitos e alinhar expectativas.',
      },
      {
        title: 'Atendimento online',
        href: ROUTES.atendimentoOnline,
        reason: 'Elimina o deslocamento da Zona Norte para a Zona Sul, com a mesma qualidade.',
      },
    ],
    howToArrive: [
      'De Casa Forte, o acesso ao RioMar se dá pela Av. Agamenon Magalhães e Via Mangue, em torno de 20 a 25 minutos conforme o trânsito.',
      'Para quem prefere evitar o deslocamento entre zonas, o atendimento online está disponível para todas as verticais clínicas.',
    ],
  },
  {
    slug: 'espinheiro',
    name: 'Espinheiro',
    zona: 'Zona Norte',
    distance: 'cerca de 15 a 20 minutos do RioMar Trade Center',
    intro:
      'Psicoterapia e orientação familiar para quem vive no Espinheiro, presencial no Pina ou online.',
    about: [
      'O Espinheiro é um bairro residencial tradicional da área central-norte do Recife, vizinho às Graças e ao Aflitos. Tem perfil de classe média e média-alta consolidada, com moradores que valorizam discrição e qualidade, o tipo de público que a VCare Essence atende.',
      'Para os moradores do Espinheiro, a clínica oferece psicoterapia com abordagem científica e orientação familiar com base na Terapêutica Sistêmica. São verticais que respondem às demandas mais comuns de quem vive em um bairro de famílias estabelecidas: processos pessoais, transições de vida e dinâmicas familiares que pedem mediação.',
      'O atendimento acontece no Pina, no RioMar Trade Center, ou online, uma alternativa prática para quem prefere não atravessar a cidade. A escolha do formato é parte da primeira conversa.',
    ],
    emphasis: [
      {
        title: 'Psicoterapia',
        href: ROUTES.psicoterapia,
        reason: 'Acompanhamento clínico para adultos e adolescentes do Espinheiro.',
      },
      {
        title: 'Orientação familiar',
        href: ROUTES.orientacaoFamiliar,
        reason: 'Mediação de dinâmicas familiares com base sistêmica.',
      },
      {
        title: 'Atendimento online',
        href: ROUTES.atendimentoOnline,
        reason: 'Para quem prefere não se deslocar entre zonas da cidade.',
      },
    ],
    howToArrive: [
      'Do Espinheiro, o trajeto até o RioMar passa pela Av. Agamenon Magalhães, em torno de 15 a 20 minutos.',
      'Atendimento online disponível para todas as verticais, sem necessidade de deslocamento.',
    ],
  },
  {
    slug: 'gracas',
    name: 'Graças',
    zona: 'Zona Norte',
    distance: 'cerca de 15 a 20 minutos do RioMar Trade Center',
    intro:
      'Atendimento de saúde mental para quem vive nas Graças, psicoterapia, hipnoterapia e o MEP.',
    about: [
      'As Graças é um dos bairros mais valorizados da área central do Recife: tradicional, arborizado e com forte presença de profissionais liberais, médicos e empresários. É um bairro de perfil exigente, que valoriza referência e discrição na hora de escolher um cuidado.',
      'Para os moradores das Graças, a VCare Essence oferece desde psicoterapia e hipnoterapia clínica até o MEP, o programa autoral de Vanessa Albuquerque para empresários e empresárias com uma trava emocional. O perfil profissional do bairro frequentemente encontra ressonância nesse trabalho.',
      'O atendimento é presencial no Pina, no RioMar Trade Center, ou online. Para um público que preza por tempo e discrição, as duas opções foram pensadas para reduzir fricção sem comprometer a profundidade do cuidado.',
    ],
    emphasis: [
      {
        title: 'MEP, destravar empresários',
        href: ROUTES.metodoV,
        reason: 'Para o perfil profissional e empresarial das Graças.',
      },
      {
        title: 'Psicoterapia',
        href: ROUTES.psicoterapia,
        reason: 'Acompanhamento clínico para adultos do bairro.',
      },
      {
        title: 'Hipnoterapia clínica',
        href: ROUTES.hipnoterapia,
        reason: 'Para questões pontuais, ansiedade, fobias, hábitos.',
      },
    ],
    howToArrive: [
      'Das Graças, o acesso ao RioMar se dá pela Av. Agamenon Magalhães e Via Mangue, em torno de 15 a 20 minutos.',
      'Estacionamento coberto no complexo, com acesso à Torre 4. Atendimento online também disponível.',
    ],
  },
];

export function getBairro(slug: string): Bairro | undefined {
  return BAIRROS.find((b) => b.slug === slug);
}

export const BAIRRO_SLUGS = BAIRROS.map((b) => b.slug);
