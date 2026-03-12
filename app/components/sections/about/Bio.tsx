import { Card, CardContent } from "@/components/ui/card";
import { BIO } from "@/app/lib/data";

/** Bio card shown at the top of the About page */
export default function Bio() {
  const highlights: [string, boolean][] = [
    ["2+ years of experience", true],
    ["real-time trading and financial analytics", false],
    ["Node.js, TypeScript, PostgreSQL, Redis, RabbitMQ", true],
    ["350+ DSA problems", false],
  ];
  void highlights; // used via inline JSX below

  return (
    <div className="relative">
      <div className="dot-grid absolute inset-0 rounded-2xl opacity-60 pointer-events-none" />
      <Card className="relative border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <CardContent className="px-6 py-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Software Engineer with{" "}
            <span className="text-primary font-semibold">2+ years of experience</span>{" "}
            building scalable, low-latency systems for{" "}
            <span className="text-foreground font-medium">
              real-time trading and financial analytics
            </span>
            . Skilled in{" "}
            <span className="text-primary font-semibold">
              Node.js, TypeScript, PostgreSQL, Redis, RabbitMQ
            </span>
            , and WebSocket architectures with a strong focus on performance,
            reliability, and production-grade system design. Solved{" "}
            <span className="font-semibold text-foreground">350+ DSA problems</span> on LeetCode.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// Make sure BIO is imported so data.ts stays connected (even if not used directly here)
void BIO;
