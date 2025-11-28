"use client";

import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

interface MainMenubarProps {
  titles: string[];
  onItemClick: (title: string) => void;
}

const MainMenubar: React.FC<MainMenubarProps> = ({ titles, onItemClick }) => {
  return (
    <div className="flex justify-center w-full">
      <Menubar>
        {titles.map((title) => (
          <MenubarMenu key={title}>
            <MenubarTrigger onClick={() => onItemClick(title.toUpperCase())}>
              {title.toUpperCase()}
            </MenubarTrigger>
          </MenubarMenu>
        ))}
      </Menubar>
    </div>
  );
};

export default MainMenubar;
