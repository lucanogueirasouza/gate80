import type { StaticImageData } from "next/image";
import escolaLogo from "@/public/logo_escola/logo_escola.png";
import farmandoAuraLogo from "@/public/logo_farmandoaura/logo_farmandoaura.png";
import psicologoLogo from "@/public/logo_psicologo/logo_psicologo.png";
import dashboardLogo from "@/public/logo_dashboard/Dashboard - Editado.png";
import portfolioLogo from "@/public/logo_portfolio/logotipo.png";
import vidracariaLogo from "@/public/logo_vidracaria/logo.png";
import maryLogo from "@/public/logo_mary/WhatsApp Image 2026-04-15 at 12.06.44 (1).jpeg";
import whatsappLogo from "@/public/logo_whatsapp/2.png";
import estoqueLogo from "@/public/logo_estoque/3.png";

export type ProjectCaseStudy = {
  slug: string;
  name: string;
  category: string;
  description: string;
  heroTag: string;
  heroTitle: string;
  heroBody: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroVideo?: string;
  frameClass: string;
  imageWrapClass: string;
  logo: StaticImageData;
  logoAlt: string;
  gallery: string[];
  sections: Array<{
    title: string;
    body: string;
    image: string;
    imageAlt: string;
    reverse?: boolean;
  }>;
  closingText: string;
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "farmando-aura",
    name: "Farmando Aura",
    category: "Pré-vestibular",
    description:
      "Plataforma educacional para o ENEM com cursos, questões, redação, simulados e painel de progresso.",
    heroTag: "+ Project",
    heroTitle: "Farmando Aura",
    heroBody:
      "Plataforma educacional criada para organizar o preparo para o ENEM em uma experiência clara, completa e agradável de usar.",
    heroImage: "/farmandoaura/home.png",
    heroImageAlt: "Tela inicial da plataforma Farmando Aura",
    frameClass: "bg-[#faf9f5]",
    imageWrapClass: "bg-[#dff0df]",
    logo: farmandoAuraLogo,
    logoAlt: "Logo da Farmando Aura",
    gallery: [
      "/farmandoaura/aulas.png",
      "/farmandoaura/flashcards.png",
      "/farmandoaura/pais.png",
      "/farmandoaura/pp.png",
    ],
    sections: [
      {
        title: "Visão geral da plataforma",
        body:
          "A estrutura principal foi pensada para reunir aulas, questões, redação e simulados em um mesmo fluxo. O objetivo foi diminuir atrito para o aluno e dar mais clareza sobre o que estudar a seguir.",
        image: "/farmandoaura/questoes.png",
        imageAlt: "Tela de questões da plataforma Farmando Aura",
      },
      {
        title: "Jornada de estudo",
        body:
          "Montamos telas específicas para conteúdos, resolução de questões e acompanhamento de progresso. A plataforma também considera responsáveis, painel administrativo e controle de planos, reforçando o lado operacional do produto.",
        image: "/farmandoaura/redacao.png",
        imageAlt: "Tela de redação da plataforma Farmando Aura",
        reverse: true,
      },
      {
        title: "Recursos de apoio",
        body:
          "A experiência inclui redação, simulados, flashcards e áreas de acompanhamento para manter consistência no estudo. Tudo foi desenhado com foco em leitura fácil, uso contínuo e boa performance.",
        image: "/farmandoaura/simulados.png",
        imageAlt: "Tela de simulados da plataforma Farmando Aura",
      },
    ],
    closingText:
      "O resultado foi uma plataforma educacional mais robusta, preparada para apoiar alunos e responsáveis com uma experiência organizada, funcional e escalável.",
  },
  {
    slug: "psicologo-virtual",
    name: "Psicólogo virtual",
    category: "Psicologia",
    description:
      "Site com bot psicólogo virtual focado em privacidade, sem login e sem salvar dados.",
    heroTag: "+ Project",
    heroTitle: "Psicólogo virtual",
    heroBody:
      "Um site pensado para acolher conversas com mais discrição, simplicidade e sensação de segurança desde o primeiro acesso.",
    heroImage: "/psicologo/Psicologo 1.jpg",
    heroImageAlt: "Tela principal do projeto Psicólogo virtual",
    frameClass: "bg-[#faf9f5]",
    imageWrapClass: "bg-[#ead8e5]",
    logo: psicologoLogo,
    logoAlt: "Logo do projeto Psicólogo virtual",
    gallery: [],
    sections: [
      {
        title: "Privacidade como base",
        body:
          "O projeto foi estruturado para transmitir segurança logo de início. Evitamos login, cadastro e qualquer salvamento de dados, reduzindo barreiras e respeitando a confidencialidade da experiência.",
        image: "/psicologo/Psicologo 2.jpg",
        imageAlt: "Segunda tela do projeto Psicólogo virtual",
      },
      {
        title: "Experiência simples e direta",
        body:
          "A interface foi desenhada para ser leve, intuitiva e sem ruído. O foco é fazer com que a pessoa entre, converse e se sinta confortável sem enfrentar complexidade desnecessária.",
        image: "/psicologo/Psicologo 3.jpg",
        imageAlt: "Terceira tela do projeto Psicólogo virtual",
        reverse: true,
      },
    ],
    closingText:
      "O resultado foi um site centrado em confiança e privacidade, pensado para oferecer uma experiência de conversa mais tranquila e sem fricção.",
  },
  {
    slug: "ee-odair-mandela",
    name: "E. E Odair Mandela",
    category: "Escola",
    description:
      "Website institucional completo, do desenvolvimento ao deploy na AWS.",
    heroTag: "+ Project",
    heroTitle: "E. E Odair Mandela",
    heroBody:
      "Um website institucional criado para apresentar a escola com mais clareza, melhorar a comunicação digital e consolidar uma base técnica mais profissional.",
    heroImage: "/escola/escola 1.jpg",
    heroImageAlt: "Tela principal do site institucional da escola",
    frameClass: "bg-[#faf9f5]",
    imageWrapClass: "bg-[#eef1d8]",
    logo: escolaLogo,
    logoAlt: "Logo da escola",
    gallery: [
      "/escola/escola 2.jpg",
      "/escola/escola 3.jpg",
      "/escola/escola 5.jpg",
    ],
    sections: [
      {
        title: "Presença institucional",
        body:
          "O site foi pensado para organizar informações da escola em uma estrutura clara e acessível, melhorando a forma como alunos, responsáveis e comunidade encontram o que precisam.",
        image: "/escola/escola 4.jpg",
        imageAlt: "Segunda imagem do site institucional da escola",
      },
      {
        title: "Desenvolvimento completo",
        body:
          "O projeto envolveu front-end, back-end e organização da infraestrutura, criando uma entrega mais completa do que uma página puramente visual. A ideia foi garantir uma base consistente para o funcionamento do site.",
        image: "/escola/escola 6.jpg",
        imageAlt: "Terceira imagem do site institucional da escola",
        reverse: true,
      },
      {
        title: "Deploy e operação",
        body:
          "A entrega incluiu containerização com Docker e hospedagem em AWS, usando EC2 e Route 53. Isso deu mais controle sobre deploy, ambiente e continuidade operacional do projeto.",
        image: "/escola/escola 7.jpg",
        imageAlt: "Quarta imagem do site institucional da escola",
      },
    ],
    closingText:
      "O resultado foi um website institucional mais robusto, com presença digital mais sólida e uma infraestrutura pronta para sustentar o projeto de forma profissional.",
  },
  {
    slug: "dashboard",
    name: "Dashboard",
    category: "Analytics",
    description:
      "Dashboard para visualização de dados, acompanhamento de métricas e leitura operacional mais clara.",
    heroTag: "+ Project",
    heroTitle: "Dashboard",
    heroBody:
      "Um painel pensado para transformar dados em leitura rápida, organização visual e apoio real para tomada de decisão.",
    heroImage: "/dashboard/image.png",
    heroImageAlt: "Tela principal do projeto Dashboard",
    frameClass: "bg-[#faf9f5]",
    imageWrapClass: "bg-[#e4ecef]",
    logo: dashboardLogo,
    logoAlt: "Logo do projeto Dashboard",
    gallery: [],
    sections: [
      {
        title: "Visão centralizada dos dados",
        body:
          "O projeto foi construído para reunir indicadores importantes em uma interface única, facilitando leitura, comparação e monitoramento do desempenho em tempo real.",
        image: "/dashboard/2.jpeg",
        imageAlt: "Segunda tela do projeto Dashboard",
      },
      {
        title: "Interface orientada por métricas",
        body:
          "Cada bloco do painel foi organizado para destacar o que realmente importa: números, tendências e recortes que ajudam a acompanhar operação e resultados sem excesso visual.",
        image: "/dashboard/WhatsApp Image 2026-04-10 at 23.34.08.jpeg",
        imageAlt: "Terceira tela do projeto Dashboard",
        reverse: true,
      },
      {
        title: "Leitura clara para decisão",
        body:
          "A proposta do dashboard é tornar a análise mais objetiva. O visual foi pensado para apoiar gestão, facilitar entendimento e deixar a tomada de decisão mais segura.",
        image: "/dashboard/WhatsApp Image 2026-04-10 at 23.34.09.jpeg",
        imageAlt: "Quarta tela do projeto Dashboard",
      },
    ],
    closingText:
      "O resultado foi um dashboard mais claro e funcional, preparado para transformar volume de dados em acompanhamento prático e útil para a operação.",
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    category: "Portfolio pessoal",
    description:
      "Portfolio visual pensado para apresentar trabalhos, identidade e repertório com mais presença e clareza.",
    heroTag: "+ Project",
    heroTitle: "Portfolio",
    heroBody:
      "Um projeto construído para reunir identidade, apresentação pessoal e seleção de trabalhos em uma experiência digital mais forte e memorável.",
    heroImage: "/portfolio/image.png",
    heroImageAlt: "Capa do projeto Portfolio",
    frameClass: "bg-[#faf9f5]",
    imageWrapClass: "bg-[#ece9df]",
    logo: portfolioLogo,
    logoAlt: "Logo do projeto Portfolio",
    gallery: [
      "/portfolio/WhatsApp Image 2026-04-11 at 1asdasdsad2.00.48.jpeg",
    ],
    sections: [
      {
        title: "Apresentação com identidade",
        body:
          "O portfolio foi pensado para transmitir personalidade logo no primeiro contato. A estrutura visual ajuda a organizar apresentação, trabalhos e proposta de valor sem perder impacto.",
        image: "/portfolio/aaaa1.jpeg",
        imageAlt: "Tela principal do projeto Portfolio",
      },
      {
        title: "Vitrine de trabalhos",
        body:
          "As seções foram montadas para destacar projetos e repertório de forma clara, criando uma navegação fluida e uma leitura mais forte do que foi construído ao longo do percurso.",
        image: "/portfolio/bbbb.jpeg",
        imageAlt: "Segunda tela do projeto Portfolio",
        reverse: true,
      },
      {
        title: "Presença digital mais forte",
        body:
          "Mais do que um conjunto de telas, o portfolio funciona como uma peça de posicionamento. Ele reforça linguagem visual, organiza referências e ajuda a transformar trabalho em percepção de valor.",
        image: "/portfolio/WhatsApp Image 2026-04-11 at 12.00.19.jpeg",
        imageAlt: "Terceira tela do projeto Portfolio",
      },
      {
        title: "Explorações visuais complementares",
        body:
          "As imagens extras ajudam a reforçar atmosfera, consistência visual e variedade de composições, ampliando a percepção do portfolio como uma experiência completa e não apenas uma vitrine estática.",
        image: "/portfolio/WhatsApp Image 2026-04-11 at 1asdasdsad2.00.48.jpeg",
        imageAlt: "Quarta tela do projeto Portfolio",
        reverse: true,
      },
    ],
    closingText:
      "O resultado foi um portfolio mais consistente e expressivo, pensado para apresentar identidade, projetos e capacidade criativa com mais clareza.",
  },
  {
    slug: "mary-esmalteria",
    name: "Mary Esmalteria",
    category: "Esmalteria",
    description:
      "Projeto digital pensado para apresentar os serviços da esmalteria com mais presença visual, leitura clara e atendimento mais fácil de iniciar.",
    heroTag: "+ Project",
    heroTitle: "Mary Esmalteria",
    heroBody:
      "Uma presença digital criada para destacar estética, cuidado e identidade visual em uma vitrine mais organizada e profissional.",
    heroVideo: "/mary_esmalteria/WhatsApp Video 2026-04-14 at 22.33.25 (1) (1).mp4",
    frameClass: "bg-[#faf9f5]",
    imageWrapClass: "bg-[#f3e8ef]",
    logo: maryLogo,
    logoAlt: "Logo do projeto Mary Esmalteria",
    gallery: [],
    sections: [],
    closingText:
      "O resultado foi uma apresentação digital mais alinhada com a proposta da Mary Esmalteria, reforçando percepção de cuidado, estilo e profissionalismo desde o primeiro contato.",
  },
  {
    slug: "automacao-atendimento-whatsapp",
    name: "Automação Atendimento WhatsApp",
    category: "Barbearia",
    description:
      "Bot de autoatendimento para WhatsApp criado para agilizar respostas, organizar conversas e facilitar o início do agendamento.",
    heroTag: "+ Project",
    heroTitle: "Automação Atendimento WhatsApp",
    heroBody:
      "Um fluxo automatizado pensado para transformar o WhatsApp em um canal comercial mais rápido, claro e funcional para a rotina da barbearia.",
    heroVideo: "/whatsapp/video automação whatsapp site (1).mp4",
    frameClass: "bg-[#faf9f5]",
    imageWrapClass: "bg-[#efe7dc]",
    logo: whatsappLogo,
    logoAlt: "Logo do projeto de automação de atendimento WhatsApp",
    gallery: [],
    sections: [],
    closingText:
      "O resultado foi uma automação mais objetiva para o atendimento inicial, reduzindo respostas repetitivas e deixando o fluxo comercial da barbearia mais organizado.",
  },
  {
    slug: "controle-de-estoque",
    name: "Controle de Estoque",
    category: "Operação",
    description:
      "Sistema visual para organizar estoque, acompanhar movimentações e dar mais clareza à operação interna do negócio.",
    heroTag: "+ Project",
    heroTitle: "Controle de Estoque",
    heroBody:
      "Uma solução pensada para centralizar leitura de entradas, saídas e acompanhamento de itens com uma interface mais simples e prática.",
    heroImage: "/estoque/image.png",
    heroImageAlt: "Tela principal do projeto Controle de Estoque",
    frameClass: "bg-[#faf9f5]",
    imageWrapClass: "bg-[#ecefe8]",
    logo: estoqueLogo,
    logoAlt: "Logo do projeto Controle de Estoque",
    gallery: [
      "/estoque/image copy 5.png",
      "/estoque/image copy 6.png",
      "/estoque/image copy 7.png",
    ],
    sections: [
      {
        title: "Leitura mais clara da operação",
        body:
          "O projeto foi estruturado para facilitar a visualização do que entra, do que sai e do que precisa de atenção. A ideia foi reduzir ruído operacional e dar mais confiança para o controle diário.",
        image: "/estoque/image copy.png",
        imageAlt: "Segunda tela do projeto Controle de Estoque",
      },
      {
        title: "Organização de itens e movimentações",
        body:
          "As telas foram pensadas para apoiar cadastro, consulta e acompanhamento de produtos, criando uma base mais ordenada para decisões rápidas e operação interna mais estável.",
        image: "/estoque/image copy 2.png",
        imageAlt: "Terceira tela do projeto Controle de Estoque",
        reverse: true,
      },
      {
        title: "Controle com menos atrito",
        body:
          "O sistema busca transformar gestão de estoque em algo mais visual e menos confuso, aproximando controle operacional de uma rotina realmente utilizável no dia a dia.",
        image: "/estoque/image copy 3.png",
        imageAlt: "Quarta tela do projeto Controle de Estoque",
      },
      {
        title: "Acompanhamento contínuo",
        body:
          "Com uma estrutura mais organizada, o negócio passa a acompanhar volume, status e movimentação com mais previsibilidade, reduzindo falhas e melhorando a leitura do estoque.",
        image: "/estoque/image copy 4.png",
        imageAlt: "Quinta tela do projeto Controle de Estoque",
        reverse: true,
      },
    ],
    closingText:
      "O resultado foi um controle de estoque mais claro, funcional e fácil de manter, ajudando a transformar rotina operacional em acompanhamento mais consistente.",
  },
  {
    slug: "vidracaria",
    name: "Vidracaria",
    category: "Vidracaria",
    description:
      "Site pensado para apresentar serviços, reforçar confiança e facilitar o contato comercial de uma vidraçaria.",
    heroTag: "+ Project",
    heroTitle: "Vidracaria",
    heroBody:
      "Um projeto criado para dar mais presença digital a um negócio de vidros, com estrutura clara, leitura direta e foco em serviços e atendimento.",
    heroImage: "/vidracaria/image.png",
    heroImageAlt: "Capa do projeto Vidracaria",
    frameClass: "bg-[#faf9f5]",
    imageWrapClass: "bg-[#edf2f2]",
    logo: vidracariaLogo,
    logoAlt: "Logo do projeto Vidracaria",
    gallery: [],
    sections: [
      {
        title: "Apresentação comercial mais clara",
        body:
          "A estrutura do projeto foi pensada para mostrar serviços, tipos de entrega e diferenciais de forma objetiva. A ideia foi facilitar a leitura para quem chega ao site buscando orçamento ou mais segurança antes do contato.",
        image: "/vidracaria/vidracaria2.jpeg",
        imageAlt: "Segunda tela do projeto Vidracaria",
      },
      {
        title: "Visual mais confiável para o negócio",
        body:
          "O trabalho visual buscou transmitir organização, limpeza e profissionalismo, qualidades importantes para um negócio que depende muito de confiança na hora da escolha.",
        image: "/vidracaria/vidracaria3.jpeg",
        imageAlt: "Terceira tela do projeto Vidracaria",
        reverse: true,
      },
      {
        title: "Contato e conversão em foco",
        body:
          "As seções foram organizadas para aproximar o visitante da ação principal, reforçando serviços, clareza de oferta e facilidade de contato. O resultado é uma presença digital mais útil para o comercial.",
        image: "/vidracaria/vidracaria4.jpeg",
        imageAlt: "Quarta tela do projeto Vidracaria",
      },
    ],
    closingText:
      "O resultado foi um site mais direto e profissional para a vidraçaria, preparado para apresentar serviços com mais clareza e fortalecer a presença digital do negócio.",
  },
];

export function getProjectCaseStudy(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}
