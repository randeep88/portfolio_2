import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <About />
      <Skills />
      <div className="relative z-10 overflow-visible">
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
