"use client";

import { useState } from "react";
import Image from "next/image";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

// Data organized by year for easy scaling in the future
const winnersData = {
  "2026": [
    {
      award: "Room 1",
      project: "Project Lisa",
      description:
        "LISA (Localised Information and Support Assistant) is an application that retrieves hospital data for nurses and seamlessly connects them to experienced mentors in their area.",
      image: "/images/winners/group21.webp",
      team: ["Vrutik Ketan Goswami", "Abbie Ward"],
      accent: "emerald",
    },
    {
      award: "Room 2",
      project: "Ergonio",
      description:
        "A specialized ergonomic vest designed to prevent debilitating back pain. Targeted at physiotherapists and healthcare workers, it minimizes occupational health risks and workplace injuries.",
      image: "/images/winners/group38.webp",
      team: ["Shaun Tojo", "Muhammad Baber", "Ryan Kour"],
      accent: "teal",
    },
    {
      award: "Room 3",
      project: "Maternal Minds",
      description:
        "A secure, culturally responsive digital platform dedicated to connecting immigrant mothers with vital mental health support and resources.",
      image: "/images/winners/group31.webp",
      team: [
        "Tvisha Khullar",
        "Rohma Farhan",
        "Hadiya Roshani",
        "Binita Gnawali",
        "Sukhmanjot",
      ],
      accent: "cyan",
    },
    {
      award: "Room 4",
      project: "PulseWindow",
      description:
        "A platform bridging the gap after doctors prescribe medication. It enables at-home monitoring and generates secure clinical reports, reducing workload and empowering doctors to adjust doses with confidence.",
      image: "/images/winners/group8.webp",
      team: [
        "Ramsay Stratford",
        "Siddhant Sharma",
        "Callum Robertson",
        "Salem Jarmakani",
      ],
      accent: "violet",
    },
  ],
  "2025": [
    {
      award: "Winner",
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
      accent: "emerald",
    },
    {
      award: "Runner-Up",
      project: "Visionary",
      description:
        "Improving healthcare accessibility through an optical device paired with an intuitive digital platform allowing patients to self-monitor their eye health and connect with healthcare professionals remotely.",
      image: "/images/winners/2025-1.webp",
      team: ["Noel Modi", "Adi Polara"],
      accent: "teal",
    },
  ],
};

// Helper function to map our accent colors to Tailwind classes
const getAccentColor = (accent: string, isActive: boolean) => {
  if (!isActive)
    return "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/30 hover:text-white";

  switch (accent) {
    case "teal":
      return "border-teal-500/50 bg-teal-600 text-white shadow-[0_0_20px_rgba(20,184,166,.4)]";
    case "cyan":
      return "border-cyan-500/50 bg-cyan-600 text-white shadow-[0_0_20px_rgba(6,182,212,.4)]";
    case "violet":
      return "border-violet-500/50 bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,.4)]";
    case "emerald":
    default:
      return "border-emerald-500/50 bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,.4)]";
  }
};

export default function Winners() {
  const [activeYear, setActiveYear] = useState<keyof typeof winnersData>("2026");
  const [activeIndex, setActiveIndex] = useState(0);

  const currentWinners = winnersData[activeYear];
  const active = currentWinners[activeIndex];

  const handleYearChange = (year: keyof typeof winnersData) => {
    setActiveYear(year);
    setActiveIndex(0); // Reset to the first winner when switching years
  };

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
            Winners
          </p>

          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Built Here. Now Making An Impact.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400 lg:text-lg">
            Every year teams build ideas with the potential to improve
            healthcare. Discover the top projects shaping the future.
          </p>
        </div>

        {/* Year Selector Tabs (Redesigned as primary navigation) */}
        <div className="mx-auto mt-12 flex flex-wrap justify-center gap-4">
          {(Object.keys(winnersData) as Array<keyof typeof winnersData>)
            .sort((a, b) => Number(b) - Number(a)) // Sorts descending (2026, then 2025)
            .map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold transition-all duration-300 ${
                  activeYear === year
                    ? "bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-[0_0_25px_rgba(139,92,246,0.4)] ring-2 ring-violet-400/50 ring-offset-2 ring-offset-[#0f1322]"
                    : "border border-white/10 bg-white/[0.02] text-slate-400 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
        </div>

        {/* Category Selector Pills (Secondary filters) */}
        <div className="mx-auto mt-10 flex flex-shrink-0 flex-wrap justify-center gap-3 sm:gap-4">
          {currentWinners.map((winner, index) => (
            <button
              key={winner.award}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full border px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${getAccentColor(
                winner.accent,
                index === activeIndex
              )}`}
            >
              {winner.award}
            </button>
          ))}
        </div>

        {/* Active Showcase */}
        <div className="relative mt-12 w-full">
          <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-emerald-600/15 via-transparent to-teal-500/10 blur-2xl transition-all duration-700" />

          <div className="glass grid gap-8 overflow-hidden rounded-[40px] border border-white/10 p-6 lg:grid-cols-2 lg:p-10">
            {/* Image Section */}
            <div className="relative min-h-[300px] w-full overflow-hidden rounded-[28px] lg:min-h-[400px]">
              <Image
                key={active.image} // Forces animation re-trigger on change
                src={active.image}
                alt={active.project}
                fill
                className="animate-in fade-in zoom-in-95 object-cover duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <span className="absolute bottom-6 left-6 inline-flex rounded-full bg-emerald-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                {activeYear} {active.award}
              </span>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center animate-in fade-in slide-in-from-right-4 duration-700">
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