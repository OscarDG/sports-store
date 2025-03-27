import { useContext } from "react";
import { FiltersContext } from '@/app/context/filterContext'
import {Products} from '@/app/types'


export function useFilter(){

    const {filters, setFilters} = useContext(FiltersContext)//trae los filters del contexto - consume el contexto

    const filterProducts = (initialProducts: Products[]) => {

        return initialProducts.filter(product => {

            const categoryMatch = filters.category === 'All' || product.category === filters.category

            const nameMatch = filters.name === '' || product.name.toLowerCase().includes(filters.name.toLowerCase())


            return (
                nameMatch && categoryMatch
            )
        })
    }
    return {filterProducts, setFilters, filters}
}