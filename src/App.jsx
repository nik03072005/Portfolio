import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { TechnicalDeepDive } from "@/sections/TechnicalDeepDive";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <main className="px-4 sm:px-6 lg:px-24">
        <Projects />
        <Skills />
        <Experience />
        <TechnicalDeepDive />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
