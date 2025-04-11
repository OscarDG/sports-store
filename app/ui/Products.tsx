'use client';
import { Products } from "../types";
import { useState, useEffect } from "react";
import { useFilter } from "@/app/hooks/useFilter";
import { useCart } from "@/app/hooks/useProducts";
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

    //set the items added and removed from the cart

    const { cartItems, setCartItems, totalPrice, setTotalPrice, showCart, setShowCart }: { cartItems: Products[], setCartItems: React.Dispatch<React.SetStateAction<Products[]>>, totalPrice: number, setTotalPrice: React.Dispatch<React.SetStateAction<number>>, showCart: boolean, setShowCart: React.Dispatch<React.SetStateAction<boolean>> } = useCart();


    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));
    }, [cartItems])

    const handleAddToCart = (product: Products) => {
        setCartItems((prevItems: Products[]) => [...prevItems, product]);
        setTotalPrice((prevPrice) => prevPrice + product.price);
    };  

    const handleRemoveCart = (product: Products) => {
        setCartItems((prevItems: Products[]) => prevItems.filter(item => item.id !== product.id));
        setTotalPrice((prevPrice) => prevPrice - product.price);
    }

    const handleClearCart = () => {
        setCartItems([]);
        setTotalPrice(0);
        localStorage.removeItem('cartProducts');
    };

    const handleShowCart = () => {
            setShowCart(!showCart);
    };


    return (
        <section className="relative flex flex-col justify-center items-center w-[100%] h-auto overscroll-contain">
        <div className="flex md:flex-row flex-col justify-start md:justify-evenly md:items-start items-center md:flex-wrap w-[95%] md:w-[80%] h-auto gap-5 pb-5 pt-10 overflow-y-auto scrollbarhide">
            {filteredProducts.map((product) => (
                <div key={product.id} className={`group relative flex flex-col justify-evenly items-center w-[75%] max-w-[300px] md:w-[30%] md:max-w-[400px] min-w-[300px] md:min-w-[400px] h-[60%] max-h-[350px] md:h-[50%] md:max-h-[350px] min-h-[350px] md:min-h-[400px] rounded-2xl bg-gray-200 overflow-hidden`}>
                    <div className="absolute bottom-3 right-8 md:right-5 w-[25%] h-[10%] z-10">
                        <FwButton href={''} onClick={() => handleAddToCart(product)} width={'50'} height={'100'} text='Add item'/>
                    </div>
                    <Image src={`/${product.tag}.webp`} alt={product.name} width={400} height={500} className="w-[400px] h-[500px] object-cover transition duration-150 group-hover:scale-120" />
                    <div className="absolute top-0 left-0 hidden flex-col justify-center items-center w-full h-full bg-black/50 transition duration-150 group-hover:flex">
                        <p className="w-[90%] text-center text-mainwhite">{product.description}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 pl-3 flex flex-col justify-evenly bg-black w-full h-[80px] mask-faded-top"></div>
                    <h2 className="absolute bottom-8 left-3 flex justify-start items-center w-auto h-[20px] text-center text-mainwhite">{product.name}</h2>
                    <p className=" absolute bottom-2 left-3 w-[20%] min-w-[65px] h-[20px] text-mainwhite">$ {product.price}</p>
                    <span className={clsx(product.category === 'Sports'? `bg-yellow-500` : product.category === 'Gadgets'? 'bg-green-300' : product.category === 'Clothes'? 'bg-mainred': null, 'absolute top-0 right-0 p-2 flex justify-center items-center w-auto h-[5%] rounded-bl-[10px] text-[0.6rem] text-mainwhite')}>{product.category}</span>
                </div>
            ))}
        </div>
        <div className={clsx("absolute flex flex-col items-center -top-10 right-2 z-20", showCart ? "block" : "hidden")}>
            <span className="absolute top-3 left-5 flex justify-center items-center w-[25px] rounded-[100%] bg-mainred text-mainwhite cursor-pointer" onClick={() => handleShowCart()}>X</span>
            {cartItems.length > 0 ? (
                <div className="flex flex-col justify-center items-center w-[400px] h-auto gap-2 rounded-2xl bg-gray-200 p-5 shadow-md">
                    <h2 className="text-center text-mainred font-bold">Your cart</h2>
                    {cartItems.map((item, index) => (
                        <div key={index} className="relative flex flex-col justify-evenly w-[80%] h-auto p-2 bg-gray-100 rounded-md shadow-md">
                            <span className="absolute top-2 right-5 text-maingreen font-bold cursor-pointer" onClick={() => handleRemoveCart(item)}>x</span>
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-500">Price: ${item.price} USD</p>
                            <p className="text-sm text-gray-500">Category: {item.category}</p>
                            <p className="text-sm text-gray-500">Description: {item.description}</p>
                            <p className="text-sm text-gray-500">Tag: {item.tag}</p>
                        </div>
                    ))}
                    <h3 className="mb-0 font-bold">Total items: {cartItems.length}</h3>
                    <h3 className="mb-10 font-bold">Total price: $ {Math.round(totalPrice*100)/100}</h3>   
                </div>):(
                <div className="flex flex-col justify-center items-center w-[400px] h-[200px] gap-2 rounded-2xl bg-gray-200 p-5 shadow-md">
                    <h2 className="text-center text-mainred font-bold">Your cart is empty</h2>
                    <p className="text-sm text-gray-500">Add items to your cart</p>
                </div>
                 )}
                 <div className="absolute bottom-2 flex flex-row w-[90%] h-[50px] justify-evenly items-center">
                    <button className="w-[100px] h-[30px] bg-mainred text-white rounded-md cursor-pointer" onClick={() => handleClearCart()}>Clear cart</button>
                    {cartItems.length > 0 && 
                    (
                        <button className="w-[100px] h-[30px] bg-mainred text-white rounded-md cursor-pointer" onClick={() => handleShowCart()}>Checkout</button>
                    )}
                 </div>
        </div>
        </section>
    )
}