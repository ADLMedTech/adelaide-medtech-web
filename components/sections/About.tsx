"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { Lightbulb, Rocket, Users } from "lucide-react";

const stats = [
  { value: "Free", label: "Entry" },
  { value: "15+", label: "Industry Mentors" },
  { value: "$1K+", label: "Prize Pool" },
  { value: "4 Days", label: "In Person" },
];

const cards = [
  {
    icon: Lightbulb,
    title: "100% Free & No Coding Required",
    summary:
      "Open to everyone from Year 10 school students to university students.",
    details:
      "Some of the best ideas come from curious people, not programmers, so we will pair you with mentors and teammates who fill in the gaps.",
    styles: {
      border: "border-l-emerald-400",
      iconBg: "bg-emerald-500/10",
      iconText: "text-emerald-400",
      summaryText: "text-emerald-300/80",
    },
  },
  {
    icon: Rocket,
    title: "The Format",
    summary:
      "Over four in-person days, teams of 4 move from idea generation to pitch.",
    details:
      "Receive continuous mentorship from academics and industry professionals the whole way. You will learn what IP is, how to prototype, develop a startup, and how to pitch.",
    styles: {
      border: "border-l-teal-400",
      iconBg: "bg-teal-500/10",
      iconText: "text-teal-400",
      summaryText: "text-teal-300/80",
    },
  },
  {
    icon: Users,
    title: "Who's Behind It & Our Legacy",
    summary:
      "Organised by a team of 14 students from different backgrounds and backed by ThincLab.",
    details:
      "Running for over 4 years, we have hosted a variety of speakers, including experts in medical technology and veterans of hackathon competitions.",
    styles: {
      border: "border-l-cyan-400",
      iconBg: "bg-cyan-500/10",
      iconText: "text-cyan-400",
      summaryText: "text-cyan-300/80",
    },
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex w-full flex-col justify-center px-6 py-16 sm:py-24 lg:px-12"
    >
      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

      <FadeIn>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-400">
            About the Hackathon
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight lg:text-5xl">
            A 4-Day Hackathon Where Students Build Real Healthcare Solutions.
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-400 lg:text-lg">
            Students from medicine, engineering, business, design and technology
            team up to tackle real healthcare challenges across Sustainability,
            Medical Technology, Accessibility, and Mental Health.
          </p>
        </div>
      </FadeIn>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Left Column (Image + Stats) */}
        <div className="flex h-full flex-col gap-4 lg:col-span-6">
          <div className="relative flex min-h-[300px] flex-1 w-full overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
            <FadeIn>
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src="/images/about/about.webp"
                  alt="Students collaborating"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
                    Adelaide · Late 2025
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <div className="glass grid grid-cols-2 gap-4 rounded-2xl p-5 sm:grid-cols-4 lg:gap-x-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-center text-center"
                >
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

        {/* Right Column (Expandable Cards) */}
        <div className="flex h-full flex-col gap-4 lg:col-span-6">
          {cards.map((card, index) => (
            <div key={card.title} className="flex-1">
              <FadeIn delay={0.1 * (index + 1)}>
                <div
                  className={`group relative flex h-full flex-col justify-center overflow-hidden rounded-[28px] border-l-4 ${card.styles.border} glass p-6 transition-all duration-500 hover:bg-white/[0.04] sm:p-8`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${card.styles.iconBg} ${card.styles.iconText} transition-transform duration-500 group-hover:scale-110`}
                    >
                      <card.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white lg:text-2xl">
                      {card.title}
                    </h3>
                  </div>

                  <p
                    className={`mt-4 text-sm font-medium ${card.styles.summaryText}`}
                  >
                    {card.summary}
                  </p>

                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-in-out group-hover:mt-4 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-slate-300 lg:text-base">
                        {card.details}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}