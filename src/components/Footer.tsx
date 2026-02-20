"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

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

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/randeep_ramgarhia88/",
  },
  { label: "Github", href: "https://github.com/randeep88" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/randeep-singh88/" },
];

const navLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

const Footer = () => {
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
          end: "top 70%",
          scrub: 1,
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
      id="footer"
      ref={sectionRef}
      className="select-none bg-gray-300 flex items-center justify-center h-80 mb-10"
    >
      <div className="flex items-center justify-between px-20 rounded-t-[60px] w-full h-full bg-background p-10">
        <h1
          className="text-8xl px-1 text-left uppercase font-extrabold tracking-tighter text-transparent bg-clip-text"
          style={{
            WebkitTextStroke: "1px #e5e7ebcc",
            backgroundImage: "linear-gradient(to right, #e5e7ebcc, #e5e7ebcc)",
            backgroundSize: "0% 100%",
            backgroundRepeat: "no-repeat",
          }}
          ref={headingRef}
        >
          Randeep
          <br />
          Singh
        </h1>
        <div className="flex flex-col items-start justify-center gap-5 h-full ">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => smoothScrollTo(href)}
              className="group relative cursor-pointer"
            >
              <span className="relative inline-flex overflow-hidden hover:text-primary text-xl">
                <div className="translate-y-0 skew-y-0 uppercase transition duration-500 group-hover:-translate-y-[120%] group-hover:skew-y-12">
                  {label}
                </div>
                <div className="absolute translate-y-[114%] uppercase skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  {label}
                </div>
              </span>
            </button>
          ))}
        </div>
        <div className="flex flex-col items-start justify-center gap-5 h-full">
          <button className="group relative cursor-pointer">
            <span className="relative inline-flex overflow-hidden hover:text-primary text-xl">
              <div className="translate-y-0 skew-y-0 uppercase transition duration-500 group-hover:-translate-y-[120%] group-hover:skew-y-12">
                Social Links
              </div>
              <div className="absolute translate-y-[114%] uppercase skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                Social Links
              </div>
            </span>
          </button>
          {socialLinks.map(({ label, href }) => (
            <Link
              target="_blank"
              key={href}
              href={href}
              className="group relative cursor-pointer"
            >
              <span className="relative inline-flex overflow-hidden hover:text-primary text-xl">
                <div className="translate-y-0 skew-y-0 uppercase transition duration-500 group-hover:-translate-y-[120%] group-hover:skew-y-12">
                  {label}
                </div>
                <div className="absolute translate-y-[114%] uppercase skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  {label}
                </div>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
