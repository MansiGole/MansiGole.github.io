import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink, FileCode2 } from "lucide-react";

const Block = ({ label, children }) => (
    <div>
        <p className="eyebrow mb-3 !text-[10px]">{label}</p>
        {children}
    </div>
);

const BulletList = ({ items }) => (
    <ul className="space-y-2">
        {items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-txt2">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-rose" />
                {item}
            </li>
        ))}
    </ul>
);

export const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        if (project) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", onKey);
        }
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [project, onClose]);

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/80 backdrop-blur-sm sm:items-center sm:p-6"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${project.name} case study`}
                    data-testid="flagship-modal"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 24 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-line bg-midnight shadow-2xl shadow-black/50 sm:rounded-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            data-testid="flagship-modal-close-btn"
                            aria-label="Close case study"
                            className="sticky left-full top-4 z-10 mr-4 flex -translate-x-0 items-center rounded-md border border-line bg-surface/90 p-2 text-txt2 backdrop-blur transition-colors hover:border-rose hover:text-rose"
                        >
                            <X size={16} />
                        </button>

                        <div className="-mt-12 aspect-[16/7] w-full overflow-hidden border-b border-line">
                            <img
                                src={project.image}
                                alt={project.imageAlt}
                                className="h-full w-full object-cover object-top"
                            />
                        </div>

                        <div className="space-y-10 p-6 sm:p-10">
                            <div>
                                <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-rose">
                                    {project.number} · {project.category}
                                </p>
                                <h3 className="mt-2 font-display text-2xl font-bold text-txt sm:text-3xl">
                                    {project.name}
                                </h3>
                                <p className="mt-1 font-display text-base text-txt2">{project.tagline}</p>
                                <p className="mt-4 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-txt3">
                                    status: production · source: open · links verified: oct 2026
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid="modal-github-link"
                                        className="inline-flex items-center gap-1.5 rounded-lg border border-line px-4 py-2.5 text-xs text-txt transition-colors hover:border-rose hover:text-rose"
                                    >
                                        <Github size={14} /> Repository
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-testid="modal-live-link"
                                            className="inline-flex items-center gap-1.5 rounded-lg bg-rose px-4 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-[#f0bab0]"
                                        >
                                            <ExternalLink size={14} /> Live Application
                                        </a>
                                    )}
                                    {project.backendUrl && (
                                        <a
                                            href={project.backendUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-testid="modal-backend-link"
                                            className="inline-flex items-center gap-1.5 rounded-lg border border-line px-4 py-2.5 text-xs text-txt transition-colors hover:border-rose hover:text-rose"
                                        >
                                            <FileCode2 size={14} /> {project.backendLabel || "Backend API"}
                                        </a>
                                    )}
                                </div>

                                {project.technicalSpecs && project.technicalSpecs.length > 0 && (
                                    <div
                                        className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3"
                                        data-testid="modal-technical-specs"
                                    >
                                        {project.technicalSpecs.map((spec) => (
                                            <div
                                                key={spec.label}
                                                className="rounded-xl border border-line/70 bg-[#1F1D36]/80 p-3 shadow-sm"
                                            >
                                                <p className="font-mono-tech text-[10px] uppercase tracking-[0.16em] text-rose">
                                                    {spec.label}
                                                </p>
                                                <p className="mt-1 font-mono-tech text-xs font-medium text-txt leading-snug">
                                                    {spec.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Block label="Overview">
                                <p className="text-sm leading-relaxed text-txt2">{project.caseStudy.overview}</p>
                            </Block>

                            <Block label="Problem">
                                <p className="text-sm leading-relaxed text-txt2">{project.caseStudy.problem}</p>
                            </Block>

                            <Block label="Proposed Solution">
                                <BulletList items={project.caseStudy.solution} />
                            </Block>

                            <Block label="Technical Architecture">
                                <BulletList items={project.caseStudy.architecture} />
                            </Block>

                            <Block label="Key Features">
                                <BulletList items={project.caseStudy.features} />
                            </Block>

                            <Block label="My Contribution">
                                <BulletList items={project.caseStudy.contribution} />
                            </Block>

                            <Block label="Challenges & Engineering Decisions">
                                <BulletList items={project.caseStudy.challenges} />
                            </Block>

                            <Block label="Technology Stack">
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((t) => (
                                        <span key={t} className="chip">{t}</span>
                                    ))}
                                </div>
                            </Block>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
