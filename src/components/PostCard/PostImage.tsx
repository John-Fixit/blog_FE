"use client";

import { motion } from "framer-motion";

type Props = {
    image?: string
}

const PostImage=({image}: Props)=>{
    return(
        <>
                  <motion.div
        initial={false}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
          className={`bg-[url(https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg)] rounded-lg bg-no-repeat bg-center bg-cover h-60`}
        ></motion.div>
        </>
    )
}
export default PostImage;