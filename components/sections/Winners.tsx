"use client";

import { useState } from "react";
import Image from "next/image";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

const winnersData = [
  {
    year: "2025",
    award: "Champion",
    project: "Medilink",
    description:
      "An AI-powered clinical decision support platform helping healthcare professionals identify high-risk patients earlier.",
    image: "/images/winners/2025-2.webp",
    team: [
      "Vedant Puri",
      "Angelina Rajic",
      "Magdalina Rajic",
      "Kelvin Ang",
      "Arunya Movva",
    ],
  },
  {
    year: "2025",
    award: "Runner-Up",
    project: "Visionary",
    description:
      "Improving healthcare accessibility through an optical device paired with an intuitive digital platform allowing patients to self-monitor their eye health and connect with healthcare professionals remotely.",
    image: "/images/winners/2025-1.webp",
    team: ["Noel Modi", "Adi Polara"],
  },
];

export default function Winners() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = winnersData[activeIndex];

  return (
    <section
      id="winners"
      className="relative flex w-full flex-col justify-center px-6 py-16 sm:py-24 lg:px-12"
    >
      <BackgroundGlow colour="emerald" position="center" />
      
      <div className="container mx-auto flex w-full max-w-7xl flex-col justify-center">
        {/* Heading */}
        <div className="mx-auto max-w-3xl flex-shrink-0 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-emerald-400">
            Past Winners
          </p>

          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Built Here. Now Making An Impact.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400 lg:text-lg">
            Every year teams build ideas with the potential to improve
            healthcare. Here are the top projects from 2025.
          </p>
        </div>

        {/* Switcher */}
        <div className="mx-auto mt-10 flex flex-shrink-0 flex-wrap justify-center gap-4">
          {winnersData.map((winner, index) => (
            <button
              key={winner.award}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full border px-8 py-3 text-sm font-semibold transition-all duration-300 ${
                index === activeIndex
                  ? "border-emerald-500/50 bg-emerald-600 text-white shadow-[0_0_25px_rgba(16,185,129,.4)]"
                  : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {winner.award}
            </button>
          ))}
        </div>

        {/* Active showcase */}
        <div className="relative mt-12 w-full">
          <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-emerald-600/15 via-transparent to-teal-500/10 blur-2xl" />

          <div className="glass grid gap-8 overflow-hidden rounded-[40px] border border-white/10 p-6 lg:grid-cols-2 lg:p-10">
            
            <div className="relative min-h-[300px] w-full overflow-hidden rounded-[28px] lg:min-h-[400px]">
              <Image
                src={active.image}
                alt={active.project}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <span className="absolute bottom-6 left-6 inline-flex rounded-full bg-emerald-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                {active.year} {active.award}
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold lg:text-4xl">
                {active.project}
              </h3>

              <p className="mt-5 text-base leading-relaxed text-slate-400 lg:text-lg">
                {active.description}
              </p>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  Team Members
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {active.team.map((member) => (
                    <span
                      key={member}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}