import Link from 'next/link'
import { ArrowIcon } from '@/public/arrow'

type ButtonProps = {
    width?: number | string,
    height?: number | string,
    href: string
    target?: string,
    text: string
    onClick?: () => void
}

export default function FwButton({width, height, href, target, text, onClick}: ButtonProps){
    return onClick ?(
        <button onClick={onClick} className={`group relative flex justify-evenly items-center w-[${width}] min-w-[80px] h-[${height}%] bg-mainred drop-shadow-lg pr-1 cursor-pointer`}>
            <span className="flex items-center w-[60%] h-[100%] z-10 text-[clamp(0.5rem,0.8rem,1rem)] text-mainwhite ml-2" >{text}</span>
            <span className="flex justify-center items-center w-auto h-auto transition duration-200 ease-linear group-hover:translate-x-1">
                <ArrowIcon width={30} height={20} stroke='#ffffff'/>
            </span> 
        </button>)
        :
        (<Link href={href} target={target} className={`group relative flex justify-evenly items-center w-[${width}] min-w-[80px] h-[${height}%] bg-mainred drop-shadow-lg pr-1 cursor-pointer`}>
            <span className="flex items-center w-[100%] h-[100%] z-10 text-[clamp(0.5rem,0.8rem,1rem)] text-mainwhite ml-2" >{text}</span>
            <span className="flex justify-center items-center w-auto h-auto transition duration-200 ease-linear group-hover:translate-x-1">
            <ArrowIcon width={30} height={20} stroke='#ffffff'/>
            </span> 
        </Link>
        )
}