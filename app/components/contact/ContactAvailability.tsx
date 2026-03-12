import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "./contactAnimations";

export function ContactAvailability() {
  return (
    <motion.div {...fadeUp(0.3)} className="flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <Badge
        variant="outline"
        className="text-xs border-green-500/30 text-green-600 dark:text-green-400 bg-green-500/5"
      >
        Available for new opportunities
      </Badge>
    </motion.div>
  );
}
