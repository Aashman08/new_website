/**
 * Types Module - Barrel Export
 * Centralized TypeScript type definitions
 */

// Common types
export type { Link, ImageData, SectionProps, FeatureCardProps } from './common';

// Feature-specific types
export type { 
  ProjectFeature, 
  ProjectFullDescription, 
  ProjectIconName, 
  Project 
} from './projects';

export type { EducationEntry } from './education';

export type { 
  TimelineLink, 
  TimelineImage, 
  TimelineEntryData 
} from './timeline';

