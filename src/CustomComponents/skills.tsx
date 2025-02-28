"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const SkillCard = ({
  icon,
  title,
  gradient,
  href,
  borderColor,
  className,
  brightness
}: {
  icon: React.ReactNode;
  title: string;
  gradient: string;
  href?: string;
  borderColor?: string;
  className?: string;
  brightness?: string
}) => {
  const cardContent = (
    <div
      className="rounded-6xl"
      style={{
        border: `2px solid ${borderColor ? `rgba(${parseInt(borderColor.slice(1, 3), 16)}, ${parseInt(borderColor.slice(3, 5), 16)}, ${parseInt(borderColor.slice(5, 7), 16)}, 0.5` : "transparent"}`, // Convert hex to RGBA with 50% opacity
      }}
    >
      <div
        className={cn(
          "aspect-square w-full rounded-6xl overflow-hidden flex flex-col items-center justify-center transition-transform transform hover:scale-105 text-white relative",
          className,
          href ? "cursor-pointer" : ""
        )}
        style={{
          background: gradient,
          filter: `brightness(${brightness || 1})`,
        }}
      >
        <div className="h-20 w-20 flex items-center justify-center z-10">{icon}</div>
        <div className="mt-4 text-lg font-normal z-10">{title}</div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      </div>
    </div>
  );

  return href ? <Link href={href}>{cardContent}</Link> : cardContent;
};
  
  // SkillsGrid: Renders a responsive grid of SkillCards.
  export const SkillsGrid = ({
    skills,
  }: {
    skills: { title: string; icon: React.ReactNode; gradient: string; href?: string }[];
  }) => {
    return (
      <div className="pb-40 px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-20">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} icon={skill.icon} title={skill.title} gradient={skill.gradient} href={skill.href} />
          ))}
        </div>
      </div>
    );
  };
  
