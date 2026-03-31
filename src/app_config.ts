export const appConfig = {
  name: "Ayush Ambatkar",
  title: "Software Engineer focused on building scalable backend systems, real-time services, and performant applications.",

  avatarPath: "/assets/avatar.jpg",
  resumePath: "https://drive.google.com/file/d/1U0t_FjcBDlYxu-ybPqRXDAbyuxHQg00i/view",
  faviconPath: "/assets/image.png",

  email: "ayuambatkar@gmail.com",

  socials: {
    github: "https://github.com/ayushambatkar",
    linkedin: "https://linkedin.com/in/ayushambatkar",
  },

  experiences: [
    {
      role: "Software Engineering Intern",
      company: "Flick TV",
      period: "Apr. 2025 — Present",
      description: [
        "Built a caching layer reducing backend API calls by 35%, improving latency for 20k+ DAU",
        "Integrated Juspay payments SDK for secure transactions",
        "Built and deployed trials website using Docker on AWS ECS",
        "Implemented OAuth + JWT authentication reducing login drop-offs by 18%",
      ],
    },
    {
      role: "Flutter Developer Intern",
      company: "Nomad Devs",
      period: "Sep. 2024 — Nov. 2024",
      description: [
        "Reduced app startup time by 50% (6s → 3s) using lazy loading",
        "Optimized database operations by removing duplicate and redundant queries",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Ploofypaws",
      period: "Jun. 2024 — Aug. 2024",
      description: [
        "Reduced database read operations by 40% via caching and optimized fetching",
        "Built live video consultation feature using VideoSDK",
        "Created Python scripts to batch upload 100+ assets with retry + error handling",
      ],
    },
  ],

  projects: [
    {
      title: "Linkwatch - Watch Ya Links",
      subtitle: "A link tracking and analytics service built with NestJS and Supabase",
      description: [
        "Built redirect-based tracking links system",
        "Captured query params, IP, device metadata, and location",
        "Stored analytics using Supabase",
        "Used cron jobs to keep server active and prevent sleep",
        "Enabled insights on user engagement via link-level analytics",
      ],
      tags: ["Supabase", "NestJS", "Prisma", "PostgreSQL", "Cron"],
      link: "https://linkwatch-in.vercel.app/",
      githubLink: "https://github.com/ayushambatkar/Linkwatch-Watch_Ya_Links",
    },
    {
      title: "NomNom - Food Delivery Backend Service",
      subtitle: "A backend service for a food delivery application built with NestJS and PostgreSQL",
      description: [
        "Implemented JWT auth with phone + OTP",
        "Designed PostgreSQL schema with indexing for performance",
        "Built REST APIs with filtering and pagination",
        "Added Redis caching reducing DB queries by 40%",
        "Dockerized and deployed on AWS EC2",
      ],
      tags: ["NestJS", "PostgreSQL", "Redis", "Docker", "AWS"],
      link: "https://nomnom-crave-click-devour.onrender.com/ ",
      githubLink: "https://github.com/ayushambatkar/NomNom--Crave.Click.Devour.",
    },
    {
      title: "Throttle: Distributed Rate Limiter Service",
      subtitle: "A distributed rate limiter service built with FastAPI and Redis",
      description: [
        "Built distributed rate limiter using Redis Lua scripts for atomic updates",
        "Implemented token bucket and sliding window algorithms",
        "Exposed REST APIs for backend integration",
      ],
      tags: ["FastAPI", "Redis", "Docker"],
      link: "https://throttle-rate-limiter-service.onrender.com/docs",
      githubLink: "https://github.com/ayushambatkar/Rate_Limiter_Service",
    },
  ],
};