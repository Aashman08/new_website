import React from "react";

type TextProps = {
  as?: "p" | "span" | "div";
  children: React.ReactNode;
  className?: string; // For additional customization
  style?: React.CSSProperties; // Inline styles
};

export const Text: React.FC<TextProps> = ({
  as = "p", // Default to `p`
  children,
  className = "",
  style, // Accept inline styles
}) => {
  const baseClasses = "text-lg font-light leading-[1.75] mb-8";

  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${baseClasses} ${className}`} style={style}>
      {children}
    </Tag>
  );
};
type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const StyledLink: React.FC<LinkProps> = ({
  href,
  children,
  className = "",
}) => {
  const baseClasses =
    "text-[#dddddd] font-semibold no-underline border-b border-dotted border-[#ffffff80] transition-colors duration-200 ease-in-out hover:border-transparent";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`}
    >
      {children}
    </a>
  );
};
