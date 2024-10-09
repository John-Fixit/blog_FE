"use client";
import HomePageLayout from "../../layouts/HomePageLayout/layout";
import { Button, Flex, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PostCard from "@/components/PostCard/PostCard";
import { Card } from "antd";
import { axiosInstance } from "@/api/axiosInstance";
import useSWR from "swr";
import { API_URL } from "@/api/api_urls";
import RenderHTMLContent from "@/components/RenderHTMLContent/RenderHTMLContent";
import { formatDate } from "@/utils/formatDate";
import Category from "@/lib/category/Category";
import Image from "next/image";

interface SinglePostProps {
  params: {
    post_id: any;
  };
}

const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res?.data);

const Single_post = ({ params }: SinglePostProps) => {
  const { post_id } = params;

  const { data, error } = useSWR(`${API_URL.single_post}${post_id}`, fetcher);

  const post_details = data?.data?.post;

  const related_posts = data?.data?.related_post;

  return (
    <>
      <HomePageLayout>
        <div className="lg:mx-20 md:mx-15 sm:mx-10 mx-10 grid lg:grid-cols-3 grid-cols-1 mt-4 gap-x-5 gap-y-4">
            <div className="col-span-2">
                    <div className="">
                    <Category category={post_details?.category} />
                    <h1 className="font-semibold lg:text-2xl md:text-2xl sm:text-2xl text-sm mt-3">
                        {post_details?.post_title}
                    </h1>
                    <div className="flex lg:gap-6 md:gap-4 gap-6 items-center flex-wrap mt-2">
                        <div className="flex gap-2 items-center">
                        {/* <div className="w-[36px]">
                            <Image
                            src="https://saharareporters.com/sites/default/files/styles/focal_point_1300x650/public/2024-10/1000225868.jpg?h=25061769&itok=MV9v0_lL"
                            alt="avatar"
                            width={50}
                            height={50}
                            className="rounded-full"
                            />
                        </div> */}
                        {
                          post_details?.posted_by ? (
                        <p className="text-[#97989F] font-medium text-[16px]">
                            Posted by <span className="font-semibold text-black/70">{post_details?.posted_by}</span>
                        </p>
                          ): null
                        }
                        </div>
                        <p className="text-[#97989F] text-[16px]">
                        {formatDate(post_details?.post_created_at)}
                        </p>
                    </div>

                    {/* just put it there after the api we use the image inside it  */}
                    <section className="mt-5">
                        <div
                        className={`rounded-lg bg-no-repeat bg-center bg-contain h-[70vh]`}
                        style={{ backgroundImage: `url(${post_details?.post_img_url})` }}
                        ></div>
                    </section>
                    <RenderHTMLContent htmlContent={post_details?.post_body} />
                    </div>
            </div>
            <div className="">
                <h1 className="text-md font-semibold">Related Posts:</h1>
                <div className="grid lg:grid-cols-1 grid-cols-2 gap-4 lg:flex flex-col gap-y-3 mt-2">
                    {
                        related_posts?.length ? (
                            related_posts?.map((post: any, index: number) => {
                                return <PostCard key={index} post={post} />;
                              })
                        ): null
                    }
                    </div>
            </div>
        </div>
      </HomePageLayout>
    </>
  );
};
export default Single_post;

// want to consume the api since the page to be displaying will change

// export const GetPost = async()=> {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
//     const data = await res.json()
//     return{
//         props:{data}
//     }

// }
