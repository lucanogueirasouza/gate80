"use client";

import { useSyncExternalStore, type PointerEvent } from "react";
import { useTheme } from "./ThemeProvider";

function PixelSun() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[26px] w-[26px] sm:h-[30px] sm:w-[30px]"
      fill="currentColor"
      shapeRendering="crispEdges"
    >
      <rect x="11" y="1" width="2" height="4" />
      <rect x="11" y="19" width="2" height="4" />
      <rect x="1" y="11" width="4" height="2" />
      <rect x="19" y="11" width="4" height="2" />
      <rect x="4" y="4" width="2" height="2" />
      <rect x="18" y="4" width="2" height="2" />
      <rect x="4" y="18" width="2" height="2" />
      <rect x="18" y="18" width="2" height="2" />
      <rect x="8" y="8" width="8" height="8" />
      <rect x="6" y="9" width="2" height="6" />
      <rect x="16" y="9" width="2" height="6" />
      <rect x="9" y="6" width="6" height="2" />
      <rect x="9" y="16" width="6" height="2" />
    </svg>
  );
}

function PixelMoon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[26px] w-[26px] sm:h-[30px] sm:w-[30px]"
      fill="currentColor"
      shapeRendering="crispEdges"
    >
      <rect x="12" y="2" width="2" height="2" />
      <rect x="10" y="4" width="4" height="2" />
      <rect x="8" y="6" width="6" height="2" />
      <rect x="7" y="8" width="7" height="2" />
      <rect x="6" y="10" width="7" height="2" />
      <rect x="6" y="12" width="7" height="2" />
      <rect x="7" y="14" width="7" height="2" />
      <rect x="8" y="16" width="6" height="2" />
      <rect x="10" y="18" width="4" height="2" />
      <rect x="12" y="20" width="2" height="2" />

      <rect x="13" y="4" width="3" height="2" className="theme-toggle-cutout" />
      <rect x="14" y="6" width="3" height="2" className="theme-toggle-cutout" />
      <rect x="14" y="8" width="4" height="2" className="theme-toggle-cutout" />
      <rect x="13" y="10" width="5" height="2" className="theme-toggle-cutout" />
      <rect x="13" y="12" width="5" height="2" className="theme-toggle-cutout" />
      <rect x="14" y="14" width="4" height="2" className="theme-toggle-cutout" />
      <rect x="14" y="16" width="3" height="2" className="theme-toggle-cutout" />
      <rect x="13" y="18" width="3" height="2" className="theme-toggle-cutout" />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const isDark = theme === "dark";

  const handlePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
  };

  const ariaLabel = mounted
    ? isDark
      ? "Ativar tema claro"
      : "Ativar tema escuro"
    : "Alternar tema";

  const title = mounted ? (isDark ? "Tema claro" : "Tema escuro") : "Alternar tema";

  return (
    <div className="offset-shadow">
      <button
        type="button"
        onClick={toggleTheme}
        onPointerUp={handlePointerUp}
        aria-label={ariaLabel}
        title={title}
        className="theme-toggle-button offset-shadow__surface relative flex h-[62px] w-[62px] items-center justify-center border border-[#1c1c1c] bg-white text-[#181818] sm:h-[74px] sm:w-[74px]"
      >
        <span className="absolute inset-x-0 top-[9px] flex items-center justify-center sm:top-[11px]">
          {mounted && isDark ? <PixelMoon /> : <PixelSun />}
        </span>
        <span className="pixel-font absolute bottom-[8px] text-[0.44rem] uppercase tracking-[0.12em] sm:bottom-[10px] sm:text-[0.52rem]">
          {mounted && isDark ? "Lua" : "Sol"}
        </span>
      </button>
    </div>
  );
}
