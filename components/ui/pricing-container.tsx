"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/app/components/ThemeProvider";

export interface PricingPlan {
  name: string;
  description: string;
  accent: string;
  isPopular?: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  className?: string;
}

const BackgroundEffects = ({ disabled = false }: { disabled?: boolean }) => {
  if (disabled) return null;

  return (
    <>
      <div className="pointer-events-none absolute inset-0 opacity-[0.5]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(28,28,28,0.1)_1.1px,transparent_1.3px)] [background-position:0_0] [background-size:18px_18px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0))]" />
    </>
  );
};

const PricingCard = ({
  plan,
  index,
}: {
  plan: PricingPlan;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    springConfig,
  );
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.12 }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={(event) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;
        mouseX.set((event.clientX - centerX) / rect.width);
        mouseY.set((event.clientY - centerY) / rect.height);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className={cn(
        "relative flex h-full flex-col rounded-[18px] border-[3px] border-black bg-white p-6 transition-all duration-200 sm:p-8",
        isDark
          ? "border-white bg-[#0c0e12] shadow-[6px_6px_0_0_rgba(255,255,255,0.98)] hover:shadow-[8px_8px_0_0_rgba(255,255,255,0.98)]"
          : "shadow-[6px_6px_0_0_rgba(0,0,0,0.92)] hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.92)]",
      )}
    >
      <div className="mb-6 flex items-start justify-end gap-4">
        {plan.isPopular ? (
          <motion.span
            className={cn(
              "inline-flex rounded-md border-2 border-black px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-[2px_2px_0_0_rgba(0,0,0,0.92)]",
              plan.accent,
            )}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Mais procurado
          </motion.span>
        ) : null}
      </div>

      <div className="space-y-4">
        <h3 className="text-[1.75rem] font-bold leading-tight tracking-[-0.05em] text-[#171717] theme-dark:text-[#f5f7fa] sm:text-[1.95rem]">
          {plan.name}
        </h3>
        <p className="text-base leading-relaxed text-[#535353] theme-dark:text-[#b8bec6] sm:text-[1.02rem]">
          {plan.description}
        </p>
      </div>

      <div className="mt-7" />

      <motion.a
        href="/contato"
        className={cn(
          "mt-auto inline-flex w-full items-center justify-center rounded-lg border-2 border-black py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.92)] transition-all duration-200 hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.92)]",
          plan.accent,
        )}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.97 }}
      >
        Falar sobre esse serviço
      </motion.a>
    </motion.div>
  );
};

export function PricingContainer({ plans, className = "" }: PricingProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative overflow-visible bg-transparent p-0 pb-3",
        className,
      )}
    >
      <BackgroundEffects disabled={isDark} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 xl:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} index={index} />
        ))}
      </div>
    </div>
  );
}
