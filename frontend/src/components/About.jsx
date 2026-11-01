import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

export const About = () => {
    return (
        <section
            id="about"
            className="relative scroll-mt-20 overflow-hidden border-t border-line/60 bg-[#171624] py-16 sm:py-20 lg:py-28"
        >
            {/* Subtle Abstract Orbital Graphic in Upper-Right Background */}
            <div
                className="pointer-events-none absolute -right-10 -top-10 h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] select-none opacity-85"
                aria-hidden="true"
            >
                <svg className="h-full w-full" viewBox="0 0 500 500" fill="none">
                    <defs>
                        <radialGradient id="aboutSphereGrad" cx="50%" cy="30%" r="50%">
                            <stop offset="0%" stopColor="#E9A6A6" stopOpacity="0.30" />
                            <stop offset="35%" stopColor="#3F3351" stopOpacity="0.45" />
                            <stop offset="80%" stopColor="#171624" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="aboutOrbitLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#E9A6A6" stopOpacity="0.45" />
                            <stop offset="60%" stopColor="#E9A6A6" stopOpacity="0.22" />
                            <stop offset="100%" stopColor="#E9A6A6" stopOpacity="0.05" />
                        </linearGradient>
                    </defs>
                    {/* Planetary sphere */}
                    <circle cx="430" cy="130" r="150" fill="url(#aboutSphereGrad)" />
                    {/* Orbital trajectory curve */}
                    <path
                        d="M 160,0 C 200,90 280,180 500,210"
                        stroke="url(#aboutOrbitLineGrad)"
                        strokeWidth="1.2"
                    />
                    {/* Glowing orbital point */}
                    <circle cx="232" cy="125" r="8" fill="#E9A6A6" fillOpacity="0.25" />
                    <circle cx="232" cy="125" r="3.5" fill="#E9A6A6" />
                    <circle cx="232" cy="125" r="1.5" fill="#FFF0F0" />
                </svg>
            </div>

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14 xl:grid-cols-[280px_1fr] xl:gap-16 items-start">
                    {/* LEFT COLUMN: Metadata & Core Philosophy */}
                    <Reveal className="relative lg:border-r lg:border-[#494052]/50 lg:pr-12 xl:pr-14">
                        {/* Middle Glowing Rose Node on Vertical Divider */}
                        <div
                            className="hidden lg:block pointer-events-none absolute -right-[4.5px] top-[38%] h-2 w-2 rounded-full bg-[#E9A6A6] shadow-[0_0_10px_#E9A6A6]"
                            aria-hidden="true"
                        />

                        <div className="space-y-6">
                            {/* Eyebrow */}
                            <p className="font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-rose/90">
                                01 · ABOUT
                            </p>

                            {/* Core Engineering Philosophy Block */}
                            <div>
                                <div className="flex items-start gap-2.5">
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose shadow-[0_0_6px_#E9A6A6]" />
                                    <p className="font-mono-tech text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] leading-snug text-txt">
                                        CORE ENGINEERING<br />PHILOSOPHY
                                    </p>
                                </div>
                                <div className="mt-4 h-[1px] w-full bg-[#494052]/45" />
                            </div>

                            {/* Degree & College */}
                            <div className="space-y-1">
                                <p className="font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-txt font-semibold">
                                    B.TECH · ELECTRONICS &amp; COMPUTER SCIENCE
                                </p>
                                <p className="font-mono-tech text-[9.5px] sm:text-[10px] uppercase tracking-[0.18em] leading-relaxed text-txt2">
                                    SIES GRADUATE SCHOOL OF TECHNOLOGY, NERUL
                                </p>
                                <p className="font-mono-tech text-[9px] sm:text-[9.5px] uppercase tracking-[0.18em] text-rose/90 font-medium">
                                    EXPECTED GRADUATION · 2028
                                </p>
                            </div>

                            {/* Core Coursework */}
                            <div>
                                <p className="font-mono-tech text-[9px] sm:text-[9.5px] uppercase tracking-[0.2em] text-txt3 font-medium mb-1.5">
                                    CORE COURSEWORK
                                </p>
                                <div className="flex flex-wrap gap-1">
                                    {["DSA", "OOP", "DBMS", "OS", "Computer Networks", "Web Tech"].map((course) => (
                                        <span
                                            key={course}
                                            className="rounded border border-line/60 bg-[#1F1D36]/80 px-1.5 py-0.5 font-mono-tech text-[9px] text-txt2 transition-colors hover:border-rose/40 hover:text-rose"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <p className="font-mono-tech text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-txt3 font-medium mb-1">
                                    LOCATION
                                </p>
                                <p className="font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-txt2">
                                    NAVI MUMBAI, INDIA
                                </p>
                            </div>

                            {/* Specialization */}
                            <div>
                                <p className="font-mono-tech text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-txt3 font-medium mb-1">
                                    SPECIALIZATION
                                </p>
                                <p className="font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-[0.18em] leading-relaxed text-txt2">
                                    FULL-STACK · BACKEND<br />
                                    WEB3 · DISTRIBUTED SYSTEMS
                                </p>
                            </div>
                        </div>

                        {/* Mobile separator between left metadata and right content */}
                        <div className="mt-8 h-[1px] w-full bg-[#494052]/40 lg:hidden" />
                    </Reveal>

                    {/* RIGHT COLUMN: Editorial Headline, Paragraphs & Explore Link */}
                    <div className="max-w-3xl">
                        {/* Main Editorial Headline */}
                        <Reveal delay={0.08}>
                            <h2 className="font-display text-3xl font-bold leading-[1.14] tracking-tight text-txt sm:text-4xl lg:text-[44px] xl:text-[48px]">
                                I learn by<br />
                                <span className="text-rose">building systems</span><br />
                                that solve real problems.
                            </h2>
                        </Reveal>

                        {/* Existing About Paragraphs (Preserved wording) - Staggered */}
                        <Reveal delay={0.18}>
                            <div className="mt-6 space-y-4 font-sans text-sm sm:text-[15px] leading-relaxed text-txt2">
                                <p>
                                    I'm Mansi Gole, an Electronics &amp; Computer Science engineering student
                                    interested in the intersection of software engineering and emerging technologies.
                                </p>
                                <p>
                                    I enjoy turning ideas into functional products — developing full-stack
                                    applications, exploring backend architecture and understanding how different
                                    systems communicate. Through my projects, I've worked with APIs, databases,
                                    event-driven processing, blockchain integrations and modern web technologies.
                                </p>
                                <p>
                                    I believe in learning by building, experimenting and continuously improving.
                                </p>
                            </div>
                        </Reveal>

                        {/* Minimal Underlined "Explore My Work" Link - Staggered */}
                        <Reveal delay={0.28}>
                            <div className="mt-8 pt-2">
                                <a
                                    href="#projects"
                                    data-testid="about-explore-work-link"
                                    className="group inline-flex flex-col text-left"
                                >
                                    <span className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.2em] text-rose transition-colors duration-200 group-hover:text-[#f2bfbf]">
                                        EXPLORE MY WORK{" "}
                                        <ArrowRight
                                            size={14}
                                            className="transition-transform duration-200 group-hover:translate-x-1"
                                        />
                                    </span>
                                    <span className="mt-1 h-[1px] w-full bg-rose/40 transition-colors duration-200 group-hover:bg-rose" />
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
