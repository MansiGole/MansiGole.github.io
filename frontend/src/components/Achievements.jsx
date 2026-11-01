import { Reveal } from "./Reveal";
import { HACKATHONS } from "../data/content";
import { ExternalLink } from "lucide-react";

const CHAMFER_CLIP = {
    clipPath:
        "polygon(15px 0%, calc(100% - 15px) 0%, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0% calc(100% - 15px), 0% 15px)",
};

const TIMELINE_GRADIENT = {
    background:
        "linear-gradient(to bottom, transparent 0%, rgba(233, 166, 166, 0.65) 32px, rgba(233, 166, 166, 0.65) calc(100% - 32px), transparent 100%)",
};

export const Achievements = () => {
    return (
        <section
            id="achievements"
            className="relative scroll-mt-20 border-t border-line/60 bg-[#171624] pt-20 pb-14 sm:pt-24 sm:pb-18"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Heading — Refined Futuristic Editorial */}
                <div className="mb-10 sm:mb-12">
                    <Reveal>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose/30 bg-rose/10 px-3.5 py-1 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-rose sm:text-[11px]">
                            06 · HACKATHONS &amp; COMPETITIONS
                        </div>
                        <h2 className="font-display text-2xl font-bold tracking-tight text-txt sm:text-3xl lg:text-4xl">
                            Rooms I’ve <span className="text-rose">competed in.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <div className="mt-2.5 flex items-center gap-3">
                            <p className="max-w-2xl font-mono-tech text-xs tracking-wide text-txt3 sm:text-sm">
                                Participation listed honestly — selections are selections, not wins.
                            </p>
                            {/* Subtle decorative tech flourish matching reference */}
                            <svg
                                className="hidden text-rose/40 sm:block"
                                width="36"
                                height="8"
                                viewBox="0 0 36 8"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M1 4C4 1 7 7 10 4C13 1 16 7 19 4C22 1 25 7 28 4C31 1 34 7 35 4"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </Reveal>
                </div>

                {/* Timeline Container with Continuous Glowing Vertical Line */}
                <div className="relative">
                    {/* Glowing vertical line connecting all nodes seamlessly with uniform luminosity */}
                    <div
                        className="pointer-events-none absolute bottom-4 top-2 left-[74px] sm:left-[96px] w-[1.5px] -translate-x-1/2 shadow-[0_0_12px_rgba(233,166,166,0.45)]"
                        style={TIMELINE_GRADIENT}
                        aria-hidden="true"
                    />

                    {/* Timeline Event Items */}
                    <div className="space-y-6 sm:space-y-7">
                        {HACKATHONS.map((h, i) => (
                            <Reveal key={h.name} delay={0.15 + i * 0.08}>
                                <div className="group relative flex items-start gap-2.5 sm:gap-4 md:gap-6">
                                    {/* Left Sequence Rail: Number + Year */}
                                    <div className="w-[56px] shrink-0 pt-4 text-right sm:w-[72px] sm:pt-4">
                                        <span className="font-display text-2xl font-bold leading-none tracking-tight text-rose sm:text-3xl">
                                            {h.number}
                                        </span>
                                        <span className="mt-1 block font-mono-tech text-[10px] tracking-wider text-txt3 sm:text-[11px]">
                                            {h.date}
                                        </span>
                                    </div>

                                    {/* Middle Node Column with Glowing Node & Horizontal Connector */}
                                    <div className="relative flex w-5 shrink-0 items-center justify-center pt-5 sm:w-6 sm:pt-5">
                                        {/* Glowing circular node */}
                                        <span className="relative z-10 flex h-3 w-3 items-center justify-center rounded-full bg-rose shadow-[0_0_12px_#E9A6A6] ring-4 ring-rose/25 sm:h-3.5 sm:w-3.5">
                                            <span className="h-1 w-1 rounded-full bg-white sm:h-1.5 sm:w-1.5" />
                                        </span>

                                        {/* Horizontal connector line extending into the card */}
                                        <span
                                            className="pointer-events-none absolute left-1/2 top-6.5 sm:top-6.5 -translate-y-1/2 w-4 sm:w-8 h-[1px] bg-gradient-to-r from-rose/80 to-rose/30"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    {/* Right Chamfered Futuristic Event Card */}
                                    <div className="min-w-0 flex-1">
                                        <div
                                            className={`transition-all duration-300 ${
                                                h.featured
                                                    ? "shadow-[0_0_24px_rgba(233,166,166,0.15)]"
                                                    : "shadow-md"
                                            }`}
                                        >
                                            {/* Outer 1px Chamfered Border Wrapper */}
                                            <div
                                                className={`p-[1px] transition-colors duration-300 ${
                                                    h.featured
                                                        ? "bg-rose/70 shadow-[0_0_15px_rgba(233,166,166,0.2)] group-hover:bg-rose"
                                                        : "bg-[#494052]/80 group-hover:bg-rose/60"
                                                }`}
                                                style={CHAMFER_CLIP}
                                            >
                                                {/* Inner Chamfered Card Body */}
                                                <div
                                                    className="w-full bg-[#292538] px-4.5 py-4 sm:px-6 sm:py-5 transition-colors duration-300 group-hover:bg-[#2c283d]"
                                                    style={CHAMFER_CLIP}
                                                >
                                                    {/* Card Header: Level Label & Status Badge */}
                                                    <div className="flex flex-wrap items-center justify-between gap-2.5 pb-1 sm:pl-1">
                                                        <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-rose/85 sm:text-[11px]">
                                                            [ {h.level} ]
                                                        </span>

                                                        {/* Status Badge */}
                                                        {h.featured ? (
                                                            <div className="inline-flex items-center gap-1.5 rounded-full border border-rose/40 bg-rose/15 px-3 py-1 font-mono-tech text-[10px] font-semibold uppercase tracking-wider text-rose shadow-[0_0_12px_rgba(233,166,166,0.2)] sm:text-[11px]">
                                                                <span className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse" />
                                                                SELECTED FOR ROUND 2
                                                            </div>
                                                        ) : (
                                                            <div className="inline-flex items-center gap-1.5 rounded-full border border-line/70 bg-[#1F1D36]/80 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-txt3 sm:text-[11px]">
                                                                <span className="h-1.5 w-1.5 rounded-full bg-txt3/60" />
                                                                PARTICIPATED
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Main Card Content */}
                                                    <div className="mt-1 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
                                                        {/* Left: Title, Organizer/Year, Description */}
                                                        <div className="max-w-lg sm:pl-1">
                                                            <h3 className="font-display text-lg font-bold text-txt transition-colors duration-200 group-hover:text-rose sm:text-xl lg:text-2xl">
                                                                {h.name}
                                                            </h3>
                                                            <p className="mt-0.5 font-mono-tech text-[10px] uppercase tracking-[0.16em] text-txt3 sm:text-[11px]">
                                                                {h.organizer} · {h.year}
                                                            </p>
                                                            <p className="mt-2 text-xs leading-relaxed text-txt2 sm:text-sm">
                                                                {h.description}
                                                            </p>
                                                        </div>

                                                        {/* Right: Skill Pill Tags & External Link Button */}
                                                        <div className="flex flex-wrap items-center gap-2 pt-1 lg:pt-0 lg:flex-nowrap">
                                                            {h.tags &&
                                                                h.tags.map((tag) => (
                                                                    <span
                                                                        key={tag}
                                                                        className="rounded-md border border-line/70 bg-[#1F1D36]/75 px-2.5 py-1 font-mono-tech text-[10px] text-txt2 transition-colors duration-200 hover:border-rose/40 hover:text-rose sm:text-[11px] whitespace-nowrap"
                                                                    >
                                                                        {tag}
                                                                    </span>
                                                                ))}

                                                            {/* External Link Button */}
                                                            {h.link && (
                                                                <a
                                                                    href={h.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line/80 bg-[#1F1D36]/80 text-txt2 shadow-sm transition-all duration-200 hover:scale-105 hover:border-rose hover:text-rose active:scale-95 sm:h-9 sm:w-9"
                                                                    aria-label={`External link for ${h.name}`}
                                                                >
                                                                    <ExternalLink size={15} />
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
