"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Download } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const stack = ["Next.js", "React", "TypeScript", "Unity (C#)", "Laravel", "Tailwind CSS"];

const socials = [
    { href: "https://www.linkedin.com/in/muhammad-fahri-ramadhan-8886a337a", icon: <Linkedin size={18} />, id: "hero-li" },
    { href: "https://github.com/FhriiPhri", icon: <Github size={18} />, id: "hero-gh" },
    { href: "mailto:riiwayatdev@gmail.com", icon: <Mail size={18} />, id: "hero-mail" },
];

export default function Hero() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

    return (
        <section ref={ref} id="home"
            className="relative flex min-h-[100svh] items-center overflow-hidden"
            style={{ padding: 0 }}
        >

            {/* Grid overlay */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025]"
                    style={{
                        backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                        maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)",
                    }}
                />
            </div>

            {/* ── Main content ── */}
            <motion.div style={{ opacity: fade }} className="relative z-10 w-full">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-5 pt-24 pb-20 sm:px-6 md:flex-row md:items-center md:gap-16 md:px-10 lg:gap-20">

                    {/* LEFT TEXT */}
                    <div className="w-full flex-1 text-center md:text-left">

                        {/* Available badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-slate-600 dark:text-white/60 backdrop-blur-sm"
                        >
                            <Sparkles size={11} className="text-[#e63946]" />
                            Available for opportunities
                            <span className="ml-0.5 inline-block h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
                        </motion.div>

                        {/* Name heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-4 font-[Outfit] text-4xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white min-[380px]:text-5xl sm:text-6xl lg:text-7xl"
                        >
                            Hello, I&apos;m{" "}
                            <span className="block">Muhammad Fahri</span>
                            <span className="block bg-gradient-to-r from-[#e63946] to-[#ff6b6b] bg-clip-text text-transparent">
                                Ramadhan.
                            </span>
                        </motion.h1>

                        {/* Typewriter subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="mb-3 text-base text-slate-600 dark:text-white/60 sm:text-lg"
                        >
                            I&apos;m a{" "}
                            <span className="font-semibold text-slate-900 dark:text-white">
                                <TypeAnimation
                                    sequence={["Software Engineer", 2200, "Web Developer", 2200, "Unity Game Developer", 2200, "QA Engineer", 2200]}
                                    wrapper="span" repeat={Infinity}
                                />
                            </span>{" "}
                            based in <span className="font-semibold text-slate-900 dark:text-white">Depok.</span>
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="mx-auto mb-8 max-w-[500px] text-sm leading-7 text-slate-500 dark:text-white/40 md:mx-0"
                        >
                            Lulusan Teknik Perangkat Lunak yang passionate di{" "}
                            <span className="text-slate-700 dark:text-white/70">Software Development</span> dan{" "}
                            <span className="text-slate-700 dark:text-white/70">Game Development</span>. Punya pengalaman membangun web, mobile & game dengan teknologi modern.
                        </motion.p>

                        {/* Stack tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.55 }}
                            className="mb-8 flex flex-wrap justify-center gap-2 md:justify-start"
                        >
                            {stack.map((tech, i) => (
                                <motion.span key={tech}
                                    initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.65 + i * 0.07, duration: 0.35 }}
                                    whileHover={{ y: -3, scale: 1.06 }}
                                    className="cursor-default rounded-lg border border-black/10 bg-black/5 dark:border-white/[0.08] dark:bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-white/60 transition-colors hover:border-[#e63946]/30 hover:text-slate-900 dark:hover:text-white/90"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.65 }}
                            className="flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center md:justify-start"
                        >
                            <motion.a whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                                href="/CV.pdf" target="_blank" id="hero-cv"
                                className="flex items-center justify-center gap-2 rounded-xl bg-[#e63946] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(230,57,70,0.35)] transition hover:bg-[#c1121f] hover:shadow-[0_6px_32px_rgba(230,57,70,0.55)]"
                            >
                                <Download size={15} /> Download CV
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                                href="#projects" id="hero-work"
                                className="flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-black/5 dark:border-white/[0.1] dark:bg-white/[0.04] px-6 py-3 text-sm font-medium text-slate-700 dark:text-white/80 backdrop-blur-sm transition hover:border-black/20 hover:text-slate-900 dark:hover:border-white/20 dark:hover:text-white"
                            >
                                See My Work
                            </motion.a>
                            <div className="flex gap-2">
                                {socials.map((s) => (
                                    <motion.a key={s.id} id={s.id} href={s.href} target="_blank"
                                        whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.9 }}
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/5 dark:border-white/[0.08] dark:bg-white/[0.04] text-slate-600 dark:text-white/60 backdrop-blur-sm transition hover:border-[#e63946]/30 hover:text-[#e63946] dark:hover:text-white/90"
                                    >
                                        {s.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT — PHOTO */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.88, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-[280px] flex-shrink-0 sm:max-w-[300px] md:w-auto"
                    >
                        {/* glow halo */}
                        <div
                            className="absolute -inset-10 rounded-full opacity-50 dark:opacity-70"
                            style={{ background: "radial-gradient(circle, rgba(230,57,70,0.25) 0%, transparent 65%)", filter: "blur(40px)" }}
                        />

                        {/* animated ring */}
                        <div className="absolute -inset-[3px] z-10 rounded-full bg-gradient-to-br from-[#e63946] via-[#ff6b6b] to-[#e63946] opacity-60 dark:opacity-80 animate-[spin_8s_linear_infinite]" />
                        <div className="absolute -inset-[1px] z-10 rounded-full bg-white dark:bg-[#06060f]" />

                        {/* photo frame */}
                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: "spring", stiffness: 200, damping: 22 }}
                            className="relative z-20 aspect-square w-full overflow-hidden rounded-full border-2 border-white/20 dark:border-white/[0.08]"
                            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.06)" }}
                        >
                            <Image src="/images/profile.jpeg" width={300} height={300} alt="Muhammad RiiDev"
                                className="h-full w-full object-cover object-top" priority unoptimized
                            />
                            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-white/5" />
                        </motion.div>

                        {/* Floating chip — top right */}
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: [0, -7, 0] }}
                            transition={{ delay: 1.1, duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 top-2 z-30 sm:-right-8 flex items-center gap-2 rounded-2xl border border-black/10 bg-white/90 dark:border-white/10 dark:bg-[#0e0e1c]/90 px-3 py-2 text-xs font-medium text-slate-700 dark:text-white/80 shadow-xl backdrop-blur-xl"
                        >
                            🎮 Game Dev
                        </motion.div>

                        {/* Floating chip — bottom left */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: [0, 7, 0] }}
                            transition={{ delay: 1.4, duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-4 bottom-2 z-30 sm:-left-8 flex items-center gap-2 rounded-2xl border border-black/10 bg-white/90 dark:border-white/10 dark:bg-[#0e0e1c]/90 px-3 py-2 text-xs font-medium text-slate-700 dark:text-white/80 shadow-xl backdrop-blur-xl"
                        >
                            💼 Open to Work
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll cue */}
            <motion.a href="#projects" id="hero-scroll" aria-label="Scroll down"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-600 dark:text-white/30 dark:hover:text-white/60 transition"
            >
                <span className="text-[9px] uppercase tracking-[0.2em]">scroll</span>
                <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
                    <ChevronDown size={18} />
                </motion.div>
            </motion.a>
        </section>
    );
}