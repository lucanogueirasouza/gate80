"use client";

import Link from "next/link";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import { NavbarBrand } from "./NavbarBrand";
import { ThemeToggle } from "./ThemeToggle";
import { useScrollReveal } from "../useScrollReveal";
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

function ScrollGlyph({
  rotation,
  glyph,
}: {
  rotation: number;
  glyph: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="flex h-[210px] w-[210px] items-center justify-center opacity-35 sm:h-[270px] sm:w-[270px]"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <span className="text-[10rem] leading-none text-[#d4d7db] sm:text-[13.5rem]">{glyph}</span>
    </div>
  );
}

export function LegalPageShell({
  eyebrow,
  title,
  intro,
  glyph,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  glyph: string;
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
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
        className="relative z-10 min-h-screen overflow-x-hidden bg-white text-[#181818]"
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
          <section className="relative pt-16 sm:pt-20 lg:pt-24">
            <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
              <div className="space-y-7" data-reveal="left">
                <p className="pixel-font text-xs uppercase tracking-[0.18em] text-[#5d5d5d] sm:text-sm">
                  {eyebrow}
                </p>
                <h1 className="intro-rise max-w-[920px] text-[2.45rem] font-extrabold leading-[0.9] tracking-[-0.08em] text-[#181818] sm:text-[4.2rem] lg:text-[5.3rem]">
                  {title}
                </h1>
                <p className="intro-rise max-w-[760px] text-lg leading-relaxed text-[#4d4d4d] sm:text-xl">
                  {intro}
                </p>
              </div>

              <div
                className="relative hidden min-h-[240px] items-start justify-end lg:flex"
                data-reveal="right"
              >
                <div className="mr-[8%] mt-[6%]">
                  <ScrollGlyph rotation={rotation} glyph={glyph} />
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-20 sm:py-24">
            <div
              data-reveal="up"
              className="intro-scale max-w-[980px] space-y-6 border border-[#1c1c1c] bg-white p-6 shadow-[4px_4px_0_#1c1c1c] sm:p-8 lg:p-10"
            >
              {children}
            </div>
          </section>
        </div>
      </main>

      <footer
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
