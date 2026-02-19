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
    <div ref={containerRef} className="relative h-screen w-full select-none">
      <Navbar />

      <div className="w-full flex justify-center items-center select-none">
        <h1 className="absolute -z-10 top-0 text-[10rem] tracking-tighter text-center uppercase font-extrabold w-full bg-linear-to-b from-white via-white/70 to-white/10 bg-clip-text text-transparent">
          Hey, I'm Randeep
        </h1>

        <div ref={imageRef} className="absolute bottom-4">
          <Image src="/pic2.png" alt="Profile" width={450} height={450} />
        </div>

        <div className="absolute bottom-1/2 left-30 w-80">
          <p className="text-xl font-bold text-white/70 uppercase tracking-tight">
            a full stack developer Crafting Stunning Websites using javascript
            magic
          </p>
        </div>

        <Link
          href="https://drive.google.com/file/d/1pJSjXDzb8P_-luXzm7h78W3b0n1zkM5y/view?usp=sharing"
          target="_blank"
          className="absolute -rotate-10 bottom-1/2 right-40 flex items-center gap-2 text-3xl font-black text-white/70 uppercase hover:scale-110 transition-all duration-300 border-2 border-white/70 rounded-full p-2 px-4"
        >
          Resume <ArrowUpRight color="red" strokeWidth={4} />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
