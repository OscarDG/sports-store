'use client';
import SearchBar from "./SearchBar"
import Categories from "./Categories";
import BwButton from "@/app/ui/BwButton";
import { Products } from "../types";
import { CartIcon } from "@/public/cart"
import { monaSans } from "../fonts"
import clsx from "clsx"

type headerProducts = {
    products: Products[]
}

export default function StoreHeader({products}:headerProducts){

    return (
        <header className={clsx(`${monaSans.className} relative flex flex-col items-center w-[100%] h-[42vh] md:h-[25vh] pt-5 shadow-sm`)}>
            <nav className="header_navbar flex flex-col md:flex-row md:justify-between items-center w-[95%] h-[35%] md:h-[50%] p-2">
                <div className="header_buttons absolute top-7 md:bottom-2 md:right-15 flex flex-row items-center w-[80%] md:w-[20%] h-[25%] md:h-[30%]">
                    <div className="absolute w-[40%] h-[80%]">
                        <BwButton width={100} height={100} href="/" target="_self" text="Go back"/>
                    </div>
                    <div className="absolute right-0 flex flex-col justify-center items-center w-[20%] md:w-[18%] max-w-[75px] md:max-w-[70px] min-w-[40px] h-[90%] md:h-[90%] rounded-[100%] bg-mainred transition duration-200 ease-in hover:scale-105">
                        <span className={clsx(products.length <= 0? `hidden`:`absolute flex justify-center items-center text-[0.6rem] text-mainwhite font-medium top-[-5px] right-[0px] w-[15px] h-[15px] rounded-[100%] bg-maingreen`)}>{products.length}</span>
                        <button className='flex justify-center items-center w-[60px] md:w-[40px] h-[60px] md:h-[40px] cursor-pointer'><CartIcon width={'60%'} height={'60%'} stroke="#ffffff"/></button>
                    </div>
                </div>
                <SearchBar />
            </nav>
            <Categories products= {products}/>
        </header>
    )
}