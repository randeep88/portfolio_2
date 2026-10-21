import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import { ScrollingLogos } from "../components/ScrollingLogos";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <ScrollingLogos />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
