// ─── Pure Utility Functions ────────────────────────────────────────────────
import type { MediumPost } from "./types";

/** Format ISO/RFC date string → "Mar 12, 2026" */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** Estimate read time based on word count (~200 wpm) */
export function estimateReadTime(html: string): string {
  const words = html.replace(/<[^>]*>/g, " ").split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

/** Strip HTML tags and truncate for card excerpts */
export function stripHtml(html: string, maxLength = 180): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

/** Parse Medium RSS XML string into MediumPost array */
export function parseRSSXML(xml: string): MediumPost[] {
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
    const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
    const thumbnail = imgMatch ? imgMatch[1] : "";

    return { title, link, pubDate, description, thumbnail, categories };
  });
}

/** Build a pre-filled LinkedIn message URL from contact form fields */
export function buildLinkedinMessageUrl(
  recipientSlug: string,
  name: string,
  email: string,
  subject: string,
  message: string
): string {
  const body = [
    "Hi Jigar! 👋",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    subject ? `Subject: ${subject}` : "",
    "",
    message,
  ]
    .filter((l) => l !== undefined)
    .join("\n");

  return `https://www.linkedin.com/messaging/compose?to=${recipientSlug}&body=${encodeURIComponent(body)}`;
}
