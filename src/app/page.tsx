
import React from "react";
import HomePageLayout from "./layouts/HomePageLayout/layout";
import Image from "next/image";
import PostCard from "@/components/PostCard/PostCard";
import contentImage from "@/components/assets/content.png";
import { Button } from "antd";

const Home = () => {

  
  

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
            {/* <Image
              src={contentImage}
              alt="bg-content"
              className="absolute lg:w-[40%] -bottom-20 lg:left-4 left-0 object-cover"
            /> */}
          </section>

          <section className="lg:px-[5rem] md:px-[3rem] px-[2rem] py-[5rem] bg-white dark:bg-[#181A2A]">
            <div className="">{/* Ads can be here */}</div>
            <div>
              <h1 className="text-2xl md:text-3xl dark:text-white font-bold mb-5">
                Latest Post
              </h1>
              <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                  <PostCard />
                  <PostCard />
                  <PostCard />
                  <PostCard />
                </div>
                <div className="flex justify-center mt-3">
                  <Button size="large">View All Post</Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </HomePageLayout>


      
    </>
  );
};

export default Home;
