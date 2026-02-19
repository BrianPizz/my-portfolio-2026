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
    <div className="min-full-viewport-height w-full">
      <div className="full-viewport-height fixed inset-0 z-0 w-full bg-[#15181e]">
        <DitherWithColorPicker />
      </div>
      <ContentFadeIn delayMs={250}>
        <Nav />
        <div className="relative z-10 w-full min-full-viewport-height flex flex-col">
          <section className="min-full-viewport-height flex items-center justify-center">
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
