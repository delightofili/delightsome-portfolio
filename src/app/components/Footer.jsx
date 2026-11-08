"use client";

import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  { href: "https://github.com/delightofili", label: "GitHub", icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/delightofili",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  { href: "https://x.com/DelightOfili", label: "X", icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink px-5 pt-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <p className="max-w-sm text-white/60">
            Digital health and fullstack software developer. Building in public
            from Enugu, Nigeria.
          </p>
          <div className="flex items-center gap-3">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold transition-colors hover:border-brand hover:bg-brand"
              >
                <Icon /> {label}
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand transition-transform hover:-translate-y-1"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* giant wordmark across the bottom of the page */}
        <p className="mt-14 select-none pb-6 font-display text-[clamp(3rem,13.5vw,11.5rem)] font-bold leading-[0.85] tracking-[-0.06em] text-white">
          Delightsome<span className="text-brand">.</span>
        </p>
        <p className="border-t border-white/10 py-6 text-xs text-white/40">
          © {new Date().getFullYear()} Chukwunonso Ofili. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
