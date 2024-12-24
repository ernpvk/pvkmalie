import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import TypeWriter from "./components/TypeWriter";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* pt-16 md:pt-20 */}
      <main className="">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>
        <section
          id="typeWrite"
          className="h-60 flex items-center justify-center bg-whitePale text-stone-500"
        >
          <TypeWriter text="Let's introduce pavika..." speed={150} delay={2000} />
        </section>
        <section id="about" className="min-h-screen flex items-center">
          <About />
        </section>

        <section id="projects" className="min-h-screen flex items-center">
          <div>Project</div>
        </section>

        <section id="contact" className="min-h-screen flex items-center">
          <div>Contact </div>
        </section>
      </main>
      <div>Footer</div>
    </div>
  );
}

export default App;
