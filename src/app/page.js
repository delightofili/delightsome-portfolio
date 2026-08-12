"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen bg-[#fdfdfc] text-[#111111]">
      <Navbar />

      <Hero />

      <Work />

      <About />

      <Experience />

      <Contact />

      <Footer />
    </main>
  );
}
