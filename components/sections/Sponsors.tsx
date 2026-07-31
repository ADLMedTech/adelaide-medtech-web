"use client";

import Image from "next/image";

const anchorPartners = [
  {
    name: "Evolution Surgical",
    logo: "/sponsors/evosurgical.png",
    role: "Gold Sponsor",
  },
  {
    name: "Commission on Excellence and Innovation in Health",
    logo: "/sponsors/healthtranslation.png",
    role: "Gold Sponsor",
  },
];

const allSponsors = [
  {
    name: "University of Adelaide",
    logo: "/sponsors/uoa.png",
  },
  {
    name: "Beyond India",
    logo: "/sponsors/beyondIndia.png",
  },
  {
    name: "ThincLab",
    logo: "/sponsors/thinclab.png",
  },
  {
    name: "SA Health",
    logo: "/sponsors/sahealth.png",
  },
  {
    name: "Adelaide Medical Technology",
    logo: "/sponsors/amt.png",
  },
  {
    name: "Health Translation SA",
    logo: "/sponsors/healthtranslation.png",
  },
  {
    name: "Evolution Surgical",
    logo: "/sponsors/evosurgical.png",
  },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative isolate w-full max-w-full overflow-x-clip py-16 sm:py-24 lg:py-32 [contain:layout_paint]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-400 sm:text-sm sm:tracking-[0.4em]">
            Our Partners
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Backed by Leaders in
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Health &amp; Innovation
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
            Made possible by organisations committed to shaping the future of
            healthcare.
          </p>
        </div>

        {/* Gold sponsors */}
        <div className="mx-auto mt-9 grid w-full max-w-5xl grid-cols-2 gap-3 sm:mt-14 sm:gap-6 md:gap-10">
          {anchorPartners.map((partner) => (
            <div
              key={partner.name}
              className="group flex min-w-0 flex-col items-center justify-center rounded-[20px] bg-white px-2 py-6 text-center shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/20 sm:rounded-[28px] sm:px-6 sm:py-12"
            >
              {/* Larger logo area */}
              <div className="flex h-16 w-full items-center justify-center overflow-visible sm:h-28">
                <Image
                  src={partner.logo}
                  width={300}
                  height={130}
                  alt={partner.name}
                  sizes="(max-width: 639px) 140px, 280px"
                  className="h-auto w-[140px] max-w-none object-contain transition-transform duration-500 group-hover:scale-105 sm:w-[280px]"
                />
              </div>

              <p className="mt-4 text-[8px] font-bold uppercase tracking-[0.18em] text-amber-500 sm:mt-7 sm:text-xs sm:tracking-[0.3em]">
                {partner.role}
              </p>
            </div>
          ))}
        </div>

        {/* Sponsor marquee */}
        <div className="mt-14 sm:mt-20">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500 sm:text-xs sm:tracking-[0.4em]">
            Supported By
          </p>

          <div className="relative mt-6 w-full max-w-full overflow-x-clip sm:mt-8 [contain:layout_paint]">
            {/* Left fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[var(--background)] to-transparent sm:w-16 lg:w-24" />

            {/* Right fade */}
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[var(--background)] to-transparent sm:w-16 lg:w-24" />

            {/* Animated sponsor track */}
            <div className="animate-marquee flex w-max min-w-max will-change-transform">
              {[0, 1].map((copyIndex) => (
                <div
                  key={copyIndex}
                  aria-hidden={copyIndex === 1}
                  className="flex shrink-0 gap-2.5 pr-2.5 sm:gap-4 sm:pr-4 lg:gap-6 lg:pr-6"
                >
                  {allSponsors.map((sponsor) => (
                    <div
                      key={`${copyIndex}-${sponsor.name}`}
                      className="group relative flex h-[62px] w-[112px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:scale-[1.03] sm:h-20 sm:w-40 sm:rounded-2xl lg:h-24 lg:w-48"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={
                          copyIndex === 0 ? `${sponsor.name} logo` : ""
                        }
                        fill
                        sizes="(max-width: 639px) 112px, (max-width: 1023px) 160px, 192px"
                        className="object-contain p-2.5 transition-transform duration-300 group-hover:scale-105 sm:p-3"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sponsor CTA */}
        <div className="mx-auto mt-14 max-w-2xl rounded-[24px] border border-violet-500/30 bg-gradient-to-r from-violet-600/15 via-transparent to-purple-600/15 px-5 py-8 text-center shadow-[0_0_40px_rgba(139,92,246,0.1)] sm:mt-20 sm:rounded-[32px] sm:p-10">
          <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl">
            Interested in Sponsoring 2026?
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
            Support the next generation of healthcare innovators, with packages
            available from Bronze to Gold.
          </p>

          <a
            href="mailto:adlmedtechhackathon.sponsorships@gmail.com"
            className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 px-6 text-sm font-semibold text-white shadow-[0_0_35px_rgba(139,92,246,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_55px_rgba(139,92,246,0.6)] sm:mt-6 sm:h-11 sm:px-8"
          >
            Get in Touch

            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}