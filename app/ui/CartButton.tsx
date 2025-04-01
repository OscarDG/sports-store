import { CartIcon } from "@/public/cart"

type ButtonProps = {
    width?: number | string,
    height?: number | string,
    mdwidth?: number | string,
    mdheight?: number | string,
    href?: string,
    target?: string,
}

export default function CartButton({width, height, mdwidth, mdheight, href, target}: ButtonProps){
    return (
        <a href={href} target={target} className={`flex justify-center items-center w-[${width}%] md:w-[${mdwidth}%] h-[${height}%] md:h-[${mdheight}%] cursor-pointer`}><CartIcon width={'100%'} height={'70%'} stroke="#ffffff"/></a>
    )
}