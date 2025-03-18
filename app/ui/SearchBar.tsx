import Lookicon from "@/public/look"

export default function SearchBar(){
    return (
        <div className='absolute bottom-32 md:top-[20%] left-[10%] md:left-[10%] flex flex-row justify-between items-center w-[70%] md:w-[30%] h-[40px]'>
            <span className="flex justify-center items-center w-[30px] h-[30px] mr-3"><Lookicon width={20} height={20} fill="#F45B69"/></span>
            <input className='w-[100%] h-[100%] pl-4 focus:bg-mainred/30 rounded-2xl border-1 border-mainred focus:border-mainred  focus:border-1 outline-none' type="text" placeholder="Look your products"></input>
        </div>
    )
}