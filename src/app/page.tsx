"use client";

import React, { useEffect, useState, useMemo } from "react";
import HomePageLayout from "./layouts/HomePageLayout/layout";
import Image from "next/image";
import PostCard from "@/components/PostCard/PostCard";
import contentImage from "@/components/assets/content.png";
import { Pagination, PaginationProps, Result, Spin } from "antd";
import Link from "next/link";
import { axiosInstance } from "@/api/axiosInstance";
import { API_URL } from "@/api/api_urls";
import useSWR from "swr";
import { useInView } from "react-intersection-observer";
import ShowMoreBtn from "@/components/showMoreBtn/ShowMoreBtn";
import Head from "next/head";
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

  const { data, error } = useSWR(`${API_URL.all_post}?page=${page}`, fetcher);

  const post_data = useMemo(() => {
    return data?.data;
  }, [data]);


  useEffect(() => {
    if (post_data?.posts) {
      setPosts(post_data?.posts);
    }
  }, [post_data]);


  const onChange: PaginationProps["onChange"] = (page) => {
    setPage(page);
  };

  const origin = typeof window !== 'undefined' && window?.location?.origin;

  return (
    <>
    <Head>
        {/* SEO Meta Tags */}
        <title>All Posts | FreshScoop</title>
        <meta name="description" content="Explore all the latest posts on various topics. Stay updated with fresh content from FreshScoop." />

        <meta name="keywords" content="blog, nextjs, daily post, metro freshscoop, crawl, seo, posts, sports, entertainment, news, sponsored" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="All Posts | FreshScoop" />
        <meta property="og:description" content="Explore all the latest blog posts on various topics. Stay updated with fresh content from FreshScoop." />
        <meta property="og:image" content="/../components/assets/front_bg.png" /> {/* Path to your image */}
        <meta property="og:url" content={`${origin}`} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="All Posts | FreshScoop" />
        <meta name="twitter:description" content="Explore all the latest blog posts on various topics. like: metro, crawl, seo, posts, sports, entertainment, news, sponsored" />
        <meta name="twitter:image" content="/images/blog-banner.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://yourwebsite.com/posts" />
      </Head>
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
                        src="/../components/assets/front_bg.png"
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
                    title={<p className="dark:text-white">Unexpected Error occurred</p>}
                  ></Result>
                ) : (
                  <>
                   
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                      {posts?.length
                        ? posts?.map((post: any, index: number) => {
                            return <PostCard key={index} post={post} />;
                          })
                        : null}
                    </div>
                    {/* {post_data?.hasNextPage ? (
                      <div className="flex justify-center mt-3">
                        <ShowMoreBtn eventAction={fetchMore} />
                      </div>
                    ) : null} */}

                    {!data ? (
                      <div className="flex justify-center mt-3">
                        <Spin />
                      </div>
                    ) : null}


<div className="flex justify-center mt-3">
                    <Pagination
                      current={page}
                      onChange={onChange}
                      pageSize={post_data?.postPerPage}
                      total={post_data?.totalPostCount}
                      // hideOnSinglePage={true}
                      showSizeChanger={false}
                    />
</div>
                    

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
