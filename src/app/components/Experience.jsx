"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    year: "2022 — Present",
    title: "Fullstack Developer",
    company: "Independent Development",
    description:
      "Building and shipping web applications across frontend and backend systems, with hands-on experience in product development, databases, authentication, APIs, deployment, and modern JavaScript frameworks.",
    tags: [
      "Next.js",
      "React",
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
      "Tailwind CSS",
      "Framer Motion",
      "Cloudinary",
      "REST APIs",
      "JWT Authentication",
      "Git",
      "Vercel",
      "Render",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full bg-white px-5 py-28 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            Experience & journey
          </p>
        </motion.div>

        <div className="border-t border-neutral-200">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.year}-${experience.title}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group grid gap-6 border-b border-neutral-200 py-10 lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-2">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  {experience.year}
                </span>
              </div>

              <div className="lg:col-span-7">
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-neutral-950 transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                  {experience.title}
                </h3>

                <p className="mt-1 text-sm text-neutral-400">
                  {experience.company}
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
                  {experience.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 px-3 py-1.5 text-[11px] text-neutral-500 transition-colors duration-300 group-hover:border-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden items-start justify-end lg:col-span-3 lg:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
