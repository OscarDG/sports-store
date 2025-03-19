import { useState } from "react";
import { Products } from "@/app/types"
import Image from "next/image";
import clothes from '@/public/clothes.svg'
import gadget from '@/public/gadget.svg'
import sports from '@/public/sports.svg'
import clsx from "clsx";

type categoriesProducts = {
    products: Products[],
}

export default function Categories({products}:categoriesProducts){

    const uniqueProduct = [];
    const seenCategories = new Set();

    for (const product of products){
        if(!seenCategories.has(product.category)){
            uniqueProduct.push(product);
            seenCategories.add(product.category)
        }
    }

    const [active, setActive] = useState<{[key: string]: boolean}>({})

    const handleToggle = (category: string) => {
        setActive((prev) => ({
            ...prev,
            [category]: !prev[category]
        }));
    }
    
    return (
        <div className="absolute bottom-5 left-3 md:left-7 flex flex-row justify-evenly md:justify-center items-center md:gap-5 w-[95%] md:w-[40%] h-[25%] md:h-[40%]">
            {
                uniqueProduct.map((product) => {

                    const isActive = active[product.category] || false;

                    return (
                        <button onClick={() => handleToggle(product.category)} key={product.id} className={clsx(`flex flex-col justify-center items-center w-[18%] md:w-[13%] h-auto p-[10px] cursor-pointer rounded-2xl bg-gray-200/50`, isActive? 'bg-maingreen/30': 'bg-none')}>
                            <h3>{product.category}</h3>
                            {
                                product.category === 'Clothes'? <Image src={clothes} alt="clothes category" width={25} height={25}/> : product.category === 'Gadgets'? <Image src={gadget} alt="clothes category" width={25} height={25}/> : product.category === 'Sports'? <Image src={sports} alt="clothes category" width={25} height={25}/> : null
                            }
                        </button>
                    )
            })
        }
        </div>
    )
}