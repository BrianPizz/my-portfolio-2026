import Hero from "@/components/Hero";
import Dither from "@/components/Dither";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-full w-full">
      <div className="fixed inset-0 z-0 w-full h-full">
        <Dither />
      </div>
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        <section className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>
        <Projects />
      </div>
    </div>
  );
}
