import { Products } from "../types"
import Image from "next/image";

type categoriesProducts = {
    products: Products[]
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
    
    return (
        <div className="absolute bottom-0 left-3 md:left-10 flex flex-row justify-evenly items-center w-[95%] h-[25%] md:h-[40%]">
            {
                uniqueProduct.map((product) => {
                    return (
                        <div key={product.id} className="flex flex-col justify-center items-center w-[10%] h-auto">
                            <h3>{product.category}</h3>
                            <Image className='w-[20px] h-[20px]' src={product.thumb} alt="Category thumb" width={10} height={10}/>
                        </div>
                    )
            })
        }
        </div>
    )
}