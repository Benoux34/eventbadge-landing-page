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
  // Smooth scroll
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

  // Loading screen
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(true), 1000);
  }, []);

  if (!isLoading) {
    return (
      <div className="relative h-screen overflow-hidden">
        <div className="absolute top-5 left-5 flex items-center justify-start text-2xl">
          <span>Event</span>
          <span className="font-bold text-blue-500">Badge</span>
        </div>

        <div className="h-full flex items-center justify-center">
          <span className="text-9xl text-blue-500 font-semibold">Welcome</span>
        </div>

        <div className="absolute bottom-5 right-5 font-semibold text-blue-500 text-2xl">
          <span>Loading</span>
        </div>
      </div>
    );
  }

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
