"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const stats = [
  { value: "350+", label: "Participants" },
  { value: "40+", label: "Projects Built" },
  { value: "15+", label: "Industry Mentors" },
  { value: "$5K+", label: "Prize Pool" },
];

export default function About() {
  return (
    <section
      id="about"
      // Removed h-screen and replaced it with standard responsive padding
      className="relative flex w-full flex-col justify-center px-6 py-16 sm:py-24 lg:px-12"
    >
      {/* Heading */}
      <FadeIn>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-violet-400">
            About the Hackathon
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight lg:text-5xl">
            A 4-Day Hackathon Where Students Build Real Healthcare Solutions.
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-400 lg:text-lg">
            Students from medicine, engineering, business, design and
            technology team up to tackle real healthcare challenges across
            Sustainability, Medical Technology, Accessibility, and Mental
            Health.
          </p>
        </div>
      </FadeIn>

      {/* Main content - Changed to a standard responsive grid without forced heights */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        
        {/* Left Column (Image + Stats) */}
        <div className="flex flex-col gap-4 lg:col-span-5">
          <FadeIn>
            {/* Added a fixed height for mobile, keeping it responsive for desktop */}
            <div className="relative h-[300px] w-full overflow-hidden rounded-[28px] border border-white/10 sm:h-[400px] lg:h-[410px]">
              <Image
                src="/images/about/about.jpg"
                alt="Students collaborating"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Stats strip */}
          <FadeIn delay={0.15}>
            {/* Changed to grid-cols-2 on mobile so they don't squish, grid-cols-4 on larger screens */}
            <div className="glass grid grid-cols-2 gap-4 rounded-2xl p-5 sm:grid-cols-4 lg:gap-x-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl font-bold text-white lg:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400 lg:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right Column (Content Cards) */}
        <div className="flex flex-col gap-4 lg:col-span-7">
          <FadeIn delay={0.1}>
            <div className="glass flex h-full items-center gap-5 rounded-2xl border-l-4 border-l-emerald-400 p-6 sm:p-8">
              <span className="text-3xl text-emerald-400">✦</span>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                <span className="font-semibold text-white">
                  No coding experience needed.
                </span>{" "}
                Some of the best ideas come from curious people, not
                programmers — we&apos;ll pair you with mentors and teammates
                who fill in the gaps.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="glass flex h-full flex-col justify-center rounded-2xl p-6 sm:p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
                The Format
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Over four in-person days, teams move from idea generation
                through to a final pitch day and closing ceremony — with
                continuous mentorship from academics and industry
                professionals the whole way.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass flex h-full flex-col justify-center rounded-2xl p-6 sm:p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
                Who&apos;s Behind It
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Backed by ThincLab, the University of Adelaide&apos;s
                business incubator, and medical startup Osteo-X — expanding
                to four streams this year, including two new additions:
                Accessibility and Mental Health.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}