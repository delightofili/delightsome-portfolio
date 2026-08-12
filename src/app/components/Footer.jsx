"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-2xl font-semibold tracking-tight">
              Delightsome.
            </p>

            <p className="mt-2 text-sm text-neutral-500">Fullstack Developer</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
            <a
              href="https://github.com/delightofili"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>

            <a href="#" className="transition-colors hover:text-white">
              LinkedIn
            </a>

            <a href="#" className="transition-colors hover:text-white">
              X
            </a>

            <a href="#contact" className="flex items-center gap-1 text-white">
              Contact
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-6">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Delightsome. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
