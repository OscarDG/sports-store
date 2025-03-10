
type svgProps = {
    width: number,
    height: number,
    stroke: string
}

export const ArrowIcon = ({width, height, stroke}: svgProps) => {
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    )
}
