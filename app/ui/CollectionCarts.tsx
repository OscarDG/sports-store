'use client'
import { monaSans } from "../fonts"
import FwButton from "@/app/ui/FwButton"
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
                <div className="absolute bottom-3 right-5 flex flex-row justify-center h-[10%]">
                    <FwButton width={100} height={100} href="/" target="_blank" text="See more"/>
                </div>
            </div>
        )
}