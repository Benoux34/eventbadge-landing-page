"use client";

import React from "react";
// Smooth Scroll
import gsap from "gsap";
import { ReactLenis } from "@studio-freight/react-lenis";
// Components
import Three from "@/components/3/Three";
import Header from "@/components/Header";
import Introduction from "@/components/sections/Introduction";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  const lenisRef = React.useRef<typeof ReactLenis>(null);

  React.useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis root ref={lenisRef}>
      <main className="relative">
        <Three />
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <Introduction />
        </div>
        <div className="h-screen py-20 px-40">
          <div className="bg-white h-full rounded-lg" />
        </div>

        <Features />

        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 my-20">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-bold">
              The price of Event<span className="text-blue-500">Badge</span>
            </h2>
            <p className="mb-5 font-light text-gray-800 sm:text-xl">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <Pricing />
        </div>
      </main>
    </ReactLenis>
  );
}
