export const projects = [
  {
    slug: "lovequest",
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
    title: "DelResumeAI",
    category: "FULLSTACK SAAS",
    year: "2026",

    shortDescription:
      "An AI-powered resume builder designed to help students and job seekers create polished, ATS-friendly resumes in minutes.",

    description:
      "DelResumeAI is a resume-building platform focused on making professional resume creation faster and easier. Users can build their resume, work with structured sections, preview the result, and use AI-assisted improvements to strengthen their content.",

    image: "/projects/far-away.png",

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
    slug: "Far Away App",
    title: "far-away-app",
    category: "Travel & Productivity",
    year: "2025",

    shortDescription:
      "A travel packing planner for organizing and tracking everything you need for a trip.",

    description:
      "A simple travel packing planner that helps users organize everything they need for a trip. Items can be added to a packing list, marked as packed, and managed as the trip comes together.",

    image: "/projects/delresumeai.png",

    live: "https://far-away-app-ten.vercel.app/",
    github: "https://github.com/delightofili/far-away",

    featured: true,

    stack: ["React", "Javascript", "CSS"],

    role: "Fullstack Developer",

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
