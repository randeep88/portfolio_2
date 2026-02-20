"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { icons } from "./svgs";

gsap.registerPlugin(ScrollTrigger);

const skills = {
  frontend: [
    { name: "HTML", icon: icons.mini_html },
    { name: "CSS", icon: icons.mini_css },
    { name: "Javascript", icon: icons.mini_js },
    { name: "TypeScript", icon: icons.mini_typescript },
    { name: "React.js", icon: icons.mini_react },
    { name: "Next.js", icon: icons.mini_next },
    { name: "Redux", icon: icons.mini_redux },
    { name: "Zustand", icon: icons.mini_zustand },
    { name: "React Query", icon: icons.mini_reactQuery },
    { name: "Material UI", icon: icons.mini_material },
    { name: "Shadcn UI", icon: icons.mini_shadcn },
    { name: "Tailwind CSS", icon: icons.mini_tailwind },
  ],

  backend: [
    { name: "Node.js", icon: icons.mini_nodejs },
    { name: "Express.js", icon: icons.mini_express },
    { name: "Socket.io", icon: icons.mini_socket },
    { name: "Auth.js", icon: icons.mini_authjs },
    { name: "JWT", icon: icons.mini_jwt },
  ],
  databases: [
    { name: "MongoDB", icon: icons.mini_mongodb },
    { name: "MySQL", icon: icons.mini_mysql },
    { name: "Supabase", icon: icons.mini_supabase },
    { name: "Firebase", icon: icons.mini_firebase },
  ],

  cloud: [
    { name: "Docker", icon: icons.mini_docker },
    { name: "GitHub Actions", icon: icons.mini_actions },
    { name: "Google Cloud", icon: icons.mini_gcloud },
    { name: "Cloudflare", icon: icons.mini_cloudflare },
  ],

  tools: [
    { name: "Git", icon: icons.mini_git },
    { name: "GitHub", icon: icons.mini_github },
    { name: "Postman", icon: icons.mini_postman },
    { name: "Hoppscotch", icon: icons.mini_hop },
    { name: "VS Code", icon: icons.mini_vs },
    { name: "Cursor", icon: icons.mini_cursor },
    { name: "Windsurf", icon: icons.mini_windsurf },
  ],
};

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading gradient reveal
      gsap.to(headingRef.current, {
        backgroundSize: "100% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
        },
      });

      // Timeline for columns (Frontend → Backend → Cloud → Databases → Tools)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(columnsRef.current, {
        x: -60,
        y: 30,
        opacity: 0,
        scale: 0.95,
        filter: "blur(6px)",
        stagger: 0.2,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "top 0%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div
      id="skills"
      ref={sectionRef}
      className="relative mt-10 h-screen w-full flex flex-col items-center justify-start select-none overflow-hidden"
    >
      {/* Heading */}
      <div className="flex justify-center gap-2 items-end">
        <h1
          className="text-[11rem] px-2 uppercase font-extrabold tracking-tighter text-transparent bg-clip-text"
          style={{
            WebkitTextStroke: "1px #e5e7ebcc",
            backgroundImage: "linear-gradient(to right, #e5e7ebcc, #e5e7ebcc)",
            backgroundSize: "0% 100%",
            backgroundRepeat: "no-repeat",
          }}
          ref={headingRef}
        >
          Skills
        </h1>
        <h1 className="text-xl px-2 pb-13 uppercase font-extrabold tracking-tighter text-primary/80">
          & Tools
        </h1>
      </div>

      {/* Skills */}
      <div
        ref={skillsRef}
        className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] px-10"
      >
        <div ref={(el: any) => el && (columnsRef.current[0] = el)}>
          <h1 className="text-xl px-2 mb-4 text-center uppercase font-semibold tracking-tighter text-primary/90">
            Frontend
          </h1>
          <div className="grid grid-cols-2 items-center gap-2">
            {skills?.frontend?.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 border border-primary/20 rounded-lg p-1 px-2"
              >
                <div className="scale-75">
                  <skill.icon />
                </div>
                <h1 className="text-lg text-primary/90">{skill.name}</h1>
              </div>
            ))}
          </div>
        </div>

        <div ref={(el: any) => el && (columnsRef.current[1] = el)}>
          <h1 className="text-xl px-2 mb-4 text-center uppercase font-semibold tracking-tighter text-primary/90">
            backend
          </h1>
          <div className="flex flex-col items-center gap-2">
            {skills?.backend?.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 border border-primary/20 rounded-lg p-1 px-2"
              >
                <div className="scale-75">
                  <skill.icon />
                </div>
                <h1 className="text-lg text-primary/90">{skill.name}</h1>
              </div>
            ))}
          </div>
        </div>

        <div ref={(el: any) => el && (columnsRef.current[2] = el)}>
          <h1 className="text-xl px-2 mb-4 text-center uppercase font-semibold tracking-tighter text-primary/90">
            cloud / DevOps
          </h1>
          <div className="flex flex-col items-center gap-2">
            {skills?.cloud?.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 border border-primary/20 rounded-lg p-1 px-2"
              >
                <div className="scale-75">
                  <skill.icon />
                </div>
                <h1 className="text-lg text-primary/90">{skill.name}</h1>
              </div>
            ))}
          </div>
        </div>

        <div ref={(el: any) => el && (columnsRef.current[3] = el)}>
          <h1 className="text-xl px-2 mb-4 text-center uppercase font-semibold tracking-tighter text-primary/90">
            databases
          </h1>
          <div className="flex flex-col items-center gap-2">
            {skills?.databases?.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 border border-primary/20 rounded-lg p-1 px-2"
              >
                <div className="scale-75">
                  <skill.icon />
                </div>
                <h1 className="text-lg text-primary/90">{skill.name}</h1>
              </div>
            ))}
          </div>
        </div>

        <div ref={(el: any) => el && (columnsRef.current[4] = el)}>
          <h1 className="text-xl px-2 mb-4 text-center uppercase font-semibold tracking-tighter text-primary/90">
            tools
          </h1>
          <div className="flex flex-col items-center gap-2">
            {skills?.tools?.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 border border-primary/20 rounded-lg p-1 px-2"
              >
                <div className="scale-75">
                  <skill.icon />
                </div>
                <h1 className="text-lg text-primary/90">{skill.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
