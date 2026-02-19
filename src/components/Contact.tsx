import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-screen w-full bg-gray-300 rounded-t-[60px] flex items-center select-none"
    >
      <div className="uppercase text-black font-extrabold text-9xl tracking-tighter flex flex-col items-center justify-center  w-1/2">
        <div>
          <h1>
            let's get <br /> in touch
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
      <form className="text-black flex flex-col space-y-9 items-center justify-center w-1/2">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="name">Full Name</label>
          <Input
            placeholder="e.g., John Doe"
            className="border-2 border-background/50 w-100 placeholder:text-gray-600 text-xl rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="name">Email Address</label>
          <Input
            placeholder="johndoe@example.com"
            className="border-2 border-background/50 w-100 placeholder:text-gray-600 rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="name">Message</label>
          <Textarea
            placeholder="Type your message here..."
            className="border-2 border-background/50 w-100 min-h-40 placeholder:text-gray-600 rounded-xl"
          />
        </div>
        <Button
          type="submit"
          className="w-1/2 bg-black text-white hover:bg-black/90 rounded-xl"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
