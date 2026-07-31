"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { title: "About", href: "#about" },
  { title: "Timeline", href: "#timeline" },
  { title: "Themes", href: "#themes" },
  { title: "Team", href: "#team" },
  { title: "FAQs", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 flex w-full justify-center px-4 sm:top-6 sm:px-6 lg:px-8">
      <nav className="glass flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 px-5 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl sm:h-20 sm:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 lg:-ml-2">
          <Image 
            src="/logos/logo-dark.png" 
            alt="Adelaide MedTech Hackathon" 
            width={150} 
            height={80} 
            priority 
            className="h-auto w-[120px] object-contain sm:w-[150px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.title} href={link.href} className="text-[15px] font-medium text-white/70 transition hover:text-white">
              {link.title}
            </Link>
          ))}
        </div>

        {/* Desktop Register */}
        <div className="hidden lg:block">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfzuxnYnfdkLhnjFOCKnJlDzZ1v4SgjJFXPof3jKiJ0IE3-Mw/viewform" target="_blank" className="inline-flex h-10 min-w-[180px] items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 font-semibold text-white shadow-[0_0_35px_rgba(16,185,129,.45)] transition hover:scale-105">
            Register Now →
          </Link>
        </div>

        {/* Mobile Menu Button with Rotation Animation */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="rounded-xl p-2 text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="glass absolute left-4 right-4 top-24 z-40 flex flex-col gap-2 rounded-2xl border border-white/10 p-6 shadow-[0_20px_80px_rgba(0,0,0,.6)] backdrop-blur-3xl sm:left-6 sm:right-6 sm:top-28 sm:p-8 lg:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center rounded-xl px-4 py-3 text-lg font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-emerald-400"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfzuxnYnfdkLhnjFOCKnJlDzZ1v4SgjJFXPof3jKiJ0IE3-Mw/viewform"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,.3)] transition-transform active:scale-95"
            >
              Register Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}