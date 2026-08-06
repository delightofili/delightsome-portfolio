"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen bg-[#fdfdfc] text-[#111111]">
      {/* NAVIGATION */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* TEMPORARY WORK SECTION */}
      <section id="work" className="border-t border-[#e8e8e5] px-6 py-32">
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Selected work
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Things I&apos;ve built.
          </h2>

          <div className="mt-16 rounded-3xl border border-dashed border-[#d8d8d5] p-12 text-center">
            <p className="text-neutral-400">Your projects will live here.</p>

            <p className="mt-2 text-sm text-neutral-400">
              We&apos;ll build this section on Day 2.
            </p>
          </div>
        </div>
      </section>

      {/* TEMPORARY ABOUT */}
      <section id="about" className="border-t border-[#e8e8e5] px-6 py-32">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            About
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            More than just code.
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-500">
            I&apos;m a Fullstack Developer who enjoys turning ideas into useful,
            polished digital products. More of this story is coming on Day 3.
          </p>
        </div>
      </section>

      {/* TEMPORARY CONTACT */}
      <section id="contact" className="border-t border-[#e8e8e5] px-6 py-32">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Contact
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Let&apos;s build something.
          </h2>
        </div>
      </section>

      <footer className="border-t border-[#e8e8e5] px-6 py-8">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between text-sm text-neutral-400">
          <span>© 2026 Chukwunonso Ofili</span>
          <span>Built with intention.</span>
        </div>
      </footer>
    </main>
  );
}
