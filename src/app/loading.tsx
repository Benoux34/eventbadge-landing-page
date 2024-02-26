"use client";

import React from "react";
// Animation
import { motion } from "framer-motion";

type Props = {
  isLoading: boolean;
};

function Loading({ isLoading }: Props) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 100 }}
      animate={isLoading ? { y: "-120vh", opacity: 0 } : { y: 0, opacity: 100 }}
      transition={{ duration: 1.25, ease: [0.87, 0, 0.13, 1] }}
      className="absolute top-0 bg-white h-screen w-full z-10"
    >
      <div className="h-full flex flex-col items-center justify-center">
        <span className="text-5xl font-semibold">
          Event
          <span className="text-blue-500">Badge</span>
        </span>
      </div>
    </motion.div>
  );
}

export default Loading;
