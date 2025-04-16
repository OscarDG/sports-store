'use client'
import { CartProvider } from "@/app/context/CartContext"
import Checkout from "@/app/ui/Checkout"

export default function CheckOutPage(){

    return (
        <main className="container flex flex-row justify-center items-center w-[100%] h-[100vh]">
            <CartProvider>
                <Checkout />
            </CartProvider>
        </main>
    )
}