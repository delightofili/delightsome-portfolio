export const projects = [
  {
    slug: "devflow",
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
