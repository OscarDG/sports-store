import { Products } from "@/app/types";
import { useCart } from "@/app/hooks/useProducts";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BwButton from "./BwButton";


export default function CheckOut(){

    
    const { cartItems, totalPrice, setTotalPrice}: { cartItems: Products[], totalPrice: number, setTotalPrice: React.Dispatch<React.SetStateAction<number>> } = useCart();

    const [shipping, setShipping] = useState<number>(0)

    const [city, setCity] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [itemsList, setItemsList] = useState<string[]>([])

    useEffect (() => {
        if(city === 'bogota'){
            setShipping(0);
        }else{
            setShipping(10);
        }
    }, [city])

    useEffect(() => {
            const total = cartItems.reduce((acc, item) => {
                return acc + (item.price * item.amount);
            }, 0)

            setTotalPrice(total)

            const list = cartItems.map(item => item.name)

            setItemsList(list)

    }, [cartItems, setTotalPrice])


    const text = encodeURIComponent(`Hola, mi nombre es ${name} me gustaría comprar los siguientes productos: ${itemsList}. Mi dirección de envío es: ${address} (${city}). Compra total: $${totalPrice} + Envío: $${shipping}`)
    const whatsAppText = `https://wa.me/573174048898?text=${text}`

    return(
        <>
        <div className="relative flex flex-col justify-baseline items-center pt-10 gap-2 w-[100%] md:w-[50%] md:h-[100%] h-[100vh] md:border-r-1 md:border-gray-200 bg-mainwhite order-2 md:order-1">
            <div className="flex flex-col items-center w-[80%] md:w-[70%] h-auto p-5 gap-5 border-1 border-gray-200 rounded-2xl">
                <p className="font-bold text-gray-800">Shipping Info</p>
                <div className="flex flex-row justify-evenly items-center w-[90%] h-auto gap-2 border-b-1 border-gray-200">
                    <p className="w-[20%]">Names:</p>
                    <input type="text" placeholder="Name and last name" required value={name} onChange={(e) => setName(e.target.value)} className="w-[60%] h-[30px] text-gray-500"></input>
                </div>
                <div className="flex flex-row justify-evenly items-center w-[90%] h-auto gap-2 border-b-1 border-gray-200">
                    <p className="w-[20%]">Email:</p>
                    <input type="email" placeholder="Contact email" required className="w-[60%] h-[30px] text-gray-500"></input>
                </div>
                <div className="flex flex-row justify-evenly items-center w-[90%] h-auto gap-2 border-b-1 border-gray-200">
                    <p className="w-[20%]">Shipping address:</p>
                    <input type="text" placeholder="Address" required value={address} onChange={(e) => setAddress(e.target.value)} className="w-[60%] h-[30px] text-gray-500"></input>
                </div>
                <div className="flex flex-row justify-evenly items-center w-[90%] h-auto gap-2">
                    <p className="w-[20%]">City:</p>
                    <input type="text" placeholder="Shipping city" required value={city} onChange={(e) => setCity((e.target.value).replace(/[^a-zA-Z ]/g, "").toLowerCase())} className="w-[60%] h-[30px] text-gray-500"></input>
                </div>
            </div>
            <div className="flex flex-col w-[80%] md:w-[70%] h-[40%] p-5 border-1 border-gray-200 rounded-2xl">
                <p className="font-bold text-gray-800 mb-2">Payment methods</p>
                <p>All transactions are safe and are encrypted</p>
                <div>
                    <a></a>
                </div>
            </div>
            <div className="absolute bottom-[10%] flex flex-row justify-around w-[80%] md:w-[55%] h-[45px]">
                <BwButton width={40} height={100} href="/store" text="Back to store"></BwButton>
                <Link href={whatsAppText} target="_blank" className="flex justify-center items-center w-[40%] h-[100%] bg-maingreen text-white cursor-pointer">Purchase</Link>
            </div>
        </div>
        {cartItems.length > 0 ? (
        <div className="flex flex-col justify-evenly items-center md:w-[50%] w-[100%] h-[100vh] md:h-auto p-5 order-1 md:order-2">
            <div className="flex flex-col justify-evenly w-[100%] h-[90%] md:h-auto mb-5 md:border-b-1 md:border-gray-300">
                {cartItems.map((product) => (
                    <div key={product.id} className="flex flex-row items-center justify-around w-[100%] h-auto gap-2 mb-5">
                        <div className="relative flex justify-center w-[15%] max-w-[60px] md:max-w-[90px] h-[100%]">
                            <Image className= "w-[60px] md:w-[80px] max-w-[80px] h-[60px] md:h-[80px] max-h-[80px] rounded-[100%] object-cover" src={`/${product.tag}.webp`} alt={product.name} width={500} height={500}/>
                            <span className="absolute -top-1 -right-0 md:right-3 flex justify-center items-center w-[20px] h-[20px] rounded-2xl bg-mainred text-mainwhite">{product.amount}</span>   
                        </div>
                        <h1 className="w-[30%] text-center"><strong>{product.name}</strong></h1>
                        <p className="w-[20%]"><strong>${product.amount * product.price}</strong></p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-evenly items-center md:mt-10 w-[80%] md:w-[80%] h-[70%]">
                <div className="flex flex-col gap-2">
                    <p><strong>Subtotal:</strong> ${Math.round(totalPrice*100)/100}</p>
                    <p><strong>Shipping:</strong> {shipping === 0 ? 'Free' : `$${shipping}`}</p>
                    <h2><strong className="text-mainred">Total:</strong> ${Math.round((totalPrice + shipping)*100)/100}</h2>
                </div>
                <span className="mt-5 text-[0.7rem]">* The shipping is free for addresses in Bogotá.</span>
            </div>
        </div>
        ):(
            <div className="flex flex-col justify-evenly items-center w-[50%] h-auto">
                <h1>Your cart is empty</h1>
                <div className="flex flex-row w-[22%] h-[40px] bg-amber-200 mt-5">
                    <BwButton width={100} height={100} href="/store" text="Back to store"></BwButton>
                </div>
            </div>
        )}
        </>
    )
}