"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Terminal, Server, Globe, Database, Zap, Cloud, ArrowUpRight,
  GitBranch, Wrench, Package, BookOpen
} from "lucide-react";

const sections = [
  {
    icon: Terminal,
    title: "Languages & Runtime",
    color: "text-yellow-500",
    items: [
      { name: "TypeScript", description: "My language of choice — catches bugs at compile-time and makes large codebases maintainable." },
      { name: "Node.js", description: "Powers all my backend services — event-driven, non-blocking, perfect for I/O-heavy workloads." },
      { name: "JavaScript", description: "The foundation — fluent in both modern ES2024+ patterns and legacy code." },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "text-blue-500",
    items: [
      { name: "Express.js", description: "Minimal, battle-tested framework for building robust REST APIs with clean middleware architecture." },
      { name: "WebSocket", description: "Real-time bidirectional communication — live order books, price feeds, and portfolio updates." },
      { name: "REST APIs", description: "Designed and built production APIs with versioning, rate limiting, and proper error handling." },
    ],
  },
  {
    icon: Zap,
    title: "Messaging & Cache",
    color: "text-orange-500",
    items: [
      { name: "RabbitMQ", description: "Async worker architecture for order execution, price ingestion, and heavy computations." },
      { name: "Kafka", description: "High-throughput event streaming for distributed pipelines and real-time analytics." },
      { name: "Redis", description: "Used heavily for caching, pub/sub, session management, and job queues." },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    color: "text-green-500",
    items: [
      { name: "PostgreSQL", description: "Modeled 60+ entity schemas, optimized complex queries with indexing, and handled high-load reporting." },
      { name: "Redis", description: "Not just cache — also used for leaderboards, rate limiters, and real-time counters." },
    ],
  },
  {
    icon: Globe,
    title: "Frontend",
    color: "text-purple-500",
    items: [
      { name: "React", description: "Built complex dashboards, trading UIs, and analytics views using React + hooks." },
      { name: "Redux Toolkit", description: "Global state management for complex trading interfaces with normalized state slices." },
      { name: "React Hook Form", description: "Performant forms with schema validation for trading configs and user settings." },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "text-sky-500",
    items: [
      { name: "AWS", description: "Used Secrets Manager, S3, EC2 for secure and scalable production deployments." },
      { name: "Docker", description: "Containerized services for consistent dev and prod environments." },
      { name: "Linux", description: "Daily driver for server management, bash scripting, and process monitoring." },
    ],
  },
  {
    icon: GitBranch,
    title: "Version Control",
    color: "text-gray-500",
    items: [
      { name: "Git & GitHub", description: "PR-based workflows, conventional commits, branching strategies for team collaboration." },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "text-red-400",
    items: [
      { name: "VS Code", description: "Extensions: ESLint, Prettier, GitLens, REST Client, Postman, Error Lens." },
      { name: "Postman", description: "API testing, mock servers, and collection-based documentation." },
    ],
  },
];

const topTags = ["Node.js", "TypeScript", "PostgreSQL", "Redis", "RabbitMQ", "WebSocket", "React", "AWS", "Docker", "Kafka"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function UserSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mb-auto w-full space-y-10"
    >
      {/* Header */}
      <motion.div {...fadeUp(0)}>
        <div className="flex items-center gap-2.5 mb-2">
          <div className="p-1.5 rounded-md bg-primary/10 text-primary">
            <Package className="w-4 h-4" />
          </div>
          <h2 className="text-base font-semibold text-foreground">Stack</h2>
        </div>
        <p className="text-sm text-muted-foreground ml-10">
          The tools, tech, and software I use day-to-day to build production-grade backend systems.
        </p>
      </motion.div>

      {/* LeetCode callout — top */}
      <motion.div {...fadeUp(0.05)}>
        <Link
          href="https://leetcode.com/u/sutharjigar348/"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <Card className="border-primary/20 bg-primary/5 overflow-hidden glow-card">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <CardContent className="px-5 py-4 flex items-center gap-4">
              <BookOpen className="w-7 h-7 text-primary shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                  350+ DSA Problems Solved
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Consistently practicing algorithms and data structures on LeetCode.
                </p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Badge className="bg-orange-500/15 text-orange-500 border-orange-500/20 text-xs">LeetCode</Badge>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </motion.div>

      {/* Top tags cloud */}
      <motion.div {...fadeUp(0.05)} className="flex flex-wrap gap-2">
        {topTags.map((tag, i) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.04 }}
            whileHover={{ scale: 1.05 }}
          >
            <Badge
              variant="outline"
              className="text-xs border-primary/25 text-primary/90 hover:bg-primary/10 transition-colors cursor-default"
            >
              {tag}
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      <Separator />

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + si * 0.06 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <section.icon className={`w-4 h-4 ${section.color}`} />
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.items.map((item, ii) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + si * 0.05 + ii * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <Card className="h-full glow-card border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden group">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
                    <CardContent className="px-4 py-3.5">
                      <div className="font-medium text-sm text-foreground mb-1.5 group-hover:text-primary transition-colors">
                        {item.name}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>


    </motion.section>
  );
}
