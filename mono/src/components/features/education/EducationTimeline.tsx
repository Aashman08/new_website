"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconSchool } from "@tabler/icons-react";
import { educationData, EducationEntry } from "./educationData";
import { Divider } from "@/components/features/projects/ProjectPageComponents";

// Render text with links
const renderTextWithLinks = (
  text: string,
  links?: { text: string; href: string }[]
): React.ReactNode => {
  if (!links || links.length === 0) return text;

  let result: React.ReactNode[] = [];
  let remainingText = text;
  let keyIndex = 0;

  links.forEach((link) => {
    const index = remainingText.indexOf(link.text);
    if (index !== -1) {
      if (index > 0) {
        result.push(remainingText.substring(0, index));
      }
      result.push(
        <a
          key={keyIndex++}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-200 hover:text-white underline underline-offset-2 transition-colors"
        >
          {link.text}
        </a>
      );
      remainingText = remainingText.substring(index + link.text.length);
    }
  });

  if (remainingText) {
    result.push(remainingText);
  }

  return result;
};

// Individual education card
const EducationCard: React.FC<{ entry: EducationEntry; index: number }> = ({
  entry,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group"
    >
      <div className="flex gap-5">
        {/* Logo */}
        <div className="relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-white">
          <Image
            src={entry.logo}
            alt={entry.institution}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {entry.degree}
              </h3>
              {entry.institutionUrl ? (
                <a
                  href={entry.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-300 text-sm transition-colors"
                >
                  {entry.institution}
                </a>
              ) : (
                <p className="text-neutral-400 text-sm">{entry.institution}</p>
              )}
            </div>
            <span className="text-neutral-500 text-sm whitespace-nowrap">
              {entry.period}
            </span>
          </div>

          {/* Description */}
          <p className="text-neutral-400 text-sm leading-relaxed mt-3">
            {renderTextWithLinks(entry.description, entry.links)}
          </p>

          {/* Highlights */}
          {entry.highlights && entry.highlights.length > 0 && (
            <ul className="mt-3 space-y-1">
              {entry.highlights.map((highlight, idx) => (
                <li key={idx} className="text-neutral-500 text-sm flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>{renderTextWithLinks(highlight, entry.links)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export function EducationTimeline() {
  return (
    <div className="w-full max-w-3xl mx-auto py-10">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-10"
      >
        <IconSchool className="w-6 h-6 text-neutral-400" />
        <h2 className="text-2xl font-semibold text-white">Education</h2>
      </motion.div>

      {/* Education Cards */}
      <div>
        {educationData.map((entry, index) => (
          <React.Fragment key={entry.id}>
            <EducationCard entry={entry} index={index} />
            {index < educationData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

