"use client";

import { useSyncExternalStore } from "react";
import SkyToggle from "@/components/ui/sky-toggle";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const isDark = theme === "dark";

  const ariaLabel = mounted
    ? isDark
      ? "Ativar tema claro"
      : "Ativar tema escuro"
    : "Alternar tema";

  const title = mounted ? (isDark ? "Tema claro" : "Tema escuro") : "Alternar tema";

  return (
    <div className="-ml-1 sm:-ml-1.5">
      <div className="theme-toggle-button inline-flex items-center justify-center bg-transparent p-0">
        <SkyToggle
          checked={mounted ? isDark : false}
          onCheckedChange={() => toggleTheme()}
          ariaLabel={ariaLabel}
          title={title}
        />
      </div>
    </div>
  );
}
