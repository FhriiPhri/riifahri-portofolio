"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("");
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);

        const ids = ["projects", "about", "contact"];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-35% 0px -55% 0px" }
        );
        ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });

        return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={[
                "fixed inset-x-0 top-0 z-50 transition-all duration-500",
                scrolled
                    ? "border-b border-black/5 dark:border-white/[0.06] bg-white/80 dark:bg-[#06060f]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                    : "bg-transparent",
            ].join(" ")}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
                {/* Logo */}
                <a href="/" className="font-[Outfit] text-xl font-black tracking-tight text-slate-900 dark:text-white">
                    <span className="text-[#e63946]">RiiDev</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-6 md:flex">
                    {links.map(({ label, href }) => {
                        const id = href.slice(1);
                        const isActive = active === id;
                        return (
                            <a key={label} href={href}
                                className={[
                                    "relative rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                                    isActive ? "text-[#e63946] dark:text-white" : "text-slate-600 dark:text-[#9090aa] hover:text-slate-900 dark:hover:text-white/80",
                                ].join(" ")}
                            >
                                {isActive && (
                                    <motion.span layoutId="nav-pill"
                                        className="absolute inset-0 rounded-xl bg-[#e63946]/10 dark:bg-white/[0.07]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10">{label}</span>
                            </a>
                        );
                    })}

                    <a href="/CV.pdf" target="_blank"
                        className="ml-4 rounded-xl bg-[#e63946] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#c1121f] hover:shadow-[0_0_20px_rgba(230,57,70,0.4)]"
                        id="nav-resume"
                    >
                        Download CV
                    </a>

                    {/* Theme Toggle */}
                    {mounted && (
                        <button
                            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                            className="ml-2 flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-black/5 text-slate-600 hover:text-slate-900 hover:bg-black/10 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-white/60 dark:hover:text-white/80 dark:hover:border-white/20 transition-all"
                            aria-label="Toggle Theme"
                        >
                            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    )}
                </nav>

                {/* Mobile controls */}
                <div className="flex items-center gap-3 md:hidden">
                    {/* Theme Toggle Mobile */}
                    {mounted && (
                        <button
                            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                            className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-black/5 text-slate-600 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-white/60"
                            aria-label="Toggle Theme"
                        >
                            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    )}

                    {/* Mobile burger */}
                    <motion.button
                        id="nav-toggle"
                        onClick={() => setOpen(!open)}
                        whileTap={{ scale: 0.88 }}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-black/5 text-slate-600 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-white/60"
                        aria-label="Toggle navigation"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {open
                                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={18} /></motion.span>
                                : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={18} /></motion.span>
                            }
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-black/5 bg-white/95 dark:border-white/[0.05] dark:bg-[#06060f]/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col gap-1 p-4">
                            {links.map(({ label, href }, i) => (
                                <motion.a key={label} href={href}
                                    onClick={() => setOpen(false)}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-black/5 hover:text-slate-900 dark:text-white/60 dark:hover:bg-white/[0.04] dark:hover:text-white transition"
                                >
                                    {label}
                                </motion.a>
                            ))}
                            <motion.a href="/CV.pdf" target="_blank"
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: links.length * 0.06 }}
                                className="mt-2 rounded-xl bg-[#e63946] px-4 py-3 text-center text-sm font-semibold text-white"
                            >
                                Resume
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}