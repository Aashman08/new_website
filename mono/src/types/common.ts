/**
 * Common Types
 * Shared TypeScript interfaces used across the application
 */

// Generic link type used across features
export interface Link {
  text: string;
  href: string;
}

// Generic image type
export interface ImageData {
  src: string;
  alt: string;
}

// Base props for modal/section components
export interface SectionProps {
  isOpen: boolean;
  onClose: () => void;
  onMenuItemClick?: (item: string) => void;
}

// Generic feature card props
export interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

