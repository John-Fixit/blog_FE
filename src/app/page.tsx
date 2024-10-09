"use client";

import React, { useEffect, useState, useMemo } from "react";
import HomePageLayout from "./layouts/HomePageLayout/layout";
import Image from "next/image";
import PostCard from "@/components/PostCard/PostCard";
import contentImage from "@/components/assets/content.png";
import { Button, Result, Spin } from "antd";
import Link from "next/link";
import { axiosInstance } from "@/api/axiosInstance";
import { API_URL } from "@/api/api_urls";
import useSWR from "swr";
import { useInView } from "react-intersection-observer";
import ShowMoreBtn from "@/components/showMoreBtn/ShowMoreBtn";
// import { useInView as useInview2 } from "react-intersection-observer";

type HomeProps = {
  posts: Array<object>;
  nextPage: Boolean;
  totalPost: Number;
};

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

const Home = () => {
  const [page, setPage] = useState(1);

  const [posts, setPosts] = useState<any>([]);

  const { ref, inView } = useInView();

  const { ref: prevRef, inView: prevInView } = useInView();

  const { data, error } = useSWR(`${API_URL.all_post}?page=${page}`, fetcher);

  const post_data = useMemo(() => {
    return data?.data;
  }, [data]);

  useEffect(() => {
    if (prevInView && post_data?.hasPrevPage) {
      setPage(post_data?.prevPage);
    }
    if (inView && post_data?.hasNextPage) {
      console.log(post_data?.nextPage);
      setPage(post_data?.nextPage);
    }
  }, [inView, prevInView, post_data]);


  useEffect(() => {
    if (post_data?.posts) {
      setPosts((prev:Array<object>)=>[...prev, ...post_data?.posts])
    }
  }, [post_data]);

  const fetchMore = () => {
    if (post_data?.hasNextPage) {
      setPage(post_data?.nextPage);
    } else if (post_data?.hasPrevPage) {
      setPage(post_data?.prevPage);
    }
  };



  return (
    <>
      <HomePageLayout>
        <main>
          <section
            className={`bg-[url(../components/assets/front_bg.png)] lg:h-[70vh] md:h-[50vh] h-[50vh] bg-no-repeat bg-cover bg-center w-full relative`}
          >
            <div className="shadow lg:w-[35%] md:w-[50%] w-[90%] p-3 border rounded-lg bg-white dark:bg-[#181A2A] dark:border-[#242535] absolute -bottom-10 lg:left-[5rem] md:left-[3rem] left-0">
              <div className="p-3">
                <p className="text-[#ffff] text-sm bg-[#4B6BFB] w-fit font-medium rounded-lg py-2 px-3">
                  Technology
                </p>

                <p className="font-semibold text-[#181A2A] dark:text-white text-[18px] leading-[1.2] tracking-[0.05rem] my-3 cursor-pointer">
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
                    <p className="text-[#97989F] font-medium text-[16px]">
                      {"Tracey Wilson"}
                    </p>
                  </div>
                  <p className="text-[#97989F] text-[16px]">
                    {"August 20, 2022"}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="lg:px-[5rem] md:px-[3rem] px-[2rem] py-[5rem] bg-white dark:bg-[#181A2A]">
            <div className="">{/* Ads can be here */}</div>
            <div>
              <h1 className="text-2xl md:text-3xl dark:text-white font-bold mb-5">
                Latest Posts:
              </h1>
              <div>
                {error ? (
                  <Result
                    status="error"
                    title="Unexpected Error occurred"
                  ></Result>
                ) : (
                  <>
                    {post_data?.hasPrevPage ? (
                      <div ref={prevRef}>Hello world this is {inView}</div>
                    ) : null}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                      {posts?.length
                        ? posts?.map((post: any, index: number) => {
                            return <PostCard key={index} post={post} />;
                          })
                        : null}
                    </div>
                    {
                      post_data?.hasNextPage ? (
                    <div className="flex justify-center mt-3">
                      <ShowMoreBtn eventAction={fetchMore} />
                    </div>
                      ): null
                    }

                    {!data ? (
                      <div className="flex justify-center mt-3">
                        <Spin />
                      </div>
                    ) : null}

                    {/* {
                      post_data?.hasNextPage ? <div ref={ref}>Hello world this is {inView}</div> : null
                    } */}
                  </>
                )}
              </div>
            </div>
          </section>
        </main>
      </HomePageLayout>
    </>
  );
};

export default Home;
