'use client'
import { CartProvider } from "@/app/context/CartContext"
import Checkout from "@/app/ui/Checkout"

export default function CheckOutPage(){

    return (
        <main className="flex flex-col md:flex-row justify-center items-center w-[100%] h-auto md:h-[100vh]">
            <CartProvider>
                <Checkout />
            </CartProvider>
        </main>
    )
}