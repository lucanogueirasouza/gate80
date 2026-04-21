"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

interface WordData {
  text: string;
  duration: number;
  delay: number;
  blur: number;
  scale?: number;
}

interface BlurTextAnimationProps {
  text: string;
  words?: WordData[];
  className?: string;
  animationDelay?: number;
}

export default function BlurTextAnimation({
  text,
  words,
  className = "",
  animationDelay = 10000, // delay between loops
}: BlurTextAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout>(null);
  const resetTimeoutRef = useRef<NodeJS.Timeout>(null);

  const textWords = useMemo(() => {
    if (words) return words;

    const splitWords = text.split(" ");
    const totalWords = splitWords.length;

    return splitWords.map((word, index) => {
      const progress = index / totalWords;
      const exponentialDelay = Math.pow(progress, 0.8) * 0.5;
      const baseDelay = index * 0.08;
      const microVariation = (Math.random() - 0.5) * 0.05;

      return {
        text: word,
        duration: 1.8 + Math.cos(index * 0.3) * 0.3,
        delay: baseDelay + exponentialDelay + microVariation,
        blur: 10 + Math.floor(Math.random() * 5),
        scale: 0.9 + Math.sin(index * 0.2) * 0.05,
      };
    });
  }, [text, words]);

  useEffect(() => {
    const startAnimation = () => {
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);

      let maxTime = 0;
      textWords.forEach((word) => {
        const totalTime = word.delay + word.duration;
        maxTime = Math.max(maxTime, totalTime);
      });

      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false);

        if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
        resetTimeoutRef.current = setTimeout(() => {
          startAnimation();
        }, animationDelay);
      }, (maxTime + 1) * 1000);
    };

    startAnimation();

    return () => {
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, [textWords, animationDelay]);

  return (
    <h1 className={`${className}`}>
      {textWords.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDuration: `${word.duration}s`,
            transitionDelay: `${word.delay}s`,
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            filter: isAnimating
              ? "blur(0px) brightness(1)"
              : `blur(${word.blur}px) brightness(0.6)`,
            transform: isAnimating
              ? "translateY(0) scale(1) rotateX(0deg)"
              : `translateY(15px) scale(${word.scale || 1}) rotateX(-15deg)`,
            marginRight: "0.28em",
            willChange: "filter, transform, opacity",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            textShadow: isAnimating
              ? "none"
              : "0 0 20px rgba(0,0,0,0.1)",
          }}
        >
          {word.text}
        </span>
      ))}
    </h1>
  );
}
