import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MainMenubarProps {
  titles: string[];
  onItemClick: (title: string) => void;
}

const MainMenubar: React.FC<MainMenubarProps> = ({ titles, onItemClick }) => {
  return (
    <div className="flex justify-center gap-4">
      {titles.map((title) => (
        <Button
          key={title}
          variant="outline"
          onClick={() => onItemClick(title)}
          className={cn(
            "border border-white text-white bg-black hover:bg-white hover:text-black",
          )}
        >
          {title.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export default MainMenubar;