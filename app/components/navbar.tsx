"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const router = usePathname();
  console.log(router);
  const navItems = [
    { href: "/", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/uses", label: "Uses" },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex items-center flex-wrap gap-2 mb-8">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <motion.div
            whileTap={{ scale: 0.2 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className={`relative text-sm transition-colors px-2 py-1 rounded-md ${
              router === item.href ? "text-white" : "text-black"
            }`}
          >
            <span className="relative z-10">{item.label}</span>
            <motion.span
              className={`absolute inset-0 z-0 rounded-md ${
                router === item.href ? "bg-gray-900" : "bg-white"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            ></motion.span>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
