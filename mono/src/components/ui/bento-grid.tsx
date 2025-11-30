import { cn } from "@/lib/utils";
import { useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// Helper to convert hex to rgba
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  onClick,
  accentColor,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  accentColor?: string; // Hex color for hover border (e.g., "#10b981")
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Default to white, use accent color on hover
  const glowColor = isHovered && accentColor ? accentColor : "#ffffff";
  
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento transition-all duration-300 relative",
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Inner glass panel with glowing border */}
      <div 
        className="relative h-full w-full rounded-3xl p-4 flex flex-col space-y-4 justify-between overflow-hidden transition-all duration-300"
        style={{
          background: "linear-gradient(145deg, rgba(20,20,20,0.85) 0%, rgba(10,10,10,0.95) 100%)",
          border: `1px solid ${isHovered && accentColor ? hexToRgba(accentColor, 0.3) : "rgba(255,255,255,0.08)"}`,
          boxShadow: isHovered && accentColor 
            ? `inset 1px 1px 0px ${hexToRgba(accentColor, 0.15)}, 0 0 30px ${hexToRgba(accentColor, 0.1)}`
            : "inset 1px 1px 0px rgba(255,255,255,0.08), 0 0 40px rgba(255,255,255,0.01)",
        }}
      >
        {/* Top edge highlight - glowing light effect */}
        <div 
          className="absolute top-0 left-8 right-8 h-[1px] rounded-full transition-all duration-300"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${hexToRgba(glowColor, 0.4)} 30%, ${hexToRgba(glowColor, 0.55)} 50%, ${hexToRgba(glowColor, 0.4)} 70%, transparent 100%)`,
            boxShadow: `0 0 8px ${hexToRgba(glowColor, 0.2)}, 0 0 15px ${hexToRgba(glowColor, 0.1)}`,
          }}
        />
        {/* Left edge highlight */}
        <div 
          className="absolute top-8 bottom-1/2 left-0 w-[1px] rounded-full transition-all duration-300"
          style={{
            background: `linear-gradient(180deg, ${hexToRgba(glowColor, 0.35)} 0%, ${hexToRgba(glowColor, 0.15)} 70%, transparent 100%)`,
            boxShadow: `0 0 6px ${hexToRgba(glowColor, 0.15)}`,
          }}
        />
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-neutral-100 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-400 text-xs">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
