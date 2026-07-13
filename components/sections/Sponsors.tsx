"use client";

import Image from "next/image";

const anchorPartners = [
  {
    name: "University of Adelaide",
    logo: "/sponsors/uoa.png",
    role: "Host & Venue Partner",
  },
  {
    name: "ThincLab",
    logo: "/sponsors/thinclab.png",
    role: "Startup Incubator Partner",
  },
];

const allSponsors = [
  "/sponsors/uoa.png",
  "/sponsors/thinclab.png",
  "/sponsors/sahealth.png",
  "/sponsors/amt.png",
  "/sponsors/healthtranslation.png",
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative overflow-hidden py-28 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-violet-400">
            Our Partners
          </p>

          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Backed by Leaders in
            <br />
            Health &amp; Innovation
          </h2>

          <p className="mx-auto mt-5 text-base leading-7 text-slate-400 lg:text-lg">
            Adelaide MedTech Hackathon is made possible by organisations
            committed to shaping the future of healthcare.
          </p>
        </div>

        {/* Anchor partners */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {anchorPartners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center rounded-[28px] bg-white px-8 py-10 text-center shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/20"
            >
              <div className="flex h-20 items-center justify-center">
                <Image
                  src={partner.logo}
                  width={160}
                  height={70}
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
                {partner.role}
              </p>
            </div>
          ))}
        </div>

        {/* All sponsors marquee */}
        <div className="mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            In Partnership With
          </p>

          <div className="relative mt-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />

            <div className="flex animate-marquee gap-6">
              {allSponsors.concat(allSponsors).map((logo, index) => (
                <div
                  key={index}
                  className="flex h-24 w-48 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-md transition-all hover:scale-105"
                >
                  <Image
                    src={logo}
                    width={140}
                    height={64}
                    alt=""
                    className="max-h-12 w-auto object-contain transition-transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Become a sponsor CTA */}
        <div className="mx-auto mt-20 max-w-2xl rounded-[32px] border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-transparent to-indigo-500/10 p-10 text-center">
          <h3 className="text-2xl font-bold lg:text-3xl">
            Interested in Sponsoring 2026?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400 lg:text-base">
            Join us in supporting the next generation of healthcare
            innovators, with packages available from Bronze to Gold.
          </p>
          
          <a
            href="mailto:adlmedtechhackathon.sponsorships@gmail.com"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 px-8 text-sm font-semibold text-white shadow-[0_0_35px_rgba(124,92,255,.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_55px_rgba(124,92,255,.55)]"
          >
            Get in Touch &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}