'use client'
import { monaSans } from "../fonts"
import { Products } from "@/app/types"
import { useState } from "react"
import clsx from "clsx"
import FwButton from "@/app/ui/FwButton";
import BwButton from "@/app/ui/BwButton";
import Image from "next/image";

type cartProducts = {
    product: Products,
    name: string,
}


export default function Cart({product, name}: cartProducts) {

    const [items, setItems] = useState<Products[]>([]);

    const handleAddToCart = (product: Products) => {
        setItems((prevItems) => [...prevItems, product]);
    };

    if (!name) {
        return <div>Product name is not provided</div>;
    }

    if (!product) {
        throw new Error("Product not found");
    }

    return (
        <section className={`product_section flex flex-row w-[100%] h-[95vh]`}>
                    <div className="product_image flex flex-col justify-evenly items-center w-[50%] drop-shadow-md">
                        <div className="w-[80%] h-[80%] overflow-hidden rounded-2xl">
                            <Image className='object-cover w-[100%] h-[100%]' src={`/${product.tag}.webp`} width={400} height={500} alt={product.name} />
                        </div>
                    </div>
                    <div className={`${monaSans.className} product_info relative flex flex-col justify-evenly items-center w-[50%]`}>
                        <h2 className="absolute top-30 left-2 w-[400px] h-auto pb-2 text-3xl border-b-1">{product.name}</h2>
                        <span className={clsx(product.category === 'Sports' ? `bg-yellow-500`: product.category === 'Gadgets'? 'bg-green-300' : product.category === 'Clothes'? 'bg-mainred': null, `absolute top-31 right-60 flex items-center w-auto h-auto p-2 rounded-4xl text-[0.8rem]`)}>{product.category}</span>
                        <p className="absolute top-45 left-2 w-[400px]">{product.description}</p>
                        <p className="absolute top-70 left-2 w-[200px] text-[1.2rem] font-bold">${product.price} USD</p>
                        <div className="absolute bottom-40 left-2 flex flex-row justify-between w-[50%]">
                            <div className="w-[35%] h-[50px]">
                                <BwButton width={'100%'} height={100} href="/store" text="Go back"/>
                            </div>
                            <div className="w-[35%] h-[50px]">
                                <FwButton onClick={() => handleAddToCart(product)} width={'100%'} height={100} href='' text='Buy it'/>
                            </div>
                        </div>
                        {items.length > 0 && (
                            items.map((item, index) => (
                                <div key={index} className="absolute bottom-0 left-2 w-[400px] h-auto p-2 bg-gray-100 rounded-md shadow-md">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">Price: ${item.price} USD</p>
                                    <p className="text-sm text-gray-500">Category: {item.category}</p>
                                    <p className="text-sm text-gray-500">Description: {item.description}</p>
                                    <p className="text-sm text-gray-500">Tag: {item.tag}</p>
                                </div>
                            )))}
                    </div>
                </section> 
    )
}

    

