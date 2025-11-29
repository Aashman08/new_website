/**
 * Education Data
 * Data for the education timeline section
 */

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
  links?: { text: string; href: string }[];
}

export const educationData: EducationEntry[] = [
  {
    id: "UCLA",
    degree: "Bachelor of Science in Statistics and Data Science",
    institution: "University of California, Los Angeles",
    institutionUrl: "https://www.ucla.edu/",
    location: "Los Angeles, CA",
    period: "2021 - 2025",
    logo: "/img/ucla-seal.jpg",
    description: "Focused on machine learning, data engineering, and deep learning. Conducted undergraduate research in the AstroPhotonics Technology Lab (Prof. Gatkine), the Sensing and Robotics for Infrastructure Lab (Post Doc DebashishJana), and the Tectonics and Structural Geology Group (PhD Abijah Simon).",
    highlights: [
      "Minor in Data Science Engineering"
    ],
    links: [
      { text: "AstroPhotonics Technology Lab", href: "https://gatkine.astro.ucla.edu/" },
      { text: "Sensing and Robotics for Infrastructure Lab", href: "https://sri-lab.seas.ucla.edu/" },
      { text: "Tectonics and Structural Geology Group", href: "https://faculty.epss.ucla.edu/~yin/" }
    ]
  },
  {
    id: "dps",
    degree: "High School - Science with Computer Science",
    institution: "Delhi Public School, RK Puram",
    institutionUrl: "https://dpsrkp.net/",
    location: "New Delhi, India",
    period: "2017 - 2021",
    logo: "/img/dps.jpg",
    description: "Completed high school with the subjects - English, Mathematics, Physics, Chemistry, and Computer Science.",
    highlights: [
      "Vice President of Aerospace Club, Aeross",
      "Served as a member of student counsil and an active part of Dance and Choir club"
    ],
    links: [
      { text: "Aeross", href: "https://aeross.org/" }
    ]
  }
];

