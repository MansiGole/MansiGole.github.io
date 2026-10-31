PRD — Mansi Gole Personal Portfolio
Original Problem Statement
Build a premium, modern, editorial-style personal portfolio for Mansi Gole (B.Tech ECS, SIESGST, Navi Mumbai, graduating 2028) positioning her as an aspiring software engineer focused on full-stack, backend, Web3 and distributed systems. Three flagship projects (UniData, Neural-Ledger, NyxEquities) must dominate with equal visual weight; secondary projects (CyberTwin, Warranty Intelligence System, Verify My Wallet, VitaLink) shown separately. Exact palette: #1F1D36 / #3F3351 / #864879 / #E9A6A6 on #171624 background. No fabricated content; use real GitHub README data, real screenshots and verified live links. Working contact form (MongoDB + email). Fully responsive, SEO metadata, accessible.

Architecture
Frontend: React 19 + Tailwind + Framer Motion + sonner; single-page sections; all content centralized in src/data/content.js
Backend: FastAPI + Motor (MongoDB); POST /api/contact (validation, honeypot, IP rate limit, MongoDB storage, Emergent-managed email notification); GET /api/, /api/status retained
Assets: real screenshots of the three live flagship apps captured into frontend/public/assets/
User Personas
Recruiters / internship coordinators evaluating engineering depth
Hackathon teammates and collaborators
Peers and mentors in the SIESGST / Web3 community
Implemented (2026-10-30)
Full design system: plum palette, Space Grotesk / Inter / JetBrains Mono, spotlight cards, blueprint grid, corner ticks, ghost section numbers, side rail, scroll progress bar
Sticky nav with active-section highlighting + mobile menu; MG. wordmark + SVG favicon
Hero: masked line-by-line reveal, terminal line, operator profile card with mono metadata
About + verified snapshot stats; Skills (6 categories, no fake percentages)
Flagship Projects: 3 equal cards with REAL screenshots (captured from live deployments), real GitHub/live/backend links (UniData: uni-data-yhje.vercel.app + unidata-backend.onrender.com/docs; Neural-Ledger: neural-ledger.vercel.app; NyxEquities: nyxequities.onrender.com) + full case-study modals built from actual READMEs
Secondary Projects: CyberTwin (fork, contribution clearly attributed), Warranty Intelligence, Verify My Wallet, VitaLink — all with real live links
Experience timeline (CSI-SIESGST Technical Coordinator, RoboSumo Event Head); Hackathons (IndiaNext Round 2 selected, ByteCamp '26, iDEA 2.0 — participation honestly labelled); Certifications placeholder slots; Currently Exploring + Beyond Code
Contact: validated form → MongoDB + email notification to golemansi41@gmail.com (verified: stored with email_sent=true, email_id returned); copy-email button; footer
SEO meta + OG tags; responsive verified at 375/768/1366px, no horizontal overflow
Backlog
P0: Wire real resume PDF to Download Resume buttons (awaiting file from user)
P0: Replace certification placeholders with real certificates (awaiting data)
P1: Real profile photograph in hero card (placeholder monogram in use)
P1: Creative Coordinator role details (dates/responsibilities unverified — skipped)
P2: Beyond Code personal hobbies (user to supply)
P2: Demo video embeds if user records walkthroughs
P2: Blog / writing section
Next Tasks
User supplies resume PDF → wire download
User supplies certifications list → fill slots
Optional: deploy to Vercel via user's own account