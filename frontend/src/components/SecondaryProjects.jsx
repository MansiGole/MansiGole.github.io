import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SECONDARY_PROJECTS } from "../data/content";
import {
    Github,
    ArrowUpRight,
    FileText,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export const SecondaryProjects = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Default to project 02 (Warranty Intelligence) matching reference mockup
    const [isPaused, setIsPaused] = useState(false);
    const [expandedMap, setExpandedMap] = useState({});
    const [isMobile, setIsMobile] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    const totalProjects = SECONDARY_PROJECTS.length;
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Responsive check
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // prefers-reduced-motion check
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const handler = (e) => setReducedMotion(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    // Automatic rotation every 3.2 seconds with clean interval
    useEffect(() => {
        if (isPaused || reducedMotion) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % totalProjects);
        }, 3200);
        return () => clearInterval(interval);
    }, [isPaused, reducedMotion, totalProjects]);

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % totalProjects);
    }, [totalProjects]);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    }, [totalProjects]);

    const toggleContribution = (projectId, e) => {
        e.stopPropagation();
        setExpandedMap((prev) => ({
            ...prev,
            [projectId]: !prev[projectId],
        }));
    };

    const handleTouchStart = (e) => {
        setIsPaused(true);
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        setIsPaused(false);
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 40) {
            if (diff > 0) {
                handleNext();
            } else {
                handlePrev();
            }
        }
    };

    // Calculate 3D circular transformation for each card
    const getCardStyle = useCallback(
        (index) => {
            let diff = (index - activeIndex + totalProjects) % totalProjects;
            if (diff > totalProjects / 2) diff -= totalProjects;

            if (isMobile) {
                // On mobile: active card is centered, others slide away
                if (diff === 0) {
                    return {
                        transform: "translateX(0%) scale(1)",
                        opacity: 1,
                        zIndex: 30,
                        pointerEvents: "auto",
                        visibility: "visible",
                    };
                }
                return {
                    transform: `translateX(${diff * 110}%) scale(0.85)`,
                    opacity: 0,
                    zIndex: 10,
                    pointerEvents: "none",
                    visibility: "hidden",
                };
            }

            // Desktop 3D circular carousel with compact stage spacing
            if (diff === 0) {
                // Active Center
                return {
                    transform: "translateX(0px) translateZ(0px) rotateY(0deg) scale(1)",
                    zIndex: 30,
                    opacity: 1,
                    pointerEvents: "auto",
                    cursor: "default",
                };
            } else if (diff === 1) {
                // Right card
                return {
                    transform: "translateX(min(340px, 30vw)) translateZ(-90px) rotateY(-16deg) scale(0.87)",
                    zIndex: 20,
                    opacity: 0.68,
                    pointerEvents: "auto",
                    cursor: "pointer",
                };
            } else if (diff === -1) {
                // Left card
                return {
                    transform: "translateX(max(-340px, -30vw)) translateZ(-90px) rotateY(16deg) scale(0.87)",
                    zIndex: 20,
                    opacity: 0.68,
                    pointerEvents: "auto",
                    cursor: "pointer",
                };
            } else {
                // Far background card
                return {
                    transform: "translateX(0px) translateZ(-210px) rotateY(0deg) scale(0.72)",
                    zIndex: 10,
                    opacity: 0.22,
                    pointerEvents: "none",
                    cursor: "default",
                };
            }
        },
        [activeIndex, isMobile, totalProjects]
    );

    return (
        <section
            id="more-work"
            className="relative overflow-hidden border-t border-line/60 bg-[#171624] pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-18"
        >
            <div className="section-shell">
                {/* Section Heading — Compact & Clean */}
                <div className="mb-8 sm:mb-10">
                    <Reveal>
                        <p className="eyebrow mb-2">04 · MORE WORK</p>
                        <h2 className="font-display text-2xl font-bold tracking-tight text-txt sm:text-3xl lg:text-4xl">
                            Other things I've <span className="text-rose">built.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <p className="mt-2.5 max-w-2xl text-xs leading-relaxed text-txt2 sm:text-sm">
                            Smaller in scope, real in implementation — each with a repository and most with a live deployment.
                        </p>
                    </Reveal>
                </div>

                {/* 3D Circular Carousel Stage */}
                <Reveal delay={0.2}>
                    <div
                        className="relative mx-auto w-full max-w-5xl"
                        style={{ perspective: "1300px" }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        data-testid="circular-carousel-stage"
                    >
                    {/* Lateral Navigation Slide Arrows (Desktop & Tablet) */}
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="hidden sm:flex absolute sm:-left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-40 h-11 w-11 items-center justify-center rounded-full border border-line/80 bg-[#1F1D36]/90 text-txt2 shadow-xl backdrop-blur-md transition-all duration-200 hover:border-rose hover:text-rose hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                        aria-label="Previous project"
                        data-testid="carousel-arrow-prev"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <button
                        type="button"
                        onClick={handleNext}
                        className="hidden sm:flex absolute sm:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 z-40 h-11 w-11 items-center justify-center rounded-full border border-line/80 bg-[#1F1D36]/90 text-txt2 shadow-xl backdrop-blur-md transition-all duration-200 hover:border-rose hover:text-rose hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                        aria-label="Next project"
                        data-testid="carousel-arrow-next"
                    >
                        <ChevronRight size={18} />
                    </button>

                    {/* Elliptical Ambient Floor Ring (Tightly hug cards) */}
                    <div
                        className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 w-[720px] max-w-[94vw] h-[130px] rounded-[100%] border-t-2 border-rose/35 shadow-[0_0_35px_rgba(233,166,166,0.16)]"
                        style={{
                            background:
                                "radial-gradient(ellipse at 50% 0%, rgba(233,166,166,0.12) 0%, rgba(31,29,54,0.04) 60%, transparent 80%)",
                        }}
                        aria-hidden="true"
                    />

                    {/* Cards Container with 3D preserve */}
                    <div
                        className="relative flex min-h-[510px] sm:min-h-[530px] lg:min-h-[545px] items-center justify-center"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {SECONDARY_PROJECTS.map((project, idx) => {
                            const isActive = idx === activeIndex;
                            const isExpanded = !!expandedMap[project.id];
                            const cardStyle = getCardStyle(idx);

                            return (
                                <div
                                    key={project.id}
                                    onClick={() => {
                                        if (!isActive) setActiveIndex(idx);
                                    }}
                                    className={`absolute top-0 w-full max-w-[400px] sm:max-w-[430px] lg:max-w-[445px] rounded-2xl border bg-[#292538]/95 p-4 sm:p-5 lg:p-6 shadow-2xl backdrop-blur-md transition-all duration-600 ${
                                        isActive
                                            ? "border-rose/65 ring-1 ring-rose/30 shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(233,166,166,0.12)]"
                                            : "border-line/60 hover:border-rose/40"
                                    }`}
                                    style={{
                                        ...cardStyle,
                                        transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
                                    }}
                                    data-testid={`carousel-card-${project.id}`}
                                >
                                    {/* Project Preview Screenshot Frame */}
                                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line/70 bg-[#171624] shadow-inner">
                                        <img
                                            src={project.image}
                                            alt={project.imageAlt || project.name}
                                            className="h-full w-full object-cover object-top transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1F1D36]/20 via-transparent to-transparent" />
                                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-xl" />
                                    </div>

                                    {/* Number & Category Eyebrow */}
                                    <div className="mt-3.5 flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2">
                                            <span className="font-display text-xl font-bold tracking-tight text-rose sm:text-2xl">
                                                {project.number}
                                            </span>
                                            <span className="h-4 w-[1.5px] bg-rose/40" aria-hidden="true" />
                                        </div>
                                        <p className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-rose/90 sm:text-[10.5px] font-medium truncate">
                                            {project.tag}
                                        </p>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight text-txt sm:text-xl">
                                        {project.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-1.5 text-xs leading-relaxed text-txt3 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Technology Tags */}
                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        {project.stack.map((t) => (
                                            <span
                                                key={t}
                                                className="inline-flex items-center rounded-lg border border-line/60 bg-[#1F1D36]/80 px-2 py-0.5 font-mono-tech text-[10px] text-txt2 transition-colors duration-200 hover:border-rose/50 hover:text-txt"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div
                                        className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-line/60"
                                        onMouseEnter={() => setIsPaused(true)}
                                        onMouseLeave={() => setIsPaused(false)}
                                    >
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                data-testid={`secondary-live-${project.id}`}
                                                className="inline-flex items-center gap-1.5 rounded-xl bg-rose px-3 py-1.5 font-display text-xs font-semibold text-ink shadow-sm transition-all duration-200 hover:bg-[#f2b8b8] active:scale-[0.98]"
                                            >
                                                Live App <ArrowUpRight size={12} />
                                            </a>
                                        )}
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            data-testid={`secondary-github-${project.id}`}
                                            className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface/60 px-3 py-1.5 font-display text-xs font-medium text-txt transition-all duration-200 hover:border-rose/60 hover:text-rose hover:bg-surface active:scale-[0.98]"
                                        >
                                            <Github size={12} /> GitHub
                                        </a>
                                        <button
                                            type="button"
                                            onClick={(e) => toggleContribution(project.id, e)}
                                            data-testid={`secondary-toggle-${project.id}`}
                                            className="inline-flex items-center gap-1 rounded-xl border border-line bg-surface/60 px-2.5 py-1.5 font-display text-xs font-medium text-txt transition-all duration-200 hover:border-rose/60 hover:text-rose hover:bg-surface active:scale-[0.98]"
                                        >
                                            <FileText size={12} /> Contribution
                                            <ChevronDown
                                                size={11}
                                                className={`transition-transform duration-300 ${
                                                    isExpanded ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>
                                    </div>

                                    {/* Collapsible Contribution Drawer */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="overflow-hidden text-xs leading-relaxed text-txt3"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <p className="mt-3 rounded-lg border border-line/50 bg-[#1F1D36]/90 p-2.5 text-txt2 text-[10.5px] leading-relaxed">
                                                    {project.contribution}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    {/* Progress Indicator Dots / Pills + Bottom Slide Arrows */}
                    <div
                        className="mt-5 flex items-center justify-center gap-3"
                        role="tablist"
                        aria-label="More Work project indicators"
                    >
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-line/70 bg-[#292538] text-txt3 transition-all duration-200 hover:border-rose hover:text-rose active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        <div className="flex items-center gap-1">
                            {SECONDARY_PROJECTS.map((proj, idx) => {
                                const isCurrent = idx === activeIndex;
                                return (
                                    <button
                                        key={proj.id}
                                        type="button"
                                        onClick={() => setActiveIndex(idx)}
                                        className="group flex min-h-[44px] min-w-[28px] items-center justify-center px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                                        aria-label={`Show ${proj.name} (Project 0${idx + 1})`}
                                        aria-selected={isCurrent}
                                        role="tab"
                                        data-testid={`indicator-${proj.id}`}
                                    >
                                        <span
                                            className={`rounded-full transition-all duration-300 block ${
                                                isCurrent
                                                    ? "h-1.5 w-7 bg-rose shadow-[0_0_8px_rgba(233,166,166,0.6)]"
                                                    : "h-1.5 w-2.5 bg-line/60 group-hover:bg-line"
                                            }`}
                                        />
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            type="button"
                            onClick={handleNext}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-line/70 bg-[#292538] text-txt3 transition-all duration-200 hover:border-rose hover:text-rose active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
                </Reveal>
            </div>
        </section>
    );
};
