import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT_INFO_ITEMS } from "@/app/lib/data";
import { fadeUp } from "./contactAnimations";

export function ContactInfoGrid() {
  return (
    <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {CONTACT_INFO_ITEMS.map(({ icon: Icon, label, value, color }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.08 }}
          whileHover={{ y: -2 }}
        >
          <Card className="glow-card border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden h-full">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <CardContent className="px-4 py-3.5">
              <Icon className={`w-4 h-4 mb-2 ${color}`} />
              <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
                {label}
              </div>
              <div className="text-sm text-foreground mt-0.5 font-medium break-all">{value}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
