"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 grid-bg opacity-40" />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="absolute -top-52 left-0 h-[700px] w-[700px] rounded-full bg-violet-700/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute right-0 top-60 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px]"
      />
    </>
  );
}