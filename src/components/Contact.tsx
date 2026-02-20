"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useForm } from "react-hook-form";

gsap.registerPlugin(ScrollTrigger);

type Contact = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const reactImgRef = useRef<HTMLDivElement>(null);
  const jsImgRef = useRef<HTMLDivElement>(null);

  const [result, setResult] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        reactImgRef.current,
        { x: -400, y: 500, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        jsImgRef.current,
        { x: 400, y: -500, opacity: 0 },
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

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: Contact) => {
    setResult("Sending....");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("access_key", "54dd328d-689a-4e46-b3b0-244f61c2ac86");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();

    if (responseData.success) {
      setResult("Message Sent Successfully 🎉");
      reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      ref={sectionRef}
      id="contact"
      className="h-screen w-full bg-gray-300 rounded-t-[60px] flex items-center select-none relative"
    >
      <div className="uppercase text-black font-extrabold text-9xl tracking-tighter flex flex-col items-center justify-center w-1/2">
        <div>
          <h1
            className="text-9xl uppercase font-extrabold tracking-tighter text-transparent bg-clip-text"
            style={{
              WebkitTextStroke: "1px black",
              backgroundImage: "linear-gradient(to right, black, black)",
              backgroundSize: "0% 100%",
              backgroundRepeat: "no-repeat",
            }}
            ref={headingRef}
          >
            let's
            <br /> get in
            <br /> touch
          </h1>
          <div className="flex items-center justify-start w-full gap-5 mt-5">
            <Link
              target="_blank"
              href="https://www.instagram.com/randeep_ramgarhia88/"
              className="hover:text-pink-600 transition-all duration-300"
            >
              <Instagram size={30} />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/randeep88"
              className="hover:text-black/60 transition-all duration-300"
            >
              <Github size={30} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/randeep-singh88/"
              className="hover:text-blue-600 transition-all duration-300"
            >
              <Linkedin size={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex text-black flex-col space-y-5 items-center justify-center w-150"
        >
          <div className="flex flex-col items-start gap-2 w-full">
            <label htmlFor="name">Full Name</label>
            <div className="w-full">
              <Input
                placeholder="e.g., John Doe"
                className="border-2 border-background/50 w-full placeholder:text-gray-600 text-xl"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <label htmlFor="name">Email Address</label>
            <div className="w-full">
              <Input
                placeholder="johndoe@example.com"
                className="border-2 border-background/50 w-full placeholder:text-gray-600"
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <label htmlFor="name">Message</label>
            <div className="w-full">
              <Textarea
                placeholder="Type your message here..."
                className="border-2 border-background/50 w-full min-h-40 placeholder:text-gray-600"
                {...register("message", {
                  required: "Message is required",
                })}
              />
              {errors.message && (
                <p className="text-red-600 text-sm">{errors.message.message}</p>
              )}
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-black/90"
          >
            Send Message
          </Button>
          {result && (
            <p className="text-center text-sm text-green-600">{result}</p>
          )}
        </form>
      </div>

      <div ref={reactImgRef} className="absolute bottom-50 -left-10 opacity-0">
        <Image src="/mail.png" alt="React Logo" width={250} height={250} />
      </div>
      <div
        ref={jsImgRef}
        className="absolute rotate-30 top-0 right-0 opacity-0"
      >
        <Image
          src="/flash.png"
          alt="Javascript Logo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Contact;
