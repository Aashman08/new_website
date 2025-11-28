"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconSchool } from "@tabler/icons-react";
import { educationData, EducationEntry } from "./educationData";

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
          className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
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
      className="relative p-6 rounded-xl bg-neutral-900/60 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group"
    >
      {/* Header with logo, title, and date */}
      <div className="flex items-start gap-4 mb-4">
        {/* Logo */}
        <div className="relative flex-shrink-0 w-16 h-16 rounded-lg bg-white overflow-hidden">
          <Image
            src={entry.logo}
            alt={entry.institution}
            fill
            className="object-cover"
          />
        </div>

        {/* Title and institution */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white leading-tight">
            {entry.degree}
          </h3>
          {entry.institutionUrl ? (
            <a
              href={entry.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-300 transition-colors"
            >
              {entry.institution}
            </a>
          ) : (
            <p className="text-neutral-400">{entry.institution}</p>
          )}
        </div>

        {/* Date badge */}
        <div className="flex-shrink-0">
          <span className="px-3 py-1 text-sm font-medium text-neutral-300 bg-white/5 border border-white/10 rounded-full">
            {entry.period}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-300 text-sm leading-relaxed mb-3">
        {renderTextWithLinks(entry.description, entry.links)}
      </p>

      {/* Highlights */}
      {entry.highlights && entry.highlights.length > 0 && (
        <ul className="space-y-1">
          {entry.highlights.map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-neutral-400"
            >
              <span className="text-white">•</span>
              <span>{renderTextWithLinks(highlight, entry.links)}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export function EducationTimeline() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <IconSchool className="w-8 h-8 text-white" />
        <h3 className="text-lg md:text-4xl text-white dark:text-white max-w-5xl text-justify">Education</h3>
      </div>

      {/* Education Cards */}
      <div className="space-y-4">
        {educationData.map((entry, index) => (
          <EducationCard key={entry.id} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
}

