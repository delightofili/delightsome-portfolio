"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, HeartPulse } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import Magnetic from "./Magnetic";

const filters = [
  { id: "all", label: "All" },
  { id: "health", label: "Health tech" },
  { id: "fullstack", label: "Fullstack" },
  { id: "frontend", label: "Frontend" },
];

const health = projects.filter((p) => p.type === "health");
const others = projects.filter((p) => p.type !== "health");

// showAll is true on the /work page, false on the home page
export default function Work({ showAll = false }) {
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="work" className="px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title={showAll ? "Everything I've built." : "Things I've built."}
          text="Health tools for real clinics, and fullstack products shipped from idea to deploy."
        />

        {showAll ? (
          <>
            {/* filter tabs with the same sliding pill idea as the navbar */}
            <div className="mb-12 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className="relative rounded-full border border-line px-5 py-2.5 text-sm font-semibold"
                >
                  {filter === f.id && (
                    <motion.span
                      layoutId="work-filter"
                      className="absolute inset-0 rounded-full bg-brand"
                    />
                  )}
                  <span
                    className={`relative ${filter === f.id ? "text-white" : "text-neutral-600"}`}
                  >
                    {f.label}
                  </span>
                </button>
              ))}
            </div>

            {/* layout lets the cards glide into their new spots when the filter changes */}
            <motion.div layout className="grid gap-x-8 gap-y-14 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        ) : (
          <>
            <div className="mb-8 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-brand">
              <HeartPulse size={18} /> Digital health
            </div>
            <div className="space-y-24">
              {health.map((project, i) => (
                <FeatureRow
                  key={project.slug}
                  project={project}
                  flip={i % 2 === 1}
                />
              ))}
            </div>

            <div className="mb-8 mt-28 text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">
              More builds
            </div>
            <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
              {others.slice(0, 2).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </>
        )}

        <div className="mt-20 flex flex-wrap justify-center gap-4">
          {!showAll && (
            <Magnetic>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition-colors hover:bg-brand"
              >
                See all {projects.length} projects
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Magnetic>
          )}
          <Magnetic>
            <a
              href="https://github.com/delightofili"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-[14px] font-semibold transition-colors hover:bg-ink hover:text-white"
            >
              <FaGithub size={18} /> More on GitHub
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16"
    >
      <p
        className={`mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] ${light ? "text-white/70" : "text-brand"}`}
      >
        <span className={`h-px w-8 ${light ? "bg-white/70" : "bg-brand"}`} />
        {eyebrow}
      </p>
      <h2 className="font-display text-5xl font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {text && (
        <p
          className={`mt-5 max-w-xl text-lg leading-8 ${light ? "text-white/80" : "text-neutral-600"}`}
        >
          {text}
        </p>
      )}
    </motion.div>
  );
}

// big alternating row used for the two health projects on the home page
function FeatureRow({ project, flip }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor="View"
        className={`group relative block overflow-hidden rounded-[32px] border border-line bg-white ${flip ? "lg:order-2" : ""}`}
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
        </div>
        <span className="absolute bottom-4 right-4 rounded-full bg-brand px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
          {project.live ? "Live" : "In progress"}
        </span>
      </Link>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
          {project.category} · {project.year}
        </p>
        <h3 className="mt-4 font-display text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-lg text-lg leading-8 text-neutral-600">
          {project.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 8).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-neutral-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor="View"
        className="group relative block overflow-hidden rounded-[28px] border border-line bg-white"
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
        </div>
        {project.type === "health" && (
          <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-xs font-bold text-white">
            <HeartPulse size={14} /> Health tech
          </span>
        )}
      </Link>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500">
            {project.category} · {project.live ? "Live" : "In progress"}
          </p>
          <h3 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em]">
            {project.title}
          </h3>
          <p className="mt-2 max-w-lg leading-7 text-neutral-600">
            {project.shortDescription}
          </p>
        </div>
        <Link
          href={`/work/${project.slug}`}
          aria-label={`Open ${project.title}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-white transition-all hover:-rotate-45 hover:border-brand hover:bg-brand hover:text-white"
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line px-3 py-1 text-[11px] font-semibold text-neutral-500"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Link
        href={`/work/${project.slug}`}
        className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand"
      >
        Case study
      </Link>
      {/* only show the live button when there is a live link */}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold hover:border-brand hover:text-brand"
        >
          Live site <ArrowUpRight size={16} />
        </a>
      )}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold hover:border-brand hover:text-brand"
      >
        <FaGithub size={16} /> Code
      </a>
    </div>
  );
}
