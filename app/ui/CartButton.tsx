import { CartIcon } from "@/public/cart"

type ButtonProps = {
    width?: number | string,
    height?: number | string,
    mdwidth?: number | string,
    mdheight?: number | string,
    onClick?: () => void,
}

export default function CartButton({width, height, mdwidth, mdheight, onClick}: ButtonProps){
    return (
        <button onClick={onClick} className={`flex justify-center items-center w-[${width}%] md:w-[${mdwidth}%] h-[${height}%] md:h-[${mdheight}%] cursor-pointer`}><CartIcon width={'100%'} height={'70%'} stroke="#ffffff"/></button>
    )
}