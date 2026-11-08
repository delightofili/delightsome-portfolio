"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import Magnetic from "./Magnetic";

const empty = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error((await res.json()).error);
      setStatus("success");
      setForm(empty);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-2xl border-2 border-white/30 bg-white/10 px-5 py-4 text-white outline-none transition-colors placeholder:text-white/60 focus:border-white focus:bg-white/15";

  return (
    <section
      id="contact"
      data-cursor-light
      className="bg-brand px-5 py-28 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white/80">
            <span className="h-px w-8 bg-white/80" /> Contact
          </p>
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-7xl">
            Let&apos;s build something that matters.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-white/85">
            A clinic tool, a hospital system or any fullstack product. Roles,
            freelance and collaborations are all welcome.
          </p>

          <div className="mt-10 space-y-4">
            <Magnetic strength={0.2}>
              <a
                href="mailto:delightofili0@gmail.com"
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-ink"
              >
                <Mail size={18} className="text-brand" />
                delightofili0@gmail.com
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Magnetic>
            <p className="flex items-center gap-2 pl-2 font-semibold text-white/85">
              <MapPin size={18} /> Enugu, Nigeria · working remotely worldwide
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 self-end"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              required
              className={field}
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Your email"
              required
              className={field}
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Tell me about the project"
            rows={6}
            required
            className={`${field} resize-none`}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-ink px-8 py-5 font-semibold text-white transition-colors hover:bg-white hover:text-ink disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send message"}
            <Send
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          {/* aria-live reads the result out for screen reader users */}
          <p aria-live="polite" className="min-h-6 font-semibold">
            {status === "success" && "Message sent. I'll get back to you soon."}
            {status === "error" &&
              "Something went wrong. Please email me directly."}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
