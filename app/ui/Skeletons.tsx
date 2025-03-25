export function ProductsSkeleton(){
    return (
        <section className="relative flex flex-col justify-center items-center w-[100%] h-[120vh] md:h-[100vh] overscroll-contain">
            <div className='search_bar absolute top-10 left-15 flex flex-row justify-center items-center w-[70%] md:w-[50%] h-[50px] md:h-[50px] rounded-[20px] border-0 bg-gray-200'>
            </div>
            <div className="absolute top-20 md:top-10 left-15 flex flex-flow w-[300px] md:w-[30%] h-[100px] md:h-[200px] gap-5 mt-5 mb-2 md:mb-2 justify-center items-center">
                <button className='flex flex-col justify-center items-center w-[20%] md:w-[25%] h-[75%] md:h-[70px] p-[10px] cursor-pointer rounded-2xl bg-gray-200'></button>
                <button className='flex flex-col justify-center items-center w-[20%] md:w-[25%] h-[75%] md:h-[70px] p-[10px] cursor-pointer rounded-2xl bg-gray-200'></button>
                <button className='flex flex-col justify-center items-center w-[20%] md:w-[25%] h-[75%] md:h-[70px] p-[10px] cursor-pointer rounded-2xl bg-gray-200'></button>
                <button className='flex flex-col justify-center items-center w-[20%] md:w-[25%] h-[75%] md:h-[70px] p-[10px] cursor-pointer rounded-2xl bg-gray-200'></button>
            </div>
            <div className="absolute top-50 md:top-60 flex md:flex-row flex-col items-center md:items-start md:flex-wrap w-[95%] md:w-[70%] h-[100%] gap-5 pb-5 pt-5">
                <div className="relative flex flex-col justify-evenly items-center w-[75%] max-w-[300px] md:w-[30%] md:max-w-[400px] md:min-w-[400px] h-[60%] max-h-[350px] md:h-[50%] md:max-h-[550px] min-h-[350px] md:min-h-[400px] rounded-2xl bg-gray-200"></div>
                <div className="relative flex flex-col justify-evenly items-center w-[75%] max-w-[300px] md:w-[30%] md:max-w-[500px] md:min-w-[400px] h-[60%] max-h-[350px] md:h-[50%] md:max-h-[550px] min-h-[350px] md:min-h-[400px] rounded-2xl bg-gray-200"></div>
            </div>
        </section>
    )
}
