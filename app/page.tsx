import Hero from "@/components/Hero";
import DitherWithColorPicker from "@/components/DitherWithColorPicker";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContentFadeIn from "@/components/ContentFadeIn";

export default function Home() {
  return (
    <div className="w-full">
      <div className="fixed inset-0 z-0 w-full bg-[#15181e]">
        <DitherWithColorPicker />
      </div>
      <ContentFadeIn delayMs={250}>
        <Nav />
        <div className="relative z-10 w-full flex flex-col">
          <section className="full-screen flex items-center justify-center py-24">
            <Hero />
          </section>
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </div>
      </ContentFadeIn>
    </div>
  );
}
