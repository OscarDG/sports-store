'use client';
import FeaturesCart from "./FeaturesCart";
import FabricIcon from "@/public/fabric";
import RecycleIcon from "@/public/recycling";
import TechIcon from "@/public/technology";

export default function Features(){
    return (
        <section className="relative flex flex-col justify-evenly items-center w-[100%] h-[250vh] md:h-[150vh]">
            <div className="relative flex flex-col md:flex-row justify-center md:justify-evenly items-center w-[95%] h-auto">
                <FeaturesCart />
            </div>
            <div className="relative flex flex-row flex-wrap justify-evenly items-center w-[100%] h-[400px] md:h-[350px] bg-[url(/sunset.webp)] bg-center bg-no-repeat bg-cover">
                <span className="flex flex-col justify-center items-center w-[20%] md:w-[10%] h-[35%] text-mainwhite md:text-[1.5rem] text-[1rem] gap-2 z-10">
                    <FabricIcon width={'100%'} height={'100%'}/>
                    Design
                </span>
                <span className="flex flex-col justify-center items-center w-[20%] md:w-[10%] h-[35%] text-mainwhite md:text-[1.5rem] text-[1rem] gap-2 z-10">
                    <RecycleIcon width={'100%'} height={'100%'} />
                    Technology
                </span>
                <span className="flex flex-col justify-center items-center w-[20%] md:w-[10%] h-[35%] text-mainwhite md:text-[1.5rem] text-[1rem] gap-2 z-10">
                    <TechIcon width={'100%'} height={'100%'}/>
                    Technology
                </span>
            <div className="absolute inset-0 bg-black/30"></div>
            </div>
        </section>
    )
}