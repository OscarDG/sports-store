export function ProductsSkeleton(){
    return (
        <section className="relative flex flex-col justify-center items-center w-[100%] h-[120vh]">
            <div className="flex md:flex-row flex-col justify-evenly items-center md:flex-wrap w-[95%] h-[100%] gap-5 pb-5 pt-5">
                <div className="relative flex flex-col justify-evenly items-center w-[75%] max-w-[300px] md:w-[30%] md:max-w-[500px] h-[60%] max-h-[350px] md:h-[50%] md:max-h-[550px] rounded-2xl bg-gray-200">
                    
                </div>
                <div className="relative flex flex-col justify-evenly items-center w-[75%] max-w-[300px] md:w-[30%] md:max-w-[500px] h-[60%] max-h-[350px] md:h-[50%] md:max-h-[550px] rounded-2xl bg-gray-200">
                    
                </div>
                <div className="relative flex flex-col justify-evenly items-center w-[75%] max-w-[300px] md:w-[30%] md:max-w-[500px] h-[60%] max-h-[350px] md:h-[50%] md:max-h-[550px] rounded-2xl bg-gray-200">
                    
                </div>
            </div>
        </section>
    )
}

export function CategoriesSkeleton(){
    return(
        <div className="absolute bottom-1 left-12 flex flex-flow w-[80%] md:w-[30%] h-[30%] md:h-[40%] gap-5 mt-5 mb-2 md:mb-2 justify-center items-center">
            <button className='flex flex-col justify-center items-center w-[20%] md:w-[25%] h-[75%] md:h-auto p-[10px] cursor-pointer rounded-2xl bg-gray-200'>

            </button>
            <button className='flex flex-col justify-center items-center w-[20%] md:w-[25%] h-[75%] md:h-auto p-[10px] cursor-pointer rounded-2xl bg-gray-200'>

            </button>
            <button className='flex flex-col justify-center items-center w-[20%] md:w-[25%] h-[75%] md:h-auto p-[10px] cursor-pointer rounded-2xl bg-gray-200'>

            </button>
            <button className='flex flex-col justify-center items-center w-[20%] md:w-[25%] h-[75%] md:h-auto p-[10px] cursor-pointer rounded-2xl bg-gray-200'>

            </button>
        </div>
    )
}