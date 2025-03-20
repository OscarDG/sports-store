import { useState } from "react";
import {useFilter} from '@/app/hooks/useFilter'
import { Products } from "@/app/types"
import Image from "next/image";
import allItems from '@/public/allItems.svg'
import clothes from '@/public/clothes.svg'
import gadget from '@/public/gadget.svg'
import sports from '@/public/sports.svg'
import clsx from "clsx";

type categoriesProducts = {
    products: Products[],
    filter: string
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

    const {setFilters } = useFilter()

    const [activeCategory, setActiveCategory] = useState<string | null>('all')

    const handleToggle = (category: string) => {

        const newActiveCategory = activeCategory === category? 'All' : category

        setActiveCategory(newActiveCategory)

        setFilters((prevState: {category: string}) => ({
            ...prevState,
            category: category
        }))
    }
    
    return (
        <div className="absolute bottom-1 left-12 flex flex-flow w-[80%] md:w-[30%] h-[30%] md:h-[40%] gap-5 mt-5 mb-2 md:mb-2 justify-center">
                <button onClick={() => handleToggle('All')} key={0} value='All' className={clsx(`flex flex-col justify-center items-center w-[30%] md:w-[25%] shrink-1 h-auto p-[10px] cursor-pointer rounded-2xl`, activeCategory === 'all'? 'bg-maingreen/30': `bg-none`)}>
                    <h3>All</h3>
                    <Image src={allItems} alt="All category" width={25} height={25}/>
                </button>
            {
                uniqueProduct.map((product) => {

                    return (
                        <button onClick={() => handleToggle(product.category)} key={product.id} type='button' value={product.category} className={clsx(`flex flex-col justify-center items-center w-[30%] md:w-[25%] shrink-1 h-auto p-[10px] cursor-pointer rounded-2xl bg-gray-200/50`, activeCategory === product.category? 'bg-maingreen/30': 'bg-none')}>
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