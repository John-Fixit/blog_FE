import HomePageLayout from "../layouts/HomePageLayout/layout"
import { Button, Flex, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PostCard from "@/components/PostCard/PostCard";
import { Card } from 'antd';

// type SinglePost ={
//     singlePost:object;
// }

const Single_post:React.FC = () => {

  return (
    <>
        <HomePageLayout >
            <h1>Single post pages</h1>
            <div className="lg:ms-20 md:ms-15 sm:ms-10 ms-10">
                <Button type="primary">Technology</Button>
                <h1 className="font-semibold lg:text-2xl md:text-2xl sm:text-2xl text-sm mt-3">The Impact of Technology on the Workplace:
                <p>How Technology is Changing</p> </h1>
                <div className="flex lg:gap-6 md:gap-4 gap-6 items-center flex-wrap">
                <div className="flex gap-2 items-center mt-3">
                    <div className="w-[36px]">
                        <Avatar icon={<UserOutlined />} />
                    </div>
                    <p className="text-[#97989F] font-medium text-[16px]">{"Tracey Wilson"}</p>
                    </div>
                    <p className="text-[#97989F] text-[16px]">{"August 20, 2022"}</p>
                </div>

                {/* just put it there after the api we use the image inside it  */}
                <section className="mt-5">
                    <PostCard/>
                </section>
                <p className="font-light">Travelling is an enriching event that open up new horizons,exposes us to different cultures,
                    and overwelhimg,especially  if you don't paln and prepares adequately.in this blog article,
                    we'll explore tips and tricks for a memorable journey and how to make most of your travels</p>
                <h1 className="font-semibold text-1xl mt-3">Research your Destination</h1>
                <h1 className="font-semibold text-1xl mt-3">Plan your itinerary</h1>
                <div className="mx-auto w-12/12 mb-5 text-center ps-3 pe-3 bg-[#F6F6F7] dark:text-black rounded-md">
                    <section>
                        {
                            <div>Traveling can expose you to new environment and potential health risk, so as it's crucial to take precautions to stay safe and healthy</div>
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


