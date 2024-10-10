import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import Category from "@/lib/category/Category";
import { formatDate } from "@/utils/formatDate";

type Props = {
  post?: {
    id: number;
    post_img_url: string;
    post_title: string;
    post_body: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    post_created_at: string;
    posted_by: String;
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
      <div className="shadow p-3 border rounded-lg dark:bg-[#181A2A] dark:border-[#242535] flex flex-col justify-between">
        <div
          className={`rounded-lg bg-no-repeat bg-center bg-cover h-60`}
          style={{ backgroundImage: `url(${post?.post_img_url})` }}
        ></div>
        <div className="p-3">
          <Category category={post?.category} />

          <Link href={`/posts/${post?.id}`} passHref prefetch={true}>
            <p className="font-semibold text-[#2e2f3a] dark:text-white text-[24px] leading-[1.2] tracking-wide my-3  ease hover:opacity-70 cursor-pointer hover:duration-500">
              {post?.post_title}
            </p>
          </Link>
         
        </div>
        <div className="flex lg:gap-6 md:gap-4 gap-6 items-center flex-wrap">
            {post?.posted_by ? (
              <>
                <div className="flex gap-2 items-center">
                  <div className="">
                    {/* <Image
                      src="https://saharareporters.com/sites/default/files/styles/focal_point_1300x650/public/2024-10/1000225868.jpg?h=25061769&itok=MV9v0_lL"
                      alt="avatar"
                      width={30}
                      height={30}
                      className="rounded-full"
                    /> */}
                  </div>
                  <p className="text-[#97989F] font-medium text-[16px]">
                    Posted By: <span className="font-semibold text-black/70">{post?.posted_by}</span>
                  </p>
                </div>
              </>
            ) : null}
            <p className="text-[#97989F] text-[14px]">
              {formatDate(post?.post_created_at)}
            </p>
          </div>
      </div>
    </>
  );
};

export default PostCard;
