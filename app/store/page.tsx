'use client';
import { FiltersProvider } from "../context/filterContext";
import StoreCart from '@/app/ui/Store';


export default function Store(){
    return(
        <FiltersProvider>
            <StoreCart />
        </FiltersProvider>      
    )
}