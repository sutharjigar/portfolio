// ─── Shared TypeScript Interfaces ──────────────────────────────────────────

export interface Project {
  id: number;
  emoji: string;
  title: string;
  short: string;
  points: string[];
  tags: string[];
  github: string;
}

export interface SkillCategory {
  icon: React.ElementType;
  label: string;
  items: string[];
}

export interface StackItem {
  name: string;
  description: string;
}

export interface StackSection {
  icon: React.ElementType;
  title: string;
  color: string;
  items: StackItem[];
}

export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
  categories: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfoItem {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}
