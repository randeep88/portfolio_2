"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      // ─── React Logo — left se scrub ke saath slide in ───
      gsap.fromTo(
        reactImgRef.current,
        { x: -400, y: 1000, opacity: 0 },
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
        { x: 400, y: 500, opacity: 0 },
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
          delay: 2,
        },
      );
      gsap.fromTo(
        nodeImgRef.current,
        { x: -400, y: -400, opacity: 0 },

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
        { x: 400, y: -400, opacity: 0 },
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
          className="text-[11rem] px-2 uppercase font-extrabold tracking-tighter text-transparent bg-clip-text"
          style={{
            WebkitTextStroke: "1px #e5e7ebcc", // sirf border/stroke shuru mein
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
      <div className="flex flex-col justify-center items-center w-1/2 text-center gap-10">
        <p
          ref={paraRef}
          className="text-2xl font-bold text-white/70 leading-relaxed tracking-wide"
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
          ref={btnRef}
          className="text-2xl cursor-pointer font-black text-white/70 uppercase hover:scale-110 transition-all duration-300 border-2 border-blue-500 rounded-full p-2 px-4"
        >
          <h1 className="tracking-tighter flex items-center gap-2 text-center uppercase font-extrabold w-full bg-linear-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            contact me
          </h1>
        </div>
      </div>

      <div ref={reactImgRef} className="absolute top-10 left-10 opacity-0">
        <Image src="/react1.png" alt="React Logo" width={200} height={200} />
      </div>
      <div
        ref={jsImgRef}
        className="absolute top-0 right-0 opacity-0 rotate-10"
      >
        <Image
          src="/typescript.png"
          alt="Javascript Logo"
          width={200}
          height={200}
        />
      </div>
      <div
        ref={nextImgRef}
        className="absolute bottom-7 right-50 opacity-0 -rotate-5 overflow-hidden rounded-full w-[200px] h-[200px]"
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
        className="absolute bottom-10 -left-10 -rotate-10 opacity-0"
      >
        <Image src="/nodejs.png" alt="nodejs Logo" width={200} height={200} />
      </div>
    </div>
  );
};

export default About;
