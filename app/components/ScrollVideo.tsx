"use client";

import { useEffect, useRef } from "react";

interface ScrollVideoProps {
  src: string;
  /**
   * Total scroll range (px) that plays the video from 0% to 100%.
   * Defaults to window.innerHeight * 3.
   */
  scrollDistance?: number;
  className?: string;
}

export function ScrollVideo({ src, scrollDistance, className }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    let displayTime = 0;
    let rafId = 0;

    const loop = () => {
      rafId = requestAnimationFrame(loop);

      if (!video.duration) return;

      const distance = scrollDistance ?? window.innerHeight * 3;
      // Use scrollY directly – works even with Lenis virtual scroll
      const progress = Math.max(0, Math.min(window.scrollY / distance, 1));
      const targetTime = progress * video.duration;

      // Lerp towards target for smooth motion
      const diff = targetTime - displayTime;
      if (Math.abs(diff) > 0.001) {
        displayTime += diff * 0.12;
        video.currentTime = Math.max(0, Math.min(displayTime, video.duration));
      }
    };

    const start = () => {
      if (!rafId) rafId = requestAnimationFrame(loop);
    };

    if (video.readyState >= 1) {
      start();
    } else {
      video.addEventListener("loadedmetadata", start, { once: true });
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [scrollDistance, src]);

  return (
    <div className={className}>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-contain"
        style={{ pointerEvents: "none", display: "block" }}
      />
    </div>
  );
}
