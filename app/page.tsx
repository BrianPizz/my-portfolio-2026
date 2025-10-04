import Hero from "@/components/Hero";
import Dither from "@/components/Dither"

export default function Home() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <div className="absolute inset-0 z-0 w-full h-full">
        <Dither />
      </div>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Hero />
      </div>
    </div>
  );
}
