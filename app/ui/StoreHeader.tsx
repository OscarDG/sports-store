'use client';
import SearchBar from "./SearchBar"
import Categories from "./Categories";
import BwButton from "@/app/ui/BwButton";
import CartButton from "./CartButton";
import { Products } from "../types";
import { CartIcon } from "@/public/cart"
import { monaSans } from "../fonts"
import clsx from "clsx"

type headerProducts = {
    products: Products[]
}

export default function StoreHeader({products}:headerProducts){

    return (
        <header className={clsx(`${monaSans.className} relative flex flex-col items-center w-[100%] h-[40vh] md:h-[25vh] pt-5 shadow-sm`)}>
            <nav className="header_navbar flex flex-col md:flex-row md:justify-between items-center w-[95%] h-[35%] md:h-[50%] p-2">
                <div className="header_buttons absolute top-2 md:top-7 md:right-15 flex flex-row items-center w-[80%] md:w-[15%] h-[25%] md:h-[32%]">
                        <BwButton width={'20%'} height={'75%'} mdwidth={'50%'} mdheight={'75%'} href="/" target="_self" text="Go back"/>
                    <div className="absolute right-0 flex flex-col justify-center items-center w-[15%] max-w-[60px] min-w-[60px] md:w-[24%] md:max-w-[65px] md:min-w-[35px] h-[75%] md:h-[82%] max-h-[70px] md:max-h-[75px] rounded-[100%] bg-mainred transition duration-200 ease-in hover:scale-105">
                        <span className={clsx(products.length <= 0? `hidden`:`absolute flex justify-center items-center text-[0.6rem] text-mainwhite font-medium top-[-5px] right-[0px] w-[15px] h-[15px] rounded-[100%] bg-maingreen`)}>{products.length}</span>
                        <CartButton width={'70%'} height={100} mdwidth={80} mdheight={100} />
                    </div>
                </div>
                <SearchBar />
            </nav>
            <Categories products= {products}/>
        </header>
    )
}