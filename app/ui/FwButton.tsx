import { ArrowIcon } from '@/public/arrow'

type ButtonProps = {
    width?: number | string,
    height?: number | string,
    href: string,
    target?: string,
    text: string
}

export default function FwButton({width, height, href, target, text}: ButtonProps){
    return (
        <a href={href} target={target} className={`group relative flex justify-evenly items-center w-auto min-w-[80px] h-[${height}%] bg-mainred drop-shadow-lg pr-1`}>
            <span className="flex items-center w-[60%] h-[100%] z-10 text-[clamp(0.5rem,0.8rem,1rem)] text-mainwhite ml-2" >{text}</span>
            <span className="flex justify-center items-center w-auto h-auto transition duration-200 ease-linear group-hover:translate-x-1">
                <ArrowIcon width={20} height={20} stroke='#ffffff'/>
            </span> 
        </a>
    )
}