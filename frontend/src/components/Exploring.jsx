import { Reveal } from "./Reveal";
import {
    Layers,
    Server,
    Network,
    Boxes,
    Brain,
    Monitor,
} from "lucide-react";

const TOPICS = [
    {
        id: "dsa",
        title: "Data Structures & Algorithms",
        desc: "Strengthening problem solving and core CS fundamentals.",
        icon: Layers,
        dot: { cx: 205, cy: 100 },
        callout: {
            line: "M 188,100 L 205,100",
            textX: 180,
            textY: 96,
            anchor: "end",
            lines: ["Data Structures", "& Algorithms"],
        },
    },
    {
        id: "backend",
        title: "Backend Engineering",
        desc: "Going deeper into API design, system design and reliable services.",
        icon: Server,
        dot: { cx: 445, cy: 55 },
        callout: {
            line: "M 445,55 L 460,45 L 468,45",
            textX: 474,
            textY: 49,
            anchor: "start",
            lines: ["Backend Engineering"],
        },
    },
    {
        id: "distributed",
        title: "Distributed Systems",
        desc: "Exploring consistency, fault tolerance and what happens when systems fail.",
        icon: Network,
        dot: { cx: 218, cy: 205 },
        callout: {
            line: "M 195,205 L 218,205",
            textX: 188,
            textY: 209,
            anchor: "end",
            lines: ["Distributed Systems"],
        },
    },
    {
        id: "web3",
        title: "Web3 & Smart Contracts",
        desc: "Experimenting with blockchain primitives and real-world applications.",
        icon: Boxes,
        dot: { cx: 495, cy: 140 },
        callout: {
            line: "M 495,140 L 512,140 L 522,148",
            textX: 530,
            textY: 144,
            anchor: "start",
            lines: ["Web3 &", "Smart Contracts"],
        },
    },
    {
        id: "ai-ml",
        title: "AI / ML",
        desc: "Learning and building practical AI/ML solutions for real use cases.",
        icon: Brain,
        dot: { cx: 485, cy: 232 },
        callout: {
            line: "M 485,232 L 502,232 L 512,228",
            textX: 520,
            textY: 231,
            anchor: "start",
            lines: ["AI / ML"],
        },
    },
    {
        id: "architecture",
        title: "Modern Software Architecture",
        desc: "Understanding scalable and maintainable system design.",
        icon: Monitor,
        dot: { cx: 395, cy: 290 },
        callout: {
            line: "M 395,290 L 408,290 L 416,298",
            textX: 425,
            textY: 294,
            anchor: "start",
            lines: ["Modern Software", "Architecture"],
        },
    },
];

export const Exploring = () => {
    return (
        <section
            id="exploring"
            className="relative scroll-mt-20 overflow-hidden border-t border-line/60 bg-[#171624] py-14 sm:py-16 lg:py-20"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* TOP ROW: Heading (Left) + Orbital Diagram (Right) */}
                <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-12 items-center">
                    {/* LEFT COLUMN: Section Eyebrow, Heading & Supporting text */}
                    <div className="space-y-4">
                        <Reveal>
                            <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-rose/90 sm:text-[11px]">
                                07 · RIGHT NOW
                            </p>
                            <h2 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-txt sm:text-5xl lg:text-[54px]">
                                Currently<br />
                                <span className="text-rose">exploring.</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.12}>
                            <p className="max-w-md font-mono-tech text-xs leading-relaxed text-txt3 sm:text-[13px] pt-1">
                                Ideas I'm investigating, systems I'm trying to understand,
                                and things I'm learning by building.
                            </p>
                        </Reveal>
                    </div>

                    {/* RIGHT COLUMN: Orbital Diagram */}
                    <Reveal delay={0.2} className="w-full flex justify-center lg:justify-end">
                        <div className="w-full max-w-[540px] select-none">
                            <svg
                                viewBox="0 0 620 340"
                                className="w-full h-auto overflow-visible"
                                aria-label="Orbital diagram of currently exploring topics"
                            >
                                <defs>
                                    <radialGradient id="centralOrbGrad" cx="62%" cy="32%" r="58%">
                                        <stop offset="0%" stopColor="#E9A6A6" stopOpacity="0.95" />
                                        <stop offset="28%" stopColor="#C28294" stopOpacity="0.75" />
                                        <stop offset="60%" stopColor="#432E4E" stopOpacity="0.85" />
                                        <stop offset="90%" stopColor="#1E1929" stopOpacity="0.95" />
                                        <stop offset="100%" stopColor="#171624" stopOpacity="1" />
                                    </radialGradient>
                                    <filter id="orbSoftGlow" x="-25%" y="-25%" width="150%" height="150%">
                                        <feGaussianBlur stdDeviation="8" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>

                                {/* Concentric Orbital Rings centered at (340, 170) */}
                                {/* Ring 1: dashed innermost */}
                                <circle
                                    cx="340"
                                    cy="170"
                                    r="78"
                                    fill="none"
                                    stroke="#E9A6A6"
                                    strokeOpacity="0.22"
                                    strokeDasharray="3 4"
                                    strokeWidth="1"
                                />

                                {/* Ring 2: middle */}
                                <circle
                                    cx="340"
                                    cy="170"
                                    r="122"
                                    fill="none"
                                    stroke="#494052"
                                    strokeOpacity="0.65"
                                    strokeWidth="1"
                                />

                                {/* Ring 3: outer ring */}
                                <circle
                                    cx="340"
                                    cy="170"
                                    r="165"
                                    fill="none"
                                    stroke="#494052"
                                    strokeOpacity="0.5"
                                    strokeWidth="1"
                                />

                                {/* Ring 4: outermost faint ring */}
                                <circle
                                    cx="340"
                                    cy="170"
                                    r="210"
                                    fill="none"
                                    stroke="#494052"
                                    strokeOpacity="0.25"
                                    strokeWidth="1"
                                />

                                {/* Central Glowing Orb */}
                                <circle
                                    cx="340"
                                    cy="170"
                                    r="56"
                                    fill="url(#centralOrbGrad)"
                                    filter="url(#orbSoftGlow)"
                                />

                                {/* Topic Callout Lines, Nodes & Labels */}
                                {TOPICS.map((t) => {
                                    const { dot, callout } = t;
                                    return (
                                        <g key={t.id} className="transition-opacity duration-300 hover:opacity-100">
                                            {/* Connector leader path */}
                                            <path
                                                d={callout.line}
                                                fill="none"
                                                stroke="#E9A6A6"
                                                strokeOpacity="0.45"
                                                strokeWidth="1"
                                                className="hidden sm:inline"
                                            />

                                            {/* Outer halo pulse dot */}
                                            <circle
                                                cx={dot.cx}
                                                cy={dot.cy}
                                                r="6.5"
                                                fill="#E9A6A6"
                                                fillOpacity="0.25"
                                            />
                                            {/* Inner bright node core */}
                                            <circle
                                                cx={dot.cx}
                                                cy={dot.cy}
                                                r="2.8"
                                                fill="#F7F2F5"
                                            />

                                            {/* Text labels - hidden on xs mobile for a clean minimal orb graphic */}
                                            {callout.lines.map((line, i) => (
                                                <text
                                                    key={i}
                                                    x={callout.textX}
                                                    y={callout.textY + i * 14}
                                                    fill="#F7F2F5"
                                                    fontSize="11"
                                                    fontFamily="var(--font-sans, system-ui, sans-serif)"
                                                    textAnchor={callout.anchor}
                                                    className="hidden sm:inline select-none tracking-tight font-medium"
                                                >
                                                    {line}
                                                </text>
                                            ))}
                                        </g>
                                    );
                                })}
                            </svg>
                        </div>
                    </Reveal>
                </div>

                {/* BOTTOM ROW: Curved Horizontal Timeline Connecting 6 Topics */}
                {/* Desktop View (>= lg): Smooth Horizontal Wavy Timeline */}
                <Reveal delay={0.28} className="mt-14 hidden lg:block">
                    <div className="relative w-full">
                        {/* Wavy Horizontal Timeline Line */}
                        <div className="pointer-events-none absolute left-0 right-0 top-[18px] -translate-y-1/2 overflow-visible">
                            <svg
                                viewBox="0 0 1200 48"
                                className="w-full h-12"
                                preserveAspectRatio="none"
                                fill="none"
                            >
                                <defs>
                                    <linearGradient id="timelineLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#E9A6A6" stopOpacity="0.1" />
                                        <stop offset="10%" stopColor="#E9A6A6" stopOpacity="0.4" />
                                        <stop offset="50%" stopColor="#E9A6A6" stopOpacity="0.45" />
                                        <stop offset="90%" stopColor="#E9A6A6" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#E9A6A6" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M 0,24 C 50,24 60,24 100,24 C 150,24 240,18 300,18 C 360,18 440,26 500,26 C 560,26 640,22 700,22 C 760,22 840,19 900,19 C 960,19 1040,27 1100,27 C 1140,27 1170,24 1200,24"
                                    stroke="url(#timelineLineGrad)"
                                    strokeWidth="1.2"
                                />
                            </svg>
                        </div>

                        {/* 6 Column Topics Grid */}
                        <div className="relative z-10 grid grid-cols-6 gap-3">
                            {TOPICS.map((topic) => {
                                const Icon = topic.icon;
                                return (
                                    <div
                                        key={topic.id}
                                        className="group flex flex-col items-center text-center px-1"
                                    >
                                        {/* Circular Marker Button */}
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line/80 bg-[#1F1D36] text-rose shadow-sm transition-all duration-200 group-hover:scale-110 group-hover:border-rose group-hover:bg-[#25213b] group-hover:shadow-[0_0_16px_rgba(233,166,166,0.3)]">
                                            <Icon size={16} />
                                        </div>

                                        {/* Topic Title */}
                                        <h3 className="mt-3.5 font-display text-xs font-semibold text-txt transition-colors group-hover:text-rose sm:text-[13px] leading-snug">
                                            {topic.title}
                                        </h3>

                                        {/* Concise Description */}
                                        <p className="mt-1.5 font-mono-tech text-[10.5px] leading-relaxed text-txt3 sm:text-[11px]">
                                            {topic.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Reveal>

                {/* Mobile / Tablet View (< lg): Responsive Stacked Timeline */}
                <Reveal delay={0.28} className="mt-10 lg:hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-2">
                        {TOPICS.map((topic) => {
                            const Icon = topic.icon;
                            return (
                                <div
                                    key={topic.id}
                                    className="group flex items-start gap-3.5 sm:flex-col sm:items-center sm:text-center"
                                >
                                    {/* Circular Marker */}
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line/80 bg-[#1F1D36] text-rose shadow-sm transition-all duration-200 group-hover:border-rose group-hover:scale-105">
                                        <Icon size={16} />
                                    </div>

                                    <div>
                                        {/* Topic Title */}
                                        <h3 className="font-display text-xs font-semibold text-txt transition-colors group-hover:text-rose sm:mt-2.5 sm:text-sm">
                                            {topic.title}
                                        </h3>

                                        {/* Concise Description */}
                                        <p className="mt-0.5 font-mono-tech text-[11px] leading-relaxed text-txt3 sm:mt-1 sm:text-xs">
                                            {topic.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
