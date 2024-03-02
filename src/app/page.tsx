import Image from "next/image";
import LandingNavbar from "./_landing/navbar";
import BackgroundLandingVideo from "./_landing/bg-video";
import Newsletter from "./_landing/newletter";
import { StickyScroll } from "./_landing/sticky-scroll";
import { ScrollContent } from "./_landing/scroll-content";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LandingMap from "./_landing/map";

export default function Home() {
  return (
    <main>
      <section className="h-[100vh] flex items-center flex-col">
        <BackgroundLandingVideo />
        <LandingNavbar />
        <div className="z-[100]  mt-[30vh] rounded-full px-3 py-1 backdrop-blur-lg text-sm  text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <span className="text-blue-400 flex items-center">
            Watch our old demo
            <ArrowRight className="ml-1" />
          </span>
        </div>
        <h1 className="text-4xl z-[100] font-bold tracking-tight text-white sm:text-6xl text-center font-manrope mt-4">
          The best way to discover India
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-200 z-[100] font-poppins">
          Discover, explore and keep track of monuments across India
        </p>
        <div className="flex items-center justify-center gap-4 z-[100]  mt-4">
          <Button>Maps</Button>
          <Button variant="outline">Contribute</Button>
        </div>
      </section>
      <section className="">
        <StickyScroll content={ScrollContent} />
      </section>
      <LandingMap />
      <Newsletter />
    </main>
  );
}
