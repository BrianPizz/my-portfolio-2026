import Hero from "@/components/Hero";
import Dither from "@/components/Dither";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-full w-full">
      <div className="fixed inset-0 z-0 w-full h-full">
        <Dither />
      </div>
      <Nav />
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        <section className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
