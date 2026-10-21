"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    let currentY = window.scrollY;
    let rafId = 0;
    const ease = 0.025;

    const setDimensions = () => {
      document.body.style.height = content.scrollHeight + "px";
    };

    wrapper.style.position = "fixed";
    wrapper.style.top = "0";
    wrapper.style.left = "0";
    wrapper.style.width = "100%";
    wrapper.style.overflow = "hidden";
    content.style.willChange = "transform";

    setDimensions();

    const resizeObserver = new ResizeObserver(setDimensions);
    resizeObserver.observe(content);

    const tick = () => {
      const targetY = window.scrollY;
      currentY += (targetY - currentY) * ease;

      if (Math.abs(targetY - currentY) < 0.05) {
        currentY = targetY;
      }

      gsap.set(content, { y: -currentY });
      ScrollTrigger.update();

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value?: number) {
        if (value !== undefined) {
          window.scrollTo(0, value);
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

    const onRefreshInit = () => {
      gsap.set(content, { y: 0 });
    };

    const onRefresh = () => {
      setDimensions();
      gsap.set(content, { y: -currentY });
    };

    ScrollTrigger.addEventListener("refreshInit", onRefreshInit);
    ScrollTrigger.addEventListener("refresh", onRefresh);
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      ScrollTrigger.removeEventListener("refreshInit", onRefreshInit);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      ScrollTrigger.scrollerProxy(document.body);
      document.body.style.height = "";
      wrapper.style.position = "";
      wrapper.style.top = "";
      wrapper.style.left = "";
      wrapper.style.width = "";
      wrapper.style.overflow = "";
      content.style.willChange = "";
      gsap.set(content, { y: 0 });
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default SmoothScrollProvider;