"use client";

import { useRef } from "react";
import styles from "./SpotlightCard.module.css";

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  spotlightColor?: string;
};

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.18)",
  onMouseMove,
  ...rest
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--spotlight-color", spotlightColor);

    onMouseMove?.(event);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      {...rest}
      className={`${styles.cardSpotlight} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
