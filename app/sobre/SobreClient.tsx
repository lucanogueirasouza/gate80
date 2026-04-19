"use client";

import Link from "next/link";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import SpotlightCard from "../components/SpotlightCard";
import { SiteNavbar } from "../components/SiteNavbar";
import { useScrollReveal } from "../useScrollReveal";
import aironImage from "@/public/image.png";
import lucaImage from "@/public/luca.jpeg";
import { siteConfig } from "../siteConfig";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Contato", href: "/contato" },
];

const footerLinks = [
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Termos & Condições", href: "/termos" },
  { label: "Fale com a Gate80", href: "/contato" },
];

const team = [
  {
    name: "Luca",
    role: "Desenvolvedor web, UX/UI & Automações",
    image: lucaImage,
    contactText: "Falar",
    gradient: "linear-gradient(145deg,#121212 0%,#232743 100%)",
  },
  {
    name: "Airon",
    role: "Automações & Gerenciamento",
    image: aironImage,
    contactText: "Falar",
    gradient: "linear-gradient(145deg,#101010 0%,#26303a 100%)",
  },
];

const processSteps = [
  {
    title: "Discovery",
    body: "Entendemos o momento do negócio, a oferta e o tipo de estrutura digital que faz mais sentido.",
  },
  {
    title: "Design",
    body: "Transformamos estratégia em interface, narrativa visual e comunicação clara para gerar confiança.",
  },
  {
    title: "Development",
    body: "Construímos páginas, sistemas e automações com foco em performance, organização e uso real.",
  },
  {
    title: "Launch",
    body: "Publicamos, refinamos e entregamos um projeto pronto para operar e crescer junto com a empresa.",
  },
];

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
        className="h-[25px] w-[25px]"
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

export default function SobrePage() {
  const [footerHeight, setFooterHeight] = useState(0);
  const [rotation, setRotation] = useState(0);
  const footerRef = useRef<HTMLElement | null>(null);

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => {
      setRotation(window.scrollY * 0.16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
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
          <SiteNavbar items={navItems} footerItems={footerLinks} />
          <section className="relative pt-16 sm:pt-20 lg:pt-24">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div className="space-y-7" data-reveal="left">
                <p className="pixel-font text-xs uppercase tracking-[0.18em] text-[#5d5d5d] sm:text-sm">
                  + About
                </p>
                <h1
                  className="intro-rise max-w-[920px] text-[2.45rem] font-extrabold leading-[0.9] tracking-[-0.08em] text-[#181818] sm:text-[4.2rem] lg:text-[5.3rem]"
                  style={{ ["--intro-delay" as string]: "80ms" }}
                >
                  Somos a Gate80, uma frente criativa de tecnologia para marcas
                  que querem crescer com clareza.
                </h1>
                <p
                  className="intro-rise max-w-[640px] text-lg leading-relaxed text-[#4d4d4d] sm:text-xl"
                  style={{ ["--intro-delay" as string]: "160ms" }}
                >
                  Criamos páginas, sistemas e automações com uma linguagem
                  visual forte, pensando em negócio, organização e presença
                  digital duradoura.
                </p>
              </div>

              <div className="relative hidden min-h-[240px] lg:block" data-reveal="right">
                <div
                  className="absolute right-[2%] top-[-4%] flex h-[300px] w-[300px] items-center justify-center opacity-35"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <span className="text-[14rem] leading-none text-[#d9dbde]">{"\u2737"}</span>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-20 sm:py-24">
            <div className="grid gap-0 border border-[#1c1c1c] bg-white lg:grid-cols-[0.95fr_1.35fr]">
              <div className="relative min-h-[320px] overflow-hidden border-b border-[#1c1c1c] bg-[#181818] text-white lg:min-h-[420px] lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 opacity-[0.18]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1.05px,transparent_1.25px)] [background-position:0_0] [background-size:18px_18px]" />
                </div>

                <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10">
                  <div className="space-y-6">
                    <div className="inline-flex border border-white/30 px-4 py-3">
                      <p className="pixel-font text-[0.62rem] uppercase tracking-[0.18em] text-white">
                        Gate80 Core
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                        Estrutura digital
                      </p>
                      <h2 className="max-w-[420px] text-[2.4rem] font-extrabold leading-[0.95] tracking-[-0.07em] sm:text-[3rem]">
                        Clareza para vender melhor e operar com mais firmeza.
                      </h2>
                      <p className="max-w-[410px] text-base leading-relaxed text-white/75 sm:text-lg">
                        Combinamos narrativa, interface e tecnologia para transformar presença digital em uma ferramenta real de crescimento.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <SpotlightCard
                      spotlightColor="rgba(255,255,255,0.08)"
                      className="border border-white/20 bg-white/5 px-4 py-5 backdrop-blur-[2px]"
                    >
                      <p className="pixel-font text-[0.58rem] uppercase tracking-[0.16em] text-white/65">
                        01
                      </p>
                      <p className="mt-3 text-lg font-semibold tracking-[-0.05em] text-white">
                        Landing pages
                      </p>
                    </SpotlightCard>
                    <SpotlightCard
                      spotlightColor="rgba(255,255,255,0.08)"
                      className="border border-white/20 bg-white/5 px-4 py-5 backdrop-blur-[2px]"
                    >
                      <p className="pixel-font text-[0.58rem] uppercase tracking-[0.16em] text-white/65">
                        02
                      </p>
                      <p className="mt-3 text-lg font-semibold tracking-[-0.05em] text-white">
                        Sistemas web
                      </p>
                    </SpotlightCard>
                    <SpotlightCard
                      spotlightColor="rgba(255,255,255,0.08)"
                      className="border border-white/20 bg-white/5 px-4 py-5 backdrop-blur-[2px]"
                    >
                      <p className="pixel-font text-[0.58rem] uppercase tracking-[0.16em] text-white/65">
                        03
                      </p>
                      <p className="mt-3 text-lg font-semibold tracking-[-0.05em] text-white">
                        Automações
                      </p>
                    </SpotlightCard>
                  </div>
                </div>
              </div>

              <div className="grid min-h-[360px] grid-rows-[1fr_auto] bg-white sm:min-h-[420px]">
                <div className="relative min-h-[220px] overflow-hidden border-b border-[#1c1c1c] bg-[#faf9f5] sm:min-h-[260px]">
                  <div className="absolute inset-0 opacity-[0.62]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(28,28,28,0.12)_1.1px,transparent_1.3px)] [background-position:0_0] [background-size:18px_18px]" />
                  </div>

                  <div className="absolute left-4 top-4 h-14 w-14 border border-[#1c1c1c] bg-white sm:left-8 sm:top-8 sm:h-24 sm:w-24" />
                  <div className="absolute left-8 top-8 h-14 w-14 border border-[#1c1c1c] bg-[#181818] sm:left-16 sm:top-16 sm:h-24 sm:w-24" />
                  <div className="absolute left-10 top-10 h-14 w-14 bg-[#f5f1e8] sm:left-20 sm:top-20 sm:h-24 sm:w-24" />

                  <div className="absolute right-4 top-4 max-w-[210px] sm:right-10 sm:top-10 sm:max-w-[280px]">
                    <SpotlightCard
                      spotlightColor="rgba(24,24,24,0.08)"
                      className="border border-[#1c1c1c] bg-white px-4 py-3 shadow-[4px_4px_0_#1c1c1c] sm:px-5 sm:py-4"
                    >
                      <p className="pixel-font text-[0.58rem] uppercase tracking-[0.16em] text-[#6a6a6a]">
                        Presença & percepção
                      </p>
                      <p className="mt-3 text-lg font-semibold leading-snug tracking-[-0.05em] text-[#181818]">
                        Estrutura, mensagem e entrega trabalhando juntas.
                      </p>
                    </SpotlightCard>
                  </div>
                </div>

                <div className="border-[#1c1c1c] bg-white p-6 sm:p-8">
                  <h2 className="max-w-[700px] text-[2.2rem] font-extrabold leading-[0.95] tracking-[-0.07em] text-[#171717] sm:text-[3rem] lg:text-[3.5rem]">
                    Transformando ideias em presença digital forte.
                  </h2>
                  <p className="mt-5 max-w-[760px] text-lg leading-relaxed text-[#4a4a4a]">
                    A Gate80 une estratégia, design e desenvolvimento para
                    construir experiências digitais claras, bonitas e usáveis.
                    Nosso trabalho vai além de &quot;fazer um site&quot;: pensamos em
                    estrutura, mensagem, operação e percepção de valor.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <SpotlightCard
                      spotlightColor="rgba(24,24,24,0.08)"
                      className="border border-[#1c1c1c] bg-[#faf9f5] px-4 py-4"
                    >
                      <p className="pixel-font text-[0.58rem] uppercase tracking-[0.16em] text-[#666]">
                        Foco
                      </p>
                      <p className="mt-3 text-base font-semibold tracking-[-0.04em] text-[#181818]">
                        Negócio antes de excesso visual
                      </p>
                    </SpotlightCard>
                    <SpotlightCard
                      spotlightColor="rgba(24,24,24,0.08)"
                      className="border border-[#1c1c1c] bg-[#faf9f5] px-4 py-4"
                    >
                      <p className="pixel-font text-[0.58rem] uppercase tracking-[0.16em] text-[#666]">
                        Entrega
                      </p>
                      <p className="mt-3 text-base font-semibold tracking-[-0.04em] text-[#181818]">
                        Design, código e operação alinhados
                      </p>
                    </SpotlightCard>
                    <SpotlightCard
                      spotlightColor="rgba(24,24,24,0.08)"
                      className="border border-[#1c1c1c] bg-[#faf9f5] px-4 py-4"
                    >
                      <p className="pixel-font text-[0.58rem] uppercase tracking-[0.16em] text-[#666]">
                        Resultado
                      </p>
                      <p className="mt-3 text-base font-semibold tracking-[-0.04em] text-[#181818]">
                        Presença clara, profissional e memorável
                      </p>
                    </SpotlightCard>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-20 sm:py-24">
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="pixel-font text-xs uppercase tracking-[0.18em] text-[#5d5d5d] sm:text-sm">
                  + People
                </p>
                <h2 className="text-[2.8rem] font-extrabold leading-[0.92] tracking-[-0.075em] text-[#4a4a4a] sm:text-[3.75rem] lg:text-[4.85rem]">
                  Um time enxuto, direto e focado em resultado.
                </h2>
                <p className="max-w-[780px] text-lg leading-relaxed text-[#595959] sm:text-xl">
                  A Gate80 trabalha com complementaridade: produto, experiência,
                  automação e operação andando juntos para entregar algo bonito,
                  funcional e util de verdade.
                </p>
              </div>

              <div className="grid justify-items-center gap-8 lg:grid-cols-2">
                {team.map((person, index) => (
                  <div
                    key={person.name}
                    data-reveal="up"
                    className="intro-scale mx-auto w-full max-w-[430px]"
                    style={{
                      ["--intro-delay" as string]: `${index * 90}ms`,
                      ["--reveal-delay" as string]: `${index * 110}ms`,
                    }}
                  >
                    <ProfileCard
                      avatarUrl={person.image.src}
                      name={person.name}
                      title={person.role}
                      contactText={person.contactText}
                      showUserInfo
                      enableTilt
                      enableMobileTilt={false}
                      onContactClick={() => {
                        window.location.href = "/contato";
                      }}
                      behindGlowEnabled={false}
                      innerGradient={person.gradient}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative border border-[#1c1c1c] bg-[#faf9f5] px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
            <div className="pointer-events-none absolute inset-0 opacity-[0.8]">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(28,28,28,0.12)_1.1px,transparent_1.3px)] [background-position:0_0] [background-size:18px_18px]" />
            </div>
            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
              <div className="space-y-5">
                <p className="pixel-font text-xs uppercase tracking-[0.18em] text-[#5d5d5d] sm:text-sm">
                  + Process
                </p>
                <h2 className="text-[2.8rem] font-extrabold leading-[0.92] tracking-[-0.075em] text-[#4a4a4a] sm:text-[3.75rem] lg:text-[4.85rem]">
                  Nosso processo
                </h2>
                <p className="max-w-[540px] text-lg leading-relaxed text-[#595959] sm:text-xl">
                  Misturamos criatividade com estratégia para desenhar,
                  desenvolver e publicar projetos que realmente servem ao
                  negócio.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {processSteps.map((step, index) => (
                  <SpotlightCard
                    key={step.title}
                    spotlightColor="rgba(24,24,24,0.08)"
                    data-reveal={index % 2 === 0 ? "up" : "right"}
                    className="intro-rise flex min-h-[230px] flex-col justify-between border border-[#1c1c1c] bg-white p-5 shadow-[4px_4px_0_#1c1c1c] sm:p-6"
                    style={{
                      ["--intro-delay" as string]: `${index * 70}ms`,
                      ["--reveal-delay" as string]: `${index * 100}ms`,
                    }}
                  >
                    <div className="space-y-4">
                      <p className="pixel-font text-[0.62rem] uppercase tracking-[0.16em] text-[#6a6a6a]">
                        0{index + 1}
                      </p>
                      <h3 className="text-[1.9rem] font-semibold tracking-[-0.05em] text-[#171717]">
                        {step.title}
                      </h3>
                      <p className="text-base leading-relaxed text-[#4f4f4f]">
                        {step.body}
                      </p>
                    </div>

                    <div className="mt-8 h-px w-full bg-[#1c1c1c]" />
                  </SpotlightCard>
                ))}
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
                <Link
                  href="/"
                  className="inline-flex border border-[#1c1c1c] bg-white px-6 py-4 text-black"
                >
                  <span className="pixel-font text-[1rem] uppercase tracking-[0.08em]">
                    GATE80
                  </span>
                </Link>

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
