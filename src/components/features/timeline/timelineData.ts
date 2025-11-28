// Timeline data separated from component for easier maintenance

export interface TimelineLink {
  text: string;
  href: string;
}

export interface TimelineImage {
  src: string;
  alt: string;
}

export interface TimelineEntryData {
  title: string;
  subtitle: string;
  paragraphs: (string | { text: string; links?: { text: string; href: string }[] })[];
  images: TimelineImage[];
}

export const timelineData: TimelineEntryData[] = [
  {
    title: "Present",
    subtitle: "Bridging Space and Technology for a Smarter Planet",
    paragraphs: [
      {
        text: "Currently, I am working as a research assistant at the {Astrophotonics Technology Lab}, collaborating with Spark Ventures to develop software for {on-chip integrated astrophotonic spectrographs}.",
        links: [
          { text: "Astrophotonics Technology Lab", href: "https://gatkine.astro.ucla.edu/research.html" },
          { text: "on-chip integrated astrophotonic spectrographs", href: "https://gatkine.astro.ucla.edu/research.html#AWG" }
        ]
      },
      "Our goal is to enable trace gas detection using advanced test beds such as drones and satellites, contributing to advancements in environmental monitoring and space-based instrumentation."
    ],
    images: [
      { src: "/img/cube.png", alt: "CubeSat project" },
      { src: "/img/tanager_1.png", alt: "Tanager satellite" }
    ]
  },
  {
    title: "2024",
    subtitle: "Turning Ideas into Impact: Building AI for SMBs",
    paragraphs: [
      {
        text: "This summer, I ventured into the world of entrepreneurship, building {Actuals}, an AI startup aimed at streamlining the acquisition process for Small and Medium Businesses (SMBs) across the United States.",
        links: [{ text: "Actuals", href: "https://useactuals.com" }]
      },
      {
        text: "With initial backing from {F7 Ventures}, we refined our product to enhance efficiency in financial analysis and due diligence.",
        links: [{ text: "F7 Ventures", href: "https://www.f7ventures.com" }]
      },
      "Throughout this process, I developed a strong proficiency in Retrieval-Augmented Generation (RAG) systems and AWS."
    ],
    images: [
      { src: "/img/actuals.png", alt: "Actuals platform" },
      { src: "/img/chart.png", alt: "Financial analysis chart" }
    ]
  },
  {
    title: "2023",
    subtitle: "Harnessing AI to Redefine Business Solutions",
    paragraphs: [
      {
        text: "My first formal internship experience was at Deloitte, where I joined the newly established {Semantics, Analytics, and Mergers & Acquisitions Gen AI} Team.",
        links: [{ text: "Semantics, Analytics, and Mergers & Acquisitions Gen AI", href: "https://www.deloitte.com/global/en/services/consulting/services/strategy-analytics-manda.html" }]
      },
      "During my time there, I successfully completed two projects, each focused on distinct use cases, gaining hands-on experience in applying generative AI to real-world business problems."
    ],
    images: [
      { src: "/img/pandas.png", alt: "PandasAI project" },
      { src: "/img/code.jpg", alt: "Code development" }
    ]
  },
  {
    title: "2022",
    subtitle: "Exploring Earth from Above: Innovation Through Aerial Imaging",
    paragraphs: [
      {
        text: "Visited Iowa as an Undergraduate Researcher selected for the {Edge of Space Academy: Spaceflight Instrumentation and Mission Design} program.",
        links: [{ text: "Edge of Space Academy: Spaceflight Instrumentation and Mission Design", href: "https://edgeofspace.sites.uiowa.edu" }]
      },
      "Developed a proof-of-concept, drone-mounted dual-camera system designed for accessible NDVI and SFM visualization. This system was designed to provide accessible and cost-effective methods for monitoring vegetation stress caused by heat waves.",
      "My first time officially working with spectral data."
    ],
    images: [
      { src: "/img/drone.png", alt: "Drone imaging system" },
      { src: "/img/3D.png", alt: "3D visualization" }
    ]
  },
  {
    title: "Where It All Started",
    subtitle: "A Childhood Dream of Space, Nurtured by Curiosity and Exploration",
    paragraphs: [
      "My fascination with space and nature began during my childhood, fueled by captivating documentaries that sparked my curiosity about the universe.",
      {
        text: "This passion deepened during my ninth grade when I joined {Aeross}, an aerospace club that became a defining part of my high school experience. Through Aeross, I not only discovered my aspiration to become a planetary scientist but also forged lifelong friendships.",
        links: [{ text: "Aeross", href: "https://aeross.org" }]
      },
      "One of the most unforgettable milestones was representing **India** on an international stage at the Kennedy Space Center. This experience solidified my desire to explore the unknown, setting me on a path that continues to shape both my academic pursuits and career aspirations."
    ],
    images: [
      { src: "/img/SSDC1.jpg", alt: "SSDC competition" },
      { src: "/img/SSDC2.jpg", alt: "Kennedy Space Center" }
    ]
  }
];

