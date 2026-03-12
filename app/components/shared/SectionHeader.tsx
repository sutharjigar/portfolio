import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
}

/**
 * Reusable section heading used across About, Blog, Contact, and Stack pages.
 *
 * @example
 * <SectionHeader icon={Briefcase} title="Experience" />
 */
export default function SectionHeader({ icon: Icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2.5 mb-6">
      <div className="p-1.5 rounded-md bg-primary/10 text-primary">
        <Icon className="w-4 h-4" />
      </div>
      <h2 className="text-base font-semibold text-foreground tracking-tight">{title}</h2>
    </div>
  );
}
