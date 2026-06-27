"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    id: "linkedin",
    href: "https://linkedin.com/in/muhammad-fahri-ramadhan-8886a337a",
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
  },
  {
    id: "github",
    href: "https://github.com/FhriiPhri", // ganti kalau username beda
    icon: <Github size={18} />,
    label: "GitHub",
  },
  {
    id: "mail",
    href: "mailto:riiwayatdev@gmail.com",
    icon: <Mail size={18} />,
    label: "Email",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24 md:py-28">

      {/* glow bottom center */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[480px] w-[700px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(230,57,70,0.04) 0%, transparent 75%)", filter: "blur(80px)" }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3 sm:mb-16 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-white/25"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-slate-300 dark:to-white/25" /> Say Hi
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-white/[0.07] dark:bg-white/[0.025] sm:p-8 md:p-16"
        >
          {/* decorative orbs inside card */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(230,57,70,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
          />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(230,57,70,0.05) 0%, transparent 70%)", filter: "blur(50px)" }}
          />

          {/* Top border line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e63946]/30 to-transparent" />

          <div className="relative z-10">
            {/* heading */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 font-[Outfit] text-3xl font-black leading-[1.1] text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Let&apos;s Work{" "}
              <span className="text-[#e63946]">
                Together
              </span>
              <br />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}
              className="mb-10 max-w-xl text-sm leading-7 text-slate-500 dark:text-white/40"
            >
              Saya selalu terbuka untuk kesempatan magang, full-time,
              freelance, maupun kolaborasi dalam pengembangan
              website, aplikasi mobile, dan game.

              Jangan ragu untuk menghubungi saya apabila
              ingin berdiskusi mengenai sebuah proyek atau peluang kerja.
            </motion.p>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.3 }}
              className="mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}
                href="mailto:riiwayatdev@gmail.com"
                id="contact-email"
                className="group inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-2xl bg-[#e63946] px-5 py-4 text-center text-sm font-semibold text-white sm:px-7 sm:text-base shadow-[0_6px_32px_rgba(230,57,70,0.35)] transition hover:bg-[#c1121f] hover:shadow-[0_10px_48px_rgba(230,57,70,0.55)]"
              >
                <Mail size={18} />
                riiwayatdev@gmail.com
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </motion.div>

            {/* Secondary links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}
                href="/CV.pdf" target="_blank" id="contact-resume"
                className="rounded-xl border border-slate-200 bg-slate-100/50 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.05] dark:text-white/60 dark:hover:border-white/20 dark:hover:text-white"
              >
                Download CV
              </motion.a>

              {socials.map((s) => (
                <motion.a key={s.id}
                  id={s.id} href={s.href} target="_blank" aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.12 }} whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100/50 text-slate-400 transition hover:border-[#e63946]/30 hover:text-[#e63946] dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-white/35 dark:hover:border-[#e63946]/30 dark:hover:text-white/80"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-10 text-[11px] text-slate-400 dark:border-white/[0.05] dark:text-white/25 md:flex-row"
        >
          <span>
            Designed & Developed by Muhammad{" "}
            <span className="text-[#e63946] font-bold">
              Fahri
            </span>
            {" "}
            Ramadhan
          </span>
          <span className="text-slate-400 dark:text-white/20">© {new Date().getFullYear()} Muhammad RiiDev. All rights reserved.</span>
        </motion.div>
      </div>
    </section>
  );
}