import { Reveal } from "./Reveal";
import { EXPERIENCE } from "../data/content";
import { Users, Trophy, PenTool } from "lucide-react";

// Architectural corner silhouette: top-left rounded, top-right 45° chamfer, bottom-right rounded, bottom-left 45° chamfer
const CARD_CLIP = {
    clipPath:
        "polygon(0% 16px, 3px 9px, 9px 3px, 16px 0%, calc(100% - 18px) 0%, 100% 18px, 100% calc(100% - 16px), calc(100% - 3px) calc(100% - 9px), calc(100% - 9px) calc(100% - 3px), calc(100% - 16px) 100%, 18px 100%, 0% calc(100% - 18px))",
};

export const Experience = () => {
    return (
        <section
            id="experience"
            className="relative scroll-mt-24 border-t border-line/60 bg-[#171624] pt-24 pb-16 sm:pt-28 sm:pb-20"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Heading — Clean Editorial */}
                <div className="mb-10 sm:mb-12">
                    <Reveal>
                        <p className="mb-3 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-rose/90 sm:text-[11px]">
                            05 · EXPERIENCE &amp; LEADERSHIP
                        </p>
                        <h2 className="font-display text-2xl font-bold tracking-tight text-txt sm:text-3xl lg:text-4xl">
                            Where I show up <span className="text-rose">beyond code.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <p className="mt-2.5 max-w-2xl font-mono-tech text-xs tracking-wide text-txt3 sm:text-sm">
                            Technical leadership, event execution and student community contributions.
                        </p>
                    </Reveal>
                </div>

                {/* Three-Card Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
                    {EXPERIENCE.map((item, i) => (
                        <Reveal
                            key={item.role}
                            delay={0.16 + i * 0.1}
                            className={`h-full ${
                                i === 2
                                    ? "md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 w-full"
                                    : "w-full"
                            }`}
                            data-testid={`experience-card-${i}`}
                        >
                            <div
                                className={`group relative h-full transition-transform duration-300 ease-out hover:-translate-y-1 ${
                                    item.current
                                        ? "shadow-[0_0_24px_rgba(233,166,166,0.08)]"
                                        : "shadow-md"
                                }`}
                            >
                                {/* Outer 1px Architectural Border Wrapper */}
                                <div
                                    className={`h-full p-[1px] transition-colors duration-300 ${
                                        item.current
                                            ? "bg-rose/60 group-hover:bg-rose/90 shadow-[0_0_15px_rgba(233,166,166,0.15)]"
                                            : "bg-[#494052]/85 group-hover:bg-rose/50"
                                    }`}
                                    style={CARD_CLIP}
                                >
                                    {/* Inner Card Body */}
                                    <div
                                        className="relative flex h-full flex-col justify-between bg-[#292538] px-4.5 py-6 sm:px-5 sm:py-6.5 transition-colors duration-300 group-hover:bg-[#2c283d]"
                                        style={CARD_CLIP}
                                    >
                                        {/* Card Top: Icon & CURRENT Status Pill */}
                                        <div>
                                            <div className="flex items-center justify-between">
                                                {/* Icon container */}
                                                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line/80 bg-[#1F1D36] text-rose shadow-sm">
                                                    {item.icon === "Users" && <Users size={16} />}
                                                    {item.icon === "Trophy" && <Trophy size={16} />}
                                                    {item.icon === "PenTool" && <PenTool size={16} />}
                                                </div>

                                                {/* CURRENT badge (Card 01 only) */}
                                                {item.current && (
                                                    <div className="inline-flex items-center gap-1.5 rounded-full border border-rose/40 bg-rose/15 px-3 py-1 font-mono-tech text-[10px] font-semibold uppercase tracking-wider text-rose shadow-[0_0_12px_rgba(233,166,166,0.18)] sm:text-[11px]">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse" />
                                                        CURRENT
                                                    </div>
                                                )}
                                            </div>

                                            {/* Date */}
                                            <p className="mt-4 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-txt3 sm:text-[11px]">
                                                {item.period}
                                            </p>

                                            {/* Role Title */}
                                            <h3 className="mt-1 font-display text-lg font-bold text-txt transition-colors duration-200 group-hover:text-rose sm:text-xl">
                                                {item.role}
                                            </h3>

                                            {/* Organization */}
                                            <p className="mt-0.5 font-mono-tech text-[11px] text-txt3 sm:text-xs">
                                                {item.org}
                                            </p>

                                            {/* Thin Divider */}
                                            <div className="my-4 border-t border-line/40" />

                                            {/* Responsibility Bullet Points */}
                                            <ul className="space-y-2.5">
                                                {item.points.map((pt) => (
                                                    <li
                                                        key={pt}
                                                        className="flex items-start gap-2.5 text-xs leading-relaxed text-txt2 sm:text-[13px]"
                                                    >
                                                        <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-rose/60" />
                                                        <span>{pt}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Bottom: Skill Tags */}
                                        <div className="mt-6 flex flex-wrap items-center gap-1 sm:gap-1.5 pt-2">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-md border border-line/70 bg-[#1F1D36]/75 px-1.5 py-0.5 sm:px-2 font-mono-tech text-[9.5px] text-txt2 transition-colors duration-200 hover:border-rose/40 hover:text-rose sm:text-[10px] xl:text-[10.5px] tracking-tight whitespace-nowrap"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 01 Corner Accent Tab (Top-Right Chamfer) */}
                                {item.current && (
                                    <div
                                        className="pointer-events-none absolute top-0 right-0 h-[18px] w-[18px] rounded-tr-lg bg-rose"
                                        style={{
                                            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
                                        }}
                                        aria-hidden="true"
                                    />
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
