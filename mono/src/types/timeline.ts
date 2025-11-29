/**
 * Timeline Types
 * TypeScript interfaces for timeline-related data structures
 */

import type { Link, ImageData } from './common';

export interface TimelineLink extends Link {}

export interface TimelineImage extends ImageData {}

export interface TimelineEntryData {
  title: string;
  subtitle: string;
  paragraphs: (string | { text: string; links?: Link[] })[];
  images: TimelineImage[];
}

