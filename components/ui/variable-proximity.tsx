"use client";

import {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type RefObject,
} from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "./variable-proximity.module.css";

type Falloff = "linear" | "exponential" | "gaussian";

type VariableProximityProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  label: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  containerRef?: RefObject<HTMLElement | null>;
  radius?: number;
  falloff?: Falloff;
};

function useAnimationFrame(callback: () => void) {
  useEffect(() => {
    let frameId = 0;

    const loop = () => {
      callback();
      frameId = window.requestAnimationFrame(loop);
    };

    frameId = window.requestAnimationFrame(loop);

    return () => window.cancelAnimationFrame(frameId);
  }, [callback]);
}

function useMousePositionRef(containerRef?: RefObject<HTMLElement | null>) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
        return;
      }

      positionRef.current = { x, y };
    };

    const handleMouseMove = (event: MouseEvent) => {
      updatePosition(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

export const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>(
  function VariableProximity(
    {
      label,
      className,
      fromFontVariationSettings = "'wght' 400, 'opsz' 9",
      toFontVariationSettings = "'wght' 800, 'opsz' 40",
      containerRef,
      radius = 50,
      falloff = "linear",
      onClick,
      style,
      ...restProps
    },
    ref,
  ) {
    const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const interpolatedSettingsRef = useRef<string[]>([]);
    const mousePositionRef = useMousePositionRef(containerRef);
    const lastPositionRef = useRef({ x: Number.NaN, y: Number.NaN });

    const parsedSettings = useMemo(() => {
      const parseSettings = (settingsStr: string) =>
        new Map(
          settingsStr
            .split(",")
            .map((segment) => segment.trim())
            .map((segment) => {
              const [name, value] = segment.split(" ");
              return [name.replace(/['"]/g, ""), Number.parseFloat(value)];
            }),
        );

      const fromSettings = parseSettings(fromFontVariationSettings);
      const toSettings = parseSettings(toFontVariationSettings);

      return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
        axis,
        fromValue,
        toValue: toSettings.get(axis) ?? fromValue,
      }));
    }, [fromFontVariationSettings, toFontVariationSettings]);

    useEffect(() => {
      letterRefs.current.forEach((letterRef) => {
        if (!letterRef) return;
        letterRef.style.fontVariationSettings = fromFontVariationSettings;
      });
    }, [fromFontVariationSettings, label]);

    useAnimationFrame(() => {
      if (!containerRef?.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const { x, y } = mousePositionRef.current;

      if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
        return;
      }

      lastPositionRef.current = { x, y };

      letterRefs.current.forEach((letterRef, index) => {
        if (!letterRef) return;

        const rect = letterRef.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
        const letterCenterY = rect.top + rect.height / 2 - containerRect.top;
        const distance = Math.hypot(x - letterCenterX, y - letterCenterY);

        if (distance >= radius) {
          letterRef.style.fontVariationSettings = fromFontVariationSettings;
          return;
        }

        const normalizedDistance = Math.min(Math.max(1 - distance / radius, 0), 1);

        const falloffValue =
          falloff === "exponential"
            ? normalizedDistance ** 2
            : falloff === "gaussian"
              ? Math.exp(-((distance / (radius / 2)) ** 2) / 2)
              : normalizedDistance;

        const nextSettings = parsedSettings
          .map(({ axis, fromValue, toValue }) => {
            const interpolatedValue =
              fromValue + (toValue - fromValue) * falloffValue;
            return `'${axis}' ${interpolatedValue}`;
          })
          .join(", ");

        interpolatedSettingsRef.current[index] = nextSettings;
        letterRef.style.fontVariationSettings = nextSettings;
      });
    });

    let letterIndex = 0;

    return (
      <span
        ref={ref}
        className={cn(styles.variableProximity, className)}
        onClick={onClick}
        style={{ display: "inline", ...style }}
        {...restProps}
      >
        {label.split("\n").map((line, lineIndex, lines) => (
          <span key={`${line}-${lineIndex}`} className={styles.line}>
            {line.split(" ").map((word, wordIndex, words) => (
              <span key={`${word}-${wordIndex}`} className={styles.word}>
                {word.split("").map((letter) => {
                  const currentLetterIndex = letterIndex++;

                  return (
                    <motion.span
                      key={`${letter}-${currentLetterIndex}`}
                      ref={(element) => {
                        letterRefs.current[currentLetterIndex] = element;
                      }}
                      className={styles.letter}
                      style={
                        {
                          fontVariationSettings:
                            interpolatedSettingsRef.current[currentLetterIndex] ??
                            fromFontVariationSettings,
                        } satisfies CSSProperties
                      }
                      aria-hidden="true"
                    >
                      {letter}
                    </motion.span>
                  );
                })}
                {wordIndex < words.length - 1 ? (
                  <span className={styles.space} aria-hidden="true">
                    &nbsp;
                  </span>
                ) : null}
              </span>
            ))}
            {lineIndex < lines.length - 1 ? <br aria-hidden="true" /> : null}
          </span>
        ))}
        <span className={styles.srOnly}>{label}</span>
      </span>
    );
  },
);
