import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { timelineData, TimelineEntryData } from "./timelineData";

// Shared styles as constants
const IMAGE_SHADOW = "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";
const PARAGRAPH_STYLES = "w-full text-neutral-300 dark:text-neutral-300 text-justify text-base md:text-lg leading-relaxed";

// Reusable link component for timeline entries
const TimelineLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <i>
    <b>
      <a 
        href={href} 
        className="underline" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </b>
  </i>
);

// Parse text with {link} markers and render with actual links
const renderTextWithLinks = (
  text: string, 
  links?: { text: string; href: string }[]
): React.ReactNode => {
  if (!links || links.length === 0) {
    // Handle **bold** markers for emphasis
    if (text.includes("**")) {
      const parts = text.split(/\*\*(.*?)\*\*/g);
      return parts.map((part, i) => 
        i % 2 === 1 ? <i key={i}><b>{part}</b></i> : part
      );
    }
    return text;
  }

  let result: React.ReactNode[] = [];
  let remainingText = text;
  let keyIndex = 0;

  links.forEach((link) => {
    const marker = `{${link.text}}`;
    const index = remainingText.indexOf(marker);
    
    if (index !== -1) {
      // Add text before the link
      if (index > 0) {
        result.push(remainingText.substring(0, index));
      }
      // Add the link
      result.push(
        <TimelineLink key={keyIndex++} href={link.href}>
          {link.text}
        </TimelineLink>
      );
      // Update remaining text
      remainingText = remainingText.substring(index + marker.length);
    }
  });

  // Add any remaining text
  if (remainingText) {
    result.push(remainingText);
  }

  return result;
};

// Image grid component
const TimelineImageGrid: React.FC<{ images: { src: string; alt: string }[] }> = ({ images }) => (
  <div className="grid grid-cols-2 gap-4">
    {images.map((img, idx) => (
      <Image
        key={idx}
        src={img.src}
        alt={img.alt}
        width={500}
        height={500}
        className={`rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full ${IMAGE_SHADOW}`}
      />
    ))}
  </div>
);

// Convert data entry to timeline format
const createTimelineContent = (entry: TimelineEntryData) => ({
  title: entry.title,
  subtitle: entry.subtitle,
  content: (
    <div>
      {entry.paragraphs.map((para, idx) => (
        <p key={idx} className={PARAGRAPH_STYLES}>
          {typeof para === "string" 
            ? renderTextWithLinks(para)
            : renderTextWithLinks(para.text, para.links)
          }
        </p>
      ))}
      <TimelineImageGrid images={entry.images} />
    </div>
  ),
});

export function CareerTimeline() {
  const data = timelineData.map(createTimelineContent);

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
