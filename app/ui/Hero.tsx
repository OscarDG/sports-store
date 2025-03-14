import Link from "next/link"
import { monaSans } from '@/app/fonts'

export default function Hero(){
    return (
        <section className={`${monaSans.className} relative flex flex-col justify-center items-center w-[100%] h-[100vh] bg-[url(@/public/mountain.webp)] bg-center bg-cover`}>
            <div className="flex justify-center w-[20%] h-auto text-center">
                <h1 className="text-mainwhite text-[2rem] md:text-[3rem] font-bold ">EXPLORE</h1>
            </div>
            <div className="absolute bottom-[10%] flex justify-center items-center rounded-[30px] bg-mainred w-[40%] md:w-[15%] h-[8%] md:h-[7%] text-mainwhite transition duration-50 ease-in hover:scale-110 hover:bg-transparent hover:border-1 hover:border-mainred hover:text-mainred">
                <Link href={'/store'}>Watch Products</Link>
            </div>
        </section>
    )
}