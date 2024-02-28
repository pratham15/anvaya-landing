import Image from "next/image";
import LandingNavbar from "./_landing/navbar";
import BackgroundLandingVideo from "./_landing/bg-video";

export default function Home() {
  return (
    <>
      <BackgroundLandingVideo />
      <LandingNavbar />
      <div className="mt-[20vh] flex w-full justify-center font-manrope font-bold text-blue-800 text-2xl z-100">
        A 1000 stories to be excavated
      </div>
    </>
  );
}
