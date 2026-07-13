"use client";

import { useState } from "react";
import Image from "next/image";
import { winners } from "@/data/winners";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

export default function Winners() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = winners[activeIndex];

  return (
    <section
      id="winners"
      className="relative flex h-screen flex-col justify-center overflow-hidden py-10"
    >
      <BackgroundGlow colour="emerald" position="center" />
      <div className="container mx-auto flex h-full flex-col justify-center px-6">
        {/* Heading */}
        <div className="mx-auto flex-shrink-0 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-violet-400">
            Past Winners
          </p>

          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Built Here. Now Making An Impact.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400 lg:text-lg">
            Every year teams build ideas with the potential to improve
            healthcare. Here are just a few examples.
          </p>
        </div>

        {/* Year switcher */}
        <div className="mx-auto mt-8 flex flex-shrink-0 flex-wrap justify-center gap-3">
          {winners.map((winner, index) => (
            <button
              key={winner.year}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full border px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                index === activeIndex
                  ? "border-green-500/50 bg-green-600 text-white shadow-[0_0_25px_rgba(124,92,255,.4)]"
                  : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {winner.year}
            </button>
          ))}
        </div>

        {/* Active winner showcase */}
        <div className="relative mt-8 min-h-0 flex-1">
          <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-violet-600/15 via-transparent to-indigo-500/10 blur-2xl" />

          <div className="glass grid h-full gap-8 overflow-hidden rounded-[40px] border border-white/10 p-6 lg:grid-cols-2 lg:p-8">
            <div className="relative min-h-[180px] overflow-hidden rounded-[28px]">
              <Image
                src={active.image}
                alt={active.project}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <span className="absolute bottom-4 left-4 inline-flex rounded-full bg-violet-600 px-4 py-1.5 text-xs font-semibold shadow-lg">
                {active.year} Champion
              </span>
            </div>

            <div className="flex flex-col justify-center overflow-y-auto">
              <h3 className="text-3xl font-bold lg:text-4xl">
                {active.project}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-400 lg:text-base lg:leading-7">
                {active.description}
              </p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
                  Team Members
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {active.team.map((member) => (
                    <span
                      key={member}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-slate-300 lg:text-sm"
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