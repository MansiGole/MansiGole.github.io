export const SOCIALS = {
    github: "https://github.com/MansiGole",
    linkedin: "https://www.linkedin.com/in/mansi-gole125/",
    email: "golemansi41@gmail.com",
};

export const FLAGSHIP_PROJECTS = [
    {
        id: "nyxequities",
        number: "01",
        name: "NyxEquities",
        tagline: "Tokenized Equities & Off-Hours Execution Terminal",
        category: "WEB3 · FINANCIAL ENGINEERING · FULL-STACK",
        description:
            "An institutional DeFi workstation on BNB Smart Chain Mainnet that enables off-hours execution, real-time equity tracking, market drift analysis and automated strategies.",
        highlights: [
            "Pre-flight EVM transaction simulation",
            "Multi-issuer drift & spread matrix",
            "Venus Protocol liquidity sweeps",
            "HTTP-402 micro-oracle for AI agents",
        ],
        technicalSpecs: [
            { label: "Network", value: "BSC Mainnet (Chain ID 56)" },
            { label: "Simulation", value: "EVM Pre-Flight Dry-Run" },
            { label: "Protocols", value: "PancakeSwap v3 & Venus" },
        ],
        image: "/assets/nyxequities.png",
        imageAlt: "NyxEquities tokenized equities terminal",
        stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Wagmi", "Viem"],
        github: "https://github.com/MansiGole/NyxEquities",
        live: "https://nyxequities.onrender.com/",
        backendUrl: null,
        caseStudy: {
            overview:
                "NYSE and NASDAQ close at 16:00 ET Friday and reopen 09:30 ET Monday — traditional equity markets are inaccessible for 128.5 hours every week, over 76.5% of calendar time. NyxEquities turns fragmented tokenized equity markets into a single high-throughput execution workstation that runs 24/7 on BNB Smart Chain.",
            problem:
                "During the off-hours blackout, macro risk can't be hedged, tokenized real-world assets trade across fragmented issuers with pricing drift against the Friday close, and billions in idle stablecoins earn nothing over the weekend.",
            solution: [
                "Aggregate tokenized equities (bStocks, Ondo, xStocks) into one terminal with drift measured against the Friday 16:00 ET benchmark.",
                "Simulate every trade against live BSC Mainnet state before dispatch to validate balance deltas, gas bounds and slippage limits.",
                "Generate calldata to sweep idle weekend stablecoins into the Venus Protocol vUSDT market during the 65.5-hour weekend window.",
                "Stream pay-per-signal telemetry to autonomous AI agents through a native HTTP-402 micro-oracle verified via EIP-191 signatures.",
            ],
            architecture: [
                "Next.js 16 (App Router, Turbopack, React 19) + Tailwind CSS v4 interface layer",
                "Serverless edge API routes: /api/rwa spread matrix, /api/simulate pre-flight engine, /api/b402/signal micro-oracle",
                "Wagmi + Viem + TanStack Query for Web3 state and transaction flows",
                "Binance Web3 APIs for multi-issuer pool telemetry and dry-run simulation",
                "BSC Mainnet contracts: PancakeSwap v3 SwapRouter, Venus vUSDT market, BEP-20 RWA tokens",
                "Dynamic Wall Street market-hours engine (lib/marketHours.ts)",
            ],
            features: [
                "Multi-issuer spread & drift engine across bStocks, Ondo Finance and xStocks for NVDA, TSLA, AAPL and SPY",
                "Pre-flight simulation engine: EVM dry-runs validating balance deltas, gas estimates (~0.00042 BNB) and slippage bounds (<0.5%)",
                "Complete unsigned EVM calldata payloads ready for execution via Wagmi",
                "Automated capital-efficiency sweeps generating deposit calldata for the Venus vUSDT market",
                "HTTP-402 micro-oracle: AI agents query nocturnal fair-value signals for a 0.005 USDT micro-payment, verified on-chain via EIP-191 signatures",
                "Live deployment on Render with a full contract registry on BscScan",
            ],
            contribution: [
                "Designed and built the terminal end-to-end — architecture, interface, edge APIs and Web3 integration",
                "Implemented the pre-flight simulation engine and Venus Protocol yield-sweep workflows",
                "Implemented the HTTP-402 (b402) machine-to-machine payment-challenge flow",
                "Authored the architecture, DX and deployment documentation",
            ],
            challenges: [
                "Simulating transactions against live mainnet state without dispatching to the mempool",
                "Scoring route liquidity depth against spread penalties to pick the most cost-effective execution path",
                "Designing a cryptographic micro-payment challenge that needs no accounts or registration",
            ],
        },
    },
    {
        id: "unidata",
        number: "02",
        name: "UniData",
        tagline: "Blockchain-Powered Dataset Marketplace",
        category: "FULL-STACK · BLOCKCHAIN · DATA MARKETPLACE",
        description:
            "A hybrid Web2 + Web3 marketplace for discovering, evaluating and purchasing datasets with verifiable on-chain ownership — AI feasibility scoring, tBNB payments and wallet-based access control on BNB Smart Chain Testnet.",
        highlights: [
            "Smart contract purchase verification",
            "FastAPI purchase synchronization",
            "MetaMask & tBNB payments (BSC Testnet)",
            "Dataset quality & feasibility scoring",
        ],
        technicalSpecs: [
            { label: "Blockchain", value: "BSC Testnet (Chain ID 97)" },
            { label: "Smart Contract", value: "DatasetMarket.sol" },
            { label: "Backend API", value: "FastAPI + SQLAlchemy" },
        ],
        image: "/assets/unidata.png",
        imageAlt: "UniData marketplace interface",
        stack: ["React", "TypeScript", "Vite", "FastAPI", "Solidity", "SQLAlchemy"],
        github: "https://github.com/MansiGole/UniData",
        live: "https://uni-data-yhje.vercel.app/",
        backendUrl: "https://unidata-backend.onrender.com/docs",
        backendLabel: "API Docs",
        caseStudy: {
            overview:
                "UniData is a hybrid Web2 + Web3 dataset marketplace. Users browse datasets through a familiar web interface, evaluate ML feasibility with an AI scoring layer, and purchase blockchain-backed datasets with tBNB through MetaMask. The blockchain maintains an independently verifiable purchase state while the backend manages marketplace records, synchronization and access control.",
            problem:
                "Centralized dataset marketplaces keep the only record of who paid for what. Buyers get no independently verifiable proof of ownership, and access control depends entirely on trusting the platform operator's database.",
            solution: [
                "Use the blockchain only where verifiability matters most: payment, ownership state and purchase verification.",
                "Keep large dataset files off-chain — the DatasetMarket smart contract stores registration and purchase state, not data.",
                "Let the FastAPI backend handle marketplace records, purchase synchronization, entitlement verification and access-control logic.",
            ],
            architecture: [
                "React + Vite + TypeScript marketplace frontend",
                "MetaMask + ethers.js wallet connection and transaction signing",
                "Python + FastAPI backend — APIs, purchase sync, access control",
                "SQLAlchemy persistence for dataset and purchase records",
                "DatasetMarket Solidity contract deployed on BNB Smart Chain Testnet (Chain ID 97)",
                "AI/ML layer for dataset feasibility and ML-readiness scoring",
            ],
            features: [
                "Dataset discovery with metadata, status and quality information",
                "AI-powered feasibility score, dataset grade and strengths analysis",
                "tBNB purchase flow through MetaMask (verified at 0.001 tBNB end-to-end)",
                "On-chain hasAddressPurchased() verification — purchased state survives refresh and wallet reconnects",
                "Backend purchase synchronization: dataset ID, buyer wallet, transaction hash, amount, timestamp",
                "Wallet-based entitlement control — verified buyers get access, unauthorized wallets are rejected",
            ],
            contribution: [
                "Contributed to and extended the decentralized marketplace across the blockchain and backend layers",
                "FastAPI backend: purchase synchronization, entitlement verification and access-control logic",
                "DatasetMarket smart contract integration and BNB Smart Chain Testnet wiring",
                "End-to-end BSC Testnet purchase-flow testing (contract 0x4Ccd91247B98df05dCF18aBd70F27367DFcd9da4)",
            ],
            challenges: [
                "Keeping on-chain purchase state and backend records consistent without duplicating source-of-truth",
                "Restoring purchased state after page refresh or wallet reconnection via on-chain reads instead of frontend state",
                "Drawing a clean line between blockchain responsibilities and backend responsibilities",
            ],
        },
    },
    {
        id: "neural-ledger",
        number: "03",
        name: "Neural-Ledger",
        tagline: "Self-Healing Webhook Reconciliation Engine",
        category: "BACKEND ENGINEERING · DISTRIBUTED SYSTEMS · EVENT-DRIVEN",
        description:
            "An intelligent middleware that securely processes payment webhooks, detects reconciliation anomalies with AI, and autonomously repairs inconsistent transaction histories before they reach the ledger.",
        highlights: [
            "HMAC-SHA256 signature verification",
            "Redis-backed idempotency tracking",
            "BullMQ queue retry architecture",
            "Isolation Forest anomaly scoring",
        ],
        technicalSpecs: [
            { label: "Ingestion", value: "HMAC-SHA256 Signatures" },
            { label: "Idempotency", value: "Redis Key Tracking (TTL)" },
            { label: "Queue Engine", value: "BullMQ (Exponential Retries)" },
        ],
        image: "/assets/neural-ledger.png",
        imageAlt: "Neural-Ledger system access console",
        stack: ["Node.js", "Express.js", "Redis", "BullMQ", "PostgreSQL"],
        github: "https://github.com/MansiGole/Neural-Ledger",
        live: "https://neural-ledger.vercel.app/",
        backendUrl: null,
        caseStudy: {
            overview:
                "Payment gateways like Razorpay, Stripe and Cashfree communicate through asynchronous webhooks that can arrive out of order, duplicated, delayed — or never arrive at all. Neural-Ledger sits between the gateway and the merchant database as an intelligent reconciliation layer that validates, analyzes, repairs and monitors every webhook before it reaches the final ledger.",
            problem:
                "In real-world distributed systems, unreliable webhook delivery causes incorrect transaction states, ledger mismatches, manual reconciliation effort, financial reporting issues and compliance risk.",
            solution: [
                "Secure ingestion: HMAC signature verification and payload validation before any event is accepted.",
                "Reliable processing: Redis-based idempotency keys with TTL absorb duplicates, and BullMQ queues manage decoupled job processing with exponential retries.",
                "An intelligent transaction state machine validates the full payment lifecycle — initiated → processing → completed → failed.",
                "AI anomaly detection (Isolation Forest) and autonomous healing reconstruct missing events and synchronize the ledger.",
            ],
            architecture: [
                "Node.js + Express webhook ingestion and processing pipeline",
                "Redis for idempotency keys and replay-timing analysis",
                "BullMQ for decoupled, retry-managed queue processing",
                "Supabase (PostgreSQL) for ordered event persistence and ledger state",
                "Python + scikit-learn Isolation Forest for anomaly detection",
                "React + Vite + Tailwind real-time monitoring dashboard",
                "Docker-based deployment",
            ],
            features: [
                "HMAC signature verification and request integrity checks",
                "Duplicate event detection with Redis idempotency",
                "Transaction state machine catching missing, invalid and out-of-order events",
                "AI replay-attack detection — distinguishes legitimate retries from malicious replays",
                "Autonomous ledger healing: queries the gateway, reconstructs missing events, repairs histories",
                "AI explainability: root-cause analysis, incident summaries and recovery recommendations",
                "Real-time dashboard: live webhook monitoring, transaction explorer, manual review queue, compliance report export (PDF)",
            ],
            contribution: [
                "Backend Developer — designed and implemented the core reconciliation engine",
                "Built the complete webhook ingestion pipeline with HMAC signature verification",
                "Implemented Redis-based idempotency and the transaction state machine",
                "Integrated the Python AI anomaly-detection engine and AI replay-attack detection",
                "Developed the autonomous ledger-healing workflow and dashboard backend APIs",
                "Implemented compliance report (PDF) generation; Redis, BullMQ and Docker infrastructure; testing and deployment",
            ],
            challenges: [
                "Preventing duplicate processing during network recovery with idempotent key tracking",
                "Distinguishing legitimate gateway retries from replay attacks using timing analysis and AI fraud scoring",
                "Making autonomous ledger repair safe — heal only what can be verified against the gateway",
            ],
        },
    },
];

export const SECONDARY_PROJECTS = [
    {
        id: "cybertwin",
        number: "01",
        name: "CyberTwin Platform",
        tag: "Cybersecurity · Backend",
        description:
            "Interactive cyber-risk simulation platform built for Smart India Hackathon — real-time telemetry, ML threat detection and blockchain-verified audit trails.",
        contribution:
            "Engineered the backend & simulation layer: REST APIs, attack-simulation engine, risk analytics endpoints, blockchain audit verification and database schema. Team project (forked monorepo) with clear ownership of the backend.",
        stack: ["Python", "FastAPI", "REST APIs", "Blockchain", "ML Pipelines"],
        github: "https://github.com/MansiGole/cybertwin-platform",
        live: "https://sih-26-pi-umber.vercel.app/",
        image: "/assets/cybertwin.png",
        imageAlt: "CyberTwin platform preview",
    },
    {
        id: "warranty",
        number: "02",
        name: "Warranty Intelligence System",
        tag: "Full-Stack Development",
        description:
            "Full-stack warranty tracking and reminder platform — OCR receipt parsing, automated email expiry alerts and a real-time status dashboard.",
        contribution:
            "Implemented backend API routes with Express.js, Supabase (PostgreSQL) integration, JWT authentication and the automated Nodemailer reminder module. Hackathon team project.",
        stack: ["React", "Vite", "Node.js", "Express.js", "Supabase", "JWT", "Nodemailer", "Tailwind CSS"],
        github: "https://github.com/MansiGole/warranty-intelligence-system",
        live: "https://warranty-intelligence-system.vercel.app/",
        image: "/assets/warranty.png",
        imageAlt: "Warranty Intelligence System preview",
    },
    {
        id: "verify-wallet",
        number: "03",
        name: "Verify My Wallet",
        tag: "Web3 · Wallet Authentication",
        description:
            "A single-file Web3 dApp demonstrating wallet connection, message signing and signature verification — no gas, no smart contract required.",
        contribution:
            "Built end-to-end: MetaMask connection, personal_sign message flow (address + timestamp + nonce), signature recovery with web3.eth.accounts.recover and downloadable JSON proof.",
        stack: ["Web3.js", "MetaMask", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/MansiGole/verify-my-wallet",
        live: "https://verify-my-wallet-mansigoles-projects.vercel.app/",
        image: "/assets/verify-wallet.png",
        imageAlt: "Verify My Wallet dApp preview",
    },
    {
        id: "vitalink",
        number: "04",
        name: "VitaLink",
        tag: "Healthtech · Frontend",
        description:
            "Inclusive healthtech platform for elderly care — medicine adherence, appointment tracking and mood journaling with an elder-friendly interface.",
        contribution:
            "Built the working prototype: authentication flow, medicine and appointment tracking, mood logging and dashboard with React + Vite + Tailwind + shadcn/ui.",
        stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        github: "https://github.com/MansiGole/Vitalink-app",
        live: "https://vitalink-app.vercel.app/",
        image: "/assets/vitalink.png",
        imageAlt: "VitaLink elderly care platform preview",
    },
];

export const SKILL_CATEGORIES = [
    {
        title: "Programming Languages",
        icon: "Code2",
        sub: "Languages I use to build systems, APIs, smart contracts and applications.",
        skills: ["JavaScript", "TypeScript", "Python", "C", "SQL"],
    },
    {
        title: "Frontend Development",
        icon: "LayoutTemplate",
        sub: "Building responsive, accessible and high-performance interfaces.",
        skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Vite"],
    },
    {
        title: "Backend Development",
        icon: "Server",
        sub: "Architecting scalable APIs, event pipelines and backend services.",
        skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Webhooks", "JWT Authentication"],
    },
    {
        title: "Databases & Infrastructure",
        icon: "Database",
        sub: "Data modeling, caching strategies, relational stores and task queues.",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "BullMQ", "SQLAlchemy"],
    },
    {
        title: "Web3 & Blockchain",
        icon: "Blocks",
        sub: "Smart contracts, decentralized execution and on-chain telemetry.",
        skills: ["Solidity", "EVM", "ethers.js", "Wagmi", "Viem", "MetaMask", "BNB Smart Chain"],
    },
    {
        title: "Tools & Platforms",
        icon: "Wrench",
        sub: "Tooling for version control, API testing, deployment and UI design.",
        skills: ["Git", "GitHub", "Postman", "Vercel", "Render", "Figma"],
    },
];

export const SNAPSHOT = [
    { value: "03", label: "Flagship engineering projects", sub: "UniData · Neural-Ledger · NyxEquities" },
    { value: "03", label: "Hackathons & competitions", sub: "IndiaNext · Ignisia · iDEA 2.0" },
    { value: "02", label: "Leadership roles", sub: "CSI-SIESGST · RoboSumo" },
    { value: "2028", label: "Expected graduation", sub: "B.Tech ECS, SIESGST" },
];

export const EXPERIENCE = [
    {
        role: "Technical Coordinator",
        org: "Computer Society of India · SIESGST",
        period: "SEP 2026 – PRESENT",
        current: true,
        icon: "Users",
        points: [
            "Drive technical initiatives, organizing campus coding workshops and technical hackathons",
            "Contribute to the development and maintenance of chapter web platforms",
            "Collaborate with cross-functional student teams to execute technical project exhibitions",
        ],
        tags: ["Technical Initiatives", "Hackathons", "Web Platforms"],
    },
    {
        role: "Event Head — RoboSumo",
        org: "Technical Team · SIESGST",
        period: "JAN 2026",
        current: false,
        icon: "Trophy",
        points: [
            "Led technical coordination for the RoboSumo robotics competition under the technical team",
            "Coordinated competition arena setup and event match logistics",
            "Managed match rule enforcement and tournament operations during competition rounds",
        ],
        tags: ["Technical Coordination", "Robotics Competition", "Event Operations"],
    },
    {
        role: "Creative Coordinator",
        org: "Computer Society of India · SIESGST",
        period: "2025 – 2026",
        current: false,
        icon: "PenTool",
        points: [
            "Designed digital creatives and promotional material for student chapter initiatives",
            "Supported event execution and visual branding for flagship events including Enigma and Innovation",
            "Collaborated with content and design teams to maintain consistent visual guidelines",
        ],
        tags: ["Visual Design", "Event Promotion", "Creative Direction"],
    },
];

export const HACKATHONS = [
    {
        number: "01",
        date: "2025 – 26",
        name: "IndiaNext 2025–26",
        level: "HACKATHON // NATIONAL LEVEL",
        status: "Selected for Round 2",
        organizer: "IndiaNext",
        year: "2025–26",
        description: "Selected for Round 2 at IndiaNext national hackathon for a GenAI-based approach to phishing email and malicious URL detection.",
        tags: ["GenAI", "Cybersecurity", "URL Analysis", "National Hackathon"],
        featured: true,
        link: null,
    },
    {
        number: "02",
        date: "2026",
        name: "Ignisia '26",
        level: "HACKATHON // NATIONAL LEVEL",
        status: "Participated",
        organizer: "MIT World Peace University, Pune",
        year: "2026",
        description: "Participated in a 24-hour national-level AI hackathon focused on building AI-driven solutions to real-world problem statements.",
        tags: ["Artificial Intelligence", "Problem Solving", "Rapid Prototyping", "24h Hackathon"],
        featured: false,
        link: "https://unstop.com/o/H9T12Ll?lb=v2BuF1P&utm_medium=Share&utm_source=WhatsApp",
    },
    {
        number: "03",
        date: "2025",
        name: "iDEA 2.0 Hackathon",
        level: "HACKATHON // NATIONAL LEVEL",
        status: "Participated",
        organizer: "Union Bank of India",
        year: "2025",
        description: "Participated in Union Bank of India's national hackathon, working on a proposed solution for tracking fund flows within banks for fraud detection.",
        tags: ["Fintech", "Fraud Detection", "Banking Systems", "Transaction Tracking"],
        featured: false,
        link: null,
    },
];

export const EXPLORING = [
    "Data Structures & Algorithms",
    "Backend Engineering",
    "Distributed Systems",
    "Web3 & Smart Contracts",
    "AI / ML",
    "Modern Software Architecture",
];
