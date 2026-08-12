"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#f5f4f1] px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Curved top */}
      <div className="absolute -top-20 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-[50%] bg-white" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-medium tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
            Contact
          </h2>

          <div className="mt-5 flex items-center justify-center gap-1">
            <span className="h-px w-10 bg-neutral-500" />

            <span className="text-sm tracking-[0.2em] text-neutral-600">
              <h1>{"///"}</h1>
            </span>

            <span className="h-px w-10 bg-neutral-500" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid gap-14 lg:grid-cols-[1fr_280px] lg:gap-20">
          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="h-14 w-full bg-[#e9e8e5] px-5 text-sm text-neutral-900 outline-none placeholder:text-neutral-500 focus:ring-1 focus:ring-neutral-900"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="E-mail"
                required
                className="h-14 w-full bg-[#e9e8e5] px-5 text-sm text-neutral-900 outline-none placeholder:text-neutral-500 focus:ring-1 focus:ring-neutral-900"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={8}
              required
              className="w-full resize-none bg-[#e9e8e5] px-5 py-5 text-sm text-neutral-900 outline-none placeholder:text-neutral-500 focus:ring-1 focus:ring-neutral-900"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-3 h-14 bg-neutral-950 px-8 text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Success */}
            {status === "success" && (
              <p className="text-sm text-green-700">
                Message sent successfully. I&apos;ll get back to you soon.
              </p>
            )}

            {/* Error */}
            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>

          {/* DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-950">
                Email
              </h3>

              <a
                href="mailto:delightofili0@gmail.com"
                className="text-base text-neutral-500 transition-colors hover:text-neutral-950"
              >
                delightofili0@gmail.com
              </a>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-950">
                Location
              </h3>

              <p className="text-base leading-relaxed text-neutral-500">
                Nigeria
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-950">
                Available for
              </h3>

              <p className="text-base leading-relaxed text-neutral-500">
                Freelance work, collaborations and full-time opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
