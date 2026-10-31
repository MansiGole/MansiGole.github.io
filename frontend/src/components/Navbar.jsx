import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { toast } from "sonner";

const LINKS = [
    { id: "about", label: "About", testid: "nav-link-about" },
    { id: "skills", label: "Skills", testid: "nav-link-skills" },
    { id: "projects", label: "Projects", testid: "nav-link-projects" },
    { id: "experience", label: "Experience", testid: "nav-link-experience" },
    { id: "achievements", label: "Achievements", testid: "nav-link-achievements" },
    { id: "contact", label: "Contact", testid: "nav-link-contact" },
];

const SECTION_IDS = ["home", ...LINKS.map((l) => l.id)];

export const resumePlaceholder = () =>
    toast.info("Resume coming soon", {
        description: "The resume PDF hasn't been attached yet — it will download from here once added.",
    });

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => {
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b border-line/40 ${scrolled ? "bg-ink/90 backdrop-blur-md shadow-lg shadow-black/25" : "bg-ink/60 backdrop-blur-md"
                }`}
        >
            <nav className="section-shell flex h-16 items-center justify-between sm:h-[72px]">
                <a
                    href="#home"
                    data-testid="nav-brand-logo"
                    className="font-display text-lg font-bold tracking-tight text-txt transition-opacity hover:opacity-85"
                >
                    MG<span className="text-rose">.</span>
                </a>

                <div className="hidden items-center gap-1.5 lg:flex">
                    {LINKS.map((l) => (
                        <a
                            key={l.id}
                            href={`#${l.id}`}
                            data-testid={l.testid}
                            className={`rounded-md px-3 py-1.5 text-sm transition-colors duration-200 ${active === l.id ? "text-rose font-medium" : "text-txt2 hover:text-txt"
                                }`}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="/assets/Mansi-Gole-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="nav-resume-button"
                        className="ml-3 inline-flex items-center gap-2 rounded-lg border border-line bg-surface/30 px-3.5 py-1.5 text-xs font-mono-tech text-txt transition-all duration-200 hover:border-rose hover:text-rose active:scale-[0.98]"
                    >
                        <FileText size={14} className="text-rose" /> Resume
                    </a>
                </div>

                <button
                    className="rounded-md p-2 text-txt2 hover:text-txt lg:hidden"
                    onClick={() => setOpen(!open)}
                    data-testid="nav-mobile-menu-btn"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-b border-line bg-midnight/95 backdrop-blur-md lg:hidden"
                        data-testid="nav-mobile-menu"
                    >
                        <div className="section-shell flex flex-col gap-1 py-4">
                            {LINKS.map((l) => (
                                <a
                                    key={l.id}
                                    href={`#${l.id}`}
                                    onClick={() => setOpen(false)}
                                    className={`rounded-md px-3 py-2.5 text-sm ${active === l.id ? "text-rose font-medium" : "text-txt2"
                                        }`}
                                >
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="/assets/Mansi-Gole-Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpen(false)}
                                className="mt-2 inline-flex items-center gap-2 rounded-lg border border-line bg-surface/40 px-4 py-2.5 text-xs font-mono-tech text-txt"
                            >
                                <FileText size={14} className="text-rose" /> Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
