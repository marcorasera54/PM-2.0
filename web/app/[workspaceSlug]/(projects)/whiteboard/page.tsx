"use client";

import { observer } from 'mobx-react';
import React, { useCallback } from 'react';
import { Excalidraw, MainMenu } from '@excalidraw/excalidraw';
import { useTheme } from 'next-themes'; // Assuming useTheme is defined and exported from 'theme.js'
import { SunMoon } from "lucide-react";

const WhiteboardPage = observer(() => {
  const { theme, setTheme } = useTheme(); // Destructure theme state and setter

  const excalidrawTheme = theme === 'dark' ? 'dark' : 'light';

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // Toggle between 'light' and 'dark'
  }, [theme, setTheme]);

  return (
    <div className={`h-screen w-screen ${theme}`}> {/* Apply theme as a class if needed */}
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
