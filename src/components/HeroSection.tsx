"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      const mouseX = (clientX - centerX) / centerX;
      const mouseY = (clientY - centerY) / centerY;

      gsap.to(imageRef.current, {
        x: mouseX * 20,
        y: mouseY * 20,
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imageRef.current, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="home"
      ref={containerRef}
      className="relative h-screen w-full select-none"
    >
      <Navbar />

      <div className="w-full flex lg:flex-row flex-col justify-center items-center select-none px-5">
        <div className="flex relative items-center justify-end w-full lg:hidden">
          <Link
            href="https://drive.google.com/file/d/1pJSjXDzb8P_-luXzm7h78W3b0n1zkM5y/view?usp=sharing"
            target="_blank"
            className="absolute -left-10 top-1/2 -rotate-90 flex items-center gap-2 lg:text-3xl font-black text-white/70 uppercase hover:scale-110 transition-all duration-300 border-2 border-white/70 rounded-full lg:p-2 lg:px-4 p-1 px-2"
          >
            Resume
            <ArrowUpRight
              color="orange"
              className="rotate-90"
              strokeWidth={4}
            />
          </Link>
          <div>
            <Image src="/pic2.png" alt="Profile" width={250} height={250} />
          </div>
        </div>
        <h1 className="lg:absolute mt-5 lg:mt-0 -z-10 lg:top-10 lg:text-[10rem] text-7xl tracking-tighter lg:text-center text-left uppercase font-extrabold w-full bg-linear-to-b lg:from-white from-white/80 via-white/70 lg:to-white/10 to-white/80 bg-clip-text text-transparent">
          Hey, I'm Randeep
        </h1>

        <div ref={imageRef} className="absolute bottom-4 hidden lg:block">
          <Image src="/pic2.png" alt="Profile" width={450} height={450} />
        </div>

        <div className="lg:absolute lg:bottom-1/2 lg:left-30 w-80 m-0 mt-3">
          <p className="lg:text-xl text-lg font-bold text-white/70 uppercase lg:tracking-tight">
            a full stack developer Crafting Stunning Websites using javascript
            magic
          </p>
        </div>

        <Link
          href="https://drive.google.com/file/d/1pJSjXDzb8P_-luXzm7h78W3b0n1zkM5y/view?usp=sharing"
          target="_blank"
          className="lg:absolute hidden lg:-rotate-10 lg:bottom-1/2 lg:right-40 lg:flex items-center gap-2 lg:text-3xl font-black text-white/70 uppercase hover:scale-110 transition-all duration-300 border-2 border-white/70 rounded-full lg:p-2 lg:px-4 p-1 px-2"
        >
          Resume <ArrowUpRight color="red" strokeWidth={4} />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
