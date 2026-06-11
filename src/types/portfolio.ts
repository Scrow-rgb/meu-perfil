import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface TechStackItem {
  label: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  href: string;
  isFeatured?: boolean;
}

export interface TimelineItem {
  role: string;
  meta: string;
  description: string;
  align: "left" | "right";
}

export interface ContactLink {
  label: string;
  href: string;
  icon: LucideIcon;
}
