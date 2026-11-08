// type decides the filter tab on /work: "health", "fullstack" or "frontend"
export const projects = [
  {
    slug: "prima",
    type: "health",
    title: "Prima",
    category: "Digital Health · Offline First",
    year: "2026",

    shortDescription:
      "An offline first patient register and visit record for Primary Health Centres in Nigeria.",

    description:
      "Prima lets nurses and community health workers register patients, record visits, track vaccines and prepare the monthly LGA report on a phone, with or without network. Everything saves on the device first and syncs with the cloud in the background.",

    image: "/projects/prima.jpg",

    live: "https://prima-landing-cut.pages.dev",
    github: "https://github.com/delightofili/Prima",

    featured: true,

    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Dexie (IndexedDB)",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "FastAPI",
      "Python",
      "Paystack",
      "PWA",
      "FHIR",
      "DHIS2",
      "Tailwind CSS",
      "Zod",
      "Cloudflare Pages",
    ],

    role: "Founder and sole developer",

    overview: [
      "Paper registers at PHCs lose patients, create duplicates and turn the monthly LGA report into a slow manual count. Many clinics also have unreliable network, so Prima saves everything on the phone first and syncs in the background.",
      "Patient registration, visits with vitals, vaccines, follow ups and duplicate clean up.",
      "Children linked to their guardians, so a baby's card and the mother's antenatal record finally connect.",
      "Clinic Wi-Fi sync between phones with no internet at all, protected by a shared clinic key.",
      "Available in English, Igbo, Hausa and Yoruba, installable on Android as a PWA.",
      "Built in public in Enugu, day by day.",
    ],

    challenges: [
      "Making every screen work fully offline while keeping two way sync with the cloud correct when phones reconnect.",
      "Keeping each facility's patient records private to its own staff, with every sensitive action logged.",
      "Letting two phones exchange missing records over local Wi-Fi with no internet, while only phones from the same clinic can join.",
      "Taking payments safely, where the phone never decides a price or that something was paid.",
      "Preparing for the Nigeria Data Protection Act and clinical safety before any real patient data goes in.",
      "Designing for low end Android phones, gloves, low battery and nurses with very little time.",
    ],

    engineering: [
      {
        title: "Offline First Data Layer",
        description:
          "Every record is written to IndexedDB through Dexie first, then queued for upload. The app never waits on the network to save, and a newer copy of a record always wins over a late older one.",
      },
      {
        title: "Phone to Phone Clinic Sync",
        description:
          "Two phones pair with QR codes and swap the records each is missing over the clinic Wi-Fi. Each phone must prove it holds the clinic key, which rotates by itself when someone leaves the team.",
      },
      {
        title: "Row Level Security per Facility",
        description:
          "Supabase Auth with Postgres row level security keeps each facility's records private to its staff, with roles, a passcode lock and an audit log of sensitive actions.",
      },
      {
        title: "Guardian and Family Links",
        description:
          "Children are linked to their guardians, a phone search shows the guardian and their children, and a mother's antenatal record connects to her baby's card.",
      },
      {
        title: "FHIR and DHIS2 Export",
        description:
          "Records export to FHIR, with guardians as RelatedPerson, and to DHIS2 for health reporting, alongside an automatic monthly LGA summary.",
      },
      {
        title: "Server Side Payments",
        description:
          "Paystack plans run through Supabase Edge Functions. The server picks the price, verifies payment with Paystack directly, checks the webhook signature, and only then changes the plan.",
      },
      {
        title: "Four Languages, No Extra Packages",
        description:
          "A small translation framework keeps every sentence in one English dictionary, with Igbo, Hausa and Yoruba loaded only when chosen, so it still works offline.",
      },
      {
        title: "Python Matching Service",
        description:
          "A FastAPI service handles duplicate patient matching and the LGA report, with on device fallbacks so the app never breaks when the service is down.",
      },
      {
        title: "Data Protection and Safety Gate",
        description:
          "An automated gate checks the database and the codebase for patient data leaks, alongside written Nigeria Data Protection Act and clinical safety documents that must be signed off before real data.",
      },
    ],
  },
  {
    slug: "medcore-hms",
    type: "health",
    title: "MedCore HMS",
    category: "Digital Health · Hospital Management",
    year: "2026",

    shortDescription:
      "A multi tenant hospital management system covering the full outpatient journey, from reception to billing.",

    description:
      "MedCore HMS covers registration, booking, check in, consultation notes with vitals, prescriptions and billing, with every hospital's data kept fully separate. Built as my project for the Internmo Full Stack Development Internship.",

    image: "/projects/medcore-hms.jpg",

    live: "https://medcore-hms-delightsome.vercel.app",
    github: "https://github.com/delightofili/medcore-hms",

    featured: true,

    stack: [
      "NestJS",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "JWT",
      "React Hook Form",
      "Zod",
      "Docker Compose",
      "pnpm workspaces",
      "Tailwind CSS",
    ],

    role: "Fullstack Developer (Internmo internship)",

    overview: [
      "Reception registers the patient and books them into an open slot with their doctor.",
      "On arrival the patient is checked in, then the doctor records vitals and notes and signs the record, which locks it.",
      "Prescriptions go to the pharmacy to be dispensed, and billing raises invoices and records full or part payments.",
      "Nine roles, each seeing only what they should, across many hospitals in one system.",
    ],

    challenges: [
      "Stopping two receptionists from booking the same doctor slot at the same moment.",
      "Keeping every hospital's data completely separate inside one shared database.",
      "Modelling clinical and billing workflows so records can only move through valid states.",
      "Keeping sessions secure without making staff sign in again and again.",
    ],

    engineering: [
      {
        title: "No Double Booking",
        description:
          "Booking runs inside a SERIALIZABLE Postgres transaction that checks schedules, leave and overlapping appointments. If two bookings race, one is rejected with a clear message instead of a silent clash.",
      },
      {
        title: "State Machines for Every Workflow",
        description:
          "Appointments, prescriptions and invoices each have an explicit table of allowed transitions, and updates match on the current status so concurrent changes cannot corrupt a record.",
      },
      {
        title: "Multi Tenant Access Control",
        description:
          "Every request is checked against the user's hospital, with role based access for nine roles enforced on the server and reflected in the UI.",
      },
      {
        title: "Rotating Refresh Tokens",
        description:
          "Short lived JWT access tokens with silent refresh, and refresh tokens stored in Redis and rotated on every use.",
      },
      {
        title: "Signed Clinical Records",
        description:
          "Consultations move from draft to signed, need a diagnosis to be signed, and cannot be edited afterwards. Allergy warnings appear on the patient page and again during consultation.",
      },
      {
        title: "Safe Payments",
        description:
          "Invoices support part payments with overpayment protection, and idempotency keys stop a double click from recording the same payment twice.",
      },
    ],
  },
  {
    slug: "nexus-ledger",
    type: "fullstack",
    title: "Nexus Ledger",
    category: "Fintech & Blockchain Infrastructure",
    year: "2026",

    shortDescription:
      "An enterprise-oriented financial ledger backend combining double-entry accounting, payment processing, and blockchain reconciliation.",

    description:
      "Built to explore the engineering challenges behind reliable financial systems, Nexus Ledger replaces mutable balance updates with an auditable ledger where every transaction is represented by balanced entries. It combines a REST API, relational database architecture, payment provider integrations, webhook processing, and blockchain infrastructure to demonstrate how traditional fintech systems and Web3 payment flows can work together.",

    image: "/projects/nexus_ledger_preview.png",

    live: "",
    github: "https://github.com/delightofili/Nexus-Ledger",

    featured: true,

    stack: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Neon",
      "Paystack",
      "Stripe",
      "Ethereum",
      "ERC-20",
      "ethers.js",
      "Alchemy",
      "Zod",
      "decimal.js",
    ],

    role: "Fullstack Developer",

    overview: [
      "Nexus Ledger is a backend financial infrastructure project designed around the principles of real-world accounting systems. It uses double-entry bookkeeping, immutable ledger entries, precise monetary arithmetic, and transactional safeguards to maintain financial consistency. The system also integrates Paystack and Stripe for payment processing and Ethereum infrastructure for crypto deposits and balance reconciliation.",
    ],

    challenges: [
      "Ensuring financial accuracy across multiple currencies and blockchain tokens without floating-point errors.",
      "Maintaining balanced debit and credit entries while keeping account balances consistent.",
      "Preventing duplicate transactions when requests are retried or payment webhooks are delivered more than once.",
      "Handling concurrent transactions safely to avoid race conditions and incorrect balances.",
      "Preserving an immutable, traceable audit history while supporting transaction voiding.",
      "Reconciling external payment and blockchain events with internal ledger records.",
    ],

    engineering: [
      {
        title: "Double-Entry Ledger Engine",
        description:
          "Designed a ledger engine where every financial transaction produces balanced debit and credit entries. This makes every movement of funds traceable and ensures transactions balance before they are posted.",
      },

      {
        title: "Precision-Safe Money Handling",
        description:
          "Implemented monetary arithmetic using integer values in each currency's smallest unit, avoiding floating-point inaccuracies. Supports representations such as kobo, cents, wei, and USDC base units.",
      },

      {
        title: "Immutable Financial Records",
        description:
          "Designed an append-only ledger with database triggers that prevent existing entries from being updated or deleted. Corrections are represented through reversal entries, preserving the original audit trail.",
      },

      {
        title: "Idempotent Transaction Processing",
        description:
          "Implemented idempotency keys for state-changing operations so repeated requests can return their original results without executing the same financial transaction twice.",
      },

      {
        title: "Concurrency Control & Row Locking",
        description:
          "Used PostgreSQL row-level locking to coordinate concurrent operations involving the same accounts, reducing the risk of race conditions and inconsistent financial state.",
      },

      {
        title: "Transactional Database Architecture",
        description:
          "Structured accounts, transactions, entries, and payment records with PostgreSQL and Prisma, using database transactions to keep related financial operations consistent.",
      },

      {
        title: "Payment Provider Integration",
        description:
          "Integrated Paystack and Stripe payment flows for payment initialization, verification, status tracking, and refunds, connecting external payment events to internal ledger operations.",
      },

      {
        title: "Secure Webhook Processing",
        description:
          "Designed webhook handlers around signature verification, duplicate-event detection, raw payload storage, and decoupled processing to make payment event handling more reliable.",
      },

      {
        title: "Ledger-Based Balance Calculation",
        description:
          "Computed account balances from posted ledger entries rather than relying on a mutable balance field, enabling account statements and transaction histories to be derived from the underlying records.",
      },

      {
        title: "Transaction Reversals",
        description:
          "Implemented transaction voiding through compensating entries instead of modifying historical records, maintaining traceability while correcting previously posted transactions.",
      },

      {
        title: "Ethereum Wallet Infrastructure",
        description:
          "Integrated ethers.js and Ethereum infrastructure to derive dedicated deposit addresses from a hierarchical deterministic wallet using BIP44-style derivation.",
      },

      {
        title: "ERC-20 Deposit Monitoring",
        description:
          "Designed an event-listening and deposit-processing flow to detect ERC-20 transfers and connect on-chain deposits to internal financial records.",
      },

      {
        title: "Crypto Balance Reconciliation",
        description:
          "Designed reconciliation checks that compare internal ledger balances with on-chain USDC balances and create alerts when discrepancies require investigation.",
      },

      {
        title: "API Validation & Type Safety",
        description:
          "Used TypeScript and Zod to define structured application inputs and validate incoming data at runtime, improving consistency across financial API operations.",
      },

      {
        title: "Financial REST API Design",
        description:
          "Organized the Express API into dedicated account, transaction, payment, webhook, and crypto routes, separating external interfaces from the core ledger engine and supporting services.",
      },
    ],
  },
  {
    slug: "devflow",
    type: "fullstack",
    title: "DevFlow",
    category: "FULLSTACK PRODUCT",
    year: "2026",

    shortDescription:
      "A full-stack project management platform designed specifically for software development teams.",

    description:
      "DevFlow is a collaborative project management platform built to help software development teams organize projects, manage tasks, collaborate with teammates, and keep development work structured in one place.",

    image: "/projects/devflow.png",

    live: "https://devflow-delightsome.vercel.app/",
    github: "https://github.com/delightofili/devflow",

    featured: true,

    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Socket.IO",
      "OpenAI",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Zod",
      "Recharts",
    ],

    role: "Fullstack Developer",

    overview: [
      "DevFlow is a full-stack project management platform built for software development teams to plan projects, organize tasks, collaborate with teammates, and track progress in one centralized workspace.",
    ],

    challenges: [
      "Designing a full-stack architecture that keeps the frontend, server logic, database, and authentication layers organized and maintainable.",

      "Managing relational project data with PostgreSQL and Prisma while keeping relationships between workspaces, projects, users, and tasks consistent.",

      "Implementing real-time communication with Socket.IO so collaborative changes can be reflected across connected clients.",

      "Building drag-and-drop task interactions while keeping task state synchronized with the backend.",

      "Implementing authentication and authorization so users can securely access the workspaces and projects they belong to.",

      "Integrating AI functionality into an existing full-stack workflow while keeping the application architecture modular.",

      "Building dashboards and data visualizations that turn project information into useful insights for development teams.",
    ],

    engineering: [
      {
        title: "Authentication & Authorization",
        description:
          "Implemented secure authentication and authorization flows so users can access their workspaces, projects, and resources based on their permissions.",
      },

      {
        title: "Workspace & Project Architecture",
        description:
          "Designed the application around workspaces and projects, allowing teams to organize multiple development projects while keeping users, tasks, and project data properly connected.",
      },

      {
        title: "Task Management",
        description:
          "Built a structured task management system that allows teams to create, organize, update, and track work throughout different stages of development.",
      },

      {
        title: "Drag & Drop Workflow",
        description:
          "Implemented interactive drag-and-drop task management to make moving work between different stages faster and more intuitive.",
      },

      {
        title: "Real-Time Collaboration",
        description:
          "Integrated Socket.IO to support real-time updates and keep collaborative project activity synchronized between connected users.",
      },

      {
        title: "Database Architecture",
        description:
          "Designed relational data models with PostgreSQL and Prisma to manage users, workspaces, projects, tasks, and their relationships consistently.",
      },

      {
        title: "Server-Side Architecture",
        description:
          "Structured the application using Next.js server-side capabilities to handle data access, mutations, authentication, and backend operations within the same application.",
      },

      {
        title: "AI Integration",
        description:
          "Integrated AI capabilities into the development workflow to provide intelligent functionality within the project management experience.",
      },

      {
        title: "Project Analytics",
        description:
          "Built interactive dashboards and data visualizations that transform project and task data into useful progress and productivity insights.",
      },

      {
        title: "Form & Data Validation",
        description:
          "Implemented structured validation with Zod to ensure user input is validated consistently before being processed or persisted.",
      },

      {
        title: "Reusable Component System",
        description:
          "Built reusable interface components and established consistent UI patterns to keep the application maintainable as the number of features and screens increased.",
      },

      {
        title: "Responsive Interface",
        description:
          "Designed the application to remain usable across different screen sizes while maintaining consistent layouts, interactions, and information hierarchy.",
      },
    ],
  },
  {
    slug: "lovequest",
    type: "fullstack",
    title: "LoveQuest",
    category: "FULLSTACK PRODUCT",
    year: "2026",

    shortDescription:
      "A personalized experience builder that turns memories, stories, and photos into interactive experiences for someone special.",

    description:
      "LoveQuest is a fullstack platform for creating personalized digital experiences. Users can build an experience, add memories and stories, customize the presentation, and share the final result through a unique link.",

    image: "/projects/lovequest.png",

    live: "https://loveequest.vercel.app/",
    github: "https://github.com/delightofili/LoveQuest",

    featured: true,

    stack: [
      "Next.js",
      "React",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
    ],

    role: "Fullstack Developer",

    overview: [
      "Designed and engineered the application from the ground up.",
      "Built authentication and protected application routes.",
      "Created the experience-building workflow.",
      "Implemented unique sharing links for published experiences.",
      "Designed the dashboard and publishing flow.",
    ],

    challenges: [
      "Creating a flexible structure for storing different types of experience content.",
      "Keeping private user data protected while allowing published experiences to be shared publicly.",
      "Designing a simple creation flow without overwhelming the user.",
    ],

    engineering: [
      {
        title: "Authentication",
        description:
          "Implemented authentication and protected routes so users can manage their own experiences securely.",
      },
      {
        title: "Experience Builder",
        description:
          "Built a structured experience creation flow that allows users to compose personalized content before publishing.",
      },
      {
        title: "Sharing System",
        description:
          "Created unique public slugs that allow published experiences to be accessed through shareable links.",
      },
      {
        title: "Database Architecture",
        description:
          "Used Prisma with PostgreSQL to model users, sessions, and experiences while keeping application data structured.",
      },
    ],
  },

  {
    slug: "delresumeai",
    type: "fullstack",
    title: "DelResumeAI",
    category: "FULLSTACK SAAS",
    year: "2026",

    shortDescription:
      "An AI-powered resume builder designed to help students and job seekers create polished, ATS-friendly resumes in minutes.",

    description:
      "DelResumeAI is a resume-building platform focused on making professional resume creation faster and easier. Users can build their resume, work with structured sections, preview the result, and use AI-assisted improvements to strengthen their content.",

    image: "/projects/delresumeai.png",

    live: "https://delresumeai.vercel.app/",
    github: "https://github.com/delightofili/ResumeAi",

    featured: true,

    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
    ],

    role: "Fullstack Developer",

    overview: [
      "Designed and built the application from scratch.",
      "Created the resume creation workflow.",
      "Implemented authentication and user-specific data.",
      "Built structured resume sections and editing interfaces.",
      "Integrated AI-assisted resume improvements.",
    ],

    challenges: [
      "Designing a resume editor that remains simple while supporting multiple sections.",
      "Keeping resume data structured enough to generate consistent output.",
      "Creating a workflow that feels fast for users who may not have professional resume-writing experience.",
    ],

    engineering: [
      {
        title: "Structured Resume Data",
        description:
          "Designed the application around structured resume information instead of treating the resume as a single block of text.",
      },
      {
        title: "Authentication",
        description:
          "Implemented user authentication and protected resources so resumes belong to individual users.",
      },
      {
        title: "AI Assistance",
        description:
          "Added AI-assisted functionality to help users improve resume content and make their experience more effective.",
      },
      {
        title: "Application Architecture",
        description:
          "Used Next.js with Prisma and PostgreSQL to connect the user interface, application logic, and persistent data layer.",
      },
    ],
  },

  {
    slug: "far-away",
    type: "frontend",
    title: "Far Away App",
    category: "Travel & Productivity",
    year: "2025",

    shortDescription:
      "A travel packing planner for organizing and tracking everything you need for a trip.",

    description:
      "A simple travel packing planner that helps users organize everything they need for a trip. Items can be added to a packing list, marked as packed, and managed as the trip comes together.",

    image: "/projects/far-away.png",

    live: "https://far-away-app-ten.vercel.app/",
    github: "https://github.com/delightofili/far-away",

    featured: true,

    stack: ["React", "Javascript", "CSS"],

    role: "Frontend Developer",

    overview: [
      "Create and manage packing items",
      "Mark items as packed or unpacked",
      "Track packing progress",
      "Sort and organize items",
      "Calculate packing statistics",
      "Interactive and responsive interface",
    ],

    challenges: [
      "Managing a dynamic list of packing items while keeping the UI synchronized with every change.",
      "Handling item states such as packed and unpacked without making the interface confusing.",
      "Designing a simple workflow that makes adding, removing, sorting, and tracking items feel effortless.",
      "Keeping the application responsive and usable across different screen sizes.",
    ],
  },

  {
    slug: "expense-tracker",
    type: "frontend",
    title: "Expense Tracker",
    category: "Finance & Productivity",
    year: "2025",

    shortDescription:
      "A personal finance app for tracking expenses and understanding spending habits.",

    description:
      "A personal finance application that helps users record, organize, and monitor their expenses, giving them a clearer picture of how they spend their money.",

    image: "/projects/expense-tracker.png",

    live: "https://expense-tracker-mauve-tau-88.vercel.app/",
    github: "https://github.com/delightofili/expense-tracker",

    featured: true,

    stack: ["React", "Javascript", "CSS"],

    role: "Frontend Developer",

    overview: [
      "Add and manage expenses",
      "Categorize transactions",
      "Track spending",
      "View financial summaries",
      "Calculate totals dynamically",
      "Responsive dashboard",
    ],

    challenges: [
      "Managing financial data dynamically as transactions are added, edited, or removed.",
      "Calculating totals and summaries from changing expense data.",
      "Structuring the application state so different parts of the interface remain synchronized.",
      "Designing a financial interface that presents information clearly without overwhelming the user.",
    ],
  },
];
