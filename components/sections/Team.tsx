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
  { text: string; bg: string; border: string; glow: string }
> = {
  Executive: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", glow: "hover:shadow-purple-500/20" },
  Sponsorship: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", glow: "hover:shadow-amber-500/20" },
  Media: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", glow: "hover:shadow-emerald-500/20" },
  Logistics: { text: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30", glow: "hover:shadow-rose-500/20" },
  Events: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", glow: "hover:shadow-blue-500/20" },
};

export default function Team() {
  const [activeGroup, setActiveGroup] = useState<string>("Executive");
  const activeMembers = team.filter((member) => member.department === activeGroup);
  const activeTheme = themeMap[activeGroup];

  return (
    <section id="team" className="relative flex w-full flex-col items-center py-16 sm:py-24">
      <BackgroundGlow colour="rose" position="center" />
      
      <div className="container mx-auto flex w-full max-w-[85rem] flex-col items-center px-6 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="flex w-full max-w-3xl flex-col items-center justify-center text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-violet-300">
            Meet the DREAM Team
          </p>
          
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            14 students.
            <br />
            One shared mission.
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Adelaide MedTech Hackathon is entirely student-led. Every sponsor, workshop, mentor, and experience is organised by a passionate committee committed to advancing healthcare innovation.
          </p>
        </div>

        {/* Modern Pill Navigation Tabs */}
        <div className="my-12 flex flex-wrap justify-center gap-4 sm:gap-6">
          {groups.map((group) => {
            const isActive = activeGroup === group;
            const theme = themeMap[group];
            
            return (
              <button
                key={group}
                onClick={() => setActiveGroup(group)}
                className={`group relative rounded-full px-6 py-2.5 text-sm font-bold tracking-wide transition-all duration-300 sm:px-8 sm:py-3 sm:text-base ${
                  isActive
                    ? `glass border ${theme.border} ${theme.bg} text-white shadow-lg`
                    // Applied the specific theme text color to the unselected state
                    : `border border-white/10 bg-white/5 ${theme.text} hover:border-white/20 hover:bg-white/10 hover:text-white`
                }`}
              >
                {group}
              </button>
            );
          })}
        </div>

        {/* Team Grid */}
        <div className="w-full">
          <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {activeMembers.map((member) => {
              const isDirector = member.role.toLowerCase().includes("director");

              return (
                <div
                  key={member.name}
                  className={`glass group flex flex-col items-center rounded-3xl border border-white/10 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-xl sm:p-6 ${
                    isDirector ? "bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]" : ""
                  } ${activeTheme.glow}`}
                >
                  {/* Image */}
                  <div className="relative mb-5 w-full overflow-hidden rounded-2xl bg-white/5 aspect-[4/5] shadow-md">
                    {/* Director Badge */}
                    {isDirector && (
                      <div className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur-md">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                          Director
                        </span>
                      </div>
                    )}
                    
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  
                  {/* Name */}
                  <h3 className="mb-2 text-center text-lg font-bold tracking-tight text-white sm:text-xl">
                    {member.name}
                  </h3>
                  
                  {/* Role */}
                  <p className={`text-center text-xs font-semibold uppercase tracking-widest ${activeTheme.text}`}>
                    {member.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}