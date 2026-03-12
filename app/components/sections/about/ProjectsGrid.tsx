"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, X, Github, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/app/lib/data";
import { scaleIn } from "@/app/lib/animations";

/** Project card grid + detail modal */
export default function ProjectsGrid() {
  const [selectedId, setSelectedId] = useState(0);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const check = () => setIsLarge(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const selected = PROJECTS.find((p) => p.id === selectedId);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            whileHover={{ y: -3 }}
            onClick={() => setSelectedId(project.id)}
            className="cursor-pointer group"
          >
            <Card className="h-full glow-card border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <CardContent className="px-5 py-4 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{project.emoji}</span>
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

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedId && selected && (
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
              {...scaleIn}
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
                    <div className="text-3xl mb-2">{selected.emoji}</div>
                    <h3 className="text-base font-bold text-foreground">{selected.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{selected.short}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0 h-8 w-8 -mt-1 -mr-1" onClick={() => setSelectedId(0)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <Separator className="mb-4" />
                <ul className="space-y-2.5 mb-5">
                  {selected.points.map((pt, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-muted-foreground">
                      <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-primary/70" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {selected.tags.map((tag) => (
                    <Badge key={tag} className="text-xs bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={selected.github} target="_blank">
                  <Button size="sm" className="gap-1.5">
                    <Github className="w-3.5 h-3.5" /> View on GitHub
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
