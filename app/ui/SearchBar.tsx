import Lookicon from "@/public/look"
import { useFilter } from "../hooks/useFilter"
import { useState } from "react"


export default function SearchBar(){

    const {setFilters } = useFilter()

    const [searchProduct, setSearchProduct] = useState<string>('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const searchValue = e.target.value.toLowerCase()

        setSearchProduct(searchValue)

        setFilters((prevState: {name: string}) => ({
            ...prevState,
            name: searchValue
        }))
}

    return (
        <div className='search_bar absolute top-28 md:top-3 md:left-18 flex flex-row justify-center items-center w-[80%] md:w-[50%] h-[20%] md:h-[25%] rounded-[20px] border-1 border-gray-400'>
            <span className="flex absolute left-3 justify-center items-center w-[30px] h-[30px] mr-3"><Lookicon width={20} height={20} fill="#F45B69"/></span>
            <input className='w-[100%] h-[100%] pl-15 focus:bg-mainred/30 rounded-2xl border-0 outline-none' type="text" placeholder="Look for your products" value={searchProduct} onChange={handleSearch}></input>
        </div>
    )
}