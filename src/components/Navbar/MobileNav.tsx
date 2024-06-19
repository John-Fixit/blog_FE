import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/utils/ThemeToggle/ThemeToggle";


const MobileNav: React.FC=() => {

    //motion variant
  const modalVariants = {
    hidden: {
      y: "-10vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring", // Set transition type to 'tween'
        duration: 0.5, // Specify duration
        stiffness: 50,

        // type: "spring",
        // stiffness: 20,
        // restDelta: 2
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        type: "tween",
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        <motion.nav
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute lg:hidden bg-white dark:bg-[#181A2A] top-18 h-s border-t-2 border-t-blue-500 w-full py-4 md:px-[3rem] px-[2rem] shadow pb-3 z-[99]"
        >
          <ul className="flex flex-col">
            <li className="px-[2rem] py-3 hover:bg-gray-300 rounded-md transition-all">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[2rem] py-3 hover:bg-gray-300 rounded-md transition-all">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[2rem] py-3 hover:bg-gray-300 rounded-md transition-all">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="hidden lg:flex gap-3 items-center">
            <div className="">
              <input
                type="text"
                className="bg-gray-200 border-0 focus:outline-0 focus:outline focus:outline-[#4B6BFB] text-sx placeholder:text-[1rem] py-2 px-2 rounded-md focus:transition-all"
                placeholder="Search"
              />
            </div>

           <ThemeToggle />
          </div>
        </motion.nav>
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
