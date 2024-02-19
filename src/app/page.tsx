"use client";

import React from "react";
// Smooth Scroll
import gsap from "gsap";
import { ReactLenis } from "@studio-freight/react-lenis";
//Animation
import { motion } from "framer-motion";
// Components
import Header from "@/components/Header";
import Three from "@/components/3/Three";
import Introduction from "@/components/sections/Introduction";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
// Loading Screen
import Loading from "./loading";

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

  return (
    <ReactLenis root ref={lenisRef}>
      <main
        className={isLoading ? "relative" : "relative h-screen overflow-hidden"}
      >
        <Three setIsLoading={setIsLoading} />
        {isLoading ? (
          <div>
            <Loading isLoading={isLoading} />
            <Header />
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={
                isLoading ? { y: 0, opacity: 100 } : { y: 10, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.7 }}
              className="min-h-screen flex items-center justify-center"
            >
              <Introduction />
            </motion.div>

            <div className="h-screen py-20 px-40">
              <div className="bg-white h-full rounded-lg" />
            </div>

            <Features />

            <div className="bg-gradient-to-b from-blue-600 to-blue-800 max-w-screen px-4 py-8 lg:py-28 lg:px-6 mt-20 mx-auto">
              <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 text-white">
                <h2 className="mb-4 text-4xl tracking-tight font-bold">
                  The price of Event<span className="text-blue-300">Badge</span>
                </h2>
                <p className="mb-5 font-light text-white sm:text-xl">
                  Here at Flowbite we focus on markets where technology,
                  innovation, and capital can unlock long-term value and drive
                  economic growth.
                </p>
              </div>
              <Pricing />
            </div>
          </div>
        ) : (
          <Loading isLoading={isLoading} />
        )}
      </main>
    </ReactLenis>
  );
}
