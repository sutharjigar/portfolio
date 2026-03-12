"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { EXPERIENCE } from "@/app/lib/data";
import { fadeInLeft } from "@/app/lib/animations";

/** Experience timeline card */
export default function ExperienceCard() {
  return (
    <Card className="border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <CardContent className="px-5 py-5">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-foreground text-sm">{EXPERIENCE.role}</span>
              <Badge className="text-[10px] bg-primary/15 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                {EXPERIENCE.progression}
              </Badge>
            </div>
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              <span className="text-xs font-medium text-muted-foreground">{EXPERIENCE.company}</span>
            </div>
          </div>
          <Badge variant="outline" className="text-[11px] border-border/80 text-muted-foreground whitespace-nowrap self-start">
            {EXPERIENCE.period}
          </Badge>
        </div>

        <div className="h-px bg-border/60 mb-4" />

        {/* Bullets */}
        <div className="space-y-2.5">
          {EXPERIENCE.bullets.map((point, i) => (
            <motion.div
              key={i}
              {...fadeInLeft(0.15 + i * 0.06)}
              className="flex gap-2.5 text-xs text-muted-foreground"
            >
              <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-primary/60" />
              <span>{point}</span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
