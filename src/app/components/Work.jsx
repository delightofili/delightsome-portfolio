"use client";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
const PROJECTS_PER_PAGE = 2;

export default function Work({ showAll = false }) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const visibleProjects = showAll
    ? projects.slice(
        currentPage * PROJECTS_PER_PAGE,
        (currentPage + 1) * PROJECTS_PER_PAGE,
      )
    : projects.slice(0, PROJECTS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({
        top: document.getElementById("work")?.offsetTop - 80 || 0,
        behavior: "smooth",
      });
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({
        top: document.getElementById("work")?.offsetTop - 80 || 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="work" className="w-full bg-white px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            Selected work
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-5xl font-medium tracking-[-0.05em] text-neutral-950 sm:text-6xl">
                Things I&apos;ve built.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-neutral-500 sm:text-lg">
                A collection of products and applications I&apos;ve designed,
                engineered, and shipped from idea to deployment.
              </p>
            </div>

            {/* Only homepage gets this */}
            {!showAll && projects.length > 4 && (
              <Link
                href="/work"
                className="group inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 px-5 py-3 text-sm text-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
              >
                View more works
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            )}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div layout className="grid gap-10 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.article
              layout
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group"
            >
              {/* Image */}
              <Link href={`/work/${project.slug}`} className="block">
                <div className="relative overflow-hidden rounded-[26px] bg-neutral-100">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] group-hover:-translate-y-[2px]"
                    />

                    {/* Subtle hover layer */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.035]" />

                    {/* Featured */}
                    {project.featured && (
                      <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-medium text-neutral-800 shadow-sm backdrop-blur">
                        Featured project
                      </div>
                    )}
                  </div>
                </div>
              </Link>

              {/* Info */}
              <div className="mt-5">
                <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                  <span>{project.category}</span>
                  <span className="h-1 w-1 rounded-full bg-neutral-300" />
                  <span>Live</span>
                </div>

                <div className="mt-3 flex items-start justify-between gap-5">
                  <div>
                    <Link href={`/work/${project.slug}`}>
                      <h3 className="text-3xl font-medium tracking-[-0.04em] text-neutral-950 transition-colors group-hover:text-neutral-600">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-neutral-500">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <Link
                    href={`/work/${project.slug}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-950 hover:bg-neutral-950 hover:!text-white"
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>

                {/* Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-neutral-200 px-3 py-1.5 text-[11px] text-neutral-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-2">
                  {/* Internal link — SAME TAB */}
                  <Link
                    href={`/work/${project.slug}`}
                    className="rounded-full bg-neutral-950 px-5 py-2.5 text-xs font-medium !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
                  >
                    View project
                  </Link>

                  {/* External link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-2.5 text-xs font-medium text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Pagination */}
        {showAll && totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-3">
            <button
              onClick={previousPage}
              disabled={currentPage === 0}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-3 text-sm text-neutral-700 transition-all hover:border-neutral-950 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft size={15} />
              Previous
            </button>

            <span className="px-3 text-xs text-neutral-400">
              {currentPage + 1} / {totalPages}
            </span>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-3 text-sm text-neutral-700 transition-all hover:border-neutral-950 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next
              <ArrowRight size={15} />
            </button>
          </div>
        )}

        {/* Bottom GitHub */}
        <div className="mt-16 flex  justify-center gap-4">
          <Link
            href="/work"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 px-5 py-3 text-sm text-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-950 hover:bg-neutral-950 hover:!text-white"
          >
            View more works
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <a
            href="https://github.com/delightofili"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-950 hover:bg-neutral-950 hover:!text-white"
          >
            Explore more on GitHub
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
