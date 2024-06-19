
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  post?: {
    id: number;
    post_img_url: string;
    post_title: string;
    post_body: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    user: {
      firstName: string;
      lastName: string;
      profile_picture: string;
    };
  };
};


const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <>
      <div className="shadow p-3 border rounded-lg dark:bg-[#181A2A] dark:border-[#242535]">
      <div
          className={`bg-[url(https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg)] rounded-lg bg-no-repeat bg-center bg-cover h-60`}
        ></div>
        <div className="p-3">
          <p className="text-[#4B6BFB] text-sm bg-blue-50 dark:bg-[#242535] w-fit font-medium rounded-lg py-2 px-3">
            Technology
          </p>

          <p className="font-semibold text-[#181A2A] dark:text-white text-[24px] leading-[1.2] tracking-wide my-3 hover:transition-all ease hover:underline cursor-pointer hover:duration-500">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </p>
          <div className="flex lg:gap-6 md:gap-4 gap-6 items-center flex-wrap">
            <div className="flex gap-2 items-center">
                <div className="w-[36px]">
                  <Image
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt="avatar"
                    width={50}
                    height={10}
                    className="rounded-full"
                  />
                </div>
                <p className="text-[#97989F] font-medium text-[16px]">{"Tracey Wilson"}</p>
            </div>
                <p className="text-[#97989F] text-[16px]">{"August 20, 2022"}</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
