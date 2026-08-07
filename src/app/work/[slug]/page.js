import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} — Chukwunonso Ofili`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      {/* Header */}
      <section className="px-5 pb-20 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/work"
            className="mb-14 inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-950"
          >
            <ArrowLeft size={16} />
            Back to work
          </Link>

          {/* Category */}
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-400">
            <span>{project.category}</span>

            <span className="h-1 w-1 rounded-full bg-neutral-300" />

            <span>{project.year}</span>
          </div>

          {/* Title */}
          <h1 className="max-w-5xl text-6xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-[9rem] lg:leading-[0.9]">
            {project.title}
          </h1>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-lg leading-8 text-neutral-500 sm:text-xl">
              {project.description}
            </p>

            <div className="flex shrink-0 gap-3">
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm !text-white transition-transform hover:-translate-y-1"
              >
                Live project
                <ArrowUpRight size={16} />
              </Link>

              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-3 text-sm transition-all hover:-translate-y-1 hover:border-neutral-950"
              >
                <FaGithub size={16} />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] bg-neutral-100">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Project overview */}
      <section className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              Overview
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              I designed and engineered this product from the ground up.
            </h2>

            <div className="mt-8 space-y-4">
              {project.overview.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-neutral-100 pb-4"
                >
                  <span className="text-sm text-neutral-400">→</span>

                  <p className="text-neutral-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Role + Stack */}
      <section className="border-y border-neutral-100 bg-neutral-50 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              My role
            </p>

            <p className="mt-3 text-lg">{project.role}</p>
          </div>

          <div className="sm:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Technology
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              The challenge
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              Building something simple on the surface usually requires solving
              complicated problems underneath.
            </h2>

            <div className="mt-10 space-y-5">
              {project.challenges.map((challenge, index) => (
                <div key={challenge} className="flex gap-5">
                  <span className="text-sm text-neutral-400">0{index + 1}</span>

                  <p className="max-w-2xl leading-7 text-neutral-600">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="bg-neutral-950 px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Engineering
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              What&apos;s happening under the hood.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {project.engineering.map((item, index) => (
              <div
                key={item.title}
                className="bg-neutral-950 p-8 transition-colors hover:bg-neutral-900 sm:p-10"
              >
                <span className="text-sm text-neutral-600">0{index + 1}</span>

                <h3 className="mt-12 text-xl font-medium">{item.title}</h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-neutral-400">Interested in the project?</p>

          <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
            Explore it yourself.
          </h2>

          <div className="mt-8 flex justify-center gap-3">
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm !text-white"
            >
              Visit live site
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-3 text-sm"
            >
              More projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
