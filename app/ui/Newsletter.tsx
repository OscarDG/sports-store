'use client';
import clsx from "clsx";
import { monaSans } from "../fonts"
import { useState } from 'react'

export default function Newsletter(){  

    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    
        try{

            const response = await fetch("/api/emails", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });


        const contentType = response.headers.get("content-type");
        let data;

        if (contentType && contentType.includes("application/json")){
            data = await response.json();
        }else{
            data = {error: "Invalid response from server"};
        }

        setMessage(data.message || data.error);
        if (response.ok) setEmail('');
        }catch(error){
            console.error("Error: ", error);
            setMessage("Something went wrong, please try again.")
        }
    };

    return(
            <form onSubmit={handleSubmit} className="flex flex-col justify-evenly items-left w-[70%] md:w-[30%] h-[70%] pl-5">
                <h3 className={`${monaSans.className} w-[60%] h-auto text-[1.3rem] md:text-[1.5rem] font-medium`}>Subscribe to our newsletter</h3>
                <input className='w-[90%] h-[18%] pl-[5%] border-1 border-black rounded-sm focus:border-mainred focus:outline-none' type="email" name='email' autoComplete="on" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <button name='newsletter' type='submit' className='w-[40%] h-[20%] md:h-[15%] text-mainwhite bg-mainred rounded-sm cursor-pointer'>Subscribe</button>
                {message && <p className={clsx(`flex flex-col justify-center w-[50%] h-[10%] text-sm mt-2 text-mainwhite text-center`, message.includes('successful!')? 'bg-maingreen': 'bg-mainred', `rounded-3xl`)}>{message}</p>}
            </form>
    )
}