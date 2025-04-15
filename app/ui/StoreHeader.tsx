'use client';
import SearchBar from "./SearchBar"
import Categories from "./Categories";
import BwButton from "@/app/ui/BwButton";
import CartButton from "./CartButton";
import { Products } from "../types";
import { monaSans } from "../fonts"
import { useCart } from "@/app/hooks/useProducts";
import clsx from "clsx"

type headerProducts = {
    products: Products[]
}

export default function StoreHeader({products}:headerProducts){

    const {totalItems, showCart, setShowCart}: {totalItems: number, showCart: boolean, setShowCart: React.Dispatch<React.SetStateAction<boolean>>} = useCart()

    const handleShowCart = () => {
        setShowCart(!showCart);
};

    return (
        <header className={clsx(`${monaSans.className} relative flex flex-col items-center w-[100%] h-[40vh] md:h-[25vh] pt-5 shadow-sm`)}>
            <nav className="header_navbar flex flex-col md:flex-row justify-center md:justify-between items-center w-[95%] h-[35%] md:h-[50%] p-2">
                <div className="header_buttons absolute top-5 md:top-7 md:right-15 flex flex-row items-center w-[80%] md:w-[20%] h-[25%] md:h-[32%]">
                    <div className="absolute left-0 flex flex-col justify-center items-center w-[35%] h-[70%]">
                        <BwButton width={100} height={100} minwidth={200} minheight={'300px'} href="/" target="_self" text="Go back"/>
                    </div>
                    <div className="absolute right-0 flex flex-col justify-center items-center w-[15%] max-w-[60px] min-w-[60px] md:w-[18%] md:max-w-[65px] md:min-w-[35px] h-[80%] md:h-[90%] max-h-[70px] md:max-h-[75px] rounded-[100%] bg-mainred transition duration-200 ease-in hover:scale-105">
                        <span className={clsx(totalItems <= 0? `hidden`:`absolute flex justify-center items-center text-[0.6rem] text-mainwhite font-medium top-[-5px] right-[0px] w-[15px] h-[15px] rounded-[100%] bg-maingreen`)}>{totalItems}</span>
                        <CartButton onClick={() => handleShowCart()} width={40} height={100} mdwidth={40} mdheight={100} />
                    </div>
                </div>
                <SearchBar />
            </nav>
            <Categories products= {products}/>
        </header>
    )
}