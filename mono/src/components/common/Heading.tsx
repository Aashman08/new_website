import React from "react";

type HeadingProps = {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};

export const Heading: React.FC<HeadingProps> = ({
  level = "h2",
  children,
}) => {
  const baseClasses =
    "text-[#dddddd] font-semibold leading-[1.5] uppercase tracking-[0.2rem] text-center border-b border-[#dddddd] w-max pb-2 mb-8";

  const sizeClasses = {
    h1: "text-[2.7rem] leading-[1.3] tracking-[0.5rem]",
    h2: "text-[1.5rem] leading-[1.4] tracking-[0.5rem]",
    h3: "text-[1.25rem]",
    h4: "text-[1rem]",
    h5: "text-[0.875rem]",
    h6: "text-[0.75rem]",
  };

  const Tag = level as keyof JSX.IntrinsicElements;

  return <Tag className={`${baseClasses} ${sizeClasses[level]}`}>{children}</Tag>;
};

