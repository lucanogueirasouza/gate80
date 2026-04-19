"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useState, useSyncExternalStore } from "react";
import { MenuToggleIcon } from "./MenuToggleIcon";
import { NavbarBrand } from "./NavbarBrand";
import { SiteMenuPanel } from "./SiteMenuPanel";
import { ThemeToggle } from "./ThemeToggle";

type SiteMenuItem = {
  label: string;
  href: string;
};

type SiteNavbarProps = {
  items: SiteMenuItem[];
  footerItems?: SiteMenuItem[];
  accentColor?: string;
  colors?: string[];
};

function MenuToggle({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="offset-shadow">
      <button
        type="button"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="site-menu-panel"
        onClick={onClick}
        className="menu-toggle-button offset-shadow__surface relative flex h-[62px] w-[62px] items-center justify-center border border-[#1c1c1c] bg-white sm:h-[74px] sm:w-[74px]"
      >
        <MenuToggleIcon
          open={isOpen}
          className="h-8 w-8 text-[#181818] sm:h-9 sm:w-9"
        />
      </button>
    </div>
  );
}

export function SiteNavbar({
  items,
  footerItems = [],
  accentColor,
  colors,
}: SiteNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  return (
    <div className="relative z-30">
      <header className="relative z-10 flex items-start justify-between intro-rise">
        <Link href="/" className="inline-flex items-center">
          <NavbarBrand />
        </Link>

        <div
          className={`flex items-center gap-10 sm:gap-12 transition-opacity duration-200 ${
            menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          aria-hidden={menuOpen}
        >
          <ThemeToggle />
          <MenuToggle isOpen={menuOpen} onClick={() => setMenuOpen((current) => !current)} />
        </div>
      </header>

      {mounted
        ? createPortal(
            <SiteMenuPanel
              open={menuOpen}
              onClose={() => setMenuOpen(false)}
              items={items}
              footerItems={footerItems}
              accentColor={accentColor}
              colors={colors}
            />,
            document.body,
          )
        : null}
    </div>
  );
}
