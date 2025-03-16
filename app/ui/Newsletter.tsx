import { monaSans } from "../fonts"

export default function Newsletter(){
    return(
            <form className="flex flex-col justify-evenly items-left w-[70%] md:w-[30%] h-[55%] pl-5">
                <h3 className={`${monaSans.className} w-[60%] h-auto text-[1.3rem] md:text-[1.5rem] font-medium`}>Subscribe to our newsletter</h3>
                <input className='w-[90%] h-[18%] pl-[5%] border-1 border-black rounded-sm focus:border-mainred focus:outline-none' type="email" autoComplete="on" placeholder="email"></input>
                <button name='newsletter' type='submit' className='w-[40%] h-[20%] md:h-[15%] text-mainwhite bg-mainred rounded-sm cursor-pointer'>Subscribe</button>
            </form>
    )
}