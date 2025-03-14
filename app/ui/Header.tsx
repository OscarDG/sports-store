'use client';

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { monaSans } from "../fonts";
import { CartIcon } from "@/public/cart";


export default function Header(){

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

    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        if(visible === false){
            setVisible(true)
        }else{
            setVisible(false)
        }
    };


    return (
        <header className={clsx(`${monaSans.className} fixed flex flex-row justify-center align-middle w-[100%] h-[15%] z-20`, sticky? `bg-mainwhite/80`: `bg-transparent`)}>
            <nav className="relative flex md:flex-row flex-col justify-center md:justify-end items-end md:items-center w-[100%] h-[100%]">
                <button onClick={handleClick} className="absolute left-2 md:hidden flex flex-col justify-center items-center w-[18%] h-[50%] cursor-pointer">
                    <span className={clsx(visible? `w-[100%] scale-x-0`: `absolute top-[10%] transition-transform ease-in duration-200 scale-x-100 w-[70%] max-w-[70px] h-[5px] rounded-4xl bg-black`)}></span>
                    <span className={clsx(visible? `absolute top-[45%] max-w-[70px] w-[70%] h-[5px] rounded-4xl bg-mainred transition-transform duration-200 ease-in rotate-45`:`absolute top-[45%] max-w-[70px] w-[70%] h-[5px] rounded-4xl bg-black transition-transform duration-200 ease-in rotate-0`)}></span>
                    <span className={clsx(visible? `absolute top-[45%] max-w-[70px] w-[70%] h-[5px] rounded-4xl bg-mainred transition-transform duration-200 ease-in -rotate-45`:`absolute top-[45%] max-w-[70px] w-[70%] h-[5px] rounded-4xl bg-black transition-transform duration-200 ease-in rotate-0`)}></span>
                    <span className={clsx(visible? `w-[100%] scale-x-0`: `absolute bottom-[10%] transition-transform ease-in duration-200 scale-x-100 w-[70%] max-w-[70px] h-[5px] rounded-4xl bg-black`)}></span>
                </button>
                <ul className={clsx(visible? `flex absolute shadow-md bg-white/50`: `hidden md:flex`, `md:relative top-[100%] flex-col justify-evenly items-center w-[100%] h-[120%] text-[1.5rem] md:text-[1.5rem] md:top-[0%] rounded-b-[20px] md:rounded-b-none p-5 list-none md:flex-row md:mr-10 md:w-[40%] md:h-[90%] md:shadow-none md:bg-transparent`)}>
                    <li className={clsx(`relative flex flex-col items-center justify-center w-[18%] h-[90%] text-center mb-2 after:content-[''] after:relative after:w-[90%] after:h-[2px] after:bg-mainred after:rounded-sm after:scale-x-0 after:transition-transform after:duration-300 after:ease-in hover:after:scale-x-100`, sticky && visible && 'text-black', !sticky && !visible && 'text-white')}><a href="/" target="_blank">Home</a></li>  
                    <li className={clsx(`relative flex flex-col items-center justify-center w-[18%] h-[90%] text-center mb-2 after:content-[''] after:relative after:block after:w-[90%] after:h-[2px] after:bg-mainred after:rounded-sm after:scale-x-0 after:transition-transform after:duration-300 after:ease-in hover:after:scale-x-100`, sticky && visible && 'text-black', !sticky && !visible && 'text-white')}><a href="/" target="_blank">Store</a></li>
                </ul>
                <div className="flex justify-center items-center w-[60px] h-[60px] md:mr-20 mr-5 rounded-[100%] bg-mainred scale-100 transition-transform duration-100 ease-in hover:scale-110">
                    <Link href='/store'><CartIcon width={30} height={30} stroke="#ffffff"/></Link>
                </div>
            </nav>
        </header>
    )
};