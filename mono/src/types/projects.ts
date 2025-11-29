/**
 * Project Types
 * TypeScript interfaces for project-related data structures
 */

import type { HeaderAnimationType } from '@/features/projects';

export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface ProjectFullDescription {
  intro: string;
  features: ProjectFeature[];
  conclusion: string;
  videoUrl?: string;
  image?: string;
}

export type ProjectIconName = 'code' | 'chart' | 'rocket' | 'credit' | 'drone' | 'satellite';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  iconName: ProjectIconName;
  className: string;
  color: string;
  // Card header/thumbnail
  headerImage?: string;
  // Animation type: "3d" | "zoom" | "parallax" | "glow" | "none" (default: "3d")
  headerAnimation?: HeaderAnimationType;
  fullDescription: ProjectFullDescription;
}

