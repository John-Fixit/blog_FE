"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import MobileNav from "./MobileNav";
import ThemeToggle from "@/utils/ThemeToggle/ThemeToggle";
import { useAppTheme } from "@/hooks/zustandHooks/useTheme";
import { Logo } from "@/utils/svgIcons/icons"

const Navbar: React.FC = () => {
  
  const [openNavbar, setOpenNavbar] = useState(false);
  const darkTheme = useAppTheme(state=>state.darkTheme);


  const toggleNavbar=()=>{
    setOpenNavbar(!openNavbar);
  }
  return (
    <>
      <header className="sticky top-0 lg:py-4 shadow py-4 bg-white dark:bg-[#181A2A] lg:px-[5rem] md:px-[3rem] px-[2rem] flex flex-col z-10">
        <nav className="flex justify-between items-center">
          <div>
            <Link href="/">
              
              {
                darkTheme?(
                  <Logo />
                ):
                (
                    <Image
                      src={require("@/components/assets/logo.png")}
                      alt="logo"
                      className="object-fit"
                    />
                )
              }

            </Link>
          </div>
          <div className="">
            <div className="lg:hidden cursor-pointer" onClick={toggleNavbar}>
                <FaBars size={'2rem'}/>
            </div>
            <ul className="hidden lg:flex gap-8 ">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex gap-3 items-center">
            <div className="">
              <input
                type="text"
                className="bg-gray-200 dark:bg-[#242535] border-0 focus:outline-0 focus:outline focus:outline-[#4B6BFB] text-sx placeholder:text-[1rem] py-2 px-3 rounded-md focus:transition-all"
                placeholder="Search"
              />
            </div>


            <ThemeToggle />
            
          </div>

        </nav>
      </header>
        {
        openNavbar && (
            <MobileNav />
        )
    }


   
    </>
  );
};

export default Navbar;
