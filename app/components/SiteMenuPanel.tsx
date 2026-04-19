"use client";

import Link from "next/link";
import { useEffect } from "react";
import { MenuToggleIcon } from "./MenuToggleIcon";
import styles from "./SiteMenuPanel.module.css";
import { ThemeToggle } from "./ThemeToggle";

type SiteMenuItem = {
  label: string;
  href: string;
};

type SiteMenuPanelProps = {
  open: boolean;
  onClose: () => void;
  items: SiteMenuItem[];
  accentColor?: string;
  colors?: string[];
  footerItems?: SiteMenuItem[];
};

export function SiteMenuPanel({
  open,
  onClose,
  items,
  accentColor = "#575757",
  colors = ["#d8d2c5", "#111111"],
  footerItems = [],
}: SiteMenuPanelProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const layerColors = (() => {
    const raw = colors.length ? colors.slice(0, 4) : ["#d8d2c5", "#111111"];
    const next = [...raw];

    if (next.length >= 3) {
      next.splice(Math.floor(next.length / 2), 1);
    }

    return next;
  })();

  return (
    <div
      aria-hidden={!open}
      className={styles.wrapper}
      data-open={open || undefined}
      style={{ ["--menu-accent" as string]: accentColor }}
    >
      <button
        type="button"
        aria-label="Fechar menu"
        className={styles.backdrop}
        onClick={onClose}
        tabIndex={open ? 0 : -1}
      />

      <div className={styles.prelayers} aria-hidden="true">
        {layerColors.map((color, index) => (
          <div
            key={`${color}-${index}`}
            className={styles.prelayer}
            style={{
              background: color,
              transitionDelay: open ? `${index * 70}ms` : `${(layerColors.length - index - 1) * 45}ms`,
            }}
          />
        ))}
      </div>

      <aside
        id="site-menu-panel"
        className={styles.panel}
        style={{ transitionDelay: open ? `${layerColors.length * 70 + 40}ms` : "0ms" }}
      >
        <div className={styles.inner}>
          <div className={`${styles.controls} gap-6 sm:gap-7`}>
            <ThemeToggle />
            <div className="offset-shadow">
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={onClose}
                className="menu-toggle-button offset-shadow__surface relative flex h-[62px] w-[62px] items-center justify-center border border-[#1c1c1c] bg-white sm:h-[74px] sm:w-[74px]"
              >
                <MenuToggleIcon
                  open
                  className="h-8 w-8 text-[#181818] sm:h-9 sm:w-9"
                />
              </button>
            </div>
          </div>

          <nav aria-label="Navegacao principal">
            <ul className={styles.list} role="list" data-numbering>
              {items.map((item, index) => (
                <li
                  key={`${item.label}-${index}`}
                  className={styles.itemWrap}
                  style={{
                    transitionDelay: open ? `${220 + index * 90}ms` : "0ms",
                  }}
                >
                  <Link href={item.href} onClick={onClose} className={styles.item}>
                    <span className={styles.itemLabel}>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {footerItems.length > 0 ? (
            <div className={styles.footer}>
              <p
                className={styles.footerTitle}
                style={{ transitionDelay: open ? "420ms" : "0ms" }}
              >
                Acesso rapido
              </p>
              <ul className={styles.footerList} role="list">
                {footerItems.map((item, index) => (
                  <li
                    key={item.href}
                    style={{
                      transitionDelay: open ? `${470 + index * 60}ms` : "0ms",
                    }}
                    className={styles.footerItem}
                  >
                    <Link href={item.href} onClick={onClose} className={styles.footerLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
