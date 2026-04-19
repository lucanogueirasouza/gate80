"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { VariableProximity } from "@/components/ui/variable-proximity";
import ScrollFloat from "../components/ScrollFloat";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import { SiteNavbar } from "../components/SiteNavbar";
import { siteConfig } from "../siteConfig";
import { useScrollReveal } from "../useScrollReveal";
import { projectCaseStudies } from "./data";
import stackStyles from "./ProjetosStack.module.css";

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

export default function ProjetosPage() {
  const [footerHeight, setFooterHeight] = useState(0);
  const [rotation, setRotation] = useState(0);
  const footerRef = useRef<HTMLElement | null>(null);
  const titleContainerRef = useRef<HTMLDivElement | null>(null);

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => {
      setRotation(window.scrollY * 0.16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const updateFooterHeight = () => {
      setFooterHeight(footer.offsetHeight);
    };

    updateFooterHeight();
    window.addEventListener("resize", updateFooterHeight);
    return () => window.removeEventListener("resize", updateFooterHeight);
  }, []);

  return (
    <>
      <main
        className="relative z-10 min-h-screen overflow-x-hidden bg-white"
        style={{ marginBottom: footerHeight ? `${footerHeight}px` : undefined }}
      >
        <div aria-hidden="true" className="hero-dots" />

        <div className="page-fade-in relative z-10 mx-auto flex min-h-screen w-full max-w-[1520px] flex-col px-4 py-4 sm:px-8 sm:py-8 lg:px-14">
          <SiteNavbar items={navItems} footerItems={footerLinks} />

          <section className="relative pt-16 sm:pt-20 lg:pt-24">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
              <div className="space-y-6 sm:space-y-7" data-reveal="left">
                <p className="pixel-font text-xs uppercase tracking-[0.18em] text-[#5d5d5d] sm:text-sm">
                  + Work
                </p>
                <div
                  ref={titleContainerRef}
                  className="intro-rise relative max-w-[920px]"
                  style={{ ["--intro-delay" as string]: "80ms" }}
                >
                  <h1 className="text-[2.15rem] font-extrabold leading-[0.94] tracking-[-0.08em] text-[#181818] sm:text-[4.2rem] lg:text-[5.3rem]">
                    <VariableProximity
                      label={`Projetos com\nimagem forte,\nleitura clara e\npresença digital\nbem resolvida.`}
                      containerRef={titleContainerRef}
                      radius={150}
                      falloff="gaussian"
                      fromFontVariationSettings="'wght' 620"
                      toFontVariationSettings="'wght' 800"
                    />
                  </h1>
                </div>
                <p
                  className="intro-rise max-w-[700px] text-base leading-relaxed text-[#4d4d4d] sm:text-xl"
                  style={{ ["--intro-delay" as string]: "160ms" }}
                >
                  Esta página reúne algumas direções visuais e trabalhos que mostram
                  como a Gate80 pensa estrutura, contraste e clareza para transformar
                  uma marca em algo mais memorável no digital.
                </p>
              </div>

              <div className="relative hidden min-h-[240px] lg:block" data-reveal="right">
                <div
                  className="absolute right-[0%] top-[-6%] flex h-[310px] w-[310px] items-center justify-center opacity-35"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <span className="text-[14.5rem] leading-none text-[#d9dbde]">✺</span>
                </div>
              </div>
            </div>
          </section>

          <section className="relative pt-4 pb-24 sm:pt-8 sm:pb-40">
            <ScrollStack
              useWindowScroll
              itemDistance={100}
              itemScale={0.03}
              itemStackDistance={30}
              stackPosition="20%"
              scaleEndPosition="10%"
              baseScale={0.85}
              rotationAmount={0}
              blurAmount={0}
              className="mx-auto w-full"
            >
              {projectCaseStudies.map((project, index) => (
                <ScrollStackItem key={project.slug} itemClassName={stackStyles.stackItem}>
                  <article
                    className={`${stackStyles.stackCard} ${
                      project.slug === "automacao-atendimento-whatsapp" ||
                      project.slug === "controle-de-estoque"
                        ? stackStyles.finalCompactCard
                        : project.name.length > 22 ||
                            project.description.length > 95
                          ? stackStyles.compactCard
                          : ""
                    } ${
                      project.name.length > 22 ||
                      project.description.length > 95
                        ? stackStyles.compactCard
                        : ""
                    }`.trim()}
                  >
                    <div className={stackStyles.stackSurface}>
                      <div className={stackStyles.mediaPane}>
                        <div className={stackStyles.mediaInner}>
                          <div
                            className={`${stackStyles.mediaFrame} ${project.frameClass} ${project.imageWrapClass}`}
                          >
                            <Image
                              src={project.logo}
                              alt={project.logoAlt ?? project.name}
                              className="h-auto w-[88%] max-w-[520px] object-contain sm:w-[92%]"
                              sizes="(min-width: 1024px) 44vw, 88vw"
                            />
                          </div>
                        </div>
                      </div>

                      <div className={stackStyles.contentPane}>
                        <span className={`${stackStyles.eyebrow} pixel-font`}>
                          {project.heroTag.replace("+ ", "")}
                        </span>

                        <div>
                          <h2 className={stackStyles.title}>{project.name}</h2>
                          <p className={stackStyles.category}>{project.category}</p>
                        </div>

                        <p className={stackStyles.description}>{project.description}</p>

                        <div className={stackStyles.metaGrid}>
                          <div className={stackStyles.metaItem}>
                            <p className={`${stackStyles.metaLabel} pixel-font`}>Direção</p>
                            <p className={stackStyles.metaValue}>{project.heroBody}</p>
                          </div>
                        </div>

                        <div className={stackStyles.actions}>
                          <span className={`${stackStyles.index} pixel-font`}>
                            0{index + 1}
                          </span>
                          <Link
                            href={`/projetos/${project.slug}`}
                            className="offset-shadow shrink-0 self-start"
                          >
                            <span className="offset-shadow__surface inline-flex border border-[#1c1c1c] bg-white px-4 py-3 text-sm font-semibold text-[#111] sm:px-5 sm:text-base">
                              Ver estudo de caso
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </section>

          <section className="relative pt-44 pb-16 sm:pt-56 sm:pb-24">
            <div className="space-y-4 text-center sm:space-y-5">
              <ScrollFloat
                containerClassName="mx-auto max-w-[1180px]"
                textClassName="text-center !text-[clamp(1.55rem,8.5vw,4rem)] !leading-[1.08] !tracking-[-0.05em]"
                animationDuration={1.05}
                stagger={0.022}
              >
                Projetos sob encomenda, feitos para parecerem certos.
              </ScrollFloat>
              <ScrollFloat
                containerClassName="mx-auto max-w-[1180px]"
                textClassName="text-center !text-[clamp(1.55rem,8.5vw,4rem)] !leading-[1.08] !tracking-[-0.05em]"
                animationDuration={1.05}
                stagger={0.022}
              >
                Do site institucional ao sistema interno, o projeto é montado para
                caber no negócio e não o contrário.
              </ScrollFloat>
            </div>
          </section>

          <section className="relative py-16 sm:py-24">
            <div
              data-reveal="up"
              className="intro-rise grid gap-6 border border-[#1c1c1c] bg-white p-5 shadow-[4px_4px_0_#1c1c1c] sm:gap-8 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center"
            >
              <div className="space-y-4">
                <p className="pixel-font text-xs uppercase tracking-[0.18em] text-[#5d5d5d] sm:text-sm">
                  + Next Project
                </p>
                <h2 className="text-[2rem] font-extrabold leading-[0.96] tracking-[-0.07em] text-[#1f1f1f] sm:text-[3rem]">
                  Quer que o próximo projeto dessa página seja o seu?
                </h2>
                <p className="max-w-[720px] text-base leading-relaxed text-[#565656] sm:text-lg">
                  A Gate80 pode desenhar sua landing page, página institucional ou
                  direção visual com foco em presença, organização e conversão.
                </p>
              </div>

              <Link href="/contato" className="offset-shadow self-start">
                <span className="offset-shadow__surface inline-flex border border-[#1c1c1c] bg-white px-6 py-4 text-base font-semibold text-[#111] sm:px-7 sm:py-5 sm:text-lg">
                  Falar com a Gate80
                </span>
              </Link>
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
    </>
  );
}
