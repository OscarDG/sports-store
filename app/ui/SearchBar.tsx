import Lookicon from "@/public/look"

export default function SearchBar(){
    return (
        <div className='search_bar absolute top-28 md:top-8 flex flex-row justify-center items-center w-[80%] md:w-[50%] h-[20%] md:h-[25%] rounded-[20px] border-1 border-gray-400'>
            <span className="flex absolute left-3 justify-center items-center w-[30px] h-[30px] mr-3"><Lookicon width={20} height={20} fill="#F45B69"/></span>
            <input className='w-[100%] h-[100%] pl-15 focus:bg-mainred/30 rounded-2xl border-0 outline-none' type="text" placeholder="Look your products"></input>
        </div>
    )
}