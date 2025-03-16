'use client'
import { monaSans } from "../fonts"
import { ArrowIcon } from "@/public/arrow"
import Image from "next/image"

interface CollectionProps{
    collection: {
        id: number,
        text: string,
        thumb: string
    };
}

export default function CollectCart({collection}: CollectionProps){
    return(
            <div className={`${monaSans.className} relative flex justify-center items-center w-[80%] md:w-[30%] h-[300px] md:h-[350px] rounded-2xl overflow-hidden`} key={collection.id}>
                <Image className="absolute w-[100%] h-[100%]" src={collection.thumb} width={5452} height={3635} alt="Collection Image" />
                <div className="absolute inset-0 bg-black/30"></div>
                <p className="absolute w-[80%] h-auto text-[2rem] text-mainwhite text-center z-2">{collection.text}</p>
                <a className='absolute flex flex-row justify-evenly w-[40%] max-w-[130px] md:w-[32%] md:max-w-[130px] h-auto pt-2 pb-2 pl-3 pr-3 text-mainwhite bg-mainred z-2 bottom-3 right-5' href="/" target="_blank">
                <span>
                    Be part
                </span>
                <span className="w-[30px] transition duration-200 ease-linear hover:translate-x-2">
                    <ArrowIcon width={30} height={25} stroke="#ffffff"/>
                </span></a>
            </div>
        )
}