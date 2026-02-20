"use client";

// Smooth scroll helper using native browser API — no ScrollToPlugin needed
const smoothScrollTo = (targetId: string) => {
  const target = document.getElementById(targetId);
  if (!target) return;

  const targetY = target.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
};

const navLinks = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  return (
    <div className="flex w-full lg:justify-around justify-between py-5 lg:px-10 px-3 items-center text-primary/80 font-bold uppercase lg:text-2xl">
      {navLinks.map(({ label, href }) => (
        <button
          key={href}
          onClick={() => smoothScrollTo(href)}
          className="group relative cursor-pointer tracking-tighter"
        >
          <span className="relative inline-flex overflow-hidden hover:text-primary">
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
  );
};

export default Navbar;
