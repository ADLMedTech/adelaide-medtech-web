"use client";

import { Users, Trophy, Lightbulb } from "lucide-react";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

export default function CTA() {
  return (
    <section id="register" className="relative py-16 sm:py-24 overflow-hidden">
      <BackgroundGlow colour="violet" position="center" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="glass relative overflow-hidden rounded-[2.5rem] border border-white/10 p-8 shadow-2xl sm:p-12 lg:flex lg:flex-row lg:items-center lg:gap-20 lg:p-16">
          
          {/* Subtle inner ambient glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full max-w-[800px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

          {/* Left Side: Content */}
          <div className="relative z-10 flex-1 text-center lg:text-left">
            <span className="mb-6 inline-block rounded-full border border-violet-500/30 bg-violet-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300">
              Registration Open
            </span>
            
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Ready to build the <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                future of healthcare?
              </span>
            </h2>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 lg:mx-0">
              Join students from medicine, engineering, business, design, science and technology for an unforgettable weekend of innovation, collaboration and impact.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfzuxnYnfdkLhnjFOCKnJlDzZ1v4SgjJFXPof3jKiJ0IE3-Mw/viewform"
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-full bg-violet-500 px-8 py-4 font-bold tracking-wide text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all hover:bg-violet-600 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] sm:w-auto"
              >
                Register Now
              </a>
              <a
                href="#about"
                className="w-full rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition-all hover:border-violet-400/50 hover:bg-white/5 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side: Stats Stack */}
          <div className="relative z-10 mt-12 flex w-full flex-col gap-4 lg:mt-0 lg:w-[400px]">
            {[
              { icon: Users, stat: "350+", label: "Students Inspired" },
              { icon: Trophy, stat: "$5K+", label: "Prize Pool" },
              { icon: Lightbulb, stat: "15+", label: "Industry Mentors" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-violet-500/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{item.stat}</div>
                  <div className="text-sm font-medium text-slate-400">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}