import { Reveal } from "./Reveal";
import { FLAGSHIP_PROJECTS } from "../data/content";
import {
    Github,
    ArrowUpRight,
    FileText,
    LineChart,
    SlidersHorizontal,
    Coins,
    Zap,
    CheckCircle2,
    Sparkles,
    ShieldCheck,
    Lock,
    Activity,
    RefreshCw,
    AlertTriangle,
    Network,
} from "lucide-react";

// Mapping highlight index to project-specific icons
const renderHighlightIcon = (projectId, index) => {
    const size = 11;
    if (projectId === "nyxequities") {
        const icons = [
            <LineChart key="0" size={size} />,
            <SlidersHorizontal key="1" size={size} />,
            <Coins key="2" size={size} />,
            <Zap key="3" size={size} />,
        ];
        return icons[index] || <LineChart size={size} />;
    }
    if (projectId === "unidata") {
        const icons = [
            <CheckCircle2 key="0" size={size} />,
            <Sparkles key="1" size={size} />,
            <ShieldCheck key="2" size={size} />,
            <Lock key="3" size={size} />,
        ];
        return icons[index] || <CheckCircle2 size={size} />;
    }
    // neural-ledger
    const icons = [
        <Activity key="0" size={size} />,
        <RefreshCw key="1" size={size} />,
        <AlertTriangle key="2" size={size} />,
        <Network key="3" size={size} />,
    ];
    return icons[index] || <Activity size={size} />;
};

const ProjectShowcase = ({ project, index, onOpen }) => {
    const isEven = index % 2 === 0;

    return (
        <Reveal delay={0.12}>
            <article
                className="group relative overflow-hidden rounded-2xl border border-line/70 bg-[#292538]/70 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-rose/40 hover:bg-[#292538]/85 sm:p-8 lg:p-9"
                data-testid={`flagship-card-${project.id}`}
            >
                {/* Subtle Ambient Back-Glow */}
                <div
                    className={`pointer-events-none absolute -bottom-12 ${
                        isEven ? "-right-12" : "-left-12"
                    } h-52 w-52 rounded-full bg-rose/5 blur-3xl`}
                    aria-hidden="true"
                />

                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
                    {/* Information Column */}
                    <div
                        className={`w-full lg:col-span-5 xl:col-span-5 ${
                            isEven ? "lg:order-1" : "lg:order-2"
                        } order-1`}
                    >
                        {/* Number & Category Eyebrow */}
                        <div className="flex items-center gap-3">
                            <span className="font-display text-2xl font-bold tracking-tight text-rose sm:text-3xl">
                                {project.number}
                            </span>
                            <span className="h-5 w-[1.5px] bg-rose/40" aria-hidden="true" />
                            <p className="font-mono-tech text-[10px] uppercase tracking-[0.12em] text-rose/90 sm:text-[11px] font-medium">
                                {project.category}
                            </p>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-txt sm:text-3xl">
                            {project.name}
                        </h3>
                        <p className="mt-1 font-display text-sm font-medium text-txt2 sm:text-base">
                            {project.tagline}
                        </p>

                        {/* Description */}
                        <p className="mt-3.5 text-xs leading-relaxed text-txt3 sm:text-sm">
                            {project.description}
                        </p>

                        {/* Key Highlights Grid (2x2) */}
                        {project.highlights && project.highlights.length > 0 && (
                            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                {project.highlights.map((highlight, hIdx) => (
                                    <div
                                        key={highlight}
                                        className="flex items-center gap-2 text-xs text-txt2"
                                    >
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-rose/30 bg-rose/10 text-rose">
                                            {renderHighlightIcon(project.id, hIdx)}
                                        </span>
                                        <span className="font-medium text-txt2 text-[11px] sm:text-xs">
                                            {highlight}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Technology Tags */}
                        <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                            {project.stack.map((t) => (
                                <span
                                    key={t}
                                    className="inline-flex items-center rounded-lg border border-line/60 bg-[#1F1D36]/80 px-2.5 py-1 font-mono-tech text-[11px] text-txt2 transition-colors duration-200 hover:border-rose/50 hover:text-txt"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid={`flagship-live-${project.id}`}
                                    className="inline-flex items-center gap-1.5 rounded-xl bg-rose px-4 py-2 font-display text-xs font-semibold text-ink shadow-sm transition-all duration-200 hover:bg-[#f2b8b8] active:scale-[0.98]"
                                >
                                    Live App <ArrowUpRight size={13} />
                                </a>
                            )}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid={`flagship-github-${project.id}`}
                                className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface/60 px-4 py-2 font-display text-xs font-medium text-txt transition-all duration-200 hover:border-rose/60 hover:text-rose hover:bg-surface active:scale-[0.98]"
                            >
                                <Github size={13} /> GitHub
                            </a>
                            <button
                                type="button"
                                onClick={() => onOpen(project)}
                                data-testid={`flagship-case-study-${project.id}`}
                                className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface/60 px-4 py-2 font-display text-xs font-medium text-txt transition-all duration-200 hover:border-rose/60 hover:text-rose hover:bg-surface active:scale-[0.98]"
                            >
                                <FileText size={13} /> Case Study <ArrowUpRight size={13} />
                            </button>
                        </div>
                    </div>

                    {/* Screenshot Preview Column */}
                    <div
                        className={`w-full lg:col-span-7 xl:col-span-7 ${
                            isEven ? "lg:order-2" : "lg:order-1"
                        } order-2`}
                    >
                        <button
                            type="button"
                            onClick={() => onOpen(project)}
                            className="group/img relative block w-full overflow-hidden rounded-xl border border-line/70 bg-[#1F1D36] text-left shadow-2xl transition-all duration-500 hover:border-rose/50 sm:rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                            aria-label={`Open ${project.name} case study`}
                            data-testid={`flagship-image-${project.id}`}
                        >
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#171624]">
                                <img
                                    src={project.image}
                                    alt={project.imageAlt}
                                    loading="lazy"
                                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-[1.02]"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1F1D36]/25 via-transparent to-transparent" />
                                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-xl sm:rounded-2xl" />
                            </div>
                        </button>
                    </div>
                </div>
            </article>
        </Reveal>
    );
};

export const FlagshipProjects = ({ onOpen }) => (
    <section id="projects" className="relative border-t border-line/60 bg-[#171624] pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-14">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
            {/* Section Heading */}
            <div className="mb-12 sm:mb-16">
                <Reveal>
                    <p className="eyebrow mb-3">03 · FLAGSHIP PROJECTS</p>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-txt sm:text-4xl lg:text-5xl">
                        The three builds that define how I <span className="text-rose">engineer.</span>
                    </h2>
                </Reveal>
                <Reveal delay={0.12}>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-txt2 sm:text-base">
                        Each one is live, documented and open-source. Click any project for the full case study — problem, architecture, decisions and my exact contribution.
                    </p>
                </Reveal>
            </div>

            {/* Alternating Project Showcases */}
            <div className="space-y-8 sm:space-y-10">
                {FLAGSHIP_PROJECTS.map((project, index) => (
                    <ProjectShowcase
                        key={project.id}
                        project={project}
                        index={index}
                        onOpen={onOpen}
                    />
                ))}
            </div>
        </div>
    </section>
);
