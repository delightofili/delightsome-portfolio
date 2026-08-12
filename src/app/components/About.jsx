"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#f7f6f3] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-neutral-400">
            About Me
          </p>

          <h2 className="max-w-5xl text-3xl font-medium leading-[1.05] tracking-[-0.045em] text-neutral-950 sm:text-4xl md:text-5xl lg:text-6xl">
            Hello! My name is Chukwunonso Ofili.
          </h2>
        </motion.div>

        {/* Image + About content */}
        <div className="mt-20 grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Back layer */}
            <div className="absolute -bottom-5 -right-5 h-full w-full border border-neutral-300 bg-[#d8c5a9]" />

            {/* Main image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200">
              <Image
                src="/profile.png"
                alt="Chukwunonso Ofili"
                fill
                priority={false}
                className="object-cover object-center grayscale-[15%]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Small image label */}
            <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-700 backdrop-blur-sm">
              Chukwunonso Ofili
            </div>
          </motion.div>

          {/* ABOUT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:pt-2"
          >
            <div className="max-w-2xl space-y-7 text-lg leading-8 text-neutral-600 sm:text-xl sm:leading-9">
              <p>
                I’m a Fullstack Developer from Nigeria, focused on building
                clean, functional, and thoughtful digital products for the web.
                I enjoy creating interfaces that look good, feel natural to use,
                and work just as well behind the scenes.
              </p>

              <p>
                I’ve been coding since 2022 and have built a range of projects
                using technologies including JavaScript, React, Next.js,
                Node.js, TypeScript, PostgreSQL, Prisma, Supabase, and Tailwind
                CSS.
              </p>

              <p>
                I particularly enjoy frontend development, but I love taking an
                idea from the interface all the way to the backend and
                deployment.
              </p>

              <p>
                I’m focused on building better products, solving interesting
                problems, and continuously expanding what I can build.
              </p>
            </div>

            {/* Info blocks */}
            <div className="mt-14 border-t border-neutral-300">
              {/* What I enjoy */}
              <div className="border-b border-neutral-300 py-7">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
                  What I Enjoy
                </p>

                <p className="text-lg leading-8 text-neutral-700">
                  Building interfaces, solving problems, exploring new
                  technologies, and turning ideas into real products.
                </p>
              </div>

              {/* Beyond code */}
              <div className="border-b border-neutral-300 py-7">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
                  Beyond Code
                </p>

                <p className="text-lg leading-8 text-neutral-700">
                  God lover. Piano player. Problem solver.
                </p>
              </div>

              {/* Based in */}
              <div className="py-7">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
                  Based In
                </p>

                <p className="text-lg text-neutral-700">Nigeria 🇳🇬</p>
              </div>
              <div className="flex  gap-4 pt-3 items-center text-neutral-700 mt-3">
                <p className="font-bold ">Follow me:</p>
                <div className="flex gap-4 text-neutral-700">
                  <a href="https://github.com/delightofili">
                    <FaGithub />
                  </a>
                  <a href="https://x.com/DelightOfili">
                    <FaXTwitter />
                  </a>
                  <a href="https://www.tiktok.com/@delightsomeee">
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
