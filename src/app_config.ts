export const appConfig = {
  name: "Ayush Ambatkar",
  title: "Software Engineer focused on building scalable backend systems, real-time services, and performant applications.",

  avatarPath: "/assets/pfp.jpg",
  resumePath: "https://drive.google.com/file/d/1U0t_FjcBDlYxu-ybPqRXDAbyuxHQg00i/view",
  faviconPath: "/assets/pfp.jpg",

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
      role: "Software Developer Intern",
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
    {
      role: "Software Developer Intern",
      company: "VNIT",
      tags: ["NestJS", "PostgreSQL", "Redis", "Docker", "AWS"],
      period: "Feb. 2024 — May 2024",
      description: [
        "Developed an Android application that received health data from wristwatch sensors using UART communication",
        "Stored sensor readings with timestamps in CSV files and an SQLite database"
      ],
    },
  ],

  projects: [
    {
      title: "AgentReview - AI-Powered GitHub PR Reviewer",
      subtitle: "An AI-powered GitHub App that analyzes pull requests and posts automated code reviews",
      description: [
        "Built an AI-powered GitHub App that analyzes pull request diffs and posts inline review comments",
        "Orchestrated parallel security, code quality, database, and test coverage reviews using LangGraph",
        "Implemented GitHub App authentication with JWTs, installation tokens, and HMAC-SHA256 webhook verification",
        "Built a Redis-backed asynchronous review pipeline for reliable and scalable PR processing",
        "Handled large pull requests through diff reduction and configurable fast and detailed review modes",
      ],
      tags: ["FastAPI", "LangGraph", "Redis", "Docker", "GitHub API"],
      link: "https://github.com/apps/agentreviewbot",
      githubLink: "https://github.com/ayushambatkar/AgentReview-AI_PR_Reviewer",
    },
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