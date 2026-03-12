"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Twitter, Download } from "lucide-react";
import { GITHUB_URL, LINKEDIN_PROFILE_URL, TWITTER_URL } from "@/app/lib/constants";

const STATUS_DOT = (
  <span className="relative flex h-2.5 w-2.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
  </span>
);

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
    >
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative shrink-0"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-blue-400/20 blur-xl scale-110" />
        <Image
          width={100}
          height={100}
          decoding="async"
          src="../x.jpeg"
          loading="lazy"
          alt="Jigar Suthar"
          className="relative rounded-full object-cover w-[88px] h-[88px] ring-2 ring-primary/30"
        />
        <div className="absolute -bottom-0.5 -right-0.5 bg-background rounded-full p-0.5">
          {STATUS_DOT}
        </div>
      </motion.div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1"
      >
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="text-2xl font-bold tracking-tight gradient-text">
            Jigar Suthar
          </h1>
        </div>
        <p className="text-muted-foreground text-sm mt-1">
          Software Engineer 
        </p>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 font-medium">
            {STATUS_DOT}
            Open to opportunities
          </span>
        </div>

        {/* Tech badges */}
        <div className="flex gap-1.5 mt-3 flex-wrap">
          {["Node.js", "TypeScript", "PostgreSQL", "Redis", "RabbitMQ"].map((t) => (
            <Badge
              key={t}
              variant="secondary"
              className="text-[11px] bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {t}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          <Link href="/contact">
            <Button size="sm" className="h-8 text-xs gap-1.5 shadow-sm shadow-primary/20">
              Let&apos;s Talk 👋
            </Button>
          </Link>
          <a href="/resume.pdf" download="Jigar_Suthar_Resume.pdf">
            <Button size="sm" variant="outline" className="h-8 text-xs gap-1.5">
              <Download className="w-3 h-3" /> Resume
            </Button>
          </a>
          <div className="flex items-center gap-1 ml-1">
            {[
              { href: GITHUB_URL, Icon: Github },
              { href: LINKEDIN_PROFILE_URL, Icon: Linkedin },
              { href: TWITTER_URL, Icon: Twitter },
            ].map(({ href, Icon }) => (
              <Link key={href} href={href} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary hover:bg-primary/10">
                  <Icon className="w-3.5 h-3.5" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
