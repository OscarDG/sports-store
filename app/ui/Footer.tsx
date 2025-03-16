import { monaSans } from "../fonts"
import Newsletter from "./Newsletter"
import TiktokIcon from "@/public/tiktok"
import InstagramIcon from "@/public/instagram"
import FacebookIcon from "@/public/facebook"

export default function Footer (){

    const currentYear: number = new Date().getFullYear();

    return (
        <footer className={`relative flex flex-col md:flex-row justify-center items-center w-[100%] h-[500px] ${monaSans.className}`}>
            <Newsletter />
            <div className="flex flex-row justify-evenly items-center mb-10 w-[80%] md:w-[40%] h-[20%]">
                <a className='transition duration-200 ease-in hover:scale-105' href="/" target='_blank'><TiktokIcon width={60} height={60} fill={"#000000"}/></a>
                <a className='transition duration-200 ease-in hover:scale-105' href="/" target='_blank'><InstagramIcon width={60} height={60} fill={"#000000"}/></a>
                <a className='transition duration-200 ease-in hover:scale-105' href="/" target='_blank'><FacebookIcon width={70} height={70} fill={"#000000"}/></a>
            </div>
            <div className="absolute flex flex-row justify-center items-center bottom-0 w-[100%] h-[64px] bg-mainred text-mainwhite font-medium">
                <p>Copyright - {currentYear}</p>
            </div>
        </footer>
    )
}