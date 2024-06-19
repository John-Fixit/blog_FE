"use client";

import { useState, useEffect } from 'react';

import { MoonIcon, SunIcon } from '../svgIcons/icons';
import { useAppTheme } from '@/hooks/zustandHooks/useTheme';

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    const { darkTheme, updateTheme } = useAppTheme(state=>state)

    useEffect(()=>{
      let theme:string = localStorage.getItem("theme") || "light";

      
      if(theme === "dark") setDarkMode(true)
    }, [])

    useEffect(()=>{
      updateTheme(darkMode);
      if(darkMode){
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      }
      else{
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    }, [darkMode])

  return (
    <>
   

    <label
              htmlFor="AcceptConditions"
              className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-200 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[#4B6BFB]"
            >
              <input
                type="checkbox"
                id="AcceptConditions"
                className="peer sr-only"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />

              <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6">
                {
                  darkTheme?(
                    <SunIcon />
                  ): (
                    <MoonIcon />
                  )
                }
              </span>
            </label>

            
    </>
  );
}

export default ThemeToggle;
