import { Reveal } from "./Reveal";
import { Code2, LayoutTemplate, Server, Database, Blocks, Wrench } from "lucide-react";
import { SKILL_CATEGORIES } from "../data/content";

/* --- Custom Isometric Thematic Vector Illustrations matching Reference --- */

const CodeEditorIllustration = () => (
    <svg viewBox="0 0 320 170" className="w-full max-w-[245px] sm:max-w-[260px] select-none opacity-90 transition-transform duration-500 group-hover:scale-[1.02]" fill="none">
        <defs>
            <linearGradient id="codeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3F3351" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#1F1D36" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="codeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E9A6A6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#864879" stopOpacity="0.2" />
            </linearGradient>
        </defs>

        {/* Back Window */}
        <g transform="translate(42, 10) skewX(-14) skewY(6) scale(0.9)">
            <rect width="230" height="120" rx="10" fill="url(#codeGrad1)" stroke="#494052" strokeWidth="1.2" />
            <circle cx="16" cy="14" r="3" fill="#E9A6A6" fillOpacity="0.5" />
            <circle cx="26" cy="14" r="3" fill="#864879" fillOpacity="0.5" />
            <circle cx="36" cy="14" r="3" fill="#494052" />
            <line x1="16" y1="36" x2="80" y2="36" stroke="#E9A6A6" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
            <line x1="16" y1="48" x2="130" y2="48" stroke="#B9AFBE" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <line x1="28" y1="60" x2="150" y2="60" stroke="#E9A6A6" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <line x1="28" y1="72" x2="100" y2="72" stroke="#B9AFBE" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <line x1="16" y1="84" x2="55" y2="84" stroke="#864879" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </g>

        {/* Front Window */}
        <g transform="translate(12, 34) skewX(-14) skewY(6)">
            <rect width="245" height="122" rx="10" fill="#1F1D36" fillOpacity="0.96" stroke="#E9A6A6" strokeWidth="1.2" strokeOpacity="0.4" />
            <rect x="0" y="0" width="245" height="24" rx="10" fill="#292538" />
            <circle cx="16" cy="12" r="3.5" fill="#E9A6A6" />
            <circle cx="27" cy="12" r="3.5" fill="#864879" />
            <circle cx="38" cy="12" r="3.5" fill="#494052" />
            {/* Syntax lines */}
            <line x1="16" y1="42" x2="65" y2="42" stroke="#E9A6A6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="74" y1="42" x2="140" y2="42" stroke="#F7F2F5" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="28" y1="56" x2="105" y2="56" stroke="#B9AFBE" strokeWidth="2" strokeLinecap="round" />
            <line x1="115" y1="56" x2="175" y2="56" stroke="#E9A6A6" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <line x1="28" y1="70" x2="85" y2="70" stroke="#864879" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="84" x2="155" y2="84" stroke="#F7F2F5" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
            <line x1="40" y1="98" x2="125" y2="98" stroke="url(#codeGlow)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="16" y1="110" x2="45" y2="110" stroke="#864879" strokeWidth="2" strokeLinecap="round" />
        </g>
    </svg>
);

const FrontendIllustration = () => (
    <svg viewBox="0 0 130 130" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 select-none opacity-85 transition-transform duration-500 group-hover:scale-105" fill="none">
        {/* Layer 3 (bottom) */}
        <g transform="translate(15, 68) skewX(-25) skewY(12)">
            <rect width="75" height="42" rx="6" fill="#1F1D36" stroke="#494052" strokeWidth="1.2" />
            <line x1="10" y1="12" x2="40" y2="12" stroke="#864879" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        </g>
        {/* Layer 2 (middle) */}
        <g transform="translate(25, 42) skewX(-25) skewY(12)">
            <rect width="75" height="42" rx="6" fill="#292538" stroke="#864879" strokeWidth="1.2" strokeOpacity="0.7" />
            <line x1="10" y1="12" x2="35" y2="12" stroke="#E9A6A6" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <line x1="10" y1="22" x2="60" y2="22" stroke="#494052" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        {/* Layer 1 (top) */}
        <g transform="translate(35, 16) skewX(-25) skewY(12)">
            <rect width="75" height="42" rx="6" fill="#342D40" stroke="#E9A6A6" strokeWidth="1.4" />
            <circle cx="12" cy="11" r="3" fill="#E9A6A6" />
            <line x1="20" y1="11" x2="50" y2="11" stroke="#F7F2F5" strokeWidth="2" strokeLinecap="round" />
            <rect x="10" y="20" width="25" height="13" rx="3" fill="#1F1D36" stroke="#494052" />
            <rect x="40" y="20" width="25" height="13" rx="3" fill="#1F1D36" stroke="#494052" />
        </g>
    </svg>
);

const BackendIllustration = () => (
    <svg viewBox="0 0 130 130" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 select-none opacity-85 transition-transform duration-500 group-hover:scale-105" fill="none">
        {/* Server Blade 3 (bottom) */}
        <g transform="translate(15, 75)">
            <path d="M45 0 L90 18 L45 36 L0 18 Z" fill="#342D40" stroke="#494052" strokeWidth="1" />
            <path d="M0 18 L45 36 L45 50 L0 32 Z" fill="#1F1D36" stroke="#494052" strokeWidth="1" />
            <path d="M45 36 L90 18 L90 32 L45 50 Z" fill="#292538" stroke="#494052" strokeWidth="1" />
            <line x1="8" y1="24" x2="32" y2="33" stroke="#E9A6A6" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <circle cx="38" cy="36" r="1.5" fill="#E9A6A6" />
        </g>
        {/* Server Blade 2 (middle) */}
        <g transform="translate(15, 47)">
            <path d="M45 0 L90 18 L45 36 L0 18 Z" fill="#342D40" stroke="#494052" strokeWidth="1" />
            <path d="M0 18 L45 36 L45 50 L0 32 Z" fill="#1F1D36" stroke="#494052" strokeWidth="1" />
            <path d="M45 36 L90 18 L90 32 L45 50 Z" fill="#292538" stroke="#494052" strokeWidth="1" />
            <line x1="8" y1="24" x2="32" y2="33" stroke="#E9A6A6" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
            <circle cx="38" cy="36" r="1.5" fill="#E9A6A6" />
        </g>
        {/* Server Blade 1 (top) */}
        <g transform="translate(15, 19)">
            <path d="M45 0 L90 18 L45 36 L0 18 Z" fill="#3F3351" stroke="#E9A6A6" strokeWidth="1.2" strokeOpacity="0.8" />
            <path d="M0 18 L45 36 L45 50 L0 32 Z" fill="#1F1D36" stroke="#494052" strokeWidth="1" />
            <path d="M45 36 L90 18 L90 32 L45 50 Z" fill="#292538" stroke="#494052" strokeWidth="1" />
            <line x1="8" y1="24" x2="32" y2="33" stroke="#E9A6A6" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="38" cy="36" r="1.8" fill="#E9A6A6" />
        </g>
    </svg>
);

const DatabaseIllustration = () => (
    <svg viewBox="0 0 130 130" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 select-none opacity-85 transition-transform duration-500 group-hover:scale-105" fill="none">
        {/* Cylinder 3 (bottom) */}
        <g transform="translate(30, 68)">
            <path d="M0 12 C0 22 65 22 65 12 L65 30 C65 40 0 40 0 30 Z" fill="#1F1D36" stroke="#494052" strokeWidth="1.2" />
            <ellipse cx="32.5" cy="12" rx="32.5" ry="9" fill="#292538" stroke="#494052" strokeWidth="1.2" />
            <path d="M0 17 C15 24 50 24 65 17" stroke="#E9A6A6" strokeWidth="1.5" strokeOpacity="0.6" />
        </g>
        {/* Cylinder 2 (middle) */}
        <g transform="translate(30, 42)">
            <path d="M0 12 C0 22 65 22 65 12 L65 30 C65 40 0 40 0 30 Z" fill="#1F1D36" stroke="#494052" strokeWidth="1.2" />
            <ellipse cx="32.5" cy="12" rx="32.5" ry="9" fill="#342D40" stroke="#864879" strokeWidth="1.2" />
            <path d="M0 17 C15 24 50 24 65 17" stroke="#E9A6A6" strokeWidth="1.5" strokeOpacity="0.8" />
        </g>
        {/* Cylinder 1 (top) */}
        <g transform="translate(30, 16)">
            <path d="M0 12 C0 22 65 22 65 12 L65 30 C65 40 0 40 0 30 Z" fill="#292538" stroke="#494052" strokeWidth="1.2" />
            <ellipse cx="32.5" cy="12" rx="32.5" ry="9" fill="#3F3351" stroke="#E9A6A6" strokeWidth="1.4" />
            <ellipse cx="32.5" cy="12" rx="18" ry="5" fill="#1F1D36" stroke="#864879" strokeWidth="1" />
        </g>
    </svg>
);

const Web3Illustration = () => (
    <svg viewBox="0 0 130 130" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 select-none opacity-85 transition-transform duration-500 group-hover:scale-105" fill="none">
        {/* Dashed connecting node links */}
        <line x1="42" y1="42" x2="80" y2="28" stroke="#E9A6A6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.75" />
        <line x1="80" y1="28" x2="88" y2="70" stroke="#E9A6A6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.75" />
        <line x1="42" y1="42" x2="88" y2="70" stroke="#864879" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

        {/* Cube 1 (Top Right) */}
        <g transform="translate(65, 12) scale(0.65)">
            <path d="M28 0 L56 14 L28 28 L0 14 Z" fill="#3F3351" stroke="#E9A6A6" strokeWidth="1.2" />
            <path d="M0 14 L28 28 L28 56 L0 42 Z" fill="#1F1D36" stroke="#E9A6A6" strokeWidth="1.2" />
            <path d="M28 28 L56 14 L56 42 L28 56 Z" fill="#292538" stroke="#E9A6A6" strokeWidth="1.2" />
        </g>

        {/* Cube 2 (Left) */}
        <g transform="translate(22, 26) scale(0.78)">
            <path d="M28 0 L56 14 L28 28 L0 14 Z" fill="#342D40" stroke="#864879" strokeWidth="1.2" />
            <path d="M0 14 L28 28 L28 56 L0 42 Z" fill="#1F1D36" stroke="#494052" strokeWidth="1.2" />
            <path d="M28 28 L56 14 L56 42 L28 56 Z" fill="#292538" stroke="#494052" strokeWidth="1.2" />
            <circle cx="28" cy="28" r="3" fill="#E9A6A6" />
        </g>

        {/* Cube 3 (Bottom Right) */}
        <g transform="translate(70, 54) scale(0.92)">
            <path d="M28 0 L56 14 L28 28 L0 14 Z" fill="#3F3351" stroke="#E9A6A6" strokeWidth="1.4" />
            <path d="M0 14 L28 28 L28 56 L0 42 Z" fill="#1F1D36" stroke="#E9A6A6" strokeWidth="1.4" />
            <path d="M28 28 L56 14 L56 42 L28 56 Z" fill="#292538" stroke="#E9A6A6" strokeWidth="1.4" />
            <circle cx="28" cy="28" r="3.5" fill="#E9A6A6" />
        </g>
    </svg>
);

const ToolsIllustration = () => (
    <svg viewBox="0 0 190 100" className="w-28 h-16 sm:w-36 sm:h-20 shrink-0 select-none opacity-85 transition-transform duration-500 group-hover:scale-105" fill="none">
        {/* Soft ambient backlight */}
        <ellipse cx="110" cy="55" rx="55" ry="22" fill="#864879" fillOpacity="0.25" filter="blur(8px)" />
        {/* Angled Laptop */}
        <g transform="translate(18, 18)">
            {/* Base */}
            <path d="M20 45 L105 45 L130 62 L5 62 Z" fill="#1F1D36" stroke="#494052" strokeWidth="1.2" />
            <polygon points="56,54 80,54 77,59 53,59" fill="#292538" stroke="#494052" strokeWidth="0.8" />
            <polygon points="26,47 98,47 105,52 20,52" fill="#292538" stroke="#342D40" strokeWidth="0.8" />
            {/* Screen Lid */}
            <path d="M62 6 L138 12 L105 45 L28 40 Z" fill="#292538" stroke="#E9A6A6" strokeWidth="1.3" strokeOpacity="0.8" />
            <polygon points="65,9 135,15 103,43 32,38" fill="#171624" />
            {/* Rose accent insignia */}
            <circle cx="84" cy="26" r="5.5" stroke="#E9A6A6" strokeWidth="1.4" fill="none" opacity="0.9" />
            <path d="M81 30 C81 27 87 27 87 30" stroke="#E9A6A6" strokeWidth="1.2" />
        </g>
    </svg>
);

export const Skills = () => {
    const langCat = SKILL_CATEGORIES[0];
    const frontendCat = SKILL_CATEGORIES[1];
    const backendCat = SKILL_CATEGORIES[2];
    const dbCat = SKILL_CATEGORIES[3];
    const web3Cat = SKILL_CATEGORIES[4];
    const toolsCat = SKILL_CATEGORIES[5];

    return (
        <section id="skills" className="relative border-t border-line/60 bg-[#171624] py-14 sm:py-18 lg:py-20">
            <div className="section-shell">
                {/* Header */}
                <div className="mb-8 sm:mb-10 lg:mb-12">
                    <Reveal>
                        <p className="eyebrow mb-2">02 · SKILLS</p>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-txt sm:text-4xl lg:text-5xl">
                            Tools I build <span className="text-rose">with.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-txt2 sm:text-base">
                            A practical toolkit for building full-stack applications, backend systems and Web3 products.
                        </p>
                    </Reveal>
                </div>

                {/* Asymmetric Bento Grid */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                    {/* Card 1 — Programming Languages (Left Tall Card: col-span-4, row-span-2) */}
                    <Reveal
                        delay={0.16}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line/70 bg-[#292538]/70 p-4.5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-rose/40 hover:bg-[#292538]/90 sm:p-5 lg:col-span-4 lg:row-span-2"
                        data-testid="skill-card-languages"
                    >
                        {/* Corner Ambient Glow */}
                        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-rose/10 blur-3xl" aria-hidden="true" />

                        <div>
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-[#342D40] text-rose transition-transform duration-300 group-hover:scale-105">
                                <Code2 size={17} />
                            </div>
                            <h3 className="mt-2.5 font-display text-base font-bold text-txt sm:text-lg">
                                {langCat.title}
                            </h3>
                            <p className="mt-1 text-xs leading-relaxed text-txt3">
                                {langCat.sub}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {langCat.skills.map((s) => (
                                    <span
                                        key={s}
                                        className="inline-flex items-center rounded-md border border-line/60 bg-[#1F1D36]/80 px-2.5 py-0.5 font-mono-tech text-[11px] leading-relaxed text-txt2 transition-colors duration-200 hover:border-rose/50 hover:text-txt sm:text-xs"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Code Editor Illustration */}
                        <div className="mt-4 flex justify-center sm:mt-5">
                            <CodeEditorIllustration />
                        </div>
                    </Reveal>

                    {/* Card 2 — Frontend Development (Middle Top: col-span-4) */}
                    <Reveal
                        delay={0.23}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line/70 bg-[#292538]/70 p-4.5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-rose/40 hover:bg-[#292538]/90 sm:p-5 lg:col-span-4"
                        data-testid="skill-card-frontend"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-[#342D40] text-rose transition-transform duration-300 group-hover:scale-105">
                                    <LayoutTemplate size={17} />
                                </div>
                                <h3 className="mt-2.5 font-display text-base font-bold text-txt sm:text-lg">
                                    {frontendCat.title}
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-txt3">
                                    {frontendCat.sub}
                                </p>
                            </div>
                            <FrontendIllustration />
                        </div>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {frontendCat.skills.map((s) => (
                                <span
                                    key={s}
                                    className="inline-flex items-center rounded-md border border-line/60 bg-[#1F1D36]/80 px-2.5 py-0.5 font-mono-tech text-[11px] leading-relaxed text-txt2 transition-colors duration-200 hover:border-rose/50 hover:text-txt sm:text-xs"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    {/* Card 3 — Backend Development (Right Top: col-span-4) */}
                    <Reveal
                        delay={0.30}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line/70 bg-[#292538]/70 p-4.5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-rose/40 hover:bg-[#292538]/90 sm:p-5 lg:col-span-4"
                        data-testid="skill-card-backend"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-[#342D40] text-rose transition-transform duration-300 group-hover:scale-105">
                                    <Server size={17} />
                                </div>
                                <h3 className="mt-2.5 font-display text-base font-bold text-txt sm:text-lg">
                                    {backendCat.title}
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-txt3">
                                    {backendCat.sub}
                                </p>
                            </div>
                            <BackendIllustration />
                        </div>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {backendCat.skills.map((s) => (
                                <span
                                    key={s}
                                    className="inline-flex items-center rounded-md border border-line/60 bg-[#1F1D36]/80 px-2.5 py-0.5 font-mono-tech text-[11px] leading-relaxed text-txt2 transition-colors duration-200 hover:border-rose/50 hover:text-txt sm:text-xs"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    {/* Card 4 — Databases & Systems (Middle Bottom: col-span-4) */}
                    <Reveal
                        delay={0.37}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line/70 bg-[#292538]/70 p-4.5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-rose/40 hover:bg-[#292538]/90 sm:p-5 lg:col-span-4"
                        data-testid="skill-card-databases"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-[#342D40] text-rose transition-transform duration-300 group-hover:scale-105">
                                    <Database size={17} />
                                </div>
                                <h3 className="mt-2.5 font-display text-base font-bold text-txt sm:text-lg">
                                    {dbCat.title}
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-txt3">
                                    {dbCat.sub}
                                </p>
                            </div>
                            <DatabaseIllustration />
                        </div>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {dbCat.skills.map((s) => (
                                <span
                                    key={s}
                                    className="inline-flex items-center rounded-md border border-line/60 bg-[#1F1D36]/80 px-2.5 py-0.5 font-mono-tech text-[11px] leading-relaxed text-txt2 transition-colors duration-200 hover:border-rose/50 hover:text-txt sm:text-xs"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    {/* Card 5 — Web3 & Blockchain (Right Bottom: col-span-4) */}
                    <Reveal
                        delay={0.44}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line/70 bg-[#292538]/70 p-4.5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-rose/40 hover:bg-[#292538]/90 sm:p-5 lg:col-span-4"
                        data-testid="skill-card-web3"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-[#342D40] text-rose transition-transform duration-300 group-hover:scale-105">
                                    <Blocks size={17} />
                                </div>
                                <h3 className="mt-2.5 font-display text-base font-bold text-txt sm:text-lg">
                                    {web3Cat.title}
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-txt3">
                                    {web3Cat.sub}
                                </p>
                            </div>
                            <Web3Illustration />
                        </div>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {web3Cat.skills.map((s) => (
                                <span
                                    key={s}
                                    className="inline-flex items-center rounded-md border border-line/60 bg-[#1F1D36]/80 px-2.5 py-0.5 font-mono-tech text-[11px] leading-relaxed text-txt2 transition-colors duration-200 hover:border-rose/50 hover:text-txt sm:text-xs"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    {/* Card 6 — Development Tools (Bottom Full-Width Card: col-span-12) */}
                    <Reveal
                        delay={0.51}
                        className="group relative overflow-hidden rounded-2xl border border-line/70 bg-[#292538]/70 p-4 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-rose/40 hover:bg-[#292538]/90 sm:p-5 lg:col-span-12"
                        data-testid="skill-card-tools"
                    >
                        <div className="flex flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between">
                            {/* Left: Icon, Title & Sub */}
                            <div className="max-w-xs shrink-0">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-[#342D40] text-rose transition-transform duration-300 group-hover:scale-105">
                                    <Wrench size={17} />
                                </div>
                                <h3 className="mt-2 font-display text-base font-bold text-txt sm:text-lg">
                                    {toolsCat.title}
                                </h3>
                                <p className="mt-0.5 text-xs leading-relaxed text-txt3">
                                    {toolsCat.sub}
                                </p>
                            </div>

                            {/* Center: Tool Chips */}
                            <div className="flex flex-1 flex-wrap gap-1.5 lg:max-w-xl">
                                {toolsCat.skills.map((s) => (
                                    <span
                                        key={s}
                                        className="inline-flex items-center rounded-md border border-line/60 bg-[#1F1D36]/80 px-2.5 py-0.5 font-mono-tech text-[11px] leading-relaxed text-txt2 transition-colors duration-200 hover:border-rose/50 hover:text-txt sm:text-xs"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>

                            {/* Right: Laptop Workspace Graphic */}
                            <div className="hidden sm:block shrink-0">
                                <ToolsIllustration />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
