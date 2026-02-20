"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const smoothScrollTo = (targetId: string) => {
  const target = document.getElementById(targetId);
  if (!target) return;

  const targetY = target.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
};

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const reactImgRef = useRef<HTMLDivElement>(null);
  const jsImgRef = useRef<HTMLDivElement>(null);
  const nodeImgRef = useRef<HTMLDivElement>(null);
  const nextImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop
      mm.add("(min-width: 1024px)", () => {
        animateImages(400, 1000);
      });

      // Tablet
      mm.add("(min-width: 640px) and (max-width: 1023px)", () => {
        animateImages(250, 600);
      });

      // Mobile
      mm.add("(max-width: 639px)", () => {
        animateImages(150, 300);
      });

      function animateImages(xOffset: number, yOffset: number) {
        gsap.fromTo(
          reactImgRef.current,
          { x: -xOffset, y: yOffset, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "top 30%",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          jsImgRef.current,
          { x: xOffset, y: yOffset / 2, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "top 10%",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          nodeImgRef.current,
          { x: -xOffset, y: -yOffset / 2, opacity: 0 },

          {
            x: 0,
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "top 10%",
              scrub: 1.2,
            },
          },
        );

        gsap.fromTo(
          nextImgRef.current,
          { x: xOffset, y: yOffset / 2, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "top 5%",
              scrub: 1,
            },
          },
        );
      }

      gsap.to(headingRef.current, {
        backgroundSize: "100% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
      });

      gsap.to(paraRef.current, {
        clipPath: "inset(0 0 0% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 1.2,
        },
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about"
      ref={sectionRef}
      className="relative mt-10 h-screen w-full flex flex-col items-center justify-start select-none overflow-hidden"
    >
      {/* Heading */}
      <div className="flex justify-center items-center">
        <h1
          className="lg:text-[11rem] mb-10 text-6xl px-2 uppercase font-extrabold tracking-tighter text-transparent bg-clip-text"
          style={{
            WebkitTextStroke: "1px #e5e7ebcc",
            backgroundImage: "linear-gradient(to right, #e5e7ebcc, #e5e7ebcc)",
            backgroundSize: "0% 100%",
            backgroundRepeat: "no-repeat",
          }}
          ref={headingRef}
        >
          About Me
        </h1>
      </div>

      {/* Text + Button */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 w-full px-5 lg:px-0 text-center gap-10">
        <p
          ref={paraRef}
          className="lg:text-2xl text-xl font-bold text-white/70 leading-relaxed tracking-wide"
          style={{
            clipPath: "inset(0 0 100% 0)",
          }}
        >
          Just a developer who loves building real things. I mainly work with
          React.js and Next.js, turning ideas into working products. I focus on
          building clean UIs and writing scalable, production-level code —
          constantly learning and improving along the way.
          <br /> Let's build something crazy together!
        </p>

        <div
          onClick={() => smoothScrollTo("contact")}
          ref={btnRef}
          className="lg:text-2xl text-xl cursor-pointer font-black text-white/70 uppercase hover:scale-110 transition-all duration-300 border-2 border-blue-500 rounded-full p-2 px-4"
        >
          <h1 className="tracking-tighter flex items-center gap-2 text-center uppercase font-extrabold w-full bg-linear-to-br from-blue-500 to-pink-500 bg-clip-text text-transparent">
            contact me
          </h1>
        </div>
      </div>

      <div
        ref={reactImgRef}
        className="absolute lg:top-10 lg:left-10 top-0 -left-20 -z-50 lg:z-0 opacity-0 lg:scale-100 scale-40"
      >
        <Image src="/react1.png" alt="React Logo" width={200} height={200} />
      </div>
      <div
        ref={jsImgRef}
        className="absolute lg:top-0 lg:right-0 top-30 -right-25 opacity-0 -z-50 lg:z-0 rotate-10 lg:scale-100 scale-40"
      >
        <Image
          src="/typescript.png"
          alt="typescript Logo"
          width={200}
          height={200}
        />
      </div>
      <div
        ref={nextImgRef}
        className="absolute lg:bottom-20 lg:right-60 bottom-50 -right-10 opacity-0 -z-50 lg:z-0 -rotate-5 overflow-hidden rounded-full w-[200px] h-[200px] lg:scale-100 scale-40"
      >
        <Image
          src="/nextjs1.jpg"
          alt="nextjs Logo"
          width={200}
          height={200}
          className="scale-101"
        />
      </div>
      <div
        ref={nodeImgRef}
        className="absolute lg:bottom-10 lg:-left-15 bottom-80 -left-20 -rotate-10 -z-50 lg:z-0 opacity-0 lg:scale-100 scale-40"
      >
        <Image src="/nodejs.png" alt="nodejs Logo" width={200} height={200} />
      </div>
    </div>
  );
};

export default About;
