"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import type { StaticImageData } from "next/image";
import { NavbarBrand } from "./components/NavbarBrand";
import { ThemeToggle } from "./components/ThemeToggle";
import { useScrollReveal } from "./useScrollReveal";
import escolaLogo from "@/public/logo_escola/logo_escola.png";
import farmandoAuraLogo from "@/public/logo_farmandoaura/logo_farmandoaura.png";
import psicologoLogo from "@/public/logo_psicologo/logo_psicologo.png";
import dashboardLogo from "@/public/logo_dashboard/Dashboard - Editado.png";
import { siteConfig } from "./siteConfig";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Contato", href: "/contato" },
];

type ProjectCard = {
  tag: string;
  title: string;
  description: string;
  frameClass: string;
  accent: string;
  logo?: StaticImageData;
  logoAlt?: string;
  caseStudyHref?: string;
};

const projects: ProjectCard[] = [
  {
    tag: "Educacao",
    title: "Escola de Cursos",
    description:
      "Landing page com identidade direta, foco em oferta educacional e uma hierarquia visual pensada para conversão.",
    frameClass: "bg-[#faf9f5]",
    accent: "Cursos, presença e estrutura comercial",
    logo: escolaLogo,
    logoAlt: "Logo da Escola de Cursos",
    caseStudyHref: "/projetos/ee-odair-mandela",
  },
  {
    tag: "Pre-vestibular",
    title: "Farmando Aura",
    description:
      "Plataforma educacional para o ENEM com cursos, questões, redação, simulados e painel de progresso.",
    frameClass: "bg-[#faf9f5]",
    accent: "Estudo guiado, constancia e preparo para aprovacao",
    logo: farmandoAuraLogo,
    logoAlt: "Logo da Farmando Aura",
    caseStudyHref: "/projetos/farmando-aura",
  },
  {
    tag: "Psicologia",
    title: "Página Profissional",
    description:
      "Presença digital mais humana para atendimento clínico, com visual limpo, confiável e acolhedor.",
    frameClass: "bg-[#faf9f5]",
    accent: "Clareza para apresentar serviços e abordagem",
    logo: psicologoLogo,
    logoAlt: "Logo de psicologo",
    caseStudyHref: "/projetos/psicologo-virtual",
  },
  {
    tag: "Gate80",
    title: "Studio Visual",
    description:
      "Uma exploracao visual da propria linguagem da Gate80, misturando contraste, estrutura e impacto.",
    frameClass: "bg-[#faf9f5]",
    accent: "Design, web e automações com assinatura própria",
  },
  {
    tag: "Analytics",
    title: "Dashboard",
    description:
      "Painel visual para acompanhar métricas, organizar leituras operacionais e transformar dados em decisão mais clara.",
    frameClass: "bg-[#faf9f5]",
    accent: "Dados, leitura rápida e acompanhamento visual",
    logo: dashboardLogo,
    logoAlt: "Logo do Dashboard",
  },
];

const combos = [
  {
    name: "O Essencial",
    comboPrice: "550 R$ a vista + 30 R$/mes",
    separatePrice: "635 R$ + 35 R$/mes",
    badgeCode: "ESS",
    badgeLabel: "Base digital",
    items: [
      "Google Meu Negócio",
      "Landing page simples",
      "Cardápio ou catálogo digital",
    ],
  },
  {
    name: "Restaurantes",
    comboPrice: "500 R$ a vista",
    separatePrice: "650 R$",
    badgeCode: "FOOD",
    badgeLabel: "Fluxo rápido",
    items: [
      "Cardápio digital com QR Code",
      "Bot de atendimento para WhatsApp",
      "Dashboard de vendas mensal",
    ],
  },
  {
    name: "Organizacao",
    comboPrice: "750 R$ a vista",
    separatePrice: "900 R$",
    badgeCode: "OPS",
    badgeLabel: "Controle interno",
    items: [
      "Controle de estoque com VBA",
      "Gestao financeira e vendas",
      "Automacao de documentos",
    ],
  },
];

const faqs = [
  {
    question: "Quais serviços a Gate80 oferece?",
    answer:
      "A Gate80 trabalha com landing pages, sites institucionais, sistemas web sob medida, automações, dashboards, PWAs e soluções digitais para negócios locais.",
  },
  {
    question: "Como funciona o início de um projeto?",
    answer:
      "Tudo começa com uma conversa rápida para entender sua necessidade, objetivo e prazo. Depois disso, montamos a melhor direção e um escopo claro para a entrega.",
  },
  {
    question: "Para quais tipos de negócio a Gate80 atende?",
    answer:
      "Atendemos empresas locais, autônomos, restaurantes, estúdios, oficinas, negócios de serviços e operações que precisam organizar melhor o digital.",
  },
  {
    question: "Quanto tempo um projeto costuma levar?",
    answer:
      "Depende do escopo. Landing pages simples podem sair mais rápido, enquanto sistemas e automações sob medida exigem mais etapas de desenvolvimento e validação.",
  },
  {
    question: "Vocês fazem manutenção depois da entrega?",
    answer:
      "Sim. Podemos cuidar de hospedagem, manutenção, pequenos ajustes e suporte contínuo conforme o tipo de projeto contratado.",
  },
  {
    question: "Se meu projeto não estiver na tabela de preços?",
    answer:
      "Sem problema. A tabela serve como ponto de partida. Para demandas diferentes, montamos uma proposta personalizada com base no que sua empresa precisa.",
  },
];

const footerLinks = [
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Termos & Condições", href: "/termos" },
  { label: "Fale com a Gate80", href: "/contato" },
];

type MenuToggleProps = {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
};

type SocialIconProps = {
  name: "instagram" | "linkedin" | "whatsapp" | "email";
};

function SocialIcon({ name }: SocialIconProps) {
  if (name === "instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[25px] w-[25px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="4.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.45" cy="6.55" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.8 5.9c.2-.2.5-.24.76-.11l1.85.92c.32.16.46.54.34.88l-.61 1.62a.82.82 0 0 0 .19.84l2.82 2.82c.23.23.57.3.84.19l1.62-.61c.34-.12.72.02.88.34l.92 1.85c.13.26.09.56-.11.76l-1.12 1.12c-.61.61-1.53.88-2.37.67-1.91-.46-3.65-1.48-5.04-2.87-1.39-1.39-2.41-3.13-2.87-5.04-.21-.84.06-1.76.67-2.37L7.8 5.9Z" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="1.8" />
        <path d="m4.5 7 7.5 5.6L19.5 7" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[25px] w-[25px]"
      fill="currentColor"
    >
      <path d="M6.74 8.44A1.44 1.44 0 1 1 6.7 5.56a1.44 1.44 0 0 1 .04 2.88ZM5.5 9.85h2.46V18H5.5V9.85Zm4 0h2.36v1.12h.03c.33-.62 1.14-1.27 2.35-1.27 2.51 0 2.97 1.65 2.97 3.8V18h-2.45v-3.99c0-.95-.02-2.18-1.33-2.18-1.33 0-1.54 1.04-1.54 2.11V18H9.5V9.85Z" />
    </svg>
  );
}

function MenuToggle({ isOpen, onClick, className = "" }: MenuToggleProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
      onClick={onClick}
      className={`menu-toggle-button relative flex h-[62px] w-[62px] items-center justify-center border border-[#1c1c1c] bg-white sm:h-[74px] sm:w-[74px] ${className}`}
    >
      <span
        className={`menu-toggle-line absolute h-[3px] w-7 bg-[#181818] transition-all duration-300 ease-out sm:w-8 ${
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-[8px] sm:-translate-y-[10px]"
        }`}
      />
      <span
        className={`menu-toggle-line absolute h-[3px] w-7 bg-[#181818] transition-all duration-200 ease-out sm:w-8 ${
          isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        }`}
      />
      <span
        className={`menu-toggle-line absolute h-[3px] w-7 bg-[#181818] transition-all duration-300 ease-out sm:w-8 ${
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-[8px] sm:translate-y-[10px]"
        }`}
      />
    </button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const projectsSectionRef = useRef<HTMLElement | null>(null);
  const projectsPanelRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  useScrollReveal();

  useEffect(() => {
    const updateProjectsPanel = () => {
      const section = projectsSectionRef.current;
      const panel = projectsPanelRef.current;

      if (!section || !panel) {
        return;
      }

      if (window.innerWidth < 1024) {
        panel.style.transform = "";
        return;
      }

      const topOffset = 96;
      const bottomOffset = 88;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const panelHeight = panel.offsetHeight;
      const maxTranslate = Math.max(
        sectionHeight - panelHeight - topOffset - bottomOffset,
        0,
      );
      const rawTranslate = window.scrollY - sectionTop + topOffset;
      const translate = Math.min(Math.max(rawTranslate, 0), maxTranslate);

      panel.style.transform = `translate3d(0, ${translate}px, 0)`;
    };

    let rafId = 0;

    const requestUpdate = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        updateProjectsPanel();
        rafId = 0;
      });
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    const updateFooterHeight = () => {
      setFooterHeight(footer.offsetHeight);
    };

    updateFooterHeight();
    window.addEventListener("resize", updateFooterHeight);

    return () => {
      window.removeEventListener("resize", updateFooterHeight);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.085,
        duration: 1.15,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.95,
        touchMultiplier: 1,
      }}
    >
      <main
        className="relative z-10 min-h-screen overflow-x-hidden bg-white"
        style={{ marginBottom: footerHeight ? `${footerHeight}px` : undefined }}
      >
        <div aria-hidden="true" className="hero-dots" />
        <div className="page-fade-in relative z-10 mx-auto flex min-h-screen w-full max-w-[1520px] flex-col px-4 py-4 sm:px-8 sm:py-8 lg:px-14">
          <div className="relative z-30">
            <header className="relative z-10 flex items-start justify-between intro-rise">
              <Link href="/" className="inline-flex items-center">
                <NavbarBrand />
              </Link>

              <div className="flex items-center gap-3">
                <ThemeToggle />
                <div className="offset-shadow">
                  <MenuToggle
                    isOpen={menuOpen}
                    onClick={() => setMenuOpen((current) => !current)}
                    className="offset-shadow__surface"
                  />
                </div>
              </div>
            </header>

            <div
              className={`absolute inset-x-0 top-0 z-20 overflow-hidden border border-[#2f2f2f] bg-[#1f1f1f] text-white transition-[max-height,opacity,transform] duration-300 ease-out ${
                menuOpen
                  ? "pointer-events-auto max-h-[520px] translate-y-0 opacity-100"
                  : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
              }`}
            >
              <div className="flex items-start justify-between">
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-5"
                >
                  <NavbarBrand />
                </Link>

                <MenuToggle
                  isOpen={menuOpen}
                  onClick={() => setMenuOpen(false)}
                  className="transition-colors duration-150 hover:bg-[#f3f3f3]"
                />
              </div>

              <nav aria-label="Navegacao principal" className="pb-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-center border-t border-[#2f2f2f] px-4 py-5 text-center text-[1.9rem] font-semibold tracking-tight transition-colors duration-200 hover:bg-white hover:text-[#111] sm:text-4xl md:text-5xl"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <section
            id="home"
            className="relative flex flex-1 items-center py-16 sm:py-20 lg:py-10"
          >
            <div className="w-full">
              <div className="max-w-[1320px]">
                <h1
                  data-reveal="left"
                  className="intro-rise max-w-[1280px] text-[2.45rem] font-extrabold leading-[0.88] tracking-[-0.08em] text-[#181818] sm:text-[4rem] lg:text-[5rem] xl:text-[5.45rem]"
                  style={{ ["--intro-delay" as string]: "80ms" }}
                >
                  <span className="block">Construindo Experiências</span>
                  <span className="strip-breathe my-3 flex w-fit max-w-full items-center gap-2 overflow-hidden whitespace-nowrap px-3 py-2 text-[1.28rem] leading-none text-[#f8f6ef] sm:my-4 sm:gap-4 sm:px-4 sm:text-[2.7rem] lg:my-5 lg:gap-5 lg:text-[3.55rem] xl:text-[3.9rem]">
                    <span>landing page</span>
                    <span>*</span>
                    <span>web dev</span>
                    <span>*</span>
                    <span>planilhas</span>
                    <span>{"\u21CC"}</span>
                    <span>Gate80</span>
                  </span>
                  <span className="block">Digitais que Marcam</span>
                </h1>

                <p
                  data-reveal="left"
                  className="intro-rise mt-7 max-w-[720px] text-lg leading-relaxed text-[#3a3a3a] sm:text-xl"
                  style={{ ["--intro-delay" as string]: "170ms" }}
                >
                  Sites, landing pages e sistemas sob medida para empresas que
                  querem parecer grandes, vender melhor e transmitir confiança.
                </p>
              </div>

              <div
                data-reveal="up"
                className="intro-rise mt-14 flex flex-col gap-8 lg:mt-20 lg:flex-row lg:items-center lg:gap-10"
                style={{ ["--intro-delay" as string]: "240ms" }}
              >
                <Link href="/contato" className="offset-shadow self-start">
                  <span className="offset-shadow__surface inline-flex w-full justify-center border border-[#1c1c1c] bg-white px-6 py-4 text-base font-semibold text-[#111] sm:w-fit sm:px-7 sm:py-5 sm:text-lg">
                    Fale Conosco!
                  </span>
                </Link>

                <div className="flex flex-1 justify-start lg:justify-end">
                  <div className="max-w-[360px] text-left lg:text-right">
                    <p className="text-[1.45rem] font-semibold leading-tight tracking-[-0.04em] text-[#1a1a1a] sm:text-[1.7rem]">
                      Profissional, criativa e confiável
                    </p>
                    <p className="mt-2 text-sm text-[#505050] sm:text-base">
                      Gate80 entrega interfaces sob medida com foco em negócio,
                      performance e presença digital.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="sobre"
            className="relative border-t border-[#1c1c1c] py-20 sm:py-24"
          >
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
              <div className="space-y-6" data-reveal="left">
                <p className="pixel-font text-xs uppercase tracking-[0.18em] text-[#565656] sm:text-sm">
                  Sobre a Gate80
                </p>
                <h2 className="intro-rise max-w-[720px] text-[2.55rem] font-extrabold leading-[0.9] tracking-[-0.07em] text-[#181818] sm:text-[3.4rem] lg:text-[4.25rem]">
                  Solucoes digitais que ajudam empresas a parecer maiores,
                  vender melhor e trabalhar com mais clareza.
                </h2>
                <p className="max-w-[640px] text-lg leading-relaxed text-[#454545] sm:text-xl">
                  A Gate80 combina design, estrutura e tecnologia para criar
                  experiências digitais que passam confiança desde o primeiro
                  contato. Nosso foco é construir produtos que sejam bonitos,
                  fáceis de usar e realmente úteis para o negócio.
                </p>
              </div>

              <div className="grid gap-6">
                <div
                  className="intro-scale grid gap-6 border border-[#1c1c1c] bg-[#1f1f1f] p-6 text-[#f7f4ec] sm:p-8 lg:grid-cols-[1.12fr_0.88fr]"
                  style={{ ["--intro-delay" as string]: "80ms" }}
                >
                  <div className="space-y-4">
                    <p className="pixel-font text-xs uppercase tracking-[0.18em] text-[#d8d3c8] sm:text-sm">
                      Nossa proposta
                    </p>
                    <p className="text-[1.7rem] font-semibold leading-tight tracking-[-0.05em] sm:text-[2.1rem]">
                      Criamos landing pages, sites, sistemas internos e
                      automações com uma linguagem visual forte e foco real em
                      resultado.
                    </p>
                  </div>

                  <div className="space-y-3 border-t border-white/15 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                    <p className="text-sm uppercase tracking-[0.22em] text-[#cbc5b8]">
                      Como fazemos
                    </p>
                    <p className="text-base leading-relaxed text-[#efeadf]">
                      Estratégia, direção visual e implementação andando juntas
                      para entregar um produto consistente do inicio ao fim.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div
                    className="intro-rise border border-[#1c1c1c] bg-white p-5"
                    style={{ ["--intro-delay" as string]: "120ms" }}
                  >
                    <p className="pixel-font text-[0.72rem] uppercase tracking-[0.16em] text-[#5f5f5f]">
                      Clareza
                    </p>
                    <p className="mt-4 text-3xl font-extrabold tracking-[-0.06em] text-[#181818]">
                      01
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#4c4c4c]">
                      Cada página é pensada para comunicar valor sem excesso de
                      informação e sem visual genérico.
                    </p>
                  </div>

                  <div
                    className="intro-rise border border-[#1c1c1c] bg-white p-5"
                    style={{ ["--intro-delay" as string]: "180ms" }}
                  >
                    <p className="pixel-font text-[0.72rem] uppercase tracking-[0.16em] text-[#5f5f5f]">
                      Estrutura
                    </p>
                    <p className="mt-4 text-3xl font-extrabold tracking-[-0.06em] text-[#181818]">
                      02
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#4c4c4c]">
                      Organizamos conteudo, fluxos e ferramentas para a empresa
                      ter mais controle e mais presença digital.
                    </p>
                  </div>

                  <div
                    className="intro-rise border border-[#1c1c1c] bg-white p-5"
                    style={{ ["--intro-delay" as string]: "240ms" }}
                  >
                    <p className="pixel-font text-[0.72rem] uppercase tracking-[0.16em] text-[#5f5f5f]">
                      Resultado
                    </p>
                    <p className="mt-4 text-3xl font-extrabold tracking-[-0.06em] text-[#181818]">
                      03
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#4c4c4c]">
                      O objetivo final e simples: ajudar sua marca a transmitir
                      mais confiança e converter melhor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="projetos"
            ref={projectsSectionRef}
            className="relative border-t border-[#1c1c1c] pb-28 pt-16 sm:pb-52 sm:pt-24"
          >
            <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
              <div className="relative">
                <div
                  ref={projectsPanelRef}
                  className="space-y-8 will-change-transform lg:pr-8"
                >
                  <p className="pixel-font text-xs uppercase tracking-[0.18em] text-[#5b5b5b] sm:text-sm">
                    + Selected Work
                  </p>

                  <div className="space-y-5">
                    <h2 className="max-w-[620px] text-[2.8rem] font-extrabold leading-[0.92] tracking-[-0.075em] text-[#4a4a4a] sm:text-[3.75rem] lg:text-[4.85rem]">
                      Projetos pensados para elevar sua marca no digital.
                    </h2>
                    <p className="max-w-[560px] text-lg leading-relaxed text-[#595959] sm:text-xl">
                      Navegue por alguns conceitos e direcoes visuais que mostram
                      como a Gate80 transforma uma ideia em uma presença digital
                      forte, clara e memorável.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-10">
                    <div className="h-px w-24 bg-[#1c1c1c]" />
                    <Link href="/projetos" className="offset-shadow self-start">
                      <span className="offset-shadow__surface inline-flex border border-[#1c1c1c] bg-white px-6 py-4 text-base font-semibold text-[#111]">
                        Ver Todos
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-12 lg:space-y-16">
                {projects.slice(0, 3).map((project, index) => (
                  <article
                    key={project.title}
                    data-reveal={index % 2 === 0 ? "right" : "up"}
                    className="intro-rise space-y-5"
                    style={{
                      ["--intro-delay" as string]: "120ms",
                      ["--reveal-delay" as string]: `${index * 110}ms`,
                    }}
                  >
                    <div
                      className={`border border-[#1c1c1c] p-3 shadow-[4px_4px_0_#1c1c1c] sm:p-4 ${project.frameClass}`}
                    >
                      <div className="flex aspect-[1.38/1] items-center justify-center border border-[#1c1c1c] bg-[#f7f4ec] px-8 py-8 sm:px-10">
                        {project.logo ? (
                          <Image
                            src={project.logo}
                            alt={project.logoAlt ?? project.title}
                            className="h-auto w-full max-w-[430px] scale-[1.12] object-contain"
                            sizes="(min-width: 1280px) 430px, (min-width: 640px) 48vw, 88vw"
                          />
                        ) : (
                          <p className="text-center text-[4rem] font-extrabold tracking-[-0.08em] text-[#1d1d1d] sm:text-[4.8rem]">
                            GATE80
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="max-w-[720px]">
                      <p className="pixel-font text-[0.72rem] uppercase tracking-[0.16em] text-[#606060]">
                        {project.tag}
                      </p>
                      <h3 className="mt-3 text-[2rem] font-bold tracking-[-0.05em] text-[#171717] sm:text-[2.4rem]">
                        {project.title}
                      </h3>
                      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                        <p className="max-w-[540px] text-lg leading-relaxed text-[#4d4d4d] sm:text-xl">
                          {project.description}
                        </p>
                        {project.caseStudyHref ? (
                          <Link
                            href={project.caseStudyHref}
                            className="offset-shadow inline-flex self-start"
                          >
                            <span className="offset-shadow__surface inline-flex min-h-[54px] w-full items-center justify-center border border-[#1c1c1c] bg-white px-6 text-sm font-semibold text-[#111] sm:w-auto">
                              Ver projeto
                            </span>
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="servicos"
            className="relative border-t border-[#1c1c1c] py-20 sm:py-24"
          >
            <div className="space-y-12">
              <div className="max-w-[920px] space-y-5" data-reveal="left">
                <p className="pixel-font text-xs uppercase tracking-[0.18em] text-[#5b5b5b] sm:text-sm">
                  + Precos
                </p>
                <h2 className="text-[2.8rem] font-extrabold leading-[0.92] tracking-[-0.075em] text-[#4a4a4a] sm:text-[3.75rem] lg:text-[4.85rem]">
                  Preços transparentes para empresas que querem começar agora.
                </h2>
                <p className="max-w-[760px] text-lg leading-relaxed text-[#595959] sm:text-xl">
                  Três combos prontos para quem quer começar com clareza, preço
                  definido e uma estrutura digital que faça sentido para o
                  negócio.
                </p>
              </div>

              <div className="grid gap-6 xl:grid-cols-3">
                {combos.map((combo, index) => (
                  <article
                    key={combo.name}
                    data-reveal="scale"
                    className="intro-scale flex h-full flex-col border border-[#1c1c1c] bg-white p-6 shadow-[4px_4px_0_#1c1c1c] sm:p-8"
                    style={{
                      ["--intro-delay" as string]: `${index * 70}ms`,
                      ["--reveal-delay" as string]: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex h-28 w-28 flex-col justify-between border border-[#1c1c1c] bg-[#111] px-4 py-4 text-white">
                      <p className="pixel-font text-[0.62rem] uppercase tracking-[0.14em] text-white/65">
                        0{index + 1}
                      </p>
                      <p className="text-[1.25rem] font-extrabold leading-none tracking-[-0.08em]">
                        {combo.badgeCode}
                      </p>
                      <p className="text-[0.7rem] leading-tight text-white/70">
                        {combo.badgeLabel}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-1 flex-col">
                      <h3 className="text-[1.85rem] font-bold leading-tight tracking-[-0.05em] text-[#171717]">
                        {combo.name}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-[#535353]">
                        Preco separado: {combo.separatePrice}
                      </p>
                      <div className="mt-5 min-h-[122px]">
                        <p className="text-[2.25rem] font-extrabold tracking-[-0.06em] text-[#181818]">
                          {combo.comboPrice}
                        </p>
                      </div>

                      <Link href="/contato" className="mt-3 block">
                        <span className="inline-flex w-full items-center justify-center border border-[#1c1c1c] px-5 py-4 text-center text-base font-semibold text-[#111] transition-colors duration-200 hover:bg-[#f3f3f3]">
                          Quero esse combo
                        </span>
                      </Link>

                      <div className="mt-8 space-y-3">
                        <p className="text-[1.15rem] font-semibold tracking-[-0.04em] text-[#181818]">
                          O que inclui
                        </p>
                        {combo.items.map((item) => (
                          <p
                            key={item}
                            className="text-base leading-relaxed text-[#4c4c4c]"
                          >
                            + {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="flex justify-center pt-2">
                <Link href="/contato" className="offset-shadow self-start">
                  <span className="offset-shadow__surface inline-flex border border-[#1c1c1c] bg-white px-8 py-5 text-lg font-semibold text-[#111]">
                    Falar sobre outro projeto
                  </span>
                </Link>
              </div>
            </div>
          </section>

          <section className="relative border-t border-[#1c1c1c] pb-32 pt-16 sm:pb-52 sm:pt-24">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div className="space-y-8" data-reveal="left">
                <p className="pixel-font text-xs uppercase tracking-[0.18em] text-[#5b5b5b] sm:text-sm">
                  + FAQs
                </p>

                <div className="space-y-5">
                  <h2 className="max-w-[620px] text-[2.8rem] font-extrabold leading-[0.92] tracking-[-0.075em] text-[#4a4a4a] sm:text-[3.75rem] lg:text-[4.65rem]">
                    Tire suas dúvidas antes de começar.
                  </h2>
                  <p className="max-w-[620px] text-lg leading-relaxed text-[#595959] sm:text-xl">
                    Aqui estao respostas diretas para as perguntas mais comuns
                    sobre serviços, prazos, manutenção e como a Gate80 trabalha.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="h-px flex-1 bg-[#1c1c1c]" />
                  <Link href="/contato" className="offset-shadow self-start">
                    <span className="offset-shadow__surface inline-flex border border-[#1c1c1c] bg-white px-6 py-4 text-base font-semibold text-[#111]">
                      Contato
                    </span>
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                  <article
                    key={faq.question}
                    data-reveal="up"
                    className={`intro-rise border border-[#1c1c1c] bg-white transition-colors duration-300 ${
                      isOpen ? "bg-[#fafafa]" : ""
                    }`}
                    style={{
                      ["--intro-delay" as string]: `${index * 45}ms`,
                      ["--reveal-delay" as string]: `${index * 60}ms`,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq((current) => (current === index ? null : index))
                      }
                      className="flex w-full cursor-pointer items-center justify-between gap-6 px-5 py-5 text-left text-[1.15rem] font-semibold tracking-[-0.03em] text-[#1c1c1c] sm:px-6 sm:text-[1.3rem]"
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`text-3xl leading-none transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`border-t border-[#1c1c1c] px-5 py-5 text-base leading-relaxed text-[#4f4f4f] transition-[opacity,transform] duration-300 ease-out sm:px-6 sm:text-lg ${
                            isOpen
                              ? "translate-y-0 opacity-100"
                              : "-translate-y-2 opacity-0"
                          }`}
                        >
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </article>
                )})}
              </div>
            </div>
          </section>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[#1c1c1c]"
        />
      </main>

      <footer
        id="contato"
        ref={footerRef}
        className="fixed inset-x-0 bottom-0 z-0 bg-[#faf9f5]"
      >
        <div className="relative overflow-hidden px-4 pt-14 sm:px-10 sm:pt-24 lg:px-16 lg:pt-28">
          <div className="pointer-events-none absolute inset-0 opacity-[0.58]">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(28,28,28,0.12)_1.1px,transparent_1.3px)] [background-position:0_0] [background-size:18px_18px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1180px]">
            <div className="max-w-[780px] space-y-6">
              <p className="max-w-[730px] text-[0.98rem] leading-[1.55] text-[#434343] sm:text-[1.05rem]">
                {siteConfig.footerBlurb}
              </p>
              <div className="h-px w-full bg-[#1c1c1c]" />
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
              <div className="space-y-10">
                <a
                  href="#home"
                  className="inline-flex border border-[#1c1c1c] bg-white px-6 py-4 text-black"
                >
                  <span className="pixel-font text-[1rem] uppercase tracking-[0.08em]">
                    GATE80
                  </span>
                </a>

                <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.92rem] text-[#2f2f2f]">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="transition-opacity duration-200 hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <p className="text-[0.94rem] text-[#2d2d2d]">
                  Design e desenvolvimento por Gate80.
                </p>
              </div>

              <div className="flex flex-col items-center gap-8 text-center lg:items-end lg:text-right">
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  {[
                    {
                      label: "Instagram",
                      icon: "instagram" as const,
                      href: siteConfig.instagram,
                    },
                    {
                      label: "LinkedIn",
                      icon: "linkedin" as const,
                      href: siteConfig.linkedin,
                    },
                    {
                      label: "Email",
                      icon: "email" as const,
                      href: `mailto:${siteConfig.email}`,
                    },
                    {
                      label: "WhatsApp",
                      icon: "whatsapp" as const,
                      href: siteConfig.whatsappHref,
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-[48px] w-[48px] items-center justify-center border border-[#1c1c1c] bg-white text-[1.25rem] font-semibold text-[#111] transition-colors duration-200 hover:bg-[#f3f3f3]"
                    >
                      <SocialIcon name={social.icon} />
                    </a>
                  ))}
                </div>

                <p className="text-[0.94rem] text-[#5a5a5a] lg:text-right">
                  {siteConfig.copyright}
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-0 -mx-4 mt-6 overflow-hidden py-2 sm:-mx-10 lg:-mx-16">
            <div className="footer-marquee whitespace-nowrap text-[2.35rem] font-extrabold leading-none tracking-[-0.085em] text-[#c8cacf] sm:text-[5rem] lg:text-[7.4rem]">
              <span>
                Gate80 Company * Landing pages * Sistemas web * Automações *
                Gate80 Company * Landing pages * Sistemas web * Automações *
              </span>
              <span aria-hidden="true">
                Gate80 Company * Landing pages * Sistemas web * Automações *
                Gate80 Company * Landing pages * Sistemas web * Automações *
              </span>
            </div>
          </div>
        </div>
      </footer>
    </ReactLenis>
  );
}
