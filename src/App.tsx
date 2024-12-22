import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16 md:pt-20">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="about" className="min-h-screen flex items-center">
          <div>About</div>
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
};

export default App;
