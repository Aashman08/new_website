/**
 * Features Module - Barrel Export
 * Centralized feature exports for the application
 */

// About Feature
export { AboutSection } from './about';

// Projects Feature
export { 
  ProjectsSection, 
  ProjectsGrid,
  AnimatedHeader,
  GradientHeader,
  Section,
  SectionHeading,
  Paragraph,
  ImageFigure,
  ImagePair,
  Divider,
  Quote,
  Callout,
  FeatureCard,
  handleBackToProjects,
  projectsData,
} from './projects';
export type { 
  HeaderAnimationType, 
  Project, 
  ProjectFeature, 
  ProjectFullDescription 
} from './projects';

// Research Feature
export { 
  ResearchSection, 
  handleBackToResearch,
  researchProjects,
} from './research';
export type { ResearchProject } from './research';

// CV Feature (disabled for now)
// export { CVSection } from './cv';

// Contact Feature
export { ContactSection } from './contact';

// Art Feature
export { ArtSection, artworks } from './art';
export type { ArtPiece } from './art';

// Education Feature
export { EducationTimeline, educationData } from './education';
export type { EducationEntry } from './education';

// Timeline Feature
export { CareerTimeline, timelineData } from './timeline';
export type { TimelineEntryData, TimelineLink, TimelineImage } from './timeline';
