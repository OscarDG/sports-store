import { ArrowIcon } from '@/public/arrow'

type ButtonProps = {
    width?: number | string,
    height?: number | string,
    mdwidth?: number | string,
    mdheight?: number | string,
    href: string,
    target?: string,
    text: string
}

export default function BwButton({width, height, mdwidth, mdheight, href, target, text}: ButtonProps){
    return (
        <a href={href} target={target} className={`group relative flex justify-evenly items-center w-[${width}] md:w-[${mdwidth}] min-w-[100px] h-[${height}] md:h-[${mdheight}] bg-mainred drop-shadow-lg`}>
            <span className="flex justify-center items-center w-[15%] h-[40%] rotate-180 transition duration-200 ease-linear group-hover:-translate-x-1">
                <ArrowIcon width={30} height={20} stroke='#ffffff'/>
            </span> 
            <span className="flex items-center w-[60%] h-[100%] z-10 text-[clamp(0.5rem,0.8rem,1rem)] text-mainwhite" >{text}</span>
        </a>
    )
}