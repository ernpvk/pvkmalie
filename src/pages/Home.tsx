import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import Hero from "./Hero";
import TypeWriter from "../components/TypeWriter";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Handle direct navigation to sections (e.g., /#about)
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
    const handleScroll = () => {
      const showButton = window.scrollY > 500;
      setShowScrollTop(showButton);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section id="hero" className="min-h-screen flex items-center">
        <Hero />
      </section>

      <section
        id="typeWrite"
        className="h-96 flex items-center justify-center bg-whitePale text-stone-500"
      >
        <TypeWriter text="Let's meet pavika..." speed={150} delay={2000} />
      </section>

      <section id="about" className="min-h-screen flex items-center">
        <About />
      </section>

      <section id="projects" className="min-h-screen mb-44">
        <Projects />
      </section>

      <section id="contact" className="">
        <Contact />
      </section>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-secondary-neon/80 p-3 rounded-full shadow-lg hover:bg-secondary-neon transition-all duration-300 transform hover:-translate-y-1 ${
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </>
  );
}

export default Home;
