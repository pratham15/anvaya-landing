import Image from "next/image";
import LandingNavbar from "./_landing/navbar";

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <div className="mt-[20vh] flex w-full justify-center font-manrope font-bold text-blue-800 text-2xl">
        A 1000 stories to be excavated
      </div>
    </>
  );
}
