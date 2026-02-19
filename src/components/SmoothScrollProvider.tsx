"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Observer);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    // Current and target scroll positions
    let currentY = 0;
    let targetY = 0;
    let rafId: number;
    const ease = 0.085; // Lower = smoother/slower, Higher = snappier

    // Set wrapper to fixed full screen, content scrolls virtually
    const setDimensions = () => {
      document.body.style.height = content.scrollHeight + "px";
      wrapper.style.position = "fixed";
      wrapper.style.top = "0";
      wrapper.style.left = "0";
      wrapper.style.width = "100%";
      wrapper.style.overflow = "hidden";
    };

    setDimensions();

    const resizeObserver = new ResizeObserver(setDimensions);
    resizeObserver.observe(content);

    // Smooth scroll loop
    const tick = () => {
      targetY = window.scrollY;
      currentY += (targetY - currentY) * ease;

      // Stop jitter at very small differences
      if (Math.abs(targetY - currentY) < 0.05) {
        currentY = targetY;
      }

      gsap.set(content, { y: -currentY });

      // Sync ScrollTrigger
      ScrollTrigger.update();

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    // Override ScrollTrigger to use virtual scroll position
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value?: number) {
        if (arguments.length && value !== undefined) {
          currentY = value;
        }
        return currentY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: "transform",
    });

    ScrollTrigger.addEventListener("refresh", setDimensions);
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      document.body.style.height = "";
      wrapper.style.position = "";
      wrapper.style.top = "";
      wrapper.style.left = "";
      wrapper.style.width = "";
      wrapper.style.overflow = "";
      gsap.set(content, { y: 0 });
      ScrollTrigger.removeEventListener("refresh", setDimensions);
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default SmoothScrollProvider;
