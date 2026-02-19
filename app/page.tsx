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
import ViewportScroll from "@/components/ViewportScroll";

export default function Home() {
  return (
    <>
      {/* Background: fixed, constrained so canvas cannot overflow */}
      <div
        className="fixed inset-0 z-0 overflow-hidden bg-[#15181e]"
        style={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: "100%",
          height: "100dvh",
          minHeight: "-webkit-fill-available",
        }}
      >
        <DitherWithColorPicker />
      </div>
      {/* Scroll: width locked to visual viewport on mount/resize (fixes iOS crop) */}
      <ViewportScroll>
        <ContentFadeIn delayMs={250}>
          <Nav />
          <div
            className="relative w-full flex flex-col min-w-0 pb-[max(8rem,calc(env(safe-area-inset-bottom)+5rem))]"
          >
            <section className="min-h-[100dvh] flex items-center justify-center">
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
      </ViewportScroll>
    </>
  );
}
