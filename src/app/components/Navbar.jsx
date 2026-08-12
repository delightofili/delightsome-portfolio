"use client";

import { motion } from "motion/react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-1/2 top-5 z-50 w-[calc(100%-28px)] max-w-[590px] -translate-x-1/2"
    >
      <div className="flex items-center justify-between rounded-full border border-[#e8e8e5] bg-white/80 px-2 py-2 shadow-[0_8px_35px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
        <a
          href="#home"
          className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold !text-black"
        >
          C.O
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm !text-neutral-500 transition hover:bg-neutral-100 hover:!text-black"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-black px-5 py-3 text-sm font-medium !text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:block"
          >
            Let&apos;s talk
          </a>

          <button
            type="button"
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white sm:hidden"
          >
            <span className="text-lg leading-none">☰</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
