"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function ThemeToggle() {
    const { systemTheme, theme, setTheme } = useTheme();

    const toggleTheme = () => {
      if (!theme) return; // Avoid setting theme if not available
      setTheme(systemTheme === 'dark' ? 'light' : 'dark');
    };

  return (
    <>
    {/* <button onClick={toggleTheme} className="dark:bg-white dark:text-white text-dark bg-orange-400">
      {systemTheme === 'dark' ? '☀️ Light Mode' : ' Dark Mode'}
    </button> */}

    </>
  );
}

export default ThemeToggle;
