'use client';
import { useState, useEffect } from "react"
import Link from "next/link"
import SearchBar from "./SearchBar"
import Categories from "./Categories";
import { Products } from "../types";
import { CartIcon } from "@/public/cart"
import { ArrowIcon } from "@/public/arrow";
import { monaSans } from "../fonts"
import clsx from "clsx"

type headerProducts = {
    products: Products[]
}

export default function StoreHeader({products}:headerProducts){

    const [sticky, setSticky] = useState(false)
    
        useEffect(() => {
            const handleScroll = () => {
            if(window.scrollY > 580){
                setSticky(true)
            }else{
                setSticky(false)
            };
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <header className={clsx(`${monaSans.className} fixed flex md:flex-row flex-col items-center w-[100%] h-[35%] md:h-[30%] pt-5 z-20 border-b-1`, sticky? `bg-mainwhite`: `bg-transparent`)}>
            <nav className="md:absolute md:right-[2%] md:top-[20%] flex flex-row justify-around md:justify-evenly items-center w-[100%] md:w-[20%] mb-[25%] md:mb-0">
                <div className="group flex flex-row justify-evenly items-center w-[29%] md:w-[120px] h-[85%] md:h-[40px] rounded-2xl pr-2 pl-2 bg-mainred text-mainwhite cursor-pointer">
                    <span className="w-[20px] h-[20px] rotate-180 transition duration-200 ease-linear group-hover:-translate-x-1"><ArrowIcon width={'100%'} height={'100%'} stroke={'#ffffff'}/></span>
                    <Link href="/">Go home</Link>
                </div>
                <div className="relative flex justify-center items-center w-[60px] md:w-[40px] h-[60px] md:h-[40px] rounded-[100%] bg-mainred transition duration-100 ease-in hover:scale-110">
                    <span className={clsx(products.length <= 0? `hidden`:`absolute flex justify-center items-center text-[0.6rem] text-mainwhite font-medium top-[-5px] right-[0px] w-[15px] h-[15px] rounded-[100%] bg-maingreen`)}>{products.length}</span>
                    <button className='flex justify-center items-center w-[60px] md:w-[40px] h-[60px] md:h-[40px] cursor-pointer'><CartIcon width={'60%'} height={'60%'} stroke="#ffffff"/></button>
                </div>
            </nav>
            <SearchBar />
            <span className="absolute bottom-28 w-[80%] md:w-0 h-[1px] md:h-0 bg-gray-300"></span>
            <Categories products= {products}/>
        </header>
    )
}