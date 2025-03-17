'use client';

import CollectCart from "@/app/ui/CollectionCarts";
import { monaSans } from "@/app/fonts";

export default function Collection (){
    
    const collections = [
        {
            id: 1,
            text: "Discipline",
            thumb: "/cycling.webp"   
        },
        {
            id: 2,
            text: "High Performance",
            thumb: "/basketball.webp"
        },
        {
            id: 3,
            text: "Fun moments",
            thumb: "/skates.webp" 
        },
        {
            id: 4,
            text: "Adventure",
            thumb: "/cycling.webp"
        }

    ]

    return (
        <section className="relative flex flex-col justify-evenly items-center w-[100%] h-auto min-h-[100vh]">
            <h1 className={`${monaSans.className} w-[80%] h-[10%] text-center text-[2rem] font-medium mt-20`}>COLLECTION</h1>
            <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center w-[90%] h-auto min-h-[60vh] pt-20 pb-20 gap-y-20">
                {
                        collections.map((collection) => {
                            return (
                                <CollectCart key={collection.id} collection = {collection}/>
                            )
                    })
                }
            </div>
            <div className="relative flex flex-row w-[100%] h-[250px] bg-[url(/sports.webp)] bg-center bg-no-repeat bg-cover">

            </div>
        </section>
    )
}
