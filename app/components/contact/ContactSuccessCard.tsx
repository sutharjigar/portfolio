import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ContactSuccessCardProps {
  onReset: () => void;
}

export function ContactSuccessCard({ onReset }: ContactSuccessCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="border-primary/30 bg-primary/5 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <CardContent className="px-6 py-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
          </motion.div>
          <div className="font-semibold text-foreground text-base">Opened LinkedIn! 🎉</div>
          <p className="text-sm text-muted-foreground mt-1.5">
            Your message is pre-filled in LinkedIn - just hit <strong>Send</strong> to
            reach me!
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-5 border-primary/30 text-primary hover:bg-primary/10"
            onClick={onReset}
          >
            Send another
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
