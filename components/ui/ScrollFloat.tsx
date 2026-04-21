"use client";
import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'top bottom+=20%',
  scrollEnd = 'bottom bottom-=20%',
  stagger = 0.03
}: any) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char: any, index: number) => (
      <span className="inline-block" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use window as default if no scrollContainerRef is provided
    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    // Use a unique class just to select the children spans properly without external css
    const charElements = Array.from((el as HTMLElement).children[0].children);

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 95%", // Trigger right when it enters the viewport
          once: true // Play the animation once, without scrub, since it's the hero
        }
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h1 ref={containerRef} className={`overflow-hidden ${containerClassName}`}>
      <span className={`inline-block ${textClassName}`}>{splitText}</span>
    </h1>
  );
};

export default ScrollFloat;
