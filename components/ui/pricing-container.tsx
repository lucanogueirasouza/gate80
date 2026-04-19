"use client";

import React, { useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/app/components/ThemeProvider";

export interface PricingPlan {
  name: string;
  comboPrice: string;
  separatePrice: string;
  features: string[];
  badgeCode: string;
  badgeLabel: string;
  accent: string;
  isPopular?: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  className?: string;
}

const extractFirstNumber = (value: string) => {
  const match = value.match(/\d+/);
  return match ? Number(match[0]) : 0;
};

const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: 0.85,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
};

const PricingToggle = ({
  showSeparate,
  onToggle,
}: {
  showSeparate: boolean;
  onToggle: () => void;
}) => (
  <div className="relative z-10 mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:mb-10 sm:gap-4">
    <span
      className={cn(
        "text-sm font-semibold uppercase tracking-[0.14em] text-[#666]",
        !showSeparate && "text-[#111]",
      )}
    >
      Combo
    </span>
    <motion.button
      type="button"
      onClick={onToggle}
        className="flex h-10 w-20 items-center rounded-full border-2 border-[#1c1c1c] bg-white px-1 shadow-[3px_3px_0_#1c1c1c] transition-colors duration-200 theme-dark:border-[#e8edf3] theme-dark:bg-[#101216] theme-dark:shadow-[3px_3px_0_#e8edf3]"
    >
      <motion.div
        className="h-7 w-7 rounded-full border-2 border-[#1c1c1c] bg-[#111] theme-dark:border-[#e8edf3] theme-dark:bg-[#f5f7fa]"
        animate={{ x: showSeparate ? 38 : 0 }}
      />
    </motion.button>
    <span
      className={cn(
        "text-sm font-semibold uppercase tracking-[0.14em] text-[#666]",
        showSeparate && "text-[#111]",
      )}
    >
      Separado
    </span>
  </div>
);

const BackgroundEffects = ({ disabled = false }: { disabled?: boolean }) => {
  if (disabled) return null;

  return (
    <>
      <div className="pointer-events-none absolute inset-0 opacity-[0.5]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(28,28,28,0.1)_1.1px,transparent_1.3px)] [background-position:0_0] [background-size:18px_18px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2),rgba(255,255,255,0))]" />
    </>
  );
};

const PricingCard = ({
  plan,
  showSeparate,
  index,
}: {
  plan: PricingPlan;
  showSeparate: boolean;
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

  const currentPrice = showSeparate ? plan.separatePrice : plan.comboPrice;
  const previousPrice = showSeparate ? plan.comboPrice : plan.separatePrice;
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
      <motion.div
        className={cn(
          "absolute right-2 top-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.92)] sm:-right-4 sm:-top-4 sm:h-16 sm:w-16",
          plan.accent,
        )}
        animate={{
          rotate: [0, 10, 0, -10, 0],
          scale: [1, 1.04, 0.97, 1.04, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-center">
          <div className="text-base font-black sm:text-lg">
            R$
            <Counter
              from={extractFirstNumber(previousPrice)}
              to={extractFirstNumber(currentPrice)}
            />
          </div>
          <div className="text-[9px] font-bold uppercase sm:text-[10px]">
            {showSeparate ? "avulso" : "combo"}
          </div>
        </div>
      </motion.div>

      <div className="mb-4 pr-12 sm:pr-0">
        <div
          className={cn(
            "flex h-20 w-20 flex-col justify-between rounded-[14px] border-2 border-black bg-[#111] px-3 py-3 text-white",
            isDark
              ? "border-white bg-[#11141a] shadow-[2px_2px_0_0_rgba(255,255,255,0.95)]"
              : "shadow-[2px_2px_0_0_rgba(0,0,0,0.92)]",
          )}
        >
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/65">
            {plan.badgeLabel}
          </p>
          <p className="text-[1.2rem] font-black leading-none tracking-[-0.08em]">
            {plan.badgeCode}
          </p>
        </div>
      </div>

      <div className="mb-5 pr-12 sm:pr-0">
        <h3 className="text-[1.75rem] font-bold leading-tight tracking-[-0.05em] text-[#171717] theme-dark:text-[#f5f7fa] sm:text-[1.85rem]">
          {plan.name}
        </h3>
        {plan.isPopular ? (
          <motion.span
            className={cn(
              "mt-3 inline-flex rounded-md border-2 border-black px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-[2px_2px_0_0_rgba(0,0,0,0.92)]",
              plan.accent,
            )}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Mais pedido
          </motion.span>
        ) : null}
      </div>

      <div className="min-h-[120px]">
        <p className="max-w-[90%] text-[1.9rem] font-extrabold tracking-[-0.06em] text-[#181818] theme-dark:text-[#f7f9fc] sm:max-w-full sm:text-[2.2rem]">
          {currentPrice}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#535353] theme-dark:text-[#b8bec6]">
          {showSeparate ? "Valor do combo:" : "Preço separado:"} {previousPrice}
        </p>
      </div>

      <div className="mb-6 mt-6 space-y-3">
        {plan.features.map((feature, featureIndex) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: featureIndex * 0.06 }}
            whileHover={{ x: 4, scale: 1.01 }}
            className={cn(
              "flex items-center gap-2 rounded-md border-2 border-black bg-[#faf9f5] p-2",
              isDark
                ? "border-white bg-[#12161c] shadow-[2px_2px_0_0_rgba(255,255,255,0.95)]"
                : "shadow-[2px_2px_0_0_rgba(0,0,0,0.92)]",
            )}
          >
            <span
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-[6px] border border-black text-xs font-black text-white shadow-[1px_1px_0_0_rgba(0,0,0,0.92)]",
                plan.accent,
              )}
            >
              +
            </span>
            <span className="text-sm font-bold text-[#171717] theme-dark:text-[#eef2f6]">{feature}</span>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="/contato"
        className={cn(
          "mt-auto inline-flex w-full items-center justify-center rounded-lg border-2 border-black py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.92)] transition-all duration-200 hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.92)]",
          plan.accent,
        )}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.97 }}
      >
        Quero esse combo
      </motion.a>
    </motion.div>
  );
};

export function PricingContainer({
  plans,
  className = "",
}: PricingProps) {
  const [showSeparate, setShowSeparate] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative overflow-visible bg-transparent p-0 pb-3",
        className,
      )}
    >
      <PricingToggle
        showSeparate={showSeparate}
        onToggle={() => setShowSeparate((current) => !current)}
      />
      <BackgroundEffects disabled={isDark} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 xl:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            showSeparate={showSeparate}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
