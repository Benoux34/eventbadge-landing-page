"use client";

import React from "react";
// Smooth Scroll
import gsap from "gsap";
import { ReactLenis } from "@studio-freight/react-lenis";
// Components
import Three from "@/components/3/Three";
import Header from "@/components/Header";
import Introduction from "@/components/sections/Introduction";

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
      </main>
    </ReactLenis>
  );
}
