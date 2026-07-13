"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090b]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_1.2fr_1.2fr]">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/logos/logo-dark.png"
                alt="Adelaide MedTech Hackathon"
                width={160}
                height={80}
              />

              <div>
                <h3 className="text-xl font-bold text-white">
                  Adelaide MedTech
                </h3>

                <p className="text-slate-400">
                  Hackathon
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-slate-400">
              South Australia's premier student healthcare innovation
              hackathon, bringing together students from medicine,
              engineering, business, design and technology to solve
              real healthcare challenges.
            </p>
          </div>


          {/* Explore */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Explore
            </h4>

            <div className="space-y-3">
              <Link href="#about" className="block text-slate-400 transition hover:text-white">
                About
              </Link>

              <Link href="#themes" className="block text-slate-400 transition hover:text-white">
                Innovation Streams
              </Link>

              <Link href="#schedule" className="block text-slate-400 transition hover:text-white">
                Schedule
              </Link>

              <Link href="#gallery" className="block text-slate-400 transition hover:text-white">
                Gallery
              </Link>

              <Link href="#team" className="block text-slate-400 transition hover:text-white">
                Team
              </Link>

              <Link href="#faq" className="block text-slate-400 transition hover:text-white">
                FAQ
              </Link>
            </div>
          </div>


          {/* Contact */}
          <div>
            <h4 className="mb-8 text-lg font-semibold text-white">
              Contact
            </h4>

            <div className="space-y-4">

              {/* Email */}
              <a
                href="mailto:adelaide.medtechhackathon@gmail.com"
                className="flex w-full items-center gap-4 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-violet-400 hover:bg-violet-500/20"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-xl">
                  ✉️
                </div>

                <div className="flex-1">
                  <h5 className="font-semibold text-white">
                    Email Us
                  </h5>

                  <p className="break-words text-sm leading-5 text-violet-300">
                    adelaide.medtechhackathon@gmail.com
                  </p>
                </div>
              </a>


              {/* Location */}
              <div className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">

                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  📍
                </div>

                <div className="flex-1">
                  <h5 className="font-semibold text-white">
                    Event Location
                  </h5>

                  <p className="text-sm leading-5 text-slate-400">
                    AHMS Building
                    <br />
                    North Terrace
                    <br />
                    Adelaide SA 5000
                  </p>
                </div>

              </div>

            </div>
          </div>


          {/* Connect */}
          <div>

            <h4 className="mb-6 text-lg font-semibold text-white">
              Connect
            </h4>

            <div className="space-y-4">

              <a
                href="https://chat.whatsapp.com/ChWjapkz1gX1TkyPuTzexO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400 hover:bg-emerald-500/20"
              >

                <div>
                  <h5 className="font-semibold text-white">
                    💬 WhatsApp
                  </h5>

                  <p className="text-sm text-emerald-300">
                    Team Formation • Updates • Q&amp;A
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-emerald-300"
                />

              </a>


              <a
                href="https://instagram.com/adl.medtechhackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-pink-500/20 bg-pink-500/10 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-pink-400 hover:bg-pink-500/20"
              >

                <div>
                  <h5 className="font-semibold text-white">
                    📷 Instagram
                  </h5>

                  <p className="text-sm text-pink-300">
                    Photos • Reels • Event News
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-pink-300"
                />

              </a>


              <a
                href="https://www.linkedin.com/company/adelaide-medtech-hackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-sky-500/20 bg-sky-500/10 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-sky-400 hover:bg-sky-500/20"
              >

                <div>
                  <h5 className="font-semibold text-white">
                    💼 LinkedIn
                  </h5>

                  <p className="text-sm text-sky-300">
                    Sponsors • Industry • Careers
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-sky-300"
                />

              </a>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-sm text-slate-500 lg:flex-row">

          <p>
            © 2026 Adelaide MedTech Hackathon. All rights reserved.
          </p>

          <p>
            Hosted by AUSA Club, Adelaide MedTech Hackathon
          </p>

        </div>

      </div>
    </footer>
  );
}