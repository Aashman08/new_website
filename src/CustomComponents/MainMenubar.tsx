import React from "react";
import { Button } from "./Button"; // Custom Button component
import { Text } from "@/CustomComponents/Typography"; // Ensure you import the Text component

interface MainMenubarProps {
  titles: string[];
  onItemClick: (title: string) => void;
}

const MainMenubar: React.FC<MainMenubarProps> = ({ titles, onItemClick }) => {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {titles.map((title) => (
        <Button
          key={title}
          onClick={() => onItemClick(title)}
          primary
          big // Use the `big` option for larger buttons
          className="tracking-wider text-white bg-transparent hover:bg-[rgba(255,255,255,0.1)] hover:text-white border border-white"
        >
          <Text as="span" className="uppercase">
            {title}
          </Text>
        </Button>
      ))}
    </div>
  );
};

export default MainMenubar;


