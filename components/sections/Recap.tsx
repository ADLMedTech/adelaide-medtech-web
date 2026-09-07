"use client";

import Link from "next/link";
import { 
  Camera, 
  Sparkles, 
  BookOpen, 
  Hammer, 
  Trophy, 
  ArrowRight,
  Users
} from "lucide-react";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import FadeIn from "@/components/ui/FadeIn";

const galleryLinks = [
  {
    day: "Day 1",
    title: "Ideas",
    description: "Team formation and the first sparks of innovation.",
    href: "https://photos.app.goo.gl/3FkA4kMKXQGNZaQX6",
    icon: Sparkles,
    accent: "emerald",
    gradient: "from-emerald-500/20 to-emerald-500/0",
    borderHover: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    textHover: "group-hover:text-emerald-400",
  },
  {
    day: "Day 2",
    title: "Workshops",
    description: "Deep dives into pitching and intellectual property.",
    href: "https://photos.app.goo.gl/RFDHAdChhgYRM9rdA",
    icon: BookOpen,
    accent: "amber",
    gradient: "from-amber-500/20 to-amber-500/0",
    borderHover: "hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    textHover: "group-hover:text-amber-400",
  },
  {
    day: "Day 3",
    title: "Prototyping",
    description: "Designing logos, building models, and refining solutions.",
    href: "https://photos.app.goo.gl/Rtn95BAza8N8o1vt8",
    icon: Hammer,
    accent: "rose",
    gradient: "from-rose-500/20 to-rose-500/0",
    borderHover: "hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
    textHover: "group-hover:text-rose-400",
  },
  {
    day: "Day 4",
    title: "The Finale",
    description: "Pitches, prizes, and celebrations at ThincLab.",
    href: "https://photos.app.goo.gl/s7VwavBjpi3gbxrV9",
    icon: Trophy,
    accent: "violet",
    gradient: "from-violet-500/20 to-violet-500/0",
    borderHover: "hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    textHover: "group-hover:text-violet-400",
  },
];

export default function RecapPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-32 pb-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <BackgroundGlow colour="emerald" position="top" />
      <div className="absolute bottom-0 right-0 -z-10 h-[600px] w-[800px] translate-x-1/3 translate-y-1/3 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="absolute top-1/2 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Thank You Note Section */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 shadow-xl">
              <Camera className="h-6 w-6 text-white/80" />
            </div>
            
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl heading-gradient mb-6">
              Thank You for an Incredible 2026
            </h1>
            
            <p className="text-base leading-8 text-slate-300 lg:text-lg">
              A massive thank you to our sponsors, mentors, and most importantly, 
              the incredible student teams who made the Adelaide MedTech Hackathon a huge success. 
              The energy, innovation, and dedication you brought over these four days were truly inspiring.
            </p>
          </div>
        </FadeIn>

        {/* Pictures Section */}
        <section id="pictures" className="mt-20 scroll-mt-32">
          {/* Section Divider & Caption */}
          <FadeIn delay={0.1}>
            <div className="mb-10 flex items-center justify-center gap-6 opacity-80">
              <div className="hidden h-px w-full max-w-[100px] bg-gradient-to-r from-transparent to-white/20 sm:block" />
              <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Explore the Official Photo Galleries
              </p>
              <div className="hidden h-px w-full max-w-[100px] bg-gradient-to-l from-transparent to-white/20 sm:block" />
            </div>
          </FadeIn>

          {/* Gallery Links Row */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryLinks.map((item, index) => (
              <FadeIn key={item.day} delay={0.1 * (index + 1)}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group glass relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 p-6 transition-all duration-500 hover:-translate-y-1 bg-white/[0.02] ${item.borderHover}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  
                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between">
                      <span className={`inline-flex rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${item.textHover}`}>
                        {item.day}
                      </span>
                      <item.icon className="h-5 w-5 text-slate-500 transition-colors duration-300 group-hover:text-white" />
                    </div>
                    
                    <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 flex items-center gap-2 text-xs font-semibold text-white/40 transition-colors duration-300 group-hover:text-white">
                    <span>View Album</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* AGM Sign Up Section */}
        <FadeIn delay={0.6}>
          <div className="mx-auto mt-20 max-w-5xl relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-8 shadow-2xl transition-all duration-500 hover:border-violet-500/30 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-transparent to-fuchsia-600/5" />
            
            <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
              
              <div className="flex flex-col lg:max-w-xl">
                <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20">
                    <Users className="h-5 w-5 text-violet-300" />
                  </div>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    Help Us Shape 2027
                  </h2>
                </div>
                
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                  Passionate about healthcare and innovation? Join the organizing team! 
                  Sign up for our Annual General Meeting and be part of bringing the next hackathon to life.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="https://forms.gle/BApAPHuc9u3wasWS9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
                >
                  <span>Sign Up for AGM</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
                </a>
              </div>
              
            </div>
          </div>
        </FadeIn>

      </div>
    </main>
  );
}