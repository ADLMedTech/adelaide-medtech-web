"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "@/data/faq";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

const colorThemes = [
  {
    activeBorder: "border-violet-500/50",
    activeBg: "from-violet-500/10",
    activeShadow: "shadow-[0_4px_30px_rgba(139,92,246,0.1)]",
    activeText: "text-violet-300",
    iconBgActive: "bg-violet-500/20",
    iconTextActive: "text-violet-400",
    hoverBorder: "hover:border-violet-500/30",
  },
  {
    activeBorder: "border-emerald-500/50",
    activeBg: "from-emerald-500/10",
    activeShadow: "shadow-[0_4px_30px_rgba(16,185,129,0.1)]",
    activeText: "text-emerald-300",
    iconBgActive: "bg-emerald-500/20",
    iconTextActive: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/30",
  },
  {
    activeBorder: "border-blue-500/50",
    activeBg: "from-blue-500/10",
    activeShadow: "shadow-[0_4px_30px_rgba(59,130,246,0.1)]",
    activeText: "text-blue-300",
    iconBgActive: "bg-blue-500/20",
    iconTextActive: "text-blue-400",
    hoverBorder: "hover:border-blue-500/30",
  },
  {
    activeBorder: "border-rose-500/50",
    activeBg: "from-rose-500/10",
    activeShadow: "shadow-[0_4px_30px_rgba(244,63,94,0.1)]",
    activeText: "text-rose-300",
    iconBgActive: "bg-rose-500/20",
    iconTextActive: "text-rose-400",
    hoverBorder: "hover:border-rose-500/30",
  },
  {
    activeBorder: "border-amber-500/50",
    activeBg: "from-amber-500/10",
    activeShadow: "shadow-[0_4px_30px_rgba(245,158,11,0.1)]",
    activeText: "text-amber-300",
    iconBgActive: "bg-amber-500/20",
    iconTextActive: "text-amber-400",
    hoverBorder: "hover:border-amber-500/30",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-16 sm:py-24">
      <BackgroundGlow colour="blue" position="center" />
      <div className="container mx-auto max-w-5xl px-6">
        
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-violet-400">
            FAQ
          </p>
          <h2 className="text-5xl font-bold lg:text-6xl">
            Questions?
            <br />
            We've got you covered.
          </h2>
          <p className="mt-8 text-lg leading-8 text-slate-400">
            Everything you need to know before joining Adelaide MedTech Hackathon.
          </p>
        </div>

        <div className="space-y-5">
          {faq.map((item, index) => {
            const isOpen = open === index;
            const theme = colorThemes[index % colorThemes.length];

            return (
              <div
                key={item.question}
                className={`group overflow-hidden rounded-[28px] border backdrop-blur-xl transition-all duration-300 ${
                  isOpen
                    ? `${theme.activeBorder} bg-gradient-to-br ${theme.activeBg} to-transparent ${theme.activeShadow}`
                    : `border-white/10 bg-white/[0.03] ${theme.hoverBorder}`
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >
                  <span
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      isOpen ? theme.activeText : "text-slate-200 group-hover:text-white"
                    }`}
                  >
                    {item.question}
                  </span>
                  
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? `rotate-45 ${theme.iconBgActive} ${theme.iconTextActive}`
                        : "bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-white"
                    }`}
                  >
                    <Plus size={20} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`px-8 pb-8 leading-8 text-slate-400 transition-all duration-500 delay-100 ${
                        isOpen ? "translate-y-0" : "-translate-y-4"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}