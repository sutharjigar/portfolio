import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { fadeUp } from "./contactAnimations";

export function ContactHeader() {
  return (
    <motion.div {...fadeUp(0)}>
      <div className="flex items-center gap-2.5 mb-1">
        <div className="p-1.5 rounded-md bg-primary/10 text-primary">
          <MessageSquare className="w-4 h-4" />
        </div>
        <h2 className="text-base font-semibold text-foreground">Get in Touch</h2>
      </div>
      <p className="text-sm text-muted-foreground ml-10">
        Open to freelance projects, collaborations, and full-time opportunities.
      </p>
    </motion.div>
  );
}
