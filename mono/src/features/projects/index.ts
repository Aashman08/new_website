/**
 * Projects Feature - Barrel Export
 */

// Components
export { default as ProjectsSection } from './components/ProjectsSection';
export { ProjectsGrid } from './components/ProjectsGrid';
export { AnimatedHeader, GradientHeader } from './components/headerAnimations';
export type { HeaderAnimationType } from './components/headerAnimations';
export {
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
} from './components/ProjectPageComponents';

// Data
export { projectsData } from './data/projectsData';
export type { Project, ProjectFeature, ProjectFullDescription, ProjectIconName } from './data/projectsData';

