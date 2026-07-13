"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import HeroBackground from "./HeroBackground";
import HeroStats from "./HeroStats";
import PhotoCollage from "./PhotoCollage";

const pills = [
  { text: "No Coding Required", style: "border-rose-500/30 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20" },
  { text: "Industry Mentors", style: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20" },
  { text: "High School + Uni", style: "border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20" },
  { text: "Startup Opportunities", style: "border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 15 } },
};

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden pt-32 pb-12">
      
      <HeroBackground />

      <div className="container relative z-10 flex w-full items-center">

        <div className="grid w-full items-center gap-10 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <div className="mb-4 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 backdrop-blur-xl">
              <span className="text-sm font-medium text-violet-300">
                14 – 17 August 2026 • Adelaide, SA
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] lg:text-7xl">
              Innovating the{" "}
              <span className="text-gradient">Future</span>
              <br />
              of Healthcare.
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
              Adelaide MedTech Hackathon brings together students,
              clinicians, engineers, designers and entrepreneurs to solve
              real healthcare challenges through innovation.
            </p>

            {/* Pills with Framer Motion */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="mt-6 inline-grid grid-cols-2 gap-3"
            >
              {pills.map((pill) => (
                <motion.div
                  key={pill.text}
                  variants={pillVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex cursor-default items-center justify-center rounded-full border px-4 py-2 text-center text-sm font-medium backdrop-blur-xl transition-colors duration-300 ${pill.style}`}
                >
                  {pill.text}
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfzuxnYnfdkLhnjFOCKnJlDzZ1v4SgjJFXPof3jKiJ0IE3-Mw/viewform"
                target="_blank"
                className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-7 py-4 text-lg font-semibold transition hover:scale-105 hover:shadow-[0_0_45px_rgba(124,92,255,.45)]"
              >
                Register Now →
              </Link>
              <Link
                href="#about"
                className="glass flex items-center rounded-full px-7 py-4 text-lg font-medium transition hover:bg-white/10"
              >
                Explore ↓
              </Link>
            </div>

            {/* Pulled stats up with negative margin */}
            <div className="-mt-4">
              <HeroStats />
            </div>

          </motion.div>

          {/* RIGHT */}
          <PhotoCollage />

        </div>
      </div>
    </section>
  );
}