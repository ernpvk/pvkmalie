import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import TypeWriter from "../components/TypeWriter";
import About from "./About";
import Projects from "./Projects";

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Handle direct navigation to sections (e.g., /#about)
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Scroll to top when navigating to home without hash
      window.scrollTo(0, 0);
    }
  }, [location]);
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

      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen flex items-center"></section>
    </>
  );
}

export default Home;
