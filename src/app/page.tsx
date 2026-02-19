import About from "../components/About";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
