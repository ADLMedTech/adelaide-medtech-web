"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, CalendarPlus } from "lucide-react";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

const scheduleData = [
  {
    day: "Day 1",
    title: "Idea Generation",
    date: "Wed, 19 Aug 2026",
    time: "5:00pm - 8:00pm",
    location: "AHMS",
    locationDetails: "Adelaide Health and Medical Sciences Building",
    isFinal: false,
  },
  {
    day: "Day 2",
    title: "Pitching and Intellectual Property Workshop",
    date: "Thurs, 20 Aug 2026",
    time: "5:00pm - 8:00pm",
    location: "AHMS",
    locationDetails: "Adelaide Health and Medical Sciences Building",
    isFinal: false,
  },
  {
    day: "Day 3",
    title: "Prototyping & Logo Designing",
    date: "Mon, 24 Aug 2026",
    time: "5:00pm - 8:00pm",
    location: "AHMS",
    locationDetails: "Adelaide Health and Medical Sciences Building",
    isFinal: false,
  },
  {
    day: "Day 4",
    title: "Pitching & Awards Ceremony",
    date: "Wed, 26 Aug 2026",
    time: "3:00pm - 8:00pm",
    location: "ThincLab",
    locationDetails: "North Terrace",
    isFinal: true,
  },
];

export default function Timeline() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("August 19, 2026 17:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="timeline" className="relative flex w-full flex-col overflow-hidden py-16 sm:py-24">
      <BackgroundGlow colour="violet" position="center" />

      <div className="container relative z-10 mx-auto flex flex-col gap-16 px-6">
        
        {/* Header Section */}
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-violet-400">
            YOUR JOURNEY
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            From Registration
            <br />
            to Awards Night
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Here&apos;s what your experience at Adelaide MedTech Hackathon looks like.
          </p>

          {/* Countdown Timer */}
          {mounted && (
            <div className="mt-10 flex w-full flex-col items-center gap-8">
              {/* Changed to grid on mobile so it doesn't push off the screen */}
              <div className="grid w-full grid-cols-4 gap-3 sm:flex sm:justify-center sm:gap-6">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Mins", value: timeLeft.minutes },
                  { label: "Secs", value: timeLeft.seconds },
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className="glass flex w-full flex-col items-center justify-center rounded-2xl border border-white/10 py-4 shadow-lg sm:min-w-[100px] sm:px-4 sm:py-5"
                  >
                    <span className="font-mono text-2xl font-bold text-white sm:text-4xl">
                      {unit.value.toString().padStart(2, "0")}
                    </span>
                    <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-violet-400 sm:mt-2 sm:text-xs">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="/calendar/hackathon-2026.ics"
                className="group relative flex flex-col items-center overflow-hidden rounded-full border border-violet-500/40 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-300 backdrop-blur-sm transition-all duration-300 hover:bg-violet-500 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:rounded-3xl"
              >
                <div className="flex items-center gap-2">
                  <CalendarPlus className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span>Save to Calendar</span>
                </div>

                <div
                  className="
                    grid
                    transition-all
                    duration-300
                    ease-out
                    grid-rows-[0fr]
                    opacity-0
                    group-hover:grid-rows-[1fr]
                    group-hover:opacity-100
                  "
                >
                  <div className="overflow-hidden">
                    <p className="mt-2 text-xs font-medium text-violet-100">
                      Save all 4 days to your calendar
                    </p>
                  </div>
                </div>
              </a>
            </div>
          )}
        </div>

        {/* Timeline Layout */}
        <div className="relative mx-auto w-full max-w-5xl">
          {/* Central Timeline Line - Re-positioned to match the new padding */}
          <div className="absolute bottom-0 left-6 top-0 w-[2px] bg-gradient-to-b from-violet-500 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {/* Replaced fragile margins with strict gap-12 on mobile */}
          <div className="flex w-full flex-col gap-12 md:gap-0">
            {scheduleData.map((item, index) => (
              <div
                key={index}
                className={`relative flex w-full flex-col items-start md:flex-row md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${index > 0 ? "md:-mt-24" : ""}`}
              >
                {/* Center Node */}
                <div className="absolute left-6 top-9 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-black bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.6)] md:left-1/2 md:top-1/2" />

                {/* Card Wrapper - Dynamic padding fixes the right-side cutoff on mobile and spacing on desktop */}
                <div
                  className={`w-full pl-16 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pl-0 md:pr-12 lg:pr-16" // Left side card spacing
                      : "md:pl-12 md:pr-0 lg:pl-16" // Right side card spacing
                  }`}
                >
                  <div
                    className={`glass w-full rounded-[32px] border p-6 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                      item.isFinal
                        ? "border-violet-500 bg-violet-500/10 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                        : "border-white/10 hover:border-violet-500/40"
                    }`}
                  >
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-violet-500/20 px-3 py-1 text-[10px] font-semibold sm:text-xs text-violet-300">
                        {item.day}
                      </span>
                      {item.isFinal && (
                        <span className="rounded-full bg-violet-500 px-3 py-1 text-[10px] font-semibold sm:text-xs text-white">
                          Final Day
                        </span>
                      )}
                    </div>

                    <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <div className="space-y-4 text-sm text-slate-300">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 shrink-0 text-violet-400" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 shrink-0 text-violet-400" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                        <div>
                          <span className="font-medium text-slate-200">
                            {item.location}
                          </span>
                          <br />
                          <span className="text-slate-400">
                            {item.locationDetails}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}