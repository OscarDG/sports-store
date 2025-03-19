import Lookicon from "@/public/look"

export default function SearchBar(){
    return (
        <div className='search_bar absolute top-30 md:top-8 flex flex-row w-[80%] md:w-[50%] h-[20%] md:h-[25%]'>
            <span className="flex justify-center items-center w-[30px] h-[30px] mr-3"><Lookicon width={20} height={20} fill="#F45B69"/></span>
            <input className='w-[100%] h-[100%] pl-4 focus:bg-mainred/30 rounded-2xl border-1 border-mainred focus:border-mainred  focus:border-1 outline-none' type="text" placeholder="Look your products"></input>
        </div>
    )
}