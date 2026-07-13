"use client";

import { Brain, Users, Rocket } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "No Coding Required",
    description:
      "Whether you're studying medicine, business, design, engineering or computer science, everyone has something valuable to contribute.",
  },
  {
    icon: Users,
    title: "Industry Mentors",
    description:
      "Work alongside clinicians, researchers, startup founders and experienced mentors throughout the event.",
  },
  {
    icon: Rocket,
    title: "Build Real Impact",
    description:
      "Develop innovative solutions that address genuine healthcare challenges and create meaningful change.",
  },
];

export default function FeatureCards() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center pt-6 pb-24 sm:pt-8 sm:pb-32">
      <div className="container mx-auto flex w-full flex-col items-center px-6 md:px-12 lg:px-16">
        
        <div className="flex w-full max-w-3xl flex-col items-center justify-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-300">
            Why Join
          </p>
          
          <div className="h-4"></div> 
          
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            More Than Just a Hackathon
          </h2>
          
          <div className="h-6"></div>
          
          <p className="text-lg leading-relaxed text-slate-400 sm:text-xl">
            Adelaide MedTech Hackathon is designed for students from every
            background to collaborate, learn and create healthcare innovations
            together.
          </p>
        </div>

        <div className="h-12"></div>

        <div className="grid w-full gap-10 sm:grid-cols-1 lg:grid-cols-3 lg:gap-15">
          {cards.map((card) => (
            <div
              key={card.title}
              className="glass group flex min-h-[100px] flex-col rounded-[2.5rem] border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-500/20"
            >
              
              <div 
                className="flex h-full flex-col m-4 sm:m-6"
                style={{ 
                  paddingTop: "40px", 
                  paddingBottom: "40px", 
                  paddingLeft: "30px", 
                  paddingRight: "30px" 
                }}
              >
                
                <div className="mb-10 inline-flex w-fit items-center justify-center rounded-2xl bg-violet-500/10 p-5 transition-colors duration-500 group-hover:bg-violet-500/20">
                  <card.icon
                    size={48}
                    className="text-violet-400 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <h3 className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {card.title}
                </h3>
                
                <p className="text-lg leading-relaxed text-slate-400">
                  {card.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}