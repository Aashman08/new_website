import { cn } from "@/lib/utils";

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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
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
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento transition-all duration-300",
        "p-4 justify-between flex flex-col space-y-4",
        // Modern dark glassmorphism style
        "bg-neutral-900/80 backdrop-blur-sm",
        "border border-white/10",
        "shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30",
        className
      )}
      style={{
        // Use CSS custom property for hover border color
        "--accent-color": accentColor || "rgba(255,255,255,0.2)",
      } as React.CSSProperties}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accentColor || "rgba(255,255,255,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
      }}
    >
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
  );
};
