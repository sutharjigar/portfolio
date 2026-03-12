"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, ArrowUpRight, Calendar, Clock, Rss, Loader2 } from "lucide-react";

const MEDIUM_USERNAME = "sutharjigar348";
const MEDIUM_RSS = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const CORS_PROXY = `https://api.allorigins.win/raw?url=${encodeURIComponent(MEDIUM_RSS)}`;
interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
  categories: string[];
}

function parseRSSXML(xml: string): MediumPost[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const items = Array.from(doc.querySelectorAll("item"));

  return items.map((item) => {
    const title = item.querySelector("title")?.textContent ?? "";
    const link = item.querySelector("link")?.nextSibling?.textContent?.trim() ?? "";
    const pubDate = item.querySelector("pubDate")?.textContent ?? "";
    const description = item.querySelector("description")?.textContent ?? "";
    const categories = Array.from(item.querySelectorAll("category")).map(
      (c) => c.textContent ?? ""
    );

    // Extract first image from description HTML as thumbnail
    const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
    const thumbnail = imgMatch ? imgMatch[1] : "";

    return { title, link, pubDate, description, thumbnail, categories };
  });
}


function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function estimateReadTime(html: string) {
  const words = html.replace(/<[^>]*>/g, " ").split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180);
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: "easeOut" },
});

export default function BlogSection() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(CORS_PROXY)
      .then((r) => {
        if (!r.ok) throw new Error("fetch failed");
        return r.text();
      })
      .then((xml) => {
        const parsed = parseRSSXML(xml);
        if (parsed.length > 0) {
          setPosts(parsed);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-3xl mb-auto w-full space-y-8">
      {/* Header */}
      <motion.div {...fadeUp(0)}>
        <div className="flex items-center gap-2.5 mb-1">
          <div className="p-1.5 rounded-md bg-primary/10 text-primary">
            <BookOpen className="w-4 h-4" />
          </div>
          <h2 className="text-base font-semibold text-foreground">Blog</h2>
          <span className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
            <Rss className="w-3 h-3 text-orange-500" />
            Auto-synced from Medium
          </span>
        </div>
        <p className="text-sm text-muted-foreground ml-10">
          Writing about backend engineering, system design, and things I build.
        </p>
      </motion.div>

      <Separator />

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
          <span className="ml-2 text-sm text-muted-foreground">Loading articles...</span>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <Card className="border-border/60 bg-card/60">
          <CardContent className="px-6 py-10 text-center">
            <BookOpen className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">
              Could not load articles — visit Medium directly:
            </p>
            <Link
              href={`https://medium.com/@${MEDIUM_USERNAME}`}
              target="_blank"
              className="text-primary text-sm underline-offset-4 hover:underline mt-1 inline-block"
            >
              @{MEDIUM_USERNAME} →
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Blog cards */}
      {!loading && !error && posts.length > 0 && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-4"
        >
          {posts.map((post, i) => (
            <motion.div key={i} {...fadeUp(i * 0.06)}>
              <Link
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="glow-card border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-200">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <CardContent className="px-5 py-4 flex gap-4 items-start">
                    {/* Thumbnail */}
                    {post.thumbnail && !post.thumbnail.startsWith("https://cdn-images") && (
                      <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-muted border border-border/60">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {/* Fallback avatar */}
                    {(!post.thumbnail || post.thumbnail.startsWith("https://cdn-images")) && (
                      <div className="shrink-0 w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-primary/60" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-sm text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                      </div>

                      <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
                        {stripHtml(post.description)}
                      </p>

                      <div className="flex items-center gap-3 mt-3 flex-wrap">
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.pubDate)}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {estimateReadTime(post.description)}
                        </span>
                        {post.categories.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-[10px] border-primary/20 text-primary/80 py-0"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* View all */}
      {!loading && (
        <motion.div {...fadeUp(0.3)} className="pt-2">
          <Link
            href={`https://medium.com/@${MEDIUM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4 font-medium"
          >
            View all on Medium <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      )}
    </div>
  );
}
