import { ArrowIcon } from '@/public/arrow'

type ButtonProps = {
    width?: number | string,
    height?: number | string,
    minwidth?: number | string,
    minheight?: number | string,
    href: string,
    target?: string,
    text: string,
    onClick?: () => void
}

export default function BwButton({width, height, minwidth, minheight, href, target, text, onClick}: ButtonProps){
    return onClick?(
        <button onClick={onClick} className={`group relative flex justify-evenly items-center w-[${width}%] min-w-[${minwidth}] h-[${height}%] min-h-[${minheight}] bg-mainred drop-shadow-lg pr-1 cursor-pointer`}>
            <span className="flex justify-center items-center w-[15%] h-[40%] cursor-pointer rotate-180 transition duration-200 ease-linear group-hover:-translate-x-1">
                <ArrowIcon width={30} height={20} stroke='#ffffff'/>
            </span>
            <span className="flex items-center w-[60%] h-[100%] z-10 text-[clamp(0.5rem,0.8rem,1rem)] text-mainwhite" >{text}</span>
    </button>

    ):(
        <a href={href} target={target} className={`group relative flex justify-evenly items-center w-[${width}%] min-w-[${minwidth}] h-[${height}%] min-h-[${minheight}] bg-mainred drop-shadow-lg pr-1 cursor-pointer`}>
            <span className="flex justify-center items-center w-[15%] h-[40%] cursor-pointer rotate-180 transition duration-200 ease-linear group-hover:-translate-x-1">
                <ArrowIcon width={30} height={20} stroke='#ffffff'/>
            </span> 
            <span className="flex items-center w-[60%] h-[100%] z-10 text-[clamp(0.5rem,0.8rem,1rem)] text-mainwhite" >{text}</span>
        </a>
    )
}