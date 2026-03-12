import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EDUCATION } from "@/app/lib/data";

/** Education card */
export default function EducationCard() {
  return (
    <Card className="glow-card border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <CardContent className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="font-semibold text-sm text-foreground">{EDUCATION.institution}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{EDUCATION.degree}</div>
        </div>
        <div className="sm:text-right shrink-0">
          <div className="text-xs text-muted-foreground">{EDUCATION.period}</div>
          <Badge className="mt-1 text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
            GPA: {EDUCATION.gpa}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
