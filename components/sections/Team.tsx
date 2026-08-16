"use client";

import { useState } from "react";
import Image from "next/image";
import { team } from "@/data/team";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

const groups = [
  "Executive",
  "Sponsorship",
  "Media",
  "Logistics",
  "Events",
];

const themeMap: Record<
  string,
  {
    text: string;
    bg: string;
    border: string;
    glow: string;
  }
> = {
  Executive: {
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    glow: "hover:shadow-purple-500/20",
  },
  Sponsorship: {
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    glow: "hover:shadow-amber-500/20",
  },
  Media: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    glow: "hover:shadow-emerald-500/20",
  },
  Logistics: {
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    glow: "hover:shadow-rose-500/20",
  },
  Events: {
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    glow: "hover:shadow-blue-500/20",
  },
};

export default function Team() {
  const [activeGroup, setActiveGroup] = useState("Executive");

  const activeMembers = team.filter(
    (member) => member.department === activeGroup,
  );

  const activeTheme = themeMap[activeGroup];

  return (
    <section
      id="team"
      className="relative isolate flex w-full max-w-full flex-col items-center overflow-x-clip py-16 sm:py-24 [contain:layout_paint]"
    >
      <BackgroundGlow colour="rose" position="center" />

      <div className="relative z-10 mx-auto flex w-full max-w-[85rem] flex-col items-center px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <div className="flex w-full max-w-3xl flex-col items-center justify-center text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-300 sm:mb-4 sm:text-sm sm:tracking-[0.35em]">
            Meet the Dream Team
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            14 students.
            <br />
            One shared mission.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:mt-8 sm:text-lg sm:leading-relaxed lg:text-xl">
            Adelaide MedTech Hackathon is entirely student-led. Every sponsor,
            workshop, mentor and experience is organised by a passionate
            committee committed to advancing healthcare innovation.
          </p>
        </div>

        {/* Department tabs */}
        <div className="my-8 w-full sm:my-12">
          <div
            role="tablist"
            aria-label="Team departments"
            className="mx-auto flex w-full max-w-full gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:justify-center sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {groups.map((group) => {
              const isActive = activeGroup === group;
              const theme = themeMap[group];

              return (
                <button
                  key={group}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveGroup(group)}
                  className={`relative shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold tracking-wide transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-sm lg:px-8 lg:py-3 lg:text-base ${
                    isActive
                      ? `${theme.border} ${theme.bg} text-white shadow-lg`
                      : `border-white/10 bg-white/5 ${theme.text} hover:border-white/20 hover:bg-white/10 hover:text-white`
                  }`}
                >
                  {group}
                </button>
              );
            })}
          </div>
        </div>

        {/* Team grid */}
        <div className="w-full">
          <div className="grid w-full grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {activeMembers.map((member) => {
              const isDirector = member.role
                .toLowerCase()
                .includes("director");

              return (
                <article
                  key={member.name}
                  className={`glass group flex min-w-0 flex-col items-center rounded-[18px] border border-white/10 p-2.5 transition-all duration-500 sm:rounded-3xl sm:p-5 lg:p-6 lg:hover:-translate-y-2 lg:hover:border-white/20 lg:hover:shadow-xl ${
                    isDirector
                      ? "bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                      : ""
                  } ${activeTheme.glow}`}
                >
                  {/* Member image */}
                  <div className="relative mb-3 aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-white/5 shadow-md sm:mb-5 sm:rounded-2xl">
                    {/* Director badge */}
                    {isDirector && (
                      <div className="absolute right-1.5 top-1.5 z-10 rounded-full border border-white/20 bg-black/50 px-2 py-1 backdrop-blur-md sm:right-3 sm:top-3 sm:px-3">
                        <span className="text-[7px] font-bold uppercase tracking-[0.12em] text-white sm:text-[10px] sm:tracking-widest">
                          Director
                        </span>
                      </div>
                    )}

                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 639px) 45vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                      loading="lazy"
                      decoding="async"
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent sm:from-black/50 sm:opacity-0 sm:transition-opacity sm:duration-500 sm:group-hover:opacity-100" />
                  </div>

                  {/* Name */}
                  <h3 className="line-clamp-2 min-h-[2.5rem] text-center text-sm font-bold leading-5 tracking-tight text-white sm:mb-2 sm:min-h-0 sm:text-lg lg:text-xl">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p
                    className={`mt-1 line-clamp-2 min-h-[2rem] text-center text-[8px] font-semibold uppercase leading-4 tracking-[0.12em] sm:mt-0 sm:min-h-0 sm:text-xs sm:tracking-widest ${activeTheme.text}`}
                  >
                    {member.role}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}