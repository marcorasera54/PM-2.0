"use client";

import { observer } from 'mobx-react';
import React, { useCallback, useEffect, useState } from 'react';
import { Excalidraw, MainMenu } from '@excalidraw/excalidraw';
import { useTheme } from 'next-themes'; // Assuming useTheme is defined and exported from 'theme.js'
import { SunMoon } from "lucide-react";

const WhiteboardPage = observer(() => {
  const { theme, setTheme, resolvedTheme } = useTheme(); // resolvedTheme respects "system"

  // Set the Excalidraw theme based on resolvedTheme
  const excalidrawTheme = resolvedTheme === "dark" ? "dark" : "light";

  // Toggle between light, dark, and system themes
  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  }, [theme, setTheme]);
  
  return (
    <div className={`h-screen w-screen ${resolvedTheme}`}> {/* Apply theme as a class if needed */}
      <Excalidraw theme={excalidrawTheme}>
        <MainMenu>
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.Item onSelect={toggleTheme} icon={<SunMoon />}>Toggle Theme</MainMenu.Item>
          <div className="border-b border-gray-300 my-2" />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
        </MainMenu>
      </Excalidraw>
    </div>
  );
});

export default WhiteboardPage;
