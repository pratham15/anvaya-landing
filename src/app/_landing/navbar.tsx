"use client";

import { useEffect, useState } from "react";

const LandingNavbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollY);
  return (
    <nav
      style={{
        boxShadow:
          scrollY === 0 ? "" : "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
      }}
      className={`${
        scrollY !== 0 ? "bg-white/[0.5] backdrop-blur-sm" : ""
      } fixed font-manrope h-[60px] font-semibold inset-x-0 top-0 z-50 mx-auto mt-4 flex w-[95%] max-w-[85rem] items-center justify-between rounded-2xl px-4 py-2 antialiased md:w-full md:px-10`}
    >
      <p className="font-bold text-slate-900 italic text-lg">Anvaya</p>
      <ul className="flex gap-2">
        <li>Home</li>
        <li>Maps</li>
      </ul>
      <p className="text-white bg-black rounded-lg p-2 px-4 cursor-pointer">
        Sign Up
      </p>
    </nav>
  );
};

export default LandingNavbar;
