import HomePageLayout from "../layouts/HomePageLayout/layout"
import { Card } from 'antd';
import PostCard from "@/components/PostCard/PostCard";
import { UserOutlined } from '@ant-design/icons';
import{ Avatar} from "antd";

export const metadata={
    title:"Author Page"
}

const Author_page:React.FC =()=>{
    return(
        <> <HomePageLayout >
           
            <h1>Author Pages</h1>

            <div className="bg-[#F6F6F7] dark:text-black rounded-lg w-10/12 h-36  mx-auto">
                <div className="text-center">
                    <div className="flex flex-row lg:ms-80 md:ms-36 sm:ms-28 ms-10 pt-10">
                        <div className="w-[50px]">
                            <Avatar icon={<UserOutlined />} />
                        </div>
                        <p>{
                            <div>John Fixit</div>
                        }</p>
                        <div>colaborator and editor</div>
                    </div>
                    <section>
                        {
                            <div>
                                Meet John Fixit, a passionate writer and blogger with a love for
                                technology and travel.
                            </div>
                        }
                        <div className="flex flex-row gap-2 justify-center">
                            <div>Facebook</div>
                            <div>Twitter</div>
                            <div>Instagram</div>
                            <div>Youtube</div>
                        </div>
                    </section>
                </div>
            </div>
            <section className="lg:px-[5rem] md:px-[3rem] px-[2rem] py-[5rem]">
                <h1 className="text-2xl md:text-3xl font-bold mb-5">
                    Latest Post
                </h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </section>
              
        </HomePageLayout>
        </>
    )
}

export default Author_page