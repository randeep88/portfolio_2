"use client";

import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { icons } from "./svgs";
import { Skills } from "./Skills";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    name: "Kodehole",
    description:
      "Built a developer tool for immutable code versioning where users create 'Orbits' and push permanent snapshots via CLI. Integrated Cloudflare R2 to store the orbits and their snapshots, implemented NextAuth (Auth.js) authentication and RESTful APIs for snapshot retrieval and file tree visualization.",
    image: "/kodehole-light.png",
    code: "https://github.com/randeep88/kodehole",
    live: "https://kodehole.vercel.app/",
    techstack: [
      icons.next,
      icons.typescript,
      icons.cloudflare,
      icons.mongodb,
      icons.authjs,
      icons.tailwind,
    ],
  },
  {
    id: "02",
    name: "Nebula",
    description:
      "Developed a full-stack music streaming application with secure OTP-based authentication, personalized user libraries, advanced playback controls, and optimized search for songs, artists, and albums. Focused on scalable backend design and an intuitive frontend user experience.",
    image: "/nebula.png",
    code: "https://github.com/randeep88/nebula_frontend",
    live: "https://nebula-frontend-one.vercel.app/",
    techstack: [
      icons.react,
      icons.nodejs,
      icons.express,
      icons.mongodb,
      icons.jwt,
      icons.tailwind,
    ],
  },
  {
    id: "03",
    name: "The Verdant Stay",
    description:
      "Built a hotel management system with secure admin authentication, real-time check-in/check-out tracking, and an interactive dashboard displaying bookings, occupancy status, and customer data.Implemented real-time data synchronization and storage.",
    image: "/verdant.png",
    code: "https://github.com/randeep88/verdant-stay",
    live: "https://the-verdant-stay.netlify.app/",
    techstack: [icons.react, icons.js, icons.supabase, icons.tailwind],
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 200, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          skewX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100%",
            end: "top 25%",
            scrub: 1,
          },
        },
      );
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div id="projects" ref={sectionRef} className="select-none mt-10 relative">
      <h1
        ref={headingRef}
        className="text-[11rem] text-center uppercase font-extrabold -mb-40 tracking-tighter text-primary/80 opacity-0"
      >
        Projects
      </h1>
      <ScrollStack itemScale={0} className="w-full">
        {projects?.map((item) => (
          <ScrollStackItem
            key={item.id}
            itemClassName="border-2 border-white/70 h-150 backdrop-blur-xl bg-background p-5"
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <h2 className="font-extrabold text-5xl text-primary/80">
                    {item.id}
                  </h2>
                  <h1 className="font-extrabold text-5xl text-primary">
                    {item.name}
                  </h1>
                </div>
                <div className="flex items-center gap-5">
                  <Link
                    href={item.code}
                    target="_blank"
                    className="flex items-center gap-2 text-xl font-black text-white/70 uppercase hover:scale-110 transition-all duration-300 border-2 border-white/70 rounded-full p-2 px-5"
                  >
                    Code
                  </Link>
                  <Link
                    href={item.live}
                    target="_blank"
                    className="flex items-center gap-2 text-xl font-black text-white/70 uppercase hover:scale-110 transition-all duration-300 border-2 border-white/70 rounded-full p-2 px-5"
                  >
                    Live
                  </Link>
                </div>
              </div>
              <div className="mt-5 flex items-start gap-5 h-full">
                <div className="h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-4xl overflow-hidden w-full h-121 object-cover"
                  />
                </div>
                <div className="flex-1 w-full text-lg h-full flex flex-col items-between">
                  <div className="text-primary h-full">{item.description}</div>
                  <div className="rounded-4xl flex items-center flex-wrap gap-5">
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
      <Skills />
    </div>
  );
};

export default Projects;
