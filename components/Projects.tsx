"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import Image from "next/image";

const featured = [
  {
    id: "dwell",
    year: "2026",
    title: "Dwell: The Middle Unit",
    desc: "Game psychological horror 3D menggunakan Unity dengan latar kontrakan khas Indonesia.",
    tags: ["Unity", "C#", "3D Horror"],
    image: "/images/MIDDLE.png",
    demo: "#",
    code: "#",
    accent: "from-blue-500/5 to-blue-600/5",
    glow: "rgba(59,130,246,.15)",
    dot: "#3b82f6",
  },

  {
    id: "dont-disturb",
    year: "2026",
    title: "Don't Disturb",
    desc: "Game psychological horror pendek bertema komunikasi keluarga.",
    tags: ["Unity", "C#", "Story Game"],
    image: "/images/DND.png",
    demo: "#",
    code: "#",
    accent: "from-blue-500/5 to-blue-600/5",
    glow: "rgba(59,130,246,.15)",
    dot: "#3b82f6",
  },

  {
    id: "sispemtb",
    year: "2026",
    title: "SispemTB",
    desc: "Sistem Peminjaman Laboratorium berbasis Laravel dan Flutter.",
    tags: ["Laravel", "Flutter", "REST API", "MySQL"],
    image: "/images/projects/sispemtb.png",
    demo: "#",
    code: "#",
    accent: "from-blue-500/5 to-blue-600/5",
    glow: "rgba(59,130,246,.15)",
    dot: "#3b82f6",
  },

  {
    id: "overlay",
    year: "2026",
    title: "Overlay Kajian Islami",
    desc: "Overlay live streaming OBS lengkap dengan running text, lower third, countdown, dan layout siaran.",
    tags: ["HTML", "CSS", "JavaScript", "OBS Studio"],
    image: "/images/projects/overlay.png",
    demo: "#",
    code: "https://github.com/RiiDev/overlay-kajian-islam",
    accent: "from-blue-500/5 to-blue-600/5",
    glow: "rgba(59,130,246,.15)",
    dot: "#3b82f6",
  },

  {
    id: "web-masjid",
    year: "2025",
    title: "Web Masjid",
    desc: "Website informasi masjid dengan tampilan modern dan responsif.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: "/images/projects/web-masjid.png",
    demo: "#",
    code: "https://github.com/RiiDev/web-masjid",
    accent: "from-blue-500/5 to-blue-600/5",
    glow: "rgba(59,130,246,.15)",
    dot: "#3b82f6",
  },

  {
    id: "xthreads",
    year: "2025",
    title: "XThreads Mobile",
    desc: "Aplikasi mobile berbasis Flutter dengan UI modern.",
    tags: ["Flutter", "Dart"],
    image: "/images/projects/xthreads.png",
    demo: "#",
    code: "https://github.com/RiiDev/xthreads-mobile",
    accent: "from-blue-500/5 to-blue-600/5",
    glow: "rgba(59,130,246,.15)",
    dot: "#3b82f6",
  },
];

const others = [
  {
    id: "api-alquran",
    emoji: "📖",
    title: "API Al-Quran",
    desc: "API sederhana menggunakan C++.",
    tags: ["C++"],
  },
  {
    id: "food",
    emoji: "🍔",
    title: "Food App",
    desc: "Aplikasi latihan bertema makanan.",
    tags: ["C++"],
  },
  {
    id: "brick",
    emoji: "🎮",
    title: "Brick Breaker Game",
    desc: "Game Brick Breaker menggunakan C++.",
    tags: ["C++"],
  },
  {
    id: "php",
    emoji: "🐘",
    title: "PHP DDG",
    desc: "Website sederhana menggunakan PHP Native.",
    tags: ["PHP"],
  },
  {
    id: "calc",
    emoji: "🧮",
    title: "Kalkulator",
    desc: "Kalkulator sederhana berbasis HTML, CSS, dan JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "newyear",
    emoji: "🎉",
    title: "Project Tahun Baru",
    desc: "Mini project HTML/CSS.",
    tags: ["HTML"],
  },
];

function FeaturedCard({ p, i }: { p: typeof featured[0]; i: number }) {
  const flip = i % 2 === 1;
  return (
    <motion.div
      id={p.id}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${p.accent} p-7 dark:border-white/[0.07] md:p-9`}
    >
      {/* top glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-60 -translate-x-1/2 rounded-full"
        style={{ background: `radial-gradient(circle, ${p.glow}, transparent)`, filter: "blur(50px)" }}
      />

      {/* bottom glow line on hover */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 rounded-b-2xl transition-all duration-700 group-hover:w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${p.dot}, transparent)` }}
      />

      <div className={`relative z-10 flex flex-col gap-8 ${flip ? "md:flex-row-reverse" : "md:flex-row"} md:items-start`}>
        {/* text */}
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-2 text-xs text-slate-400 dark:text-white/30">
            <Layers size={12} />
            {p.year}
          </div>
          <h3 className="mb-3 font-[Outfit] text-2xl font-bold text-slate-900 transition-colors group-hover:text-[#e63946] dark:text-white dark:group-hover:text-[#e63946] md:text-3xl">
            {p.title}
          </h3>
          <p className="mb-5 max-w-lg text-sm leading-7 text-slate-500 dark:text-white/40">{p.desc}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-lg border border-slate-200 bg-slate-100/50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-white/50">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}
              href={p.demo} target="_blank" id={`${p.id}-demo`}
              className="flex items-center gap-2 rounded-xl bg-[#e63946] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(230,57,70,0.3)] transition hover:bg-[#c1121f] hover:shadow-[0_6px_24px_rgba(230,57,70,0.5)]"
            >
              <ExternalLink size={13} /> Live Demo
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}
              href={p.code} target="_blank" id={`${p.id}-code`}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100/50 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-white/20 dark:hover:text-white"
            >
              <Github size={13} /> Code
            </motion.a>
          </div>
        </div>

        {/* image */}
        <motion.div
          whileHover={{ scale: 1.03, rotate: 0.4 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="w-full overflow-hidden rounded-xl border border-slate-200 dark:border-white/[0.08] md:w-[320px] lg:w-[360px]"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.15)" }}
        >
          <Image src={p.image} width={360} height={220} alt={p.title}
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function OtherCard({ p, i }: { p: typeof others[0]; i: number }) {
  return (
    <motion.div
      id={p.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/30 p-6 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 dark:border-white/[0.07] dark:bg-white/[0.025] dark:hover:border-white/[0.13] dark:hover:bg-white/[0.045]"
    >
      <div className="absolute bottom-0 left-0 h-[1.5px] w-0 rounded-b-2xl bg-gradient-to-r from-transparent via-[#e63946] to-transparent transition-all duration-500 group-hover:w-full" />

      <div>
        <div className="mb-4 flex items-start justify-between">
          <span className="text-3xl">{p.emoji}</span>
          <a href="#" id={`${p.id}-link`}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-100/50 text-slate-400 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-slate-700 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-white/30 dark:group-hover:text-white/70"
          >
            <ExternalLink size={13} />
          </a>
        </div>
        <h4 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">{p.title}</h4>
        <p className="text-[13px] leading-6 text-slate-500 dark:text-white/35">{p.desc}</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="rounded-md border border-slate-200 bg-slate-100/50 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-white/40">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-28">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(230,57,70,0.04) 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* Section label */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-white/25"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-slate-300 dark:to-white/25" /> Featured Projects
        </motion.div>

        {/* Featured */}
        <div className="mb-24 flex flex-col gap-6">
          {featured.map((p, i) => <FeaturedCard key={p.id} p={p} i={i} />)}
        </div>

        {/* Other label */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-white/25"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-slate-300 dark:to-white/25" /> Other Projects
        </motion.div>

        {/* Other grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((p, i) => <OtherCard key={p.id} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}