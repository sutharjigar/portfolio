"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "./themeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/uses", label: "Stack" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="w-full">
      <nav className="flex items-center justify-between py-1">
        <div className="flex items-center gap-0.5">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                    isActive
                      ? "text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-primary"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.label}
                </motion.div>
              </Link>
            );
          })}
        </div>
        <ThemeToggle />
      </nav>
      <Separator className="mt-3" />
    </div>
  );
}
