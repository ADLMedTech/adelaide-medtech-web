"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const stats = [
  { value: "Free", label: "Entry" },
  { value: "15+", label: "Industry Mentors" },
  { value: "$1K+", label: "Prize Pool" },
  { value: "Startup", label: "Mentorship" },
];

export default function About() {
  return (
    <section
      id="about"
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

      {/* Main content */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        
        {/* Left Column (Image + Stats) */}
        <div className="flex h-full flex-col gap-4 lg:col-span-5">
          
          {/* 
            Fixed: Removed className from FadeIn and added an absolute wrapper. 
            The outer container provides the relative positioning and flex-1 height.
          */}
          <div className="relative flex w-full flex-1 min-h-[300px] overflow-hidden rounded-[28px] border border-white/10">
            <FadeIn>
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/about/about.jpg"
                  alt="Students collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Stats strip */}
          <FadeIn delay={0.15}>
            <div className="glass grid grid-cols-2 gap-4 rounded-2xl p-5 sm:grid-cols-4 lg:gap-x-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col justify-center text-center">
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
        <div className="flex h-full flex-col gap-4 lg:col-span-7">
          
          {/* Card 1 */}
          <FadeIn delay={0.1}>
            <div className="glass flex h-full items-center gap-5 rounded-2xl border-l-4 border-l-emerald-400 p-6 sm:p-8">
              <span className="text-3xl text-emerald-400">✦</span>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                <span className="font-semibold text-white">
                  100% Free & No Coding Required.
                </span>{" "}
                Open to everyone from Year 10 school students to university
                students. Some of the best ideas come from curious people, not
                programmers, so we will pair you with mentors and teammates
                who fill in the gaps.
              </p>
            </div>
          </FadeIn>

          {/* Card 2 - The Format */}
          <FadeIn delay={0.2}>
            <div className="glass flex h-full flex-col justify-center rounded-2xl p-6 sm:p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
                The Format
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Over four in-person days, teams of 4 move from idea generation
                through to a final pitch day and closing ceremony, with
                continuous mentorship from academics and industry professionals
                the whole way. You will learn what IP is, how to prototype,
                develop a startup, and how to pitch.
              </p>
            </div>
          </FadeIn>

          {/* Card 3 - Legacy & Team */}
          <FadeIn delay={0.3}>
            <div className="glass flex h-full flex-col justify-center rounded-2xl p-6 sm:p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
                Who&apos;s Behind It & Our Legacy
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Organised by a team of 14 students from different backgrounds
                and backed by ThincLab. We have hosted a variety of speakers,
                including experts in medical technology and veterans of
                hackathon competitions.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}