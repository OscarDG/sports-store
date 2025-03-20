'use client';
import { Products } from "../types";
import { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import clsx from "clsx";

type headerProducts = {
    products: Products[]
}

export default function ProductsSect({products}:headerProducts){

    const [initialProducts] = useState(products)
    const {filterProducts} = useFilter()
    const filteredProducts = filterProducts(initialProducts)

    return (
        <section className="relative flex flex-col justify-center items-center w-[100%] h-[120vh]">
        <div className="flex md:flex-row flex-col justify-evenly items-center md:flex-wrap w-[95%] h-[100%] gap-5 pb-5 pt-5">
            {filteredProducts.map((product) => (
                <div key={product.id} className="relative flex flex-col justify-evenly items-center w-[75%] max-w-[300px] md:w-[30%] md:max-w-[500px] h-[60%] md:h-[50%] rounded-2xl bg-gray-200">
                    <h2 className="absolute bottom-10 left-3 flex justify-start items-center w-auto h-[20px] text-center text-mainwhite">{product.name}</h2>
                    <p className="absolute bottom-4 left-3 flex justify-start items-center w-auto h-[20px] text-mainwhite">$ {product.price}</p>
                    <span className={clsx(product.category === 'Sports'? `bg-blue-400` : product.category === 'Gadgets'? 'bg-green-300' : product.category === 'Clothes'? 'bg-pink-300': null, 'absolute -top-1 -right-1 flex justify-center items-center w-[12%] h-[5%] rounded-2xl text-[0.6rem] text-mainwhite')}>{product.category}</span>
                </div>
            ))}
        </div>
        </section>
    )
}