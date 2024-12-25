import Hero from "./Hero";
import TypeWriter from "../components/TypeWriter";
import About from "./About";
import Projects from "./Projects";

function Home() {
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
