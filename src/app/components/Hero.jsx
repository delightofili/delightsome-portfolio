"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-36 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-7"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-500 shadow-[0_5px_20px_rgba(0,0,0,0.04)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          Available for opportunities
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.35,
          ease: "easeOut",
        }}
        whileHover="hover"
        className="group relative mb-7 h-[200px] w-[200px] cursor-pointer"
      >
        {/* Back frame */}
        <motion.div
          variants={{
            hover: {
              x: -7,
              y: 4,
              rotate: -10,
            },
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 16,
          }}
          className="absolute left-2 top-5 h-[160px] w-[125px] -rotate-6 rounded-2xl border border-[#dededb] bg-[#f3f3f0] shadow-[0_15px_40px_rgba(0,0,0,0.07)]"
        />

        <motion.div
          variants={{
            hover: {
              x: 6,
              y: -7,
              rotate: 9,
              scale: 1.03,
            },
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 16,
          }}
          className="absolute right-1 top-0 h-[178px] w-[138px] overflow-hidden rounded-2xl border-4 border-white bg-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[inherit]">
            <Image
              src="/profile.png"
              alt="Chukwunonso Ofili"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Name label */}
        <motion.div
          variants={{
            hover: {
              y: -4,
              rotate: 1,
            },
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 16,
          }}
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-[-2deg] whitespace-nowrap rounded-full border border-[#e5e5e2] bg-white px-4 py-2 text-xs text-neutral-500 shadow-sm"
        >
          Chukwunonso
        </motion.div>
      </motion.div>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-neutral-400 sm:text-sm"
      >
        Hello, I&apos;m Chukwunonso
      </motion.p>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="mx-auto max-w-[1000px] text-[clamp(3.2rem,15vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.06em]"
      >
        <span className="block text-black">Fullstack</span>

        <span className="block text-neutral-400">Developer.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="mx-auto mt-8 max-w-[620px] text-base leading-7 text-neutral-500 sm:text-lg"
      >
        I build fullstack web applications and digital products from idea to
        deployment — combining clean interfaces, solid backend systems, and
        thoughtful user experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.05 }}
        className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <a
          href="#work"
          className="group flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium !text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)]"
        >
          View my work
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <a
          href="#contact"
          className="rounded-full border border-neutral-200 bg-white px-6 py-3.5 text-sm font-medium !text-black transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-50"
        >
          Let&apos;s talk
        </a>
      </motion.div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 hidden flex-col items-center gap-2 text-neutral-400 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.a>
    </section>
  );
}
