"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SKILL_CATEGORIES } from "@/app/lib/data";
import { fadeInLeft } from "@/app/lib/animations";

/** Skills grid with icon-labeled category rows */
export default function SkillsGrid() {
  return (
    <div className="space-y-3">
      {SKILL_CATEGORIES.map(({ icon: Icon, label, items }, i) => (
        <motion.div
          key={label}
          {...fadeInLeft(0.1 + i * 0.07)}
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
  );
}
