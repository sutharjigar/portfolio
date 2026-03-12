// ─── Static Portfolio Data ─────────────────────────────────────────────────
// All hardcoded data lives here — components never contain raw data arrays.

import {
  Terminal, Server, Globe, Database, Zap, Cloud, GitBranch, Wrench,
} from "lucide-react";
import type { ContactInfoItem, Project, SkillCategory, StackSection } from "./types";
import { CONTACT_EMAIL, CONTACT_LOCATION, CONTACT_PHONE } from "./constants";

// ── About / Bio ──────────────────────────────────────────────────────────

export const BIO =
  "Software Engineer with 2+ years of experience building scalable, low-latency systems for real-time trading and financial analytics. Skilled in Node.js, TypeScript, PostgreSQL, Redis, RabbitMQ, and WebSocket architectures with a strong focus on performance, reliability, and production-grade system design. Solved 350+ DSA problems on LeetCode.";

// ── Experience ────────────────────────────────────────────────────────────

export const EXPERIENCE = {
  role: "Software Engineer",
  progression: "Intern → Junior → Engineer",
  company: "Seaflux Technologies",
  period: "Jan 2024 – Present",
  bullets: [
    "Architected and scaled production backend for real-time crypto trading using Node.js, TypeScript, PostgreSQL, Redis, RabbitMQ, and WebSocket.",
    "Designed event-driven REST + WebSocket architecture for live trading, order execution, portfolio tracking, and ROI analytics.",
    "Built async worker architecture (RabbitMQ) for order execution, price ingestion, and heavy trading calculations.",
    "Modeled complex relational data (60+ entities) and optimized indexing, batching, and query performance.",
    "Integrated external exchanges with retry, rate limiting, idempotency, and failure recovery ensuring production-grade stability.",
    "Strengthened observability using structured logging, centralized error handling, and monitoring for APIs, queues, and real-time services.",
  ],
};

// ── Projects ──────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: 1,
    emoji: "₿",
    title: "Multi-Exchange Crypto Trading Platform",
    short:
      "Production-grade backend for multi-exchange crypto trading with live and demo trading, low-latency execution.",
    points: [
      "Built advanced trading engines (Grid, DCA Spot/Futures, Indicator bots) with reusable services for order generation, risk checks, and position management.",
      "Integrated Binance, OKX, Bybit, Bithumb, and Upbit with encrypted API key management and per-user WebSocket connection pooling.",
      "Implemented async workers, Redis caching, and scheduled jobs reducing external API calls and improving system scalability.",
      "Built subscription & billing system using PayPal webhooks supporting plans, trials, and feature-based access control.",
    ],
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "RabbitMQ", "WebSocket"],
    github: "https://github.com/sutharjigar",
  },
  {
    id: 2,
    emoji: "📊",
    title: "Crypto Market-Making Platform",
    short:
      "Full-stack real-time market-making system with live order book, trade feed, and portfolio updates.",
    points: [
      "Developed full-stack real-time market-making system with live order book, trade feed, and portfolio updates via WebSocket.",
      "Implemented analytics modules including PnL, hedge tracking, balance monitoring, and trading logs with reusable components and charting.",
      "Improved security and reliability using AWS Secrets Manager, config validation, secure HTTP practices, and centralized error handling.",
    ],
    tags: ["Node.js", "TypeScript", "WebSocket", "AWS", "PostgreSQL"],
    github: "https://github.com/sutharjigar",
  },
];

// ── Skills ────────────────────────────────────────────────────────────────

export const SKILL_CATEGORIES: SkillCategory[] = [
  { icon: Terminal, label: "Languages",        items: ["JavaScript", "TypeScript", "C++"] },
  { icon: Server,   label: "Backend",           items: ["Node.js", "Express", "REST APIs", "WebSocket"] },
  { icon: Globe,    label: "Frontend",          items: ["React", "Redux Toolkit", "React Router", "React Hook Form"] },
  { icon: Database, label: "Databases",         items: ["PostgreSQL", "Redis"] },
  { icon: Zap,      label: "Messaging / Cache", items: ["RabbitMQ", "Kafka", "Redis"] },
  { icon: Cloud,    label: "Cloud / DevOps",    items: ["AWS", "Docker", "Linux"] },
];

// ── Education ────────────────────────────────────────────────────────────

export const EDUCATION = {
  institution: "L J Institute of Engineering and Technology",
  degree: "Bachelor of Engineering",
  period: "Aug 2020 – May 2024",
  gpa: "7.76 / 10",
};

// ── Stack / Uses ─────────────────────────────────────────────────────────

export const TOP_STACK_TAGS = [
  "Node.js", "TypeScript", "PostgreSQL", "Redis",
  "RabbitMQ", "WebSocket", "React", "AWS", "Docker", "Kafka",
];

export const STACK_SECTIONS: StackSection[] = [
  {
    icon: Terminal, title: "Languages & Runtime", color: "text-yellow-500",
    items: [
      { name: "TypeScript", description: "My language of choice — catches bugs at compile-time and makes large codebases maintainable." },
      { name: "Node.js", description: "Powers all my backend services — event-driven, non-blocking, perfect for I/O-heavy workloads." },
      { name: "JavaScript", description: "The foundation — fluent in both modern ES2024+ patterns and legacy code." },
    ],
  },
  {
    icon: Server, title: "Backend", color: "text-blue-500",
    items: [
      { name: "Express.js", description: "Minimal, battle-tested framework for building robust REST APIs with clean middleware architecture." },
      { name: "WebSocket", description: "Real-time bidirectional communication — live order books, price feeds, and portfolio updates." },
      { name: "REST APIs", description: "Designed and built production APIs with versioning, rate limiting, and proper error handling." },
    ],
  },
  {
    icon: Zap, title: "Messaging & Cache", color: "text-orange-500",
    items: [
      { name: "RabbitMQ", description: "Async worker architecture for order execution, price ingestion, and heavy computations." },
      { name: "Kafka", description: "High-throughput event streaming for distributed pipelines and real-time analytics." },
      { name: "Redis", description: "Used heavily for caching, pub/sub, session management, and job queues." },
    ],
  },
  {
    icon: Database, title: "Databases", color: "text-green-500",
    items: [
      { name: "PostgreSQL", description: "Modeled 60+ entity schemas, optimized complex queries with indexing, and handled high-load reporting." },
      { name: "Redis", description: "Not just cache — also used for leaderboards, rate limiters, and real-time counters." },
    ],
  },
  {
    icon: Globe, title: "Frontend", color: "text-purple-500",
    items: [
      { name: "React", description: "Built complex dashboards, trading UIs, and analytics views using React + hooks." },
      { name: "Redux Toolkit", description: "Global state management for complex trading interfaces with normalized state slices." },
      { name: "React Hook Form", description: "Performant forms with schema validation for trading configs and user settings." },
    ],
  },
  {
    icon: Cloud, title: "Cloud & DevOps", color: "text-sky-500",
    items: [
      { name: "AWS", description: "Used Secrets Manager, S3, EC2 for secure and scalable production deployments." },
      { name: "Docker", description: "Containerized services for consistent dev and prod environments." },
      { name: "Linux", description: "Daily driver for server management, bash scripting, and process monitoring." },
    ],
  },
  {
    icon: GitBranch, title: "Version Control", color: "text-gray-500",
    items: [
      { name: "Git & GitHub", description: "PR-based workflows, conventional commits, branching strategies for team collaboration." },
    ],
  },
  {
    icon: Wrench, title: "Tools", color: "text-red-400",
    items: [
      { name: "VS Code", description: "Extensions: ESLint, Prettier, GitLens, REST Client, Postman, Error Lens." },
      { name: "Postman", description: "API testing, mock servers, and collection-based documentation." },
    ],
  },
];

// ── Contact ───────────────────────────────────────────────────────────────

import { Mail, Phone, MapPin } from "lucide-react";

export const CONTACT_INFO_ITEMS: ContactInfoItem[] = [
  { icon: Mail, label: "Email", value: CONTACT_EMAIL, color: "text-blue-500" },
  { icon: Phone, label: "Phone", value: CONTACT_PHONE, color: "text-green-500" },
  { icon: MapPin, label: "Location", value: CONTACT_LOCATION, color: "text-orange-500" },
];
