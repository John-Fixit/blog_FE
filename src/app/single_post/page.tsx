import HomePageLayout from "../layouts/HomePageLayout/layout"
import { Button, Flex, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Image from "next/image";
import SinglePostCard from "@/components/PostCard/SinglePostCard";
import { Card } from 'antd';

export const metadata={
  title:"Single Post"
}

// type SinglePost ={
//     singlePost:object;
// }

const Single_post:React.FC = () => {

  return (
    <>
        <HomePageLayout >
            <h1>Single post pages</h1>
            <div className="lg:px-[5rem] md:px-[3rem] px-[2rem] py-[5rem] bg-white dark:bg-[#181A2A]">
                <Button type="primary">Technology</Button>
                <h1 className="font-semibold lg:text-2xl md:text-2xl sm:text-2xl text-sm mt-3">The Impact of Technology on the Workplace:
                <p>How Technology is Changing</p> </h1>
                <div className="flex lg:gap-6 md:gap-4 gap-6 items-center flex-wrap">
                  <div className="flex gap-2 items-center">
                    <div className="w-[36px]">
                       <Avatar icon={<UserOutlined />} />
                    </div>
                    <p className="text-[#97989F] font-medium text-[16px]">
                      {"Tracey Wilson"}
                    </p>
                  </div>
                  <p className="text-[#97989F] text-[16px]">
                    {"August 20, 2022"}
                  </p>
                </div>
                {/* just put it there after the api we use the image inside it  */}
                <section className="mt-5">
                  <SinglePostCard/>
                </section>

                <section className="font-serif">

                  <p className="mt-8">
                    Traveling is an enriching event that open up new horizons,exposes us to different cultures,
                    and creates memories that last a lifetime.However traveling can also be stressful and overwhelming, especially if you don't plan and prepares adequately.In this blog article,
                    we'll explore tips and tricks for a memorable journey and how to make most of your travels.
                  </p>
                  <p className="mt-5 mb-5">
                    one of the most rewarding aspects of traveling is immersing yourself in the local culture and customs.
                    This includes trying local cuisine, attending cultural events and festivals,  and interacting with locals. 
                    Learning a new phrases in local language can also go a long way in making connections and showing respect.

                  </p>
                  <h1 className="font-semibold text-1xl mt-3">Research your Destination</h1>
                  <p className="mt-5">
                    Before embarking on you journey, take the time to rearch your destination. 
                    This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations.
                    Doing so will help you navigate your destination with confidence and avoid cultural faux pas. 
                  </p>
                  <p className="mt-5 mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod sint deserunt ipsam culpa quo aut fuga nam, 
                    suscipit alias nulla voluptatum magnam error impedit officia animi velit cum harum!
                  </p>
                  <h1 className="font-semibold text-1xl mt-3">Plan your itinerary</h1>
                  <p className="mt-5">
                    While it's essential to leave room for spontaneity and unexpected adventure, having a rough itinerary can help you make the most of your time and budget. 
                    Identify the most see sights and experiences and prioritize them according to your interests and preference. 
                    This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey. 
                  </p>
                  <p className="mt-5 mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Magni repellendus, eveniet ipsa placeat autem omnis alias quidem odit dolor a quas. Iste, quae quia. Fuga, 
                    maxime possimus architecto vero tenetur perspiciatis quo deleniti maiores vitae ipsa quasi enim, inventore sunt.
                  </p>
                </section>
                <div className="mx-auto w-12/12 mb-5 text-center ps-3 pe-3 bg-[#F6F6F7] dark:text-black rounded-md">
                    <section className="mt-5">
                        {
                            <div className="font-medium p-5">
                                <em>
                                ''Traveling can expose you to new environment and potential health risk, so as it's crucial to take precautions to stay safe and healthy. '' 
                                </em>
                            </div>
                        }
                    </section>
                </div>





                {/* <Card style={{ width: 900 }}>
    
                    <div className= "bg-[#696A75] text-[16px]">
                        {data?.map((post:object)=>(
                            <div>{post.body}</div>
                        ))}
                    </div>
                </Card> */}
            </div>
        </HomePageLayout>
    </>
  )
}
export default Single_post

// want to consume the api since the page to be displaying will change 


// export const GetPost = async()=> {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
//     const data = await res.json()
//     return{
//         props:{data}
//     }
    
// }


