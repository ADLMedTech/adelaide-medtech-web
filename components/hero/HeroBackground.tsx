"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="absolute -left-[20%] -top-32 h-[400px] w-[400px] rounded-full bg-emerald-500/20 blur-[100px] md:-left-20 md:-top-52 md:h-[700px] md:w-[700px] md:blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute -right-[20%] top-40 h-[300px] w-[300px] rounded-full bg-teal-600/20 blur-[80px] md:-right-20 md:top-60 md:h-[500px] md:w-[500px] md:blur-[120px]"
      />
    </div>
  );
}