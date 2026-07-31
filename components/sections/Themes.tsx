"use client";

import { Leaf, Stethoscope, Accessibility, Brain } from "lucide-react";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

const themes = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Reduce waste, improve efficiency and create environmentally sustainable healthcare systems.",
    iconHover: "group-hover:text-emerald-400",
    badgeHover: "group-hover:bg-emerald-500/15",
    boxHover: "hover:bg-emerald-500/[0.06]",
  },
  {
    icon: Stethoscope,
    title: "Medical Technology",
    description: "Develop cutting-edge medical devices and digital tools to enhance patient care and clinical outcomes.",
    iconHover: "group-hover:text-blue-400",
    badgeHover: "group-hover:bg-blue-500/15",
    boxHover: "hover:bg-blue-500/[0.06]",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Design solutions that make healthcare more inclusive, equitable and accessible for every community.",
    iconHover: "group-hover:text-amber-400",
    badgeHover: "group-hover:bg-amber-500/15",
    boxHover: "hover:bg-amber-500/[0.06]",
  },
  {
    icon: Brain,
    title: "Mental Health & Lifestyle",
    description: "Create tools and platforms that support psychological well-being and promote healthier lifestyle choices.",
    iconHover: "group-hover:text-rose-400",
    badgeHover: "group-hover:bg-rose-500/15",
    boxHover: "hover:bg-rose-500/[0.06]",
  },
];

export default function Themes() {
  return (
    <section
      id="streams"
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

                {/* Fixed height wrapper for alignment fix */}
                <div className="mt-6 flex min-h-[4rem] items-center justify-center">
                  <h3 className="text-xl font-bold leading-tight lg:text-2xl">
                    {theme.title}
                  </h3>
                </div>

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