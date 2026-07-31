"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// --- Custom Brand Logo Components ---
const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const InstagramLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const YouTubeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090b]">
      <div className="container mx-auto px-6 py-16">
        
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.8fr_1.0fr_1.5fr]">

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
          <div className="lg:pl-8">
            <h4 className="mb-6 text-lg font-semibold text-white">
              Explore
            </h4>
            <div className="space-y-3">
              <Link href="#about" className="block text-slate-400 transition hover:text-white">About</Link>
              <Link href="#streams" className="block text-slate-400 transition hover:text-white">Challenge Themes</Link>
              <Link href="#timeline" className="block text-slate-400 transition hover:text-white">Timeline</Link>
              <Link href="#gallery" className="block text-slate-400 transition hover:text-white">Gallery</Link>
              <Link href="#team" className="block text-slate-400 transition hover:text-white">Team</Link>
              <Link href="#faq" className="block text-slate-400 transition hover:text-white">FAQ</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-8 text-lg font-semibold text-white">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:adelaide.medtechhackathon@gmail.com"
                className="flex w-full items-center gap-4 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-violet-400 hover:bg-violet-500/20"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-xl text-violet-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m2 4 10 8 10-8"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-white">Email Us</h5>
                  <p className="break-words text-sm leading-5 text-violet-300">
                    adelaide.medtechhackathon@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-white/70">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-white">Event Location</h5>
                  <p className="text-sm leading-5 text-slate-400">
                    AHMS Building<br />North Terrace<br />Adelaide SA 5000
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
            <div className="grid gap-4 sm:grid-cols-2">
              
              <a
                href="https://chat.whatsapp.com/ChWjapkz1gX1TkyPuTzexO"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-500/20 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <WhatsAppLogo className="h-5 w-5 text-emerald-400 transition-transform group-hover:scale-110" />
                    <h5 className="font-semibold text-white">WhatsApp</h5>
                  </div>
                  <ArrowUpRight size={18} className="text-emerald-500 opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>
                <p className="text-sm text-emerald-300/80">
                  Team Formation • Q&amp;A
                </p>
              </a>

              <a
                href="https://instagram.com/adl.medtechhackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-pink-500/20 bg-pink-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:bg-pink-500/20 hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <InstagramLogo className="h-5 w-5 text-pink-400 transition-transform group-hover:scale-110" />
                    <h5 className="font-semibold text-white">Instagram</h5>
                  </div>
                  <ArrowUpRight size={18} className="text-pink-500 opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>
                <p className="text-sm text-pink-300/80">
                  Photos • Event News
                </p>
              </a>

              <a
                href="https://www.linkedin.com/company/adelaide-medtech-hackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-sky-500/20 bg-sky-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-500/20 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <LinkedInLogo className="h-5 w-5 text-sky-400 transition-transform group-hover:scale-110" />
                    <h5 className="font-semibold text-white">LinkedIn</h5>
                  </div>
                  <ArrowUpRight size={18} className="text-sky-500 opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>
                <p className="text-sm text-sky-300/80">
                  Industry • Careers
                </p>
              </a>

              <a
                href="https://www.youtube.com/@adlmedtechhackathon7691/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-red-500/20 bg-red-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-500/20 hover:shadow-[0_8px_30px_rgba(239,68,68,0.15)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <YouTubeLogo className="h-5 w-5 text-red-500 transition-transform group-hover:scale-110" />
                    <h5 className="font-semibold text-white">YouTube</h5>
                  </div>
                  <ArrowUpRight size={18} className="text-red-500 opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>
                <p className="text-sm text-red-300/80">
                  Ideas • Info
                </p>
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