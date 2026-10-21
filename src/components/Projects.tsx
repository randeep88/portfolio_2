"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { icons } from "./svgs";
import Stack from "@/components/Stack";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Kodehole",
    description:
      "Built a developer tool for immutable code versioning where users create 'Orbits' and push permanent snapshots via CLI. Integrated Cloudflare R2 to store the orbits and their snapshots, implemented NextAuth (Auth.js) authentication and RESTful APIs for snapshot retrieval and file tree visualization.",
    image: "/kodehole-light.png",
    code: "https://github.com/randeep88/kodehole",
    live: "https://kodehole.vercel.app/",
    techstack: [
      icons.mini_next,
      icons.mini_typescript,
      icons.mini_cloudflare,
      icons.mini_mongodb,
      icons.mini_authjs,
      icons.mini_tailwind,
      icons.mini_zustand,
    ],
  },
  {
    id: "02",
    title: "Nebula",
    description:
      "Developed a full-stack music streaming application with secure OTP-based authentication, personalized user libraries, advanced playback controls, and optimized search for songs, artists, and albums. Focused on scalable backend design and an intuitive frontend user experience.",
    image: "/nebula.png",
    code: "https://github.com/randeep88/nebula_frontend",
    live: "https://nebula-music.netlify.app/",
    techstack: [
      icons.mini_react,
      icons.mini_nodejs,
      icons.mini_express,
      icons.mini_mongodb,
      icons.mini_jwt,
      icons.mini_tailwind,
      icons.mini_zustand,
    ],
  },
  {
    id: "03",
    title: "Keystroq",
    description:
      "Keystroq is a real-time 1v1 typing competition platform built with Next.js and WebSockets, where users compete against each other to test their typing speed and accuracy. It provides live typing sessions with real-time WPM (Words Per Minute) and accuracy tracking, creating an engaging and competitive experience. The platform focuses on low-latency communication, synchronized gameplay, and an interactive user experience, combining real-time web technologies with competitive elements to make typing practice more exciting.",
    image: "/keystroq.png",
    code: "https://github.com/randeep88/keystroq",
    live: "https://keystroq.vercel.app/",
    techstack: [
      icons.mini_next,
      icons.mini_typescript,
      icons.mini_js,
      icons.mini_zustand,
      icons.mini_redis,
      icons.mini_sockets,
      icons.mini_tailwind,
    ],
  },
  {
    id: "04",
    title: "Review AI",
    description:
      "Built an AI-powered code review platform that analyzes user-submitted code and provides structured feedback including bug detection, security analysis, performance improvements, refactored code suggestions, and a quality score. Implemented real-time streaming responses for a seamless user experience along with rate limiting and optimized token control to ensure scalable and cost-efficient AI integration.",
    image: "/review-ai.png",
    code: "https://github.com/randeep88/ai-code-reviewer",
    live: "https://ai-code-reviewer-r.vercel.app",
    techstack: [
      icons.mini_next,
      icons.mini_typescript,
      icons.mini_groq,
      icons.mini_tailwind,
    ],
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headingRef.current, {
        backgroundSize: "100% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 10%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div
      id="projects"
      ref={sectionRef}
      className="select-none mt-60 lg:mt-20 relative"
    >
      <h1
        className="lg:text-[11rem] lg:block hidden text-center lg:-mb-10 -mb-40 text-6xl px-2 uppercase font-extrabold tracking-tighter text-transparent bg-clip-text"
        style={{
          WebkitTextStroke: "1px #e5e7ebcc",
          backgroundImage: "linear-gradient(to right, #e5e7ebcc, #e5e7ebcc)",
          backgroundSize: "0% 100%",
          backgroundRepeat: "no-repeat",
        }}
        ref={headingRef}
      >
        Projects
      </h1>
      <h1 className="lg:text-[11rem] lg:hidden text-center mb-10 text-6xl px-2 uppercase font-extrabold tracking-tighter text-primary/80">
        Projects
      </h1>

      <div className="w-full h-screen lg:mt-40">
        <Stack
          layout="fan"
          sendToBackOnClick={false}
          cards={projects.map((item, i) => (
            <div
              key={item.id}
              className="border-2 border-white/70 lg:h-[70%] h-[80%] backdrop-blur-xl bg-background p-5 lg:w-[80%] w-[95%] mx-auto rounded-2xl"
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center lg:gap-5 gap-2">
                    <h2 className="font-extrabold lg:text-5xl text-2xl text-primary/80">
                      {item.id}
                    </h2>
                    <h1 className="font-extrabold lg:text-5xl text-2xl text-primary">
                      {item.title}
                    </h1>
                  </div>
                  <div className="flex items-center lg:gap-5 gap-2">
                    <Link
                      href={item.code}
                      target="_blank"
                      className="flex items-center gap-2 lg:text-xl text-sm font-black text-white/70 uppercase hover:scale-110 transition-all duration-300 border-2 border-white/70 rounded-full lg:p-2 p-1 lg:px-5 px-3"
                    >
                      Code
                    </Link>
                    <Link
                      href={item.live}
                      target="_blank"
                      className="flex items-center gap-2 lg:text-xl text-sm font-black text-white/70 uppercase hover:scale-110 transition-all duration-300 border-2 border-white/70 rounded-full lg:p-2 p-1 lg:px-5 px-3"
                    >
                      Live
                    </Link>
                  </div>
                </div>
                <div className="mt-5 flex flex-col lg:flex-row items-start gap-5 h-10 flex-1 w-full">
                  <div className="h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="lg:rounded-4xl rounded-xl overflow-hidden w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 w-full h-full flex flex-col items-between">
                    <div className="text-primary h-full lg:text-base text-xs">
                      {item.description}
                    </div>
                    <div className="rounded-4xl flex items-center flex-wrap gap-4 scale-75">
                      {item.techstack.map((Icon: any, idx: number) => (
                        <div key={idx}>
                          <Icon />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          visible={4}
          spread={0.5}
          depth={1}
          radius={16}
          frame={0}
          frameColor="#ffffff"
          shadow
          tilt={21}
          threshold={100}
          speed={0.5}
          autoplay
          autoplayDelay={2000}
          pauseOnHover={true}
        />
      </div>
    </div>
  );
};

export default Projects;
