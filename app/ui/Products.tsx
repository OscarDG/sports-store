'use client';
import { Products } from "../types";
import { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import FwButton from "@/app/ui/FwButton";
import Image from "next/image";
import clsx from "clsx";

type headerProducts = {
    products: Products[]
}

export default function ProductsSect({products}:headerProducts){

    const [initialProducts] = useState(products)
    const {filterProducts} = useFilter()
    const filteredProducts = filterProducts(initialProducts)

    return (
        <section className="relative flex flex-col justify-center items-center w-[100%] h-[120vh] overscroll-contain">
        <div className="flex md:flex-row flex-col justify-start md:justify-evenly items-center md:flex-wrap w-[95%] h-[100%] gap-5 pb-12 pt-5 overflow-y-auto scrollbarhide">
            {filteredProducts.map((product) => (
                <div key={product.id} className={`group relative flex flex-col justify-evenly items-center w-[75%] max-w-[300px] md:w-[30%] md:max-w-[500px] h-[60%] max-h-[350px] md:h-[50%] md:max-h-[550px] min-h-[300px] rounded-2xl bg-gray-200 overflow-hidden cursor-pointer`}>
                    <div className="absolute bottom-2 right-15 md:right-10 w-[20%] h-[10%] z-10">
                        <FwButton width={'50'} height={'100'} href="/" text='Buy Now'/>
                    </div>
                    <Image src={`/${product.tag}.jpg`} alt={product.name} width={300} height={300} className="w-full h-full object-cover transition duration-150 group-hover:scale-120" />
                    <div className="absolute bottom-0 left-0 pl-3 flex flex-col justify-evenly bg-black w-full h-[80px] mask-faded-top"></div>
                    <h2 className="absolute bottom-8 left-3 flex justify-start items-center w-auto h-[20px] text-center text-mainwhite">{product.name}</h2>
                    <p className=" absolute bottom-2 left-3 w-[20%] min-w-[65px] h-[20px] text-mainwhite">$ {product.price}</p>
                    <span className={clsx(product.category === 'Sports'? `bg-yellow-500` : product.category === 'Gadgets'? 'bg-green-300' : product.category === 'Clothes'? 'bg-mainred': null, 'absolute top-0 right-0 flex justify-center items-center w-[12%] h-[5%] rounded-bl-[10px] text-[0.6rem] text-mainwhite')}>{product.category}</span>
                </div>
            ))}
        </div>
        </section>
    )
}