import NewsLetterForm from "@/lib/newsLetterForm/NewsLetterForm";
import { Input, Button } from "antd";
import { PiEnvelopeSimpleLight } from "react-icons/pi";

const Footer = () => {


    
  return (
    <>
      <footer className="lg:px-[5rem] md:px-[3rem] px-[2rem] py-[3rem] bg-[#F6F6F7] dark:bg-[#141624]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        <div className="flex flex-col gap-3 h-full">
          <h3 className="text-[#181A2A] dark:text-white font-semibold text-[18px]">About</h3>
          <p className="text-[#696A75] text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div>
            <p className="leading-[1.6]">
              <span className="font-medium">Email</span>: <small className="text-[#696A75]">example@email.com</small>
            </p>
            <p className="leading-[1.6]">
              <span className="font-medium">Phone</span>: <small className="text-[#696A75]">801902345678</small>
            </p>
          </div>
        </div>

        <div className="flex gap-x-12 h-full">
          <div className="flex flex-col gap-3">
            <h3 className="text-[#181A2A] dark:text-white tracking-wider font-semibold text-[18px]">
              Quick Link
            </h3>
            <ul>
                {
                    ["Home", "About", "Blog", "Archived", "Author", "Contact"].map(item=>{
                        return (
                            <li key={item} className="text-[#696A75] text-[16px] leading-[1.75]">{item}</li>
                        )
                    })
                }
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[#181A2A] dark:text-white tracking-wider font-semibold text-[18px]">
              Category
            </h3>
            <ul>
                {
                    ["LifeStyle", "Techonology", "Travel", "Business", "Economy", "Sports"].map(item=>{
                        return (
                            <li key={item} className="text-[#696A75] text-[16px] leading-[1.75]">{item}</li>
                        )
                    })
                }
            </ul>
          </div>
        
        </div>
        <div className="rounded-md bg-white dark:bg-[#242535] p-5 text-center">
            <h3 className="font-semibold text-[16px] tracking-wider">Weekly Newsletter</h3>
            <p className="text-[#696A75] text-[16px]">
            Get blog articles and offers via email
          </p>
          <br />
        <NewsLetterForm />
        </div>
        </div>
        <br />
        <div className="pt-5 flex justify-between items-center border-t border-t-[#DCDDDF] dark:border-t-[#242535]">
            <p className="text-[14px] text-[#696A75]">© Blog {new Date().getFullYear()}. All Rights Reserved.</p>
            <div className="flex gap-">
            <p className="text-[14px] text-[#696A75] px-4 border-e">Terms of Use</p>
            <p className="text-[14px] text-[#696A75] px-4 borde">Privacy and Policy</p>
            {/* <p className="text-[16px] text-[#3B3C4A] px4 border-e">CookiePolicy</p> */}
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
