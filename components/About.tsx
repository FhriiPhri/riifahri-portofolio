"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Briefcase, Code2, Zap, Volume2 } from "lucide-react";
import { useCallback, useState } from "react";

/* ─ DATA ─────────────────────────────────────────── */

const stats = [
  { value: "10+", label: "Project" },
  { value: "2", label: "Internship" },
  { value: "3×", label: "Game Exhibition" },
  { value: "15+", label: "Technologies" },
];

const experiences = [
  {
    company: "IMP Studio Indonesia",
    role: "Quality Assurance Intern",
    period: "Sep 2025 – Feb 2026",
    current: false,
    desc: "Melakukan software testing pada Project Pronia PLN, mereview ratusan dokumen Project AHU, menyusun laporan hasil pengujian serta berkolaborasi dengan tim QA.",
  },
  {
    company: "IMP Studio Indonesia",
    role: "Web Developer Intern",
    period: "Aug 2025 – Sep 2025",
    current: false,
    desc: "Mengembangkan fitur baru berbasis Laravel, melakukan bug fixing, optimalisasi performa aplikasi, serta deployment bersama tim developer.",
  },
  {
    company: "RISMA DKM Nurul Huda",
    role: "Streaming Operator",
    period: "Mar 2025 – Present",
    current: true,
    desc: "Mengelola live streaming menggunakan OBS Studio, membuat overlay siaran, running text, serta monitoring audio dan video.",
  },
];

const skillGroups = [
  {
    label: "Backend",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    icon: <Code2 size={14} className="text-blue-400" />,
    items: [
      "Laravel",
      "PHP",
      "REST API",
      "MySQL",
    ],
  },

  {
    label: "Frontend",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    icon: <Zap size={14} className="text-cyan-400" />,
    items: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },

  {
    label: "Mobile & Game",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    icon: <Code2 size={14} className="text-purple-400" />,
    items: [
      "Flutter",
      "Dart",
      "Unity",
      "C#",
    ],
  },

  {
    label: "Tools",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    icon: <Code2 size={14} className="text-emerald-400" />,
    items: [
      "Git",
      "GitHub",
      "OBS Studio",
      "Figma",
      "Software Testing",
      "Quality Assurance",
    ],
  },
];

const bioParas = [
  <>
    Saya merupakan lulusan <strong>SMK Taruna Bhakti</strong> jurusan
    komputer dan informatika dengan pengalaman magang sebagai
    <strong> Quality Assurance </strong>dan
    <strong> Web Developer </strong>di IMP Studio Indonesia.
  </>,
  <>
    Saya memiliki pengalaman dalam pengembangan aplikasi
    menggunakan <strong>Laravel</strong>,
    <strong> Flutter</strong>,
    <strong> React</strong>,
    serta software testing dan quality assurance.
  </>,
  <>
    Selain pengembangan web, saya juga mengembangkan game
    menggunakan <strong>Unity</strong> yang telah dipamerkan
    sebanyak <strong>3 kali</strong> pada pameran sekolah.
  </>,
];

/* ─ COMPONENT ─────────────────────────────────────── */

export default function About() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakName = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance("Fahri");
    utterance.lang = "id-ID";
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, []);

  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-24 md:py-28">

      {/* bg glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(230,57,70,0.03) 0%, transparent 70%)", filter: "blur(100px)" }}
      />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(230,57,70,0.03) 0%, transparent 70%)", filter: "blur(90px)" }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3 sm:mb-16 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-white/25"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-slate-300 dark:to-white/25" /> About Me
        </motion.div>

        {/* ── Bio row ── */}
        <div className="mb-16 flex flex-col items-center gap-10 md:mb-20 md:flex-row md:items-start md:gap-14">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-slate-200 dark:border-white/[0.08] sm:h-[180px] sm:w-[180px]"
              style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.02)" }}
            >
              <Image src="/images/profile.jpeg" width={180} height={180} alt="RiiDev"
                className="h-full w-full object-cover object-top" unoptimized
              />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="w-full flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
              className="mb-1 font-[Outfit] text-2xl font-bold text-slate-900 dark:text-white md:text-3xl"
            >
              Muhammad Fahri Ramadhan
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-5"
            >
              <button
                onClick={speakName}
                className="group/speak inline-flex items-center gap-2 rounded-lg px-2 py-1 -ml-2 text-xs text-slate-400 dark:text-white/30 transition-all hover:bg-[#e63946]/10 hover:text-[#e63946] dark:hover:text-[#e63946] cursor-pointer"
                aria-label="Pronounce name: Fahri"
                type="button"
              >
                <span className="font-mono">/fah·ri/</span>
                <Volume2
                  size={14}
                  className={`transition-all ${isSpeaking ? "text-[#e63946] scale-110" : "group-hover/speak:scale-110"}`}
                />
                {isSpeaking && (
                  <span className="flex gap-0.5">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="inline-block h-2 w-0.5 rounded-full bg-[#e63946]"
                        style={{ animation: `soundbar 0.6s ease-in-out ${i * 0.15}s infinite alternate` }}
                      />
                    ))}
                  </span>
                )}
              </button>
            </motion.div>

            {bioParas.map((para, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="mb-4 text-sm leading-7 text-slate-500 dark:text-white/40"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="mb-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/50 py-7 text-center backdrop-blur-sm dark:border-white/[0.07] dark:bg-white/[0.03]"
            >
              <span className="mb-1 font-[Outfit] text-4xl font-black bg-gradient-to-r from-[#e63946] to-[#ff6b6b] bg-clip-text text-transparent">
                {s.value}
              </span>
              <span className="text-[11px] text-slate-400 dark:text-white/30">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* ── Education + Experience ── */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e63946]/20 bg-[#e63946]/10">
                <GraduationCap size={16} className="text-[#e63946]" />
              </div>
              <h3 className="font-[Outfit] text-lg font-bold text-slate-900 dark:text-white">Education</h3>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 backdrop-blur-sm dark:border-white/[0.07] dark:bg-white/[0.03]">
              <p className="mb-0.5 text-[15px] font-semibold text-slate-900 dark:text-white">SMK Taruna Bhakti</p>
              <p className="mb-0.5 text-xs text-slate-500 dark:text-white/50">Teknik Perangkat Lunak dan Pengembangan Game</p>
              <p className="mb-4 text-[11px] text-slate-400 dark:text-white/25">Jul 2023 – Jun 2026</p>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#e63946]/20 bg-[#e63946]/10 px-3 py-1.5 text-xs font-semibold text-[#e63946]">
                Nilai Akhir 84.95 / 100
              </span>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e63946]/20 bg-[#e63946]/10">
                <Briefcase size={16} className="text-[#e63946]" />
              </div>
              <h3 className="font-[Outfit] text-lg font-bold text-slate-900 dark:text-white">Experience</h3>
            </div>

            <div className="flex flex-col">
              {experiences.map((exp, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 pb-6 last:pb-0"
                >
                  {/* dot + line */}
                  <div className="flex flex-col items-center">
                    <div
                      className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full"
                      style={{
                        background: exp.current ? "#e63946" : "#94a3b8",
                        boxShadow: exp.current ? "0 0 12px rgba(230,57,70,0.5)" : "none",
                      }}
                    />
                    {i < experiences.length - 1 && (
                      <div className="mt-1.5 h-full w-px bg-slate-200 dark:bg-white/[0.06]" />
                    )}
                  </div>

                  <div className="flex-1 pb-1">
                    <div className="mb-0.5 flex items-center gap-2">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{exp.company}</p>
                      {exp.current && (
                        <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-500 dark:text-emerald-400">
                          Now
                        </span>
                      )}
                    </div>
                    <p className="mb-0.5 text-[11px] text-slate-500 dark:text-white/40">{exp.role}</p>
                    <p className="mb-2 text-[10px] text-slate-400 dark:text-white/20">{exp.period}</p>
                    <p className="text-[11px] leading-5 text-slate-500 dark:text-white/30">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Skills ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e63946]/20 bg-[#e63946]/10">
              <Code2 size={16} className="text-[#e63946]" />
            </div>
            <h3 className="font-[Outfit] text-lg font-bold text-slate-900 dark:text-white">Skills</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((g, gi) => (
              <motion.div key={g.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + gi * 0.07 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 bg-slate-50/30 p-5 backdrop-blur-sm transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-white/[0.07] dark:bg-white/[0.025] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.04]"
              >
                <div className="mb-3 flex items-center gap-2">
                  {g.icon}
                  <span className={`text-[11px] font-semibold uppercase tracking-wider ${g.color}`}>
                    {g.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((skill, si) => (
                    <motion.span key={skill}
                      initial={{ opacity: 0, scale: 0.75 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + gi * 0.07 + si * 0.04, duration: 0.3 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="cursor-default rounded-lg border border-slate-200 bg-slate-100/50 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-[#e63946]/30 hover:text-[#e63946] dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-white/45 dark:hover:border-white/15 dark:hover:text-white/70"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}