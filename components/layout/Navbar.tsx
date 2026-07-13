"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { title: "About", href: "#about" },
  { title: "Timeline", href: "#timeline" },
  { title: "Themes", href: "#themes" },
  { title: "Prizes", href: "#prizes" },
  { title: "FAQs", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav className="glass flex h-20 w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 px-8 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl">
        
        {/* Logo - Nudged left */}
        <Link href="/" className="flex items-center gap-4 -ml-7">
          <Image src="/logos/logo-dark.png" alt="Adelaide MedTech Hackathon" width={150} height={80} priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.title} href={link.href} className="text-[15px] font-medium text-white/70 transition hover:text-white">
              {link.title}
            </Link>
          ))}
        </div>

        {/* Desktop Register - Nudged right */}
        <div className="hidden lg:block -mr-6">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfzuxnYnfdkLhnjFOCKnJlDzZ1v4SgjJFXPof3jKiJ0IE3-Mw/viewform" target="_blank" className="inline-flex h-10 min-w-[180px] items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 font-semibold text-white shadow-[0_0_35px_rgba(124,92,255,.45)] transition hover:scale-105">
            Register Now →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="rounded-xl p-2 text-white transition hover:bg-white/10 lg:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="glass absolute top-28 left-6 right-6 z-40 flex flex-col gap-4 rounded-2xl border border-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl lg:hidden">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white/80 hover:text-white"
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfzuxnYnfdkLhnjFOCKnJlDzZ1v4SgjJFXPof3jKiJ0IE3-Mw/viewform"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-violet-600 font-semibold text-white shadow-lg"
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  );
}
