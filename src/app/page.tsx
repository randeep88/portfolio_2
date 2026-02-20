import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
