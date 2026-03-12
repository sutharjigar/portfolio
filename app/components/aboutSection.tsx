"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Briefcase, Code2, GraduationCap, Layers, ExternalLink, X, Github,
  ChevronRight, Zap, Database, Globe, Server, Terminal, Cloud
} from "lucide-react";

/* ─── DATA ───────────────────────────────────────────── */
const skillCategories = [
  { icon: Terminal,  label: "Languages",        items: ["JavaScript", "TypeScript", "C++"] },
  { icon: Server,    label: "Backend",           items: ["Node.js", "Express", "REST APIs", "WebSocket"] },
  { icon: Globe,     label: "Frontend",          items: ["React", "Redux Toolkit", "React Router", "React Hook Form"] },
  { icon: Database,  label: "Databases",         items: ["PostgreSQL", "Redis"] },
  { icon: Zap,       label: "Messaging / Cache", items: ["RabbitMQ", "Kafka", "Redis"] },
  { icon: Cloud,     label: "Cloud / DevOps",    items: ["AWS", "Docker", "Linux"] },
];

const projects = [
  {
    id: 1,
    emoji: "₿",
    title: "Multi-Exchange Crypto Trading Platform",
    short: "Production-grade backend for multi-exchange crypto trading with live and demo trading, low-latency execution.",
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
    short: "Full-stack real-time market-making system with live order book, trade feed, and portfolio updates.",
    points: [
      "Developed full-stack real-time market-making system with live order book, trade feed, and portfolio updates via WebSocket.",
      "Implemented analytics modules including PnL, hedge tracking, balance monitoring, and trading logs with reusable components and charting.",
      "Improved security and reliability using AWS Secrets Manager, config validation, secure HTTP practices, and centralized error handling.",
    ],
    tags: ["Node.js", "TypeScript", "WebSocket", "AWS", "PostgreSQL"],
    github: "https://github.com/sutharjigar",
  },
];

const experienceBullets = [
  "Architected and scaled production backend for real-time crypto trading using Node.js, TypeScript, PostgreSQL, Redis, RabbitMQ, and WebSocket.",
  "Designed event-driven REST + WebSocket architecture for live trading, order execution, portfolio tracking, and ROI analytics.",
  "Built async worker architecture (RabbitMQ) for order execution, price ingestion, and heavy trading calculations.",
  "Modeled complex relational data (60+ entities) and optimized indexing, batching, and query performance.",
  "Integrated external exchanges with retry, rate limiting, idempotency, and failure recovery ensuring production-grade stability.",
  "Strengthened observability using structured logging, centralized error handling, and monitoring for APIs, queues, and real-time services.",
];

/* ─── ANIMATIONS ─────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

/* ─── SECTION HEADER ─────────────────────────────────── */
function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-6">
      <div className="p-1.5 rounded-md bg-primary/10 text-primary">
        <Icon className="w-4 h-4" />
      </div>
      <h2 className="text-base font-semibold text-foreground tracking-tight">{title}</h2>
    </div>
  );
}

/* ─── MAIN ───────────────────────────────────────────── */
export default function AboutSection() {
  const [selectedId, setSelectedId] = useState(0);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const check = () => setIsLarge(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={stagger}
      className="max-w-3xl mb-auto w-full space-y-14"
    >
      {/* ── BIO ── */}
      <motion.div {...fadeUp(0)} className="relative">
        <div className="dot-grid absolute inset-0 rounded-2xl opacity-60 pointer-events-none" />
        <Card className="relative border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <CardContent className="px-6 py-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Software Engineer with{" "}
              <span className="text-primary font-semibold">2+ years of experience</span>{" "}
              building scalable, low-latency systems for{" "}
              <span className="text-foreground font-medium">real-time trading and financial analytics</span>.
              Skilled in{" "}
              <span className="text-primary font-semibold">Node.js, TypeScript, PostgreSQL, Redis, RabbitMQ</span>,
              and WebSocket architectures with a strong focus on performance, reliability, and production-grade
              system design. Solved{" "}
              <span className="font-semibold text-foreground">350+ DSA problems</span> on LeetCode.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* ── EXPERIENCE ── */}
      <motion.div {...fadeUp(0.1)}>
        <SectionHeader icon={Briefcase} title="Experience" />
        <Card className="border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <CardContent className="px-5 py-5">
            {/* Role header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-foreground text-sm">Software Engineer</span>
                  <Badge className="text-[10px] bg-primary/15 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                    Intern → Junior → Engineer
                  </Badge>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <span className="text-xs font-medium text-muted-foreground">Seaflux Technologies</span>
                </div>
              </div>
              <Badge variant="outline" className="text-[11px] border-border/80 text-muted-foreground whitespace-nowrap self-start">
                Jan 2024 – Present
              </Badge>
            </div>
            <div className="h-px bg-border/60 mb-4" />
            {/* Bullets */}
            <div className="space-y-2.5">
              {experienceBullets.map((pt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  className="flex gap-2.5 text-xs text-muted-foreground"
                >
                  <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-primary/60" />
                  <span>{pt}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Separator />

      {/* ── PROJECTS ── */}
      <motion.div {...fadeUp(0.15)}>
        <SectionHeader icon={Layers} title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              layoutId={`proj-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -3 }}
              onClick={() => setSelectedId(project.id)}
              className="cursor-pointer group"
            >
              <Card className="h-full glow-card border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <CardContent className="px-5 py-4 flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div className="text-2xl">{project.emoji}</div>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground leading-snug mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.short}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-auto pt-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] border-primary/20 text-primary/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ── PROJECT MODAL ── */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setSelectedId(0)}
              />
              <motion.div
                key="modal"
                layoutId={`proj-${selectedId}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`fixed z-50 bg-card border border-border/60 rounded-2xl shadow-2xl overflow-hidden ${
                  isLarge
                    ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px]"
                    : "inset-x-4 top-[10%]"
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-3xl mb-2">{selectedProject.emoji}</div>
                      <h3 className="text-base font-bold text-foreground">{selectedProject.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{selectedProject.short}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0 h-8 w-8 -mt-1 -mr-1" onClick={() => setSelectedId(0)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <Separator className="mb-4" />
                  <ul className="space-y-2.5 mb-5">
                    {selectedProject.points.map((pt, i) => (
                      <li key={i} className="flex gap-2.5 text-xs text-muted-foreground">
                        <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-primary/70" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} className="text-xs bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={selectedProject.github} target="_blank">
                    <Button size="sm" className="gap-1.5">
                      <Github className="w-3.5 h-3.5" /> View on GitHub
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      <Separator />

      {/* ── SKILLS ── */}
      <motion.div {...fadeUp(0.2)}>
        <SectionHeader icon={Code2} title="Technical Skills" />
        <div className="space-y-3">
          {skillCategories.map(({ icon: Icon, label, items }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.07 }}
              className="flex flex-col sm:flex-row sm:items-center gap-2"
            >
              <div className="flex items-center gap-2 w-44 shrink-0">
                <Icon className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                <span className="text-xs text-muted-foreground font-medium">{label}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-[11px] border-primary/20 text-primary/90 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Separator />

      {/* ── EDUCATION ── */}
      <motion.div {...fadeUp(0.25)}>
        <SectionHeader icon={GraduationCap} title="Education" />
        <Card className="glow-card border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <CardContent className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="font-semibold text-sm text-foreground">
                L J Institute of Engineering and Technology
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">Bachelor of Engineering</div>
            </div>
            <div className="sm:text-right shrink-0">
              <div className="text-xs text-muted-foreground">Aug 2020 – May 2024</div>
              <Badge className="mt-1 text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                GPA: 7.76 / 10
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
