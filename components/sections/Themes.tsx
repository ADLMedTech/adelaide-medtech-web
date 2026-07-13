"use client";

import { BrainCircuit, HeartPulse, Leaf, Rocket } from "lucide-react";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

const themes = [
  {
    icon: BrainCircuit,
    title: "AI & Digital Health",
    description: "Harness AI, machine learning and digital tools to improve healthcare delivery and patient outcomes.",
    iconHover: "group-hover:text-white",
    badgeHover: "group-hover:bg-white/15",
    boxHover: "hover:bg-white/[0.04]",
  },
  {
    icon: HeartPulse,
    title: "Accessibility & Equity",
    description: "Design solutions that make healthcare more inclusive, equitable and accessible for every community.",
    iconHover: "group-hover:text-rose-400",
    badgeHover: "group-hover:bg-rose-500/15",
    boxHover: "hover:bg-rose-500/[0.06]",
  },
  {
    icon: Leaf,
    title: "Sustainable Healthcare",
    description: "Reduce waste, improve efficiency and create environmentally sustainable healthcare systems.",
    iconHover: "group-hover:text-emerald-400",
    badgeHover: "group-hover:bg-emerald-500/15",
    boxHover: "hover:bg-emerald-500/[0.06]",
  },
  {
    icon: Rocket,
    title: "Open Innovation",
    description: "Have an incredible healthcare idea that doesn't fit another stream? Build it here.",
    iconHover: "group-hover:text-amber-400",
    badgeHover: "group-hover:bg-amber-500/15",
    boxHover: "hover:bg-amber-500/[0.06]",
  },
];

export default function Themes() {
  return (
    <section
      id="themes"
      /* Removed h-screen and replaced with standard vertical padding */
      className="relative flex w-full flex-col py-16 sm:py-24"
    >
      <BackgroundGlow colour="violet" position="center" />
      
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-violet-400">
            2026 Challenge Themes
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight lg:text-5xl">
            Choose Where You&apos;ll Make an Impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 lg:text-lg">
            Every team will align with one of our themes, tackling real
            healthcare challenges through technology, creativity and
            collaboration.
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto my-12 flex items-center justify-center gap-4 lg:my-16">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500/60" />
          <span className="h-1.5 w-1.5 rotate-45 bg-violet-400" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500/60" />
        </div>

        {/* Theme panel */}
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-violet-600/15 via-transparent to-indigo-500/10 blur-2xl" />

          {/* Added responsive grid logic for a cleaner look */}
          <div className="glass grid grid-cols-1 divide-y divide-white/10 rounded-[32px] border border-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
            {themes.map((theme) => (
              <div
                key={theme.title}
                className={`group flex flex-col items-center px-8 py-10 text-center transition duration-500 ${theme.boxHover}`}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 transition duration-500 group-hover:scale-110 ${theme.badgeHover}`}
                >
                  <theme.icon
                    size={30}
                    className={`text-violet-400 transition duration-500 ${theme.iconHover}`}
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold lg:text-2xl">
                  {theme.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}