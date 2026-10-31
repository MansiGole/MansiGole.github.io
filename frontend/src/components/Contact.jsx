import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { SOCIALS } from "../data/content";
import {
    Github,
    Linkedin,
    Mail,
    User,
    FileText,
    MessageSquare,
    ArrowRight,
    Loader2,
} from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL || ""}/api`;

const INITIAL = { name: "", email: "", subject: "", message: "", website: "" };

export const Contact = () => {
    const [form, setForm] = useState(INITIAL);
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);

    const set = (k) => (e) => {
        setForm({ ...form, [k]: e.target.value });
        if (errors[k]) setErrors({ ...errors, [k]: null });
    };

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = "Please enter your name.";
        if (!form.email.trim()) errs.email = "Please enter your email.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            errs.email = "That email doesn't look right.";
        if (!form.subject.trim()) errs.subject = "A short subject helps me route it.";
        if (form.message.trim().length < 10)
            errs.message = "Tell me a little more (min 10 characters).";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const submit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setSending(true);
        try {
            await axios.post(`${API}/contact`, form);
            toast.success("Message sent — thank you!", {
                description: "I'll get back to you as soon as I can.",
            });
            setForm(INITIAL);
        } catch (err) {
            toast.error("Couldn't send your message", {
                description: "Please try again, or email me directly at golemansi41@gmail.com.",
            });
        } finally {
            setSending(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative scroll-mt-20 overflow-hidden border-t border-line/60 bg-[#171624] py-12 sm:py-14 lg:py-16"
        >
            {/* Subtle Abstract Orbital Graphic in Upper-Right Background */}
            <div
                className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] select-none opacity-85"
                aria-hidden="true"
            >
                <svg className="h-full w-full" viewBox="0 0 500 500" fill="none">
                    <defs>
                        <radialGradient id="contactSphereGrad" cx="50%" cy="30%" r="50%">
                            <stop offset="0%" stopColor="#E9A6A6" stopOpacity="0.30" />
                            <stop offset="35%" stopColor="#3F3351" stopOpacity="0.45" />
                            <stop offset="80%" stopColor="#171624" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="orbitLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#E9A6A6" stopOpacity="0.45" />
                            <stop offset="65%" stopColor="#E9A6A6" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#E9A6A6" stopOpacity="0.05" />
                        </linearGradient>
                    </defs>
                    {/* Planetary sphere */}
                    <circle cx="430" cy="70" r="150" fill="url(#contactSphereGrad)" />
                    {/* Orbital trajectory curve */}
                    <path
                        d="M 230,0 C 230,120 320,240 500,260"
                        stroke="url(#orbitLineGrad)"
                        strokeWidth="1.2"
                    />
                    {/* Glowing orbital point */}
                    <circle cx="272" cy="160" r="3.5" fill="#E9A6A6" />
                    <circle cx="272" cy="160" r="8" fill="#E9A6A6" fillOpacity="0.28" />
                </svg>
            </div>

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:items-end">
                    {/* LEFT COLUMN — Introduction & Direct Contact Links */}
                    <div className="space-y-5">
                        <Reveal>
                            {/* Section Label */}
                            <p className="mb-2 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-rose/90 sm:text-[11px]">
                                08 · CONTACT
                            </p>

                            {/* Main Heading */}
                            <h2 className="font-display text-2xl font-bold leading-[1.16] tracking-tight text-txt sm:text-3xl lg:text-[34px]">
                                Have an interesting<br className="hidden sm:inline" />{" "}
                                problem to solve?<br className="hidden sm:inline" />{" "}
                                Let’s build something<br className="hidden sm:inline" />{" "}
                                <span className="text-rose">meaningful.</span>
                            </h2>
                        </Reveal>

                        {/* Supporting Text */}
                        <Reveal delay={0.12}>
                            <p className="mt-2.5 max-w-md font-mono-tech text-xs leading-relaxed text-txt3 sm:text-[13px]">
                                Whether it's an internship, a collaboration, a hackathon team or just a good
                                engineering conversation — my inbox is open.
                            </p>
                        </Reveal>

                        {/* Contact Methods List */}
                        <Reveal delay={0.22}>
                            <div className="mt-5 space-y-2.5 pt-1">
                                {/* EMAIL */}
                                <div className="border-b border-line/40 pb-2.5">
                                    <a
                                        href={`mailto:${SOCIALS.email}`}
                                        className="group flex items-center gap-3.5"
                                        data-testid="contact-email-link"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line/80 bg-[#1F1D36]/80 text-rose shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:border-rose group-hover:bg-[#25213b]">
                                            <Mail size={16} />
                                        </div>
                                        <div>
                                            <p className="font-mono-tech text-[9.5px] uppercase tracking-[0.2em] text-txt3">
                                                EMAIL
                                            </p>
                                            <p className="mt-0.5 text-xs font-medium text-txt transition-colors group-hover:text-rose sm:text-[13px]">
                                                {SOCIALS.email}
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                {/* GITHUB */}
                                <div className="border-b border-line/40 pb-2.5">
                                    <a
                                        href={SOCIALS.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3.5"
                                        data-testid="contact-github-link"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line/80 bg-[#1F1D36]/80 text-rose shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:border-rose group-hover:bg-[#25213b]">
                                            <Github size={16} />
                                        </div>
                                        <div>
                                            <p className="font-mono-tech text-[9.5px] uppercase tracking-[0.2em] text-txt3">
                                                GITHUB
                                            </p>
                                            <p className="mt-0.5 text-xs font-medium text-txt transition-colors group-hover:text-rose sm:text-[13px]">
                                                github.com/MansiGole
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                {/* LINKEDIN */}
                                <div className="pt-0.5">
                                    <a
                                        href={SOCIALS.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3.5"
                                        data-testid="contact-linkedin-link"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line/80 bg-[#1F1D36]/80 text-rose shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:border-rose group-hover:bg-[#25213b]">
                                            <Linkedin size={16} />
                                        </div>
                                        <div>
                                            <p className="font-mono-tech text-[9.5px] uppercase tracking-[0.2em] text-txt3">
                                                LINKEDIN
                                            </p>
                                            <p className="mt-0.5 text-xs font-medium text-txt transition-colors group-hover:text-rose sm:text-[13px]">
                                                linkedin.com/in/mansi-gole125
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* RIGHT COLUMN — Clean Integrated Contact Form */}
                    <Reveal delay={0.2} className="w-full">
                        <div>
                            {/* Response SLA Note */}
                            <p className="mb-2 text-right font-mono-tech text-[10px] uppercase tracking-[0.18em] text-txt3 sm:text-[10.5px]">
                                I USUALLY RESPOND WITHIN 24–48 HOURS.
                            </p>

                            <form
                                onSubmit={submit}
                                noValidate
                                className="space-y-3"
                                data-testid="contact-form"
                            >
                                {/* Honeypot field */}
                                <input
                                    type="text"
                                    name="website"
                                    value={form.website}
                                    onChange={set("website")}
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                />

                                {/* Name & Email Fields Row */}
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {/* Name Input */}
                                    <div>
                                        <div className="relative">
                                            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-txt3/60">
                                                <User size={14} />
                                            </span>
                                            <input
                                                type="text"
                                                placeholder="Your name"
                                                value={form.name}
                                                onChange={set("name")}
                                                data-testid="contact-input-name"
                                                className={`w-full rounded-xl border bg-[#1F1D36]/70 py-2.5 pl-9 pr-3.5 text-xs sm:text-sm text-txt placeholder:text-txt3/60 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-rose/30 ${
                                                    errors.name
                                                        ? "border-rose"
                                                        : "border-[#494052]/80 focus:border-rose/70"
                                                }`}
                                            />
                                        </div>
                                        {errors.name && (
                                            <p
                                                className="mt-1 font-mono-tech text-[11px] text-rose"
                                                data-testid="contact-error-name"
                                            >
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <div className="relative">
                                            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-txt3/60">
                                                <Mail size={14} />
                                            </span>
                                            <input
                                                type="email"
                                                placeholder="Your email"
                                                value={form.email}
                                                onChange={set("email")}
                                                data-testid="contact-input-email"
                                                className={`w-full rounded-xl border bg-[#1F1D36]/70 py-2.5 pl-9 pr-3.5 text-xs sm:text-sm text-txt placeholder:text-txt3/60 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-rose/30 ${
                                                    errors.email
                                                        ? "border-rose"
                                                        : "border-[#494052]/80 focus:border-rose/70"
                                                }`}
                                            />
                                        </div>
                                        {errors.email && (
                                            <p
                                                className="mt-1 font-mono-tech text-[11px] text-rose"
                                                data-testid="contact-error-email"
                                            >
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Subject Input */}
                                <div>
                                    <div className="relative">
                                        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-txt3/60">
                                            <FileText size={14} />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            value={form.subject}
                                            onChange={set("subject")}
                                            data-testid="contact-input-subject"
                                            className={`w-full rounded-xl border bg-[#1F1D36]/70 py-2.5 pl-9 pr-3.5 text-xs sm:text-sm text-txt placeholder:text-txt3/60 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-rose/30 ${
                                                errors.subject
                                                    ? "border-rose"
                                                    : "border-[#494052]/80 focus:border-rose/70"
                                            }`}
                                        />
                                    </div>
                                    {errors.subject && (
                                        <p
                                            className="mt-1 font-mono-tech text-[11px] text-rose"
                                            data-testid="contact-error-subject"
                                        >
                                            {errors.subject}
                                        </p>
                                    )}
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <div className="relative">
                                        <span className="pointer-events-none absolute left-3.5 top-3 text-txt3/60">
                                            <MessageSquare size={14} />
                                        </span>
                                        <textarea
                                            placeholder="Your message"
                                            rows={3}
                                            value={form.message}
                                            onChange={set("message")}
                                            data-testid="contact-textarea-message"
                                            className={`w-full resize-none rounded-xl border bg-[#1F1D36]/70 py-2.5 pl-9 pr-3.5 text-xs sm:text-sm text-txt placeholder:text-txt3/60 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-rose/30 ${
                                                errors.message
                                                    ? "border-rose"
                                                    : "border-[#494052]/80 focus:border-rose/70"
                                            }`}
                                        />
                                    </div>
                                    {errors.message && (
                                        <p
                                            className="mt-1 font-mono-tech text-[11px] text-rose"
                                            data-testid="contact-error-message"
                                        >
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* Send Message Pill Button */}
                                <div className="pt-1">
                                    <button
                                        type="submit"
                                        disabled={sending}
                                        data-testid="contact-submit-btn"
                                        className="group inline-flex items-center gap-2 rounded-full bg-[#E9A6A6] px-7 py-2.5 text-xs sm:text-sm font-semibold text-[#171624] shadow-md transition-all duration-200 hover:bg-[#f2bfbf] hover:shadow-[0_0_20px_rgba(233,166,166,0.3)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        <span>{sending ? "Sending…" : "Send Message"}</span>
                                        {sending ? (
                                            <Loader2 size={15} className="animate-spin" />
                                        ) : (
                                            <ArrowRight
                                                size={15}
                                                className="transition-transform duration-200 group-hover:translate-x-1"
                                            />
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    const navLinks = [
        { label: "Home", href: "#", id: "home" },
        { label: "About", href: "#about", id: "about" },
        { label: "Projects", href: "#projects", id: "projects" },
        { label: "Hackathons", href: "#achievements", id: "achievements" },
        { label: "Contact", href: "#contact", id: "contact" },
    ];

    const handleNavClick = (e, id) => {
        if (id === "home") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const el = document.getElementById(id);
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="relative border-t border-line/60 bg-[#171624] py-7 sm:py-8">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal delay={0.08}>
                    <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-4">
                        {/* LEFT — Branding and copyright */}
                    <div className="flex items-center gap-3.5 sm:gap-4">
                        {/* MG Monogram with accent underline */}
                        <a
                            href="#"
                            onClick={(e) => handleNavClick(e, "home")}
                            className="group flex flex-col items-center justify-center shrink-0"
                            aria-label="Back to top"
                        >
                            <span className="font-display text-xl font-bold tracking-tight text-rose transition-colors duration-200 group-hover:text-rose/80 sm:text-2xl">
                                MG
                            </span>
                            <span className="mt-0.5 block h-[1.5px] w-3.5 bg-rose/60 transition-all duration-200 group-hover:w-5 group-hover:bg-rose" />
                        </a>

                        {/* Thin vertical divider */}
                        <div className="h-8 w-[1px] bg-line/60" aria-hidden="true" />

                        {/* Copyright & Tagline */}
                        <div>
                            <p
                                className="font-mono-tech text-xs font-medium text-txt sm:text-[13px]"
                                data-testid="footer-copyright"
                            >
                                Mansi Gole <span className="text-rose/80">©</span> 2026
                            </p>
                            <p className="mt-0.5 font-mono-tech text-[10.5px] text-txt3 sm:text-[11.5px]">
                                Engineering ideas for a better tomorrow.
                            </p>
                        </div>
                    </div>

                    {/* CENTER — Navigation links */}
                    <nav
                        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                        aria-label="Footer Navigation"
                    >
                        {navLinks.map((link, idx) => (
                            <div key={link.label} className="flex items-center gap-2 sm:gap-3">
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className="font-mono-tech text-xs text-txt2 transition-colors duration-200 hover:text-rose sm:text-[13px]"
                                    data-testid={`footer-nav-${link.label.toLowerCase()}`}
                                >
                                    {link.label}
                                </a>
                                {idx < navLinks.length - 1 && (
                                    <span
                                        className="font-mono-tech text-xs text-rose/60 select-none"
                                        aria-hidden="true"
                                    >
                                        /
                                    </span>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* RIGHT — Social links */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Thin vertical divider on desktop */}
                        <div
                            className="hidden h-8 w-[1px] bg-line/60 md:block"
                            aria-hidden="true"
                        />

                        {/* Outlined square icon containers */}
                        <div className="flex items-center gap-2 sm:gap-2.5">
                            <a
                                href={SOCIALS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-8.5 w-8.5 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-line/80 bg-[#1F1D36]/80 text-txt2 shadow-sm transition-all duration-200 hover:scale-105 hover:border-rose hover:text-rose active:scale-95"
                                aria-label="GitHub Profile"
                                data-testid="footer-social-github"
                            >
                                <Github size={15} />
                            </a>
                            <a
                                href={SOCIALS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-8.5 w-8.5 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-line/80 bg-[#1F1D36]/80 text-txt2 shadow-sm transition-all duration-200 hover:scale-105 hover:border-rose hover:text-rose active:scale-95"
                                aria-label="LinkedIn Profile"
                                data-testid="footer-social-linkedin"
                            >
                                <Linkedin size={15} />
                            </a>
                            <a
                                href={`mailto:${SOCIALS.email}`}
                                className="flex h-8.5 w-8.5 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-line/80 bg-[#1F1D36]/80 text-txt2 shadow-sm transition-all duration-200 hover:scale-105 hover:border-rose hover:text-rose active:scale-95"
                                aria-label="Send email to Mansi Gole"
                                data-testid="footer-social-email"
                            >
                                <Mail size={15} />
                            </a>
                        </div>
                    </div>
                </div>
                </Reveal>
            </div>
        </footer>
    );
};
