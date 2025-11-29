/**
 * Education Types
 * TypeScript interfaces for education-related data structures
 */

import type { Link } from './common';

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  period: string;
  logo: string;
  description: string;
  highlights?: string[];
  links?: Link[];
}

