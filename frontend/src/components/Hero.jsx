import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { SOCIALS } from "../data/content";

const ease = [0.22, 1, 0.36, 1];

export const Hero = () => {
    const shouldReduceMotion = useReducedMotion();

    const getInitial = (y = 22) => (shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y });
    const getTransition = (delay = 0, duration = 0.7) =>
        shouldReduceMotion ? { duration: 0 } : { duration, delay, ease };

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20">
            {/* Fluid Marble Background with Atmospheric Overlays - Matching Reference Ditto */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                {/* Landscape-oriented fluid marble artwork */}
                <img
                    src="/assets/hero-marble.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center select-none"
                />
                {/* Soft dark wash on the left to guarantee crisp text legibility while keeping the marble vividly visible */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#171624]/90 from-5% via-[#171624]/60 via-42% to-transparent" />
                {/* Soft top and bottom fades for natural integration */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#171624]/40 via-transparent via-60% to-[#171624]/90" />
            </div>

            <div className="section-shell relative z-10 w-full">
                <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
                    {/* Left Column: Hero Narrative */}
                    <div>
                        {/* Heading Block */}
                        <motion.div
                            initial={getInitial(22)}
                            animate={{ opacity: 1, y: 0 }}
                            transition={getTransition(0, 0.7)}
                        >
                            {/* Small introductory label */}
                            <p
                                className="font-mono-tech text-xs uppercase tracking-[0.22em] text-rose"
                                data-testid="hero-eyebrow"
                            >
                                ECS UNDERGRAD · SIESGST · NAVI MUMBAI
                            </p>

                            {/* Main Headline */}
                            <h1
                                className="mt-4 font-display text-4xl xs:text-5xl sm:text-6xl lg:text-[3.6rem] xl:text-[3.85rem] font-bold leading-none tracking-tight text-txt"
                                data-testid="hero-name"
                            >
                                Mansi Gole
                            </h1>
                        </motion.div>

                        {/* Supporting Tagline & Introduction - Staggered */}
                        <motion.div
                            initial={getInitial(22)}
                            animate={{ opacity: 1, y: 0 }}
                            transition={getTransition(0.15, 0.7)}
                        >
                            <p className="mt-4 font-display text-lg sm:text-xl lg:text-[22px] font-semibold tracking-tight text-txt2">
                                Full-Stack Developer <span className="text-rose font-normal">|</span> Backend &amp; Web3 Enthusiast
                            </p>

                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-txt2 sm:text-base">
                                Electronics &amp; Computer Science engineering student building reliable backend systems, distributed architectures, and full-stack Web3 applications.
                            </p>
                        </motion.div>

                        {/* Buttons & Socials - Staggered */}
                        <motion.div
                            initial={getInitial(22)}
                            animate={{ opacity: 1, y: 0 }}
                            transition={getTransition(0.28, 0.7)}
                            className="mt-8 flex flex-wrap items-center gap-4"
                        >
                            <a
                                href="#projects"
                                data-testid="hero-view-projects-btn"
                                className="inline-flex items-center gap-2 rounded-lg bg-rose px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-[#f0bab0] active:scale-[0.98]"
                            >
                                View Projects <ArrowRight size={15} />
                            </a>
                            <a
                                href="/assets/Mansi-Gole-Resume.pdf"
                                download="Mansi-Gole-Resume.pdf"
                                data-testid="hero-download-resume-btn"
                                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface/30 px-5 py-3 text-sm text-txt transition-colors duration-200 hover:border-rose hover:text-rose active:scale-[0.98]"
                            >
                                <FileText size={15} /> Download Resume
                            </a>
                            <div className="flex items-center gap-1.5 pl-1">
                                {[
                                    { href: SOCIALS.github, icon: Github, label: "GitHub", testid: "hero-social-github" },
                                    { href: SOCIALS.linkedin, icon: Linkedin, label: "LinkedIn", testid: "hero-social-linkedin" },
                                    { href: `mailto:${SOCIALS.email}`, icon: Mail, label: "Email", testid: "hero-social-email" },
                                ].map(({ href, icon: Icon, label, testid }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={href.startsWith("http") ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        data-testid={testid}
                                        className="flex h-11 w-11 items-center justify-center rounded-lg text-txt3 transition-colors duration-200 hover:text-rose hover:bg-surface/30 active:scale-95"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Refined Profile Panel */}
                    <motion.div
                        initial={getInitial(22)}
                        animate={{ opacity: 1, y: 0 }}
                        transition={getTransition(0.35, 0.75)}
                        className="relative mx-auto w-full max-w-sm lg:max-w-none"
                        data-testid="hero-profile-card"
                    >
                        {/* Top-left angled corner bracket accent */}
                        <div
                            className="pointer-events-none absolute -top-3 -left-3 h-14 w-14 rounded-tl-xl border-l-2 border-t-2 border-rose/60"
                            aria-hidden="true"
                        />

                        {/* Card container */}
                        <div className="relative rounded-2xl border border-line/70 bg-[#1F1D36]/85 p-6 shadow-2xl backdrop-blur-md sm:p-7">
                            {/* Photograph with rounded corners */}
                            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-line/60 bg-surface">
                                <img
                                    src="/assets/mansi-profile.jpg"
                                    alt="Mansi Gole"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>

                            {/* Compact metadata table */}
                            <div className="mt-6 space-y-2.5 font-mono-tech text-[11px] uppercase tracking-[0.14em]">
                                <div className="flex justify-between gap-4">
                                    <span className="text-txt3">ROLE</span>
                                    <span className="text-right text-txt2">FULL-STACK &amp; BACKEND</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-txt3">FOCUS</span>
                                    <span className="text-right text-txt2">WEB3 · DISTRIBUTED SYS</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-txt3">BASE</span>
                                    <span className="text-right text-txt2">NAVI MUMBAI, IN</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-txt3">STATUS</span>
                                    <span className="text-right text-txt2">OPEN TO OPPORTUNITIES</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
