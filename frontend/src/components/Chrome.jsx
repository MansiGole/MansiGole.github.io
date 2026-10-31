import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const shouldReduceMotion = useReducedMotion();
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 260,
        damping: 32,
        restDelta: 0.001,
    });
    const scaleX = shouldReduceMotion ? scrollYProgress : smoothProgress;

    return (
        <motion.div
            style={{ scaleX }}
            className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[#E9A6A6] shadow-[0_0_8px_rgba(233,166,166,0.6)]"
            data-testid="scroll-progress"
            aria-hidden="true"
        />
    );
};

export const SideRail = () => (
    <div
        className="pointer-events-none fixed bottom-8 left-5 z-40 hidden flex-col items-center gap-4 xl:flex"
        aria-hidden="true"
    >
        <span className="h-16 w-px bg-line" />
        <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-txt3 [writing-mode:vertical-rl]">
            Mansi Gole — Portfolio — 2026
        </span>
    </div>
);
