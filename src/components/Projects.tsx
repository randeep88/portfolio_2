"use client";

import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { icons } from "./svgs";
import { ScrollingLogos } from "./ScrollingLogos";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

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
    live: "https://nebula-frontend-one.vercel.app/",
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
    title: "The Verdant Stay",
    description:
      "Built a hotel management system with secure admin authentication, real-time check-in/check-out tracking, and an interactive dashboard displaying bookings, occupancy status, and customer data.Implemented real-time data synchronization and storage.",
    image: "/verdant.png",
    code: "https://github.com/randeep88/verdant-stay",
    live: "https://the-verdant-stay.netlify.app/",
    techstack: [
      icons.mini_react,
      icons.mini_js,
      icons.mini_supabase,
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

      <ScrollStack itemScale={0} className="w-full lg:block hidden">
        {projects?.map((item) => (
          <ScrollStackItem
            key={item.id}
            itemClassName="border-2 border-white/70 h-150 backdrop-blur-xl bg-background p-5 w-full"
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
              <div className="mt-5 flex flex-col lg:flex-row items-start gap-5 h-full w-full">
                <div className="h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="lg:rounded-4xl rounded-xl overflow-hidden w-full lg:h-121 h-30 object-cover"
                  />
                </div>
                <div className="flex-1 w-full text-lg h-full flex flex-col items-between">
                  <div className="text-primary h-full">{item.description}</div>
                  <div className="rounded-4xl flex items-center flex-wrap gap-4">
                    {item.techstack.map((Icon: any, idx: number) => (
                      <div key={idx}>
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>

      {/* mobile */}
      <div className="lg:hidden px-2 flex flex-col items-start justify-center gap-5">
        {projects?.map((item) => (
          <div
            key={item.id}
            className="border-2 border-white/70 backdrop-blur-xl bg-background rounded-3xl p-5 w-full"
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="font-extrabold text-xl text-primary/80">
                    {item.id}
                  </h2>
                  <h1 className="font-extrabold text-xl text-primary">
                    {item.title}
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={item.code}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-black text-white/70 uppercase hover:scale-110 transition-all duration-300 border-2 border-white/70 rounded-full p-1 px-3"
                  >
                    Code
                  </Link>
                  <Link
                    href={item.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-black text-white/70 uppercase hover:scale-110 transition-all duration-300 border-2 border-white/70 rounded-full p-1 px-3"
                  >
                    Live
                  </Link>
                </div>
              </div>
              <div className="mt-5 flex flex-col lg:flex-row items-start gap-5 h- w-full">
                <div className="h-40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl overflow-hidden w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 w-full lg:text-lg h-full flex flex-col gap-5 items-between">
                  <div className="text-primary text-pretty h-full">
                    {item.description}
                  </div>
                  <div className="rounded-4xl flex items-center flex-wrap gap-4">
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
      </div>
      <ScrollingLogos />
    </div>
  );
};

export default Projects;
