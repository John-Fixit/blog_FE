import HomePageLayout from "../layouts/HomePageLayout/layout"
import Image from "next/image";
import {Avatar} from "antd"
import { UserOutlined } from '@ant-design/icons';
import PostCard from "@/components/PostCard/PostCard";
import Link from "next/link";
import { Button } from "antd";




const Blog_listing:React.FC =()=>{
    return(
        <> <HomePageLayout >
           
            <h1>blog Listing Pages</h1>
            <h1 className="text-2xl text-center font-bold mt-5">Page Title</h1>
            <section className="flex flex-row gap-2 justify-center mb-5 divide-x divide-gray-400">  
                <div>Home</div>
                <div className="ps-2">Link One</div>
            </section>

            <section
            className={`bg-[url(../components/assets/front_bg.png)] lg:h-[70vh] md:h-[50vh] h-[50vh] bg-no-repeat bg-cover bg-center w-full relative`}> 
            <section className="lg:pt-40 md:pt-60 lg:ms-12 md:ms-12 pt-28 ms-12">
                <p className="text-[#ffff] text-sm bg-[#4B6BFB] w-fit font-medium rounded-lg py-2 px-3">
                        Technology
                </p>
                <h1 className="text-[#ffff] lg:text-2xl md:text-2xl sm:text-sm mt-4 lg:font-semibold">
                  The Impact of Technology 
                 <p>on the Workplace: How Technology is Changing</p>
                </h1>
                <div className="flex flex-auto gap-3 mt-4">
                    <p className=" bg-white rounded-2xl">
                        <Avatar icon={<UserOutlined/>} />
                    </p>
                    <p className="text-[#97989F] font-medium text-[16px]">
                        {"Tracey Wilson"}
                    </p>
                    <p className="text-[#97989F] text-[16px]">
                        {"August 20, 2022"}
                    </p>
                </div>
            </section>
        </section>
        <section className="lg:px-[5rem] md:px-[3rem] px-[2rem] mt-5">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </section>
        <div className="flex justify-center mt-3">
             <Link href="/more_post">
                <Button size="large">Load More</Button>
            </Link>
        </div>

        </HomePageLayout>
        </>
    )
}

export default Blog_listing

